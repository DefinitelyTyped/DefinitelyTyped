import * as path from "node:path";

/**
 * @param {import("typescript").SourceFile} file
 * @param {string} dirPath
 * @param {import("typescript").Program} program
 */
export function isExternalDependency(file, dirPath, program) {
    return !startsWithDirectory(file.fileName, dirPath) || program.isSourceFileFromExternalLibrary(file);
}

/**
 * @param {string} file
 */
export function normalizePath(file) {
    // replaces '\' with '/' and forces all DOS drive letters to be upper-case
    return path.normalize(file)
        .replace(/\\/g, "/")
        .replace(/^[a-z](?=:)/, c => c.toUpperCase());
}

/**
 * @param {string} filePath
 * @param {string} dirPath
 */
function startsWithDirectory(filePath, dirPath) {
    const normalFilePath = normalizePath(filePath);
    const normalDirPath = normalizePath(dirPath).replace(/\/$/, "");
    return normalFilePath.startsWith(normalDirPath + "/") || normalFilePath.startsWith(normalDirPath + "\\");
}
