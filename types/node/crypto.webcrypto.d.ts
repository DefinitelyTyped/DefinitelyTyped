declare module "crypto" {
    class SubtleCrypto {
        generateKey(...args: any[]): Promise<string>;
    }
    class CryptoKey {}

    /** Basic cryptography features available in the current context. It allows access to a cryptographically strong random number generator and to cryptographic primitives. */
    interface Crypto {
        readonly subtle: SubtleCrypto;
        getRandomValues<T extends Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | null>(array: T): T;
    }
    interface NodeCrypto extends Crypto {
        readonly CryptoKey: typeof CryptoKey;
    }

    // TODO: Add Node.js-specific extensions
    // https://nodejs.org/api/webcrypto.html#webcrypto_node_js_specific_extensions

    const webcrypto: NodeCrypto;
}
