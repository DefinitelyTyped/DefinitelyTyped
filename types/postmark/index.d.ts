// Type definitions for postmark 1.4
// Project: http://wildbit.github.io/postmark.js
// Definitions by:  Ben Bayard <https://github.com/benbayard>
//                  Jinesh Shah <https://github.com/jineshshah36>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare namespace Postmark {
    const defaults: Options;

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
        count?: number;
        offset?: number;
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

    type PostmarkCallback<T extends object = any> =
        | ((e: PostmarkError, ret: T) => undefined)
        | undefined;

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

    class Client {
        constructor(serverKey: string, options?: Partial<Options>);

        send(message: PostmarkMessage): Promise<SendStatus>;
        send(
            message: PostmarkMessage,
            callback: PostmarkCallback<SendStatus>
        ): undefined;

        sendEmailWithTemplate(
            message: PostmarkMessageWithTemplate
        ): Promise<SendStatus>;
        sendEmailWithTemplate(
            message: PostmarkMessageWithTemplate,
            callback: PostmarkCallback<SendStatus>
        ): undefined;

        batch(message: PostmarkMessage[]): Promise<SendStatus[]>;
        batch(
            message: PostmarkMessage[],
            callback: PostmarkCallback<SendStatus[]>
        ): undefined;

        sendEmail(message: PostmarkMessage): Promise<SendStatus>;
        sendEmail(
            message: PostmarkMessage,
            callback: PostmarkCallback<SendStatus>
        ): undefined;

        sendEmailBatch(message: PostmarkMessage[]): Promise<SendStatus[]>;
        sendEmailBatch(
            message: PostmarkMessage[],
            callback: PostmarkCallback<SendStatus[]>
        ): undefined;

        // stats
        getDeliveryStatistics(): Promise<DeliveryStats>;
        getDeliveryStatistics(
            callback: PostmarkCallback<DeliveryStats>
        ): undefined;

        // bounces
        getBounces(filter: BounceFilter): Promise<BouncesResult>;
        getBounces(
            filter: BounceFilter,
            callback?: PostmarkCallback<BouncesResult>
        ): undefined;

        getBounce(id: number): Promise<Bounce>;
        getBounce(id: number, callback?: PostmarkCallback<Bounce>): undefined;

        getBounceDump(id: number): Promise<BounceDump>;
        getBounceDump(
            id: number,
            callback?: PostmarkCallback<BounceDump>
        ): undefined;

        activateBounce(id: number): Promise<ActivatedBounceResult>;
        activateBounce(
            id: number,
            callback?: PostmarkCallback<ActivatedBounceResult>
        ): undefined;

        getBounceTags(): Promise<string[]>;
        getBounceTags(callback?: PostmarkCallback<string[]>): undefined;

        // server
        getServer(): Promise<Server>;
        getServer(callback?: PostmarkCallback<Server>): undefined;

        editServer(server: Partial<Server>): Promise<Server>;
        editServer(
            server: Partial<Server>,
            callback?: PostmarkCallback<Server>
        ): undefined;

        // message info
        getOutboundMessages(
            filter: OutboundMessageFilter
        ): Promise<OutboundMessagesResult>;
        getOutboundMessages(
            filter: OutboundMessageFilter,
            callback?: PostmarkCallback<OutboundMessagesResult>
        ): undefined;

        getOutboundMessageDetails(id: number): Promise<OutboundMessage>;
        getOutboundMessageDetails(
            id: number,
            callback?: PostmarkCallback<OutboundMessage>
        ): undefined;

        getMessageOpens(filter: OpenMessageFilter): Promise<MessageOpensResult>;
        getMessageOpens(
            filter: OpenMessageFilter,
            callback?: PostmarkCallback<MessageOpensResult>
        ): undefined;

        getMessageOpensForSingleMessage(
            id: number,
            filter: Filter
        ): Promise<MessageOpensResult>;
        getMessageOpensForSingleMessage(
            id: number,
            filter: Filter,
            callback?: PostmarkCallback<MessageOpensResult>
        ): undefined;

        getInboundMessages(
            filter: InboundMessageFilter
        ): Promise<InboundMessagesResult>;
        getInboundMessages(
            filter: InboundMessageFilter,
            callback?: PostmarkCallback<InboundMessagesResult>
        ): undefined;

        getInboundMessageDetails(id: number): Promise<InboundMessage>;
        getInboundMessageDetails(
            id: number,
            callback?: PostmarkCallback<InboundMessage>
        ): undefined;

        bypassBlockedInboundMessage(id: number): Promise<GenericResult>;
        bypassBlockedInboundMessage(
            id: number,
            callback?: PostmarkCallback<GenericResult>
        ): undefined;

        getOuboundOverview(filter: BaseFilter): Promise<OutboundOverview>;
        getOuboundOverview(
            filter: BaseFilter,
            callback?: PostmarkCallback<OutboundOverview>
        ): undefined;

        retryInboundHookForMessage(id: number): Promise<GenericResult>;
        retryInboundHookForMessage(
            id: number,
            callback?: PostmarkCallback<GenericResult>
        ): undefined;

        // templates
        getTemplate(id: number): Promise<Template>;
        getTemplate(
            id: number,
            callback?: PostmarkCallback<Template>
        ): undefined;

        createTemplate(template: Partial<Template>): Promise<TemplateBase>;
        createTemplate(
            template: Partial<Template>,
            callback?: PostmarkCallback<TemplateBase>
        ): undefined;

        editTemplate(template: Partial<Template>): Promise<TemplateBase>;
        editTemplate(
            template: Partial<Template>,
            callback?: PostmarkCallback<TemplateBase>
        ): undefined;

        getTemplates(filter: Filter): Promise<TemplatesResult>;
        getTemplates(
            filter: Filter,
            callback?: PostmarkCallback<TemplatesResult>
        ): undefined;

        deleteTemplate(id: number): Promise<GenericResult>;
        deleteTemplate(
            id: number,
            callback?: PostmarkCallback<GenericResult>
        ): undefined;

        validateTemplate<T extends object>(
            templateObject: TemplateValidator<T>
        ): Promise<TemplateValidationResult<T>>;
        validateTemplate<T extends object>(
            templateObject: TemplateValidator<T>,
            callback?: PostmarkCallback<TemplateValidationResult<T>>
        ): undefined;
    }

    interface CreateSignature extends UpdateSignature {
        FromEmail: string;
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

    class AdminClient {
        constructor(apiKey: string, options: Partial<Options>);
        listSenderSignatures(query: Filter): Promise<SenderSignaturesResults>;
        listSenderSignatures(
            query: Filter,
            callback?: PostmarkCallback<SenderSignaturesResults>
        ): undefined;

        createSenderSignature(
            options: CreateSignature
        ): Promise<SenderSignature>;
        createSenderSignature(
            options: CreateSignature,
            callback?: PostmarkCallback<SenderSignature>
        ): undefined;

        editSenderSignature(
            id: number,
            options: UpdateSignature
        ): Promise<SenderSignature>;
        editSenderSignature(
            id: number,
            options: UpdateSignature,
            callback?: PostmarkCallback<SenderSignature>
        ): undefined;

        deleteSenderSignature(id: number): Promise<GenericResult>;
        deleteSenderSignature(
            id: number,
            callback?: PostmarkCallback<GenericResult>
        ): undefined;

        resendSenderSignatureConfirmation(id: number): Promise<GenericResult>;
        resendSenderSignatureConfirmation(
            id: number,
            callback?: PostmarkCallback<GenericResult>
        ): undefined;

        verifySenderSignatureSPF(id: number): Promise<SenderSignature>;
        verifySenderSignatureSPF(
            id: number,
            callback?: PostmarkCallback<SenderSignature>
        ): undefined;

        requestNewDKIMForSenderSignature(id: number): Promise<GenericResult>;
        requestNewDKIMForSenderSignature(
            id: number,
            callback?: PostmarkCallback<GenericResult>
        ): undefined;

        // servers
        getServer(id: number): Promise<Server>;
        getServer(id: number, callback?: PostmarkCallback<Server>): undefined;

        createServer(options: CreateServer): Promise<Server>;
        createServer(
            options: CreateServer,
            callback?: PostmarkCallback<Server>
        ): undefined;

        editServer(id: number, options: Partial<CreateServer>): Promise<Server>;
        editServer(
            id: number,
            options: Partial<CreateServer>,
            callback?: PostmarkCallback<Server>
        ): undefined;

        deleteServer(id: number): Promise<GenericResult>;
        deleteServer(
            id: number,
            callback?: PostmarkCallback<GenericResult>
        ): undefined;

        listServers(query: ServerFilter): Promise<ServersResult>;
        listServers(
            query: ServerFilter,
            callback?: PostmarkCallback<ServersResult>
        ): undefined;

        // domains
        listDomains(query: Filter): Promise<DomainsResult>;
        listDomains(
            query: Filter,
            callback?: PostmarkCallback<DomainsResult>
        ): undefined;

        getDomain(id: number): Promise<Domain>;
        getDomain(id: number, callback?: PostmarkCallback<Domain>): undefined;

        createDomain(options: CreateDomain): Promise<Domain>;
        createDomain(
            options: CreateDomain,
            callback?: PostmarkCallback<Domain>
        ): undefined;

        editDomain(id: number, options: Partial<CreateDomain>): Promise<Domain>;
        editDomain(
            id: number,
            options: Partial<CreateDomain>,
            callback?: PostmarkCallback<Domain>
        ): undefined;

        deleteDomain(id: number): Promise<GenericResult>;
        deleteDomain(
            id: number,
            callback?: PostmarkCallback<GenericResult>
        ): undefined;

        verifyDomainSPF(id: number): Promise<SenderSignature>;
        verifyDomainSPF(
            id: number,
            callback?: PostmarkCallback<SenderSignature>
        ): undefined;

        rotateDKIMForDomain(id: number): Promise<RotateDKIMResult>;
        rotateDKIMForDomain(
            id: number,
            callback?: PostmarkCallback<RotateDKIMResult>
        ): undefined;
    }

    interface ClientClass {
        new (serverKey: string, options: Partial<Options>): Client;
    }

    interface AdminClientClass {
        new (apiKey: string, options: Partial<Options>): AdminClient;
    }

    interface Postmark {
        (apiKey: string, options: Partial<Options>): Client;
        defaults: Options;
        Client: ClientClass;
        AdminClient: AdminClientClass;
    }

    // server
    interface Server extends Sender {
        ID: number;
        ApiTokens: string[];
        ServerLink: string;
        Name: string;
    }

    interface SendStatus {
        To: string;
        SubmittedAt: string;
        MessageID: string;
        ErrorCode: number;
        Message: string;
    }

    // validation
    interface ValidationError {
        Message: string;
        Line: number;
        CharacterPosition: number;
    }

    interface ValidationSet {
        ContentIsValid: boolean;
        ValidationErrors: ValidationError[];
        RenderedContent: string;
    }

    interface TemplateValidator<T extends object> {
        Subject: string;
        HtmlBody: string;
        TextBody: string;
        TestRenderModel?: T;
        InlineCssForHtmlTestRender?: boolean;
    }

    // templates
    interface TemplateBase {
        Name: string;
        TemplateId: number;
        Active: boolean;
    }

    interface Template extends TemplateBase {
        Subject: string;
        HtmlBody: string;
        TextBody: string;
        AssociatedServerId: number;
    }

    // filters
    interface BaseFilter extends Filter {
        tag?: string;
        todate?: string;
        fromdate?: string;
    }
    interface BounceFilter extends BaseFilter {
        type?: string;
        inactive?: boolean;
        emailFilter?: string;
        messageID?: string;
    }

    interface OutboundMessageFilter extends BaseFilter {
        recipient?: string;
        fromemail?: string;
        status?: string;
    }

    interface InboundMessageFilter extends OutboundMessageFilter {
        mailboxhash?: string;
        subject?: string;
    }

    interface OpenMessageFilter extends BaseFilter {
        client_name?: string;
        client_company?: string;
        client_family?: string;
        os_name?: string;
        os_family?: string;
        os_company?: string;
        platform?: string;
        region?: string;
        city?: string;
    }

    interface ServerFilter extends Filter {
        name?: string;
    }

    // bounces
    interface Bounce {
        ID: number;
        Type: string;
        TypeCode: number;
        Name: string;
        Tag: string;
        MessageID: string;
        ServerID: number;
        Description: string;
        Details: string;
        Email: string;
        From: string;
        Subject: string;
        BouncedAt: string;
        DumpAvailable: boolean;
        Inactive: boolean;
        CanActivate: boolean;
        Content: string;
    }

    interface BounceDump {
        Body: string;
    }

    // tracking info
    interface VendorTrackingInfo {
        Name: string;
        Company: string;
        Family: string;
    }

    interface GeoTrackingInfo {
        CountryISOCode: string;
        Country: string;
        RegionISOCode: string;
        Region: string;
        City: string;
        Zip: string;
        Coords: string;
        IP: string;
    }

    interface BounceStats {
        Name: string;
        Count: number;
        Type: string | undefined;
    }

    interface DeliveryStats {
        InactiveMails: number;
        Bounces: BounceStats[];
    }

    interface MessageOpens {
        FirstOpen: boolean;
        Client: VendorTrackingInfo;
        OS: VendorTrackingInfo;
        Platform: string;
        UserAgent: string;
        ReadSeconds: number;
        Geo: GeoTrackingInfo;
        MessageID: string;
        ReceivedAt: string;
        Tag: string;
        Recipient: string;
    }

    interface ExpandedEmail {
        Email: string;
        Name: string;
    }

    // message events
    interface MessageEvents {
        Recipient: string;
        Type: string;
        ReceivedAt: string;
        Details: MessageEventDetails;
    }

    interface MessageEventDetails {
        Summary?: string;
        BounceID?: string;
        Link?: string;
        ClickLocation?: string;
        DeliveryMessage?: string;
        DestinationServer?: string;
        DestinationIP?: string;
    }

    // messages
    interface MessageBase {
        Tag: string;
        MessageID: string;
        From: string;
        Cc: string;
        Subject: string;
        Status: string;
        Attachments: PostmarkAttachment[];
    }

    interface OutboundMessageBase extends MessageBase {
        To: ExpandedEmail[];
        Recipients: string[];
        ReceivedAt: string;
        TrackOpens: boolean;
        TrackLinks: string;
    }

    interface OutboundMessage extends OutboundMessageBase {
        TextBody: string;
        HtmlBody: string;
        Body: string;
        MessageEvents: MessageEvents[];
    }

    interface InboundMessageBase extends MessageBase {
        FromName: string;
        FromFull: ExpandedEmail;
        To: string;
        ToFull: ExpandedEmail[];
        CcFull: ExpandedEmail[];
        ReplyTo: string;
        OriginalRecipient: string;
        Date: string;
        MailboxHash: string;
    }

    interface InboundMessage extends InboundMessageBase {
        TextBody: string;
        HtmlBody: string;
        Headers: PostmarkMessageHeader[];
        BlockedReason?: string;
        MessageEvents: MessageEvents[];
    }

    // Results
    interface GenericResult {
        Message: string;
        ErrorCode?: number;
    }

    interface PaginatedResult {
        TotalCount: number;
    }

    interface ActivatedBounceResult extends GenericResult {
        Bounce: Bounce;
    }

    interface BouncesResult extends PaginatedResult {
        Bounces: Bounce[];
    }

    interface TemplatesResult extends PaginatedResult {
        Templates: TemplateBase[];
    }

    interface MessageOpensResult extends PaginatedResult {
        Opens: MessageOpens[];
    }

    interface OutboundMessagesResult extends PaginatedResult {
        Messages: OutboundMessageBase[];
    }

    interface InboundMessagesResult extends PaginatedResult {
        InboundMessages: InboundMessageBase[];
    }

    interface TemplateValidationResult<T extends object = any> {
        AllContentIsValid: boolean;
        HtmlBody: ValidationSet;
        TextBody: ValidationSet;
        Subject: ValidationSet;
        SuggestedTemplateModel: T;
    }

    interface SenderSignaturesResults extends PaginatedResult {
        SenderSignatures: SenderSignatureBase[];
    }

    interface ServersResult extends PaginatedResult {
        Servers: Server[];
    }

    interface DomainsResult extends PaginatedResult {
        Domains: DomainBase[];
    }

    // sender signature
    interface SenderSignatureBase {
        Domain: string;
        EmailAddress: string;
        Name: string;
        ReplyToEmailAddress: string;
        Confirmed: boolean;
        ID: number;
    }

    interface SPFRecord {
        SPFHost: string;
        SPFTextValue: string;
        SPFVerified: boolean;
    }

    interface DKIMKey {
        WeakDKIM: boolean;
        DKIMHost: string;
        DKIMVerified: boolean;
        DKIMTextValue: string;
        DKIMPendingHost: string;
        DKIMPendingTextValue: string;
        DKIMRevokedHost: string;
        DKIMRevokedTextValue: string;
        SafeToRemoveRevokedKeyFromDNS: boolean;
        DKIMUpdateStatus: string;
    }

    interface VerificationDetails extends SPFRecord, DKIMKey {
        ReturnPathDomain: string;
        ReturnPathDomainCNAMEValue: string;
    }

    interface SenderSignature extends SenderSignatureBase, VerificationDetails {
        ReturnPathDomainVerified: boolean;
    }

    interface UpdateSignature {
        Name: string;
        ReplyToEmail?: string;
        ReturnPathDomain?: string;
    }

    // domain
    interface DomainBase {
        ID: number;
        Name: string;
        SPFVerified: boolean;
        DKIMVerified: boolean;
        WeakDKIM: boolean;
        ReturnPathDomainVerified: boolean;
    }

    interface Domain extends DomainBase, VerificationDetails {}

    interface RotateDKIMResult extends DKIMKey {
        Name: string;
        ID: string;
    }

    // outbound overview
    interface OutboundOverview {
        Sent: number;
        Bounced: number;
        SMTPApiErrors: number;
        BounceRate: number;
        SpamComplaints: number;
        SpamComplaintsRate: number;
        Opens: number;
        UniqueOpens: number;
        Tracked: number;
        WithLinkTracking: number;
        WithOpenTracking: number;
        TotalTrackedLinksSent: number;
        UniqueLinksClicked: number;
        TotalClicks: number;
        WithClientRecorded: number;
        WithPlatformRecorded: number;
        WithReadTimeRecorded: number;
    }
}

declare function Postmark(
    apiKey: string,
    options: Partial<Postmark.Options>
): Postmark.Client;

export = Postmark;
