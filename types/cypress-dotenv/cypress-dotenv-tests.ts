import dotenvPlugin = require('cypress-dotenv');

const cypressConfigExample = {
    baseUrl: 'http://example.com',
    env: {},
    viewportWidth: 800,
    viewportHeight: 600,
};

interface CypressConfiguration {
    baseUrl: string;
    port: number;
}

dotenvPlugin({});

dotenvPlugin(cypressConfigExample, { path: '.env' });

dotenvPlugin({}, { path: '.env' }, false);

// takes explicit configuration type

// $ExpectType EnhancedConfig<CypressConfiguration>
let enhancedConfig = dotenvPlugin<CypressConfiguration>(
    { baseUrl: 'http://example.com', port: 80 },
    { path: '.env' },
    false,
);
enhancedConfig.baseUrl; // $ExpectType string
enhancedConfig.port; // $ExpectType number
enhancedConfig.env?.BASE_URL;

// takes implicit configuration types
// $ExpectType EnhancedConfig<{ baseUrl: string; port: number; }>
enhancedConfig = dotenvPlugin({ baseUrl: 'http://example.com', port: 80 }, { path: '.env' });
enhancedConfig.baseUrl; // $ExpectType string
enhancedConfig.port; // $ExpectType number
const url = enhancedConfig.env?.BASE_URL as string;
