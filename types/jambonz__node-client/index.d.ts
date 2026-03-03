// ============================================
// Verb Payload Types (from specs.json)
// ============================================

interface ActionHookDelayAction {
    enabled?: boolean;
    noResponseTimeout?: number;
    noResponseGiveUpTimeout?: number;
    retries?: number;
    actions?: unknown[];
    giveUpActions?: unknown[];
}

interface Amd {
    actionHook: Record<string, unknown> | string;
    thresholdWordCount?: number;
    digitCount?: number;
    timers?: AmdTimers;
    recognizer?: Recognizer;
}

interface AmdTimers {
    noSpeechTimeoutMs?: number;
    decisionTimeoutMs?: number;
    toneTimeoutMs?: number;
    greetingCompletionTimeoutMs?: number;
}

interface AssemblyAiOptions {
    apiKey?: string;
    serviceVersion?: "v2" | "v3";
    formatTurns?: boolean;
    endOfTurnConfidenceThreshold?: number;
    minEndOfTurnSilenceWhenConfident?: number;
    maxTurnSilence?: number;
}

interface Auth {
    username: string;
    password: string;
}

interface AwsOptions {
    accessKey?: string;
    secretKey?: string;
    securityToken?: string;
    region?: string;
    vocabularyName?: string;
    vocabularyFilterName?: string;
    vocabularyFilterMethod?: "remove" | "mask" | "tag";
    languageModelName?: string;
    piiEntityTypes?: unknown[];
    piiIdentifyEntities?: boolean;
}

interface AzureOptions {
    speechSegmentationSilenceTimeoutMs?: number;
    postProcessing?: string;
    audioLogging?: boolean;
    languageIdMode?: "AtStart" | "Continuous";
    speechRecognitionMode?: "CONVERSATION" | "DICTATION" | "INTERACTIVE";
}

interface BargeIn {
    enable: boolean;
    sticky?: boolean;
    actionHook?: Record<string, unknown> | string;
    partialResultHook?: Record<string, unknown> | string;
    input?: unknown[];
    finishOnKey?: string;
    numDigits?: number;
    minDigits?: number;
    maxDigits?: number;
    interDigitTimeout?: number;
    dtmfBargein?: boolean;
    minBargeinWordCount?: number;
}

interface BidirectionalAudio {
    enabled?: boolean;
    streaming?: boolean;
    sampleRate?: number;
}

interface CobaltOptions {
    serverUri?: string;
    enableConfusionNetwork?: boolean;
    metadata?: string;
    compiledContextData?: string;
    wordTimeOffsets?: boolean;
    contextToken?: string;
}

interface CustomOptions {
    authToken?: string;
    uri?: string;
    sampleRate?: number;
    options?: Record<string, unknown>;
}

interface DeepgramOptions {
    deepgramSttUri?: string;
    deepgramSttUseTls?: boolean;
    apiKey?: string;
    tier?: string;
    model?: string;
    customModel?: string;
    version?: string;
    punctuate?: boolean;
    smartFormatting?: boolean;
    noDelay?: boolean;
    profanityFilter?: boolean;
    redact?: "pci" | "numbers" | "true" | "ssn";
    diarize?: boolean;
    diarizeVersion?: string;
    ner?: boolean;
    multichannel?: boolean;
    alternatives?: number;
    numerals?: boolean;
    search?: unknown[];
    replace?: unknown[];
    keywords?: unknown[];
    keyterms?: unknown[];
    endpointing?: boolean | number;
    utteranceEndMs?: number;
    shortUtterance?: boolean;
    vadTurnoff?: number;
    tag?: string;
    fillerWords?: boolean;
    eotThreshold?: number;
    eotTimeoutMs?: number;
    mipOptOut?: boolean;
    entityPrompt?: string;
    eagerEotThreshold?: number;
}

interface DialFrom {
    user?: string;
    host?: string;
}

interface ElevenlabsOptions {
    includeTimestamps?: boolean;
    commitStrategy?: "manual" | "vad";
    vadSilenceThresholdSecs?: number;
    vadThreshold?: number;
    minSpeechDurationMs?: number;
    minSilenceDurationMs?: number;
    enableLogging?: boolean;
}

interface FillerNoise {
    enable: boolean;
    url?: string;
    startDelaySecs?: number;
}

interface Formatting {
    scheme: string;
    options: Record<string, unknown>;
}

interface GoogleOptions {
    serviceVersion?: "v1" | "v2";
    recognizerId?: string;
    speechStartTimeoutMs?: number;
    speechEndTimeoutMs?: number;
    enableVoiceActivityEvents?: boolean;
    transcriptNormalization?: unknown[];
}

