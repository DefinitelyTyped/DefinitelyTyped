import ElectronConfig = require('electron-config');

new ElectronConfig({
    defaults: {},
});

new ElectronConfig({
    name: 'myConfiguration',
});

const electronConfig = new ElectronConfig();

electronConfig.set('foo', 'bar');
electronConfig.set({
    foo: 'bar',
    foo2: 'bar2',
});
electronConfig.delete('foo');
electronConfig.get('foo');
electronConfig.has('foo');
electronConfig.clear();
electronConfig.size;
electronConfig.store;

electronConfig.store = {
    foo: 'bar',
};

electronConfig.path;
