import beaver = require('beaver-logger');

// $ExpectType LoggerType
let $logger = beaver.Logger({ url: '/my/logger/url' });

// $ExpectType LoggerType
$logger.error('something_went_wrong', { error: 'some error' });

// $ExpectType LoggerType
$logger.info('info', { msg: 'some info' });

// $ExpectType LoggerType
$logger.debug('debug', { msg: 'some debug' });

// $ExpectType LoggerType
$logger.warn('warn', { msg: 'some warn' });

// $ExpectType LoggerType
$logger.track({ msg: 'some info' });

// $ExpectType LoggerType
$logger.addMetaBuilder(() => {
    return {
        current_page: 'page',
    };
});

// $ExpectType LoggerType
$logger.addPayloadBuilder(() => {
    return {
        performance_ts: '0',
    };
});

// $ExpectType LoggerType
$logger.addTrackingBuilder(() => {
    return {
        pageLoadTime: '0',
    };
});

// $ExpectType LoggerType
$logger.addHeaderBuilder(() => {
    return {
        'x-csrf-token': '0',
    };
});

// $ExpectType ZalgoPromise<void>
$logger.flush();

// $ExpectType ZalgoPromise<void>
$logger.immediateFlush();

// $ExpectType LoggerType
$logger = beaver.Logger({
    url: '/my/logger/url',
    prefix: 'myapp',
    logLevel: beaver.LOG_LEVEL.WARN,
    flushInterval: 60 * 1000,
    enableSendBeacon: true,
});

// $ExpectType LoggerType
$logger = beaver.Logger({
    url: '/my/logger/url',
    prefix: 'myapp',
    logLevel: beaver.LOG_LEVEL.WARN,
    flushInterval: 60 * 1000,
    enableSendBeacon: true,
    amplitudeApiKey: '',
});

// $ExpectType LoggerType
$logger = beaver.Logger({
    url: '/my/logger/url',
    prefix: 'myapp',
    logLevel: 'warn',
    flushInterval: 60 * 1000,
    enableSendBeacon: true,
    amplitudeApiKey: '',
});

$logger = beaver.Logger({
    url: '/my/logger/url',
    prefix: 'myapp',
    logLevel: 'Warn', // $ExpectError
    flushInterval: 60 * 1000,
    enableSendBeacon: true,
    amplitudeApiKey: '',
});

// $ExpectType Transport
beaver.getHTTPTransport();

// $ExpectType boolean
beaver.canUseSendBeacon({
    headers: {
        'x-csrf-token': '0',
    },
    enableSendBeacon: true,
});

// $ExpectType boolean
beaver.isAmplitude('https://api2.amplitude.com/2/httpapi');

// $ExpectType void
beaver.extendIfDefined({ 'x-csrf-token': '0' }, { 'x-csrf-token': '0' });

// $ExpectType boolean
beaver.sendBeacon({
    win: window,
    url: 'https://api2.amplitude.com/2/httpapi',
    data: JSON.parse(''),
    useBlob: false,
});
