// Type definitions for @google-cloud/storage v0.7.0
// Project: https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/packages/storage/src/file.js
// Definitions by: Brian Love <http://brianflove.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ReadStream, WriteStream } from "fs";
import { Bucket } from "../bucket";
import {
  Acl,
  IApiResponse,
  IDownloadOptions,
  IReadStreamOptions,
  IUploadOptions,
  IWriteStreamOptions
} from "../storage";

/**
 * A file in the cloud.
 * @interface File
 */
export declare class File {
  acl: Acl;
  copy(destination: string | Bucket | File): Promise<[File, IApiResponse]>;
  createReadStream(options?: IReadStreamOptions): ReadStream;
  createWriteStream(options?: IWriteStreamOptions): WriteStream;
  delete(): Promise<[IApiResponse]>;
  download(options?: IDownloadOptions): Promise<[string]>;
  exists(): Promise<[boolean]>;
  get(): Promise<[File, IApiResponse]>;
  getMetadata(): Promise<[IFileMetadata, IApiResponse]>;
  getSignedPolicy(options?: ISignedPolicyOptions): Promise<[ISignedPolicy]>;
  getSignedUrl(config?: ISignedUrlConfig): Promise<[string]>;
  makePrivate(options?: IFilePrivateOptions): Promise<[IApiResponse]>;
  makePublic(): Promise<[IApiResponse]>;
  move(destination: string | Bucket | File): Promise<[File, IApiResponse]>;
  name: string;
  save(data: string, options?: IWriteStreamOptions): Promise<void>;
  setEncryptionKey(encryptionKey: string | Buffer): File;
  setMetadata(metadata: IFileMetadata): Promise<[IApiResponse]>;
}

/**
 * File metadata.
 * @interface IFileMetadata
 */
export interface IFileMetadata {
  contentType?: string;
}

/**
 * Options when setting the file as private.
 * @interface IFilePrivateOptions
 */
export interface IFilePrivateOptions {
  strict?: boolean;
}

/**
 * A signed policy allowing a user to upload a file with a POST.
 * @interface ISignedPolicy
 */
export interface ISignedPolicy {
  base64?: string;
  signature?: string;
  string?: string;
}

/**
 * Options when obtaining the signed policy.
 * @interface ISignedPolicyOptions
 */
export interface ISignedPolicyOptions {
  acl?: string;
  contentLengthRange?: Object;
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
 * @interface ISignedUrlConfig
 */
export interface ISignedUrlConfig {
  action: string;
  cname?: string;
  contentMd5?: string;
  contentType?: string;
  expires?: number | string;
  extensionHeaders?: Object;
  promptSaveAs?: string;
  responseDisposition?: string;
  responseType?: string;
}