

import Boom = require('boom');

Boom.create(500, 'Internal server error', { timestamp: Date.now() });
Boom.wrap(new Error('test'), 400);
Boom.badRequest('Invalid cookies');
Boom.unauthorized() as Error;