interface HoundifyOptions {
    requestInfo?: Record<string, unknown>;
    sampleRate?: number;
    latitude?: number;
    longitude?: number;
    city?: string;
    state?: string;
    country?: string;
    timeZone?: string;
    domain?: string;
    audioEndpoint?: string;
    maxSilenceSeconds?: number;
    maxSilenceAfterFullQuerySeconds?: number;
    maxSilenceAfterPartialQuerySeconds?: number;
    vadSensitivity?: number;
    vadTimeout?: number;
    vadMode?: string;
    vadVoiceMs?: number;
    vadSilenceMs?: number;
    vadDebug?: boolean;
    audioFormat?: string;
    enableNoiseReduction?: boolean;
    enableProfanityFilter?: boolean;
    enablePunctuation?: boolean;
    enableCapitalization?: boolean;
    confidenceThreshold?: number;
    enableDisfluencyFilter?: boolean;
    maxResults?: number;
    enableWordTimestamps?: boolean;
    maxAlternatives?: number;
    partialTranscriptInterval?: number;
    sessionTimeout?: number;
    connectionTimeout?: number;
    customVocabulary?: unknown[];
    languageModel?: string;
}

interface IbmOptions {
    sttApiKey?: string;
    sttRegion?: string;
    ttsApiKey?: string;
    ttsRegion?: string;
    instanceId?: string;
    model?: string;
    languageCustomizationId?: string;
    acousticCustomizationId?: string;
    baseModelVersion?: string;
    watsonMetadata?: string;
    watsonLearningOptOut?: boolean;
}

interface LexIntent {
    name: string;
    slots?: Record<string, unknown>;
}

interface ListenOptions {
    enable: boolean;
    url?: string;
    sampleRate?: number;
    wsAuth?: Auth;
    mixType?: "mono" | "stereo" | "mixed";
    metadata?: Record<string, unknown>;
    maxLength?: number;
    passDtmf?: boolean;
    playBeep?: boolean;
    disableBidirectionalAudio?: boolean;
    bidirectionalAudio?: BidirectionalAudio;
    timeout?: number;
}

interface McpServer {
    url: string;
    auth?: Record<string, unknown>;
    roots?: unknown[];
}

interface NuanceOptions {
    clientId?: string;
    secret?: string;
    kryptonEndpoint?: string;
    topic?: string;
    utteranceDetectionMode?: "single" | "multiple" | "disabled";
    punctuation?: boolean;
    profanityFilter?: boolean;
    includeTokenization?: boolean;
    discardSpeakerAdaptation?: boolean;
    suppressCallRecording?: boolean;
    maskLoadFailures?: boolean;
    suppressInitialCapitalization?: boolean;
    allowZeroBaseLmWeight?: boolean;
    filterWakeupWord?: boolean;
    resultType?: "final" | "partial" | "immutable_partial";
    noInputTimeoutMs?: number;
    recognitionTimeoutMs?: number;
    utteranceEndSilenceMs?: number;
    maxHypotheses?: number;
    speechDomain?: string;
    formatting?: Formatting;
    clientData?: Record<string, unknown>;
    userId?: string;
    speechDetectionSensitivity?: number;
    resources?: Resource[];
}

interface NvidiaOptions {
    rivaUri?: string;
    maxAlternatives?: number;
    profanityFilter?: boolean;
    punctuation?: boolean;
    wordTimeOffsets?: boolean;
    verbatimTranscripts?: boolean;
    customConfiguration?: Record<string, unknown>;
}

interface OpenaiOptions {
    apiKey?: string;
    model?: string;
    prompt?: string;
    promptTemplates?: PromptTemplates;
    language?: string;
    input_audio_noise_reduction?: "near_field" | "far_field";
    turn_detection?: TurnDetection;
}

interface PromptTemplates {
    hintsTemplate?: string;
    conversationHistoryTemplate?: string;
}

interface QueryInput {
    text?: string;
    intent?: string;
    event?: string;
    dtmf?: string;
}

interface Recognizer {
    vendor: string;
    label?: string;
    language?: string;
    fallbackVendor?: string;
    fallbackLabel?: string;
    fallbackLanguage?: string;
    vad?: Vad;
    hints?: unknown[];
    hintsBoost?: number;
    altLanguages?: unknown[];
    profanityFilter?: boolean;
    interim?: boolean;
    singleUtterance?: boolean;
    dualChannel?: boolean;
    separateRecognitionPerChannel?: boolean;
    punctuation?: boolean;
    enhancedModel?: boolean;
    words?: boolean;
    diarization?: boolean;
    diarizationMinSpeakers?: number;
    diarizationMaxSpeakers?: number;
    interactionType?:
        | "unspecified"
        | "discussion"
        | "presentation"
        | "phone_call"
        | "voicemail"
        | "voice_search"
        | "voice_command"
        | "dictation";
    naicsCode?: number;
    identifyChannels?: boolean;
    vocabularyName?: string;
    vocabularyFilterName?: string;
    filterMethod?: "remove" | "mask" | "tag";
    model?: string;
    outputFormat?: "simple" | "detailed";
    profanityOption?: "masked" | "removed" | "raw";
    requestSnr?: boolean;
    initialSpeechTimeoutMs?: number;
    azureServiceEndpoint?: string;
    azureSttEndpointId?: string;
    asrDtmfTerminationDigit?: string;
    asrTimeout?: number;
    fastRecognitionTimeout?: number;
    minConfidence?: number;
    nuanceOptions?: NuanceOptions;
    deepgramOptions?: DeepgramOptions;
    ibmOptions?: IbmOptions;
    nvidiaOptions?: NvidiaOptions;
    sonioxOptions?: SonioxOptions;
    cobaltOptions?: CobaltOptions;
    awsOptions?: AwsOptions;
    azureOptions?: AzureOptions;
    assemblyAiOptions?: AssemblyAiOptions;
    googleOptions?: GoogleOptions;
    customOptions?: CustomOptions;
    verbioOptions?: VerbioOptions;
    speechmaticsOptions?: SpeechmaticsOptions;
    openaiOptions?: OpenaiOptions;
    houndifyOptions?: HoundifyOptions;
    gladiaOptions?: Record<string, unknown>;
    elevenlabsOptions?: ElevenlabsOptions;
}

