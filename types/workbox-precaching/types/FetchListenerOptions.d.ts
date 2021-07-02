import { URLManipulation } from "./URLManipulation";

export interface FetchListenerOptions {
    cleanURLs?: boolean | undefined;
    directoryIndex?: string | undefined;
    ignoreURLParametersMatching?: RegExp[] | undefined;
    urlManipulation?: URLManipulation | undefined;
}
