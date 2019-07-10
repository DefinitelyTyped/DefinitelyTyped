import logger = require('hexo-log');

declare function it(s: string, cb: () => void): void;

it('add alias for levels', () => {
    const log = logger();

    log.d === log.debug;
    log.i === log.info;
    log.w === log.warn;
    log.e === log.error;
    log.log === log.info;
});

it('default name is hexo', () => {
    const log = logger();

    log.fields.name === 'hexo';
});

it('options.name', () => {
    const log = logger({ name: 'foo' });
    log.fields === 'foo';
});

it('level should be trace if options.debug is true', () => {
    const log = logger({ debug: true });
    // TODO
    // log.streams[0].level.should.eql(10);
});

it('should add file stream if options.debug is true', () => {
    const log = logger({ debug: true });
    // TODO
    // log.streams[1].path === 'debug.log';
});

it('should remove console stream if options.silent is true', () => {
    const log = logger({ silent: true });
    // TODO
    // log.streams.length === 0;
});

it('should display time if options.debug is true', () => {
    const log = logger({ debug: true });
    log.info('test');
});

it('should print error to process.stderr stream', () => {
    const log = logger();
    log.error('test');
});