interface CallRecord {
    path: string;
}

interface RecordOptions {
    action: "startCallRecording" | "stopCallRecording" | "pauseCallRecording" | "resumeCallRecording";
    recordingID?: string;
    siprecServerURL?: string | unknown[];
    headers?: Record<string, unknown>;
}

interface Resource {
    externalReference?: ResourceReference;
    inlineWordset?: string;
    builtin?: string;
    inlineGrammar?: string;
    wakeupWord?: unknown[];
    weightName?: "defaultWeight" | "lowest" | "low" | "medium" | "high" | "highest";
    weightValue?: number;
    reuse?: "undefined_reuse" | "low_reuse" | "high_reuse";
}

interface ResourceReference {
    type?:
        | "undefined_resource_type"
        | "wordset"
        | "compiled_wordset"
        | "domain_lm"
        | "speaker_profile"
        | "grammar"
        | "settings";
    uri?: string;
    maxLoadFailures?: boolean;
    requestTimeoutMs?: number;
    headers?: Record<string, unknown>;
}

interface SmAudioEventsConfig {
    types?: "applause" | "music" | "laughter";
}

interface SmAudioFilteringConfig {
    volume_threshold: number;
}

interface SmPuctuationOverrides {
    permitted_marks?: unknown[];
    sensitivity?: number;
}

interface SmSpeakerDiarizationConfig {
    speaker_sensitivity?: number;
    max_speakers?: number;
}

interface SmTranscriptFilteringConfig {
    remove_disfluencies: boolean;
}

interface SmTranscriptionConfig {
    language?: string;
    domain?: string;
    additional_vocab?: unknown[];
    diarization?: string;
    speaker_diarization_config?: SmSpeakerDiarizationConfig;
    enable_partials?: boolean;
    max_delay?: number;
    max_delay_mode?: "fixed" | "flexible";
    output_locale?: string;
    punctuation_overrides?: SmPuctuationOverrides;
    operating_point?: string;
    enable_entities?: boolean;
    audio_filtering_config?: SmAudioFilteringConfig;
    transcript_filtering_config?: SmTranscriptFilteringConfig;
}

interface SmTranslationConfig {
    target_languages: unknown[];
    enable_partials?: boolean;
}

interface SonioxOptions {
    apiKey?: string;
    model?: string;
    endpointDetection?: boolean;
    profanityFilter?: boolean;
    speechContext?: string;
    clientRequestReference?: string;
    storage?: SonioxStorage;
}

interface SonioxStorage {
    id?: string;
    title?: string;
    disableStoreAudio?: boolean;
    disableStoreTranscript?: boolean;
    disableSearch?: boolean;
    metadata?: Record<string, unknown>;
}

interface SpeechmaticsOptions {
    transcription_config?: SmTranscriptionConfig;
    translation_config?: SmTranslationConfig;
    audio_events_config_config?: SmAudioEventsConfig;
}

interface Synthesizer {
    vendor: string;
    label?: string;
    language?: string;
    voice?: string | Record<string, unknown>;
    fallbackVendor?: string;
    fallbackLabel?: string;
    fallbackLanguage?: string;
    fallbackVoice?: string | Record<string, unknown>;
    engine?: "standard" | "neural" | "generative" | "long-form";
    gender?: "MALE" | "FEMALE" | "NEUTRAL";
    options?: Record<string, unknown>;
}

interface Target {
    type: "phone" | "sip" | "user" | "teams";
    confirmHook?: Record<string, unknown> | string;
    method?: "GET" | "POST";
    headers?: Record<string, unknown>;
    from?: DialFrom;
    name?: string;
    number?: string;
    sipUri?: string;
    auth?: Auth;
    vmail?: boolean;
    tenant?: string;
    trunk?: string;
    overrideTo?: string;
    proxy?: string;
}

interface TranscribeOptions {
    enable: boolean;
    transcriptionHook?: string;
    recognizer?: Recognizer;
}

interface TtsStream {
    enable: boolean;
    synthesizer?: Synthesizer;
}

interface TurnDetection {
    type: "none" | "server_vad" | "semantic_vad";
    eagerness?: "low" | "medium" | "high" | "auto";
    threshold?: number;
    prefix_padding_ms?: number;
    silence_duration_ms?: number;
}

interface TurnDetectionPipeline {
    vendor: "krisp";
    threshold?: number;
    eagerEotThreshold?: number;
}

