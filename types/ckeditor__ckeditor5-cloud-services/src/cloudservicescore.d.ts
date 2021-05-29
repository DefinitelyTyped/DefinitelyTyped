import { ContextPlugin } from "@ckeditor/ckeditor5-core";
import Token from "./token/token";
import UploadGateway from "./uploadgateway/uploadgateway";

export default class CloudServicesCore extends ContextPlugin {
    static pluginName: "CloudServicesCore";
    createToken(
        tokenUrlOrRefreshToken: string | (() => string),
        options?: { initValue?: string; autoRefresh?: boolean },
    ): Token;
    createUploadGateway(token: Token, apiAddress: string): UploadGateway;
}
