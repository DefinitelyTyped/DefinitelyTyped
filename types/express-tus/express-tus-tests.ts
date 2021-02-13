import express = require('express');
import { Request, Response, NextFunction } from 'express';
import {
    createMemoryStorage,
    createConfiguration,
    createTusMiddleware,
    formatUploadMetadataHeader,
    isValidUploadMetadataHeader,
    parseUploadChecksumHeader,
    parseUploadLengthHeader,
    parseUploadMetadataHeader,
    parseUploadOffsetHeader,
    ConfigurationInputType,
    IncomingMessageType,
    UploadInputType,
    UploadMetadataType,
    UploadType,
    UploadUpdateInputType,
    ExpressTusError,
    NotFoundError,
    UserError,
    ChecksumType
} from 'express-tus';
import { Socket } from 'net';

const app = express();

declare const createTusBaseConfig: ConfigurationInputType;
declare const uploadMetaData: UploadMetadataType;

const createTusMiddlewareConfig: ConfigurationInputType = {
    ...createMemoryStorage(createConfiguration(createTusBaseConfig))
};
app.use(createTusMiddleware(createTusMiddlewareConfig));

app.use(async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof ExpressTusError) {
        if (error instanceof NotFoundError) {
            res.status(404).end('Upload not found.');
            return;
        }
        if (error instanceof UserError) {
            res.status(500).end(error.message);
            return;
        }
        res.status(500).end('Internal server error.');
    } else {
        const config: ConfigurationInputType = new ConfigurationInputType();
        if (isValidUploadMetadataHeader('test')) {
            const input: UploadInputType = {
                incomingMessage: new IncomingMessageType(new Socket()),
                uid: 'testuid',
                uploadLength: 99,
                uploadMetadata: {}
            };
            const createUploadType = await config.createUpload(input);
            const updateInput: UploadUpdateInputType = {
                chunkLength: 99,
                filePath: '',
                uid: 'testuid',
                uploadLength: 99,
                uploadOffset: 99
            };
            await config.upload(updateInput);
            const getUploadType = await config.getUpload('testuid');
            if (createUploadType instanceof UploadType && getUploadType instanceof UploadType) {
                await config.delete('testuid');
                const header = formatUploadMetadataHeader(uploadMetaData);
                const metadataType = parseUploadMetadataHeader(header);
                const checksum = parseUploadChecksumHeader('test');
                if (checksum instanceof ChecksumType) {
                    const length = parseUploadLengthHeader('test');
                    const offsetHeader = parseUploadOffsetHeader('test');
                }
            }
        }
        next();
        return;
    }
});
