// Type definitions for sfcc-ci 2.9
// Project: https://github.com/SalesforceCommerceCloud/sfcc-ci
// Definitions by: Karim Shehadeh <https://github.com/kshehadeh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type SfccCiCallback = (err: any, result: any) => void;

export const auth: {
    auth: (client_id: string, client_secret: string, callback: SfccCiCallback) => void;
};
export const cartridge: {
    add: (instance: any, cartridgename: any, position: any, target: any, siteid: any, verbose: any, token: any, callback: any) => void;
};
export const code: {
    list: (instance: string, token: string, callback: SfccCiCallback) => void;
    deploy: (instance: string, archive: string, token: string, options: any, callback: SfccCiCallback) => void;
    activate: (instance: string, code_version: string, token: string, callback: SfccCiCallback) => void;
    compare: (instance: string, localDirectories: string | any[], options: any) => Promise<any>;
    diffdeploy: (instance: string, localDirectories: string | any[], codeVersionName: string, options: any, activate: boolean) => Promise<any>;
};
export const instance: {
    upload: (instance: string, file: string, token: string, options: any, callback: SfccCiCallback) => void;
    import: (instance: string, file_name: string, token: string, callback: any) => void;
};
export const job: {
    run: (instance: string, job_id: string, job_params: any[], token: string, callback: SfccCiCallback) => void;
    status: (instance: string, job_id: string, job_execution_id: string, token: string, callback: SfccCiCallback) => void;
};
export const manifest: {
    FILENAME: string;
    generate: (directories: any[], ignorePatterns: any[], targetDirectory: string, fileName: string) => Promise<any>;
};
export const slas: {
    tenant: {
        add: (tenantId: any, shortcode: any, description: any, merchantName: any, contact: any, emailAddress: any, fileName: any) => Promise<any>;
        get: (tenantId: any, shortcode: any) => Promise<any>;
        list: (shortcode: any) => Promise<any>;
        delete: (tenantId: any, shortcode: any) => Promise<any>;
    };
    client: {
        add: (tenantId: any, shortcode: any, file: any, clientid: any,
            clientname: any, privateclient: any, ecomtenant: any, ecomsite: any, secret: any, channels: any, scopes: any, redirecturis: any) => Promise<any>;
        get: (tenantId: any, shortcode: any, clientId: any) => Promise<any>;
        list: (shortcode: any, tenantId: any) => Promise<any>;
        delete: (tenantId: any, shortcode: any, clientId: any) => Promise<any>;
    };
};
export const user: {
    create: (org: string, user: any, mail: string, firstName: string, lastName: string, token: string) => Promise<any>;
    list: (org: string, role: string, login: string, count: number, sortBy: string, token: string) => Promise<any>;
    update: (login: string, changes: any, token: string) => Promise<any>;
    grant: (login: string, role: string, scope: string, token: string) => Promise<any>;
    revoke: (login: string, role: string, scope: string, token: string) => Promise<any>;
    delete: (login: any, purge: boolean, token: string) => Promise<any>;
    createLocal: (instance: string, login: string, user: any, token: string) => Promise<any>;
    searchLocal: (instance: string, login: string, query: string, role: string, sortBy: string, count: string, start: string, token: string) => Promise<any>;
    updateLocal: (instance: string, login: string, changes: any, token: string) => Promise<any>;
    grantLocal: (instance: string, login: string, role: string, token: string) => Promise<any>;
    revokeLocal: (instance: string, login: string, role: string, token: string) => Promise<any>;
    deleteLocal: (instance: string, login: any, token: string) => Promise<any>;
};
export const webdav: {
    upload: (instance: string, path: string, file: string, token: string, options: any, callback: SfccCiCallback) => void;
};
