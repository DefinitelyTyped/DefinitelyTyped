// Type definitions for kms-json 1.1
// Project: https://github.com/AlexanderMS/kms-json
// Definitions by: Yoichi Imai <https://github.com/sunnyone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.2

declare namespace KmsJson {
    interface KmsJsonOptions {
        awsKmsSettings?: object;
        keyId: string;
        encoding?: string;
    }
}

declare class KmsJson {
    constructor(options: KmsJson.KmsJsonOptions);
    encrypt(inputJson: object): string;
    decrypt(cipherText: string): object;
}

export = KmsJson;
