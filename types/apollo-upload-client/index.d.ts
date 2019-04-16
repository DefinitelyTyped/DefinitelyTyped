// Type definitions for apollo-upload-client 8.1
// Project: https://github.com/jaydenseric/apollo-upload-client#readme
// Definitions by: Edward Sammut Alessi <https://github.com/Slessi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { ApolloLink } from "apollo-link";
import { HttpOptions } from "apollo-link-http-common";

export { ReactNativeFile } from "extract-files";

/**
 * `createUploadLink` options match `createHttpLink` options
 * @param linkOptions `HttpOptions`
 */
export function createUploadLink(linkOptions?: HttpOptions): ApolloLink;
