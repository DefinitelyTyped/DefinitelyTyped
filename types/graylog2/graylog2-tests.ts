import graylog2, { graylog, GraylogConfig, GraylogLogMethod } from 'graylog2';

const fullGraylogConfig: GraylogConfig = {
    bufferSize: 1000,
    deflate: 'always',
    hostname: 'LocalMachine',
    facility: 'Developers, Inc.',
    servers: [{ host: 'graylog-host', port: 12201 }],
};

const shortGraylogConfig: GraylogConfig = {
    servers: [{ host: 'graylog-host', port: 12201 }],
};

// $ExpectType graylog
new graylog2.graylog(fullGraylogConfig);

// $ExpectType graylog
const logger = new graylog(shortGraylogConfig);

// graylog.log method
logger.log("What we've got here is...failure to communicate");
logger.log(
    "What we've got here is...failure to communicate",
    "Some men you just can't reach. So you get what we had here last week, which is the way he wants it... well, he gets it. I don't like it any more than you men.",
);
logger.log('short message', { cool: 'beans' });
logger.log(
    "What we've got here is...failure to communicate",
    "Some men you just can't reach. So you get what we had here last week, which is the way he wants it... well, he gets it. I don't like it any more than you men.",
    { cool: 'beans' },
);
logger.log(
    "What we've got here is...failure to communicate",
    "Some men you just can't reach. So you get what we had here last week, which is the way he wants it... well, he gets it. I don't like it any more than you men.",
    { cool: 'beans' },
    Date.now(),
);
logger.log('short message', undefined, {
    type: 'meta with properties',
});
logger.log('short message', undefined, { cool: 'beans' }, Date.now());
logger.log('short message', undefined, undefined, Date.now());
logger.log(new Error('NotFoundError'));
logger.log(new Error('NotFoundError'), undefined, { cool: 'beans' }, Date.now());
logger.log(new Error('NotFoundError'), undefined, undefined, Date.now());

const graylogLogMethods: GraylogLogMethod[] = [
    'emergency',
    'alert',
    'critical',
    'error',
    'warning',
    'warn',
    'notice',
    'info',
    'debug',
];

for (const method of graylogLogMethods) {
    logger[method]("What we've got here is...failure to communicate");
    logger[method](
        "What we've got here is...failure to communicate",
        "Some men you just can't reach. So you get what we had here last week, which is the way he wants it... well, he gets it. I don't like it any more than you men.",
    );
    logger[method]('short message', { cool: 'beans' });
    logger[method](
        "What we've got here is...failure to communicate",
        "Some men you just can't reach. So you get what we had here last week, which is the way he wants it... well, he gets it. I don't like it any more than you men.",
        {
            type: 'meta with properties',
        },
    );
    logger[method](
        "What we've got here is...failure to communicate",
        "Some men you just can't reach. So you get what we had here last week, which is the way he wants it... well, he gets it. I don't like it any more than you men.",
        { cool: 'beans' },
        Date.now(),
    );
    logger[method]('short message', undefined, { cool: 'beans' });
    logger[method]('short message', undefined, { cool: 'beans' }, Date.now());
    logger[method]('short message', undefined, undefined, Date.now());
    logger[method](new Error('NotFoundError'));
    logger[method](new Error('NotFoundError'), undefined, { cool: 'beans' }, Date.now());
    logger[method](new Error('NotFoundError'), undefined, undefined, Date.now());
}

logger.on('error', error => {
    throw new Error(`Error while trying to write to graylog2: ${error.message}`);
});

logger.close(error => {
    if (error != null) throw error;
});

logger.close();
