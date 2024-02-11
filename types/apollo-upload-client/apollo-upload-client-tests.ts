import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import formDataAppendFile from "apollo-upload-client/formDataAppendFile.mjs";
import isExtractableFile from "apollo-upload-client/isExtractableFile.mjs";

// ==============================================================================
// createUploadLink
// ==============================================================================
createUploadLink({
    uri: "http://localhost",
    isExtractableFile,
    formDataAppendFile,
    useGETForQueries: true,
    fetch: (uri, options) => fetch(`http://localhost/${uri}`, options),
    fetchOptions: { method: "GET" },
    headers: { special: "Special header value" },
    includeExtensions: true,
    credentials: "beepboop",
    FormData,
});

// ==============================================================================
// formDataAppendFile
// ==============================================================================
const form: HTMLFormElement | undefined = undefined;
const formData = new FormData(form);
const fieldName = "field name";
const file = new Blob();
formDataAppendFile(formData, fieldName, file);

// ==============================================================================
// isExtractableFile
// ==============================================================================
isExtractableFile("");
