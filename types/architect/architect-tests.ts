import * as architect from 'architect';

architect.loadConfig('./fake-path', (err, config) => {
    if (err) throw err;
    const myApp = architect.createApp(config, (err, app) => {
        if (err) throw err;
        console.log('App ready');
    });

    myApp.on('service', (name, service) => {
        console.log('Service registered %s', name);
    });

    myApp.on('plugin', (plugin) => {
        console.log('Plugin registered', plugin);
    });

    myApp.on('ready', (app) => {
        console.log('All plugins loaded');
    });
});
