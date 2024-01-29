import { AxiosError } from "axios";

export = Mailchimp;
declare function Mailchimp(apiKey: string): Mailchimp.ApiClient;

declare namespace Mailchimp {
    interface ApiClient {
        allowlists: AllowlistsApi;
        exports: ExportsApi;
        inbound: InboundApi;
        ips: IpsApi;
        messages: MessagesApi;
        metadata: MetadataApi;
        rejects: RejectsApi;
        senders: SendersApi;
        subaccounts: SubaccountsApi;
        tags: TagsApi;
        templates: TemplatesApi;
        urls: UrlsApi;
        users: UsersApi;
        webhooks: WebhooksApi;
        whitelists: WhitelistsApi;

        /**
         * Updates the default HTTP request response format.
         */
        setDefaultOutputFormat(format: OutputFormat): void;
        setDefaultTimeoutMs(timeoutMs: number): void;
    }

    type OutputFormat = "json" | "xml" | "php" | "yaml";

    interface BaseRequest {
        outputFormat?: OutputFormat;
    }

    interface AllowlistsApi {
        /**
         * Add email to allowlist
         *
         * Adds an email to your email rejection allowlist. If the address is currently on your denylist,
         * that denylist entry will be removed automatically.
         */
        add(body: AllowlistsAddRequest): Promise<AllowListsAddResponse | AxiosError>;
        /**
         * List allowlisted emails
         *
         * Retrieves your email rejection allowlist. You can provide an email address or search prefix
         * to limit the results. Returns up to 1000 results.
         */
        list(body?: AllowlistsListRequest): Promise<AllowlistsListResponse[] | AxiosError>;
        /**
         * Remove email from allowlist
         *
         * Removes an email address from the allowlist.
         */
        delete(body: AllowlistsDeleteRequest): Promise<AllowlistsDeleteResponse | AxiosError>;
    }
    interface AllowlistsAddRequest extends BaseRequest {
        /** an email address to add to the allowlist */
        email: string;
        /** an optional description of why the email was added to the allowlist */
        comment?: string;
    }
    interface AllowListsAddResponse {
        /** the email address you provided */
        email: string;
        /** whether the operation succeeded */
        added: boolean;
    }
    interface AllowlistsDeleteRequest extends BaseRequest {
        /** the email address to remove from the allowlist */
        email: string;
    }
    interface AllowlistsDeleteResponse {
        /** the email address that was removed from the denylist */
        email: string;
        /** whether the address was deleted successfully */
        deleted: boolean;
    }
    interface AllowlistsListRequest extends BaseRequest {
        /** an optional email address or prefix to search by */
        email?: string;
    }
    interface AllowlistsListResponse {
        /** the email that is allowlisted */
        email: string;
        /** a description of why the email was allowlisted */
        detail: string;
        /** when the email was added to the allowlist */
        created_at: string;
    }

    interface ExportsApi {
        /**
         * View export info
         *
         * Returns information about an export job. If the export job's state is 'complete', the returned
         * data will include a URL you can use to fetch the results. Every export job produces a zip archive,
         * but the format of the archive is distinct for each job type. The api calls that initiate exports
         * include more details about the output format for that job type.
         */
        info(body: ExportsInfoRequest): Promise<ExportResponse | AxiosError>;
        /**
         * List exports
         *
         * Returns a list of your exports.
         */
        list(body?: ExportsListRequest): Promise<ExportResponse[] | AxiosError>;
        /**
         * Export denylist
         *
         * Begins an export of your rejection denylist. The denylist will be exported to a zip archive
         * containing a single file named rejects.csv that includes the following fields:
         * email, reason, detail, created_at, expires_at, last_event_at, expires_at.
         */
        rejects(body?: ExportsStartJobRequest): Promise<ExportResponse | AxiosError>;
        /**
         * Export Allowlist
         *
         * Begins an export of your rejection allowlist. The allowlist will be exported to a zip archive
         * containing a single file named allowlist.csv that includes the following fields:
         * email, detail, created_at.
         */
        whitelist(body?: ExportsStartJobRequest): Promise<ExportResponse | AxiosError>;
        /**
         * Export Allowlist
         *
         * Begins an export of your rejection allowlist. The allowlist will be exported to a zip archive
         * containing a single file named allowlist.csv that includes the following fields:
         * email, detail, created_at.
         */
        allowlist(body?: ExportsStartJobRequest): Promise<ExportResponse | AxiosError>;
        /**
         * Export activity history
         *
         * Begins an export of your activity history. The activity will be exported to a zip archive
         * containing a single file named activity.csv in the same format as you would be able to export
         * from your account's activity view. It includes the following fields: Date, Email Address,
         * Sender, Subject, Status, Tags, Opens, Clicks, Bounce Detail. If you have configured any
         * custom metadata fields, they will be included in the exported data.
         */
        activity(body?: ExportsActivityRequest): Promise<ExportResponse | AxiosError>;
    }
    interface ExportResponse {
        /** the unique identifier for this Export. Use this identifier when checking the export job's status */
        id: string;
        /** the date and time that the export job was created as a UTC string in YYYY-MM-DD HH:MM:SS format */
        created_at: string;
        /** the type of the export job - activity, reject, or allowlist */
        type: ExportsJobType;
        /** the date and time that the export job was finished as a UTC string in YYYY-MM-DD HH:MM:SS format */
        finished_at: string;
        /** the export job's state - waiting, working, complete, error, or expired. */
        state: ExportsJobState;
        /** the url for the export job's results, if the job is completed. */
        result_url: string;
    }
    interface ExportsInfoRequest extends BaseRequest {
        /** an export job identifier */
        id: string;
    }
    type ExportsListRequest = BaseRequest;
    interface ExportsStartJobRequest extends BaseRequest {
        /** an optional email address to notify when the export job has finished. */
        notify_email?: string;
    }
    interface ExportsActivityRequest extends BaseRequest {
        /** an optional email address to notify when the export job has finished */
        notify_email?: string;
        /** start date as a UTC string in YYYY-MM-DD HH:MM:SS format */
        date_from?: string;
        /** end date as a UTC string in YYYY-MM-DD HH:MM:SS format */
        date_to?: string;
        /** an array of tag names to narrow the export to; will match messages that contain ANY of the tags */
        tags?: string[];
        /** an array of senders to narrow the export to */
        senders?: string[];
        /** an array of message states to narrow the export to; messages with ANY of the states will be included */
        states?: ExportsMessageState[];
        /** an array of api keys to narrow the export to; message sent with ANY of the keys will be included */
        api_keys?: string[];
    }

    type ExportsJobType = "activity" | "reject" | "allowlist";
    type ExportsJobState = "waiting" | "working" | "complete" | "error" | "expired";
    type ExportsMessageState = "sent" | "rejected" | "bounced" | "soft-bounced" | "spam" | "unsub";

    interface InboundApi {
        /**
         * Add inbound domain
         *
         * Add an inbound domain to your account.
         */
        addDomain(body: InboundDomainRequest): Promise<InboundDomainResponse | AxiosError>;
        /**
         * Add mailbox route
         *
         * Add a new mailbox route to an inbound domain.
         */
        addRoute(body: InboundAddRouteRequest): Promise<InboundRouteResponse | AxiosError>;
        /**
         * Check domain settings
         *
         * Check the MX settings for an inbound domain. The domain must have already been added with the
         * add-domain call.
         */
        checkDomain(body: InboundDomainRequest): Promise<InboundDomainResponse | AxiosError>;
        /**
         * Delete inbound domain
         *
         * Delete an inbound domain from the account. All mail will stop routing for this domain immediately.
         */
        deleteDomain(body: InboundDomainRequest): Promise<InboundDomainResponse | AxiosError>;
        /**
         * Delete mailbox route
         *
         * Delete an existing inbound mailbox route.
         */
        deleteRoute(body: InboundDeleteRouteRequest): Promise<InboundRouteResponse | AxiosError>;
        /**
         * List inbound domains
         *
         * List the domains that have been configured for inbound delivery.
         */
        domains(body?: InboundDomainsRequest): Promise<InboundDomainResponse[] | AxiosError>;
        /**
         * List mailbox routes
         *
         * List the mailbox routes defined for an inbound domain.
         */
        routes(body: InboundRoutesRequest): Promise<InboundRouteResponse[] | AxiosError>;
        /**
         * Send mime document
         *
         * Take a raw MIME document destined for a domain with inbound domains set up, and send it to the
         * inbound hook exactly as if it had been sent over SMTP.
         */
        sendRaw(body: InboundSendRawRequest): Promise<InboundSendRawResponse[] | AxiosError>;
        /**
         * Update mailbox route
         *
         * Update the pattern or webhook of an existing inbound mailbox route. If null is provided for any
         * fields, the values will remain unchanged.
         */
        updateRoute(body: InboundUpdateRouteRequest): Promise<InboundRouteResponse | AxiosError>;
    }

