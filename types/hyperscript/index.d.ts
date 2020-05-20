// Type definitions for hyperscript
// Project: https://github.com/dominictarr/hyperscript
// Definitions by: Mike Linkovich <https://github.com/spacejack>, Justin Firth <https://github.com/jmfirth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare module 'hyperscript' {

    interface HyperScript {
        /** Creates an Element */
        <T extends keyof ElementTagNameMap>(tagName: T, attrs?: Object, ...children: any[]): ElementTagNameMap[T];
        <T extends Element>(tagName: string, attrs?: Object, ...children: any[]): T;
        /** Cleans up any event handlers created by this hyperscript context */
        cleanup(): void;
        /** Creates a new hyperscript context */
        context(): HyperScript;
    }

    const h: HyperScript;
    export = h;
}
