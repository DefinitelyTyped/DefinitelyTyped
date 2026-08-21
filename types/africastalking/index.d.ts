// Single-file declaration; section comments below mirror the SDK's `lib/`
// layout one-to-one. DT's `@definitelytyped/no-declare-current-package` rule
// blocks cross-file namespace augmentation for `export =` packages, so all
// types live here.

export = africastalking;

declare function africastalking(
    options: africastalking.ClientOptions,
): africastalking.AfricasTalking;

declare namespace africastalking {
    // =========================================================================
    // Client  (mirrors `lib/index.js`)
    // =========================================================================

    interface ClientOptions {
        username: string;
        apiKey: string;
        /** Response wire format. SDK default is `"json"`. */
        format?: "json" | "xml";
    }

    /**
     * Top-level client surface returned by `africastalking(options)`. Each
     * property is a service handle the SDK constructs at instantiation.
     */
    interface AfricasTalking {
        SMS: SMS;
        TOKEN: TOKEN;
        VOICE: VOICE;
        AIRTIME: AIRTIME;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        INSIGHTS: INSIGHTS;
        WHATSAPP: WHATSAPP;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        MOBILE_DATA: MOBILE_DATA;
        APPLICATION: APPLICATION;
        /** Backward-compat alias for {@link APPLICATION}; same instance. */
        ACCOUNT: APPLICATION;
        /** Express/connect middleware factory for USSD callbacks. */
        USSD: USSDMiddlewareFactory;
    }

    // =========================================================================
    // SMS  (mirrors `lib/sms.js`)
    // =========================================================================

    interface SMSOptions {
        /** Recipient phone number(s) in E.164 format. */
        to: string | string[];
        /** Message body. */
        message: string;
        /** Registered short code or alphanumeric sender id, e.g. `AFRICASTKNG`. */
        from?: string;
        /** Alternate name for {@link SMSOptions.from}. */
        senderId?: string;
        /** Bulk-mode toggle to queue messages rather than dispatch immediately. */
        enqueue?: boolean;
    }

    interface SMSPremiumOptions extends SMSOptions {
        keyword: string;
        linkId?: string;
        retryDurationInHours?: number;
    }

    /**
     * Status returned per recipient. See AT bulk-SMS status codes:
     * https://developers.africastalking.com/docs/sms/sending/bulk
     */
    type SMSRecipientStatus =
        | "Success"
        | "Failed"
        | "Throttled"
        | "InsufficientBalance"
        | "UserInBlackList"
        | "CouldNotRoute"
        | "InternalServerError"
        | "UserIsInactive"
        | "RequestExpired"
        | "InvalidLongShortCode"
        // Forward-compat for AT status values not yet enumerated.
        | (string & {});

    interface SMSRecipient {
        statusCode: number;
        number: string;
        status: SMSRecipientStatus;
        cost: string;
        messageId: string;
    }

    /** Inner content of the AT SMS-send response envelope. */
    interface SMSMessageData {
        Message: string;
        Recipients: SMSRecipient[];
    }

    /** Top-level shape resolved by {@link SMS.send} for a single request. */
    interface SMSResponse {
        SMSMessageData: SMSMessageData;
    }

    interface SMSFetchOptions {
        lastReceivedId?: number;
        keyword?: string;
        shortCode?: string;
    }

    interface SMSInboundMessage {
        linkId: string;
        text: string;
        to: string;
        id: number;
        date: string;
        from: string;
    }

    interface SMSFetchMessagesResponse {
        SMSMessageData: {
            Messages: SMSInboundMessage[];
        };
    }

    interface SMSSubscriptionOptions {
        shortCode: string;
        keyword: string;
        phoneNumber: string;
    }

    interface SMSFetchSubscriptionOptions {
        shortCode: string;
        keyword: string;
        lastReceivedId?: number;
    }

    interface SMSSubscriber {
        phoneNumber: string;
        id: number;
        updateType?: string;
    }

    interface SMSSubscriptionResponse {
        description: string;
        success: string;
        token?: string;
    }

    interface SMSFetchSubscriptionResponse {
        responses: SMSSubscriber[];
    }

    interface SMSDeleteSubscriptionResponse {
        description: string;
        success: string;
    }

