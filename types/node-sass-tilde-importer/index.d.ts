import { ImporterReturnType } from "node-sass";

/**
 * A node-sass custom importer which turns ~ into absolute paths to the nearest parent node_modules directory.
 */
declare function importer(url: string, prev: string): ImporterReturnType;
declare function importer(url: string, prev: string, done: (data: ImporterReturnType) => void): void;

export = importer;
