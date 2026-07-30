import CspHtmlWebpackPlugin from "csp-html-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { Compiler, Configuration as WebpackConfiguration } from "webpack";

// Should accept various CSP directive types.
const policy: CspHtmlWebpackPlugin.Policy = {
    "base-uri": "'self'",
    "object-src": "'none'",
    "script-src": ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
    "style-src": ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
    "block-all-mixed-content": "",
    "report-uri": "http://reportcollector.example.com/collector.cgi",
};

// Should allow no parameters.
new CspHtmlWebpackPlugin();

// Should allow empty object parameters.
new CspHtmlWebpackPlugin({}, {});

// Should allow full parameters.
new CspHtmlWebpackPlugin(policy, {
    enabled: true,
    hashingMethod: "sha256",
    hashEnabled: {
        "script-src": true,
        "style-src": true,
    },
    nonceEnabled: {
        "script-src": true,
        "style-src": true,
    },
    processFn(builtPolicy, htmlPluginData, $, compilation) {
        // $ExpectType string
        builtPolicy;
        // $ExpectType string
        htmlPluginData.html;
        // $ExpectType string
        htmlPluginData.outputName;
        htmlPluginData.plugin satisfies HtmlWebpackPlugin;
        // $ExpectType CheerioAPI
        $;
        // $ExpectType { (this: CheerioAPI, options?: CheerioOptions | undefined): string; (this: CheerioAPI, dom?: BasicAcceptedElems<AnyNode> | undefined, options?: CheerioOptions | undefined): string; }
        $.html;
        // $ExpectType (this: CheerioAPI, dom?: BasicAcceptedElems<AnyNode> | undefined) => string
        $.xml;
        // $ExpectType Compilation
        compilation;
        // $ExpectType any[]
        compilation.errors;
    },
});

const optsWithEnableFunc: CspHtmlWebpackPlugin.AdditionalOptions = {
    enabled(htmlPluginData) {
        // $ExpectType string
        htmlPluginData.outputName;
        // $ExpectType string
        htmlPluginData.html;

        // $ExpectType (compiler: Compiler) => void
        htmlPluginData.plugin.apply;

        return true;
    },
    hashEnabled: {
        "script-src": true,
        "style-src": true,
    },
    nonceEnabled: {
        "script-src": true,
        "style-src": true,
    },
    processFn(builtPolicy, htmlPluginData, $, compilation) {
        // $ExpectType string
        builtPolicy;
        // $ExpectType string
        htmlPluginData.html;
        // $ExpectType string
        htmlPluginData.outputName;
        htmlPluginData.plugin satisfies HtmlWebpackPlugin;
        // $ExpectType CheerioAPI
        $;
        // $ExpectType { (this: CheerioAPI, options?: CheerioOptions | undefined): string; (this: CheerioAPI, dom?: BasicAcceptedElems<AnyNode> | undefined, options?: CheerioOptions | undefined): string; }
        $.html;
        // $ExpectType (this: CheerioAPI, dom?: BasicAcceptedElems<AnyNode> | undefined) => string
        $.xml;
        // $ExpectType Compilation
        compilation;
        // $ExpectType any[]
        compilation.errors;
    },
};

// Can be added to Webpack configuration.
const webpackConfig: WebpackConfiguration = {
    plugins: [new HtmlWebpackPlugin(), new CspHtmlWebpackPlugin()],
};

// HtmlWebpackPlugin augmentations should work
new HtmlWebpackPlugin({
    // Original options should be present.
    filename: "my_index.html",
    template: "src/static/index.ejs",
    // Added options should be present.
    cspPlugin: {
        enabled: true,
        policy: {
            "base-uri": "'self'",
            "object-src": "'none'",
            "script-src": ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
            "style-src": ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
        },
        hashingMethod: "sha384",
        hashEnabled: {
            "script-src": true,
            "style-src": true,
        },
        nonceEnabled: {
            "script-src": true,
            "style-src": true,
        },
        processFn(builtPolicy, htmlPluginData, $, compilation) {
            // $ExpectType string
            builtPolicy;
            // $ExpectType string
            htmlPluginData.html;
            // $ExpectType string
            htmlPluginData.outputName;
            htmlPluginData.plugin satisfies HtmlWebpackPlugin;
            // $ExpectType CheerioAPI
            $;
            // $ExpectType { (this: CheerioAPI, options?: CheerioOptions | undefined): string; (this: CheerioAPI, dom?: BasicAcceptedElems<AnyNode> | undefined, options?: CheerioOptions | undefined): string; }
            $.html;
            // $ExpectType (this: CheerioAPI, dom?: BasicAcceptedElems<AnyNode> | undefined) => string
            $.xml;
            // $ExpectType Compilation
            compilation;
            // $ExpectType any[]
            compilation.errors;
        },
    },
    xhtml: false,
});