interface Vad {
    enable?: boolean;
    voiceMs?: number;
    silenceMs?: number;
    strategy?: string;
    mode?: number;
    vendor?: "webrtc" | "silero";
    threshold?: number;
    speechPadMs?: number;
}

interface VerbioOptions {
    enable_formatting?: boolean;
    enable_diarization?: boolean;
    topic?: number;
    inline_grammar?: string;
    grammar_uri?: string;
    label?: string;
    recognition_timeout?: number;
    speech_complete_timeout?: number;
    speech_incomplete_timeout?: number;
}

interface Alert {
    id?: string;
    message: string;
}

interface Answer {
    id?: string;
}

interface Conference {
    id?: string;
    name: string;
    beep?: boolean;
    memberTag?: string;
    speakOnlyTo?: string;
    startConferenceOnEnter?: boolean;
    endConferenceOnExit?: boolean;
    endConferenceDuration?: number;
    maxParticipants?: number;
    joinMuted?: boolean;
    actionHook?: Record<string, unknown> | string;
    waitHook?: Record<string, unknown> | string;
    statusEvents?: unknown[];
    statusHook?: Record<string, unknown> | string;
    enterHook?: Record<string, unknown> | string;
    record?: CallRecord;
    distributeDtmf?: boolean;
}

interface Config {
    id?: string;
    synthesizer?: Synthesizer;
    recognizer?: Recognizer;
    bargeIn?: BargeIn;
    ttsStream?: TtsStream;
    record?: RecordOptions;
    listen?: ListenOptions;
    stream?: ListenOptions;
    transcribe?: TranscribeOptions;
    amd?: Amd;
    fillerNoise?: FillerNoise;
    notifyEvents?: boolean;
    notifySttLatency?: boolean;
    reset?: string | unknown[];
    onHoldMusic?: string;
    actionHookDelayAction?: ActionHookDelayAction;
    sipRequestWithinDialogHook?: Record<string, unknown> | string;
    boostAudioSignal?: number | string;
    vad?: Vad;
    referHook?: Record<string, unknown> | string;
    earlyMedia?: boolean;
    autoStreamTts?: boolean;
    disableTtsCache?: boolean;
}

interface Dequeue {
    id?: string;
    name: string;
    actionHook?: Record<string, unknown> | string;
    timeout?: number;
    beep?: boolean;
    callSid?: string;
}

interface Dial {
    id?: string;
    actionHook?: Record<string, unknown> | string;
    onHoldHook?: Record<string, unknown> | string;
    answerOnBridge?: boolean;
    callerId?: string;
    callerName?: string;
    confirmHook?: Record<string, unknown> | string;
    referHook?: Record<string, unknown> | string;
    dialMusic?: string;
    dtmfCapture?: Record<string, unknown>;
    dtmfHook?: Record<string, unknown> | string;
    headers?: Record<string, unknown>;
    anchorMedia?: boolean;
    exitMediaPath?: boolean;
    boostAudioSignal?: number | string;
    listen?: Listen;
    stream?: Listen;
    target: Target[];
    timeLimit?: number;
    timeout?: number;
    proxy?: string;
    transcribe?: Transcribe;
    amd?: Amd;
    dub?: Dub[];
    tag?: Record<string, unknown>;
    forwardPAI?: boolean;
}

interface Dialogflow {
    id?: string;
    credentials: Record<string, unknown> | string;
    project: string;
    agent?: string;
    environment?: string;
    region?: string;
    model?: "es" | "cx";
    lang: string;
    actionHook?: Record<string, unknown> | string;
    eventHook?: Record<string, unknown> | string;
    events?: unknown[];
    welcomeEvent?: string;
    welcomeEventParams?: Record<string, unknown>;
    noInputTimeout?: number;
    noInputEvent?: string;
    passDtmfAsTextInput?: boolean;
    thinkingMusic?: string;
    tts?: Synthesizer;
    bargein?: boolean;
    queryInput?: QueryInput;
}

interface Dtmf {
    id?: string;
    dtmf: string;
    duration?: number;
}

interface Dub {
    id?: string;
    action: "addTrack" | "removeTrack" | "silenceTrack" | "playOnTrack" | "sayOnTrack";
    track: string;
    play?: string;
    say?: string | Record<string, unknown>;
    loop?: boolean;
    gain?: number | string;
}

interface Enqueue {
    id?: string;
    name: string;
    actionHook?: Record<string, unknown> | string;
    waitHook?: Record<string, unknown> | string;
    priority?: number;
    _?: Record<string, unknown>;
}

interface Gather {
    id?: string;
    actionHook?: Record<string, unknown> | string;
    finishOnKey?: string;
    input?: unknown[];
    numDigits?: number;
    minDigits?: number;
    maxDigits?: number;
    interDigitTimeout?: number;
    partialResultHook?: Record<string, unknown> | string;
    speechTimeout?: number;
    listenDuringPrompt?: boolean;
    dtmfBargein?: boolean;
    bargein?: boolean;
    minBargeinWordCount?: number;
    timeout?: number;
    recognizer?: Recognizer;
    play?: Play;
    say?: Say;
    fillerNoise?: FillerNoise;
    actionHookDelayAction?: ActionHookDelayAction;
}

