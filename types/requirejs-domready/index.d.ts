// Type definitions for domReady 2.0.1
// Project: https://github.com/requirejs/domReady
// Definitions by: Nobuhiro Nakamura <https://github.com/lefb766>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface DomReady {
    (callback: () => any): DomReady;
    version: string;
}

declare var domReady: DomReady;

export = domReady;

