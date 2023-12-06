interface IRealmType {
    AUDIO_WORKLET: "audio-worklet";
    DEDICATED_WORKER: "dedicated-worker";
    PAINT_WORKLET: "paint-worklet";
    SERVICE_WORKED: "service-worker";
    SHARED_WORKED: "shared-worker";
    WINDOW: "window";
    WORKER: "worker";
    WORKLET: "worklet";

    findByName(name):
        | "audio-worklet"
        | "dedicated-worker"
        | "paint-worklet"
        | "service-worker"
        | "shared-worker"
        | "window"
        | "worker"
        | "worklet"
        | null;
}

const RealmType: IRealmType;

declare class RealmInfo {
    constructor(realmId: string, origin: string, realmType: RealmType);

    static fromJson(input: any): RealmInfo;
}

declare class WindowRealmInfo extends RealmInfo {
    constructor(realmId: string, origin: string, realmType: RealmType, browsingContext: any, sandbox: boolean);
}

export { RealmInfo, RealmType };
