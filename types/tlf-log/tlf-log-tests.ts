// Author: thislooksfun <https://github.com/thislooksfun>

import * as log from 'tlf-log';

function testFatal() {
    log.fatal('Oh no!');
    log.fatal(12);
    log.fatal({ hmm: 'mmmmm' });
    log.fatal();
}
function testFatal_() {
    log.fatal_('Oh no!');
    log.fatal_(12);
    log.fatal_({ hmm: 'mmmmm' });
    log.fatal_();
}
function testError() {
    log.error('Oh no!');
    log.error(12);
    log.error({ hmm: 'mmmmm' });
    log.error();
}
function testError_() {
    log.error_('Oh no!');
    log.error_(12);
    log.error_({ hmm: 'mmmmm' });
    log.error_();
}
function testWarn() {
    log.warn('Oh no!');
    log.warn(12);
    log.warn({ hmm: 'mmmmm' });
    log.warn();
}
function testWarn_() {
    log.warn_('Oh no!');
    log.warn_(12);
    log.warn_({ hmm: 'mmmmm' });
    log.warn_();
}
function testInfo() {
    log.info('Oh no!');
    log.info(12);
    log.info({ hmm: 'mmmmm' });
    log.info();
}
function testInfo_() {
    log.info_('Oh no!');
    log.info_(12);
    log.info_({ hmm: 'mmmmm' });
    log.info_();
}
function testTrace() {
    log.trace('Oh no!');
    log.trace(12);
    log.trace({ hmm: 'mmmmm' });
    log.trace();
}
function testTrace_() {
    log.trace_('Oh no!');
    log.trace_(12);
    log.trace_({ hmm: 'mmmmm' });
    log.trace_();
}
function testDebug() {
    log.debug('Oh no!');
    log.debug(12);
    log.debug({ hmm: 'mmmmm' });
    log.debug();
}
function testDebug_() {
    log.debug_('Oh no!');
    log.debug_(12);
    log.debug_({ hmm: 'mmmmm' });
    log.debug_();
}

function test_setLevel() {
    log._setLevel('debug');
}

function test_addLevel() {
    log._addLevel('new', { before: 'info' });
    log._addLevel('new', { before: 'info', afterLog: () => {} });
    log._addLevel('new', { after: 'info' });
    log._addLevel('new', { after: 'info', afterLog: () => {} });
}

function test_indent() {
    log._indent();
}

function test_deindent() {
    log._deindent();
}

function test_prefix() {
    log._prefix('>> ');
}

function test_deprefix() {
    log._deprefix();
}
