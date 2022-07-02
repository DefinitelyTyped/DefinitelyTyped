import * as path from "node:path";
import ts from "typescript";

export function isExternalDependency(file: ts.SourceFile, dirPath: string, program: ts.Program): boolean {
    return !startsWithDirectory(file.fileName, dirPath) || program.isSourceFileFromExternalLibrary(file);
}

export function normalizePath(file: string) {
    // replaces '\' with '/' and forces all DOS drive letters to be upper-case
    return path.normalize(file)
        .replace(/\\/g, "/")
        .replace(/^[a-z](?=:)/, c => c.toUpperCase());
}

function startsWithDirectory(filePath: string, dirPath: string): boolean {
    const normalFilePath = normalizePath(filePath);
    const normalDirPath = normalizePath(dirPath).replace(/\/$/, "");
    return normalFilePath.startsWith(normalDirPath + "/") || normalFilePath.startsWith(normalDirPath + "\\");
}
