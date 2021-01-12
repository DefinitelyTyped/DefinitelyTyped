// Type definitions for node-mailjet 3.3
// Project: https://github.com/mailjet/mailjet-apiv3-nodejs
// Definitions by: Nikola Andreev <https://github.com/Nikola-Andreev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function connect(apiKey: string, apiSecret: string, options?: ConnectOptions): Email.Client;

export function connect(apiToken: string, options?: ConnectOptions): SMS.Client;

export interface ConnectOptions {
    readonly proxyUrl?: string;
    readonly timeout?: number;
    readonly url?: string;
    readonly version?: string;
    readonly perform_api_call?: boolean;
}

export interface ConfigOptions {
    readonly url?: string;
    readonly version?: string;
    readonly output?: string;
    readonly perform_api_call?: boolean;
    readonly secured?: boolean;
}

// *** Email API interfaces *** //
export namespace Email {
    interface Client {
        get(action: string, options?: ConfigOptions): GetResource;

        put(action: string, options?: ConfigOptions): PutResource;

        post(action: string, options?: ConfigOptions): PostResource;
    }

    // resources
    interface PostResource {
        id(value: string): PostResource;

        action(action: string): PostResource;

        request(params: SendParams): Promise<PostResponse>;

        request(params: object, callback?: (error: Error, res: Response) => void): Promise<Response>;
    }

    interface GetResource {
        id(value: string): GetResource;

        action(action: string): GetResource;

        request(params?: object, callback?: (error: Error, res: GetResponse) => void): Promise<GetResponse>;
    }

    interface PutResource {
        id(value: string): PutResource;

        request(params: object, callback?: (error: Error, res: PutResponse) => void): Promise<PutResponse>;
    }

    // responses
    interface Response {
        readonly body: object;
    }

    interface GetResponse {
        readonly body: GetResponseData;
    }

    interface PostResponse {
        readonly body: PostResponseData;
    }

    interface PutResponse {
        readonly body: PutResponseData;
    }

    // request params
    interface SendParams {
        Messages: SendParamsMessage[];
        SandboxMode?: boolean;
    }

    // other types
    interface SendParamsRecipient {
        Email: string;
        Name?: string;
    }

    interface Attachment {
        ContentType: string;
        Filename: string;
        Base64Content: string;
    }

    interface InlinedAttachment extends Attachment {
        ContentID: string;
    }

    interface SendParamsMessage {
        From: {
            Email: string;
            Name?: string;
        };
        Sender?: {
            Email: string;
            Name?: string;
        };
        To: SendParamsRecipient[];
        Cc?: SendParamsRecipient[];
        Bcc?: SendParamsRecipient[];
        ReplyTo?: SendParamsRecipient;
        Variables?: object;
        TemplateID?: number;
        TemplateLanguage?: boolean;
        Subject?: string;
        TextPart?: string;
        HTMLPart?: string;
        MonitoringCategory?: string;
        URLTags?: string;
        CustomCampaign?: string;
        DeduplicateCampaign?: boolean;
        EventPayload?: string;
        CustomID?: string;
        Headers?: object;
        Attachments?: Attachment[];
        InlinedAttachments?: InlinedAttachment[];
    }

    interface PostResponseDataMessage {
        readonly Status: string;
        readonly CustomID: string;
        readonly To: ReadonlyArray<PostResponseDataTo>;
        readonly Cc: ReadonlyArray<PostResponseDataTo>;
        readonly Bcc: ReadonlyArray<PostResponseDataTo>;
    }

    interface PostResponseDataTo {
        readonly Email: string;
        readonly MessageUUID: string;
        readonly MessageID: number;
        readonly MessageHref: string;
    }

    interface GetResponseData {
        readonly Count: number;
        readonly Data: ReadonlyArray<object>;
        readonly Total: number;
    }

    interface PostResponseData {
        readonly Messages: ReadonlyArray<PostResponseDataMessage>;
    }

    interface PutResponseData {
        readonly Count: number;
        readonly Data: ReadonlyArray<object>;
        readonly Total: number;
    }
}

// *** SMS API interfaces *** ///
export namespace SMS {
    interface Client {
        get(action: string): GetResource;

        post(action: string): PostResource;
    }

    // resources
    interface GetResource {
        id(value: string): GetResource;

        action(action: string): GetResourceAction;

        request(params?: GetParams): Promise<GetResponse>;
    }

    interface PostResource {
        action(action: string): PostResource;

        request(params: SendParams): Promise<SendResponse>;

        request(params?: ExportParams): Promise<ExportResponse>;
    }

    interface GetResourceAction {
        id(value: string): GetResourceActionId;

        request(params?: GetParams): Promise<GetResponseAction>;
    }

    interface GetResourceActionId {
        request(): Promise<ExportResponse>;
    }

    // responses
    interface GetResponse {
        readonly body: GetResponseData;
    }

    interface SendResponse {
        readonly body: PostResponseData;
        readonly url: string;
    }

    interface ExportResponse {
        readonly body: ExportResponseData;
    }

    interface GetResponseAction {
        readonly body: GetResponseActionData;
    }

    // request params
    interface GetParams {
        FromTS?: number;
        ToTS?: number;
        To?: string;
        StatusCode?: number[];
        Limit?: number;
        Offset?: number;
    }

    interface SendParams {
        Text: string;
        To: string;
        From: string;
    }

    interface ExportParams {
        FromTS: number;
        ToTS: number;
    }

    // other types
    interface GetResponseDataData {
        readonly From: string;
        readonly To: string;
        readonly Status: ResponseStatus;
        readonly MessageId: string;
        readonly CreationTS: number;
        readonly SentTS: number;
        readonly SMSCount: number;
        readonly Cost: ResponseCost;
    }

    interface ResponseStatus {
        readonly Code: number;
        readonly Name: string;
        readonly Description: string;
    }

    interface ResponseCost {
        readonly Value: number;
        readonly Currency: string;
    }

    interface GetResponseData {
        readonly Data: ReadonlyArray<GetResponseDataData>;
    }

    interface PostResponseData {
        readonly From: string;
        readonly To: string;
        readonly Text: string;
        readonly MessageId: string;
        readonly SmsCount: number;
        readonly CreationTS: number;
        readonly SentTS: number;
        readonly Cost: ResponseCost;
        readonly Status: ResponseStatus;
    }

    interface ExportResponseData {
        readonly ID: number;
        readonly CreationTS?: number;
        readonly ExpirationTS?: number;
        readonly Status: ResponseStatus;
        readonly URL?: string;
        readonly FromTs?: number;
        readonly ToTs?: number;
    }

    interface GetResponseActionData {
        readonly Count: number;
    }
}
