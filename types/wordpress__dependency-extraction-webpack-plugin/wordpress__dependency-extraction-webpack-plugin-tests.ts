import DependencyExtractionPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

new DependencyExtractionPlugin();

new DependencyExtractionPlugin({
    useDefaults: false,
});

new DependencyExtractionPlugin({
    requestToExternal(request) {
        if (request === "foo-bar") {
            return "FooBar";
        }
        if (request === "baz-qux") {
            return ["baz", "qux"];
        }
    },
    requestToHandle: request => {
        if (request === "foo-bar") {
            return "FooBar";
        }
    }
});
