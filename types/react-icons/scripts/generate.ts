// Usage: npm install && ts-node generate.ts
import { mkdirSync, readdirSync, writeFileSync } from 'fs';
import { removeSync } from 'fs-extra';
import { join as joinPaths } from 'path';

const allModules = findAllModules();

// Delete old output
for (const { group } of allModules) {
    const outPath = getOutDir(group);
    removeSync(outPath);
    const outLibPath = getOutLibDir(group);
    removeSync(outLibPath);
}

// Create new empty folders
for (const { group } of allModules) {
    const outPath = getOutDir(group);
    mkdirSync(outPath);
    const outLibPath = getOutLibDir(group);
    mkdirSync(outLibPath);
}

for (const { group, ids } of allModules) {
    for (const id of ids) {
        writeFileSync(getOutFile(group, `${id}.d.ts`), iconFile(getModuleName(group, id)), 'utf-8');
        writeFileSync(getOutLibFile(group, `${id}.d.ts`), iconFile(getModuleName(group, id), true), 'utf-8');
    }
    writeFileSync(getOutFile(group, 'index.d.ts'), indexFile(group, ids), 'utf-8');
    writeFileSync(getOutLibFile(group, 'index.d.ts'), indexFile(group, ids, true), 'utf-8');
}

function getOutDir(group: string): string {
    return joinPaths(__dirname, '..', group);
}

function getOutFile(folder: string, fileName: string): string {
    return joinPaths(getOutDir(folder), fileName);
}

function getOutLibDir(group: string): string {
    return joinPaths(__dirname, '..', 'lib', group);
}

function getOutLibFile(folder: string, fileName: string): string {
    return joinPaths(getOutLibDir(folder), fileName);
}

function iconFile(name: string, lib: boolean = false): string {
    if (lib) {
        return `import * as React from 'react';
import { IconBaseProps } from 'react-icon-base';
declare class ${name} extends React.Component<IconBaseProps> { }
export = ${name};
`;
    }

    return `import * as React from 'react';
import { IconBaseProps } from 'react-icon-base';
export default class ${name} extends React.Component<IconBaseProps> { }
`;
}

function indexFile(folder: string, ids: string[], lib: boolean = false): string {
    const reExports = ids.map(id => `export { default as ${getModuleName(folder, id)} } from "${lib ? `../../${folder}` : "."}/${id}";`);
    return reExports.join("\n") + "\n";
}

function getModuleName(folder: string, id: string): string {
    return capitalize(folder) + capitalize(camelcase(id));
}

function capitalize(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
}

function camelcase(str: string): string {
    return str.replace(/-(\w)/g, (_, s) => s.toUpperCase());
}

function findAllModules(): Array<{ group: string, ids: string[] }> {
    const rootDir = joinPaths(__dirname, 'node_modules/react-icons');
    return ["fa", "go", "io", "md", "ti"].map(group => {
        const ids: string[] = [];
        const dirPath = joinPaths(rootDir, group);
        for (const js of readdirSync(dirPath)) {
            if (js.endsWith(".js")) {
                const id = js.slice(0, js.length - ".js".length);
                if (id !== "index") {
                    ids.push(id);
                }
            }
        }
        return { group, ids };
    });
}
