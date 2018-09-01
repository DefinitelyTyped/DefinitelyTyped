// Type definitions for dialogflow 0.6
// Project: https://github.com/dialogflow/dialogflow-nodejs-client-v2#readme
// Definitions by: Daniel Dyla <https://github.com/dyladan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export namespace v2 {
    class AgentsClient {
        constructor(options?: ClientOptions);

        servicePath: string;
        port: number;
        scopes: string[];

        getProjectId(): Promise<string>;
        getProjectId(callback?: (error: Error, id: string) => string): void;

        getAgent(
            request: GetAgentRequest,
            options?: gax.CallOptions,
            cb?: (err: Error, agent: Agent) => void
        ): Promise<[Agent]>;
        searchAgents(
            request: SearchAgentRequest,
            options?: gax.CallOptions,
            cb?: (
                err: Error,
                agents: Agent[],
                arg3: any,
                response: any
            ) => void
        ): Promise<Agent[]>;
        searchAgentsStream(
            request: SearchAgentRequest,
            options?: gax.CallOptions
        ): any;
        trainAgent(
            request: TrainAgentRequest,
            options?: gax.CallOptions,
            cb?: (err: Error, operation: gax.Operation) => void
        ): Promise<[gax.Operation]>;
        exportAgent(
            request: ExportAgentRequest,
            options?: gax.CallOptions,
            cb?: (err: Error, operation: gax.Operation) => void
        ): Promise<[gax.Operation]>;
        importAgent(
            request: ImportAgentRequest,
            options?: gax.CallOptions,
            cb?: (err: Error, operation: gax.Operation) => void
        ): Promise<[gax.Operation]>;
        restoreAgent(
            request: RestoreAgentRequest,
            options?: gax.CallOptions,
            cb?: (err: Error, operation: gax.Operation) => void
        ): Promise<[gax.Operation]>;
    }

    class ContextsClient {
        constructor(options?: ClientOptions);

        servicePath: string;
        port: number;
        scopes: string[];

        getProjectId(): Promise<string>;
        getProjectId(callback?: (error: Error, id: string) => string): void;

        listContexts(
            request: ListContextsRequest,
            options?: gax.CallOptions
        ): Promise<[Context[]]>;
        listContextsStream(
            request: ListContextsRequest,
            options?: gax.CallOptions
        ): any;
        getContext(
            request: GetContextRequest,
            options?: gax.CallOptions
        ): Promise<[Context]>;
        createContext(
            request: CreateContextReqeust,
            options?: gax.CallOptions
        ): Promise<[Context]>;
        updateContext(
            request: UpdateContextRequest,
            options?: gax.CallOptions
        ): Promise<[Context]>;
        deleteContext(
            request: DeleteContextRequest,
            options?: gax.CallOptions
        ): Promise<void>;
        deleteAllContexts(
            request: DeleteAllContextsRequest,
            options?: gax.CallOptions
        ): Promise<void>;

        sessionPath(project: string, session: string): string;
        contextPath(project: string, session: string, context: string): string;

        matchProjectFromContextName(name: string): string;
        matchSessionFromContextName(name: string): string;
        matchContextFromContextName(name: string): string;

        matchProjectFromSessionName(name: string): string;
        matchSessionFromSessionName(name: string): string;
    }

    class EntityTypesClient {
        constructor(options?: ClientOptions);

        servicePath: string;
        port: number;
        scopes: string[];

        getProjectId(): Promise<string>;
        getProjectId(callback?: (error: Error, id: string) => string): void;

        listEntityTypes(
            request: ListEntityTypesRequest,
            options?: gax.CallOptions
        ): Promise<[EntityType[]]>;

        listEntityTypesStream(
            request: ListEntityTypesRequest,
            options?: gax.CallOptions
        ): any;

        getEntityType(
            request: GetEntityTypeRequest,
            options?: gax.CallOptions
        ): Promise<[EntityType]>;
        createEntityType(
            request: CreateEntityTypeRequest,
            options?: gax.CallOptions
        ): Promise<[EntityType]>;
        updateEntityType(
            request: UpdateEntityTypeRequest,
            options?: gax.CallOptions
        ): Promise<[EntityType]>;
        deleteEntityType(
            request: DeleteEntityTypeRequest,
            options?: gax.CallOptions
        ): Promise<void>;

        // TODO: add batch style calls
        // batchUpdateEntityTypes
        // batchDeleteEntityTypes
        // batchCreateEntities
        // batchUpdateEntities
        // batchDeleteEntities

        projectAgentPath(project: string): string;
        entityTypePath(project: string, entityType: string): string;
        matchProjectFromProjectAgentName(entityTypeName: string): string;
        matchProjectFromEntityTypeName(entityTypeName: string): string;
        matchEntityTypeFromEntityTypeName(entityTypeName: string): string;
    }

    class IntentsClient {
        constructor(options?: ClientOptions);

        servicePath: string;
        port: number;
        scopes: string[];

        getProjectId(): Promise<string>;
        getProjectId(callback?: (error: Error, id: string) => string): void;

        listIntents(
            request: ListIntentsRequest,
            options?: gax.CallOptions
        ): Promise<[Intent[]]>;
        getIntent(
            request: GetIntentRequest,
            options?: gax.CallOptions
        ): Promise<[Intent]>;
        createIntent(
            request: CreateIntentRequest,
            options?: gax.CallOptions
        ): Promise<[Intent]>;
        updateIntent(
            request: UpdateIntentRequest,
            options?: gax.CallOptions
        ): Promise<[Intent]>;
        deleteIntent(
            request: DeleteIntentRequest,
            options?: gax.CallOptions
        ): Promise<void>;

        // TODO: add batch style calls
        // batchUpdateIntents(request: BatchUpdateIntentsRequest): void;
        // batchDeleteIntents(request: BatchDeleteIntentsRequest): void;

        projectAgentPath(project: string): string;
        intentPath(project: string, intent: string): string;
        agentPath(project: string, agent: string): string;

        matchProjectFromProjectAgentName(projectAgentName: string): string;
        matchProjectFromIntentName(intentName: string): string;
        matchIntentFromIntentName(intentName: string): string;
        matchProjectFromAgentName(agentName: string): string;
        matchAgentFromAgentName(agentName: string): string;
    }

    class SessionEntityTypesClient {
        constructor(options?: ClientOptions);

        servicePath: string;
        port: number;
        scopes: string[];

        getProjectId(): Promise<string>;
        getProjectId(callback?: (error: Error, id: string) => string): void;

        // TODO: add Session Entity Types service methods
    }

    class SessionsClient {
        constructor(options?: ClientOptions);

        servicePath: string;
        port: number;
        scopes: string[];

        getProjectId(): Promise<string>;
        getProjectId(callback?: (error: Error, id: string) => string): void;

        detectIntent(
            request: DetectIntentRequest,
            options?: gax.CallOptions
        ): Promise<DetectIntentResponse[]>;
        streamingDetectIntent(options?: gax.CallOptions): Promise<any>;

        sessionPath(projectId: string, sessionId: string): string;
    }
}

