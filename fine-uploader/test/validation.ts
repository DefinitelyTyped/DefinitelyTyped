/// <reference path="../index.d.ts" />

function validationTest() {

    const validationOptions: qq.ValidationOptions = {
        acceptFiles: [new MimeType()],
        allowExtensions: ['csv, xls'],
        itemLimit: 5,
        sizeLimit: 10000000,
        stopOnFirstInvalidFile: false,
        image: {
            maxHeight: 10,
            maxWidth: 10,
            minHeight: 1,
            minWidth: 1
        }
    };

    const config: qq.BasicOptions = {
        validation: validationOptions
    };

    const uploader = new qq.FineUploaderBasic(config);
}
