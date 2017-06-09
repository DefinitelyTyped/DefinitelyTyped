// Type definitions for react-native-fs 2.0
// Project: https://github.com/johanneslumpe/react-native-fs
// Definitions by: Paulo Cesar <https://github.com/pocesar/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="react-native" />

export interface ReadDirItem {
  // The name of the item
  name: string;
  // The absolute path to the item
  path: string;
  // Size in bytes
  size: string;
  // Is the file just a file?
  isFile(): boolean;
  // Is the file a directory?
  isDirectory(): boolean;
}

export interface StatResult {
  // The name of the item
  name: string;
  // The absolute path to the item
  path: string;
  // Size in bytes
  size: string;
  // UNIX file mode
  mode: number;
  // Is the file just a file?
  isFile(): boolean;
  // Is the file a directory?
  isDirectory(): boolean;
}

export interface Headers {
  [index: string]: string;
}
export type Fields = Headers;

export interface MkdirOptions {
  // iOS only
  NSURLIsExcludedFromBackupKey?: boolean;
}

export interface DownloadResult {
  // The download job ID, required if one wishes to cancel the download. See `stopDownload`.
  jobId: number;
  // The HTTP status code
  statusCode: number;
  // The number of bytes written to the file
  bytesWritten: number;
}

export type DownloadCallbackBegin = (res: DownloadBeginCallbackResult) => void;
export type DownloadCallbackProgress = (res: DownloadProgressCallbackResult) => void;

export interface DownloadFileOptions {
  // URL to download file from
  fromUrl: string;
  // Local filesystem path to save the file to
  toFile: string;
  // An object of headers to be passed to the server
  headers?: Headers;
  background?: boolean;
  progressDivider?: number;
  begin?: DownloadCallbackBegin;
  progress?: DownloadCallbackProgress;
}

export interface DownloadProgressCallbackResult {
  // The download job ID, required if one wishes to cancel the download. See `stopDownload`.
  jobId: number;
  // The total size in bytes of the download resource
  contentLength: number;
  // The number of bytes written to the file so far
  bytesWritten: number;
}

export interface DownloadBeginCallbackResult {
  // The download job ID, required if one wishes to cancel the download. See `stopDownload`.
  jobId: number;
  // The HTTP status code
  statusCode: number;
  // The total size in bytes of the download resource
  contentLength: number;
  // The HTTP response headers from the server
  headers: Headers;
}

export type UploadCallbackBegin = (res: UploadBeginCallbackResult) => void;
export type UploadCallbackProgress = (res: UploadProgressCallbackResult) => void;

export interface UploadFileOptions {
  // URL to upload file to
  toUrl: string;
  // An array of objects with the file information to be uploaded.
  files: UploadFileItem[];
  // An object of headers to be passed to the server
  headers?: Headers;
  // An object of fields to be passed to the server
  fields?: Fields;
  // Default is 'POST', supports 'POST' and 'PUT'
  method?: string;
  begin?: UploadCallbackBegin;
  progress?: UploadCallbackProgress;
}

export interface UploadResult {
  // The upload job ID, required if one wishes to cancel the upload. See `stopUpload`.
  jobId: number;
  // The HTTP status code
  statusCode: number;
  // The HTTP response headers from the server
  headers: Headers;
  // The HTTP response body
  body: string;
}

export interface UploadFileItem {
  // Name of the file, if not defined then filename is used
  name: string;
  // Name of file
  filename: string;
  // Path to file
  filepath: string;
  // The mimetype of the file to be uploaded, if not defined it will get mimetype from `filepath` extension
  filetype: string;
}

export interface UploadBeginCallbackResult {
  // The upload job ID, required if one wishes to cancel the upload. See `stopUpload`.
  jobId: number;
}

export interface UploadProgressCallbackResult {
  // The upload job ID, required if one wishes to cancel the upload. See `stopUpload`.
  jobId: number;
  // The total number of bytes that will be sent to the server
  totalBytesExpectedToSend: number;
  // The number of bytes sent to the server
  totalBytesSent: number;
}

export interface FSInfoResult {
  // The total amount of storage space on the device (in bytes).
  totalSpace: number;
  // The amount of available storage space on the device (in bytes).
  freeSpace: number;
}

export interface JobReturnValue<Result> {
  jobId: number;
  promise: Promise<Result>;
}

//  The absolute path to the main bundle directory
export const MainBundlePath: string;
// The absolute path to the caches directory
export const CachesDirectoryPath: string;
// The absolute path to the document directory
export const DocumentDirectoryPath: string;
// The absolute path to the temporary directory (iOS only)
export const TemporaryDirectoryPath: string;
// The absolute path to the external files, shared directory (android only)
export const ExternalDirectoryPath: string;
// The absolute path to the external storage, shared directory (android only)
export const ExternalStorageDirectoryPath: string;

export function readDir(path: string): Promise<ReadDirItem[]>;
export function readdir(path: string): Promise<string[]>;
export function stat(filepath: string): Promise<StatResult>;
export function readFile(filepath: string, encoding?: string): Promise<string>;
export function unlink(filepath: string): Promise<void>;
export function writeFile(filepath: string, contents: string, encoding?: string): Promise<void>;
export function appendFile(filepath: string, contents: string, encoding?: string): Promise<void>;
export function moveFile(filepath: string, destPath: string): Promise<void>;
export function copyFile(filepath: string, destPath: string): Promise<void>;
export function exists(filepath: string): Promise<boolean>;
export function hash(filepath: string, algorithm: string): Promise<string>;
export function mkdir(filepath: string, options?: MkdirOptions): Promise<void>;
export function downloadFile(options: DownloadFileOptions): JobReturnValue<DownloadResult>;
export function stopDownload(jobId: number): Promise<void>;
export function uploadFiles(options: UploadFileOptions): JobReturnValue<UploadResult>;
export function stopUpload(jobId: number): Promise<void>;
export function getFSInfo(): Promise<FSInfoResult>;