export namespace v2beta1 {
    class AgentsClient extends v2.AgentsClient {}
    class ContextsClient extends v2.ContextsClient {
        environmentSessionPath(
            project: string,
            environment: string,
            user: string,
            session: string
        ): string;

        environmentContextPath(
            project: string,
            environment: string,
            user: string,
            session: string,
            context: string
        ): string;

        matchProjectFromEnvironmentSessionName(
            environmentSessionName: string
        ): string;
        matchEnvironmentFromEnvironmentSessionName(
            environmentSessionName: string
        ): string;
        matchUserFromEnvironmentSessionName(
            environmentSessionName: string
        ): string;
        matchSessionFromEnvironmentSessionName(
            environmentSessionName: string
        ): string;

        matchProjectFromEnvironmentContextName(
            environmentContextName: string
        ): string;
        matchEnvironmentFromEnvironmentContextName(
            environmentContextName: string
        ): string;
        matchUserFromEnvironmentContextName(
            environmentContextName: string
        ): string;
        matchSessionFromEnvironmentContextName(
            environmentContextName: string
        ): string;
        matchContextFromEnvironmentContextName(
            environmentContextName: string
        ): string;
    }
    class EntityTypesClient extends v2.EntityTypesClient {}
    class IntentsClient extends v2.IntentsClient {}
    class SessionEntityTypesClient extends v2.SessionEntityTypesClient {}
    class SessionsClient extends v2.SessionsClient {
        environmentSessionPath(
            project: string,
            environment: string,
            user: string,
            session: string
        ): string;

