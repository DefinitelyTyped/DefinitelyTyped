import ExtractFiles = require("extract-files");

/**
 * The default implementation for [`createUploadLink`](https://github.com/jaydenseric/apollo-upload-client#function-createuploadlink) `options.formDataAppendFile`
 * that uses the standard [`FormData.append`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/append) method.
 * @see https://github.com/jaydenseric/apollo-upload-client#function-formdataappendfile
 */
declare function formDataAppendFile(formData: FormData, fieldName: string, file: ExtractFiles.ExtractableFile): void;

export = formDataAppendFile;
