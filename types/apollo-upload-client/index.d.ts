// Type definitions for apollo-upload-client 17.0
// Project: https://github.com/jaydenseric/apollo-upload-client#readme
// Definitions by: Edward Sammut Alessi <https://github.com/Slessi>,
//                 tyankatsu <https://github.com/tyankatsu0105>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

// ==============================================================================
// exports
// ==============================================================================

export { default as createUploadLink } from './public/createUploadLink';
export { default as formDataAppendFile } from './public/formDataAppendFile';
export { default as isExtractableFile } from './public/isExtractableFile';
export { default as ReactNativeFile } from './public/ReactNativeFile';

// ==============================================================================
// declare
// ==============================================================================

declare global {
    interface GlobalFetch {
        fetch: WindowOrWorkerGlobalScope['fetch'];
    }
}
