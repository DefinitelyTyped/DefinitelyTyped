import {
    UploadLinkOptions,
    createUploadLink,
    formDataAppendFile,
    ReactNativeFile,
    isExtractableFile,
} from 'apollo-upload-client';

// ==============================================================================
// UploadLinkOptions
// ==============================================================================
const uploadLinkOptions: UploadLinkOptions = {
    uri: 'http://localhost',
    isExtractableFile,
    formDataAppendFile,
    useGETForQueries: true,
    fetch: (uri, options) => fetch(`http://localhost/${uri}`, options),
    fetchOptions: { method: 'GET' },
    headers: { special: 'Special header value' },
    includeExtensions: true,
    credentials: 'beepboop',
};

// ==============================================================================
// createUploadLink
// ==============================================================================
createUploadLink(uploadLinkOptions);

// ==============================================================================
// formDataAppendFile
// ==============================================================================
const form: HTMLFormElement | undefined = undefined;
const formData = new FormData(form);
const fieldName = 'field name';
const file = new Blob();
formDataAppendFile(formData, fieldName, file);

// ==============================================================================
// ReactNativeFile
// ==============================================================================
new ReactNativeFile({
    name: 'its coming home',
    type: 'its coming',
    uri: "football's coming home",
});

// ==============================================================================
// isExtractableFile
// ==============================================================================
isExtractableFile('');
