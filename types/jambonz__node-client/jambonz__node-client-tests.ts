import jambonz = require("@jambonz/node-client");

// Test main client instantiation
const client = jambonz("account-sid", "api-key", { baseUrl: "https://api.jambonz.us" });

// $ExpectType Calls
client.calls;

// $ExpectType Messages
client.messages;

// $ExpectType Applications
client.applications;

// Test WebhookResponse
const response = new jambonz.WebhookResponse();

// $ExpectType WebhookResponse
response.say({ text: "Hello" }).gather({ input: ["speech"] }).hangup();

// $ExpectType object[]
response.toJSON();

// Test type imports work
const callOpts: jambonz.CreateCallOptions = {
    from: "+15551234567",
    to: { type: "phone", number: "+15559876543" },
    call_hook: { url: "https://example.com/webhook" },
};

const sayPayload: jambonz.Say = {
    text: "Hello world",
};

const recognizer: jambonz.Recognizer = {
    vendor: "google",
    language: "en-US",
};

// @ts-expect-error - missing required 'from' field
const badCallOpts: jambonz.CreateCallOptions = {
    to: { type: "phone", number: "+15559876543" },
};

// @ts-expect-error - missing required 'name' field
const badConference: jambonz.Conference = {
    id: "123",
};

// Test static method
const middleware = jambonz.WebhookResponse.verifyJambonzSignature("secret");

// Test Calls class methods
async function testCalls() {
    // $ExpectType Promise<string>
    client.calls.create({
        from: "+15551234567",
        to: { type: "phone", number: "+15559876543" },
        call_hook: { url: "https://example.com/webhook" },
    });

    // $ExpectType Promise<void>
    client.calls.update("call-sid", { call_status: "completed" });

    // $ExpectType Promise<ApiCall[]>
    client.calls.list();

    // $ExpectType Promise<ApiCall>
    client.calls.retrieve("call-sid");

    // $ExpectType Promise<void>
    client.calls.delete("call-sid");
}

// Test Messages class methods
async function testMessages() {
    // $ExpectType Promise<string>
    client.messages.create({
        from: "+15551234567",
        to: "+15559876543",
        text: "Hello!",
    });
}

// Test Applications class methods
async function testApplications() {
    // $ExpectType Promise<string>
    client.applications.create({
        name: "Test App",
        account_sid: "account-sid",
        call_hook: { url: "https://example.com/call" },
        call_status_hook: { url: "https://example.com/status" },
    });

    // $ExpectType Promise<void>
    client.applications.update("app-sid", {
        name: "Updated App",
        account_sid: "account-sid",
    });

    // $ExpectType Promise<ApiApplication[]>
    client.applications.list();

    // $ExpectType Promise<ApiApplication>
    client.applications.retrieve("app-sid");

    // $ExpectType Promise<void>
    client.applications.delete("app-sid");
}

// Test WebhookResponse verb chaining
const verbChainResponse = new jambonz.WebhookResponse()
    .answer()
    .config({ synthesizer: { vendor: "google", language: "en-US", voice: "en-US-Wavenet-A" } })
    .say({ text: "Welcome to the call" })
    .gather({
        input: ["speech", "dtmf"],
        actionHook: "https://example.com/gather",
        recognizer: { vendor: "google", language: "en-US" },
    })
    .pause({ length: 2 })
    .play({ url: "https://example.com/audio.mp3" })
    .hangup();

// Test dial verb with targets
const dialResponse = new jambonz.WebhookResponse().dial({
    target: [
        { type: "phone", number: "+15559876543" },
        { type: "sip", sipUri: "sip:user@example.com" },
        { type: "user", name: "john" },
    ],
    timeout: 30,
    timeLimit: 3600,
    actionHook: "https://example.com/dial-action",
});

// Test conference verb
const conferenceResponse = new jambonz.WebhookResponse().conference({
    name: "my-conference",
    beep: true,
    startConferenceOnEnter: true,
    endConferenceOnExit: false,
    maxParticipants: 10,
});

// Test listen verb
const listenResponse = new jambonz.WebhookResponse().listen({
    url: "wss://example.com/audio-stream",
    mixType: "stereo",
    sampleRate: 16000,
});

// Test stream verb
const streamResponse = new jambonz.WebhookResponse().stream({
    url: "wss://example.com/stream",
    bidirectionalAudio: { enabled: true, streaming: true },
});

// Test llm verb
const llmResponse = new jambonz.WebhookResponse().llm({
    vendor: "openai",
    model: "gpt-4",
    llmOptions: { temperature: 0.7 },
    actionHook: "https://example.com/llm-action",
});

// Test pipeline verb
const pipelineResponse = new jambonz.WebhookResponse().pipeline({
    stt: { vendor: "google", language: "en-US" },
    tts: { vendor: "google", language: "en-US", voice: "en-US-Wavenet-A" },
    llm: { vendor: "openai", llmOptions: { model: "gpt-4" } },
});

// Test dialogflow verb
const dialogflowResponse = new jambonz.WebhookResponse().dialogflow({
    credentials: { client_email: "test@example.com", private_key: "key" },
    project: "my-project",
    lang: "en-US",
});

// Test lex verb
const lexResponse = new jambonz.WebhookResponse().lex({
    botId: "bot-123",
    botAlias: "prod",
    credentials: { accessKeyId: "key", secretAccessKey: "secret" },
    region: "us-east-1",
});