    interface InboundDomainRequest extends BaseRequest {
        /** a domain name; Validation: strip_tags, required */
        domain: string;
    }
    interface InboundDomainResponse {
        /** the domain name that is accepting mail */
        domain: string;
        /** the date and time that the inbound domain was added as a UTC string in YYYY-MM-DD HH:MM:SS format */
        created_at: string;
        /** true if this inbound domain has successfully set up an MX record to deliver mail to the Mandrill servers */
        valid_mx: boolean;
    }
    interface InboundAddRouteRequest extends BaseRequest {
        /** an existing inbound domain */
        domain: string;
        /** the search pattern that the mailbox name should match */
        pattern?: string;
        /** the webhook URL where the inbound messages will be published */
        url?: string;
    }
    interface InboundRouteResponse {
        /** the unique identifier of the route */
        id: string;
        /** the search pattern that the mailbox name should match */
        pattern?: string | null;
        /** the webhook URL where inbound messages will be published */
        url?: string | null;
    }
    interface InboundDeleteRouteRequest extends BaseRequest {
        /** the unique identifier of an existing route */
        id: string;
    }
    type InboundDomainsRequest = BaseRequest;
    interface InboundRoutesRequest extends BaseRequest {
        /**
         * the domain to check
         */
        domain: string;
    }
    interface InboundSendRawRequest extends BaseRequest {
        /** the full MIME document of an email message */
        raw_message: string;
        /**
         * optionally define the recipients to receive the message - otherwise we'll use the
         * To, Cc, and Bcc headers provided in the document
         */
        to?: string[];
        /** the address specified in the MAIL FROM stage of the SMTP conversation. Required for the SPF check. */
        mail_from?: string;
        /**
         * the identification provided by the client mta in the MTA state of the SMTP conversation.
         * Required for the SPF check.
         */
        helo?: string;
        /** the remote MTA's ip address. Optional; required for the SPF check. */
        client_address?: string;
    }
    interface InboundSendRawResponse {
        /** the email address of the matching recipient */
        email: string;
        /** the mailbox route pattern that the recipient matched */
        pattern?: string | null;
        /** the webhook URL that the message was posted to */
        url?: string | null;
    }
    interface InboundUpdateRouteRequest extends BaseRequest {
        /** the unique identifier of an existing mailbox route */
        id: string;
        /** the search pattern that the mailbox name should match */
        pattern?: string;
        /** the webhook URL where the inbound messages will be published; Validation: webhookexists */
        url?: string;
    }

    interface IpsApi {
        /**
         * Cancel ip warmup
         *
         * Cancels the warmup process for a dedicated IP.
         */
        cancelWarmup(body: IpsCancelWarmupRequest): Promise<IpsInfoResponse | AxiosError>;
        /**
         * Test custom dns
         *
         * Tests whether a domain name is valid for use as the custom reverse DNS for a dedicated IP.
         */
        checkCustomDns(body: IpsCheckCustomDnsRequest): Promise<IpsCheckCustomDnsResponse | AxiosError>;
        /**
         * Add ip pool
         *
         * Creates a pool and returns it. If a pool already exists with this name, no action will be performed.
         */
        createPool(body: IpsCreatePoolRequest): Promise<IpsPoolInfoResponse | AxiosError>;
        /**
         * Delete ip address
         *
         * Deletes a dedicated IP. This is permanent and cannot be undone.
         */
        delete(body: IpsDeleteRequest): Promise<IpsDeleteResponse | AxiosError>;
        /**
         * Delete ip pool
         *
         * Deletes a pool. A pool must be empty before you can delete it, and you cannot delete your default pool.
         */
        deletePool(body: IpsDeletePoolRequest): Promise<IpsDeletePoolResponse | AxiosError>;
        /**
         * Get ip info
         *
         * Retrieves information about a single dedicated IP.
         */
        info(body?: IpsInfoRequest): Promise<IpsInfoResponse | AxiosError>;
        /**
         * List ip addresses
         *
         * Lists your dedicated IPs.
         */
        list(body?: IpsListRequest): Promise<IpsInfoResponse[] | AxiosError>;
        /**
         * List ip pools
         *
         * Lists your dedicated IP pools.
         */
        listPools(body?: IpsListPoolsRequest): Promise<IpsPoolInfoResponse[] | AxiosError>;
        /**
         * Get ip pool info
         *
         * Describes a single dedicated IP pool.
         */
        poolInfo(body: IpsPoolInfoRequest): Promise<IpsPoolInfoResponse | AxiosError>;
        /**
         * Request additional ip
         *
         * Requests an additional dedicated IP for your account. Accounts may have one outstanding
         * request at any time, and provisioning requests are processed within 24 hours.
         */
        provision(body?: IpsProvisionRequest): Promise<IpsProvisionResponse | AxiosError>;
        /**
         * Set custom dns
         *
         * Configures the custom DNS name for a dedicated IP.
         */
        setCustomDns(body: IpsSetCustomDnsRequest): Promise<IpsInfoResponse | AxiosError>;
        /**
         * Move ip to different pool
         *
         * Moves a dedicated IP to a different pool.
         */
        setPool(body: IpsSetPoolRequest): Promise<IpsInfoResponse | AxiosError>;
        /**
         * Start ip warmup
         *
         * Begins the warmup process for a dedicated IP. During the warmup process, the
         * Transactional API will gradually increase the percentage of your mail that is sent over
         * the warming-up IP, over a period of roughly 30 days. The rest of your mail will be sent
         * over shared IPs or other dedicated IPs in the same pool.
         */
        startWarmup(body: IpsStartWarmupRequest): Promise<IpsInfoResponse | AxiosError>;
    }
    interface IpsCancelWarmupRequest extends BaseRequest {
        /** a dedicated ip address */
        ip: string;
    }
    interface IpsCheckCustomDnsRequest extends BaseRequest {
        /** a dedicated ip address */
        ip: string;
        /** the domain name to test */
        domain: string;
    }
    type IpsCheckCustomDnsResponse = IpsCheckCustomDnsValidResponse | IpsCheckCustomDnsInvalidResponse;
    interface IpsCheckCustomDnsValidResponse {
        /** whether the domain name has a correctly-configured A record pointing to the ip address */
        valid: true;
    }
    interface IpsCheckCustomDnsInvalidResponse {
        /** whether the domain name has a correctly-configured A record pointing to the ip address */
        valid: false;
        /** if valid is false, this will contain details about why the domain's A record is incorrect */
        error: string;
    }
    interface IpsCreatePoolRequest extends BaseRequest {
        /** the name of a pool to create */
        pool: string;
    }
    interface IpsDeleteRequest extends BaseRequest {
        /** the dedicated ip to remove from your account */
        ip: string;
    }
    interface IpsDeleteResponse {
        /** the ip address */
        ip: string;
        /** a boolean indicating whether the ip was successfully deleted */
        deleted: boolean;
    }
    interface IpsDeletePoolRequest extends BaseRequest {
        /** the name of the pool to delete */
        pool: string;
    }
    interface IpsDeletePoolResponse {
        /** the name of the pool */
        pool: string;
        /** whether the pool was deleted */
        deleted: boolean;
    }
    interface IpsInfoRequest extends BaseRequest {
        /** a dedicated IP address */
        ip?: string;
    }
    interface IpsInfoResponse {
        /** the ip address */
        ip: string;
        /** the date and time that the dedicated IP was created as a UTC string in YYYY-MM-DD HH:MM:SS format */
        created_at: string;
        /** the name of the pool that this dedicated IP belongs to */
        pool?: string | null;
        /** the domain name (reverse dns) of this dedicated IP */
        domain?: string | null;
        /** information about the ip's custom dns, if it has been configured */
        custom_dns?: IpsCustomDns | null;
        /** information about the ip's warmup status */
        warmup?: IpsWarmup | null;
    }
    type IpsListRequest = BaseRequest;
    type IpsListPoolsRequest = BaseRequest;
    interface IpsPoolInfoRequest extends BaseRequest {
        /** a pool name */
        pool: string;
    }
    interface IpsPoolInfoResponse {
        /** this pool's name */
        name: string;
        /** the date and time that this pool was created as a UTC timestamp in YYYY-MM-DD HH:MM:SS format */
        created_at: string;
        /** the dedicated IPs in this pool */
        ips: IpsInfoResponse[];
    }
    interface IpsProvisionRequest extends BaseRequest {
        /** whether to enable warmup mode for the ip */
        warmup?: boolean;
        /** the id of the pool to add the dedicated ip to, or null to use your account's default pool */
        pool?: string;
    }
    interface IpsProvisionResponse {
        /** the date and time that the request was created as a UTC timestamp in YYYY-MM-DD HH:MM:SS format */
        requested_at: string;
    }
    interface IpsSetCustomDnsRequest extends BaseRequest {
        /** a dedicated ip address */
        ip: string;
        /** a domain name to set as the dedicated IP's custom dns name. */
        domain: string;
    }
    interface IpsSetPoolRequest extends BaseRequest {
        /** a dedicated ip address */
        ip: string;
        /** the name of the new pool to add the dedicated ip to */
        pool: string;
        /**
         * whether to create the pool if it does not exist; if false and the pool does not exist,
         * an Unknown_Pool will be thrown.
         */
        create_pool?: boolean;
    }
    interface IpsStartWarmupRequest extends BaseRequest {
        /** a dedicated ip address */
        ip: string;
    }

    interface IpsCustomDns {
        /** a boolean indicating whether custom dns has been configured for this ip */
        enabled: boolean;
        /** whether the ip's custom dns is currently valid */
        valid: boolean;
        /** if the ip's custom dns is invalid, this will include details about the error */
        error?: string | null;
    }
    interface IpsWarmup {
        /** whether the ip is currently in warmup mode */
        warming_up: boolean;
        /** the start time for the warmup process as a UTC string in YYYY-MM-DD HH:MM:SS format */
        start_at: string;
        /** the end date and time for the warmup process as a UTC string in YYYY-MM-DD HH:MM:SS format */
        end_at: string;
    }

