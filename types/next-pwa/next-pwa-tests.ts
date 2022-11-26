import pluginPWA = require('next-pwa');

// $ExpectType (config: NextConfig) => NextConfig & PWAConfig
const withPWA = pluginPWA({
    dest: 'public',
});

const errorWithPWA = pluginPWA({
    dest: 'public',
    // @ts-expect-error
    register: 'error',
});

// $ExpectType NextConfig & PWAConfig
const outputConfig = withPWA({});
