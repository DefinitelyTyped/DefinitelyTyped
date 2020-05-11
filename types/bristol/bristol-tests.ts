import bristol = require('bristol');

bristol.addTarget('console');
bristol.info('Things be working.', {});

bristol.addTarget('console').withFormatter('human');
bristol.debug('Hello, world', { code: 404 });

const uhoh = {
  code: 500,
  error: {
    message: 'Something broke',
    reason: 'idk why though',
  },
};

bristol.error('Something went wrong', uhoh);
