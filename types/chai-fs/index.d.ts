// Type definitions for chai-fs 2.0
// Project: https://github.com/chaijs/chai-fs
// Definitions by: Dimitar Danailov <https://github.com/dimitardanailov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />
/// <reference types="chai" />

declare global {
    namespace Chai {
        interface TypeComparison {
            path(msg?: string): Assertion;
            directory(msg?: string): Assertion;
            file(msg?: string): Assertion;
        }

        interface Deep {
            contents(array: any[], msg?: string): Assertion;
            files(array: any[], msg?: string): Assertion;
            subDirs(array: any[], msg?: string): Assertion;
        }

        interface Include {
            contents(array: any[], msg?: string): Assertion;
            files(array: any[], msg?: string): Assertion;
            subDirs(array: any[], msg?: string): Assertion;
        }

        interface LanguageChains {
            json: Assertion;
            using: Assertion;
        }

        interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
            // Basename
            basename(path?: string, name?: string, msg?: string): Assertion;
            notBasename(path: string, name: string, msg?: string): Assertion;

            // Dirname
            dirname(name: string, msg?: string): Assertion;
            notDirname(path: string, name: string, msg?: string): Assertion;

            // Еxtname
            extname(path: string, name?: string, msg?: string): Assertion;
            notExtname(path: string, name: string, msg?: string): Assertion;

            // Path
            pathExists(path: string, msg?: string): Assertion;
            notPathExists(path: string, msg?: string): Assertion;

            // Directory
            isDirectory(path: string, msg?: string): Assertion;
            notIsDirectory(path: string, msg?: string): Assertion;

            // directory().and.empty
            isEmptyDirectory(path: string, msg?: string): Assertion;
            notIsEmptyDirectory(path: string, msg?: string): Assertion;

            // directory().with.contents([...])
            contents(array: any[], msg?: string): Assertion;
            directoryContent(path: string, array: any[], msg?: string): Assertion;
            notDirectoryContent(path: string, array: any[], msg?: string): Assertion;
            directoryDeepContent(path: string, array: any[], msg?: string): Assertion;
            notDirectoryDeepContent(path: string, array: any[], msg?: string): Assertion;
            directoryInclude(path: string, array: any[], msg?: string): Assertion;
            notDirectoryInclude(path: string, array: any[], msg?: string): Assertion;

            // directory().with.files([...])
            files(array: any[], msg?: string): Assertion;
            directoryFiles(path: string, array: any[], msg?: string): Assertion;
            notDirectoryFiles(path: string, array: any[], msg?: string): Assertion;
            directoryDeepFiles(path: string, array: any[], msg?: string): Assertion;
            notDirectoryDeepFiles(path: string, array: any[], msg?: string): Assertion;
            directoryIncludeFiles(path: string, array: any[], msg?: string): Assertion;
            notDirectoryIncludeFiles(path: string, array: any[], msg?: string): Assertion;

            // directory().with.subDirs([...])
            subDirs(array: any[], msg?: string): Assertion;
            directorySubDirs(path: string, array: any[], msg?: string): Assertion;
            notDirectorySubDirs(path: string, array: any[], msg?: string): Assertion;
            directoryDeepSubDirs(path: string, array: any[], msg?: string): Assertion;
            notDirectoryDeepSubDirs(path: string, array: any[], msg?: string): Assertion;
            directoryIncludeSubDirs(path: string, array: any[], msg?: string): Assertion;
            notDirectoryIncludeSubDirs(path: string, array: any[], msg?: string): Assertion;

            // directory().and.equal(otherPath)
            directoryEqual(path: string, otherPath: string, msg?: string): Assertion;
            notDirectoryEqual(path: string, otherPath: string, msg?: string): Assertion;
            directoryDeepEqual(path: string, otherPath: string, msg?: string): Assertion;
            notDirectoryDeepEqual(path: string, otherPath: string, msg?: string): Assertion;

            // file
            isFile(path: string, msg?: string): Assertion;
            notIsFile(path: string, msg?: string): Assertion;

            // file().and.empty
            isEmptyFile(path: string, msg?: string): Assertion;
            notIsEmptyFile(path: string, msg?: string): Assertion;

            // file().with.content(str)
            content(data: any, msg?: string): Assertion;
            fileContent(path: string, data: any, msg?: string): Assertion;
            notFileContent(path: string, data: any, msg?: string): Assertion;

            // file().with.contents.that.match(/xyz/)
            fileContentMatch(path: string, regExp: RegExp, msg?: string): Assertion;
            notFileContentMatch(path: string, regExp: RegExp, msg?: string): Assertion;

            // file().and.equal(otherPath)
            fileEqual(path: string, otherPath: string, msg?: string): Assertion;
            notFileEqual(path: string, otherPath: string, msg?: string): Assertion;

            // file().with.json
            jsonFile(path: string, msg?: string): Assertion;
            notJsonFile(path: string, msg?: string): Assertion;

            // file().using.json.schema(obj)
            jsonSchemaFile(path: string, schema: any, msg?: string): Assertion;
            notJsonSchemaFile(path: string, schema: any, msg?: string): Assertion;
            schema(obj: object): Assertion;
        }

        interface Assert {
            // Basename
            basename(path: string, name: string, msg?: string): void;
            notBasename(path: string, name: string, msg?: string): void;

            // Dirname
            dirname(path: string, name?: string, msg?: string): void;
            notDirname(path: string, name: string, msg?: string): void;

            // Еxtname
            extname(path: string, name: string, msg?: string): void;
            notExtname(path: string, name: string, msg?: string): void;

            // Path
            path(msg?: string): void;
            pathExists(path: string, msg?: string): void;
            notPathExists(path: string, msg?: string): void;

            // Directory
            directory(msg?: string): void;
            isDirectory(path: string, msg?: string): void;
            notIsDirectory(path: string, msg?: string): void;

            // directory().and.empty
            isEmptyDirectory(path: string, msg?: string): void;
            notIsEmptyDirectory(path: string, msg?: string): void;

            // directory().with.contents([...])
            contents(array: any[], msg?: string): void;
            directoryContent(path: string, array: any[], msg?: string): void;
            notDirectoryContent(path: string, array: any[], msg?: string): void;
            directoryDeepContent(path: string, array: any[], msg?: string): void;
            notDirectoryDeepContent(path: string, array: any[], msg?: string): void;
            directoryInclude(path: string, array: any[], msg?: string): void;
            notDirectoryInclude(path: string, array: any[], msg?: string): void;

            // directory().with.files([...])
            files(array: any[], msg?: string): void;
            directoryFiles(path: string, array: any[], msg?: string): void;
            notDirectoryFiles(path: string, array: any[], msg?: string): void;
            directoryDeepFiles(path: string, array: any[], msg?: string): void;
            notDirectoryDeepFiles(path: string, array: any[], msg?: string): void;
            directoryIncludeFiles(path: string, array: any[], msg?: string): void;
            notDirectoryIncludeFiles(path: string, array: any[], msg?: string): void;

            // directory().with.subDirs([...])
            subDirs(array: any[], msg?: string): void;
            directorySubDirs(path: string, array: any[], msg?: string): void;
            notDirectorySubDirs(path: string, array: any[], msg?: string): void;
            directoryDeepSubDirs(path: string, array: any[], msg?: string): void;
            notDirectoryDeepSubDirs(path: string, array: any[], msg?: string): void;
            directoryIncludeSubDirs(path: string, array: any[], msg?: string): void;
            notDirectoryIncludeSubDirs(path: string, array: any[], msg?: string): void;

            // directory().and.equal(otherPath)
            directoryEqual(path: string, otherPath: string, msg?: string): void;
            notDirectoryEqual(path: string, otherPath: string, msg?: string): void;
            directoryDeepEqual(path: string, otherPath: string, msg?: string): void;
            notDirectoryDeepEqual(path: string, otherPath: string, msg?: string): void;

            // file
            file(msg?: string): void;
            isFile(path: string, msg?: string): void;
            notIsFile(path: string, msg?: string): void;

            // file().and.empty
            isEmptyFile(path: string, msg?: string): void;
            notIsEmptyFile(path: string, msg?: string): void;

            // file().with.content(str)
            fileContent(path: string, data: any, msg?: string): void;
            notFileContent(path: string, data: any, msg?: string): void;

            // file().with.contents.that.match(/xyz/)
            fileContentMatch(path: string, regExp: RegExp, msg?: string): void;
            notFileContentMatch(path: string, regExp: RegExp, msg?: string): void;

            // file().and.equal(otherPath)
            fileEqual(path: string, otherPath: string, msg?: string): void;
            notFileEqual(path: string, otherPath: string, msg?: string): void;

            // file().with.json
            jsonFile(path: string, msg?: string): void;
            notJsonFile(path: string, msg?: string): void;

            // file().using.json.schema(obj)
            jsonSchemaFile(path: string, schema: any, msg?: string): void;
            notJsonSchemaFile(path: string, schema: any, msg?: string): void;
            schema(obj: object): void;
        }
    }
}

declare function chaiFs(chai: any, utils: any): void;
export = chaiFs;

interface Object {
    should: Chai.Assertion;
}
