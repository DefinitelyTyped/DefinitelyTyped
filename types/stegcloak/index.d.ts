declare class StegCloak {
    constructor(encryption: boolean, hmac: boolean);

    hide(secret: string, password: string, cover: string): string;

    reveal(data: string, password: string): string;
}

export = StegCloak;
