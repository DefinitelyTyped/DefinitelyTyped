import { IdToken } from "../../IdToken";

export interface DeepLinkingMessageOptions {
    message?: string | undefined;
    errmessage?: string | undefined;
    log?: string | undefined;
    errlog?: string | undefined;
}

export interface ContentItem {
    type: string;
    title: string;
    url?: string | undefined;
    custom?: any;
}

export interface DeepLinkingService {
    createDeepLinkingForm(
        idtoken: IdToken,
        contentItems: ContentItem[],
        options: DeepLinkingMessageOptions,
    ): Promise<string | false>;

    createDeepLinkingMessage(
        idtoken: IdToken,
        contentItems: ContentItem[],
        options: DeepLinkingMessageOptions,
    ): Promise<string | false>;
}