        matchProjectFromEnvironmentSessionName(
            environmentSessionName: string
        ): string;
        matchEnvironmentFromEnvironmentSessionName(
            environmentSessionName: string
        ): string;
        matchUserFromEnvironmentSessionName(
            environmentSessionName: string
        ): string;
        matchSessionFromEnvironmentSessionName(
            environmentSessionName: string
        ): string;
    }
}

export class AgentsClient extends v2.AgentsClient {}
export class ContextsClient extends v2.ContextsClient {}
export class EntityTypesClient extends v2.EntityTypesClient {}
export class IntentsClient extends v2.IntentsClient {}
export class SessionEntityTypesClient extends v2.SessionEntityTypesClient {}
export class SessionsClient extends v2.SessionsClient {}

export namespace entities {
    namespace DateTimeVariants {
        interface DateTime {
            date_time: string;
        }

        interface DateTimePeriod {
            startDateTime: DateTime;
            endDateTime: DateTime;
        }

        interface DatePeriod {
            startDate: Date;
            endDate: Date;
        }
        interface TimePeriod {
            startTime: string;
            endTime: string;
        }
    }

    type DateTime =
        | string
        | DateTimeVariants.DatePeriod
        | DateTimeVariants.TimePeriod
        | DateTimeVariants.DateTime
        | DateTimeVariants.DateTimePeriod;

    interface Duration {
        unit: string;
        amount: number;
    }

    type Date = string;

    type Time = string;
}

export namespace gax {
    interface BackoffSettings {
        initialRetryDelayMillis: number;
        retryDelayMultiplier: number;
        maxRetryDelayMillis: number;
        initialRpcTimeoutMillis: number;
        maxRpcTimeoutMillis: number;
        totalTimeoutMillis: number;
    }

    interface RetryOptions {
        retryCodes: string[];
        backoffSettings: BackoffSettings;
    }

    interface CallOptions {
        timeout?: number;
        retry?: RetryOptions;
        autoPaginate?: boolean;
        pageToken?: any;
        isBundling?: boolean;
        longrunning?: BackoffSettings;
        promise?: PromiseConstructor;
    }

    interface Operation {
        grpcOp: longrunning.Operation;
        longrunningDescriptor: any;
        backoffSettings: BackoffSettings;
        callOptions?: CallOptions;
    }
}

export namespace longrunning {
    type Operation =
        | UnfinishedOperation
        | FailedOperation
        | SuccessfulOperation;

    interface BaseOperation {
        name: string;
        metadata: any;
        done: boolean;
    }

    interface UnfinishedOperation extends BaseOperation {
        done: false;
    }

    interface FailedOperation extends BaseOperation {
        done: true;
        error: Status;
    }

    interface SuccessfulOperation extends BaseOperation {
        done: true;
        response: any;
    }

    interface Status {
        code: number;
        message: string;
        details: any[];
    }
}

export interface GetAgentRequest {
    parent: string;
}

export interface SearchAgentRequest {
    parent: string;
    pageSize?: number;
}

export interface TrainAgentRequest {
    parent: string;
}

export interface ExportAgentRequest {
    parent: string;
    agentUri?: string;
}

export interface ImportAgentRequest {
    parent: string;
    agentUri?: string;
    agentContent?: string;
}

export interface RestoreAgentRequest {
    parent: string;
    agentUri?: string;
    agentContent?: string;
}

export interface ListContextsRequest {
    parent: string;
    pageSize?: number;
}

export interface GetContextRequest {
    name: string;
}

export interface CreateContextReqeust {
    parent: string;
    context: Context;
}

export interface UpdateContextRequest {
    context: Context;
    updatemask?: any;
}

export interface DeleteContextRequest {
    name: string;
}

export interface DeleteAllContextsRequest {
    parent: string;
}

