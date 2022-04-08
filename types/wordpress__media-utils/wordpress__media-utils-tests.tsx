import * as mu from '@wordpress/media-utils';

declare const FILELIST: FileList;
declare const FILE_ARRAY: File[];

// $ExpectType Promise<void>
mu.uploadMedia({
    filesList: FILELIST,
    maxUploadFileSize: 5000,
    onError(error) {
        console.log(error.code, error.message, error.file.size);
    },
    onFileChange(files) {
        console.log(files[0].alt, files[0].media_type);
    },
});

// $ExpectType Promise<void>
mu.uploadMedia({
    additionalData: {
        foo: 'foo',
        bar: ['bar', 'baz'],
    },
    allowedTypes: ['image/jpeg'],
    filesList: FILE_ARRAY,
    maxUploadFileSize: 5000,
    wpAllowedMimeTypes: {
        'jpg|jpeg': 'image/jpeg',
    },
    onError(error) {
        console.log(error.code, error.message, error.file.size);
    },
    onFileChange(files) {
        console.log(files[0].alt, files[0].media_type);
    },
});
