import * as Koji from 'koji-tools';

Koji.watch();
Koji.pageLoad();
Koji.request({ url: 'www.test.org' });
Koji.pwaPrompt();
const myConfig = Koji.config;
const myRoutes = Koji.routes;
const myPwaInstaller = Koji.pwa;
Koji.on('test', () => 'Hello, world!');
const mySecret = Koji.resolveSecret('verySecretKey');
