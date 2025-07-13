const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const sdkSrc = 'node_modules/facebook-nodejs-business-sdk/src';
const generatedPath = 'generated';

const typesFolder = 'types';

// Utility to run shell commands
function run(cmd, shouldWarnOnly = false) {
  console.log(`▶️ Running command: ${cmd}`); // Print the command being run
  try {
    const output = execSync(cmd, { stdio: 'pipe' }).toString();
    console.log(output); // Capture and print output
  } catch (e) {
    if (shouldWarnOnly) {
      console.warn(
        `⚠️ Warning: Command executed with warnings: ${cmd}\n`,
        e.message
      );
    } else {
      console.error(`❌ Command failed: ${cmd}\n`, e.message);
      process.exit(1);
    }
  }
}

function cleanUpGeneratedTemporaryFolders() {
  if (fs.existsSync(generatedPath)) {
    fs.rmSync(generatedPath, { recursive: true });
    console.log(`🧹 Cleaned old ${generatedPath}/`);
  }

  if (fs.existsSync(typesFolder)) {
    fs.rmSync(typesFolder, { recursive: true });
    console.log(`🧹 Cleaned old ${typesFolder}/`);
  }
}

// Copy SDK src to generated/
function copySDKToGenerated() {
  if (fs.existsSync(generatedPath)) {
    fs.rmSync(generatedPath, { recursive: true });
    console.log('🧹 Cleaned old generated/');
  }

  fs.mkdirSync(generatedPath);
  run(`cp -r ${sdkSrc} ${generatedPath}/src`);
  console.log('📁 Copied SDK src to generated/src');

  // Convert .es6 files to .js
  const convertEs6ToJs = (dirPath) => {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        convertEs6ToJs(fullPath);
      } else if (entry.isFile() && fullPath.endsWith('.es6')) {
        const newPath = fullPath.replace('.es6', '.js');
        fs.renameSync(fullPath, newPath);
        console.log(`🔄 Converted: ${fullPath} to ${newPath}`);
      }
    }
  };

  convertEs6ToJs(path.join(generatedPath, 'src'));
  console.log('✅ Converted all .es6 files to .js');
}

function removeObjectKeywordFromGetters(content) {
  return content.replace(/(static get [A-Za-z0-9_]+ \(\)): Object/g, '$1');
}

/**
 * Generic file walker function that applies transformations to files
 * @param {string} rootPath - Root directory to start walking from
 * @param {Function} transformFn - The transformation function to apply to file contents
 * @param {string} fileExtension - File extension to filter (e.g., '.js', '.ts')
 * @param {string} successMessage - Message to display when all transformations are complete
 */
function walkAndTransform(
  rootPath,
  transformFn,
  fileExtension,
  successMessage
) {
  const walk = (currentPath) => {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && fullPath.endsWith(fileExtension)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        const originalContent = content;

        // Apply transformation
        content = transformFn(content, fullPath);

        if (content !== originalContent) {
          fs.writeFileSync(fullPath, content);
          console.log(`🔧 Transformed: ${fullPath}`);
        }
      }
    }
  };

  walk(rootPath);
  console.log(`✅ ${successMessage}`);
}

// Step 1: Replace "static get Fields (): Object {" with "static get Fields () {"
function fixFlowFieldSyntax() {
  walkAndTransform(
    path.join(generatedPath, 'src'),
    (content) => removeObjectKeywordFromGetters(content),
    '.js',
    'Completed Flow field syntax fixes'
  );
}

// Step 2: Convert to .ts using flow-to-ts
function runFlowToTs() {
  const cmd = `npx flow-to-ts --write generated/src/*.js generated/src/**/*.js generated/src/**/**/*.js`;
  run(cmd); // Run the command with the resolved files
}

// Fix Promise return types for Cursor
function fixCursorPromiseTypes(content) {
  return content.replace(/Cursor \| Promise<any>/g, 'Cursor | Promise<Cursor>');
}

// Remove void return type from setters
function removeSetterVoidTypes(content) {
  return content.replace(/set \w+\([^)]+\): void {/g, (match) =>
    match.replace(': void', '')
  );
}

/**
 * Fix Promise return types for CRUD operations (get, update, delete methods)
 * @example
 * Before: get(fields: Array<string>, params: Object = {}): WorkSkill
 * After: get(fields: Array<string>, params: Object = {}): Promise<WorkSkill>
 */
