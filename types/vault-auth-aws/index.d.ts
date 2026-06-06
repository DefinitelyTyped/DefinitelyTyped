/// <reference types="node" />

declare class vaultAuthAws {
    constructor(config?: vaultAuthAws.Config);
    authenticate(): Promise<any>;
    getOptions(creds: vaultAuthAws.Creds): vaultAuthAws.Options;
}

declare namespace vaultAuthAws {
    interface Config {
        ssl?: boolean | undefined;
        host?: string | undefined;
        port?: number | undefined;
        apiVersion?: string | undefined;
        vaultLoginUrl?: string | undefined;
        vaultAppName?: string | undefined;
        followAllRedirects?: boolean | undefined;
        certFilePath?: string | undefined;
        sslRejectUnAuthorized?: boolean | undefined;
    }

    interface Creds {
        accessKeyId?: string | undefined;
        secretAccessKey?: string | undefined;
        sessionToken?: string | undefined;
    }

    interface Options {
        url: string;
        followAllRedirects: boolean;
        body: string;
        cert?: Buffer | undefined;
    }
}

export = vaultAuthAws;