    interface SMS {
        /**
         * Send the same content to one or more recipients in a single request.
         *
         * @see https://developers.africastalking.com/docs/sms/sending/bulk
         */
        send(options: SMSOptions): Promise<SMSResponse>;
        /**
         * Send multiple distinct payloads in parallel (one request per element).
         * Rejected requests appear as `{ SMSMessageData: { Message: <reason>, Recipients: [], status: "failed" } }`.
         */
        send(options: SMSOptions[]): Promise<SMSResponse[]>;
        /** Alias for {@link SMS.send}. */
        sendBulk(options: SMSOptions): Promise<SMSResponse>;
        sendBulk(options: SMSOptions[]): Promise<SMSResponse[]>;
        /**
         * Send a premium-content SMS. Bulk-mode off; per-recipient delivery
         * state surfaces in the response.
         *
         * @see https://developers.africastalking.com/docs/sms/sending/premium
         */
        sendPremium(options: SMSPremiumOptions): Promise<SMSResponse>;
        /**
         * Fetch inbound messages received against the account's short codes.
         *
         * @see https://developers.africastalking.com/docs/sms/incoming
         */
        fetchMessages(options?: SMSFetchOptions): Promise<SMSFetchMessagesResponse>;
        /**
         * Create a premium-SMS subscription for a phone number against a
         * (`shortCode`, `keyword`) pair.
         *
         * @see https://developers.africastalking.com/docs/sms/subscriptions/create
         */
        createSubscription(options: SMSSubscriptionOptions): Promise<SMSSubscriptionResponse>;
        fetchSubscription(options: SMSFetchSubscriptionOptions): Promise<SMSFetchSubscriptionResponse>;
        deleteSubscription(options: SMSSubscriptionOptions): Promise<SMSDeleteSubscriptionResponse>;
    }

    // =========================================================================
    // Token  (mirrors `lib/token.js`)
    // =========================================================================

    interface AuthTokenResponse {
        token: string;
        lifetimeInSeconds: number;
    }

    interface TOKEN {
        /**
         * Generate a short-lived auth token usable by client SDKs (mobile / web).
         *
         * @see https://developers.africastalking.com/docs/auth-token
         */
        generateAuthToken(): Promise<AuthTokenResponse>;
    }

    // =========================================================================
    // Voice  (mirrors `lib/voice.js`)
    // =========================================================================

    interface VoiceCallOptions {
        callFrom: string;
        callTo: string | string[];
        clientRequestId?: string;
    }

    type VoiceCallStatus =
        | "Queued"
        | "InvalidPhoneNumber"
        | "DestinationNotSupported"
        | "InsufficientCredit"
        | (string & {});

    interface VoiceCallEntry {
        phoneNumber: string;
        status: VoiceCallStatus;
        sessionId?: string;
        errorMessage?: string;
    }

    interface VoiceCallResponse {
        entries: VoiceCallEntry[];
        errorMessage?: string;
    }

    interface VoiceQueuedCallsOptions {
        phoneNumbers: string | string[];
    }

    interface VoiceQueuedCallEntry {
        phoneNumber: string;
        queueName: string;
        numCalls: number;
    }

    interface VoiceQueuedCallsResponse {
        entries: VoiceQueuedCallEntry[];
        errorMessage?: string;
    }

    interface VoiceUploadMediaOptions {
        url: string;
        phoneNumber: string;
    }

    /**
     * Response shape is documented only on the AT side and not in the SDK.
     * Consumers should treat as opaque or narrow against runtime checks.
     */
    type VoiceUploadMediaResponse = unknown;

    interface VOICE {
        /**
         * Initiate an outbound voice call to one or more numbers.
         *
         * @see https://developers.africastalking.com/docs/voice/makecall
         */
        call(options: VoiceCallOptions): Promise<VoiceCallResponse>;
        /**
         * Get the number of calls currently queued against the account's
         * virtual numbers.
         *
         * @see https://developers.africastalking.com/docs/voice/queue
         */
        getNumQueuedCalls(options: VoiceQueuedCallsOptions): Promise<VoiceQueuedCallsResponse>;
        /**
         * Upload a media file to AT for later playback in voice flows.
         *
         * @see https://developers.africastalking.com/docs/voice/mediaupload
         */
        uploadMediaFile(options: VoiceUploadMediaOptions): Promise<VoiceUploadMediaResponse>;
        /** Constructor for the voice-XML response builder. Instantiate per response. */
        readonly ActionBuilder: ActionBuilderConstructor;
    }

    // =========================================================================
    // ActionBuilder  (mirrors `lib/actionbuilder.js`)
    // =========================================================================

    interface VoiceSayAttributes {
        voice?: "man" | "woman" | (string & {});
        playBeep?: boolean;
    }

    interface VoiceGetDigitsAttributes {
        finishOnKey?: string;
        numDigits?: number;
        timeout?: number;
        callbackUrl?: string;
    }

    interface VoiceDialAttributes {
        callerId?: string;
        record?: boolean;
        sequential?: boolean;
        maxDuration?: number;
        ringBackTone?: string;
    }

