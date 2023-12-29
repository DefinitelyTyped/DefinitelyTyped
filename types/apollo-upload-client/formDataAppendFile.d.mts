import { ExtractableFile } from "extract-files/isExtractableFile.mjs";

/**
 * The default implementation for [`createUploadLink`](https://github.com/jaydenseric/apollo-upload-client#function-createuploadlink) `options.formDataAppendFile`
 * that uses the standard [`FormData.append`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/append) method.
 * @see https://github.com/jaydenseric/apollo-upload-client#function-formdataappendfile
 * @param formData Form data to append the specified file to.
 * @param fieldName Field name for the file.
 * @param file File to append.
 */
export default function formDataAppendFile(formData: FormData, fieldName: string, file: ExtractableFile): void;