    interface MessagesApi {
        /**
         * Cancel scheduled email
         *
         * Cancels a scheduled email.
         */
        cancelScheduled(body: MessagesCancelScheduledRequest): Promise<MessagesScheduledMessageResponse[] | AxiosError>;
        /**
         * Get message content
         *
         * Get the full content of a recently sent message.
         */
        content(body: MessagesMessageByIdRequest): Promise<MessagesContentResponse | AxiosError>;
        /**
         * Get message info
         *
         * Get the information for a single recently sent message.
         */
        info(body: MessagesMessageByIdRequest): Promise<MessagesInfoResponse | AxiosError>;
        /**
         * List scheduled emails
         *
         * Queries your scheduled emails.
         */
        listScheduled(body?: MessagesListScheduledRequest): Promise<MessagesScheduledMessageResponse[] | AxiosError>;
        /**
         * Parse mime document
         *
         * Parse the full MIME document for an email message, returning the content of the message
         * broken into its constituent pieces.
         */
        parse(body: MessagesParseRequest): Promise<MessagesParseResponse | AxiosError>;
        /**
         * Reschedule email
         *
         * Reschedules a scheduled email.
         */
        reschedule(body: MessagesRescheduleRequest): Promise<MessagesScheduledMessageResponse[] | AxiosError>;
        /**
         * Search messages by date
         *
         * Search recently sent messages and optionally narrow by date range, tags, senders, and API keys.
         * If no date range is specified, results within the last 7 days are returned. This method may be
         * called up to 20 times per minute. If you need the data more often, you can use /messages/info.json
         * to get the information for a single message, or webhooks to push activity to your own application
         * for querying.
         */
        search(body?: MessagesSearchRequest): Promise<MessagesSearchResponse[] | AxiosError>;
        /**
         * Search messages by hour
         *
         * Search the content of recently sent messages and return the aggregated hourly stats for matching messages.
         */
        searchTimeSeries(body?: MessagesSearchTimeSeriesRequest): Promise<SearchTimeSeriesResponse[] | AxiosError>;
        /**
         * Send new message
         *
         * Send a new transactional message through the Transactional API.
         */
        send(body: MessagesSendRequest): Promise<MessagesSendResponse[] | AxiosError>;
        /**
         * Send mime document
         *
         * Take a raw MIME document for a message, and send it exactly as if it were sent through the
         * Transactional API's SMTP servers.
         */
        sendRaw(body: MessagesSendRawRequest): Promise<{} | AxiosError>;
        /**
         * Send using message template
         *
         * Send a new transactional message through the Transactional API using a template.
         */
        sendTemplate(body: MessagesSendTemplateRequest): Promise<MessagesSendResponse[] | AxiosError>;
    }

    interface MessagesCancelScheduledRequest extends BaseRequest {
        /** a scheduled email id, as returned by any of the messages/send calls or messages/list-scheduled */
        id: string;
    }

    interface MessagesContentResponse {
        /** the Unix timestamp from when this message was sent */
        ts: number;
        /** the message's unique id */
        _id: string;
        /** the email address of the sender */
        from_email: string;
        /** the alias of the sender (if any) */
        from_name?: string | null;
        /** the message's subject line */
        subject: string;
        to: MessageTo;
        /** list of tags on this message */
        tags: string[];
        /** the key-value pairs of the custom MIME headers for the message's main document */
        headers: Record<string, string>;
        /** the text part of the message, if any */
        text?: string | null;
        /** the HTML part of the message, if any */
        html?: string | null;
        /** an array of any attachments that can be found in the message */
        attachments: MessageAttachment[];
    }
    interface MessagesMessageByIdRequest extends BaseRequest {
        /** the unique id of the message to get - passed as the "_id" field in webhooks, send calls, or search calls */
        id: string;
    }
    interface MessagesInfoResponse extends MessagesSearchResponse {
        /** a log of up to 3 smtp events for the message */
        smtp_events: MessageSmtpEvent[];
    }

    interface MessagesListScheduledRequest extends BaseRequest {
        /** an optional recipient address to restrict results to */
        to?: string;
    }
    interface MessagesScheduledMessageResponse {
        /** the scheduled message id */
        _id: string;
        /** the UTC timestamp when the message was created, in YYYY-MM-DD HH:MM:SS format */
        created_at: string;
        /** the UTC timestamp when the message will be sent, in YYYY-MM-DD HH:MM:SS format */
        send_at: string;
        /** the email's sender address */
        from_email: string;
        /** the email's recipient */
        to: string;
        /** the email's subject */
        subject: string;
    }
    interface MessagesParseRequest extends BaseRequest {
        /** the full MIME document of an email message */
        raw_message: string;
    }
    interface MessagesParseResponse {
        /** the subject of the message */
        subject: string;
        /** the email address of the sender */
        from_email: string;
        /** the alias of the sender (if any) */
        from_name?: string | null;
        /** an array of any recipients in the message */
        to: MessageTo[];
        /** the key-value pairs of the MIME headers for the message's main document */
        headers: Record<string, string>;
        /** the text part of the message, if any */
        text?: string | null;
        /** the HTML part of the message, if any */
        html?: string | null;
        /** an array of any attachments that can be found in the message */
        attachments: MessageAttachmentParsed[];
        /** an array of any embedded images that can be found in the message */
        images: MessageImage[];
    }
    interface MessagesRescheduleRequest extends BaseRequest {
        /** a scheduled email id, as returned by any of the messages/send calls or messages/list-scheduled */
        id: string;
        /**
         * the new UTC timestamp when the message should sent. Mandrill can't time travel, so if you specify
         * a time in past the message will be sent immediately
         */
        send_at: string;
    }
    interface MessagesSearchRequest extends BaseRequest {
        /** search terms to find matching messages */
        query?: string;
        /** start date */
        date_from?: string;
        /** end date */
        date_to?: string;
        /** an array of tag names to narrow the search to, will return messages that contain ANY of the tags */
        tags?: string[];
        /** an array of sender addresses to narrow the search to, will return messages sent by ANY of the senders */
        senders?: string[];
        /** an array of API keys to narrow the search to, will return messages sent by ANY of the keys */
        api_keys?: string[];
        /** the maximum number of results to return, defaults to 100, 1000 is the maximum */
        limit?: number;
    }
    interface MessagesSearchResponse {
        /** the Unix timestamp from when this message was sent */
        ts: number;
        /** the message's unique id */
        _id: string;
        /** the email address of the sender */
        sender: string;
        /** the unique name of the template used, if any */
        template?: string | null;
        /** the message's subject line */
        subject: string;
        /** the recipient email address */
        email: string;
        /** list of tags on this message */
        tags: string[];
        /** how many times has this message been opened */
        opens: number;
        /** list of individual opens for the message */
        opens_detail: MessageOpenDetail[];
        /** how many times has a link been clicked in this message */
        clicks: number;
        /** list of individual clicks for the message */
        clicks_detail: MessagesClickDetail[];
        /** sending status of this message */
        state: "sent" | "bounced" | "rejected";
        /** any custom metadata provided when the message was sent */
        metadata?: any;
    }
    interface MessagesSearchTimeSeriesRequest extends BaseRequest {
        /** the search terms to find matching messages for */
        query?: string;
        /** start date */
        date_from?: string;
        /** end date */
        date_to?: string;
        /** an array of tag names to narrow the search to, will return messages that contain ANY of the tags */
        tags?: string[];
        /** an array of sender addresses to narrow the search to, will return messages sent by ANY of the senders */
        senders?: string[];
    }
    interface SearchTimeSeriesResponse {
        /** the hour as a UTC date string in YYYY-MM-DD HH:MM:SS format */
        time: string;
        /** the number of emails that were sent during the hour */
        sent: number;
        /** the number of emails that hard bounced during the hour */
        hard_bounces: number;
        /** the number of emails that soft bounced during the hour */
        soft_bounces: number;
        /** the number of emails that were rejected during the hour */
        rejects: number;
        /** the number of spam complaints received during the hour */
        complaints: number;
        /** the number of unsubscribes received during the hour */
        unsubs: number;
        /** the number of emails opened during the hour */
        opens: number;
        /** the number of unique opens generated by messages sent during the hour */
        unique_opens: number;
        /** the number of tracked URLs clicked during the hour */
        clicks: number;
        /** the number of unique clicks generated by messages sent during the hour */
        unique_clicks: number;
    }
    interface MessagesSendRequest extends BaseRequest {
        /**
         * Enable a background sending mode that is optimized for bulk sending.
         * In async mode, messages/send will immediately return a status of "queued" for every recipient.
         * To handle rejections when sending in async mode, set up a webhook for the 'reject' event.
         * Defaults to false for messages with no more than 10 recipients;
         * messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.
         */
        async?: boolean;
        /**
         * The name of the dedicated ip pool that should be used to send the message.
         * If you do not have any dedicated IPs, this parameter has no effect.
         * If you specify a pool that does not exist, your default pool will be used instead.
         */
        ip_pool?: string;
        /**
         * When this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format.
         * If you specify a time in the past, the message will be sent immediately.
         */
        send_at?: string;
        /** The information on the message to send */
        message: MessagesMessage;
    }
    interface MessagesMessage {
        /** The full HTML content to be sent. */
        html?: string;
        /** Optional full text content to be sent. */
        text?: string;
        /** The message subject. */
        subject?: string;
        /** The sender email address. */
        from_email?: string;
        /** Optional from name to be used. */
        from_name?: string;
        /** An array of recipient information. */
        to: MessageRecipient[];
        /** Optional extra headers to add to the message (most headers are allowed). */
        headers?: Record<string, string>;
        /** Whether or not this message is important, and should be delivered ahead of non-important messages. */
        important?: boolean;
        /** Whether or not to turn on open tracking for the message. */
        track_opens?: boolean;
        /** Whether or not to turn on click tracking for the message. */
        track_clicks?: boolean;
        /** Whether or not to automatically generate a text part for messages that are not given text. */
        auto_text?: boolean;
        /** Whether or not to automatically generate an HTML part for messages that are not given HTML. */
        auto_html?: boolean;
        /**
         * Whether or not to automatically inline all CSS styles provided in the message HTML -
         * only for HTML documents less than 256KB in size.
         */
        inline_css?: boolean;
        /** Whether or not to strip the query string from URLs when aggregating tracked URL data. */
        url_strip_qs?: boolean;
        /** Whether or not to expose all recipients in to "To" header for each email. */
        preserve_recipients?: boolean;
        /** Set to `false` to remove content logging for sensitive emails. */
        view_content_link?: boolean;
        /** An optional address to receive an exact copy of each recipient's email. */
        bcc_address?: string;
        /** A custom domain to use for tracking opens and clicks instead of mandrillapp.com. */
        tracking_domain?: string;
        /**
         * A custom domain to use for SPF/DKIM signing instead of mandrill
         * (for "via" or "on behalf of" in email clients).
         */
        signing_domain?: string;
        /** A custom domain to use for the messages's return-path. */
        return_path_domain?: string;
        /**
         * Whether to evaluate merge tags in the message. Will automatically be set to `true`
         * if either `merge_vars` or `global_merge_vars` are provided.
         */
        merge?: boolean;
        /** The merge tag language to use when evaluating merge tags. */
        merge_language?: "mailchimp" | "handlebars";
        /** Global merge variables to use for all recipients. You can override these per recipient. */
        global_merge_vars?: MergeVar[];
        /** Per-recipient merge variables, which override global merge variables with the same name. */
        merge_vars?: RecipientMergeVar[];
        /**
         * An array of string to tag the message with. Stats are accumulated using tags,
         * though we only store the first 100 we see, so this should not be unique or change frequently.
         * Tags should be 50 characters or less. Any tags starting with an underscore are reserved for
         * internal use and will cause errors.
         */
        tags?: string[];
        /** The unique id of a subaccount for this message - must already exist or will fail with an error. */
        subaccount?: string;
        /**
         * An array of strings indicating for which any matching URLs will automatically have
         * Google Analytics parameters appended to their query string automatically.
         */
        google_analytics_domains?: string[];
        /**
         * Optional string indicating the value to set for the utm_campaign tracking parameter.
         * If this isn't provided the emails from address will be used instead.
         */
        google_analytics_campaign?: string;
        /**
         * Mandrill will store this metadata and make it available for retrieval.
         * In addition, you can select up to 10 metadata fields to index and make searchable
         * using the Mandrill search api.
         */
        metadata?: MessageMetadata & { website: string };
        /** Per-recipient metadata that will override the global values specified in the `metadata` parameter. */
        recipient_metadata?: MessageRecipientMetadata[];
        /** Supported attachments to add to the message. */
        attachments?: MessageAttachment[];
        /** Embedded images to add to the message. */
        images?: MessageImage[];
    }
    /**
     * An array of objects for each recipient containing the key "email" with the email address,
     * and details of the message status for that recipient
     */
    type MessagesSendResponse = MessagesSendSuccessResponse | MessagesSendRejectResponse;
    interface MessagesSendResponseBase {
        /** The email address of the recipient */
        email: string;
        /** The sending status of the recipient. */
        status: SendingStatus;
        /** The reason for the rejection if the recipient status is "rejected". */
        reject_reason?: RejectReason | null;
        /** The message's unique id */
        _id: string;
    }
    interface MessagesSendSuccessResponse extends MessagesSendResponseBase {
        /** The sending status of the recipient. */
        status: Exclude<SendingStatus, "rejected">;
    }
    interface MessagesSendRejectResponse extends MessagesSendResponseBase {
        /** The sending status of the recipient. */
        status: "rejected";
        /** The reason for the rejection if the recipient status is "rejected". */
        reject_reason: RejectReason;
    }
    type SendingStatus = "sent" | "queued" | "scheduled" | "rejected" | "invalid";
    type RejectReason =
        | "hard-bounce"
        | "soft-bounce"
        | "spam"
        | "unsub"
        | "custom"
        | "invalid-sender"
        | "invalid"
        | "test-mode-limit"
        | "unsigned"
        | "rule";
    interface MessagesSendRawRequest extends BaseRequest {
        /** the full MIME document of an email message */
        raw_message: string;
        /** optionally define the sender address - otherwise we'll use the address found in the provided headers */
        from_email?: string;
        /** optionally define the sender alias */
        from_name?: string;
        /**
         * optionally define the recipient to receive the message - otherwise we'll use the To, Cc, and Bcc
         * headers provided in the document
         */
        to?: string[];
        /**
         * enable a background sending mode that is optimized for bulk sending. In async mode, messages/sendRaw
         * will immediately return a status of \"queued\" for every recipient. To handle rejections when
         * sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages
         * with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously,
         * regardless of the value of async.
         */
        async?: boolean;
        /**
         * the name of the dedicated ip pool that should be used to send the message. If you do not have any
         * dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your
         * default pool will be used instead.
         */
        ip_pool?: string;
        /**
         * when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify
         * a time in the past, the message will be sent immediately.
         */
        send_at?: string;
        /** a custom domain to use for the messages's return-path */
        return_path_domain?: string;
    }
    interface MessagesSendTemplateRequest extends MessagesSendRequest {
        /**
         * The immutable name or slug of a template that exists in the user's
         * account. For backwards-compatibility, the template name may also be
         * used but the immutable slug is preferred.
         */
        template_name: string;
        /**
         * An array of template content to send. Each item in the array should
         * be a struct with two keys - name: the name of the content block to
         * set the content for, and content: the actual content to put into the
         * block
         */
        template_content: TemplateContent[];
    }
    interface TemplateContent {
        /** The name of the mc:edit editable region to inject into. */
        name: string;
        /** The content to inject. */
        content: string;
    }
    interface MessageTo {
        /** the email address of the recipient */
        email: string;
        /** the alias of the recipient (if any) */
        name?: string;
    }
    interface MessageAttachment {
        /** the file name of the attachment */
        name: string;
        /** the MIME type of the attachment */
        type: string;
        /** the content of the attachment as a base64 encoded string */
        content: string;
    }
    interface MessageAttachmentParsed extends MessageAttachment {
        /** if this is set to true, the attachment is not pure-text, and the content will be base64 encoded */
        binary: boolean;
    }
    interface MessageImage {
        /** the Content-ID of the embedded image */
        name: string;
        /** the MIME type of the image */
        type: string;
        /** the content of the image as a base64 encoded string */
        content: string;
    }
    interface MessageOpenDetail {
        /** the unix timestamp from when the message was opened */
        ts: number;
        /** the IP address that generated the open */
        ip: string;
        /** the approximate region and country that the opening IP is located */
        location: string;
        /** the email client or browser data of the open */
        ua: string;
    }
    interface MessagesClickDetail {
        /** the unix timestamp from when the message was clicked */
        ts: number;
        /** the URL that was clicked on */
        url: string;
        /** the IP address that generated the click */
        ip: string;
        /** the approximate region and country that the clicking IP is located */
        location: string;
        /** the email client or browser data of the click */
        ua: string;
    }
    interface MessageSmtpEvent {
        /** the Unix timestamp when the event occurred */
        ts: number;
        /** the message's state as a result of this event */
        type: string;
        /** the SMTP response from the recipient's server */
        diag: string;
    }
    type MessageRecipientType = "to" | "cc" | "bcc";
    interface MessageRecipient {
        /** The email address of the recipient. */
        email: string;
        /** The optional display name to use for the recipient. */
        name?: string;
        /**
         * The header type to use for the recipient.
         * @default 'to'
         */
        type?: MessageRecipientType;
    }
    interface MergeVar {
        /** The global merge variable's name. Merge variable names are case-insensitive and may not start with `_`. */
        name: string;
        /** The global merge variable's content. */
        content: string;
    }
    interface RecipientMergeVar {
        /** The email address of the recipient that the merge variables should apply to. */
        rcpt: string;
        /** The recipient's merge variables. */
        vars: MergeVar[];
    }
    interface MessageMetadata {
        [key: string]: any;
    }
    interface MessageRecipientMetadata {
        /** The email address of the recipient that the metadata is associated with. */
        rcpt: string;
        /**
         * The recipient's unique metadata. If a key exists in both the per-recipient
         * metadata and the global metadata, the per-recipient metadata will be used.
         */
        values: MessageMetadata & { user_id: number };
    }

