// ==============================================================================
// exports
// ==============================================================================

export { default as createUploadLink } from "./public/createUploadLink";
export { default as formDataAppendFile } from "./public/formDataAppendFile";
export { default as isExtractableFile } from "./public/isExtractableFile";
export { default as ReactNativeFile } from "./public/ReactNativeFile";

// ==============================================================================
// declare
// ==============================================================================

declare global {
    interface GlobalFetch {
        fetch: WindowOrWorkerGlobalScope["fetch"];
    }
}
