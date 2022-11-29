// $ExpectType (config: PWAConfig) => (config: NextConfig) => NextConfig & PWAConfig
import nextPWA = require('next-pwa');

// $ExpectType (config: NextConfig) => NextConfig & PWAConfig
const withPWA = nextPWA({
    dest: 'public',
});

const errorWithPWA = nextPWA({
    dest: 'public',
    // @ts-expect-error
    register: 'error',
});

// $ExpectType NextConfig & PWAConfig
const outputConfig = withPWA({});
