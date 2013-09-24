/* Defined in lib.d.ts
interface File {
    fullPath: string;
    type: string;
    size: number;
}
*/

interface FileWriter {
    readyState: any;
    fileName: string;
    length: number;
    position: number;
    error: FileError;

    onwritestart: Function;
    onprogress: Function;
    onwrite: Function;
    onabort: Function;
    onerror: Function;
    onwriteend: Function;

    abort();
    seek();
    truncate();
    write();
}

interface FileSystem {
    name: string;
    root: DirectoryEntry;
}
declare var DirectoryEntry: {
    new(name: string, root: DirectoryEntry): DirectoryEntry;
}

interface FileSystemEntry {
    isFile: boolean;
    isDirectory: boolean;
    name: string;
    fullPath: string;
    filesystem: FileSystem;

    getMetadata(onSuccess?: (arg) => any, onError?: (arg) => any);
    setMetadata(onSuccess?: (arg) => any, onError?: (arg) => any, options?);
    toURL();
    remove(onSuccess?: (arg) => any, onError?: (arg) => any);
    getParent(onSuccess?: (arg) => any, onError?: (arg) => any);
}

interface FileEntry extends FileSystemEntry {
    moveTo(parentEntry: DirectoryEntry, file: string, onSuccess: (arg) => any, onError: (arg) => any);
    copyTo(parentEntry: DirectoryEntry, file: string, onSuccess: (arg) => any, onError: (arg) => any);
    createWriter(onSuccess?: (arg) => any, onError?: (arg) => any);
    file(onSuccess?: (arg) => any, onError?: (arg) => any);
}

interface DirectoryEntry extends FileSystemEntry {
    createReader();
    getDirectory();
    getFile();
    removeRecursively();
}

interface DirectoryReader {
    readEntries(successCallback: (entries: FileSystemEntry) => void , errorCallback: (error: FileError) => void );
}

interface FileTransfer {
    onprogress: Function;

    //upload(filePath: string, server: string, successCallback: (metadata: Metadata) => void , errorCallback: (error: FileError) => void , options?: any): void;
    upload(filePath: string, server: string, successCallback: (result: FileUploadResult) => void , errorCallback: (error: FileError) => void , options?: any): void;
    download(source: string, target: string, successCallback: (fileEntry: FileEntry) => void , errorCallback: (error: FileError) => void, options?: any): void;
    abort(): void;
}
declare var FileTransfer: {
    new(): FileTransfer;
}


interface FileUploadOptions {
    fileKey?: string;
    fileName?: string;
    mimeType?: string;
    params?: any;
    chunkedMode?: boolean;
    headers?: any;
}
declare var FileUploadOptions: {
    new(): FileUploadOptions;
}

interface FileUploadResult {
    bytesSent: number;
    responseCode: number;
    response: string;
}

// TODO Flags

/*
interface LocalFileSystem {
    requestFileSystem: Function;
    resolveLocalFileSystemURI: Function;
}*/

interface LocalFileSystem {
    PERSISTENT: number;
    TEMPORARY: number;
}
declare var LocalFileSystem: LocalFileSystem;

interface Metadata {
    modificationTime: Date;
}

interface FileError {
    code: number;
}
declare var FileError: {
    NOT_FOUND_ERR: number;
    SECURITY_ERR: number;
    ABORT_ERR: number;
    NOT_READABLE_ERR: number;
    ENCODING_ERR: number;
    NO_MODIFICATION_ALLOWED_ERR: number;
    INVALID_STATE_ERR: number;
    SYNTAX_ERR: number;
    INVALID_MODIFICATION_ERR: number;
    QUOTA_EXCEEDED_ERR: number;
    TYPE_MISMATCH_ERR: number;
    PATH_EXISTS_ERR: number;
}

interface FileTransferError {
    code: number;
    source: string;
    target: string;
    http_status: number;
}
declare var FileTransferError: {
    FILE_NOT_FOUND_ERR: number;
    INVALID_URL_ERR: number;
    CONNECTION_ERR: number;
    ABORT_ERR: number;
}
