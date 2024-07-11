import { ApolloLink } from "@apollo/client/link/core/ApolloLink.js";

export default function createUploadLink(
    {
        uri: fetchUri,
        useGETForQueries,
        isExtractableFile: customIsExtractableFile,
        FormData: CustomFormData,
        formDataAppendFile: customFormDataAppendFile,
        print,
        fetch: customFetch,
        fetchOptions,
        credentials,
        headers,
        includeExtensions,
    }?: {
        uri?: [
            operation: import("@apollo/client/core").Operation,
            fallbackURI?: string | ((operation: import("@apollo/client/core").Operation) => string) | undefined,
        ][1];
        useGETForQueries?: boolean | undefined;
        isExtractableFile?: ExtractableFileMatcher<any> | undefined;
        FormData?: {
            new(form?: HTMLFormElement | undefined, submitter?: HTMLElement | null | undefined): FormData;
            prototype: FormData;
        } | undefined;
        formDataAppendFile?: FormDataFileAppender<any> | undefined;
        print?: import("@apollo/client/link/http/selectHttpOptionsAndBody.js").Printer | undefined;
        fetch?: typeof fetch | undefined;
        fetchOptions?: RequestInit | undefined;
        credentials?: string | undefined;
        headers?: {
            [headerName: string]: string;
        } | undefined;
        includeExtensions?: boolean | undefined;
    },
): ApolloLink;

export type ExtractableFileMatcher<ExtractableFile = any> = (value: unknown) => value is ExtractableFile;

export type FormDataFileAppender<ExtractableFile = any> = (
    formData: FormData,
    fieldName: string,
    file: ExtractableFile,
) => any;
