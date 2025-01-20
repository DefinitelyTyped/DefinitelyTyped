interface SyncEventInit extends ExtendableEventInit {
    lastChance?: boolean;
    tag: string;
}

// https://wicg.github.io/background-sync/spec/#syncevent
interface SyncEvent extends ExtendableEvent {
    readonly lastChance: boolean;
    readonly tag: string;
}

declare var SyncEvent: { prototype: SyncEvent; new(type: string, init?: SyncEventInit): SyncEvent };

// https://wicg.github.io/background-sync/spec/#syncmanager
interface SyncManager {
    register: (tag: string) => Promise<undefined>;
    getTags: () => Promise<string[]>;
}

declare var SyncManager: {
    prototype: SyncManager;
    new(): SyncManager;
};

interface ServiceWorkerRegistration {
    // https://wicg.github.io/background-sync/spec/#dom-serviceworkerregistration-sync
    readonly sync: SyncManager;
}
