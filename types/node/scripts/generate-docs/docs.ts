import * as cp from "child_process";
import { writeFileSync } from "fs";
import * as fs from "fs";
import { basename, dirname, join } from "path";
import {
    CompilerOptions,
    createCompilerHost,
    createPrinter,
    createProgram,
    factory,
    isSourceFile,
    ModuleDeclaration,
    Node,
    Printer,
    SourceFile,
    transform,
    TransformerFactory,
    TypeChecker,
    visitEachChild,
    visitNode,
    Visitor,
} from "typescript";
import { NodeProcessingContext } from "./ast-processing";
import { isNamedModuleDeclaration, nodeInfo, nodeWarning } from "./ast-utils";
import { DocRoot, loadDocs } from "./node-doc-processing";

function processModule(processingContext: NodeProcessingContext, node: ModuleDeclaration): ModuleDeclaration {
    const visit: Visitor = node => {
        processingContext.processNode(node);
        return visitEachChild(node, visit, processingContext.getTransformationContext());
    };
    return visitNode(node, visit);
}

function transformer(printer: Printer, typeChecker: TypeChecker, rootDocs: DocRoot): TransformerFactory<Node> {
    return transformationContext => {
        const visit: Visitor = node => {
            if (isSourceFile(node)) {
                return visitEachChild(node, visit, transformationContext);
            }
            if (!isNamedModuleDeclaration(node)) {
                return node;
            }
            const moduleName = node.name.text;

            // skip non prefixed modules
            if (moduleName.startsWith("node:") && moduleName !== "node:test") {
                return node;
            }

            nodeInfo(node, `Processing module ${moduleName}`);

            const moduleDocs = rootDocs.modules.find(({ name }) => name === moduleName)!;
            if (!moduleDocs) {
                nodeWarning(node, `Could not match module "${moduleName}" to documented module`);
                return node;
            }
            const context = new NodeProcessingContext({
                indent: 0,
                printer,
                transformationContext,
                typeChecker,
                moduleDocs,
            });
            return processModule(context, node);
        };
        return node => visitNode(node, visit);
    };
}

const ignoreFiles = new Set([
    "index.d.ts", // infra
    "base.d.ts", // infra
    "globals.global.d.ts", // infra
    "assert/strict.d.ts", // re-export only
    "globals.d.ts", // virtual
    "constants.d.ts", // not documented
]);

function findDprint() {
    let p = __dirname;
    while (true) {
        const dprintPath = join(p, "node_modules", "dprint", "bin.js");
        if (fs.existsSync(dprintPath)) {
            return dprintPath;
        }
        const parent = dirname(p);
        if (parent === p) {
            break;
        }
        p = parent;
    }
    throw new Error("Could not find dprint");
}

function format(contents: string) {
    const dprintPath = findDprint();
    return cp.execFileSync(
        process.execPath,
        [dprintPath, "fmt", "--stdin", "ts"],
        {
            stdio: ["pipe", "pipe", "inherit"],
            encoding: "utf-8",
            input: contents,
            maxBuffer: 100 * 1024 * 1024, // 100 MB "ought to be enough for anyone"; https://github.com/nodejs/node/issues/9829
        },
    );
}

async function main() {
    const docs = await loadDocs();

    const { compilerOptions } = require(join(__dirname, "../../tsconfig.json")) as {
        compilerOptions: CompilerOptions;
    };

    compilerOptions.noEmit = false;

    // rewrite libs to exclude dom
    compilerOptions.lib = ["lib.es2021.d.ts"];

    const prog = createProgram({
        rootNames: [join(__dirname, "../../index.d.ts")],
        host: createCompilerHost(compilerOptions, true),
        options: compilerOptions,
    });

    const printer = createPrinter();

    const typeChecker = prog.getTypeChecker();

    const transformers = [transformer(printer, typeChecker, docs)];
    for (const f of prog.getSourceFiles()) {
        const fileName = f.fileName;
        if (fileName.includes("typescript") || ignoreFiles.has(basename(fileName))) {
            continue;
        }
        nodeInfo(f, "Processing file");
        const transformRes = transform(f, transformers);
        writeFileSync(
            fileName,
            format(printer.printBundle(factory.createBundle(transformRes.transformed as SourceFile[]))),
        );
    }
}

main();
