import { createUploadLink, ReactNativeFile } from "apollo-upload-client";

new ReactNativeFile({
    name: "ho",
    type: "ho",
    uri: "ho",
});

createUploadLink({
    fetch: (uri, options) => fetch(`http://localhost/${uri}`, options),
    fetchOptions: { method: "GET" },
    headers: { special: "Special header value" },
    includeExtensions: true,
    uri: "http://localhost",
    credentials: "beepboop",
});
