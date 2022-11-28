// $ExpectType (options: PluginOptions) => (config: NextConfig) => NextConfig & PluginOptions
import nextPWA = require('next-pwa');

// $ExpectType (config: NextConfig) => NextConfig & PluginOptions
const withPWA = nextPWA({
    dest: 'public',
});

const errorWithPWA = nextPWA({
    dest: 'public',
    // @ts-expect-error
    register: 'error',
});

// $ExpectType NextConfig & PluginOptions
const outputConfig = withPWA({});