// Test message verb
const messageResponse = new jambonz.WebhookResponse().message({
    from: "+15551234567",
    to: "+15559876543",
    text: "Hello from the call!",
});

// Test enqueue/dequeue verbs
const enqueueResponse = new jambonz.WebhookResponse().enqueue({
    name: "support-queue",
    waitHook: "https://example.com/wait",
});

const dequeueResponse = new jambonz.WebhookResponse().dequeue({
    name: "support-queue",
    actionHook: "https://example.com/dequeue-action",
});

// Test sip verbs
const sipDeclineResponse = new jambonz.WebhookResponse().sip_decline({
    status: 486,
    reason: "Busy Here",
});

const sipReferResponse = new jambonz.WebhookResponse().sip_refer({
    referTo: "sip:user@example.com",
});

const sipRequestResponse = new jambonz.WebhookResponse().sip_request({
    method: "INFO",
    body: "Signal=5",
});

// Test dub verb
const dubResponse = new jambonz.WebhookResponse().dub({
    action: "addTrack",
    track: "background-music",
    play: "https://example.com/music.mp3",
    loop: true,
});

// Test dtmf verb
const dtmfResponse = new jambonz.WebhookResponse().dtmf({
    dtmf: "1234#",
    duration: 250,
});

// Test tag verb
const tagResponse = new jambonz.WebhookResponse().tag({
    data: { customerId: "12345", priority: "high" },
});

// Test transcribe verb
const transcribeResponse = new jambonz.WebhookResponse().transcribe({
    transcriptionHook: "https://example.com/transcribe",
    recognizer: { vendor: "google", language: "en-US" },
});

// Test redirect verb
const redirectResponse = new jambonz.WebhookResponse().redirect({
    actionHook: "https://example.com/new-handler",
});

// Test alert verb
const alertResponse = new jambonz.WebhookResponse().alert({
    message: "Important notification",
});

// Test leave verb
const leaveResponse = new jambonz.WebhookResponse().leave();

// Test rasa verb
const rasaResponse = new jambonz.WebhookResponse().rasa({
    url: "https://rasa.example.com/webhooks/rest/webhook",
    prompt: "Hello",
});

// Test rest_dial verb
const restDialResponse = new jambonz.WebhookResponse().rest_dial({
    from: "+15551234567",
    to: { type: "phone", number: "+15559876543" },
    call_hook: "https://example.com/call",
});

// Test various type interfaces
const synthesizer: jambonz.Synthesizer = {
    vendor: "google",
    language: "en-US",
    voice: "en-US-Wavenet-A",
    engine: "neural",
};

const target: jambonz.Target = {
    type: "phone",
    number: "+15559876543",
    confirmHook: "https://example.com/confirm",
};

const webhook: jambonz.Webhook = {
    url: "https://example.com/webhook",
    method: "post",
    username: "user",
    password: "pass",
};

const vad: jambonz.Vad = {
    enable: true,
    voiceMs: 250,
    silenceMs: 500,
    vendor: "silero",
    threshold: 0.5,
};

const bargeIn: jambonz.BargeIn = {
    enable: true,
    sticky: true,
    input: ["speech", "dtmf"],
    minBargeinWordCount: 2,
};

const deepgramOptions: jambonz.DeepgramOptions = {
    model: "nova-2",
    punctuate: true,
    smartFormatting: true,
    diarize: true,
};

const awsOptions: jambonz.AwsOptions = {
    region: "us-east-1",
    vocabularyName: "custom-vocab",
};

const googleOptions: jambonz.GoogleOptions = {
    serviceVersion: "v2",
    enableVoiceActivityEvents: true,
};

// Test API types
const apiCall: jambonz.ApiCall = {
    account_sid: "account-123",
    call_id: "call-id-123",
    call_sid: "call-sid-123",
    call_status: "in-progress",
    direction: "outbound",
    from: "+15551234567",
    to: "+15559876543",
    service_url: "https://example.com",
    sip_status: 200,
};

const apiApplication: jambonz.ApiApplication = {
    name: "My App",
    account_sid: "account-123",
    call_hook: { url: "https://example.com/call" },
    speech_synthesis_vendor: "google",
    speech_recognizer_vendor: "google",
};

const account: jambonz.Account = {
    account_sid: "account-123",
    name: "My Account",
    service_provider_sid: "sp-123",
};

const voipCarrier: jambonz.VoipCarrier = {
    service_provider_sid: "sp-123",
    name: "My Carrier",
    trunk_type: "static_ip",
};

// Test UpdateCallOptions
const updateOpts: jambonz.UpdateCallOptions = {
    call_status: "completed",
    mute_status: "mute",
    whisper: { verb: "say" },
};

// @ts-expect-error - missing required 'name' field for CreateApplicationOptions
const badAppOpts: jambonz.CreateApplicationOptions = {
    account_sid: "account-123",
    call_hook: { url: "https://example.com/call" },
    call_status_hook: { url: "https://example.com/status" },
};

// @ts-expect-error - missing required 'to' and 'from' fields
const badMessageOpts: jambonz.CreateMessageOptions = {
    text: "Hello",
};

// Test verifyJambonzSignature with array of secrets
const multiSecretMiddleware = jambonz.WebhookResponse.verifyJambonzSignature(["secret1", "secret2"]);
