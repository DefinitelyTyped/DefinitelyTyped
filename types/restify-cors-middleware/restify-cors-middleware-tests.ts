import corsMiddleware = require('restify-cors-middleware');

const options: corsMiddleware.Options = {
  preflightMaxAge: 5,
  origins: ['http://api.myapp.com', 'http://web.myapp.com'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
};

const cors: corsMiddleware.CorsMiddleware = corsMiddleware(options);
