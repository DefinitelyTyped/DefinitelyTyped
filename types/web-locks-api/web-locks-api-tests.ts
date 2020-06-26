navigator.locks.query().then((query: LockManagerSnapshot) => query);

navigator.locks.request('test', async (lock: Lock) => {
    return lock;
});

navigator.locks.request('test', { ifAvailable: true, mode: 'exclusive', steal: false },
    async (lock: Lock | null) => {
        return lock;
    });
