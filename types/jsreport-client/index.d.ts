// Type definitions for jsreport-client 1.2
// Project: https://github.com/jsreport/nodejs-client
// Definitions by: pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import jsreport = require('jsreport');
import JsReport = require('jsreport-core');
import { ServerResponse } from 'http';

declare module 'jsreport-core' {
    interface ClientRenderResponse extends ServerResponse {
        body(): Promise<Buffer>;
    }
    interface Client {
        render(req: Partial<Request>, options?: object): Promise<ClientRenderResponse>;
    }
}

declare function CreateJsReportClient(url: string, username?: string, password?: string): JsReport.Client;
export = CreateJsReportClient;
