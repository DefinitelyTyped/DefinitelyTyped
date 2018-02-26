import mocha = require('mocha');
import chai = require('chai');
const should = chai.should();
import rewire = require('rewire');
import sinon = require('sinon');
import logger = require('hexo-log');

const _c = logger();
type HexoLogger = typeof _c;

describe('hexo-log', () => {
    const loggerModule = rewire<(options?: { name?: string; silent?: boolean; debug?: boolean; }) => HexoLogger>('./');

    it('add alias for levels', () => {
        const log = logger();

        log.d.should.eql(log.debug);
        log.i.should.eql(log.info);
        log.w.should.eql(log.warn);
        log.e.should.eql(log.error);
        log.log.should.eql(log.info);
    });

    it('default name is hexo', () => {
        const log = logger();

        log.fields.name.should.eql('hexo');
    });

    it('options.name', () => {
        const log = logger({ name: 'foo' });

        log.fields.name.should.eql('foo');
    });

    it('level should be trace if options.debug is true', () => {
        const log: any = logger({ debug: true });

        log.streams[0].level.should.eql(10);
    });

    it('should add file stream if options.debug is true', () => {
        const log: any = logger({ debug: true });

        log.streams[1].path.should.eql('debug.log');
    });

    it('should remove console stream if options.silent is true', () => {
        const log: any = logger({ silent: true });

        log.streams.length.should.eql(0);
    });

    it('should display time if options.debug is true', () => {
        const spy = sinon.spy();
        const now = new Date();

        loggerModule.__with__({
            process: {
                stdout: {
                    write: spy
                }
            }
        })(() => {
            sinon.useFakeTimers(now.valueOf());
            const log = loggerModule({ debug: true });
            log.info('test');
            sinon.restore(undefined);
        });

        spy.args[0][0].should.contain(now.toISOString().substring(11, 23));
    });

    it('should print error to process.stderr stream', () => {
        const spy = sinon.spy();

        loggerModule.__with__({
            process: {
                stderr: {
                    write: spy
                }
            }
        })(() => {
            const log = loggerModule();
            log.error('test');
        });

        spy.calledOnce.should.be.true;
    });
});
