// TypeScript Version: 2.2

declare namespace KmsJson {
    interface KmsJsonOptions {
        awsKmsSettings?: object | undefined;
        keyId: string;
        encoding?: string | undefined;
    }
}

declare class KmsJson {
    constructor(options: KmsJson.KmsJsonOptions);
    encrypt(inputJson: object): string;
    decrypt(cipherText: string): object;
}

export = KmsJson;