export interface ListEntityTypesRequest {
    parent: string;
    languageCode?: string;
    pageSize?: number;
}

export interface GetEntityTypeRequest {
    name: string;
    languageCode?: string;
}

export interface CreateEntityTypeRequest {
    parent: string;
    entityType: EntityType;
}

export interface UpdateEntityTypeRequest {
    entityType: EntityType;
    languageCode?: string;
    /** @link https://github.com/google/protobuf/blob/master/src/google/protobuf/field_mask.proto */
    updateMask?: any;
}

export interface DeleteEntityTypeRequest {
    name: string;
}

export interface ListIntentsRequest {
    parent: string;
    languageCode?: string;
    intentView?: IntentView;
    pageSize?: number;
}

export interface GetIntentRequest {
    name: string;
    languageCode?: string;
    intentView?: IntentView;
}

export interface CreateIntentRequest {
    parent: string;
    intent: Intent;
    languageCode?: string;
    intentView?: IntentView;
}

export interface UpdateIntentRequest {
    intent: Intent;
    languageCode?: string;
    updateMask?: any;
    intentView?: IntentView;
}

export interface DeleteIntentRequest {
    name: string;
}

export interface DetectIntentRequest {
    session: string;
    queryInput: QueryInput;
    queryParams?: QueryParams;
    inputAudio?: any;
}

export interface DetectIntentResponse {
    responseId: string;
    queryResult: QueryResult;
    webhookStatus: Status;
}

export interface QueryResult {
    queryText: string;
    languageCode: string;
    speechRecognitionConfidence: number;
    action: string;
    parameters: any;
    allRequiredParamsSent: boolean;
    fulfillmentText: string;
    fulfillmentMessages: Message[];
    webhookSource: string;
    webhookPayload: any;
    outputContexts: Context[];
    intent: Intent;
    intentDetectionConfidence: number;
    sentimentAnalysisResult?: {
        queryTextSentiment: {
            magnitude: number;
            score: number;
        };
    };
    diagnosticInfo: any;
}

export interface Status {
    code: StatusCode;
    message: string;
    details: any[];
}

export enum StatusCode {
    // Not an error; returned on success
    //
    // HTTP Mapping: 200 OK
    OK = 0,

    // The operation was cancelled, typically by the caller.
    //
    // HTTP Mapping: 499 Client Closed Request
    CANCELLED = 1,

    // Unknown error.  For example, this error may be returned when
    // a `Status` value received from another address space belongs to
    // an error space that is not known in this address space.  Also
    // errors raised by APIs that do not return enough error information
    // may be converted to this error.
    //
    // HTTP Mapping: 500 Internal Server Error
    UNKNOWN = 2,

    // The client specified an invalid argument.  Note that this differs
    // from `FAILED_PRECONDITION`.  `INVALID_ARGUMENT` indicates arguments
    // that are problematic regardless of the state of the system
    // (e.g., a malformed file name).
    //
    // HTTP Mapping: 400 Bad Request
    INVALID_ARGUMENT = 3,

    // The deadline expired before the operation could complete. For operations
    // that change the state of the system, this error may be returned
    // even if the operation has completed successfully.  For example, a
    // successful response from a server could have been delayed long
    // enough for the deadline to expire.
    //
    // HTTP Mapping: 504 Gateway Timeout
    DEADLINE_EXCEEDED = 4,

    // Some requested entity (e.g., file or directory) was not found.
    //
    // Note to server developers: if a request is denied for an entire class
    // of users, such as gradual feature rollout or undocumented whitelist,
    // `NOT_FOUND` may be used. If a request is denied for some users within
    // a class of users, such as user-based access control, `PERMISSION_DENIED`
    // must be used.
    //
    // HTTP Mapping: 404 Not Found
    NOT_FOUND = 5,

    // The entity that a client attempted to create (e.g., file or directory)
    // already exists.
    //
    // HTTP Mapping: 409 Conflict
    ALREADY_EXISTS = 6,

