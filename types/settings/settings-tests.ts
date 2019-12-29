import Settings = require('settings');

// works without options
new Settings('foo');

// works with path to module containing settings
const settings = new Settings('./path/to/my/config');
// any prop is accessible on returned value
settings.hello = 'world';
const foo = settings.bar;

// works with settings object
const settings2 = new Settings({
    common: {setting: 'mySetting'}, production: {
        hello: 'bar'
    }
});
settings2.hello = 'world';

// allows for forceEnv in settings object
const settings3 = new Settings({
    common: {},
    forceEnv: 'production'
});

// allows options
const settings4 = new Settings('./path/to/my/settings', {
    root: 'someRoot',
    env: 'development',
    defaults: {
        someSetting: 'settingValue'
    }
});
