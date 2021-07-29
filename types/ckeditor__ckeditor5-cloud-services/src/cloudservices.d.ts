import { ContextPlugin } from "@ckeditor/ckeditor5-core";
import Token from "./token/token";

export default class CloudServices extends ContextPlugin {
    token: Token | null;
    tokenUrl?: string | (() => string) | undefined;
    uploadUrl: string;

    getTokenFor(tokenUrl: string): Token;
    registerTokenUrl(tokenUrl: string | (() => string)): Promise<Token>;
}

export interface CloudServicesConfig {
    bundleVersion?: string | undefined;
    tokenUrl: string | (() => string);
    uploadUrl: string;
    webSocketUrl?: string | undefined;
}