    // The caller does not have permission to execute the specified
    // operation. `PERMISSION_DENIED` must not be used for rejections
    // caused by exhausting some resource (use `RESOURCE_EXHAUSTED`
    // instead for those errors). `PERMISSION_DENIED` must not be
    // used if the caller can not be identified (use `UNAUTHENTICATED`
    // instead for those errors). This error code does not imply the
    // request is valid or the requested entity exists or satisfies
    // other pre-conditions.
    //
    // HTTP Mapping: 403 Forbidden
    PERMISSION_DENIED = 7,

    // The request does not have valid authentication credentials for the
    // operation.
    //
    // HTTP Mapping: 401 Unauthorized
    UNAUTHENTICATED = 16,

    // Some resource has been exhausted, perhaps a per-user quota, or
    // perhaps the entire file system is out of space.
    //
    // HTTP Mapping: 429 Too Many Requests
    RESOURCE_EXHAUSTED = 8,

    // The operation was rejected because the system is not in a state
    // required for the operation's execution.  For example, the directory
    // to be deleted is non-empty, an rmdir operation is applied to
    // a non-directory, etc.
    //
    // Service implementors can use the following guidelines to decide
    // between `FAILED_PRECONDITION`, `ABORTED`, and `UNAVAILABLE`:
    //  (a) Use `UNAVAILABLE` if the client can retry just the failing call.
    //  (b) Use `ABORTED` if the client should retry at a higher level
    //      (e.g., when a client-specified test-and-set fails, indicating the
    //      client should restart a read-modify-write sequence).
    //  (c) Use `FAILED_PRECONDITION` if the client should not retry until
    //      the system state has been explicitly fixed.  E.g., if an "rmdir"
    //      fails because the directory is non-empty, `FAILED_PRECONDITION`
    //      should be returned since the client should not retry unless
    //      the files are deleted from the directory.
    //
    // HTTP Mapping: 400 Bad Request
    FAILED_PRECONDITION = 9,

    // The operation was aborted, typically due to a concurrency issue such as
    // a sequencer check failure or transaction abort.
    //
    // See the guidelines above for deciding between `FAILED_PRECONDITION`,
    // `ABORTED`, and `UNAVAILABLE`.
    //
    // HTTP Mapping: 409 Conflict
    ABORTED = 10,

    // The operation was attempted past the valid range.  E.g., seeking or
    // reading past end-of-file.
    //
    // Unlike `INVALID_ARGUMENT`, this error indicates a problem that may
    // be fixed if the system state changes. For example, a 32-bit file
    // system will generate `INVALID_ARGUMENT` if asked to read at an
    // offset that is not in the range [0,2^32-1], but it will generate
    // `OUT_OF_RANGE` if asked to read from an offset past the current
    // file size.
    //
    // There is a fair bit of overlap between `FAILED_PRECONDITION` and
    // `OUT_OF_RANGE`.  We recommend using `OUT_OF_RANGE` (the more specific
    // error) when it applies so that callers who are iterating through
    // a space can easily look for an `OUT_OF_RANGE` error to detect when
    // they are done.
    //
    // HTTP Mapping: 400 Bad Request
    OUT_OF_RANGE = 11,

    // The operation is not implemented or is not supported/enabled in this
    // service.
    //
    // HTTP Mapping: 501 Not Implemented
    UNIMPLEMENTED = 12,

    // Internal errors.  This means that some invariants expected by the
    // underlying system have been broken.  This error code is reserved
    // for serious errors.
    //
    // HTTP Mapping: 500 Internal Server Error
    INTERNAL = 13,

    // The service is currently unavailable.  This is most likely a
    // transient condition, which can be corrected by retrying with
    // a backoff.
    //
    // See the guidelines above for deciding between `FAILED_PRECONDITION`,
    // `ABORTED`, and `UNAVAILABLE`.
    //
    // HTTP Mapping: 503 Service Unavailable
    UNAVAILABLE = 14,

    // Unrecoverable data loss or corruption.
    //
    // HTTP Mapping: 500 Internal Server Error
    DATA_LOSS = 15
}

export interface Agent {
    parent: string;
    displayName: string;
    defaultLanguageCode: string;
    supportedLanguageCodes?: string[];
    timeZone: string;
    description?: string;
    avatarUri?: string;
    enableLogging?: boolean;
    matchMode?: MatchMode;
    classificationThreshold?: number;
}

