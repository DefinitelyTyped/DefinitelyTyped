import { ApolloLink } from "@apollo/client/link";
import { BaseHttpLink, selectURI } from "@apollo/client/link/http";

interface UploadHttpLinkOptions {
    /**
     * @param {Parameters<typeof selectURI>[1]} [options.uri] GraphQL endpoint
     *   URI. Defaults to `"/graphql"`.
     */
    uri?: Parameters<typeof selectURI>[1];

    /**
     * @param {boolean} [options.useGETForQueries] Should GET be used to fetch
     *   queries, if there are no files to upload.
     */
    useGETForQueries?: boolean;

    /**
     * @param {ExtractableFileMatcher} [options.isExtractableFile] Matches
     *   extractable files in the GraphQL operation. Defaults to
     *   {@linkcode isExtractableFile}.
     */
    isExtractableFile?: ExtractableFileMatcher;

    /**
     * @param {typeof FormData} [options.FormData]
     *   `FormData` class. Defaults to the {@linkcode FormData} global.
     */
    FormData?: typeof FormData;

    /**
     * @param {FormDataFileAppender} [options.formDataAppendFile]
     *   Customizes how extracted files are appended to the `FormData` instance.
     *   Defaults to {@linkcode formDataAppendFile}.
     */
    formDataAppendFile?: FormDataFileAppender;

    print?: BaseHttpLink.Printer;

    /**
     * @param {typeof fetch} [options.fetch]
     *   `fetch` implementation. Defaults to the {@linkcode fetch} global.
     */
    fetch?: typeof fetch;

    /**
     * @param {RequestInit} [options.fetchOptions] `fetch` options; overridden by
     *   upload requirements.
     */
    fetchOptions?: RequestInit;

    /**
     * @param {string} [options.credentials] Overrides
     *   {@linkcode RequestInit.credentials credentials} in {@linkcode fetchOptions}.
     */
    credentials?: string;

    /**
     * @param {{ [headerName: string]: string }} [options.headers] Merges with and
     *   overrides {@linkcode RequestInit.headers headers} in {@linkcode fetchOptions}.
     */
    headers?: { [headerName: string]: string };

    /**
     * @param {boolean} [options.includeExtensions] Toggles sending `extensions`
     *   fields to the GraphQL server. Defaults to `false`.
     */
    includeExtensions?: boolean;

    /**
     * @param {boolean} [options.includeUnusedVariables] Toggles including unused
     *   GraphQL variables in the request. Defaults to `false`.
     */
    includeUnusedVariables?: boolean;
}

export default class UploadHttpLink extends ApolloLink {
    constructor(
        options?: UploadHttpLinkOptions,
    );
}

type ExtractableFileMatcher<ExtractableFile = any> = (value: unknown) => value is ExtractableFile;

type FormDataFileAppender<ExtractableFile = any> = (
    formData: FormData,
    fieldName: string,
    file: ExtractableFile,
) => any;

export { ExtractableFileMatcher, FormDataFileAppender };