interface Hangup {
    id?: string;
    headers?: Record<string, unknown>;
}

interface Leave {
    id?: string;
}

interface Lex {
    id?: string;
    botId: string;
    botAlias: string;
    credentials: Record<string, unknown>;
    region: string;
    locale?: string;
    intent?: LexIntent;
    welcomeMessage?: string;
    metadata?: Record<string, unknown>;
    bargein?: boolean;
    passDtmf?: boolean;
    actionHook?: Record<string, unknown> | string;
    eventHook?: Record<string, unknown> | string;
    noInputTimeout?: number;
    tts?: Synthesizer;
}

interface Listen {
    id?: string;
    actionHook?: Record<string, unknown> | string;
    auth?: Auth;
    finishOnKey?: string;
    maxLength?: number;
    metadata?: Record<string, unknown>;
    mixType?: "mono" | "stereo" | "mixed";
    passDtmf?: boolean;
    playBeep?: boolean;
    disableBidirectionalAudio?: boolean;
    bidirectionalAudio?: BidirectionalAudio;
    sampleRate?: number;
    timeout?: number;
    transcribe?: Transcribe;
    url: string;
    wsAuth?: Auth;
    earlyMedia?: boolean;
    channel?: number;
}

interface Llm {
    id?: string;
    vendor: string;
    model?: string;
    auth?: Record<string, unknown>;
    connectOptions?: Record<string, unknown>;
    mcpServers?: McpServer[];
    actionHook?: Record<string, unknown> | string;
    eventHook?: Record<string, unknown> | string;
    toolHook?: Record<string, unknown> | string;
    events?: unknown[];
    llmOptions: Record<string, unknown>;
}

interface Message {
    id?: string;
    carrier?: string;
    account_sid?: string;
    message_sid?: string;
    to: string;
    from: string;
    text?: string;
    media?: string | unknown[];
    actionHook?: Record<string, unknown> | string;
}

interface Pause {
    id?: string;
    length: number;
}

interface Pipeline {
    id?: string;
    stt: Recognizer;
    tts: Synthesizer;
    vad?: Vad;
    turnDetection?: TurnDetectionPipeline;
    llm: Llm;
    preflightLlm?: boolean;
    actionHook?: Record<string, unknown> | string;
    eventHook?: Record<string, unknown> | string;
}

interface Play {
    id?: string;
    url: string | unknown[];
    loop?: number | string;
    earlyMedia?: boolean;
    seekOffset?: number | string;
    timeoutSecs?: number | string;
    actionHook?: Record<string, unknown> | string;
}

interface Rasa {
    id?: string;
    url: string;
    recognizer?: Recognizer;
    tts?: Synthesizer;
    prompt?: string;
    actionHook?: Record<string, unknown> | string;
    eventHook?: Record<string, unknown> | string;
}

interface Redirect {
    id?: string;
    actionHook: Record<string, unknown> | string;
}

interface RestDial {
    id?: string;
    account_sid?: string;
    application_sid?: string;
    call_hook: Record<string, unknown> | string;
    call_status_hook?: Record<string, unknown> | string;
    from: string;
    callerName?: string;
    fromHost?: string;
    speech_synthesis_vendor?: string;
    speech_synthesis_voice?: string;
    speech_synthesis_language?: string;
    speech_recognizer_vendor?: string;
    speech_recognizer_language?: string;
    tag?: Record<string, unknown>;
    to: Target;
    headers?: Record<string, unknown>;
    timeout?: number;
    amd?: Amd;
    dual_streams?: boolean;
    sipRequestWithinDialogHook?: string;
    referHook?: Record<string, unknown> | string;
    timeLimit?: number;
}

interface Say {
    id?: string;
    text?: string | unknown[];
    instructions?: string;
    stream?: boolean;
    loop?: number | string;
    synthesizer?: Synthesizer;
    earlyMedia?: boolean;
    disableTtsCache?: boolean;
    closeStreamOnEmpty?: boolean;
}

interface SipDecline {
    id?: string;
    status: number;
    reason?: string;
    headers?: Record<string, unknown>;
}

interface SipRefer {
    id?: string;
    referTo: string;
    referredBy?: string;
    referredByDisplayName?: string;
    headers?: Record<string, unknown>;
    actionHook?: Record<string, unknown> | string;
    eventHook?: Record<string, unknown> | string;
}

interface SipRequest {
    id?: string;
    method: string;
    body?: string;
    headers?: Record<string, unknown>;
    actionHook?: Record<string, unknown> | string;
}

interface Stream {
    id?: string;
    actionHook?: Record<string, unknown> | string;
    auth?: Auth;
    finishOnKey?: string;
    maxLength?: number;
    metadata?: Record<string, unknown>;
    mixType?: "mono" | "stereo" | "mixed";
    passDtmf?: boolean;
    playBeep?: boolean;
    disableBidirectionalAudio?: boolean;
    bidirectionalAudio?: BidirectionalAudio;
    sampleRate?: number;
    timeout?: number;
    transcribe?: Transcribe;
    url: string;
    wsAuth?: Auth;
    earlyMedia?: boolean;
}

