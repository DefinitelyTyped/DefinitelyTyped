/// <reference path="typescript.d.ts" />

import * as ts from "typescript";

let process: any;

// A minimal compiler
function compile(fileNames: string[], options: ts.CompilerOptions): void {
    let program = ts.createProgram(fileNames, options);
    let emitResult = program.emit();

    let allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);

    allDiagnostics.forEach(diagnostic => {
        let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
        let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
        console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
    });

    let exitCode = emitResult.emitSkipped ? 1 : 0;
    console.log(`Process exiting with code '${exitCode}'.`);
    process.exit(exitCode);
}

// A simple transform function
const source = "let x: string  = 'string'";

let result = ts.transpile(source, { module: ts.ModuleKind.CommonJS });


// Traversing the AST with a little linter
let readFileSync: any;
function delint(sourceFile: ts.SourceFile) {
    delintNode(sourceFile);

    function delintNode(node: ts.Node) {
        switch (node.kind) {
            case ts.SyntaxKind.ForStatement:
            case ts.SyntaxKind.ForInStatement:
            case ts.SyntaxKind.WhileStatement:
            case ts.SyntaxKind.DoStatement:
                if ((<ts.IterationStatement>node).statement.kind !== ts.SyntaxKind.Block) {
                    report(node, "A looping statement's contents should be wrapped in a block body.");
                }
                break;

            case ts.SyntaxKind.IfStatement:
                let ifStatement = (<ts.IfStatement>node);
                if (ifStatement.thenStatement.kind !== ts.SyntaxKind.Block) {
                    report(ifStatement.thenStatement, "An if statement's contents should be wrapped in a block body.");
                }
                if (ifStatement.elseStatement &&
                    ifStatement.elseStatement.kind !== ts.SyntaxKind.Block &&
                    ifStatement.elseStatement.kind !== ts.SyntaxKind.IfStatement) {
                    report(ifStatement.elseStatement, "An else statement's contents should be wrapped in a block body.");
                }
                break;

            case ts.SyntaxKind.BinaryExpression:
                let op = (<ts.BinaryExpression>node).operatorToken.kind;
                if (op === ts.SyntaxKind.EqualsEqualsToken || op == ts.SyntaxKind.ExclamationEqualsToken) {
                    report(node, "Use '===' and '!=='.")
                }
                break;
        }

        ts.forEachChild(node, delintNode);
    }

    function report(node: ts.Node, message: string) {
        let { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart());
        console.log(`${sourceFile.fileName} (${line + 1},${character + 1}): ${message}`);
    }
}


