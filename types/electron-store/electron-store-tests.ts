import ElectronStore = require('electron-store');

new ElectronStore({
    defaults: {}
});

new ElectronStore({
    name: 'myConfiguration',
    cwd: 'unicorn'
});

const electronStore = new ElectronStore();

electronStore.set('foo', 'bar');
electronStore.set({
    foo: 'bar',
    foo2: 'bar2'
});
electronStore.delete('foo');
electronStore.get('foo');
electronStore.get('foo', 42);
electronStore.has('foo');
electronStore.clear();

electronStore.openInEditor();

electronStore.size;
electronStore.store;

electronStore.store = {
    foo: 'bar'
};

electronStore.path;

interface SampleStore {
    enabled: boolean;
    interval: number;
}

const typedElectronStore = new ElectronStore<SampleStore>({
    defaults: {
        enabled: true,
        interval: 30000,
    },
});

const interval: number = typedElectronStore.get('interval');
const enabled = false;
typedElectronStore.set('enabled', enabled);
typedElectronStore.set({
    enabled: true,
    interval: 10000,
});

const offDidChange = typedElectronStore.onDidChange("enabled", (n: boolean | undefined, p: boolean | undefined) => {});

offDidChange();
