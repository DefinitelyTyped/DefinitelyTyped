/// <reference types="node" />
import fs from "fs";

export interface FileSystem {
    readdir: typeof fs.readdir;
    stat: typeof fs.stat;
}

export interface File {
    name: string;
    type: "file";
}

export interface Folder {
    name: string;
    type: "folder";
    children: Array<File | Folder>;
}

export interface Total {
    files: number;
    folders: number;
}

export function getStructure(
    fs: FileSystem,
    dir: string,
    callback: (error: NodeJS.ErrnoException) => void,
): void;

export function getStructure(
    fs: FileSystem,
    dir: string,
    callback: (error: null, results: Folder | Array<File | Folder>, total: Total) => void,
): void;

export function traverseStructure(
    structure: Array<File | Folder>,
    basepath: string,
    onFolderFound: (folder: Folder, basepath: string) => void,
    onFileFound: (file: File, basepath: string) => void,
): void;
