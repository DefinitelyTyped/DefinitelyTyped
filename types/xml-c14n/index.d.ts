declare module xml_c14n {
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

export default function c14n(): xml_c14n.CanonizationFactory;