    interface VoiceRecordAttributes {
        finishOnKey?: string;
        maxLength?: number;
        timeout?: number;
        playBeep?: boolean;
        trimSilence?: boolean;
        callbackUrl?: string;
    }

    interface VoiceEnqueueAttributes {
        holdMusic?: string;
        name?: string;
    }

    interface VoiceDequeueAttributes {
        name?: string;
    }

    interface VoiceActionChild {
        say?: { text: string; attributes?: VoiceSayAttributes };
        play?: { url: string };
    }

    interface ActionBuilder {
        say(text: string, attributes?: VoiceSayAttributes): ActionBuilder;
        play(url: string): ActionBuilder;
        getDigits(children: VoiceActionChild, attributes: VoiceGetDigitsAttributes): ActionBuilder;
        dial(phoneNumbers: string, attributes?: VoiceDialAttributes): ActionBuilder;
        record(children: VoiceActionChild, attributes?: VoiceRecordAttributes): ActionBuilder;
        enqueue(attributes?: VoiceEnqueueAttributes): ActionBuilder;
        dequeue(phoneNumber: string, attributes?: VoiceDequeueAttributes): ActionBuilder;
        redirect(url: string): ActionBuilder;
        conference(): ActionBuilder;
        reject(): ActionBuilder;
        /** Finalize and return the response XML. Throws if called twice. */
        build(): string;
    }

    interface ActionBuilderConstructor {
        new(): ActionBuilder;
    }

    // =========================================================================
    // Airtime  (mirrors `lib/airtime.js`)
    // =========================================================================

    interface AirtimeRecipient {
        phoneNumber: string;
        currencyCode: string;
        amount: number;
    }

    interface AirtimeSendOptions {
        recipients: AirtimeRecipient[];
        idempotencyKey?: string;
        maxNumRetry?: number;
    }

    interface AirtimeResponseEntry {
        phoneNumber: string;
        amount: string;
        discount: string;
        status: string;
        requestId: string;
        errorMessage: string;
    }

    interface AirtimeSendResponse {
        numSent: number;
        totalAmount: string;
        totalDiscount: string;
        responses: AirtimeResponseEntry[];
        errorMessage?: string;
    }

    interface AirtimeTransactionData {
        amount: string;
        deliveredAt?: string;
        phoneNumber: string;
        requestId: string;
        status: string;
        transactionDate?: string;
    }

    interface AirtimeTransactionStatusResponse {
        errorMessage?: string;
        data?: AirtimeTransactionData;
    }

    interface AIRTIME {
        /** @see https://developers.africastalking.com/docs/airtime/sending */
        send(options: AirtimeSendOptions): Promise<AirtimeSendResponse>;
        /** @see https://developers.africastalking.com/docs/airtime/status */
        findTransactionStatus(transactionId: string): Promise<AirtimeTransactionStatusResponse>;
    }

    // =========================================================================
    // Application  (mirrors `lib/application.js`; also exposed as `ACCOUNT`)
    // =========================================================================

    interface ApplicationDataResponse {
        UserData: {
            balance: string;
        };
    }

    interface APPLICATION {
        /**
         * Fetch the application's wallet balance and metadata.
         *
         * @see https://developers.africastalking.com/docs/application/balance
         */
        fetchApplicationData(): Promise<ApplicationDataResponse>;
        /** Alias for {@link APPLICATION.fetchApplicationData}; same shape. */
        fetchAccount(): Promise<ApplicationDataResponse>;
    }

    // =========================================================================
    // Insights  (mirrors `lib/insights.js`)
    // =========================================================================

    interface InsightsSimSwapEntry {
        phoneNumber: string;
        simSwapStatus?: string;
        errorMessage?: string;
    }

    interface InsightsSimSwapResponse {
        status: "Processed" | (string & {});
        responses: InsightsSimSwapEntry[];
    }

