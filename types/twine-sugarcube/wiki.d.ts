export type OutputDestination = DocumentFragment | HTMLElement | JQuery;
export interface WikifierOptions {
    ignoreTerminatorCase?: boolean | undefined;
    profile: string;
}

export interface WikifierAPI {
    new(destination: OutputDestination | null, source: string, options?: WikifierOptions): unknown;

    createExternalLink(destination: OutputDestination, url: string, text: string): HTMLAnchorElement;
    createInternalLink(destination: OutputDestination, passage: string, text: string, callback: () => void): HTMLAnchorElement;
    isExternalLink(link: string): boolean;
    wikifyEval(text: string): DocumentFragment;
}

export {};
