export namespace keypair {
    function getEncPublicKey(encPrivateKey: string): string;

    function getAddress(encPublicKey: string): string;

    function parsePrivateKey(encPrivateKey: string): string;

    function parsePublicKey(encPublicKey: string): string;

    function getKeyPair(): any;

    function checkEncPrivateKey(encPrivateKey: string): boolean;

    function checkEncPublicKey(encPublicKey: string): boolean;

    function checkAddress(address: string): boolean;
}

export namespace keystore {
    function encrypt(encPrivateKey: string, password: string, callback: any): void;

    function decrypt(keystore: any, password: string, callback: any): string;
}

export namespace signature {
    function sign(message: string, encPrivateKey: string): string;

    function verify(message: any, signature: string, encPublicKey: any): boolean;
}
