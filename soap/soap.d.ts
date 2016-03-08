// Type definitions for soap
// Project: https://www.npmjs.com/package/soap
// Definitions by: Nicole Wang <https://github.com/nicoleWjie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'soap' {
    class WSSecurity {
        constructor(username: string, password: string, options: any);
    }
    interface Client {
        setSecurity(s: WSSecurity): void;
        [method: string]: (args: any, fn: (err: any, result: any) => void, options?: any) => void;
        addSoapHeader(headJSON: any): void;
    }
    function createClient(wsdlPath: string, options: any, fn: (err: any, client: Client) => void): void;

}