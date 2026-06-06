declare namespace xml_c14n {
    type canonicaliseCb = (err: any, data: string) => void;

    interface Options {
        includeComments?: boolean | undefined;
        inclusiveNamespaces?: boolean | undefined;
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
