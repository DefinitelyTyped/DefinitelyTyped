import djv = require('djv');

const env = djv({
    version: 'draft-06',
    formats: {},
    errorHandler: () => {},
});

new djv({ version: 'draft-04' });

env.addSchema('test');
env.addFormat('uri-reference', () => true);
