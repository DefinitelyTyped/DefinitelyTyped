import jsreport = require("jsreport");
import JsReport = require("jsreport-core");
import { ServerResponse } from "http";

declare module "jsreport-core" {
    interface ClientRenderResponse extends ServerResponse {
        body(): Promise<Buffer>;
    }
    interface Client {
        render(req: Partial<Request>, options?: object): Promise<ClientRenderResponse>;
    }
}

declare function CreateJsReportClient(url: string, username?: string, password?: string): JsReport.Client;
export = CreateJsReportClient;
