const isDirectoryEntry = (entry: FileSystemEntry): entry is FileSystemDirectoryEntry => entry.isDirectory;
const isFileEntry = (entry: FileSystemEntry): entry is FileSystemFileEntry => entry.isFile;

const resolveFile = (entry: File) => undefined;
const resolveEntry = (entry: FileSystemEntry) => undefined;
const errorHandler = (error: DOMException) => undefined;

const stringifyEntry = (entry: FileSystemEntry): string => {
    return `
isFile: ${entry.isFile}
isDirectory ${entry.isDirectory}
name: ${entry.name}
fullPath: ${entry.fullPath}
filesystem.name: ${entry.filesystem.name}
    `;
};

const walkDirectoryReader = (reader: FileSystemDirectoryReader) => {
    reader.readEntries(entries => {
        if (entries.length === 0) return;
        for (const entry of entries) {
            if (isDirectoryEntry(entry)) {
                walkDirectoryReader(entry.createReader());
            }
            console.log(stringifyEntry(entry));
        }
    });
    reader.readEntries(entries => console.log(entries.length), errorHandler);
};

const validGetDirectoryCalls = (entry: FileSystemDirectoryEntry) => {
    entry.getDirectory("dir", { create: false, exclusive: false }, resolveEntry, errorHandler);
    entry.getDirectory("dir", { create: false }, resolveEntry, errorHandler);
    entry.getDirectory("dir", { exclusive: false }, resolveEntry, errorHandler);
    entry.getDirectory("dir", {}, resolveEntry, errorHandler);
    entry.getDirectory("dir", {}, resolveEntry);
    entry.getDirectory("dir", {});
    entry.getDirectory("dir");
    entry.getDirectory();
};

const validGetFileCalls = (entry: FileSystemDirectoryEntry) => {
    entry.getFile("dir", { create: false, exclusive: false }, resolveEntry, errorHandler);
    entry.getFile("dir", { create: false }, resolveEntry, errorHandler);
    entry.getFile("dir", { exclusive: false }, resolveEntry, errorHandler);
    entry.getFile("dir", {}, resolveEntry, errorHandler);
    entry.getFile("dir", {}, resolveEntry);
    entry.getFile("dir", {});
    entry.getFile("dir");
    entry.getFile();
};

const validFileCalls = (entry: FileSystemFileEntry) => {
    entry.file(resolveFile, errorHandler);
    entry.file(resolveFile);
};

const readEntriesFromInput = (input: HTMLInputElement) => {
    for (const entry of input.webkitEntries) {
        console.log(stringifyEntry(entry));
    }
};

const readDataTransferItems = (items: DataTransferItemList) => {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < items.length; i++) {
        const entry = items[i].webkitGetAsEntry();
        if (entry !== null) {
            console.log(stringifyEntry(entry));
        }
    }
};
