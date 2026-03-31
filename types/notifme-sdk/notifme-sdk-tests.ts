import NotifmeSdk, { NotificationRequest, NotificationStatusType, NotifmeSdkOptions } from "notifme-sdk";

const options: NotifmeSdkOptions = {
    useNotificationCatcher: true,
    channels: {
        sms: {
            multiProviderStrategy: "fallback",
            providers: [
                { type: "twilio", accountSid: "ACxxx", authToken: "token" },
                { type: "nexmo", apiKey: "key", apiSecret: "secret" },
            ],
        },
        email: {
            multiProviderStrategy: "roundrobin",
            providers: [
                { type: "smtp", domain: "example.com" },
                { type: "mailgun", apiKey: "mg-key" },
            ],
        },
    },
};

const notifmeSdk = new NotifmeSdk(options);

const notification: NotificationRequest = {
    sms: { from: "+15000000000", to: "+15000000001", text: "Hello, SMS!" },
    email: { from: "me@example.com", to: "you@example.com", subject: "Hello", text: "Email body" },
    push: { title: "Push Title", body: "Push Body", token: "push-token" },
    webpush: { title: "Webpush Title", body: "Webpush Body", endpoint: "webpush-endpoint" },
    slack: { text: "Slack message", channel: "#general" },
    voice: { from: "+15000000000", to: "+15000000001", text: "Voice message" },
};

// Scenario: Only SMS
// $ExpectType Promise<NotificationStatusType>
const smsResult = notifmeSdk.send({ sms: { from: "+1234567890", to: "+0987654321", text: "Single SMS" } });

// Scenario: Only Email
// $ExpectType Promise<NotificationStatusType>
const emailResult = notifmeSdk.send({ email: { from: "a@b.com", to: "c@d.com", subject: "Subject", text: "Body" } });

// Scenario: Only Push
// $ExpectType Promise<NotificationStatusType>
const pushResult = notifmeSdk.send({ push: { title: "Push Title", body: "Push Body", token: "push-token" } });

// Scenario: Only Webpush
// $ExpectType Promise<NotificationStatusType>
const webpushResult = notifmeSdk.send({
    webpush: { title: "Webpush Title", body: "Webpush Body", endpoint: "webpush-endpoint" },
});

// Scenario: Only Slack
// $ExpectType Promise<NotificationStatusType>
const slackResult = notifmeSdk.send({ slack: { text: "Slack only" } });

// Scenario: Only Voice
// $ExpectType Promise<NotificationStatusType>
const voiceResult = notifmeSdk.send({ voice: { from: "+1234567890", to: "+0987654321", text: "Voice call" } });

// Scenario: SMS and Email together
// $ExpectType Promise<NotificationStatusType>
const smsEmailResult = notifmeSdk.send({
    sms: { from: "+1234567890", to: "+0987654321", text: "SMS+Email" },
    email: { from: "a@b.com", to: "c@d.com", subject: "Subject", text: "Body" },
});

// Scenario: Custom provider config
const customOptions: NotifmeSdkOptions = {
    channels: {
        sms: {
            providers: [
                { type: "custom", customField: "customValue" },
            ],
        },
    },
};
const customSdk = new NotifmeSdk(customOptions);
// $ExpectType Promise<NotificationStatusType>
const customResult = customSdk.send({ sms: { from: "+1", to: "+2", text: "Custom provider" } });

// Scenario: Notification catcher only
const catcherSdk = new NotifmeSdk({ useNotificationCatcher: true });
// $ExpectType Promise<NotificationStatusType>
const catcherResult = catcherSdk.send({ sms: { from: "+1", to: "+2", text: "Catcher only" } });

// Logger helpers
// $ExpectType void
const muteRes = notifmeSdk.logger.mute();
// $ExpectType void
const configureRes = notifmeSdk.logger.configure([]);

// Negative tests - ensure type errors when using wrong shapes
// @ts-expect-error -- 'from' must be a string
notifmeSdk.send({ sms: { from: 123, to: "+1", text: "bad" } });
