import dotenvPlugin = require('cypress-dotenv');

dotenvPlugin({});

dotenvPlugin({}, { path: '.env' });

dotenvPlugin({}, { path: '.env' }, false);

interface CypressConfiguration {
    baseUrl: string;
    port: number;
}

// $ExpectType CypressConfiguration
dotenvPlugin<CypressConfiguration>({ baseUrl: 'http://example.com', port: 80 }, { path: '.env' }, false);
