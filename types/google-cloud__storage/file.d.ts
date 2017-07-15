import { ReadStream, WriteStream } from "fs";
import { Bucket } from "./bucket";
import {
  Acl,
  ApiResponse,
  DownloadOptions,
  ReadStreamOptions,
  UploadOptions,
  WriteStreamOptions
} from "./storage";

/**
 * Options for specifying the content length range.
 */
export interface ContentLengthRange {
  max?: number;
  min?: number;
}

/**
 * A file in the cloud.
 */
export class File {
  acl: Acl;
  copy(destination: string | Bucket | File): Promise<[File, ApiResponse]>;
  createReadStream(options?: ReadStreamOptions): ReadStream;
  createWriteStream(options?: WriteStreamOptions): WriteStream;
  delete(): Promise<[ApiResponse]>;
  download(options?: DownloadOptions): Promise<[string]>;
  exists(): Promise<[boolean]>;
  get(): Promise<[File, ApiResponse]>;
  getMetadata(): Promise<[FileMetadata, ApiResponse]>;
  getSignedPolicy(options?: SignedPolicyOptions): Promise<[SignedPolicy]>;
  getSignedUrl(config?: SignedUrlConfig): Promise<[string]>;
  makePrivate(options?: FilePrivateOptions): Promise<[ApiResponse]>;
  makePublic(): Promise<[ApiResponse]>;
  move(destination: string | Bucket | File): Promise<[File, ApiResponse]>;
  name: string;
  save(data: string, options?: WriteStreamOptions): Promise<void>;
  setEncryptionKey(encryptionKey: string | Buffer): File;
  setMetadata(metadata: FileMetadata): Promise<[ApiResponse]>;
}

/**
 * File metadata.
 */
export interface FileMetadata {
  contentType?: string;
}

/**
 * Options when setting the file as private.
 */
export interface FilePrivateOptions {
  strict?: boolean;
}

/**
 * A signed policy allowing a user to upload a file with a POST.
 */
export interface SignedPolicy {
  base64?: string;
  signature?: string;
  string?: string;
}

/**
 * Options when obtaining the signed policy.
 */
export interface SignedPolicyOptions {
  acl?: string;
  contentLengthRange?: ContentLengthRange;
  equals?: string[] | [string[]];
  expires?: number | string;
  max?: number;
  min?: number;
  startsWith?: string[] | [string[]];
  successRedirect?: string;
  successStatus?: string;
}

/**
 * Options when obtaining a temporary signed URL for a file.
 */
export interface SignedUrlConfig {
  action: string;
  cname?: string;
  contentMd5?: string;
  contentType?: string;
  expires?: number | string;
  extensionHeaders?: {[key: string]: string};
  promptSaveAs?: string;
  responseDisposition?: string;
  responseType?: string;
}
