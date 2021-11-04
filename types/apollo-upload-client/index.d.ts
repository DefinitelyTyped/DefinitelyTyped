// Type definitions for apollo-upload-client 14.1
// Project: https://github.com/jaydenseric/apollo-upload-client#readme
// Definitions by: Edward Sammut Alessi <https://github.com/Slessi>, tyankatsu <https://github.com/tyankatsu0105>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

// ==============================================================================
// imports
// ==============================================================================

import { ApolloLink } from '@apollo/client/core';
import { HttpOptions } from '@apollo/client/link/http';
import { isExtractableFile, ExtractableFile } from 'extract-files';

// ==============================================================================
// declare
// ==============================================================================

declare global {
    interface GlobalFetch {
        fetch: WindowOrWorkerGlobalScope['fetch'];
    }
}

// ==============================================================================
// types
// ==============================================================================

export type UploadLinkOptions = HttpOptions &
    Partial<{
        isExtractableFile: typeof isExtractableFile;
        formDataAppendFile: typeof formDataAppendFile;
    }>;

// ==============================================================================
// export
// ==============================================================================

export { ReactNativeFile, isExtractableFile } from 'extract-files';

/**
 * Creates a [terminating Apollo Link](https://www.apollographql.com/docs/link/overview/#terminating-links) capable of file uploads.
 * @see https://github.com/jaydenseric/apollo-upload-client#function-createuploadlink
 */
export function createUploadLink(uploadLinkOptions?: UploadLinkOptions): ApolloLink;

/**
 * The default implementation for [`createUploadLink`](https://github.com/jaydenseric/apollo-upload-client#function-createuploadlink) `options.formDataAppendFile`
 * that uses the standard [`FormData.append`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/append) method.
 * @see https://github.com/jaydenseric/apollo-upload-client#function-formdataappendfile
 */
export function formDataAppendFile(formData: FormData, fieldName: string, file: ExtractableFile): void;
