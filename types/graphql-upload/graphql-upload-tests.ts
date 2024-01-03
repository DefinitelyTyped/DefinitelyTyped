import express from "express";
import { WriteStream } from "fs-capacitor";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
import graphqlUploadKoa from "graphql-upload/graphqlUploadKoa.mjs";
import { FileUpload } from "graphql-upload/processRequest.mjs";
import Upload from "graphql-upload/Upload.mjs";
import Koa from "koa";
import { createWriteStream, unlink } from "node:fs";
import Stream from "node:stream";

express()
    .use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }))
    .listen(3000);

new Koa().use(graphqlUploadKoa({ maxFileSize: 10000000, maxFiles: 10 })).listen(3000);

export const manuallyHandleUpload = async (upload: Upload) => {
    if (upload instanceof Upload) {
        return upload.promise;
    }
    throw new Error("Upload is not an instance of Upload");
};

export const storeUpload = async (fileUpload: Promise<FileUpload>) => {
    const { createReadStream, filename } = await fileUpload;
    const stream = createReadStream();

    await new Promise((resolve, reject) => {
        const writeStream = createWriteStream(filename);
        writeStream.on("finish", resolve);
        writeStream.on("error", (error) => {
            unlink(filename, () => {
                reject(error);
            });
        });
        stream.on("error", (error) => writeStream.destroy(error));
        stream.pipe(writeStream);
    });

    return filename;
};

export const fileUploadMock: FileUpload = {
    filename: "Test file.pdf",
    encoding: "utf8",
    // No need to define the capacitor property.
    mimetype: "application/pdf",
    createReadStream: () => {
        const readableStream = new Stream.Readable();
        readableStream.push(null);
        const writeStream = new WriteStream();
        readableStream.pipe(writeStream);
        return writeStream.createReadStream();
    },
};
