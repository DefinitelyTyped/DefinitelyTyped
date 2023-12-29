import { ApolloLink } from "@apollo/client/core";
import { HttpOptions } from "@apollo/client/link/http";
import formDataAppendFile from "./formDataAppendFile.mjs";
import isExtractableFile from "./isExtractableFile.mjs";

export type UploadLinkOptions =
    & HttpOptions
    & Partial<{
        /**
         * [* `FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) class.
         * Defaults to the {@linkcode FormData} global.
         */
        FormData: typeof FormData;
        /**
         * Customizes how extracted files are appended to the
         * [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
         * instance. Defaults to {@linkcode formDataAppendFile}.
         */
        formDataAppendFile: FormDataFileAppender;
        /**
         * Matches extractable files in the GraphQL operation. Defaults to {@linkcode isExtractableFile}.
         */
        isExtractableFile: ExtractableFileMatcher;
    }>;

/**
 * Creates a
 * [terminating Apollo Link](https://www.apollographql.com/docs/react/api/link/introduction/#the-terminating-link)
 * for [Apollo Client](https://www.apollographql.com/docs/react) that fetches a
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec)
 * if the GraphQL variables contain files (by default
 * [`FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList),
 * [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File), or
 * [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) instances),
 * or else fetches a regular
 * [GraphQL POST or GET request](https://www.apollographql.com/docs/apollo-server/workflow/requests)
 * (depending on the config and GraphQL operation).
 *
 * Some of the options are similar to the
 * [`createHttpLink` options](https://www.apollographql.com/docs/react/api/link/apollo-link-http/#httplink-constructor-options).
 * @see [GraphQL multipart request spec](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * @returns A [terminating Apollo Link](https://www.apollographql.com/docs/react/api/link/introduction/#the-terminating-link).
 * @example
 * A basic Apollo Client setup:
 *
 * ```js
 * import { ApolloClient, InMemoryCache } from "@apollo/client";
 * import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
 *
 * const client = new ApolloClient({
 *   cache: new InMemoryCache(),
 *   link: createUploadLink(),
 * });
 * ```
 */
export default function createUploadLink(uploadLinkOptions?: UploadLinkOptions): ApolloLink;

/**
 * Checks if a value is an extractable file.
 * @param value Value to check.
 * @returns Is the value an extractable file.
 * @example
 * How to check for the default exactable files, as well as a custom type of
 * file:
 *
 * ```js
 * import isExtractableFile from "apollo-upload-client/isExtractableFile.mjs";
 *
 * const isExtractableFileEnhanced = (value) =>
 *   isExtractableFile(value) ||
 *   (typeof CustomFile !== "undefined" && value instanceof CustomFile);
 * ```
 */
export type ExtractableFileMatcher<ExtractableFile = any> = (value: unknown) => value is ExtractableFile;

/**
 * Appends a file extracted from the GraphQL operation to the
 * [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
 * instance used as the
 * [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
 * `options.body` for the
 * [GraphQL multipart request](https://github.com/jaydenseric/graphql-multipart-request-spec).
 * @param formData
 *   [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
 *   instance to append the specified file to.
 * @param fieldName Form data field name to append the file with.
 * @param file File to append. The file type depends on what the extractable file matcher extracts.
 */
export type FormDataFileAppender<ExtractableFile = any> = (
    formData: FormData,
    fieldName: string,
    file: ExtractableFile,
) => any;