interface Tag {
    id?: string;
    data: Record<string, unknown>;
}

interface Transcribe {
    id?: string;
    transcriptionHook?: string;
    translationHook?: string;
    recognizer?: Recognizer;
    earlyMedia?: boolean;
    channel?: number;
}

// ============================================
// REST API Types (from calls.yaml + platform.yaml)
// ============================================

interface JambonzOptions {
    baseUrl: string;
}

interface Webhook {
    webhook_sid?: string;
    url: string;
    method?: "get" | "post";
    username?: string;
    password?: string;
}

interface ApiTarget {
    type: "phone" | "sip" | "user" | "teams";
    number?: string;
    sipUri?: string;
    /** Microsoft Teams customer tenant domain name */
    tenant?: string;
    trunk?: string;
    /** Dial directly into user's voicemail to leave a message */
    vmail?: boolean;
    overrideTo?: string;
    name?: string;
    auth?: {
        username?: string;
        password?: string;
    };
}

interface ApiCall {
    account_sid: string;
    application_sid?: string;
    call_id: string;
    call_sid: string;
    call_status:
        | "trying"
        | "ringing"
        | "alerting"
        | "in-progress"
        | "completed"
        | "busy"
        | "no-answer"
        | "failed"
        | "queued";
    caller_name?: string;
    direction: "inbound" | "outbound";
    duration?: number;
    from: string;
    originating_sip_trunk_name?: string;
    parent_call_sid?: string;
    service_url: string;
    sip_status: number;
    to: string;
}

interface ApiApplication {
    application_sid?: string;
    name: string;
    account_sid: string;
    /** application webhook for inbound voice calls */
    call_hook?: Webhook;
    /** webhhok for reporting call status events */
    call_status_hook?: Webhook;
    /** application webhook for inbound SMS/MMS */
    messaging_hook?: Webhook;
    speech_synthesis_vendor?: string;
    speech_synthesis_voice?: string;
    speech_recognizer_vendor?: string;
    speech_recognizer_language?: string;
    /** Object containing the Application Environment Variables as key/value to be sent with the call_hook payload */
    env_vars?: Record<string, unknown>;
    record_all_calls?: boolean;
}

interface ApiMessage {
    provider?: string;
    from: string;
    to: string;
    text?: string;
    media?: string;
}

interface Account {
    account_sid: string;
    name: string;
    sip_realm?: string;
    /** authentication webhook for registration */
    registration_hook?: Webhook;
    device_calling_application_sid?: string;
    service_provider_sid: string;
    record_all_calls?: boolean;
    record_format?: "wav" | "mp3";
    /** Credentials for recording storage */
    bucket_credential?: {
        vendor?: "aws_s3" | "s3_compatible" | "azure" | "google";
        region?: string;
        /** name of the bucket */
        name?: string;
        access_key_id?: string;
        secret_access_key?: string;
    };
}

interface VoipCarrier {
    service_provider_sid: string;
    name: string;
    description?: string;
    account_sid?: string;
    application_sid?: string;
    e164_leading_plus?: boolean;
    requires_register?: boolean;
    register_username?: string;
    register_sip_realm?: string;
    register_password?: string;
    tech_prefix?: string;
    diversion?: string;
    is_active?: boolean;
    smpp_system_id?: string;
    smpp_password?: string;
    smpp_inbound_system_id?: string;
    smpp_inbound_password?: string;
    smpp_enquire_link_interval?: number;
    /** The type of trunk to create, see the [guide](/guides/using-the-jambonz-portal/basic-concepts/creating-carriers) for details */
    trunk_type?: "static_ip" | "auth" | "reg";
    /** username for an auth trunk */
    inbound_auth_username?: string;
    /** password for an auth trunk */
    inbound_auth_password?: string;
}

interface SipGateway {
    sip_gateway_sid: string;
    ipv4: string;
    port: number;
    netmask: number;
    voip_carrier_sid: string;
    inbound?: boolean;
    outbound?: boolean;
}

interface SmppGateway {
    smpp_gateway_sid: string;
    ipv4: string;
    port: number;
    netmask: number;
    voip_carrier_sid: string;
    is_primary?: boolean;
    use_tls?: boolean;
    inbound?: boolean;
    outbound?: boolean;
}

interface PhoneNumber {
    phone_number_sid: string;
    number: string;
    voip_carrier_sid: string;
    account_sid?: string;
    application_sid?: string;
}

interface SpeechCredential {
    speech_credential_sid?: string;
    account_sid?: string;
    vendor?: "google" | "aws";
    service_key?: string;
    access_key_id?: string;
    secret_access_key?: string;
    aws_region?: string;
    last_used?: string;
    last_tested?: string;
    use_for_tts?: boolean;
    use_for_stt?: boolean;
    tts_tested_ok?: boolean;
    stt_tested_ok?: boolean;
    riva_server_uri?: string;
}

