export namespace keypair {
    export function getEncPublicKey(encPrivateKey: string): string;

    export function getAddress(encPublicKey: string): string;

    export function parsePrivateKey(encPrivateKey: string): string;

    export function parsePublicKey(encPublicKey: string): string;

    export function getKeyPair(): any;

    export function checkEncPrivateKey(encPrivateKey: string): boolean;

    export function checkEncPublicKey(encPublicKey: string): boolean;

    export function checkAddress(address: string): boolean;
}

export namespace keystore {
    export function encrypt(encPrivateKey: string, password: string, callback: any): void;

    export function decrypt(keystore: any, password: string, callback: any): string;
}

export namespace signature {
    export function sign(message: string, encPrivateKey: string): string;

    export function verify(message: any, signature: string, encPublicKey: any): boolean;
}
