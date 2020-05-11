import { URLManipulation } from "./URLManipulation";

export interface FetchListenerOptions {
    cleanURLs?: boolean;
    directoryIndex?: string;
    ignoreURLParametersMatching?: RegExp[];
    urlManipulation?: URLManipulation;
}
