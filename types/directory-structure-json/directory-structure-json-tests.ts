import DirectoryStructureJSON, { type File, type Folder, type Total } from "directory-structure-json";
import fs from "fs";

const structure: Array<File | Folder> = [
    {
        type: "file",
        name: "index.js",
    },
    {
        name: "node_modules",
        type: "folder",
        children: [
            {
                name: "path",
                type: "folder",
                children: [
                    {
                        type: "file",
                        name: "path.js",
                    },
                    {
                        type: "file",
                        name: "package.json",
                    },
                    {
                        type: "file",
                        name: "README.md",
                    },
                ],
            },
        ],
    },
];

DirectoryStructureJSON.getStructure(fs, "", (err: Error | null) => {});
DirectoryStructureJSON.getStructure(fs, "", (err: Error | null, result?: Folder) => {});
DirectoryStructureJSON.getStructure(fs, "", (err: Error | null, result?: Folder, total?: Total) => {});
DirectoryStructureJSON.traverseStructure(
    structure,
    "",
    (folder: Folder, basepath: string) => {},
    (file: File, basepath: string) => {},
);
