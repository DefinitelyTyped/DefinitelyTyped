/// <reference path="node-config-manager.d.ts" />

import cfgManager = require('node-config-manager');
var options = {
    configDir: './config',
    env: 'test',
    camelCase: true
};

cfgManager.init(options);
cfgManager.addConfig('db')
    .addConfig('logger');

var appCfgByGetConfig = cfgManager.getConfig('app');

cfgManager.set('configDir', './config')
    .set('camelCase', true);

console.log(cfgManager.get('env'));
cfgManager.removeConfig('app')
    .removeConfig('logger');

console.log(cfgManager.count());

var appCfgByMethod = cfgManager.method.App();
