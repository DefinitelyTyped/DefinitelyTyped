/// <reference path="../es6-promise/es6-promise.d.ts"/>
/// <reference path="freedom.d.ts" />

var freedomModule :freedom.FreedomInModuleEnv;
var freedomCore :freedom.FreedomInCoreEnv;

var parentModule :freedom.ParentModuleThing = freedomModule();
parentModule.on('message', (x :string) => {
});

var coreInModule :freedom.Core = freedomModule['core']();
coreInModule.getLogger('tag').then((logger :freedom.Logger) => {
  logger.log('message');
});

var freedomConsole :freedom.Console.Console = freedomModule['core.console']();
var doneLogging :Promise<void> = freedomConsole.log('source', 'message');

freedomCore('freedom-module.json', {
  'logger': 'loggingprovider.json',
  'debug': 'log'
}).then((moduleFactory) => {
  moduleFactory.close();
});
