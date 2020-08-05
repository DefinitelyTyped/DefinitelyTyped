// Type definitions for apollo-upload-client 14.0.0
// Project: https://github.com/jaydenseric/apollo-upload-client#readme
// Definitions by: Edward Sammut Alessi <https://github.com/Slessi>
//                 Jordan Overbye <https://github.com/jordanoverbye>
//                 Simen Bekkhus <https://github.com/SimenB>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ApolloLink, HttpOptions } from '@apollo/client';

export { ReactNativeFile } from 'extract-files';

declare global {
    interface GlobalFetch {
        fetch: WindowOrWorkerGlobalScope['fetch'];
    }
}

interface UploadHttpOptions extends HttpOptions {
    // Function that checks if a value is an extractable file
    isExtractableFile?: (value: any) => boolean;
    // FormData implementation to use, defaulting to the FormData global.
    FormData?: any;
    // Customizes how extracted files are appended to the FormData instance.
    formDataAppendFile?: (formData: FormData, fieldName: string, file: any) => void;
}

export function createUploadLink(linkOptions?: UploadHttpOptions): ApolloLink;
