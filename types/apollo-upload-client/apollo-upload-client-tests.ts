import {
    HttpOptions,
    createUploadLink,
    FormDataFileAppender,
    formDataAppendFile,
    ReactNativeFile,
    isExtractableFile
} from "apollo-upload-client";

// ==============================================================================
// HttpOptions
// ==============================================================================

const httpOptions: HttpOptions = {
    uri: "http://localhost",
    isExtractableFile,
    formDataAppendFile,
    useGETForQueries: true,
    fetch: (uri, options) => fetch(`http://localhost/${uri}`, options),
    fetchOptions: { method: "GET" },
    headers: { special: "Special header value" },
    includeExtensions: true,
    credentials: "beepboop",
}

// ==============================================================================
// createUploadLink
// ==============================================================================
createUploadLink(httpOptions);

// ==============================================================================
// FormDataFileAppender
// ==============================================================================
let form: HTMLFormElement | undefined;
const formData = new FormData(form);
const formDataFileAppender: FormDataFileAppender = {
    fieldName: 'field name',
    formData,
    file: ''
}

// ==============================================================================
// formDataAppendFile
// ==============================================================================
formDataAppendFile(formDataFileAppender)

// ==============================================================================
// ReactNativeFile
// ==============================================================================
new ReactNativeFile({
    name: "its coming home",
    type: "its coming",
    uri: "football's coming home",
});

// ==============================================================================
// isExtractableFile
// ==============================================================================
isExtractableFile('')