interface ServiceProvider {
    service_provider_sid: string;
    name: string;
    description?: string;
    root_domain?: string;
    /** authentication webhook for registration */
    registration_hook?: Webhook;
    ms_teams_fqdn?: string;
    /** used for inbound testing for accounts on free plan */
    test_number?: string;
    /** name of test application that can be used for new signups */
    test_application_name?: string;
    /** identifies test application that can be used for new signups */
    test_application_sid?: string;
}

interface Registration {
    registration_sid: string;
    username: string;
    domain: string;
    sip_contact: string;
    sip_user_agent?: string;
}

interface ApiKey {
    api_key_sid: string;
    token: string;
    account_sid?: string;
    service_provider_sid?: string;
    expires_at?: string;
    created_at?: string;
    last_used?: string;
}

interface GeneralError {
    msg: string;
}

interface CreateCallOptions {
    /** The application to use to control this call.  Either application_sid or call_hook is required. */
    application_sid?: string;
    /** If set to true, the inbound call will ring until the number that was dialed answers the call, and at that point a 200 OK will be sent on the inbound leg.  If false, the inbound call will be answered immediately as the outbound call is placed. */
    answerOnBridge?: boolean;
    call_hook?: Webhook;
    call_status_hook?: Webhook;
    /** The calling party number */
    from: string;
    /** The hostname to put in the SIP From header of the INVITE */
    fromHost?: string;
    /** The number of seconds to wait for call to be answered.  Defaults to 60. */
    timeout?: number;
    /** The max length of call in seconds */
    timeLimit?: number;
    /** Initial set of customer-supplied metadata to associate with the call (see jambonz 'tag' verb) */
    tag?: Record<string, unknown>;
    /** Destination for call */
    to: ApiTarget;
    /** The customer SIP headers to associate with the call */
    headers?: Record<string, unknown>;
    /** The sip indialog hook to receive session messages */
    sipRequestWithinDialogHook?: string;
    /** The vendor for Text to Speech (required if application_sid is not used) */
    speech_synthesis_vendor?: string;
    /** The language for Text to Speech (required if application_sid is not used) */
    speech_synthesis_language?: string;
    /** The voice for Text to Speech (required if application_sid is not used) */
    speech_synthesis_voice?: string;
    /** The vendor for Speech to Text (required if application_sid is not used) */
    speech_recognizer_vendor?: string;
    /** The language for Speech to Text (required if application_sid is not used) */
    speech_recognizer_language?: string;
    amd?: Amd;
}

interface UpdateCallOptions {
    call_hook?: Webhook;
    child_call_hook?: Webhook;
    call_status?: "completed" | "no-answer";
    conf_mute_status?: "mute" | "unmute";
    conf_hold_status?: "hold" | "unhold";
    listen_status?: "pause" | "silence" | "resume";
    mute_status?: "mute" | "unmute";
    transcribe_status?: "pause" | "resume";
    whisper?: {
        /** See [Say](/verbs/verbs/say) or [Play](/verbs/verbs/play) for details of the properties */
        verb?: "say" | "play";
    } | {
        /** See [Say](/verbs/verbs/say) or [Play](/verbs/verbs/play) for details of the properties */
        verb?: "say" | "play";
    }[];
    sip_request?: {
        method?: string;
        content_type?: string;
        content?: string;
        headers?: Record<string, unknown>;
    };
    record?: {
        action?: "startCallRecording" | "stopCallRecording" | "pauseCallRecording" | "resumeCallRecording";
        recordingID?: string;
        siprecServerURL?: string;
    };
    conferenceParticipantAction?: {
        action?: "tag" | "untag" | "coach" | "uncoach" | "mute" | "unmute" | "hold" | "unhold";
        tag?: string;
    };
    dtmf?: {
        /** Single digit to send */
        digit: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0" | "*" | "#";
        /** Duration of the tone in ms */
        duration?: number;
    };
}

interface CreateApplicationOptions {
    /** application name */
    name: string;
    account_sid: string;
    /** application webhook to handle inbound voice calls */
    call_hook: Webhook;
    /** webhook to report call status events */
    call_status_hook: Webhook;
    /** application webhook to handle inbound SMS/MMS messages */
    messaging_hook?: Webhook;
    /** Voice Application Json, call_hook will not be invoked if app_json is provided */
    app_json?: string;
    speech_synthesis_vendor?: string;
    speech_synthesis_voice?: string;
    speech_recognizer_vendor?: string;
    speech_recognizer_language?: string;
    /** Object containing the Application Environment Variables as key/value to be sent with the call_hook payload */
    env_vars?: Record<string, unknown>;
}

interface UpdateApplicationOptions {
    application_sid?: string;
    name: string;
    account_sid: string;
    /** application webhook for inbound voice calls */
    call_hook?: Webhook;
    /** webhhok for reporting call status events */
    call_status_hook?: Webhook;
    /** application webhook for inbound SMS/MMS */
    messaging_hook?: Webhook;
    speech_synthesis_vendor?: string;
    speech_synthesis_voice?: string;
    speech_recognizer_vendor?: string;
    speech_recognizer_language?: string;
    /** Object containing the Application Environment Variables as key/value to be sent with the call_hook payload */
    env_vars?: Record<string, unknown>;
    record_all_calls?: boolean;
}

