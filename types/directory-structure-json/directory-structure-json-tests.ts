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

DirectoryStructureJSON.getStructure(
    fs,
    "",
    (error: Error | null, results: Folder | Array<Folder | File>, total: Total) => {
        if (error) throw new Error(error.message);

        if (total) {
            const number: number = total.files + total.folders;
        }

        if (Array.isArray(results)) {
            DirectoryStructureJSON.traverseStructure(
                results,
                "",
                (folder: Folder, basepath: string) => {
                    console.info(folder.children.length);
                },
                (file: File, basepath: string) => {},
            );
        }
    },
);

DirectoryStructureJSON.traverseStructure(
    structure,
    "",
    (folder: Folder, basepath: string) => {},
    (file: File, basepath: string) => {},
);
