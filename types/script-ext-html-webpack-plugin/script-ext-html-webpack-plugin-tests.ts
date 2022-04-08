import ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
import webpack = require("webpack");

new ScriptExtHtmlWebpackPlugin();
new ScriptExtHtmlWebpackPlugin({});

new ScriptExtHtmlWebpackPlugin().apply(new webpack.Compiler());

new ScriptExtHtmlWebpackPlugin({
    inline: "string",
    sync: "string",
    async: "string",
    defer: "string",
    module: "string",
    preload: "string",
    prefetch: "string"
});

new ScriptExtHtmlWebpackPlugin({
    inline: ["array"],
    sync: ["array"],
    async: ["array"],
    defer: ["array"],
    module: ["array"],
    preload: ["array"],
    prefetch: ["array"]
});

new ScriptExtHtmlWebpackPlugin({
    inline: /regexp/,
    sync: /regexp/,
    async: /regexp/,
    defer: /regexp/,
    module: /regexp/,
    preload: /regexp/,
    prefetch: /regexp/
});

new ScriptExtHtmlWebpackPlugin({
    inline: { test: "string" },
    sync: { test: "string" },
    async: { test: "string" },
    defer: { test: "string" },
    module: { test: "string" },
    preload: { test: "string" },
    prefetch: { test: "string" }
});

new ScriptExtHtmlWebpackPlugin({
    inline: { test: ["array"] },
    sync: { test: ["array"] },
    async: { test: ["array"] },
    defer: { test: ["array"] },
    module: { test: ["array"] },
    preload: { test: ["array"] },
    prefetch: { test: ["array"] }
});

new ScriptExtHtmlWebpackPlugin({
    inline: { test: /regexp/ },
    sync: { test: /regexp/ },
    async: { test: /regexp/ },
    defer: { test: /regexp/ },
    module: { test: /regexp/ },
    preload: { test: /regexp/ },
    prefetch: { test: /regexp/ }
});

new ScriptExtHtmlWebpackPlugin({
    preload: { test: "string", chunks: "initial" },
    prefetch: { test: "string", chunks: "initial" }
});

new ScriptExtHtmlWebpackPlugin({
    preload: { test: "string", chunks: "async" },
    prefetch: { test: "string", chunks: "async" }
});

new ScriptExtHtmlWebpackPlugin({
    preload: { test: "string", chunks: "all" },
    prefetch: { test: "string", chunks: "all" }
});

new ScriptExtHtmlWebpackPlugin({ defaultAttribute: "sync" });
new ScriptExtHtmlWebpackPlugin({ defaultAttribute: "async" });
new ScriptExtHtmlWebpackPlugin({ defaultAttribute: "defer" });

new ScriptExtHtmlWebpackPlugin({
    custom: {
        test: "string",
        attribute: "string"
    }
});

new ScriptExtHtmlWebpackPlugin({
    custom: {
        test: ["array"],
        attribute: "string",
        value: "string"
    }
});

new ScriptExtHtmlWebpackPlugin({
    custom: [
        {
            test: /regexp/,
            attribute: "string"
        },
        {
            test: "string",
            attribute: "string",
            value: "string"
        }
    ]
});
