// Type definitions for xml-c14n 0.0
// Project: https://github.com/deoxxa/xml-c14n
// Definitions by: Konstantin Yuriev <https://github.com/gallowsmaker>
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare namespace xml_c14n {
    type canonicaliseCb = (err: any, data: string) => void;

    interface Options {
        includeComments?: boolean;
        inclusiveNamespaces?: boolean;
    }

    interface Canonicalize {
        name(): string;
        _processInner(node: Node): string;
        canonicalise(node: Node, cb: canonicaliseCb): void;
    }

    interface CanonizationFactory {
        createCanonicaliser(kind: string, options?: Options): Canonicalize;
        getAlgorithm(uri: string): any;
        registerAlgorithm(uri: string, implementation: any): any;
    }
}

declare function xml_c14n(): xml_c14n.CanonizationFactory;

export = xml_c14n;