    interface MetadataApi {
        /**
         * Add metadata field
         *
         * Add a new custom metadata field to be indexed for the account.
         */
        add(body: MetadataAddRequest): Promise<MetadataResponse | AxiosError>;

        /**
         * Delete metadata field
         *
         * Delete an existing custom metadata field. Deletion isn't instataneous, and /metadata/list
         * will continue to return the field until the asynchronous deletion process is complete.
         */
        delete(body: MetadataDeleteRequest): Promise<MetadataResponse | AxiosError>;

        /**
         * List metadata fields
         *
         * Get the list of custom metadata fields indexed for the account.
         */
        list(body?: MetadataListRequest): Promise<MetadataResponse[] | AxiosError>;

        /**
         * Update metadata field
         *
         * Update an existing custom metadata field.
         */
        update(body: MetadataUpdateRequest): Promise<MetadataResponse | AxiosError>;
    }

    interface MetadataAddRequest extends BaseRequest {
        /** a unique identifier for the metadata field */
        name: string;
        /** Mustache template to control how the metadata is rendered in your activity log */
        view_template?: string;
    }
    interface MetadataResponse {
        /** the unique identifier of the metadata field to update */
        name: string;
        /** the current state of the metadata field */
        state: MetadataState;
        /** Mustache template to control how the metadata is rendered in your activity log */
        view_template?: string | null;
    }
    interface MetadataDeleteRequest extends BaseRequest {
        /** the unique identifier of the metadata field to update */
        name: string;
    }
    type MetadataListRequest = BaseRequest;
    interface MetadataUpdateRequest extends BaseRequest {
        /** the unique identifier of the metadata field to update */
        name: string;
        /** Mustache template to control how the metadata is rendered in your activity log */
        view_template: string;
    }
    type MetadataState = "active" | "delete" | "index";

