// Type definitions for clevertap 1.2
// Project: https://github.com/CleverTap/clevertap-node
// Definitions by: Royson <https://github.com/droyson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];

type Callback = (res: any) => void;

type Identity = RequireAtLeastOne<
    {
        identity?: string;
        FBID?: string;
        GPID?: string;
        objectId?: string;
    },
    'identity' | 'FBID' | 'GPID' | 'objectId'
>;

type ProfileUploadData = {
    type: 'profile';
    profileData: Record<string, any>;
    ts?: number;
} & Identity;

type EventUploadData = {
    type: 'event';
    evtName: string;
    evtData: Record<string, any>;
    ts?: number;
} & Identity;

type UploadData = ProfileUploadData | EventUploadData;

interface UploadOptions {
    debug?: number;
    batchSize?: number;
}

interface Query {
    event_name: string;
    props?: Array<Record<string, any>>;
    from: number;
    to: number;
}

interface QueryOptions {
    debug?: number;
    batchSize?: number;
}

type ProfileIdentity = RequireAtLeastOne<{
    email?: string;
    identity?: string;
    objectId?: string;
}>;

type ProfileOptions = {
    debug?: number;
} & ProfileIdentity;

interface CustomControlGroup {
    type: 'custom';
    name: string;
}

interface CampaignControlGroup {
    type: 'campaign';
    percentage: number;
}

interface TargetBasePayload {
    name: string;
    devices: string[];
    when: string;
    content: {
        title: string;
        body: string;
        platform_specific?: Record<string, any>;
        replacements?: Record<string, any>;
    };
    ttl?: number;
    wzrk_cid?: string;
    wzrk_bc?: number;
    wzrk_bi?: string;
    system_control_group_include?: boolean;
    control_group?: CampaignControlGroup | CustomControlGroup;
    wzrk_acts?: string;
    respect_throttle?: boolean;
    send_to_all_devices?: boolean;
}

type TargetSegmentPayload = {
    segment: 'all';
} & TargetBasePayload;

type TargetWherePayload = {
    where: {
        event_name?: string;
        from?: number;
        to?: number;
        common_profile_properties?: {
            profile_fields: Array<Record<string, any>>;
        };
    };
} & TargetBasePayload;

type TargetCreatePayload = TargetWherePayload | TargetSegmentPayload;

interface TargetOptions {
    debug?: number;
}

interface CleverTap {
    upload(data: UploadData[], options?: UploadOptions, callback?: Callback): Promise<any>;
    profile(options: ProfileOptions, callback?: Callback): Promise<any>;
    profiles(query: Query, options?: QueryOptions, callback?: Callback): Promise<any>;
    events(query: Query, options?: QueryOptions, callback?: Callback): Promise<any>;
    targets(
        action: 'create' | 'estimate',
        payload: TargetCreatePayload,
        options?: TargetOptions,
        callback?: Callback,
    ): Promise<any>;
    targets(
        action: 'list',
        payload: { from?: number; to?: number },
        options?: TargetOptions,
        callback?: Callback,
    ): Promise<any>;
    targets(
        action: 'stop' | 'result',
        payload: { id: number },
        options?: TargetOptions,
        callback?: Callback,
    ): Promise<any>;
    readonly TARGET_CREATE: 'create';
    readonly TARGET_ESTIMATE: 'estimate';
    readonly TARGET_LIST: 'list';
    readonly TARGET_RESULT: 'result';
    readonly TARGET_STOP: 'stop';
    readonly TARGET_ACTIONS: ['create', 'estimate', 'list', 'result', 'stop'];
}

declare enum REGIONS {
    EUROPE = 'eu1',
    INDIA = 'in1',
    SINGAPORE = 'sg1',
    US = 'us1',
}

/**
 * @default region=REGIONS.EUROPE
 */
declare function init(accountId: string, accountPasscode: string, region?: REGIONS): CleverTap;

export {
    REGIONS,
    init,
    UploadData,
    UploadOptions,
    Query,
    QueryOptions,
    ProfileOptions,
    TargetCreatePayload,
    TargetOptions,
    Callback,
};
