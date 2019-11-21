import { createUploadLink, ReactNativeFile } from "apollo-upload-client";

new ReactNativeFile({
    name: "its coming home",
    type: "its coming",
    uri: "football's coming home",
});

createUploadLink({
    fetch: (uri, options) => fetch(`http://localhost/${uri}`, options),
    fetchOptions: { method: "GET" },
    headers: { special: "Special header value" },
    includeExtensions: true,
    uri: "http://localhost",
    credentials: "beepboop",
});