export interface Context {
    name: string;
    lifespanCount?: number;
    parameters?: any;
}

export interface EntityType {
    name: string;
    entities: EntitySynonyms[];
    displayName: string;
    kind: EntityKind;
    autoExpansionMode: EntityAutoExpansionMode;
}

export enum MatchMode {
    MATCH_MODE_UNSPECIFIED = "MATCH_MODE_UNSPECIFIED",
    MATCH_MODE_HYBRID = "MATCH_MODE_HYBRID",
    MATCH_MODE_ML_ONLY = "MATCH_MODE_ML_ONLY"
}

export interface Credentials {
    client_email: string;
    private_key: string;
}

export interface ClientOptions {
    credentials?: Credentials;
    email?: string;
    keyFilename?: string;
    port?: number;
    projectId?: string;
    promise?: PromiseConstructor;
    servicePath?: string;
}

export interface EntitySynonyms {
    synonyms: string[];
    value: string;
}

export enum EntityKind {
    KIND_MAP = "KIND_MAP",
    KIND_LIST = "KIND_LIST"
}

export enum EntityAutoExpansionMode {
    AUTO_EXPANSION_MODE_DEFAULT = "AUTO_EXPANSION_MODE_DEFAULT",
    AUTO_EXPANSION_MODE_UNSPECIFIED = "AUTO_EXPANSION_MODE_UNSPECIFIED"
}

export enum IntentView {
    INTENT_VIEW_UNSPECIFIED = "INTENT_VIEW_UNSPECIFIED",
    INTENT_VIEW_FULL = "INTENT_VIEW_FULL"
}

export interface Intent {
    name: string;
    displayName: string;
    webhookState: string;
    priority?: number;
    isFallback?: boolean;
    mlEnabled?: boolean;
    inputContextNames?: string[];
    events?: string[];
    trainingPhrases?: TrainingPhrase[];
    action?: string;
    outputContexts?: Context[];
    resetContexts?: boolean;
    parameters?: Parameter[];
    messages?: Message[];
    defaultResponsePlatforms?: string[];
    rootFollowupIntentName: string;
    parentFollowupIntentName: string;
    followupIntentInfo?: FollowupIntentInfo[];
}

export interface TrainingPhrase {
    name: string;
    type: string;
    parts: Part[];
    timesAddedCount?: number;
}

export interface Part {
    text: string;
    entityType?: string;
    alias?: string;
    userDefined?: boolean;
}

export interface Parameter {
    name: string;
    displayName: string;
    value?: string;
    defaultValue?: string;
    entityTypeDisplayName?: string;
    mandatory?: boolean;
    prompts?: string[];
    isList?: boolean;
}

export interface FollowupIntentInfo {
    followupIntentName: string;
    parentFollowupIntentName: string;
}

export interface Message {
    platform?: string;
    text?: Text;
    card?: Card;
    payload?: any;
}

export interface Text {
    text: string[];
}

export interface Card {
    title?: string;
    subtitle?: string;
    imageUri?: string;
    buttons?: Button[];
}

export interface Button {
    text?: string;
    postback?: string;
}

export interface EventInput {
    name: string;
    languageCode: string;
    parameters?: any;
}

export interface TextInput {
    text: string;
    languageCode: string;
}

export interface QueryInput {
    text?: TextInput;
    event?: EventInput;
}

export interface QueryParams {
    timeZone?: string;
    geoLocation?: LatLong;
    contexts?: Context[];
    resetContexts?: boolean;
    sessionEntityTypes?: SessionEntityType[];
    payload?: any;
}

export interface LatLong {
    latitude: number;
    longitude: number;
}

export interface SessionEntityType {
    name: string;
    entityOverrideMode: string;
    entities: Entity[];
}

export interface Entity {
    value: string;
    synonyms: string[];
}

export interface WebhookRequest {
    session: string;
    responseId: string;

    queryResult: QueryResult;
    originalDetectIntentRequest?: any;
}

export interface WebhookResponse {
    fulfillmentText?: string;
    fulfillmentMessages?: Message[];
    source?: string;
    payload?: any;
    outputContexts?: Context[];
    followupEventInput?: EventInput;
}