    interface RejectsApi {
        /**
         * Add email to denylist
         *
         * Adds an email to your email rejection denylist. Addresses that you add manually will never
         * expire and there is no reputation penalty for removing them from your denylist. Attempting
         * to denylist an address that has been added to the allowlist will have no effect.
         */
        add(body: RejectsAddRequest): Promise<RejectsAddResponse | AxiosError>;
        /**
         * Delete email from denylist
         *
         * Deletes an email rejection. There is no limit to how many rejections you can remove from your
         * denylist, but keep in mind that each deletion has an affect on your reputation.
         */
        delete(body: RejectsDeleteRequest): Promise<RejectsDeleteResponse | AxiosError>;
        /**
         * List denylisted emails
         *
         * Retrieves your email rejection denylist. You can provide an email address to limit the results.
         * Returns up to 1000 results. By default, entries that have expired are excluded from the results;
         * set include_expired to true to include them.
         */
        list(body?: RejectsListRequest): Promise<RejectsListResponse[] | AxiosError>;
    }
    interface RejectsAddRequest extends BaseRequest {
        /** an email address to block */
        email: string;
        /** an optional comment describing the rejection */
        comment?: string;
        /** an optional unique identifier for the subaccount to limit the denylist entry */
        subaccount?: string;
    }
    interface RejectsAddResponse {
        /** the email address you provided */
        email: string;
        /** whether the operation succeeded */
        added: boolean;
    }
    interface RejectsDeleteRequest extends BaseRequest {
        /** an email address */
        email: string;
        /** an optional unique identifier for the subaccount to limit the denylist deletion */
        subaccount?: string;
    }
    interface RejectsDeleteResponse {
        /** the email address that was removed from the denylist */
        email: string;
        /** whether the address was deleted successfully. */
        deleted: boolean;
        /** the subaccount denylist that the address was removed from, if any */
        subaccount: string;
    }
    interface RejectsListRequest extends BaseRequest {
        /** an optional email address to search by */
        email?: string;
        /** whether to include rejections that have already expired. */
        include_expired?: boolean;
        /** an optional unique identifier for the subaccount to limit the denylist */
        subaccount?: string;
    }
    interface RejectsListResponse {
        /** the email that is blocked */
        email: string;
        /** the type of event (hard-bounce, soft-bounce, spam, unsub, custom) that caused this rejection */
        reason: RejectsRejectReason;
        /**
         * extended details about the event, such as the SMTP diagnostic for bounces or the comment for
         * manually-created rejections
         */
        detail?: string | null;
        /** when the email was added to the denylist */
        created_at: string;
        /** the timestamp of the most recent event that either created or renewed this rejection */
        last_event_at: string;
        /** when the denylist entry will expire (this may be in the past) */
        expires_at?: string | null;
        /** whether the denylist entry has expired */
        expired: boolean;
        /** the sender that this denylist entry applies to, or null if none. */
        sender?: RejectsRejectedSender | null;
        /** the subaccount that this denylist entry applies to, or null if none. */
        subaccount?: string | null;
    }
    type RejectsRejectReason = "hard-bounce" | "soft-bounce" | "spam" | "unsub" | "custom";

    interface RejectsRejectedSender {
        /** the sender's email address */
        address: string;
        /**
         * the date and time that the sender was first seen by Mandrill as a UTC date string in
         * YYYY-MM-DD HH:MM:SS format
         */
        created_at: string;
        /** the total number of messages sent by this sender */
        sent: number;
        /** the total number of hard bounces by messages by this sender */
        hard_bounces: number;
        /** the total number of soft bounces by messages by this sender */
        soft_bounces: number;
        /** the total number of rejected messages by this sender */
        rejects: number;
        /** the total number of spam complaints received for messages by this sender */
        complaints: number;
        /** the total number of unsubscribe requests received for messages by this sender */
        unsubs: number;
        /** the total number of times messages by this sender have been opened */
        opens: number;
        /** the total number of times tracked URLs in messages by this sender have been clicked */
        clicks: number;
        /** the number of unique opens for emails sent for this sender */
        unique_opens: number;
        /** the number of unique clicks for emails sent for this sender */
        unique_clicks: number;
    }

    interface SendersApi {
        /**
         * Add sender domain
         *
         * Adds a sender domain to your account. Sender domains are added automatically as you send,
         * but you can use this call to add them ahead of time.
         */
        addDomain(body: SendersDomainRequest): Promise<SendersDomainResponse | AxiosError>;
        /**
         * Check domain settings
         *
         * Checks the SPF and DKIM settings for a domain, as well the domain verification. If you
         * haven't already added this domain to your account, it will be added automatically.
         */
        checkDomain(body: SendersDomainRequest): Promise<SendersDomainResponse | AxiosError>;
        /**
         * List sender domains
         *
         * Returns the sender domains that have been added to this account.
         */
        domains(body?: SendersDomainsRequest): Promise<SendersDomainResponse[] | AxiosError>;
        /**
         * Get sender info
         *
         * Return more detailed information about a single sender, including aggregates of recent stats.
         */
        info(body: SendersInfoRequest): Promise<SendersInfoResponse | AxiosError>;
        /**
         * List account senders
         *
         * Return the senders that have tried to use this account.
         */
        list(body?: SendersListRequest): Promise<SendersListResponse[] | AxiosError>;
        /**
         * View sender history
         *
         * Return the recent history (hourly stats for the last 30 days) for a sender.
         */
        timeSeries(body: SendersInfoRequest): Promise<TimeSeriesResponse[] | AxiosError>;
        /**
         * Verify domain
         *
         * Sends a verification email in order to verify ownership of a domain. Domain verification
         * is a required step to confirm ownership of a domain. Once a domain has been verified in
         * a Transactional API account, other accounts may not have their messages signed by that
         * domain unless they also verify the domain. This prevents other Transactional API accounts
         * from sending mail signed by your domain.
         */
        verifyDomain(body: SendersVerifyDomainRequest): Promise<SendersVerifyDomainResponse | AxiosError>;
    }
    interface SendersDomainRequest extends BaseRequest {
        /** a domain name */
        domain: string;
    }
    interface SendersDomainResponse {
        /** the sender domain name */
        domain: string;
        /** the date and time that the sending domain was first seen as a UTC string in YYYY-MM-DD HH:MM:SS format */
        created_at: string;
        /** when the domain's DNS settings were last tested as a UTC string in YYYY-MM-DD HH:MM:SS format */
        last_tested_at?: string | null;
        /** details about the domain's SPF record */
        spf?: SendersDomainsSpf | null;
        /** details about the domain's DKIM record */
        dkim?: SendersDomainsDkim | null;
        /**
         * if the domain has been verified, this indicates when that verification occurred as a UTC string
         * in YYYY-MM-DD HH:MM:SS format
         */
        verified_at?: string | null;
        /**
         * whether this domain can be used to authenticate mail, either for itself or as a custom signing
         * domain. If this is false but spf and dkim are both valid, you will need to verify the domain
         * before using it to authenticate mail
         */
        valid_signing: boolean;
        /**
         * a unique key used to verify a domain by adding a TXT record. Append this key to 'mandrill_verify.'
         * and add it to your domain's TXT records to verify
         */
        verify_txt_key: string;
    }
    type SendersDomainsRequest = BaseRequest;
    interface SendersInfoRequest extends BaseRequest {
        /** the email address of the sender */
        address: string;
    }
    interface SendersInfoResponse {
        /** the sender's email address */
        address: string;
        /**
         * the date and time that the sender was first seen by Mandrill as a UTC date string in
         * YYYY-MM-DD HH:MM:SS format
         */
        created_at: string;
        /** the total number of messages sent by this sender */
        sent: number;
        /** the total number of hard bounces by messages by this sender */
        hard_bounces: number;
        /** the total number of soft bounces by messages by this sender */
        soft_bounces: number;
        /** the total number of rejected messages by this sender */
        rejects: number;
        /** the total number of spam complaints received for messages by this sender */
        complaints: number;
        /** the total number of unsubscribe requests received for messages by this sender */
        unsubs: number;
        /** the total number of times messages by this sender have been opened */
        opens: number;
        /** the total number of times tracked URLs in messages by this sender have been clicked */
        clicks: number;
        /** an aggregate summary of the sender's sending stats */
        stats: SendersInfoAggregatedStats;
    }
    type SendersListRequest = BaseRequest;
    interface SendersListResponse {
        /** the sender's email address */
        address: string;
        /**
         * the date and time that the sender was first seen by Mandrill as a UTC date string in
         * YYYY-MM-DD HH:MM:SS format
         */
        created_at: string;
        /** the total number of messages sent by this sender */
        sent: number;
        /** the total number of hard bounces by messages by this sender */
        hard_bounces: number;
        /** the total number of soft bounces by messages by this sender */
        soft_bounces: number;
        /** the total number of rejected messages by this sender */
        rejects: number;
        /** the total number of spam complaints received for messages by this sender */
        complaints: number;
        /** the total number of unsubscribe requests received for messages by this sender */
        unsubs: number;
        /** the total number of times messages by this sender have been opened */
        opens: number;
        /** the total number of times tracked URLs in messages by this sender have been clicked */
        clicks: number;
        /** the number of unique opens for emails sent for this sender */
        unique_opens: number;
        /** the number of unique clicks for emails sent for this sender */
        unique_clicks: number;
    }
    interface TimeSeriesResponse {
        /** the hour as a UTC date string in YYYY-MM-DD HH:MM:SS format */
        time: string;
        /** the number of emails that were sent during the hour */
        sent: number;
        /** the number of emails that hard bounced during the hour */
        hard_bounces: number;
        /** the number of emails that soft bounced during the hour */
        soft_bounces: number;
        /** the number of emails that were rejected during the hour */
        rejects: number;
        /** the number of spam complaints received during the hour */
        complaints: number;
        /** the number of emails opened during the hour */
        opens: number;
        /** the number of unique opens generated by messages sent during the hour */
        unique_opens: number;
        /** the number of tracked URLs clicked during the hour */
        clicks: number;
        /** the number of unique clicks generated by messages sent during the hour */
        unique_clicks: number;
    }
    interface SendersVerifyDomainRequest extends BaseRequest {
        /** domain name at which you can receive email */
        domain: string;
        /** a mailbox at the domain where the verification email should be sent */
        mailbox: string;
    }
    interface SendersVerifyDomainResponse {
        /**
         * "sent" indicates that the verification has been sent, "already_verified" indicates that the domain
         * has already been verified with your account
         */
        status: "sent" | "already_verified";
        /** the domain name you provided */
        domain: string;
        /** the email address the verification email was sent to */
        email: string;
    }

    interface SendersDomainsSpf {
        /** whether the domain's SPF record is valid for use with Mandrill */
        valid: boolean;
        /**
         * when the domain's SPF record will be considered valid for use with Mandrill as a UTC string in
         * YYYY-MM-DD HH:MM:SS format. If set, this indicates that the record is valid now, but was previously
         * invalid, and Mandrill will wait until the record's TTL elapses to start using
         */
        valid_after: string;
        /** an error describing the spf record, or null if the record is correct */
        error?: string | null;
    }

