import { GenerateSW, InjectManifest } from 'workbox-webpack-plugin';
import webpack = require('webpack');

// GenerateSW
{
  let plugin: GenerateSW;

  // No options object
  plugin = new GenerateSW();

  // Empty options object
  plugin = new GenerateSW({});

  // With all of the examples
  plugin = new GenerateSW({
    additionalManifestEntries: [
        'https://example.org/api',
    ],
    babelPresetEnvTargets: ['target1', 'target2'],
    swDest: 'custom-sw-name.js',
    cleanupOutdatedCaches: true,
    // *Only* include assets that belong to these chunks:
    chunks: ['chunk-name-1', 'chunk-name-2'],
    // Exclude assets that belong to these chunks:
    excludeChunks: ['chunk-name-1', 'chunk-name-2'],
    importScriptsViaChunks: ['sw'],
    // Only include HTML and JS assets when precaching:
    include: [/\.html$/, /\.js$/],
    // Exclude JPG and PNG assets from precaching:
    exclude: [/\.jpg$/, /\.png$/],
    inlineWorkboxRuntime: true,
    // Use a 'wb-assets' directory for Workbox's assets,
    // under the top-level output directory.
    importsDirectory: 'wb-assets',
    precacheManifestFilename: 'wb-manifest.[manifestHash].js',
    skipWaiting: true,
    sourcemap: true,
    clientsClaim: true,
    runtimeCaching: [{
      // Match any same-origin request that contains 'api'.
      urlPattern: /api/,
      // Apply a network-first strategy.
      handler: 'NetworkFirst',
      options: {
        // Fall back to the cache after 10 seconds.
        networkTimeoutSeconds: 10,
        // Use a custom cache name for this route.
        cacheName: 'my-api-cache',
        // Configure custom cache expiration.
        expiration: {
          maxEntries: 5,
          maxAgeSeconds: 60,
        },
        // Configure background sync.
        backgroundSync: {
          name: 'my-queue-name',
          options: {
            maxRetentionTime: 60 * 60,
          },
        },
        // Configure which responses are considered cacheable.
        cacheableResponse: {
          statuses: [0, 200],
          headers: {'x-test': 'true'},
        },
        // Configure the broadcast cache update plugin.
        broadcastUpdate: {
          channelName: 'my-update-channel',
        },
        // Add in any additional plugin logic you need.
        plugins: [
          { cacheDidUpdate: () => {/* custom plugin code */} },
        ],
        // matchOptions and fetchOptions are used to configure the handler.
        fetchOptions: {
          mode: 'no-cors',
        },
        matchOptions: {
          ignoreSearch: true,
        },
      },
    }, {
      // To match cross-origin requests, use a RegExp that matches
      // the start of the origin:
      urlPattern: new RegExp('^https://cors\.example\.com/'),
      handler: 'StaleWhileRevalidate',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    }],
    navigateFallback: '/app-shell',
    // Exempt all URLs that start with /_ or contain admin anywhere:
    navigateFallbackDenylist: [/^\/_/, /admin/],
    // Include URLs that start with /pages:
    navigateFallbackAllowlist: [/^\/pages/],
    navigationPreload: true,
    importScripts: ['push-notifications.abcd1234.js'],
    // This will ignore all parameters:
    ignoreURLParametersMatching: [/./],
    directoryIndex: 'index.html',
    cacheId: 'my-app',
    offlineGoogleAnalytics: true,
    // Treat all patterns as relative to the current directory:
    globDirectory: '.',
    globFollow: false,
    globIgnores: ['**/ignored.html'],
    globPatterns: ['dist/*.{js,png,html,css}'],
    globStrict: false,
    templatedUrls: {
      '/app-shell': [
        'dev/templates/app-shell.hbs',
        'dev/**/*.css',
        ],
      '/other-page': 'my-version-info',
    },
    // Increase the limit to 4mb:
    maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
    dontCacheBustURLsMatching: /\.\w{8}\./,
    mode: 'production',
    modifyURLPrefix: {
      // Remove a '/dist' prefix from the URLs:
      '/dist': ''
    },
    manifestTransforms: [
      // Basic transformation to remove a certain URL:
      (originalManifest) => {
        const manifest = originalManifest.filter(
          (entry) => entry.url !== 'ignored.html');
        // Optionally, set warning messages.
        const warnings = ['warning'];
        return {manifest, warnings: [] };
      }
    ]
  });
}

// InjectManifest
{
  let plugin: InjectManifest;

  // No options object
  plugin = new InjectManifest();

  // Minimal options object (swSrc is required)
  plugin = new InjectManifest({
    swSrc: 'service-worker.js'
  });

  // With all of the examples
  plugin = new InjectManifest({
    additionalManifestEntries: [
        'https://example.org/api',
    ],
    swDest: 'custom-sw-name.js',
    // *Only* include assets that belong to these chunks:
    chunks: ['chunk-name-1', 'chunk-name-2'],
    compileSrc: true,
    // Exclude assets that belong to these chunks:
    excludeChunks: ['chunk-name-1', 'chunk-name-2'],
    importScriptsViaChunks: ['sw'],
    // Only include HTML and JS assets when precaching:
    include: [/\.html$/, /\.js$/],
    // Exclude JPG and PNG assets from precaching:
    exclude: [/\.jpg$/, /\.png$/],
    // Use a 'wb-assets' directory for Workbox's assets,
    // under the top-level output directory.
    importsDirectory: 'wb-assets',
    precacheManifestFilename: 'wb-manifest.[manifestHash].js',
    swSrc: 'service-worker.js',
    // Treat all patterns as relative to the current directory:
    globDirectory: '.',
    globFollow: false,
    globIgnores: ['**/ignored.html'],
    globPatterns: ['dist/*.{js,png,html,css}'],
    globStrict: false,
    templatedUrls: {
      '/app-shell': [
        'dev/templates/app-shell.hbs',
        'dev/**/*.css',
        ],
      '/other-page': 'my-version-info',
    },
    // Increase the limit to 4mb:
    maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
    dontCacheBustURLsMatching: /\.\w{8}\./,
    mode: 'production',
    modifyURLPrefix: {
      // Remove a '/dist' prefix from the URLs:
      '/dist': ''
    },
    manifestTransforms: [
      // Basic transformation to remove a certain URL:
      (originalManifest) => {
        const manifest = originalManifest.filter(
          (entry) => entry.url !== 'ignored.html');
        // Optionally, set warning messages.
        const warnings = ['warning'];
        return {manifest, warnings};
      }
    ],
    webpackCompilationPlugins: [
        new webpack.DefinePlugin({
            REVISION__: JSON.stringify(process.env.COMMIT_SHA1)
        })
    ]
  });
}
