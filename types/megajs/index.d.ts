// Type definitions for megajs 0.14
// Project: https://github.com/qgustavor/mega
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import { Readable, Writable, Stream } from 'stream';

export interface AccountInfo {
  type: string;
  spaceUsed: number;
  spaceTotal: number;
  downloadBandwidthUsed: number;
  downloadBandwidthTotal: number;
  sharedBandwidthUsed: number;
  sharedBandwidthLimit: number;
}

export interface DownloadOptions {
  maxConnections?: number;
  initialChunkSize?: number;
  chunkSizeIncrement?: number;
  maxChunkSize?: number;
  returnCiphertext?: boolean;
  start?: any;
  end?: any;
}

export interface UploadOptions {
  name: string;
  attributes?: object;
  size?: any;
  thumbnailImage?: Buffer | Readable;
  previewImage?: Buffer | Readable;
}

export interface LinkOptions {
  noKey?: boolean;
  key?: string | Buffer;
}

export interface MakeDirectoryOptions {
  name: string;
  attributes?: object;
  key?: string | Buffer;
}

export interface FileOptions {
  downloadId: string;
  key: string;
  directory?: boolean;
}

export interface StorageOptions {
  email: string;
  password: string;
  keepalive?: boolean;
  autologin?: boolean;
  autoload?: boolean;
}

export class File {
  constructor(options: FileOptions | string);
  static fromURL(options: FileOptions | string): File;
  static unpackAttributes(at: any): JSON;
  name: string;
  attributes: object;
  size: number;
  key: Buffer;
  timestamp: number;
  nodeId: string;
  downloadId: string;
  directory: boolean;
  children: ReadonlyArray<File>;
  loadAttributes(cb?: any): Readable;
  download(options?: DownloadOptions, cb?: any): Readable;
}

export class Storage {
  constructor(options: StorageOptions, callback?: any);
  static fromJSON(json: JSON): Storage;
  name: string;
  key: Buffer;
  sid: string;
  files: {[id in string]: MutableFile};
  root: MutableFile;
  trash: MutableFile;
  inbox: MutableFile;
  mounts: ReadonlyArray<File>;
  upload(options: UploadOptions | string, buffer?: Buffer, cb?: any): Writable;
  mkdir(options: MakeDirectoryOptions | string, cb: (err: Error | undefined, file: MutableFile) => void): Readable;
  reload(cb: any): Readable;
  login(cb: any): Readable;
  getAccountInfo(cb: any): AccountInfo;
  toJSON(): JSON;
}

export class MutableFile extends File {
  constructor(options: FileOptions | string, storage: Storage);
  upload(options: UploadOptions | string, buffer?: Buffer, cb?: any): Writable;
  mkdir(options: MakeDirectoryOptions | string, cb?: any): Readable;
  importFile(file: File | string, cb: (err: Error | undefined, file: MutableFile) => void): Readable;
  link(options: LinkOptions | undefined, cb: (err: Error | undefined, url: string) => void): Readable;
  shareFolder(options: LinkOptions | undefined, cb: (err: Error | undefined, url: string) => void): Readable;
  delete(permanent: true | undefined, cb: (err: Error | undefined) => void): Readable;
  moveTo(target: MutableFile | string, cb: (err: Error | undefined) => void): Readable;
  setAttributes(attributes: object, cb: (err: Error | undefined) => void): Readable;
  uploadAttribute(type: string | number, opt?: Buffer | Stream, cb?: any): Readable;
  rename(newFileName: string, cb: (err: Error | undefined) => void): Readable;
  setLabel(label: string, cb: (err: Error | undefined) => void): Readable;
  setFavorite(isFavorite: boolean, cb: (err: Error | undefined) => void): Readable;
}

export default function mega(options: StorageOptions, cb?: any): Storage;
