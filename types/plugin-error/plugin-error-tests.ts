import * as PluginError from 'plugin-error';

let e: PluginError;

// string message
e = new PluginError('my-plugin', 'message');
e = new PluginError('my-plugin', 'message', { showProperties: false, showStack: false });
e = new PluginError('my-plugin', { showProperties: false, showStack: false, message: 'message' });
e = new PluginError({ showProperties: false, showStack: false, message: 'message', plugin: 'my-plugin' });

// error instead of message
e = new PluginError('my-plugin', new Error('message'));
e = new PluginError('my-plugin', new Error('message'), { showProperties: false, showStack: false });
e = new PluginError('my-plugin', { showProperties: false, showStack: false, message: new Error('message') });
e = new PluginError({ showProperties: false, showStack: false, message: new Error('message'), plugin: 'my-plugin' });

// without non-mandatory options
e = new PluginError('my-plugin', 'message', {});
e = new PluginError('my-plugin', { message: 'message' });
e = new PluginError({ message: 'message', plugin: 'my-plugin' });

// check Error base class
const f: Error = e;
