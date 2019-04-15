// Type definitions for node-mailjet 3.3
// Project: https://github.com/mailjet/mailjet-apiv3-nodejs
// Definitions by: Nikola Andreev <https://github.com/Nikola-Andreev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace MailJet {
    function connect(apiKey: string, apiSecret: string, options?: MailJet.ConnectOptions): MailJet.EmailClient;

    function connect(apiToken: string, options?: MailJet.ConnectOptions): MailJet.SMSClient;

    interface ConnectOptions {
        readonly proxyUrl?: string;
        readonly timeout?: number;
        readonly url?: string;
        readonly version?: string;
        readonly perform_api_call?: boolean;
    }

    interface ConfigOptions {
        readonly url?: string;
        readonly version?: string;
        readonly output?: string;
        readonly perform_api_call?: boolean;
        readonly secured?: boolean;
    }

    // *** Email interfaces *** //
    interface EmailClient {
        get(action: string): EmailGetResource;

        put(action: string): EmailPutResource;

        post(action: string, options?: ConfigOptions): EmailPostResource;
    }

    // resources
    interface EmailPostResource {
        id(value: string): EmailPostResource;

        action(action: string): EmailPostResource;

        request(params: EmailSendParams): Promise<EmailPostResponse>;

        request(params: object, callback?: (error: Error, res: EmailResponse) => void): Promise<EmailResponse>;
    }

    interface EmailGetResource {
        id(value: string): EmailGetResource;

        action(action: string): EmailGetResource;

        request(params?: object, callback?: (error: Error, res: EmailResponse) => void): Promise<EmailResponse>;
    }

    interface EmailPutResource {
        id(value: string): EmailPutResource;

        request(params: object, callback?: (error: Error, res: EmailResponse) => void): Promise<EmailResponse>;
    }

    // responses
    interface EmailResponse {
        readonly body: any;
    }

    interface EmailPostResponse {
        readonly body: EmailPostResponseData;
    }

    // request params
    interface EmailSendParams {
        Messages: SendParamsMessage[];
        SandboxMode?: boolean;
    }

    // other types
    interface SendParamsRecipient {
        Email: string;
        Name: string;
    }

    interface SendParamsMessage {
        From: {
            Email: string
            Name: string
        };
        To: SendParamsRecipient[];
        Cc?: SendParamsRecipient[];
        Bcc?: SendParamsRecipient[];
        Variables?: object;
        TemplateID?: number;
        TemplateLanguage?: boolean;
        Subject: string;
        TextPart?: string;
        HTMLPart?: string;
        MonitoringCategory?: string;
        URLTags?: string;
        CustomCampaign?: string;
        DeduplicateCampaign?: boolean;
        EventPayload?: string;
        CustomID?: string;
        Headers?: object;
        Attachments?: [{
            "ContentType": string
            "Filename": string
            "Base64Content": string
        }];
        InlinedAttachments?: [{
            ContentType: string
            Filename: string
            ContentID: string
            Base64Content: string
        }];
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

    interface EmailPostResponseData {
        readonly Messages: ReadonlyArray<PostResponseDataMessage>;
    }

    // *** SMS interfaces *** ///
    interface SMSClient {
        get(action: string): SMSGetResource;

        post(action: string): SMSPostResource;
    }

    // resources
    interface SMSGetResource {
        id(value: string): SMSGetResource;

        action(action: string): GetResourceAction;

        request(params?: GetParams): Promise<SMSGetResponse>;
    }

    interface SMSPostResource {
        action(action: string): SMSPostResource;

        request(params: SMSSendParams): Promise<SendResponse>;

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
    interface SMSGetResponse {
        readonly body: GetResponseData;
    }

    interface SendResponse {
        readonly body: SMSPostResponseData;
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

    interface SMSSendParams {
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

    interface SMSPostResponseData {
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

export = MailJet;
