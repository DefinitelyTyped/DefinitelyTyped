import AfricasTalking = require("africastalking");

// =========================================================================
// Client construction
// =========================================================================

const client = AfricasTalking({
    apiKey: "apiKey",
    username: "username",
});

const clientXml = AfricasTalking({
    apiKey: "apiKey",
    username: "username",
    format: "xml",
});

const clientHandle: AfricasTalking.AfricasTalking = client;

// =========================================================================
// SMS  (sms.d.ts)
// =========================================================================

async function smsSurface() {
    const sms: AfricasTalking.SMS = client.SMS;

    const single: AfricasTalking.SMSResponse = await sms.send({
        to: "+254700000000",
        message: "hello",
    });
    const message: string = single.SMSMessageData.Message;
    const recipients: AfricasTalking.SMSRecipient[] = single.SMSMessageData.Recipients;
    const status: AfricasTalking.SMSRecipientStatus = recipients[0].status;
    const messageId: string = recipients[0].messageId;
    void message;
    void status;
    void messageId;

    await sms.send({
        to: ["+254700000000", "+254700000001"],
        message: "hi",
        from: "AFRICASTKNG",
        senderId: "AFRICASTKNG",
        enqueue: true,
    });

    const batch: AfricasTalking.SMSResponse[] = await sms.send([
        { to: "+254700000000", message: "hi" },
        { to: "+254700000001", message: "hi" },
    ]);
    void batch;

    const bulk: AfricasTalking.SMSResponse = await sms.sendBulk({
        to: "+254700000000",
        message: "bulk",
    });
    const bulkArray: AfricasTalking.SMSResponse[] = await sms.sendBulk([
        { to: "+254700000000", message: "bulk" },
    ]);
    void bulk;
    void bulkArray;

    const premium: AfricasTalking.SMSResponse = await sms.sendPremium({
        to: "+254700000000",
        message: "premium",
        keyword: "premium",
        linkId: "linkId",
        retryDurationInHours: 1,
    });
    void premium;

    const inbox: AfricasTalking.SMSFetchMessagesResponse = await sms.fetchMessages({
        lastReceivedId: 0,
    });
    const inboxMessages: AfricasTalking.SMSInboundMessage[] = inbox.SMSMessageData.Messages;
    void inboxMessages;

    const createSub: AfricasTalking.SMSSubscriptionResponse = await sms.createSubscription({
        shortCode: "12345",
        keyword: "PREMIUM",
        phoneNumber: "+254700000000",
    });
    void createSub;

    const fetchSub: AfricasTalking.SMSFetchSubscriptionResponse = await sms.fetchSubscription({
        shortCode: "12345",
        keyword: "PREMIUM",
        lastReceivedId: 0,
    });
    const subscribers: AfricasTalking.SMSSubscriber[] = fetchSub.responses;
    void subscribers;

    const deleteSub: AfricasTalking.SMSDeleteSubscriptionResponse = await sms.deleteSubscription({
        shortCode: "12345",
        keyword: "PREMIUM",
        phoneNumber: "+254700000000",
    });
    void deleteSub;
}

// =========================================================================
// Token  (token.d.ts)
// =========================================================================

async function tokenSurface() {
    const token: AfricasTalking.TOKEN = client.TOKEN;
    const auth: AfricasTalking.AuthTokenResponse = await token.generateAuthToken();
    const t: string = auth.token;
    const lifetime: number = auth.lifetimeInSeconds;
    void t;
    void lifetime;
}

// =========================================================================
// Voice  (voice.d.ts + actionbuilder.d.ts)
// =========================================================================

async function voiceSurface() {
    const voice: AfricasTalking.VOICE = client.VOICE;

    const call: AfricasTalking.VoiceCallResponse = await voice.call({
        callFrom: "+254700000000",
        callTo: ["+254700000001"],
        clientRequestId: "req_1",
    });
    const callEntries: AfricasTalking.VoiceCallEntry[] = call.entries;
    void callEntries;

    const queued: AfricasTalking.VoiceQueuedCallsResponse = await voice.getNumQueuedCalls({
        phoneNumbers: ["+254700000000"],
    });
    void queued;

    const upload: AfricasTalking.VoiceUploadMediaResponse = await voice.uploadMediaFile({
        url: "https://example.com/audio.wav",
        phoneNumber: "+254700000000",
    });
    void upload;

    const builder: AfricasTalking.ActionBuilder = new voice.ActionBuilder();
    const xml: string = builder
        .say("Welcome", { voice: "woman", playBeep: true })
        .play("https://example.com/jingle.mp3")
        .getDigits(
            { say: { text: "Enter your pin", attributes: { voice: "woman" } } },
            { finishOnKey: "#", numDigits: 4, callbackUrl: "https://example.com/cb" },
        )
        .dial("+254700000001", { record: true, sequential: true })
        .record(
            { play: { url: "https://example.com/beep.mp3" } },
            { finishOnKey: "#", maxLength: 30 },
        )
        .enqueue({ name: "support" })
        .dequeue("+254700000001", { name: "support" })
        .redirect("https://example.com/next")
        .conference()
        .reject()
        .build();
    void xml;
}

