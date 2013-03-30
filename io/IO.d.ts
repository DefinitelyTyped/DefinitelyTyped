// Type definitions for tsc.exe IO
// Project: http://typescript.codeplex.com/
// Definitions by: Jonas Eriksson <http://joeriks.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IResolvedFile {
    content: string;
    path: string;
}
interface IFileWatcher {
    close(): void;
}
interface IIO {
    readFile(path: string): string;
    writeFile(path: string, contents: string): void;
    createFile(path: string, useUTF8?: bool): ITextWriter;
    deleteFile(path: string): void;
    dir(path: string, re?: RegExp, options?: {
            recursive?: bool;
        }): string[];
    fileExists(path: string): bool;
    directoryExists(path: string): bool;
    createDirectory(path: string): void;
    resolvePath(path: string): string;
    dirName(path: string): string;
    findFile(rootPath: string, partialFilePath: string): IResolvedFile;
    print(str: string): void;
    printLine(str: string): void;
    arguments: string[];
    stderr: ITextWriter;
    stdout: ITextWriter;
    watchFile(filename: string, callback: (string: any) => void): IFileWatcher;
    run(source: string, filename: string): void;
    getExecutingFilePath(): string;
    quit(exitCode?: number);
}
module IOUtils {
    function createFileAndFolderStructure(ioHost: IIO, fileName: string, useUTF8?: bool): ITextWriter;
    function throwIOError(message: string, error: Error): void;
    class BufferedTextWriter implements ITextWriter {
        public writer: {
            Write: (str: string) => void;
            Close: () => void;
        };
        public capacity;
        public buffer: string;
        constructor(writer: {
                Write: (str: string) => void;
                Close: () => void;
            }, capacity?: number);
        public Write(str): void;
        public WriteLine(str): void;
        public Close(): void;
    }
}
class Enumerator {
    public atEnd(): bool;
    public moveNext();
    public item(): any;
    constructor(o: any);
}
module process {
    var argv: string[];
    var platform: string;
    function on(event: string, handler: (any: any) => void): void;
    module stdout {
        function write(str: string);
    }
    module stderr {
        function write(str: string);
    }
    module mainModule {
        var filename: string;
    }
    function exit(exitCode?: number);
}
var IO: IIO;
