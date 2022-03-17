// Type definitions for @jsreport/nodejs-client 3.0
// Project: https://www.npmjs.com/package/@jsreport/nodejs-client
// Definitions by: reediculous456 <https://github.com/reediculous456>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import JsReport = require('jsreport');
import { ServerResponse } from 'http';

declare namespace JsReportNodeJsClient {
    interface ClientRenderResponse extends ServerResponse {
        body(): Promise<Buffer>;
    }

    interface Client {
        render(req: Partial<JsReport.Request>, options?: object): Promise<ClientRenderResponse>;
    }
}

declare function CreateJsReportClient(url: string, username?: string, password?: string): JsReportNodeJsClient.Client;
export = CreateJsReportClient;
