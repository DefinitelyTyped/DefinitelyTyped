import { Azure } from 'azure-sb';

declare class WrapService {
    constructor(acsHost: string, issuer?: string, accessKey?: string);

    public issuer?: string;
    public accessKey?: string;
    public authenticationProvider: {
        signRequest(webResource: any, callback: () => void): void;
    };
    public strictSSL: boolean;

    public wrapAccessToken(uri: string,
                           callback: Azure.ServiceBus.ResponseCallback): void;

    public wrapAccessToken(uri: string,
                           options: object,
                           callback: Azure.ServiceBus.ResponseCallback): void;
}

export = WrapService;
