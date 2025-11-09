// NOTE: package metadata (name/version/owners) should be placed in package.json per DT guidelines.
// This file should only contain the type declarations.
export type MultiProviderStrategy = "fallback" | "roundrobin" | "no-fallback" | string;

export interface SmsProviderConfig {
    type:
        | "logger"
        | "twilio"
        | "nexmo"
        | "plivo"
        | "ovh"
        | "callr"
        | "clickatell"
        | "infobip"
        | "seven"
        | "46elks"
        | "custom"
        | string;
    // Provider-specific options
    accountSid?: string;
    authToken?: string;
    apiKey?: string;
    apiSecret?: string;
    [key: string]: any;
}

export interface EmailProviderConfig {
    type: "logger" | "smtp" | "mailgun" | "mandrill" | "sendgrid" | "ses" | "sparkpost" | "custom" | string;
    // Provider-specific options
    apiKey?: string;
    domain?: string;
    [key: string]: any;
}

export interface PushProviderConfig {
    type: "logger" | "apn" | "fcm" | "wns" | "adm" | "custom" | string;
    [key: string]: any;
}

export interface WebpushProviderConfig {
    type: "logger" | "gcm" | "custom" | string;
    [key: string]: any;
}

export interface SlackProviderConfig {
    type: "logger" | "slack" | "custom" | string;
    webhookUrl?: string;
    [key: string]: any;
}

export interface VoiceProviderConfig {
    type: "logger" | "twilio" | "custom" | string;
    [key: string]: any;
}

export interface ChannelConfig<TProviderConfig> {
    multiProviderStrategy?: MultiProviderStrategy;
    providers: TProviderConfig[];
}

export interface NotifmeSdkOptions {
    channels?: {
        sms?: ChannelConfig<SmsProviderConfig>;
        email?: ChannelConfig<EmailProviderConfig>;
        push?: ChannelConfig<PushProviderConfig>;
        webpush?: ChannelConfig<WebpushProviderConfig>;
        slack?: ChannelConfig<SlackProviderConfig>;
        voice?: ChannelConfig<VoiceProviderConfig>;
        // Add more channels as needed
    };
    useNotificationCatcher?: boolean;
    [key: string]: any;
}

export interface SmsNotification {
    from: string;
    to: string;
    text: string;
}

export interface EmailNotification {
    from: string;
    to: string;
    subject: string;
    html?: string;
    text?: string;
    // Add more fields as needed
}

export interface PushNotification {
    title: string;
    body: string;
    token: string;
    // Add more fields as needed
}

export interface WebpushNotification {
    title: string;
    body: string;
    endpoint: string;
    // Add more fields as needed
}

export interface SlackNotification {
    text: string;
    channel?: string;
    // Add more fields as needed
}

export interface VoiceNotification {
    from: string;
    to: string;
    text: string;
    // Add more fields as needed
}

export interface NotificationRequest {
    sms?: SmsNotification;
    email?: EmailNotification;
    push?: PushNotification;
    webpush?: WebpushNotification;
    slack?: SlackNotification;
    voice?: VoiceNotification;
    // Add more channels as needed
}

export interface NotificationStatusType {
    status: "success" | "error";
    channels?: {
        [channel: string]: {
            id: string;
            providerId?: string;
        };
    };
    errors?: {
        [channel: string]: Error;
    };
}

export default class NotifmeSdk {
    constructor(options?: NotifmeSdkOptions);
    send(notification: NotificationRequest): Promise<NotificationStatusType>;
    logger: {
        mute(): void;
        configure(transports: any[]): void;
    };
}
