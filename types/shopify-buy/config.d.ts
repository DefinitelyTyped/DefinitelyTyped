export {};

interface ConfigAttrs {
    apiVersion?: string;
    domain: string;
    language?: string;
    source?: string;
    storefrontAccessToken: string;
    /**
     * @deprecated
     */
    accessToken?: string;
    /**
     * @deprecated
     */
    apiKey?: string;
}

export default class Config {
    apiVersion: string;
    domain: string;
    language?: string;
    source?: string;
    storefrontAccessToken: string;

    constructor(attrs: ConfigAttrs);
}
