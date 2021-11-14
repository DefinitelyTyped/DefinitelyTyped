const syncEvent: SyncEvent = new SyncEvent('event');
const syncEventInit: SyncEventInit = { lastChance: true, tag: 'abc' };
const syncEvent2 = new SyncEvent('event', syncEventInit);
const syncEvent3 = new SyncEvent('event', { tag: 'abc' });

const syncManager: SyncManager = {
    register: (tag: string) => Promise.resolve(undefined),
    getTags: () => Promise.resolve(['a', 'b', 'c']),
};
const syncManager2: SyncManager = new SyncManager();

function foo(reg: ServiceWorkerRegistration): void {
    const a: Promise<undefined> = reg.sync.register('abc');
    const b: Promise<string[]> = reg.sync.getTags();
}
