// Type definitions for postmark 1.4
// Project: http://wildbit.github.io/postmark.js
// Definitions by: Ben Bayard <https://github.com/benbayard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = Postmark;

declare function Postmark(apiKey: string, options: Partial<Postmark.Options>): Postmark.Client;
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

	interface PostmarkMessageWithTemplate {
		To: string;
		From: string;
		Cc?: string;
		Bcc?: string;
		ReplyTo?: string;
		TemplateId?: number|string;
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

	interface SendStatus {
		To: string;
		SubmittedAt: string;
		MessageID: string;
		ErrorCode: number;
		Message: string;
	}

	interface ExpandedEmail {
		Email: string;
		Name: string;
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

	interface MessageEvents {
		Recipient: string;
		Type: string;
		ReceivedAt: string;
		Details: MessageEventDetails;
	}

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

	interface MessageOpensResult extends PaginatedResult {
		Opens: MessageOpens[];
	}

	interface OutboundMessagesResult extends PaginatedResult {
		Messages: OutboundMessageBase[];
	}

	interface InboundMessagesResult extends PaginatedResult {
		InboundMessages: InboundMessageBase[];
	}

	interface TemplateValidator<T extends object> {
		Subject: string;
		HtmlBody: string;
		TextBody: string;
		TestRenderModel?: T;
		InlineCssForHtmlTestRender?: boolean;
	}

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

	interface PaginatedResult {
		TotalCount: number;
	}

	interface TemplatesResult extends PaginatedResult {
		Templates: TemplateBase[];
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

	interface BouncesResult extends PaginatedResult {
		Bounces: Bounce[];
	}

	interface BounceDump {
		Body: string;
	}

	interface GenericResult {
		Message: string;
		ErrorCode?: number;
	}

	interface ActivatedBounceResult extends GenericResult {
		Bounce: Bounce;
	}

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

	interface TemplateValidationResult<T extends object = any> {
		AllContentIsValid: boolean;
		HtmlBody: ValidationSet;
		TextBody: ValidationSet;
		Subject: ValidationSet;
		SuggestedTemplateModel: T;
	}

	type PostmarkCallback<T extends object = any> = ((e: PostmarkError, ret: T) => void);

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
		// sending email
		send(message: PostmarkMessage): Promise<SendStatus>;
		send(message: PostmarkMessage, callback: PostmarkCallback<SendStatus>): void;

		sendEmailWithTemplate(message: PostmarkMessageWithTemplate): Promise<SendStatus>;
		sendEmailWithTemplate(message: PostmarkMessageWithTemplate, callback: PostmarkCallback<SendStatus>): void;

		batch(message: PostmarkMessage[]): Promise<SendStatus[]>;
		batch(message: PostmarkMessage[], callback: PostmarkCallback<SendStatus[]>): void;

		sendEmail(message: PostmarkMessage): Promise<SendStatus>;
		sendEmail(message: PostmarkMessage, callback: PostmarkCallback<SendStatus>): void;

		sendEmailBatch(message: PostmarkMessage[]): Promise<SendStatus[]>;
		sendEmailBatch(message: PostmarkMessage[], callback: PostmarkCallback<SendStatus[]>): void;

		// stats
		getDeliveryStatistics(): Promise<DeliveryStats>;
		getDeliveryStatistics(callback: PostmarkCallback<DeliveryStats>): void;

		// bounces
		getBounces(filter: BounceFilter): Promise<BouncesResult>;
		getBounces(filter: BounceFilter, callback?: PostmarkCallback<BouncesResult>): void;

		getBounce(id: number): Promise<Bounce>;
		getBounce(id: number, callback?: PostmarkCallback<Bounce>): void;

		getBounceDump(id: number): Promise<BounceDump>;
		getBounceDump(id: number, callback?: PostmarkCallback<BounceDump>): void;

		activateBounce(id: number): Promise<ActivatedBounceResult>;
		activateBounce(id: number, callback?: PostmarkCallback<ActivatedBounceResult>): void;

		getBounceTags(): Promise<string[]>;
		getBounceTags(callback?: PostmarkCallback<string[]>): void;

		// server
		getServer(): Promise<Server>;
		getServer(callback?: PostmarkCallback<Server>): void;

		editServer(server: Partial<Server>): Promise<Server>;
		editServer(server: Partial<Server>, callback?: PostmarkCallback<Server>): void;

		// message info
		getOutboundMessages(filter: OutboundMessageFilter): Promise<OutboundMessagesResult>;
		getOutboundMessages(filter: OutboundMessageFilter, callback?: PostmarkCallback<OutboundMessagesResult>): void;

		getOutboundMessageDetails(id: number): Promise<OutboundMessage>;
		getOutboundMessageDetails(id: number, callback?: PostmarkCallback<OutboundMessage>): void;

		getMessageOpens(filter: OpenMessageFilter): Promise<MessageOpensResult>;
		getMessageOpens(filter: OpenMessageFilter, callback?: PostmarkCallback<MessageOpensResult>): void;

		getMessageOpensForSingleMessage(id: number, filter: Filter): Promise<MessageOpensResult>;
		getMessageOpensForSingleMessage(id: number, filter: Filter, callback?: PostmarkCallback<MessageOpensResult>): void;

		getInboundMessages(filter: InboundMessageFilter): Promise<InboundMessagesResult>;
		getInboundMessages(filter: InboundMessageFilter, callback?: PostmarkCallback<InboundMessagesResult>): void;

		getInboundMessageDetails(id: number): Promise<InboundMessage>;
		getInboundMessageDetails(id: number, callback?: PostmarkCallback<InboundMessage>): void;

		bypassBlockedInboundMessage(id: number): Promise<GenericResult>;
		bypassBlockedInboundMessage(id: number, callback?: PostmarkCallback<GenericResult>): void;

		retryInboundHookForMessage(id: number): Promise<GenericResult>;
		retryInboundHookForMessage(id: number, callback?: PostmarkCallback<GenericResult>): void;

		// templates
		getTemplate(id: number): Promise<Template>;
		getTemplate(id: number, callback?: PostmarkCallback<Template>): void;

		createTemplate(template: Partial<Template>): Promise<TemplateBase>;
		createTemplate(template: Partial<Template>, callback?: PostmarkCallback<TemplateBase>): void;

		editTemplate(template: Partial<Template>): Promise<TemplateBase>;
		editTemplate(template: Partial<Template>, callback?: PostmarkCallback<TemplateBase>): void;

		getTemplates(filter: Filter): Promise<TemplatesResult>;
		getTemplates(filter: Filter, callback?: PostmarkCallback<TemplatesResult>): void;

		deleteTemplate(id: number): Promise<GenericResult>;
		deleteTemplate(id: number, callback?: PostmarkCallback<GenericResult>): void;

		validateTemplate<T extends object>(templateObject: TemplateValidator<T>): Promise<TemplateValidationResult<T>>;
		validateTemplate<T extends object>(templateObject: TemplateValidator<T>, callback?: PostmarkCallback<TemplateValidationResult<T>>): void;
	}

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

	interface CreateSignature extends UpdateSignature {
		FromEmail: string;
	}

	interface SenderSignaturesResults extends PaginatedResult {
		SenderSignatures: SenderSignatureBase[];
	}

	interface Sender {
		Color: string;
		SmtpApiActivated: boolean;
		RawEmailEnabled: boolean;
		DeliveryHookUrl: string;
		InboundAddress: string;
		InboundHookUrl: string;
		BounceHookUrl: string;
		IncludeBounceContentInHook: boolean;
		OpenHookUrl: string;
		PostFirstOpenOnly: boolean;
		TrackOpens: boolean;
		TrackLinks: string;
		InboundDomain: string;
		InboundHash: string;
		InboundSpamThreshold: number;
	}

	interface Server extends Sender {
		ID: number;
		ApiTokens: string[];
		ServerLink: string;
		Name: string;
	}

	interface ServerFilter extends Filter {
		name?: string;
	}

	interface ServersResult extends PaginatedResult {
		Servers: Server[];
	}

	interface DomainBase {
		ID: number;
		Name: string;
		SPFVerified: boolean;
		DKIMVerified: boolean;
		WeakDKIM: boolean;
		ReturnPathDomainVerified: boolean;
	}

	interface Domain extends DomainBase, VerificationDetails {
	}

	interface DomainsResult extends PaginatedResult {
		Domains: DomainBase[];
	}

	interface CreateDomain {
		Name: string;
		ReturnPathDomain?: string;
	}

	interface RotateDKIMResult extends DKIMKey {
		Name: string;
		ID: string;
	}

	class AdminClient {
		constructor(apiKey: string, options: Partial<Options>);

		// signatures
		listSenderSignatures(query: Filter): Promise<SenderSignaturesResults>;
		listSenderSignatures(query: Filter, callback?: PostmarkCallback<SenderSignaturesResults>): void;

		createSenderSignature(options: CreateSignature): Promise<SenderSignature>;
		createSenderSignature(options: CreateSignature, callback?: PostmarkCallback<SenderSignature>): void;

		editSenderSignature(id: number, options: UpdateSignature): Promise<SenderSignature>;
		editSenderSignature(id: number, options: UpdateSignature, callback?: PostmarkCallback<SenderSignature>): void;

		deleteSenderSignature(id: number): Promise<GenericResult>;
		deleteSenderSignature(id: number, callback?: PostmarkCallback<GenericResult>): void;

		resendSenderSignatureConfirmation(id: number): Promise<GenericResult>;
		resendSenderSignatureConfirmation(id: number, callback?: PostmarkCallback<GenericResult>): void;

		verifySenderSignatureSPF(id: number): Promise<SenderSignature>;
		verifySenderSignatureSPF(id: number, callback?: PostmarkCallback<SenderSignature>): void;

		requestNewDKIMForSenderSignature(id: number): Promise<GenericResult>;
		requestNewDKIMForSenderSignature(id: number, callback?: PostmarkCallback<GenericResult>): void;

		// servers
		getServer(id: number): Promise<Server>;
		getServer(id: number, callback?: PostmarkCallback<Server>): void;

		createServer(options: Partial<Server>): Promise<Server>;
		createServer(options: Partial<Server>, callback?: PostmarkCallback<Server>): void;

		editServer(id: number, options: Partial<Server>): Promise<Server>;
		editServer(id: number, options: Partial<Server>, callback?: PostmarkCallback<Server>): void;

		deleteServer(id: number): Promise<GenericResult>;
		deleteServer(id: number, callback?: PostmarkCallback<GenericResult>): void;

		listServers(query: ServerFilter): Promise<ServersResult>;
		listServers(query: ServerFilter, callback?: PostmarkCallback<ServersResult>): void;

		// domains
		listDomains(query: Filter): Promise<DomainsResult>;
		listDomains(query: Filter, callback?: PostmarkCallback<DomainsResult>): void;

		getDomain(id: number): Promise<Domain>;
		getDomain(id: number, callback?: PostmarkCallback<Domain>): void;

		createDomain(options: CreateDomain): Promise<Domain>;
		createDomain(options: CreateDomain, callback?: PostmarkCallback<Domain>): void;

		editDomain(id: number, options: Partial<CreateDomain>): Promise<Domain>;
		editDomain(id: number, options: Partial<CreateDomain>, callback?: PostmarkCallback<Domain>): void;

		deleteDomain(id: number): Promise<GenericResult>;
		deleteDomain(id: number, callback?: PostmarkCallback<GenericResult>): void;

		verifyDomainSPF(id: number): Promise<SenderSignature>;
		verifyDomainSPF(id: number, callback?: PostmarkCallback<SenderSignature>): void;

		rotateDKIMForDomain(id: number): Promise<RotateDKIMResult>;
		rotateDKIMForDomain(id: number, callback?: PostmarkCallback<RotateDKIMResult>): void;
	}
}