function fixCrudPromiseTypes(content) {
  // Find methods named exactly "get", "update", or "delete"
  // This regex won't match methods like "getName" or "updateSettings"
  return content.replace(
    /\b(get|update|delete)\s*\(([\s\S]*?)\):\s*([^{;]*?)(?=\s*[{;])/g,
    (match, methodName, params, returnType) => {
      // Skip if it's a static method (should be checked by looking at the previous line)
      if (match.includes('static')) {
        return match;
      }

      // If it's already a Promise type, leave it alone
      if (returnType.trim().startsWith('Promise<')) {
        return match;
      }

      // Otherwise, wrap the return type in Promise
      const formattedParams = params.trim();
      const className = returnType.trim();

      return `${methodName}(${formattedParams}): Promise<${className}>`;
    }
  );
}

function addAsyncToPromiseMethods(content) {
  return content.replace(
    /^(\s*)(?!async\s)([a-zA-Z_$][\w$]*)\s*\(([^)]*)\)\s*:\s*Promise<([^>]+)>/gm,
    (match, indent, fnName, args, returnType) => {
      return `${indent}async ${fnName}(${args}): Promise<${returnType}>`;
    }
  );
}

/**
 * Add async keyword to methods and ensure they return Promise<T>
 * @example
 * Before: sendRequest(context: VideoUploadRequestContext): Record<string, any> { ... }
 * After: async sendRequest(context: VideoUploadRequestContext): Promise<Record<string, any>> { ... }
 */
function fixAsyncMethodSignatures(content) {
  // First fix method signatures that return a Promise but don't declare it
  return content.replace(
    /(\basync\s+\w+)\(([^)]*)\):\s*([^{;]*?)(?=\s*[{])/g,
    (match, method, params, returnType) => {
      // Check if return type isn't already marked as a Promise
      if (!returnType.trim().startsWith('Promise<')) {
        return `${method}(${params}): Promise<${returnType.trim()}>`;
      }
      return match;
    }
  );
}

/**
 * Converts parameters with `| undefined` to optional parameters
 * @example
 * Before: sourceObject: null | undefined
 * After: sourceObject?: null
 *
 * Before: sourceObject: string | null | undefined
 * After: sourceObject?: string | null
 */
function convertUndefinedToOptional(content) {
  const sourceFile = ts.createSourceFile(
    'temp.ts',
    content,
    ts.ScriptTarget.Latest,
    true
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const transformer = (context) => {
    const visit = (node) => {
      if (
        (ts.isParameter(node) || ts.isPropertyDeclaration(node)) &&
        node.type &&
        ts.isUnionTypeNode(node.type)
      ) {
        const types = node.type.types;
        const hasUndefined = types.some(
          (type) => type.kind === ts.SyntaxKind.UndefinedKeyword
        );

        if (hasUndefined) {
          const newTypes = types.filter(
            (type) => type.kind !== ts.SyntaxKind.UndefinedKeyword
          );
          const newType = ts.factory.createUnionTypeNode(newTypes);

          if (ts.isParameter(node)) {
            return ts.factory.updateParameterDeclaration(
              node,
              node.modifiers,
              node.dotDotDotToken,
              node.name,
              ts.factory.createToken(ts.SyntaxKind.QuestionToken),
              newType,
              node.initializer
            );
          }

          if (ts.isPropertyDeclaration(node)) {
            return ts.factory.updatePropertyDeclaration(
              node,
              node.modifiers,
              node.name,
              ts.factory.createToken(ts.SyntaxKind.QuestionToken),
              newType,
              node.initializer
            );
          }
        }
      }

      return ts.visitEachChild(node, visit, context);
    };

    return (node) => ts.visitNode(node, visit);
  };

  const result = ts.transform(sourceFile, [transformer]);
  const transformed = result.transformed[0];
  return printer.printFile(transformed);
}

// Remove type annotation on constructor
function removeTypeAnnotationOnConstructor(content) {
  // Using a more robust pattern to capture constructor parameters including complex function types
  return content.replace(
    /constructor\(([\s\S]*?)\):\s*void\s*{/g,
    'constructor($1) {'
  );
}

/**
 * Remove optional mark from parameters with initializers
 * @example
 * Before: createAccountControl(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null = null): Promise<AdAccountBusinessConstraints> {
 * After: createAccountControl(fields: Array<string>, params: Record<string, any> = {}, pathOverride: string | null = null): Promise<AdAccountBusinessConstraints> {
 */
function removeOptionalMarkFromParamsWithInitializer(content) {
  return content.replace(
    /(\w+)\??(\s*:\s*[^=;{]*?)(\s*=\s*[^,;{]*)/g,
    (match, paramName, type, initializer) => {
      // If the parameter has a question mark, remove it
      if (match.includes('?')) {
        return `${paramName}${type}${initializer}`;
      }
      return match;
    }
  );
}

/**
 * Convert Array<T> types to T[]
 * @example
 * Before: fields: Array<string>, params: Record<string, any>
 * After: fields: string[], params: Record<string, any>
 */
function convertArrayGenericToArrayNotation(content) {
  return content.replace(/\bArray<([^<>]+?)>/g, (match, type) => {
    // Ensure we're not modifying types in comments
    // The regex captures the actual type inside Array<>
    return `${type.trim()}[]`;
  });
}

/**
 * Removes JSDoc @extends annotations from comments
 * @example
 * Before:
 * /**
 *  * AdAccount
 *  * @extends AbstractCrudObject
 *  * @see {@link https://developers.facebook.com/docs/marketing-api/}
 *  *\/
 *
 * After:
 * /**
 *  * AdAccount
 *  * @see {@link https://developers.facebook.com/docs/marketing-api/}
 *  *\/
 */
function removeExtendsKeywordFromComments(content) {
  // More precise pattern to match JSDoc @extends lines
  return content.replace(/^ *\* *@extends .*(\r?\n)/gm, '');
}

// List of class names whose constructor arguments should be made optional
const CLASSES_WITH_OPTIONAL_CONSTRUCTOR_PARAMS = [
  'AppData',
  'AttributionData',
  'Content',
  'CustomData',
  'Event',
  'EventResponse',
  'OriginalEventData',
  'UserData',
  'ServerEvent',
  'AbstractCrudObject',
  'ExtendedDeviceInfo',
];
/**
 * Make constructor arguments optional for specified classes
 * Useful for classes that check for undefined in their implementation
 */
function makeConstructorParamsOptionalForSpecifiedClasses(content) {
  if (!CLASSES_WITH_OPTIONAL_CONSTRUCTOR_PARAMS.length) {
    return content;
  }

  // Create a regex pattern for matching the class declarations
  const classPattern = new RegExp(
    ` class (${CLASSES_WITH_OPTIONAL_CONSTRUCTOR_PARAMS.join('|')})`,
    'g'
  );
  let match;

  match = classPattern.exec(content);

  // Find if any of the target classes are in this file
  if (match !== null) {
    const className = match[1];

    // Now find and modify the constructor for this class
    return content.replace(
      new RegExp(`(constructor\\s*\\()([^{]*?)(\\)\\s*{)`, 'g'),
      (fullMatch, start, params, end) => {
        // Add ? to each parameter that doesn't already have it
        const paramList = params.split(',').map((param) => {
          const trimmed = param.trim();
          if (!trimmed || trimmed.includes('?:') || trimmed.includes('= ')) {
            return trimmed; // Already optional or has default
          }
          // Add ? before the type declaration if there is one
          const colonPos = trimmed.indexOf(':');
          if (colonPos > 0) {
            return (
              trimmed.substring(0, colonPos) + '?' + trimmed.substring(colonPos)
            );
          }
          return trimmed + '?';
        });

        return `${start}${paramList.join(', ')}${end}`;
      }
    );
  }

  return content;
}

function removeParenthesisFromTypes(content) {
  return content.replace(/\|\s*\(([^()]+?)\)/g, '| $1').trim();
}

function fixTsFieldSyntax() {
  walkAndTransform(
    path.join(generatedPath, 'src'),
    (content) => {
      // Apply all TypeScript transformations in sequence
      content = fixCursorPromiseTypes(content);
      content = removeSetterVoidTypes(content);
      content = fixCrudPromiseTypes(content);
      content = convertUndefinedToOptional(content);
      content = removeTypeAnnotationOnConstructor(content);
      content = removeOptionalMarkFromParamsWithInitializer(content);
      content = convertArrayGenericToArrayNotation(content);
      content = removeExtendsKeywordFromComments(content);
      content = makeConstructorParamsOptionalForSpecifiedClasses(content);
      content = removeParenthesisFromTypes(content);
      content = addAsyncToPromiseMethods(content);
      content = fixAsyncMethodSignatures(content);
      return content;
    },
    '.ts',
    'Completed TypeScript syntax fixes'
  );
}

// Step 3: Generate .d.ts
function runTsc() {
  //   run(`npx tsc ${generatedPath}/src/**/*.ts --declaration --emitDeclarationOnly --outDir types/src`, true);
  run('npx tsc --project tsconfig.types.json', true);
}

function removeDeclareKeywordFromSpecificClasses(content) {
  const specificClasses = ['AbstractCrudObject'];

  const classPattern = new RegExp(` class (${specificClasses.join('|')})`, 'g');
  let match;

  match = classPattern.exec(content);

  if (match !== null) {
    return content.replace(/declare class/g, 'class');
  }

  return content;
}

// Delete globals.d.ts file if it exists after generation
function deleteGlobalsFile() {
  const globalsPath = path.join(typesFolder, 'generated/src', 'globals.d.ts');
  if (fs.existsSync(globalsPath)) {
    fs.unlinkSync(globalsPath);
    console.log(`🗑️ Deleted globals.d.ts file from ${globalsPath}`);
  } else {
    console.log(`ℹ️ globals.d.ts file not found in ${globalsPath}`);
  }
}

function applyFixesToDefinitionsFiles() {
  // Use the existing walkAndTransform function instead of defining a new walk function
  walkAndTransform(
    path.join(typesFolder, 'generated/src'),
    (content) => removeDeclareKeywordFromSpecificClasses(content),
    '.d.ts',
    'Completed fixing generated declaration files'
  );

  // Delete globals.d.ts file after fixing the generated files
  deleteGlobalsFile();
}

/**
 * Extracts the bundle.d.ts file to the root as index.d.ts
 * Fixes import paths and deletes the original bundle.d.ts file
 */
function extractBundleFileToRootAsIndex() {
  // Define paths properly using the existing variables
  const bundleFilePath = path.join(typesFolder, 'generated/src', 'bundle.d.ts');
  const indexFilePath = path.join(__dirname, '..', 'index.d.ts');

  if (!fs.existsSync(bundleFilePath)) {
    console.log(`⚠️ bundle.d.ts file not found at ${bundleFilePath}`);
    return;
  }

  console.log(`🔍 Found bundle.d.ts at ${bundleFilePath}`);

  // Read bundle.d.ts content
  let bundleContent = fs.readFileSync(bundleFilePath, 'utf8');

  // Fix import paths in the bundle content (replace ./../src/ with ./src/)
  bundleContent = bundleContent.replace(
    /from "\.\/\.\.\/src\//g,
    'from "./src/'
  );

  // Ensure the parent directory exists
  const indexDir = path.dirname(indexFilePath);
  if (!fs.existsSync(indexDir)) {
    fs.mkdirSync(indexDir, { recursive: true });
    console.log(`📁 Created directory: ${indexDir}`);
  }

  // Write the fixed content to index.d.ts
  fs.writeFileSync(indexFilePath, bundleContent);
  console.log(
    `✅ Created index.d.ts at ${indexFilePath} with fixed import paths`
  );

  // Delete the original bundle.d.ts file
  fs.unlinkSync(bundleFilePath);
  console.log(`🗑️ Deleted original bundle.d.ts file`);
}

/**
 * Copies the types/generated/src folder to the root src folder
 * This makes the src folder structure match the imports in index.d.ts
 */
function copyTypesSrcToRoot() {
  const sourceSrcDir = path.join(typesFolder, 'generated/src');
  const targetSrcDir = path.join(__dirname, '..', 'src');

  if (!fs.existsSync(sourceSrcDir)) {
    console.log(`⚠️ Source directory not found: ${sourceSrcDir}`);
    return;
  }

  // Ensure the target directory exists
  if (!fs.existsSync(targetSrcDir)) {
    fs.mkdirSync(targetSrcDir, { recursive: true });
    console.log(`📁 Created target directory: ${targetSrcDir}`);
  }

  // Function to recursively copy directory
  const copyDir = (source, target) => {
    // Create target directory if it doesn't exist
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target, { recursive: true });
    }

    // Get all files and subdirectories in the source directory
    const entries = fs.readdirSync(source, { withFileTypes: true });

    // Process each entry
    for (const entry of entries) {
      const sourcePath = path.join(source, entry.name);
      const targetPath = path.join(target, entry.name);

      if (entry.isDirectory()) {
        // Recursively copy subdirectories
        copyDir(sourcePath, targetPath);
      } else {
        // Copy files
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`📄 Copied: ${sourcePath} → ${targetPath}`);
      }
    }
  };

  // Start the recursive copy
  copyDir(sourceSrcDir, targetSrcDir);
  console.log(
    `✅ Successfully copied types/generated/src to root src directory`
  );
}

function removeTypesFilesFromProject() {
  console.log('🧹 Cleaning up existing type definition files...');

  const indexFilePath = path.join(__dirname, '..', 'index.d.ts');
  const srcDirPath = path.join(__dirname, '..', 'src');

  // Delete index.d.ts if it exists
  if (fs.existsSync(indexFilePath)) {
    fs.unlinkSync(indexFilePath);
    console.log(`🗑️ Deleted existing index.d.ts file at ${indexFilePath}`);
  }

  // Delete src directory if it exists
  if (fs.existsSync(srcDirPath)) {
    fs.rmSync(srcDirPath, { recursive: true, force: true });
    console.log(`🗑️ Deleted existing src directory at ${srcDirPath}`);
  }

  console.log('✅ Cleanup complete');
}

function runAllSteps() {
  removeTypesFilesFromProject(); // First clean up existing type definition files
  cleanUpGeneratedTemporaryFolders();
  copySDKToGenerated();
  fixFlowFieldSyntax();
  runFlowToTs();
  fixTsFieldSyntax();
  runTsc();
  applyFixesToDefinitionsFiles();
  extractBundleFileToRootAsIndex();
  copyTypesSrcToRoot();
  cleanUpGeneratedTemporaryFolders();
}

runAllSteps();

console.log('✅ All done. Types generated in /types');

