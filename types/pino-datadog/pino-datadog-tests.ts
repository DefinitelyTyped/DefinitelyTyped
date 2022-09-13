import * as datadog from 'pino-datadog';

const options: datadog.Options = {
    apiKey: 'api_key',
    size: 10,
    ddsource: 'source',
    ddtags: 'tags',
    service: 'service',
    hostname: 'host',
    keepMsg: true,
    eu: true,
};

// $ExpectType Promise<WritableStream>
datadog.createWriteStream(options);

// $ExpectType WritableStream
datadog.createWriteStreamSync(options);

// @ts-expect-error
datadog.createWriteStream();

// @ts-expect-error
datadog.createWriteStreamSync({});

// @ts-expect-error
datadog.createWriteStream(null);
