import ignore = require("esbuild-plugin-ignore");

// ✅ Correct usage — should pass without errors

// $ExpectType IgnorePluginInstance
ignore([{ resourceRegExp: /pg-native$/, contextRegExp: /node_modules/ }]);

// $ExpectType IgnorePluginInstance
ignore([{ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ }]);

// $ExpectType IgnorePluginInstance
ignore([{ resourceRegExp: /prisma/, contextRegExp: /.*/ }]);

// ❌ Errors that TypeScript should catch:

// @ts-expect-error: contextRegExp is required but missing
ignore([{ resourceRegExp: /pg-native$/ }]);

// @ts-expect-error: resourceRegExp must be a RegExp, not a string
ignore([{ resourceRegExp: "pg-native", contextRegExp: /node_modules/ }]);

// @ts-expect-error: contextRegExp must be a RegExp, not a string
ignore([{ resourceRegExp: /pg-native$/, contextRegExp: "node_modules" }]);

// @ts-expect-error: Incorrect property name in the object
ignore([{ resource: /pg-native$/, contextRegExp: /node_modules/ }]);
