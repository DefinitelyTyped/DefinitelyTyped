import JsReport = require("jsreport");
import { ServerResponse } from "http";

declare namespace createJsReportClient {
    interface ClientRenderResponse extends ServerResponse {
        body(): Promise<Buffer>;
    }

    interface Client {
        /** @async */
        render(req: Partial<JsReport.Request>, options?: object): Promise<ClientRenderResponse>;
    }
}

declare function createJsReportClient(url: string, username: string, password: string): createJsReportClient.Client;
declare function createJsReportClient(url: string): createJsReportClient.Client;
export = createJsReportClient;
