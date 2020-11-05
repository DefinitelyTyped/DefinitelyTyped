declare module "crypto" {
    interface NodeCrypto extends Crypto {
        readonly CryptoKey: typeof CryptoKey;
    }

    // TODO: Add Node.js-specific extensions
    // https://nodejs.org/api/webcrypto.html#webcrypto_node_js_specific_extensions

    const webcrypto: NodeCrypto;
}
