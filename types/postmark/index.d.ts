// Type definitions for postmark 1.3
// Project: http://wildbit.github.io/postmark.js
// Definitions by: Ben Bayard <https://github.com/benbayard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface PostmarkError {
    status: number;
    message: string;
    code: number;
}

interface PostmarkMessageHeader {
    Name: string;
    Value: string;
}

interface PostmarkAttachment {
    Content: string;
    Name: string;
    ContentType: string;
}

interface Filter {
    count: number;
    offset: number;
}

interface PostmarkMessageWithTemplate {
    To: string;
    From: string;
    Cc?: string;
    Bcc?: string;
    ReplyTo?: string;
    TemplateId?: string;
    TemplateModel?: any;
    Tag?: string;
    Subject?: string;
    TrackOpens?: boolean;
    TrackLinks?: string;
    Headers?: PostmarkMessageHeader[];
}

interface PostmarkMessage {
    To: string;
    From: string;
    Cc?: string;
    Bcc?: string;
    ReplyTo?: string;
    Tag?: string;
    Subject?: string;
    HTMLBody?: string;
    TextBody?: string;
    TrackOpens?: boolean;
    TrackLinks?: string;
    Headers?: PostmarkMessageHeader[];
    Attachments?: PostmarkAttachment[];
}

interface Sender {
    Color: string;
    RawEmailEnabled: boolean;
    SmtpApiActivated: boolean;
    DeliveryHookUrl: string;
    InboundHookUrl: string;
    BounceHookUrl: boolean;
    IncludeBounceContentInHook: boolean;
    OpenHookUrl: boolean;
    PostFirstOpenOnly: boolean;
    TrackOpens: boolean;
    TrackLinks: string;
    InboundDomain: string;
    InboundSpamThreshold: number;
}

interface TemplateValidator<T extends object> {
    Subject: string;
    HtmlBody: string;
    TextBody: string;
    TestRenderModel?: T;
    InlineCssForHtmlTestRender?: boolean;
}

type PostmarkCallback<T extends object = any> = ((e: PostmarkError, ret: T) => void) | undefined;

interface SimpleOptions {
    ssl: boolean;
    requestHost: string;
}

interface Options extends SimpleOptions {
    requestFactory(
        options: SimpleOptions
    ): (
        path?: string,
        type?: string,
        content?: PostmarkMessage,
        callback?: PostmarkCallback
    ) => any;
}

declare class Client {
    constructor(serverKey: string, options?: Partial<Options>);
    send(message: PostmarkMessage, callback: PostmarkCallback): void;
    sendEmailWithTemplate(
        message: PostmarkMessageWithTemplate,
        callback: PostmarkCallback
    ): void;
    batch(message: PostmarkMessage[], callback: PostmarkCallback): void;
    sendEmail(message: PostmarkMessage, callback: PostmarkCallback): void;
    sendEmailBatch(message: PostmarkMessage[], callback: PostmarkCallback): void;
    getDeliveryStatistics(callback: PostmarkCallback): void;
    getBounces(filter: Partial<Filter>, callback: PostmarkCallback): void;
    getBounce(id: number, callback: PostmarkCallback): void;
    getBounceDump(id: number, callback: PostmarkCallback): void;
    activateBounce(id: number, callback: PostmarkCallback): void;
    getBounceTags(callback: PostmarkCallback): void;
    getServer(callback: PostmarkCallback): void;
    editServer<T extends keyof Sender>(options: Pick<Sender, T>, callback: PostmarkCallback): void;
    getOutboundMessages(filter: Partial<Filter>, callback: PostmarkCallback): void;
    getOutboundMessageDetails(id: number, callback: PostmarkCallback): void;
    getMessageOpens(filter: Partial<Filter>, callback: PostmarkCallback): void;
    getMessageOpensForSingleMessage(id: number, filter: Partial<Filter>, callback: PostmarkCallback): void;
    getInboundMessages(filter: Partial<Filter>, callback: PostmarkCallback): void;
    getInboundMessageDetails(id: number, callback: PostmarkCallback): void;
    bypassBlockedInboundMessage(id: number, callback: PostmarkCallback): void;
    retryInboundHookForMessage(id: number, callback: PostmarkCallback): void;
    getOuboundOverview(filter: Partial<Filter>, callback: PostmarkCallback): void;
    validateTemplate<T extends object>(templateObject: TemplateValidator<T>, callback: PostmarkCallback): void;
}

interface CreateSignature {
    FromEmail: string;
    Name: string;
    ReplyToEmail?: string;
    ReturnPathDomain?: string;
}

interface CreateServer {
    Name: string;
    Color?: string;
    RawEmailEnabled?: boolean;
    SmtpApiActivated?: boolean;
    DeliveryHookUrl?: string;
    InboundHookUrl?: string;
    BounceHookUrl?: string;
    IncludeBounceContentInHook?: boolean;
    OpenHookUrl?: string;
    PostFirstOpenOnly?: boolean;
    TrackOpens?: boolean;
    TrackLinks?: string;
    InboundDomain?: string;
    InboundSpamThreshold?: number;
}

interface CreateDomain {
    Name: string;
    ReturnPathDomain?: string;
}

declare class AdminClient {
    constructor(apiKey: string, options: Partial<Options>);
    listSenderSignatures(query: Partial<Filter>, callback: PostmarkCallback): void;
    createSenderSignature(options: CreateSignature, callback: PostmarkCallback): void;
    editSenderSignature<T extends keyof CreateSignature>(
        id: number,
        options: Partial<Pick<CreateSignature, T>>,
        callback: PostmarkCallback
    ): void;
    deleteSenderSignature(id: number, callback: PostmarkCallback): void;
    resendSenderSignatureConfirmation(id: number, callback: PostmarkCallback): void;
    verifySenderSignatureSPF(id: number, callback: PostmarkCallback): void;
    requestNewDKIMForSenderSignature(id: number, callback: PostmarkCallback): void;
    getServer(id: number, callback: PostmarkCallback): void;
    createServer(options: CreateServer, callback: PostmarkCallback): void;
    editServer<T extends keyof CreateServer>(
        id: number,
        options: Pick<CreateServer, T>,
        callback: PostmarkCallback
    ): void;
    deleteServer(id: number, callback: PostmarkCallback): void;
    listServers(query: Partial<Filter>, callback: PostmarkCallback): void;
    listDomains(query: Partial<Filter>, callback: PostmarkCallback): void;
    getDomain(id: number, callback: PostmarkCallback): void;
    createDomain(
        options: CreateDomain,
        callback: PostmarkCallback
    ): void;
    editDomain<T extends keyof CreateDomain>(
        id: number,
        options: Pick<CreateDomain, T>,
        callback: PostmarkCallback
    ): void;
    deleteDomain(id: number, callback: PostmarkCallback): void;
    verifyDomainSPF(id: number, callback: PostmarkCallback): void;
    rotateDKIMForDomain(id: number, callback: PostmarkCallback): void;
}

interface ClientClass {
    new(serverKey: string, options: Partial<Options>): Client;
}

interface AdminClientClass {
    new(apiKey: string, options: Partial<Options>): AdminClient;
}

interface Postmark {
    (apiKey: string, options: Partial<Options>): void;
    defaults: Options;
    Client: ClientClass;
    AdminClient: AdminClientClass;
}

declare var postmark: Postmark;

export = postmark;
