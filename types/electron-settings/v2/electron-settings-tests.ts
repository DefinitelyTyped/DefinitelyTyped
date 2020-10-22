import settings = require('electron-settings');

function test_configure() {
    settings.configure({
        atomicSaving: false,
        prettify: true
    }) === undefined;
}

function test_defaults() {
    settings.defaults({
        a: 1,
        b: '',
        c: false,
        d: {
            d1: 'd1',
            d2: true
        },
        e: ['e1', 'e2']
    }) === undefined;
}

async function test_has() {
    await settings.has('a') === true;
}

function test_hasSync() {
    settings.hasSync('a') === true;
}

async function test_get() {
    await settings.get('b') === '';
}

function test_getSync() {
    settings.getSync('b') === '';
}

async function test_set() {
    await settings.set('c', true) === undefined;
}

function test_setSync() {
    settings.setSync('c', true) === undefined;
}

async function test_delete() {
    await settings.delete('d') === undefined;
}

function test_deleteSync() {
    settings.deleteSync('d') === undefined;
}

async function test_clear() {
    await settings.clear() === undefined;
}

function test_clearSync() {
    settings.clearSync() === undefined;
}

async function test_applyDefaults() {
    await settings.applyDefaults({ overwrite: true }) === undefined;
}

function test_applyDefaultsSync() {
    settings.applyDefaultsSync({ overwrite: true }) === undefined;
}

async function test_resetToDefaults() {
    await settings.resetToDefaults() === undefined;
}

function test_resetToDefaultsSync() {
    settings.resetToDefaultsSync() === undefined;
}

function test_observe() {
    const observer = settings.observe('b', evt => {
        if (evt.oldValue !== evt.newValue) {
            console.log(evt.newValue);
        }
    });

    observer.dispose();
}

function test_getSettingsFilePath() {
    settings.getSettingsFilePath() === __filename;
}

function test_on_create() {
    settings.on('create', pathToSettings => {
        pathToSettings === __dirname;
    }) === settings;
}

function test_on_write() {
    settings.on('write', () => {
        console.log();
    }) === settings;
}

function test_settings_type_annotation(s: typeof settings) {
    s.getSettingsFilePath();
}

function test_observer_type_annotation(observer: settings.Observer) {
    observer.dispose();
}

function test_options_type_annotation(options: settings.Options) {
    options.atomicSaving;
}

function test_applyDefaultOptions_type_annotation(options: settings.ApplyDefaultsOptions) {
    options.overwrite;
}

function test_changeEvent_type_annotation(e: settings.ChangeEvent) {
    e.oldValue === e.newValue;
}
