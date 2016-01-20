// Type definitions for domReady 2.0.1
// Project: https://github.com/requirejs/domReady
// Definitions by: Nobuhiro Nakamura <https://github.com/lefb766>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "domReady" {
    interface DomReady {
        (callback: () => any): DomReady;
        version: string;
    }

    let domReady: DomReady;

    export = domReady;
}