// Incremental build support using the language services
let fs: any;
function watch(rootFileNames: string[], options: ts.CompilerOptions) {
    const files: ts.Map<{ version: number }> = {};

    // initialize the list of files
    rootFileNames.forEach(fileName => {
        files[fileName] = { version: 0 };
    });

    // Create the language service host to allow the LS to communicate with the host
    const servicesHost: ts.LanguageServiceHost = {
        getScriptFileNames: () => rootFileNames,
        getScriptVersion: (fileName) => files[fileName] && files[fileName].version.toString(),
        getScriptSnapshot: (fileName) => {
            if (!fs.existsSync(fileName)) {
                return undefined;
            }

            return ts.ScriptSnapshot.fromString(fs.readFileSync(fileName).toString());
        },
        getCurrentDirectory: () => process.cwd(),
        getCompilationSettings: () => options,
        getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
    };

    // Create the language service files
    const services = ts.createLanguageService(servicesHost, ts.createDocumentRegistry())

    // Now let's watch the files
    rootFileNames.forEach(fileName => {
        // First time around, emit all files
        emitFile(fileName);

        // Add a watch on the file to handle next change
        fs.watchFile(fileName,
            { persistent: true, interval: 250 },
            (curr: any, prev: any) => {
                // Check timestamp
                if (+curr.mtime <= +prev.mtime) {
                    return;
                }

                // Update the version to signal a change in the file
                files[fileName].version++;

                // write the changes to disk
                emitFile(fileName);
            });
    });

    function emitFile(fileName: string) {
        let output = services.getEmitOutput(fileName);

        if (!output.emitSkipped) {
            console.log(`Emitting ${fileName}`);
        }
        else {
            console.log(`Emitting ${fileName} failed`);
            logErrors(fileName);
        }

        output.outputFiles.forEach(o => {
            fs.writeFileSync(o.name, o.text, "utf8");
        });
    }

    function logErrors(fileName: string) {
        let allDiagnostics = services.getCompilerOptionsDiagnostics()
            .concat(services.getSyntacticDiagnostics(fileName))
            .concat(services.getSemanticDiagnostics(fileName));

        allDiagnostics.forEach(diagnostic => {
            let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
            if (diagnostic.file) {
                let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
                console.log(`  Error ${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
            }
            else {
                console.log(`  Error: ${message}`);
            }
        });
    }
}


// Pretty printer using the LS Formatter
function format(text: string) {
    let options = getDefaultOptions();

    // Parse the source text
    let sourceFile = ts.createSourceFile("file.ts", text, ts.ScriptTarget.Latest, /*setParentPointers*/ true);

    // Get the formatting edits on the input sources
    let edits = (<any>ts).formatting.formatDocument(sourceFile, getRuleProvider(options), options);

    // Apply the edits on the input code
    return applyEdits(text, edits);

    function getRuleProvider(options: ts.FormatCodeOptions) {
        // Share this between multiple formatters using the same options.
        // This represents the bulk of the space the formatter uses.
        let ruleProvider = new (<any>ts).formatting.RulesProvider();
        ruleProvider.ensureUpToDate(options);
        return ruleProvider;
    }

    function applyEdits(text: string, edits: ts.TextChange[]): string {
        // Apply edits in reverse on the existing text
        let result = text;
        for (let i = edits.length - 1; i >= 0; i--) {
            let change = edits[i];
            let head = result.slice(0, change.span.start);
            let tail = result.slice(change.span.start + change.span.length)
            result = head + change.newText + tail;
        }
        return result;
    }

    function getDefaultOptions(): ts.FormatCodeOptions {
        return {
            IndentSize: 4,
            TabSize: 4,
            NewLineCharacter: '\r\n',
            ConvertTabsToSpaces: true,
            InsertSpaceAfterCommaDelimiter: true,
            InsertSpaceAfterSemicolonInForStatements: true,
            InsertSpaceBeforeAndAfterBinaryOperators: true,
            InsertSpaceAfterKeywordsInControlFlowStatements: true,
            InsertSpaceAfterFunctionKeywordForAnonymousFunctions: false,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: true,
            PlaceOpenBraceOnNewLineForFunctions: false,
            PlaceOpenBraceOnNewLineForControlBlocks: false,
        };
    }
}


// Customizing module resolution
let path: any;
function createCompilerHost(options: ts.CompilerOptions, moduleSearchLocations: string[]): ts.CompilerHost {
    return {
        getSourceFile,
        getDefaultLibFileName: () => "lib.d.ts",
        writeFile: (fileName, content) => ts.sys.writeFile(fileName, content),
        getCurrentDirectory: () => ts.sys.getCurrentDirectory(),
        getCanonicalFileName: fileName => ts.sys.useCaseSensitiveFileNames ? fileName : fileName.toLowerCase(),
        getNewLine: () => ts.sys.newLine,
        useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
        fileExists,
        readFile,
        resolveModuleNames
    }

    function fileExists(fileName: string): boolean {
        return ts.sys.fileExists(fileName);
    }

    function readFile(fileName: string): string {
        return ts.sys.readFile(fileName);
    }

    function getSourceFile(fileName: string, languageVersion: ts.ScriptTarget, onError?: (message: string) => void) {
        const sourceText = ts.sys.readFile(fileName);
        return sourceText !== undefined ? ts.createSourceFile(fileName, sourceText, languageVersion) : undefined;
    }

    function resolveModuleNames(moduleNames: string[], containingFile: string): ts.ResolvedModule[] {
        return moduleNames.map(moduleName => {
            // try to use standard resolution
            let result = ts.resolveModuleName(moduleName, containingFile, options, { fileExists, readFile });
            if (result.resolvedModule) {
                return result.resolvedModule;
            }

            // check fallback locations, for simplicity assume that module at location should be represented by '.d.ts' file
            for (const location of moduleSearchLocations) {
                const modulePath = path.join(location, moduleName + ".d.ts");
                if (fileExists(modulePath)) {
                    return { resolvedFileName: modulePath }
                }
            }

            return undefined;
        });
    }
}

