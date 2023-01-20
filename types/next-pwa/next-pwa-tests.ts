// $ExpectType (config: PWAConfig) => (config: NextConfig) => NextConfig & PWAConfig
import nextPWA = require('next-pwa');

// $ExpectType (config: NextConfig) => NextConfig & PWAConfig
const withPWA = nextPWA({
    dest: 'public',
});

// $ExpectType NextConfig & PWAConfig
const outputConfig = withPWA({});

const errorWithPWA = nextPWA({
    dest: 'public',
    // @ts-expect-error
    register: 'error',
});

const webpackConfigOptions: nextPWA.WebpackConfigOptions = {
    // @ts-expect-error
    swDest: true,
};
