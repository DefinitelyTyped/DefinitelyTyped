// Type definitions for express-tus 2.5
// Project: https://www.npmjs.org/package/express-tus
// Definitions by:  Chris Capaci <https://github.com/chriscapaci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Router } from 'express';
import { IncomingMessage as HttpIncomingMessage } from 'http';
import ExtendableError from 'es6-error';

export class UploadMetadataType {
    [key: string]: string;
}

export class IncomingMessageType extends HttpIncomingMessage {}

export class UploadInputType {
    incomingMessage: IncomingMessageType;
    uid: string;
    uploadLength: number;
    uploadMetadata: UploadMetadataType;
}

export class UploadUpdateInputType {
    chunkLength: number;
    filePath: string;
    uid: string;
    uploadLength: number;
    uploadOffset: number;
}

export type MaybePromiseType<T> = Promise<T> | T;

export class UploadType {
    uid: string;
    uploadExpires?: number;
    uploadLength: number;
    uploadMetadata: UploadMetadataType;
    uploadOffset: number;
}

export class StorageType {
    createUpload: (input: UploadInputType) => MaybePromiseType<UploadType>;
    delete: (uid: string) => MaybePromiseType<void>;
    getUpload: (uid: string) => MaybePromiseType<UploadType>;
    upload: (input: UploadUpdateInputType) => MaybePromiseType<void>;
}

export class ConfigurationInputType extends StorageType {
    basePath?: string;
    createUid?: () => MaybePromiseType<string>;
    createUpload: (input: UploadInputType) => MaybePromiseType<UploadType>;
    delete: (uid: string) => MaybePromiseType<void>;
    getUpload: (uid: string) => MaybePromiseType<UploadType>;
    upload: (input: UploadUpdateInputType) => MaybePromiseType<void>;
}

export class ConfigurationType extends StorageType {
    basePath: string;
    createUid: () => MaybePromiseType<string>;
    createUpload: (input: UploadInputType) => MaybePromiseType<UploadType>;
    delete: (uid: string) => MaybePromiseType<void>;
    getUpload: (uid: string) => MaybePromiseType<UploadType>;
    upload: (input: UploadUpdateInputType) => MaybePromiseType<void>;
}

export class ChecksumType {
    algorithm: string;
    checksum: string;
}

export function formatUploadMetadataHeader(uploadMetadata: UploadMetadataType): string;
export function isValidUploadMetadataHeader(subject: string): boolean;
export function parseUploadChecksumHeader(header: string): ChecksumType;
export function parseUploadLengthHeader(header: string): number;
export function parseUploadMetadataHeader(header: string): UploadMetadataType;
export function parseUploadOffsetHeader(header: string): number;

export function createConfiguration(input: ConfigurationInputType): ConfigurationType;
export function createMemoryStorage(configuration?: ConfigurationType): StorageType;
export function createTusMiddleware(configurationInput: ConfigurationInputType): Router;

export class ExpressTusError extends ExtendableError {}

export class UnexpectedStateError extends ExpressTusError {
    code: string;
}

export class UserError extends ExpressTusError {
    code: string;
}

export class NotFoundError extends UserError {}
