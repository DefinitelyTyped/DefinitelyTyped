// Type definitions for non-npm package dom-background-sync-browser 0.0
// Project: https://wicg.github.io/background-sync/spec/#api-description
// Definitions by: Hana Joo <https://github.com/h-joo>
//                 Jan Kuehle <https://github.com/frigus02>
//                 Martin Probst <https://github.com/mprobst>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

interface SyncEventInit extends ExtendableEventInit {
    lastChance?: boolean;
    tag: string;
}

// https://wicg.github.io/background-sync/spec/#syncevent
interface SyncEvent extends ExtendableEvent {
    readonly lastChance: boolean;
    readonly tag: string;
}

declare var SyncEvent: { prototype: SyncEvent; new (type: string, init?: SyncEventInit): SyncEvent };

// https://wicg.github.io/background-sync/spec/#syncmanager
interface SyncManager {
    register: (tag: string) => Promise<undefined>;
    getTags: () => Promise<string[]>;
}

declare var SyncManager: {
    prototype: SyncManager;
    new (): SyncManager;
};

interface ServiceWorkerRegistration {
    // https://wicg.github.io/background-sync/spec/#dom-serviceworkerregistration-sync
    readonly sync: SyncManager;
}
