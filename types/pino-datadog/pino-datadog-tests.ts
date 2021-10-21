import * as datadog from 'pino-datadog';

const options: datadog.Options = {
    apiKey: 'api_key',
    size: 10,
    ddsource: 'source',
    ddtags: 'tags',
    service: 'service',
    hostname: 'host',
    keepMsg: true,
};

// $ExpectType Promise<WritableStream>
datadog.createWriteStream(options);

// $ExpectType WritableStream
datadog.createWriteStreamSync(options);

// $ExpectError
datadog.createWriteStream();

// $ExpectError
datadog.createWriteStreamSync({});

// $ExpectError
datadog.createWriteStream(null);
