// Type definitions for vault-auth-aws 0.1
// Project: https://github.com/abdullahshahin/vault-auth-aws
// Definitions by: Nathan McGinn <https://github.com/nmcginn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7
/// <reference types="node" />

declare namespace vaultAuthAws {
    interface Client {
        authenticate(): Promise<any>;
        getOptions(creds: Creds): Options;
    }

    interface Config {
        ssl?: boolean;
        host?: string;
        port?: number;
        apiVersion?: string;
        vaultLoginUrl?: string;
        vaultAppName?: string;
        followAllRedirects?: boolean;
        certFilePath?: string;
        sslRejectUnAuthorized?: boolean;
    }

    interface Creds {
        accessKeyId?: string;
        secretAccessKey?: string;
        sessionToken?: string;
    }

    interface Options {
        url: string;
        followAllRedirects: boolean;
        body: string;
        cert?: Buffer;
    }
}

declare function vaultAuthAws(config?: vaultAuthAws.Config): vaultAuthAws.Client;

export = vaultAuthAws;
