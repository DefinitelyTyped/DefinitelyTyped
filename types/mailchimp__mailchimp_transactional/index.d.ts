// Type definitions for @mailchimp/mailchimp_transactional 1.0
// Project: https://github.com/mailchimp/mailchimp-transactional-node
// Definitions by: Pieter Scheffers <https://github.com/PieterScheffers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Mailchimp {
    type OutputFormat = 'json' | 'xml' | 'php' | 'yaml';

    type SendingStatus = 'sent' | 'queued' | 'scheduled' | 'rejected' | 'invalid';

    type SendRejectReason =
        | 'hard-bounce'
        | 'soft-bounce'
        | 'spam'
        | 'unsub'
        | 'custom'
        | 'invalid-sender'
        | 'invalid'
        | 'test-mode-limit'
        | 'unsigned'
        | 'rule';

    type RecipientType = 'to' | 'cc' | 'bcc';

    interface Recipient {
        email: string;
        name?: string;
        type: RecipientType;
    }

    interface MergeVar {
        name: string;
        content: string;
    }

    interface RecipientMergeVar {
        rcpt: string;
        vars: MergeVar[];
    }

    interface Metadata {
        [key: string]: any;
    }

    interface RecipientMetadata {
        rcpt: string;
        values: Metadata & { user_id: number };
    }

    interface Attachment {
        /** The MIME type of the attachment */
        type: string;

        /** The file name of the attachment */
        name: string;

        /** The content of the attachment as a base64-encoded string */
        content: string;
    }

    interface Image {
        /** The MIME type of the image - must start with "image/" */
        type: string;

        /** The Content ID of the image - use 'cid:THIS-VALUE' to reference the image in your HTML content */
        name: string;

        /** The content of the image as a base64-encoded string */
        content: string;
    }

    /**
     * @link https://mailchimp.com/developer/transactional/api/messages/send-new-message/
     */
    interface SendMessageRequest {
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

        /**
         * The information on the message to send
         */
        message: {
            html?: string;
            text?: string;
            subject?: string;
            from_email?: string;
            from_name?: string;
            to: Recipient[];
            headers?: Record<string, string>;
            important?: boolean;
            track_opens?: boolean;
            track_clicks?: boolean;
            auto_text?: boolean;
            auto_html?: boolean;
            inline_css?: boolean;
            url_strip_qs?: boolean;
            preserve_recipients?: boolean;
            view_content_link?: boolean;
            bcc_address?: string;
            tracking_domain?: string;
            signing_domain?: string;
            return_path_domain?: string;
            merge?: boolean;
            merge_language?: 'mailchimp' | 'handlebars';
            global_merge_vars?: MergeVar[];
            merge_vars?: RecipientMergeVar[];
            tags?: string[];
            subaccount?: string;
            google_analytics_domains?: string[];
            google_analytics_campaign?: string;
            metadata?: Metadata & { website: string };
            recipient_metadata?: RecipientMetadata[];
            attachments?: Attachment[];
            images?: Image[];
        };
    }

    /**
     * @link https://mailchimp.com/developer/transactional/api/messages/send-using-message-template/
     */
    interface SendTemplateMessageRequest extends SendMessageRequest {
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
        template_content: MergeVar[];
    }

    /**
     * HTTP Status 200
     * An array of objects for each recipient containing the key "email" with the email address,
     * and details of the message status for that recipient
     */
    type SendMessageResponse = Array<{
        /**
         * The email address of the recipient
         */
        email: string;

        /**
         * The sending status of the recipient Possible values: "sent", "queued", "scheduled", "rejected", or "invalid".
         */
        status: SendingStatus;

        /**
         * The reason for the rejection if the recipient status is "rejected"
         * Possible values: "hard-bounce", "soft-bounce", "spam", "unsub", "custom", "invalid-sender", "invalid", "test-mode-limit", "unsigned", or "rule".
         */
        reject_reason?: SendRejectReason;

        /**
         * The message's unique id
         */
        _id: string;
    }>;

    type SendTemplateMessageResponse = SendMessageResponse;

    class Messages {
        send(body: SendMessageRequest): Promise<SendMessageResponse | Error>;
        sendTemplate(body: SendTemplateMessageRequest): Promise<SendTemplateMessageResponse | Error>;
    }

    class ApiClient {
        messages: Messages;
        setDefaultOutputFormat(format: OutputFormat): void;
    }
}

declare function Mailchimp(apiKey: string): Mailchimp.ApiClient;
export = Mailchimp;
