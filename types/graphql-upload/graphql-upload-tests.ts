import express from 'express';
import Koa from 'koa';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
import graphqlUploadKoa from 'graphql-upload/graphqlUploadKoa.js';
import Upload from 'graphql-upload/Upload.js';

express()
    .use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }))
    .listen(3000);

new Koa().use(graphqlUploadKoa({ maxFileSize: 10000000, maxFiles: 10 })).listen(3000);

const manuallyHandleUpload = async (upload: Upload) => {
    if (upload instanceof Upload) {
        return upload.promise;
    }
    throw new Error('Upload is not an instance of Upload');
};
