export type OutputDestination = DocumentFragment | HTMLElement | JQuery;
export interface WikifierOptions {
    ignoreTerminatorCase?: boolean;
    profile: string;
}

export interface WikifierAPI {
    new(destination: OutputDestination | null, source: string, options?: WikifierOptions): unknown;

    createExternalLink(destination: OutputDestination, url: string, text: string): HTMLElement;
    createInternalLink(destination: OutputDestination, passage: string, text: string, callback: () => void): HTMLElement;
    isExternalLink(link: string): boolean;
    wikifyEval(text: string): string;
}

export {};
