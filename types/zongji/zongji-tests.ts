import ZongJi = require('zongji');

const zongji = new ZongJi({
    host: 'localhost',
    port: 3306,
    user: 'user',
    password: 'pass',
});

zongji.on('ready', () => {});

zongji.on('binlog', event => {
    event.dump();
    const eventName: string = event.getEventName();
});

zongji.on('error', error => {
    const fatal: boolean = error.fatal;
});

zongji.on('stopped', () => {});

zongji.start({
    excludeEvents: ['deleterows', 'format', 'intvar'],
    includeEvents: ['query'],
    serverId: 10,
    includeSchema: { schema1: true, schema2: ['someItem'] },
    excludeSchema: { schema1: true, schema2: ['someItem'] },
    startAtEnd: true,
});

zongji.stop();
