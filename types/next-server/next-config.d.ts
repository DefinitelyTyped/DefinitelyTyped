/**
 * Next.js config schema.
 * https://github.com/zeit/next.js/blob/7.0.0/server/config.js#L9
 */
export interface NextConfig {
    webpack?: any;
    webpackDevMiddleware?: any;
    poweredByHeader?: boolean;
    distDir?: string;
    assetPrefix?: string;
    configOrigin?: string;
    useFileSystemPublicRoutes?: boolean;
    generateBuildId?: () => string;
    generateEtags?: boolean;
    pageExtensions?: string[];
    publicRuntimeConfig?: object;
    serverRuntimeConfig?: object;

    // Plugin can define their own keys.
    [key: string]: any;
}

export default function(phase: string, dir: string, customConfig?: NextConfig): NextConfig;
