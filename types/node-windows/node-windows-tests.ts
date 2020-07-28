import { Service, EventLogger, LogMode } from 'node-windows';

const log = new EventLogger({
    source: 'node-windows',
});

const service = new Service({
    name: 'test',
    script: './test-script.js',
    logmode: LogMode.rotate,
});

service.on('install', () => log.info('Service Installed', 1000));
service.on('alreadyinstalled', () => log.error('Service already installed', 2000));
service.on('uninstall', () => log.info('Service uninstalled', 1001));
service.on('alreadyuninstalled', () => log.error('Service already uninstalled', 2001));
service.on('start', () => log.info('Service started', 1002));
service.on('stop', () => log.info('Service stopped', 1003));
service.on('invalidinstallation', () => log.error('Invalid Installation', 2002));
service.on('error', err => log.error(`Error Encountered: ${err}`, 2003));

service.install();
service.start();
service.restart();
service.stop();
service.uninstall();
