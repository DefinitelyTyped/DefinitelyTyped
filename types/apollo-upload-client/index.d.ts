// Type definitions for apollo-upload-client 14.0
// Project: https://github.com/jaydenseric/apollo-upload-client#readme
// Definitions by: Edward Sammut Alessi <https://github.com/Slessi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

import { ApolloLink, HttpOptions } from '@apollo/client';

export { ReactNativeFile } from 'extract-files';

declare global {
    interface GlobalFetch {
        fetch: WindowOrWorkerGlobalScope['fetch'];
    }
}

/**
 * `createUploadLink` options match `createHttpLink` options
 * @param linkOptions `HttpOptions`
 */
export function createUploadLink(linkOptions?: HttpOptions): ApolloLink;
