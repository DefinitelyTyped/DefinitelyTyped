export function connect(apiKey: string, apiSecret: string, options?: ConnectOptions): Email.Client;

export function connect(apiToken: string, options?: ConnectOptions): SMS.Client;

export interface ConnectOptions {
    readonly proxyUrl?: string | undefined;
    readonly timeout?: number | undefined;
    readonly url?: string | undefined;
    readonly version?: string | undefined;
    readonly perform_api_call?: boolean | undefined;
}

export interface ConfigOptions {
    readonly url?: string | undefined;
    readonly version?: string | undefined;
    readonly output?: string | undefined;
    readonly perform_api_call?: boolean | undefined;
    readonly secured?: boolean | undefined;
}

// *** Email API interfaces *** //
export namespace Email {
    interface Client {
        get(action: string, options?: ConfigOptions): GetResource;

        put(action: string, options?: ConfigOptions): PutResource;

        post(action: string, options?: ConfigOptions): PostResource;

        delete(action: string, option?: ConfigOptions): DeleteResource;
    }

    // resources
    interface PostResource {
        id(value: string | number): PostResource;

        action(action: string): PostResource;

        request(params: SendParams): Promise<PostResponse>;

        request(params: object, callback?: (error: Error, res: Response) => void): Promise<Response>;
    }

    interface GetResource {
        id(value: string | number): GetResource;

        action(action: string): GetResource;

        request(params?: object, callback?: (error: Error, res: GetResponse) => void): Promise<GetResponse>;
    }

    interface PutResource {
        id(value: string | number): PutResource;

        request(params: object, callback?: (error: Error, res: PutResponse) => void): Promise<PutResponse>;
    }

    interface DeleteResource {
        id(value: string): DeleteResource;

        request(params?: object, callback?: (error: Error, res: DeleteResponse) => void): Promise<DeleteResponse>;
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

    interface DeleteResponse {
        readonly body: {};
    }

    // request params
    interface SendParams {
        Messages: SendParamsMessage[];
        SandboxMode?: boolean | undefined;
    }

    // other types
    interface SendParamsRecipient {
        Email: string;
        Name?: string | undefined;
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
            Name?: string | undefined;
        };
        Sender?: {
            Email: string;
            Name?: string | undefined;
        } | undefined;
        To: SendParamsRecipient[];
        Cc?: SendParamsRecipient[] | undefined;
        Bcc?: SendParamsRecipient[] | undefined;
        ReplyTo?: SendParamsRecipient | undefined;
        Variables?: object | undefined;
        TemplateID?: number | undefined;
        TemplateLanguage?: boolean | undefined;
        Subject?: string | undefined;
        TextPart?: string | undefined;
        HTMLPart?: string | undefined;
        MonitoringCategory?: string | undefined;
        URLTags?: string | undefined;
        CustomCampaign?: string | undefined;
        DeduplicateCampaign?: boolean | undefined;
        EventPayload?: string | undefined;
        CustomID?: string | undefined;
        Headers?: object | undefined;
        Attachments?: Attachment[] | undefined;
        InlinedAttachments?: InlinedAttachment[] | undefined;
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
        get(action: string, options?: ConfigOptions): GetResource;

        post(action: string, options?: ConfigOptions): PostResource;
    }

    // resources
    interface GetResource {
        id(value: string | number): GetResource;

        action(action: string): GetResourceAction;

        request(params?: GetParams): Promise<GetResponse>;
    }

    interface PostResource {
        action(action: string): PostResource;

        request(params: SendParams): Promise<SendResponse>;

        request(params?: ExportParams): Promise<ExportResponse>;
    }

    interface GetResourceAction {
        id(value: string | number): GetResourceActionId;

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
        FromTS?: number | undefined;
        ToTS?: number | undefined;
        To?: string | undefined;
        StatusCode?: number[] | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
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
        readonly CreationTS?: number | undefined;
        readonly ExpirationTS?: number | undefined;
        readonly Status: ResponseStatus;
        readonly URL?: string | undefined;
        readonly FromTs?: number | undefined;
        readonly ToTs?: number | undefined;
    }

    interface GetResponseActionData {
        readonly Count: number;
    }
}
