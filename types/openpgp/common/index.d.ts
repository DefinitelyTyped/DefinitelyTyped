export class HKP {
    constructor(keyServerUrl?: string);
    lookup(options: {keyId?: string, query?: string }): Promise<string>;
    upload(publicKeyArmored: string): Promise<Response>;
}
