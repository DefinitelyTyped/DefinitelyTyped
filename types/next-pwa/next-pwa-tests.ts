// $ExpectType (config: PWAConfig) => (config: NextConfig) => NextConfig & PWAConfig
import nextPWA = require("next-pwa");
import type { NextConfig } from "next";

// $ExpectType (config: NextConfig) => NextConfig & PWAConfig
const withPWA = nextPWA({
    dest: "public",
});

const nextConfig: NextConfig = {
    // @ts-expect-error
    env: null,
};

// $ExpectType NextConfig & PWAConfig
const outputConfig = withPWA(nextConfig);

const errorWithPWA = nextPWA({
    dest: "public",
    // @ts-expect-error
    register: "error",
});

const webpackConfigOptions: nextPWA.WebpackConfigOptions = {
    // @ts-expect-error
    swDest: true,
};
