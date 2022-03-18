// Type definitions for @jsreport/nodejs-client 3.0
// Project: https://github.com/jsreport/jsreport/tree/master/packages/nodejs-client
// Definitions by: reediculous456 <https://github.com/reediculous456>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import JsReport = require('jsreport');
import { ServerResponse } from 'http';

declare namespace JsReportNodeJsClient {
    interface ClientRenderResponse extends ServerResponse {
        body(): Promise<Buffer>;
    }

    interface Client {
        /** @async */
        render(req: Partial<JsReport.Request>, options?: object): Promise<ClientRenderResponse>;
    }
}

declare function createJsReportClient(url: string, username: string, password: string): JsReportNodeJsClient.Client;
declare function createJsReportClient(url: string): JsReportNodeJsClient.Client;
export = createJsReportClient;