    interface SendersDomainsDkim {
        /** whether the domain's DKIM record is valid for use with Mandrill */
        valid: boolean;
        /**
         * when the domain's DKIM record will be considered valid for use with Mandrill as a UTC string in
         * YYYY-MM-DD HH:MM:SS format. If set, this indicates that the record is valid now, but was previously
         * invalid, and Mandrill will wait until the record's TTL elapses to start using
         */
        valid_after: boolean;
        /** an error describing the DKIM record, or null if the record is correct */
        error?: string | null;
    }
    interface SendersInfoAggregatedStats {
        /** stats for this sender so far today */
        today: SendersInfoStats;
        /** stats for this sender in the last 7 days */
        last_7_days: SendersInfoStats;
        /** stats for this sender in the last 30 days */
        last_30_days: SendersInfoStats;
        /** stats for this sender in the last 60 days */
        last_60_days: SendersInfoStats;
        /** stats for this sender in the last 90 days */
        last_90_days: SendersInfoStats;
    }

    interface SendersInfoStats {
        /** the number of emails sent for this sender */
        sent: number;
        /** the number of emails hard bounced for this sender */
        hard_bounces: number;
        /** the number of emails soft bounced for this sender */
        soft_bounces: number;
        /** the number of emails rejected for sending this sender */
        rejects: number;
        /** the number of spam complaints for this sender */
        complaints: number;
        /** the number of unsubscribes for this sender */
        unsubs: number;
        /** the number of times emails have been opened for this sender */
        opens: number;
        /** the number of unique opens for emails sent for this sender */
        unique_opens: number;
        /** the number of URLs that have been clicked for this sender */
        clicks: number;
        /** the number of unique clicks for emails sent for this sender */
        unique_clicks: number;
    }

    interface SubaccountsApi {
        /**
         * Add subaccount
         *
         * Add a new subaccount.
         */
        add(body: SubaccountsAddRequest): Promise<SubaccountResponse | AxiosError>;
        /**
         * Delete subaccount
         *
         * Delete an existing subaccount. Any email related to the subaccount will be saved, but stats
         * will be removed and any future sending calls to this subaccount will fail.
         */
        delete(body: SubaccountsDeleteRequest): Promise<SubaccountResponse | AxiosError>;
        /**
         * Get subaccount info
         *
         * Given the ID of an existing subaccount, return the data about it.
         */
        info(body: SubaccountsInfoRequest): Promise<SubaccountsInfoResponse | AxiosError>;
        /**
         * List subaccounts
         *
         * Get the list of subaccounts defined for the account, optionally filtered by a prefix.
         */
        list(body?: SubaccountsListRequest): Promise<SubaccountResponse[] | AxiosError>;
        /**
         * Pause subaccount
         *
         * Pause a subaccount's sending. Any future emails delivered to this subaccount will be queued
         * for a maximum of 3 days until the subaccount is resumed.
         */
        pause(body: SubaccountsPauseRequest): Promise<SubaccountResponse | AxiosError>;
        /**
         * Resume subaccount
         *
         * Resume a paused subaccount's sending.
         */
        resume(body: SubaccountsResumeRequest): Promise<SubaccountResponse | AxiosError>;
        /**
         * Update subaccount
         *
         * Update an existing subaccount.
         */
        update(body: SubaccountsUpdateRequest): Promise<SubaccountResponse | AxiosError>;
    }
    interface SubaccountsAddRequest extends BaseRequest {
        /** a unique identifier for the subaccount to be used in sending calls */
        id: string;
        /** an optional display name to further identify the subaccount */
        name?: string;
        /** optional extra text to associate with the subaccount */
        notes?: string;
        /**
         * an optional manual hourly quota for the subaccount. If not specified, Mandrill will
         * manage this based on reputation
         */
        custom_quota?: number;
    }
    interface SubaccountResponse {
        /** a unique identifier for the subaccount */
        id: string;
        /** an optional display name for the subaccount */
        name?: string | null;
        /**
         * an optional manual hourly quota for the subaccount. If not specified, the hourly quota will
         * be managed based on reputation
         */
        custom_quota?: number | null;
        /** the current sending status of the subaccount */
        status: SubaccountsStatus;
        /** the subaccount's current reputation on a scale from 0 to 100 */
        reputation: number;
        /** the date and time that the subaccount was created as a UTC string in YYYY-MM-DD HH:MM:SS format */
        created_at: string;
        /** the date and time that the subaccount first sent as a UTC string in YYYY-MM-DD HH:MM:SS format */
        first_sent_at: string;
        /** the number of emails the subaccount has sent so far this week (weeks start on midnight Monday, UTC) */
        sent_weekly: number;
        /** the number of emails the subaccount has sent so far this month (months start on midnight of the 1st, UTC) */
        sent_monthly: number;
        /** the number of emails the subaccount has sent since it was created */
        sent_total: number;
    }
    interface SubaccountsDeleteRequest extends BaseRequest {
        /** the unique identifier of the subaccount to delete */
        id: string;
    }
    interface SubaccountsInfoRequest extends BaseRequest {
        /** the unique identifier of the subaccount to query */
        id: string;
    }
    interface SubaccountsInfoResponse {
        /** a unique identifier for the subaccount */
        id: string;
        /** an optional display name for the subaccount */
        name?: string | null;
        /** optional extra text to associate with the subaccount */
        notes?: string | null;
        /**
         * an optional manual hourly quota for the subaccount. If not specified, the hourly quota will be
         * managed based on reputation
         */
        custom_quota?: number | null;
        /** the current sending status of the subaccount */
        status: SubaccountsStatus;
        /** the subaccount's current reputation on a scale from 0 to 100 */
        reputation: number;
        /** the date and time that the subaccount was created as a UTC string in YYYY-MM-DD HH:MM:SS format */
        created_at: string;
        /** the date and time that the subaccount first sent as a UTC string in YYYY-MM-DD HH:MM:SS format */
        first_sent_at: string;
        /** the number of emails the subaccount has sent so far this week (weeks start on midnight Monday, UTC) */
        sent_weekly: number;
        /** the number of emails the subaccount has sent so far this month (months start on midnight of the 1st, UTC) */
        sent_monthly: number;
        /** the number of emails the subaccount has sent since it was created */
        sent_total: number;
        /** the number of emails the subaccount has sent in the last hour */
        sent_hourly: number;
        /** the current hourly quota for the subaccount, either manual or reputation-based */
        hourly_quota: number;
        /** stats for this subaccount in the last 30 days */
        last_30_days: SubaccountStats;
    }
    interface SubaccountsListRequest extends BaseRequest {
        /** an optional prefix to filter the subaccounts' ids and names */
        q?: string;
    }
    interface SubaccountsPauseRequest extends BaseRequest {
        /** the unique identifier of the subaccount to pause */
        id: string;
    }
    interface SubaccountsResumeRequest extends BaseRequest {
        /** the unique identifier of the subaccount to resume */
        id: string;
    }
    interface SubaccountsUpdateRequest extends BaseRequest {
        /** the unique identifier of the subaccount to update */
        id: string;
        /** an optional display name to further identify the subaccount */
        name?: string;
        /** optional extra text to associate with the subaccount */
        notes?: string;
        /**
         * an optional manual hourly quota for the subaccount. If not specified, Mandrill will manage
         * this based on reputation
         */
        custom_quota?: number;
    }
    type SubaccountsStatus = "active" | "paused";
    interface SubaccountStats {
        /** the number of emails sent for this subaccount in the last 30 days */
        sent: number;
        /** the number of emails hard bounced for this subaccount in the last 30 days */
        hard_bounces: number;
        /** the number of emails soft bounced for this subaccount in the last 30 days */
        soft_bounces: number;
        /** the number of emails rejected for sending this subaccount in the last 30 days */
        rejects: number;
        /** the number of spam complaints for this subaccount in the last 30 days */
        complaints: number;
        /** the number of unsbuscribes for this subaccount in the last 30 days */
        unsubs: number;
        /** the number of times emails have been opened for this subaccount in the last 30 days */
        opens: number;
        /** the number of unique opens for emails sent for this subaccount in the last 30 days */
        unique_opens: number;
        /** the number of URLs that have been clicked for this subaccount in the last 30 days */
        clicks: number;
        /** the number of unique clicks for emails sent for this subaccount in the last 30 days */
        unique_clicks: number;
    }