    // Identifier matches the SDK's `this.INSIGHTS` runtime property on the
    // client; `@typescript-eslint/naming-convention` rejects names matching
    // `^I[A-Z]/u`, so the override is necessary to preserve the runtime-
    // property convention used across this declaration.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface INSIGHTS {
        /**
         * Check whether the given phone number(s) have undergone a SIM swap
         * recently. Useful for fraud / takeover signals.
         *
         * @see https://developers.africastalking.com/docs/insights/sim-swap
         */
        checkSimSwapState(phoneNumbers: string | string[]): Promise<InsightsSimSwapResponse>;
    }

    // =========================================================================
    // Mobile data  (mirrors `lib/mobileData.js`)
    // =========================================================================

    type MobileDataUnit = "MB" | "GB";
    type MobileDataValidity = "Day" | "Week" | "BiWeek" | "Month" | "Quarterly";

    interface MobileDataRecipient {
        phoneNumber: string;
        quantity: number;
        unit: MobileDataUnit;
        validity: MobileDataValidity;
        metadata: Record<string, unknown>;
    }

    interface MobileDataSendOptions {
        productName: string;
        recipients: MobileDataRecipient[];
        idempotencyKey?: string;
    }

    interface MobileDataFindTransactionOptions {
        transactionId: string;
    }

    /**
     * Response shapes for mobile-data endpoints are documented only on the
     * AT side; opaque to keep the type honest until they stabilize.
     */
    type MobileDataResponse = unknown;

    // Identifier matches the SDK's `this.MOBILE_DATA` runtime property on
    // the client; `@typescript-eslint/naming-convention` rejects
    // SCREAMING_SNAKE_CASE for interfaces, so the override is necessary to
    // preserve the runtime-property convention used across this declaration.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface MOBILE_DATA {
        send(options: MobileDataSendOptions): Promise<MobileDataResponse>;
        findTransaction(options: MobileDataFindTransactionOptions): Promise<MobileDataResponse>;
        fetchWalletBalance(): Promise<MobileDataResponse>;
    }

    // =========================================================================
    // WhatsApp  (mirrors `lib/whatsapp.js`)
    // =========================================================================

    type WhatsAppMediaType = "Image" | "Video" | "Audio" | "Voice";
    type WhatsAppTemplateCategory = "MARKETING" | "UTILITY" | "AUTHENTICATION";

    interface WhatsAppTextBody {
        message: string;
    }

    interface WhatsAppTemplateBody {
        templateId: string;
        headerValue: string;
        bodyValues: string[];
    }

    interface WhatsAppMediaBody {
        mediaType: WhatsAppMediaType;
        url: string;
        caption?: string;
    }

    interface WhatsAppInteractiveSectionRow {
        id?: string;
        title?: string;
        description?: string;
    }

    interface WhatsAppInteractiveSection {
        title?: string;
        product_items?: Array<Record<string, unknown>>;
        rows: WhatsAppInteractiveSectionRow[];
    }

    interface WhatsAppInteractiveListAction {
        button?: string;
        sections?: WhatsAppInteractiveSection[];
    }

    interface WhatsAppInteractiveButton {
        id?: string;
        title?: string;
    }

    interface WhatsAppInteractiveButtonAction {
        buttons?: WhatsAppInteractiveButton[];
    }

    interface WhatsAppInteractiveBody {
        action?: WhatsAppInteractiveListAction | WhatsAppInteractiveButtonAction;
        body?: { text?: string };
        header?: { text?: string };
        footer?: { text?: string };
    }

    type WhatsAppBody = WhatsAppTextBody | WhatsAppTemplateBody | WhatsAppMediaBody | WhatsAppInteractiveBody;

    interface WhatsAppSendOptions {
        waNumber: string;
        phoneNumber: string;
        body: WhatsAppBody;
    }

    interface WhatsAppTemplateComponents {
        header?: Record<string, unknown>;
        body?: Record<string, unknown>;
        footer?: Record<string, unknown>;
        buttons?: Record<string, unknown>;
    }

    interface WhatsAppCreateTemplateOptions {
        waNumber: string;
        name: string;
        language: string;
        category: WhatsAppTemplateCategory;
        components: WhatsAppTemplateComponents;
    }

    type WhatsAppResponse = unknown;

    interface WHATSAPP {
        sendMessage(options: WhatsAppSendOptions): Promise<WhatsAppResponse>;
        createTemplate(options: WhatsAppCreateTemplateOptions): Promise<WhatsAppResponse>;
    }

    // =========================================================================
    // USSD  (mirrors `lib/ussd.js`)
    // =========================================================================

    interface USSDPayload {
        sessionId: string;
        serviceCode: string;
        phoneNumber: string;
        text: string;
        networkCode?: string;
        [key: string]: string | undefined;
    }

    interface USSDResponseOptions {
        response: string;
        endSession: boolean;
    }

    type USSDRespondCallback = (opts: USSDResponseOptions) => void;
    type USSDHandlerFn = (payload: USSDPayload, respond: USSDRespondCallback) => void;

    /** Connect/Express-compatible middleware function. */
    type USSDMiddleware = (req: unknown, res: unknown, next: (err?: unknown) => void) => void;

    /**
     * Factory that takes a USSD handler and returns the middleware tuple to
     * mount on the USSD callback route.
     *
     * @see https://developers.africastalking.com/docs/ussd/callback
     */
    type USSDMiddlewareFactory = (handler: USSDHandlerFn) => USSDMiddleware[];
}
