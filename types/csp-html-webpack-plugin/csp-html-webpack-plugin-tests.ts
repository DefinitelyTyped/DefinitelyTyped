import HtmlWebpackPlugin = require('html-webpack-plugin');
import CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

import { Configuration as WebpackConfiguration } from 'webpack';

// Should accept various CSP directive types.
const policy: CspHtmlWebpackPlugin.Policy = {
  'base-uri': "'self'",
  'object-src': "'none'",
  'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
  'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
  'block-all-mixed-content': '',
  'report-uri': 'http://reportcollector.example.com/collector.cgi',
};

// Should allow no parameters.
new CspHtmlWebpackPlugin();

// Should allow empty object parameters.
new CspHtmlWebpackPlugin({}, {});

// Should allow full parameters.
new CspHtmlWebpackPlugin(policy, {
  enabled: true,
  hashingMethod: 'sha256',
  hashEnabled: {
    'script-src': true,
    'style-src': true,
  },
  nonceEnabled: {
    'script-src': true,
    'style-src': true,
  },
});

const optsWithEnableFunc: CspHtmlWebpackPlugin.AdditionalOptions = {
  enabled(htmlPluginData) {
    // $ExpectType string
    htmlPluginData.outputName;
    // $ExpectType string
    htmlPluginData.html;

    if (htmlPluginData.plugin.apply as any) {
    }

    return true;
  },
  hashEnabled: {
    'script-src': true,
    'style-src': true,
  },
  nonceEnabled: {
    'script-src': true,
    'style-src': true,
  },
};

// Can be added to Webpack configuration.
const webpackConfig: WebpackConfiguration = {
  plugins: [new HtmlWebpackPlugin(), new CspHtmlWebpackPlugin()],
};

// HtmlWebpackPlugin augmentations should work
new HtmlWebpackPlugin({
  // Original options should be present.
  filename: 'my_index.html',
  template: 'src/static/index.ejs',
  // Added options should be present.
  cspPlugin: {
    enabled: true,
    policy: {
      'base-uri': "'self'",
      'object-src': "'none'",
      'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
      'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
    },
    hashingMethod: 'sha384',
    hashEnabled: {
      'script-src': true,
      'style-src': true,
    },
    nonceEnabled: {
      'script-src': true,
      'style-src': true,
    },
  },
});
