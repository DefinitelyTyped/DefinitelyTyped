/// <reference path="./typescriptServices.d.ts"/>

// transpile
function transpile(input: string): string {
    return ts.transpile(input, { module: ts.ModuleKind.CommonJS });
}

// compile
function compile(fileNames: string[], options: ts.CompilerOptions): number {
    let program = ts.createProgram(fileNames, options);
    let emitResult = program.emit();

    let allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);

    allDiagnostics.forEach(diagnostic => {
        let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
        let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
        console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
    });

    let exitCode = emitResult.emitSkipped ? 1 : 0;
    return exitCode;
}