    interface TagsApi {
        /**
         * View all tags history
         *
         * Return the recent history (hourly stats for the last 30 days) for all tags.
         */
        allTimeSeries(body?: TagsAllTimeSeriesRequest): Promise<SearchTimeSeriesResponse[] | AxiosError>;
        /**
         * Delete tag
         *
         * Deletes a tag permanently. Deleting a tag removes the tag from any messages that have been sent,
         * and also deletes the tag's stats. There is no way to undo this operation, so use it carefully.
         */
        delete(body: TagsDeleteRequest): Promise<TagsResponse | AxiosError>;
        /**
         * Get tag info
         *
         * Return more detailed information about a single tag, including aggregates of recent stats.
         */
        info(body: TagsInfoRequest): Promise<TagsInfoResponse | AxiosError>;
        /**
         * List tags
         *
         * Return all of the user-defined tag information.
         */
        list(body?: TagsListRequest): Promise<TagsResponse[] | AxiosError>;
        /**
         * View tag history
         *
         * Return the recent history (hourly stats for the last 30 days) for a tag.
         */
        timeSeries(body: TagsTimeSeriesRequest): Promise<SearchTimeSeriesResponse[] | AxiosError>;
    }
    type TagsAllTimeSeriesRequest = BaseRequest;
    interface TagsDeleteRequest extends BaseRequest {
        /** a tag name */
        tag: string;
    }
    interface TagsResponse extends TagsInfoBase {
        /** the tag's current reputation on a scale from 0 to 100. */
        reputation: number;
        /** the number of unique opens for emails sent with this tag */
        unique_opens: number;
        /** the number of unique clicks for emails sent with this tag */
        unique_clicks: number;
    }
    interface TagsInfoRequest extends BaseRequest {
        /** an existing tag name */
        tag: string;
    }
    interface TagsInfoResponse extends TagsInfoBase {
        /** stats with this tag so far today */
        stats: TagsAggregatedStats;
    }
    type TagsListRequest = BaseRequest;
    interface TagsTimeSeriesRequest extends BaseRequest {
        /** an existing tag name */
        tag: string;
    }
    interface TagsInfoBase {
        /** the actual tag as a string */
        tag: string;
        /** the total number of messages sent with this tag */
        sent: number;
        /** the total number of hard bounces by messages with this tag */
        hard_bounces: number;
        /** the total number of soft bounces by messages with this tag */
        soft_bounces: number;
        /** the total number of rejected messages with this tag */
        rejects: number;
        /** the total number of spam complaints received for messages with this tag */
        complaints: number;
        /** the total number of unsubscribe requests received for messages with this tag */
        unsubs: number;
        /** the total number of times messages with this tag have been opened */
        opens: number;
        /** the total number of times tracked URLs in messages with this tag have been clicked */
        clicks: number;
    }
    interface TagsAggregatedStats {
        /** stats with this tag so far today */
        today: TagsInfoStats;
        /** stats with this tag in the last 7 days */
        last_7_days: TagsInfoStats;
        /** stats with this tag in the last 30 days */
        last_30_days: TagsInfoStats;
        /** stats with this tag in the last 60 days */
        last_60_days: TagsInfoStats;
        /** stats with this tag in the last 90 days */
        last_90_days: TagsInfoStats;
    }
    interface TagsInfoStats {
        /** the number of emails sent with this tag */
        sent: number;
        /** the number of emails hard bounced with this tag */
        hard_bounces: number;
        /** the number of emails soft bounced with this tag */
        soft_bounces: number;
        /** the number of emails rejected for sending this sender */
        rejects: number;
        /** the number of spam complaints with this tag */
        complaints: number;
        /** the number of unsubscribes with this tag */
        unsubs: number;
        /** the number of times emails have been opened with this tag */
        opens: number;
        /** the number of unique opens for emails sent with this tag */
        unique_opens: number;
        /** the number of URLs that have been clicked with this tag */
        clicks: number;
        /** the number of unique clicks for emails sent with this tag */
        unique_clicks: number;
    }

    interface TemplatesApi {
        /**
         * Add template
         *
         * Add a new template.
         */
        add(body: TemplatesAddRequest): Promise<TemplateResponse | AxiosError>;
        /**
         * Delete template
         *
         * Delete a template.
         */
        delete(body: TemplatesFindByNameRequest): Promise<TemplateResponse | AxiosError>;
        /**
         * Get template info
         *
         * Get the information for an existing template.
         */
        info(body: TemplatesFindByNameRequest): Promise<TemplateResponse | AxiosError>;
        /**
         * List templates
         *
         * Return a list of all the templates available to this user.
         */
        list(body?: TemplatesListRequest): Promise<TemplateResponse[] | AxiosError>;
        /**
         * Publish template content
         *
         * Publish the content for the template. Any new messages sent using this template will start
         * using the content that was previously in draft.
         */
        publish(body: TemplatesFindByNameRequest): Promise<TemplateResponse | AxiosError>;
        /**
         * Render html template
         *
         * Inject content and optionally merge fields into a template, returning the HTML that results.
         */
        render(body: TemplatesRenderRequest): Promise<TemplatesRenderResponse | AxiosError>;
        /**
         * Get template history
         *
         * Return the recent history (hourly stats for the last 30 days) for a template.
         */
        timeSeries(body: TemplatesFindByNameRequest): Promise<TimeSeriesResponse[] | AxiosError>;
        /**
         * Update template
         *
         * Update the code for an existing template. If null is provided for any fields, the values will
         * remain unchanged.
         */
        update(body: TemplatesUpdateRequest): Promise<TemplateResponse | AxiosError>;
    }

    interface TemplatesAddRequest extends BaseRequest {
        /** the name for the new template - must be unique */
        name: string;
        /** a default sending address for emails sent using this template */
        from_email?: string;
        /** a default from name to be used */
        from_name?: string;
        /** a default subject line to be used */
        subject?: string;
        /** the HTML code for the template with mc:edit attributes for the editable elements */
        code?: string;
        /** a default text part to be used when sending with this template */
        text?: string;
        /** set to false to add a draft template without publishing */
        publish?: boolean;
        /** an optional array of up to 10 labels to use for filtering templates */
        labels?: string[];
    }
    interface TemplateResponse {
        /** the immutable unique code name of the template */
        slug: string;
        /** the name of the template */
        name: string;
        /** the list of labels applied to the template */
        labels: string[];
        /**
         * the full HTML code of the template, with mc:edit attributes marking the editable
         * elements - draft version
         */
        code: string;
        /** the subject line of the template, if provided - draft version */
        subject?: string | null;
        /** the default sender address for the template, if provided - draft version */
        from_email?: string | null;
        /** the default sender from name for the template, if provided - draft version */
        from_name?: string | null;
        /** the default text part of messages sent with the template, if provided - draft version */
        text?: string | null;
        /** the same as the template name - kept as a separate field for backwards compatibility */
        publish_name: string;
        /**
         * the full HTML code of the template, with mc:edit attributes marking the editable elements
         * that are available as published, if it has been published
         */
        publish_code?: string | null;
        /** the subject line of the template, if provided */
        publish_subject?: string | null;
        /** the default sender address for the template, if provided */
        publish_from_email?: string | null;
        /** the default sender from name for the template, if provided */
        publish_from_name?: string | null;
        /** the default text part of messages sent with the template, if provided */
        publish_text?: string | null;
        /**
         * the date and time the template was last published as a UTC string in YYYY-MM-DD HH:MM:SS format,
         * or null if it has not been published
         */
        published_at?: string | null;
        /** the date and time the template was first created as a UTC string in YYYY-MM-DD HH:MM:SS format */
        created_at: string;
        /** the date and time the template was last modified as a UTC string in YYYY-MM-DD HH:MM:SS format */
        updated_at: string;
    }
    interface TemplatesFindByNameRequest extends BaseRequest {
        /** the immutable name of an existing template */
        name: string;
    }
    interface TemplatesListRequest extends BaseRequest {
        /** an optional label to filter the templates */
        label?: string;
    }
    interface TemplatesRenderRequest extends BaseRequest {
        /** the immutable name of a template that exists in the user's account */
        template_name: string;
        /**
         * an array of template content to render. Each item in the array should be a struct with
         * two keys - name: the name of the content block to set the content for, and content: the actual
         * content to put into the block
         */
        template_content: TemplateContent[];
        /**
         * optional merge variables to use for injecting merge field content. If this is not provided,
         * no merge fields will be replaced.
         */
        merge_vars?: MergeVar[];
    }
    interface TemplatesRenderResponse {
        /** the rendered HTML as a string */
        html: string;
    }
    interface TemplatesUpdateRequest extends BaseRequest {
        /** the immutable name of an existing template */
        name: string;
        /** the new default sending address */
        from_email?: string;
        /** the new default from name */
        from_name?: string;
        /** the new default subject line */
        subject?: string;
        /** the new code for the template */
        code?: string;
        /** the new default text part to be used */
        text?: string;
        /** set to false to update the draft version of the template without publishing */
        publish?: boolean;
        /** an optional array of up to 10 labels to use for filtering templates */
        labels?: string[];
    }

    interface UrlsApi {
        /**
         * Add tracking domains
         *
         * Add a tracking domain to your account.
         */
        addTrackingDomain(body: UrlsFindByDomainRequest): Promise<UrlsTrackingDomainResponse | AxiosError>;
        /**
         * Check cname settings
         *
         * Checks the CNAME settings for a tracking domain. The domain must have been added already with
         * the add-tracking-domain call.
         */
        checkTrackingDomain(body: UrlsFindByDomainRequest): Promise<UrlsTrackingDomainResponse | AxiosError>;
        /**
         * List most clicked urls
         *
         * Get the 100 most clicked URLs.
         */
        list(body?: UrlsListRequest): Promise<UrlsStatsResponse[] | AxiosError>;
        /**
         * Search most clicked urls
         *
         * Return the 100 most clicked URLs that match the search query given.
         */
        search(body: UrlsSearchRequest): Promise<UrlsStatsResponse[] | AxiosError>;
        /**
         * Get url history
         *
         * Return the recent history (hourly stats for the last 30 days) for a URL
         */
        timeSeries(body: UrlsTimeSeriesRequest): Promise<UrlsTimeSeriesResponse[] | AxiosError>;
        /**
         * List tracking domains
         *
         * Get the list of tracking domains set up for this account.
         */
        trackingDomains(body?: UrlsTrackingDomainsRequest): Promise<UrlsTrackingDomainResponse[] | AxiosError>;
    }
    interface UrlsFindByDomainRequest extends BaseRequest {
        /** a domain name */
        domain: string;
    }
    interface UrlsTrackingDomainResponse {
        /** the tracking domain name */
        domain: string;
        /** the date and time that the tracking domain was added as a UTC string in YYYY-MM-DD HH:MM:SS format */
        created_at: string;
        /** when the domain's DNS settings were last tested as a UTC string in YYYY-MM-DD HH:MM:SS format */
        last_tested_at: string;
        /** details about the domain's CNAME record */
        cname: UrlsTrackingDomainsCname;
        /** whether this domain can be used as a tracking domain for email. */
        valid_tracking: boolean;
    }
    type UrlsListRequest = BaseRequest;
    interface UrlsStatsResponse {
        /** the URL to be tracked */
        url: string;
        /** the number of emails that contained the URL */
        sent: number;
        /** the number of times the URL has been clicked from a tracked email */
        clicks: number;
        /** the number of unique emails that have generated clicks for this URL */
        unique_clicks: number;
    }
    interface UrlsSearchRequest extends BaseRequest {
        /** a search query */
        q: string;
    }
    interface UrlsTimeSeriesRequest extends BaseRequest {
        /** an existing URL */
        url: string;
    }
    interface UrlsTimeSeriesResponse {
        /** the hour as a UTC date string in YYYY-MM-DD HH:MM:SS format */
        time: string;
        /** the number of emails that were sent with the URL during the hour */
        sent: number;
        /** the number of times the URL was clicked during the hour */
        clicks: number;
        /** the number of unique clicks generated for emails sent with this URL during the hour */
        unique_clicks: number;
    }
    type UrlsTrackingDomainsRequest = BaseRequest;
    interface UrlsTrackingDomainsCname {
        /** whether the domain's CNAME record is valid for use with Mandrill */
        valid: boolean;
        /**
         * when the domain's CNAME record will be considered valid for use with Mandrill as a UTC
         * string in YYYY-MM-DD HH:MM:SS format. If set, this indicates that the record is valid now,
         * but was previously invalid, and Mandrill will wait until the record's TTL elapses to start
         * using it.
         */
        valid_after: string;
        /** an error describing the CNAME record, or null if the record is correct */
        error?: string | null;
    }

