import { IdToken } from '../../IdToken';

export interface DeepLinkingMessageOptions {
    message?: string;
    errmessage?: string;
    log?: string;
    errlog?: string;
}

export interface ContentItem {
    type: string;
    title: string;
    url?: string;
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