// =========================================================================
// Airtime  (airtime.d.ts)
// =========================================================================

async function airtimeSurface() {
    const airtime: AfricasTalking.AIRTIME = client.AIRTIME;

    const sendResult: AfricasTalking.AirtimeSendResponse = await airtime.send({
        idempotencyKey: "abc",
        maxNumRetry: 3,
        recipients: [
            { phoneNumber: "+254700000000", currencyCode: "KES", amount: 50 },
        ],
    });
    const responses: AfricasTalking.AirtimeResponseEntry[] = sendResult.responses;
    void responses;

    const status: AfricasTalking.AirtimeTransactionStatusResponse = await airtime.findTransactionStatus(
        "tx_id",
    );
    const data: AfricasTalking.AirtimeTransactionData | undefined = status.data;
    void data;
}

// =========================================================================
// Application  (application.d.ts)
// =========================================================================

async function applicationSurface() {
    const app: AfricasTalking.APPLICATION = client.APPLICATION;
    const data: AfricasTalking.ApplicationDataResponse = await app.fetchApplicationData();
    const balance: string = data.UserData.balance;
    void balance;

    const accountSurface: AfricasTalking.APPLICATION = client.ACCOUNT;
    const accountData: AfricasTalking.ApplicationDataResponse = await accountSurface.fetchAccount();
    void accountData;
}

// =========================================================================
// Insights  (insights.d.ts)
// =========================================================================

async function insightsSurface() {
    const insights: AfricasTalking.INSIGHTS = client.INSIGHTS;
    const oneNumber: AfricasTalking.InsightsSimSwapResponse = await insights.checkSimSwapState(
        "+254700000000",
    );
    const manyNumbers: AfricasTalking.InsightsSimSwapResponse = await insights.checkSimSwapState([
        "+254700000000",
        "+254700000001",
    ]);
    const entries: AfricasTalking.InsightsSimSwapEntry[] = oneNumber.responses;
    void manyNumbers;
    void entries;
}

// =========================================================================
// Mobile data  (mobileData.d.ts)
// =========================================================================

async function mobileDataSurface() {
    const md: AfricasTalking.MOBILE_DATA = client.MOBILE_DATA;
    await md.send({
        productName: "DataBundle",
        idempotencyKey: "abc",
        recipients: [
            {
                phoneNumber: "+254700000000",
                quantity: 1,
                unit: "GB",
                validity: "Month",
                metadata: { userId: "user_1" },
            },
        ],
    });
    await md.findTransaction({ transactionId: "tx_id" });
    await md.fetchWalletBalance();
}

// =========================================================================
// WhatsApp  (whatsapp.d.ts)
// =========================================================================

async function whatsappSurface() {
    const wa: AfricasTalking.WHATSAPP = client.WHATSAPP;

    await wa.sendMessage({
        waNumber: "wa_number",
        phoneNumber: "+254700000000",
        body: { message: "hello" },
    });

    await wa.sendMessage({
        waNumber: "wa_number",
        phoneNumber: "+254700000000",
        body: {
            templateId: "welcome_v1",
            headerValue: "Welcome",
            bodyValues: ["Alice"],
        },
    });

    await wa.sendMessage({
        waNumber: "wa_number",
        phoneNumber: "+254700000000",
        body: {
            mediaType: "Image",
            url: "https://example.com/img.png",
            caption: "see attached",
        },
    });

    await wa.sendMessage({
        waNumber: "wa_number",
        phoneNumber: "+254700000000",
        body: {
            action: {
                button: "Pick one",
                sections: [
                    {
                        title: "Options",
                        rows: [{ id: "1", title: "First", description: "..." }],
                    },
                ],
            },
            body: { text: "Select an option" },
        },
    });

    await wa.sendMessage({
        waNumber: "wa_number",
        phoneNumber: "+254700000000",
        body: {
            action: {
                buttons: [
                    { id: "yes", title: "Yes" },
                    { id: "no", title: "No" },
                ],
            },
            body: { text: "Confirm?" },
        },
    });

    await wa.createTemplate({
        waNumber: "wa_number",
        name: "promo_template",
        language: "en",
        category: "MARKETING",
        components: {
            body: { type: "BODY", text: "Hi {{1}}" },
        },
    });
}

// =========================================================================
// USSD  (ussd.d.ts)
// =========================================================================

function ussdSurface() {
    const ussd: AfricasTalking.USSDMiddlewareFactory = client.USSD;

    const handler: AfricasTalking.USSDHandlerFn = (payload, respond) => {
        const session: string = payload.sessionId;
        const phone: string = payload.phoneNumber;
        const text: string = payload.text;
        const code: string = payload.serviceCode;
        void session;
        void phone;
        void code;

        if (text === "") {
            respond({ response: "Welcome", endSession: false });
        } else {
            respond({ response: "Goodbye", endSession: true });
        }
    };

    const middleware: AfricasTalking.USSDMiddleware[] = ussd(handler);
    void middleware;
}

void clientHandle;
void clientXml;
void smsSurface;
void tokenSurface;
void voiceSurface;
void airtimeSurface;
void applicationSurface;
void insightsSurface;
void mobileDataSurface;
void whatsappSurface;
void ussdSurface;