    interface UsersApi {
        /**
         * Get user info
         *
         * Return the information about the API-connected user.
         */
        info(body?: UsersInfoRequest): Promise<UsersInfoResponse | AxiosError>;
        /**
         * Ping
         *
         * Validate an API key and respond to a ping.
         */
        ping(body?: UsersPingRequest): Promise<UsersPingResponse | AxiosError>;
        /**
         * Ping 2
         *
         * Validate an API key and respond to a ping (JSON parser version).
         */
        ping2(body?: UsersPing2Request): Promise<UsersPing2Response | AxiosError>;
        /**
         * List account senders
         *
         * Return the senders that have tried to use this account, both verified and unverified.
         */
        senders(body?: UsersSendersRequest): Promise<UsersSenderResponse[] | AxiosError>;
    }
    type UsersInfoRequest = BaseRequest;
    interface UsersInfoResponse {
        /** the username of the user (used for SMTP authentication) */
        username: string;
        /**
         * the date and time that the user's Mandrill account was created as a UTC string in
         * YYYY-MM-DD HH:MM:SS format
         */
        created_at: string;
        /** a unique, permanent identifier for this user */
        public_id: string;
        /** the reputation of the user on a scale from 0 to 100, with 75 generally being a "good" reputation */
        reputation: number;
        /**
         * the maximum number of emails Mandrill will deliver for this user each hour. Any emails beyond
         * that will be accepted and queued for later delivery. Users with higher reputations will have
         * higher hourly quotas
         */
        hourly_quota: number;
        /** the number of emails that are queued for delivery due to exceeding your monthly or hourly quotas */
        backlog: number;
        /** an aggregate summary of the account's sending stats */
        stats: UserInfoAggregatedStats;
    }
    type UsersPingRequest = BaseRequest;
    type UsersPingResponse = "PONG!";
    type UsersPing2Request = BaseRequest;
    interface UsersPing2Response {
        /** a simple pong response */
        PING: "PONG!";
    }
    type UsersSendersRequest = BaseRequest;
    interface UsersSenderResponse {
        /** the sender's email address */
        address: string;
        /**
         * the date and time that the sender was first seen by Mandrill as a UTC date string in
         * YYYY-MM-DD HH:MM:SS format
         */
        created_at: string;
        /** the total number of messages sent by this sender */
        sent: number;
        /** the total number of hard bounces by messages by this sender */
        hard_bounces: number;
        /** the total number of soft bounces by messages by this sender */
        soft_bounces: number;
        /** the total number of rejected messages by this sender */
        rejects: number;
        /** the total number of spam complaints received for messages by this sender */
        complaints: number;
        /** the total number of unsubscribe requests received for messages by this sender */
        unsubs: number;
        /** the total number of times messages by this sender have been opened */
        opens: number;
        /** the total number of times tracked URLs in messages by this sender have been clicked */
        clicks: number;
        /** the number of unique opens for emails sent for this sender */
        unique_opens: number;
        /** the number of unique clicks for emails sent for this sender */
        unique_clicks: number;
    }

    interface UserInfoAggregatedStats {
        /** stats for this user so far today */
        today: UserInfoStats;
        /** stats for this user in the last 7 days */
        last_7_days: UserInfoStats;
        /** stats for this user in the last 30 days */
        last_30_days: UserInfoStats;
        /** stats for this user in the last 60 days */
        last_60_days: UserInfoStats;
        /** stats for this user in the last 90 days */
        last_90_days: UserInfoStats;
        /** stats for the lifetime of the user's account */
        all_time: UserInfoStats;
    }
    interface UserInfoStats {
        /** the number of emails sent for this user */
        sent: number;
        /** the number of emails hard bounced for this user */
        hard_bounces: number;
        /** the number of emails soft bounced for this user */
        soft_bounces: number;
        /** the number of emails rejected for sending this sender */
        rejects: number;
        /** the number of spam complaints for this user */
        complaints: number;
        /** the number of unsubscribes for this user */
        unsubs: number;
        /** the number of times emails have been opened for this user */
        opens: number;
        /** the number of unique opens for emails sent for this user */
        unique_opens: number;
        /** the number of URLs that have been clicked for this user */
        clicks: number;
        /** the number of unique clicks for emails sent for this user */
        unique_clicks: number;
    }

    interface WebhooksApi {
        /**
         * Add webhook
         *
         * Add a new webhook.
         */
        add(body: WebhooksAddRequest): Promise<WebhookResponse | AxiosError>;
        /**
         * Delete webhook
         *
         * Delete an existing webhook.
         */
        delete(body: WebhooksFindByIdRequest): Promise<WebhookResponse | AxiosError>;
        /**
         * Get webhook info
         *
         * Given the ID of an existing webhook, return the data about it.
         */
        info(body: WebhooksFindByIdRequest): Promise<WebhookResponse | AxiosError>;
        /**
         * List webhooks
         *
         * Get the list of all webhooks defined on the account.
         */
        list(body?: WebhooksListRequest): Promise<WebhookResponse[] | AxiosError>;
        /**
         * Update webhook
         *
         * Update an existing webhook.
         */
        update(body: WebhooksUpdateRequest): Promise<WebhookResponse | AxiosError>;
    }
    interface WebhooksAddRequest extends BaseRequest {
        /** the URL to POST batches of events */
        url: string;
        /** an optional description of the webhook */
        description?: string;
        /** an optional list of events that will be posted to the webhook */
        events?: WebhookEvent[];
    }
    interface WebhookResponse {
        /** a unique integer identifier for the webhook */
        id: number;
        /** The URL that the event data will be posted to */
        url: string;
        /** a description of the webhook */
        description?: string | null;
        /** the key used to requests for this webhook */
        auth_key: string;
        /** The message events that will be posted to the hook */
        events: WebhookEvent[];
        /** the date and time that the webhook was created as a UTC string in YYYY-MM-DD HH:MM:SS format */
        created_at: string;
        /**
         * the date and time that the webhook last successfully received events as a UTC string in
         * YYYY-MM-DD HH:MM:SS format
         */
        last_sent_at: string;
        /** the number of event batches that have ever been sent to this webhook */
        batches_sent: number;
        /** the total number of events that have ever been sent to this webhook */
        events_sent: number;
        /** if we've ever gotten an error trying to post to this webhook, the last error that we've seen */
        last_error?: string | null;
    }
    interface WebhooksFindByIdRequest extends BaseRequest {
        /** the unique identifier of a webhook belonging to this account */
        id: number;
    }
    type WebhooksListRequest = BaseRequest;
    interface WebhooksUpdateRequest extends BaseRequest {
        /** the unique identifier of a webhook belonging to this account */
        id: number;
        /** the URL to POST batches of events. Requires webhook to exist. */
        url: string;
        /** an optional description of the webhook */
        description?: string;
        /** an optional list of events that will be posted to the webhook */
        events?: WebhookEvent[];
    }
    type WebhookEvent =
        | "send"
        | "hard_bounce"
        | "soft_bounce"
        | "open"
        | "click"
        | "spam"
        | "unsub"
        | "reject"
        | "blacklist"
        | "whitelist";

    interface WhitelistsApi {
        /**
         * Add email to allowlist
         *
         * Adds an email to your email rejection allowlist. If the address is currently on your denylist,
         * that denylist entry will be removed automatically.
         */
        add(body: WhitelistsAddRequest): Promise<WhitelistsAddResponse | AxiosError>;
        /**
         * Remove email from allowlist
         *
         * Removes an email address from the allowlist.
         */
        delete(body: WhitelistsDeleteRequest): Promise<WhitelistsDeleteResponse | AxiosError>;
        /**
         * List allowlisted emails
         *
         * Retrieves your email rejection allowlist. You can provide an email address or search prefix to
         * limit the results. Returns up to 1000 results.
         */
        list(body?: WhitelistsListRequest): Promise<WhitelistsListResponse[] | AxiosError>;
    }
    interface WhitelistsAddRequest extends BaseRequest {
        /** an email address to add to the allowlist */
        email: string;
        /** an optional description of why the email was added to the allowlist */
        comment?: string;
    }
    interface WhitelistsAddResponse {
        /** the email address you provided */
        email: string;
        /** whether the operation succeeded */
        added: boolean;
    }
    interface WhitelistsDeleteRequest extends BaseRequest {
        /** the email address to remove from the allowlist */
        email: string;
    }
    interface WhitelistsDeleteResponse {
        /** the email address that was removed from the denylist */
        email: string;
        /** whether the address was deleted successfully */
        deleted: boolean;
    }
    interface WhitelistsListRequest extends BaseRequest {
        /** an optional email address or prefix to search by */
        email?: string;
    }
    interface WhitelistsListResponse {
        /** the email that is allowlisted */
        email: string;
        /** a description of why the email was allowlisted */
        detail?: string | null;
        /** when the email was added to the allowlist */
        created_at: string;
    }
}