interface CreateMessageOptions {
    provider?: string;
    from: string;
    to: string;
    text?: string;
    media?: string;
}

// ============================================
// Classes
// ============================================

declare class Calls {
    create(opts: CreateCallOptions): Promise<string>;
    update(callSid: string, opts: UpdateCallOptions): Promise<void>;
    list(opts?: Record<string, unknown>): Promise<ApiCall[]>;
    retrieve(callSid: string): Promise<ApiCall>;
    delete(callSid: string): Promise<void>;
}

declare class Messages {
    create(opts: CreateMessageOptions): Promise<string>;
}

declare class Applications {
    create(opts: CreateApplicationOptions): Promise<string>;
    update(appSid: string, opts: UpdateApplicationOptions): Promise<void>;
    list(opts?: Record<string, unknown>): Promise<ApiApplication[]>;
    retrieve(appSid: string): Promise<ApiApplication>;
    delete(appSid: string): Promise<void>;
}

declare class Jambonz {
    constructor(accountSid: string, apiKey: string, opts: JambonzOptions);
    calls: Calls;
    messages: Messages;
    applications: Applications;
}

declare class WebhookResponse {
    payload: object[];
    length: number;

    constructor();

    static verifyJambonzSignature(
        secret: string | string[],
    ): (req: unknown, res: unknown, next: () => void) => void;

    toJSON(): object[];

    // Verb methods
    alert(payload: Alert): this;
    answer(payload?: Answer): this;
    sip_decline(payload: SipDecline): this;
    sip_request(payload: SipRequest): this;
    sip_refer(payload: SipRefer): this;
    config(payload?: Config): this;
    dub(payload: Dub): this;
    dequeue(payload: Dequeue): this;
    enqueue(payload: Enqueue): this;
    leave(payload?: Leave): this;
    hangup(payload?: Hangup): this;
    play(payload: Play): this;
    say(payload?: Say): this;
    gather(payload?: Gather): this;
    conference(payload: Conference): this;
    dial(payload: Dial): this;
    dialogflow(payload: Dialogflow): this;
    dtmf(payload: Dtmf): this;
    lex(payload: Lex): this;
    listen(payload: Listen): this;
    stream(payload: Stream): this;
    llm(payload: Llm): this;
    message(payload: Message): this;
    pause(payload: Pause): this;
    rasa(payload: Rasa): this;
    redirect(payload: Redirect): this;
    rest_dial(payload: RestDial): this;
    tag(payload: Tag): this;
    transcribe(payload?: Transcribe): this;
    pipeline(payload: Pipeline): this;
}

// ============================================
// Main Export (DefinitelyTyped format)
// ============================================

declare function jambonz(accountSid: string, apiKey: string, opts: JambonzOptions): Jambonz;

declare namespace jambonz {
    export {
        Account,
        ActionHookDelayAction,
        Alert,
        Amd,
        AmdTimers,
        Answer,
        ApiApplication,
        ApiCall,
        ApiKey,
        ApiMessage,
        ApiTarget,
        Applications,
        AssemblyAiOptions,
        Auth,
        AwsOptions,
        AzureOptions,
        BargeIn,
        BidirectionalAudio,
        CallRecord,
        Calls,
        CobaltOptions,
        Conference,
        Config,
        CreateApplicationOptions,
        CreateCallOptions,
        CreateMessageOptions,
        CustomOptions,
        DeepgramOptions,
        Dequeue,
        Dial,
        DialFrom,
        Dialogflow,
        Dtmf,
        Dub,
        ElevenlabsOptions,
        Enqueue,
        FillerNoise,
        Formatting,
        Gather,
        GeneralError,
        GoogleOptions,
        Hangup,
        HoundifyOptions,
        IbmOptions,
        Jambonz,
        JambonzOptions,
        Leave,
        Lex,
        LexIntent,
        Listen,
        ListenOptions,
        Llm,
        McpServer,
        Message,
        Messages,
        NuanceOptions,
        NvidiaOptions,
        OpenaiOptions,
        Pause,
        PhoneNumber,
        Pipeline,
        Play,
        PromptTemplates,
        QueryInput,
        Rasa,
        Recognizer,
        RecordOptions,
        Redirect,
        Registration,
        Resource,
        ResourceReference,
        RestDial,
        Say,
        ServiceProvider,
        SipDecline,
        SipGateway,
        SipRefer,
        SipRequest,
        SmAudioEventsConfig,
        SmAudioFilteringConfig,
        SmppGateway,
        SmPuctuationOverrides,
        SmSpeakerDiarizationConfig,
        SmTranscriptFilteringConfig,
        SmTranscriptionConfig,
        SmTranslationConfig,
        SonioxOptions,
        SonioxStorage,
        SpeechCredential,
        SpeechmaticsOptions,
        Stream,
        Synthesizer,
        Tag,
        Target,
        Transcribe,
        TranscribeOptions,
        TtsStream,
        TurnDetection,
        TurnDetectionPipeline,
        UpdateApplicationOptions,
        UpdateCallOptions,
        Vad,
        VerbioOptions,
        VoipCarrier,
        Webhook,
        WebhookResponse,
    };
}

export = jambonz;
