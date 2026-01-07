import * as Trello from "trellopowerup";

// Test ResourceDictionary interface
const resourceDict: Trello.L18N.ResourceDictionary = {};
// $ExpectType string
resourceDict["key"];
// $ExpectType string
resourceDict.someKey;

const fullResourceDict: Trello.L18N.ResourceDictionary = {
    "hello": "Hello",
    "goodbye": "Goodbye",
    "welcome": "Welcome {0}!",
};

// Test accessing properties
// $ExpectType string
fullResourceDict["hello"];
// $ExpectType string
fullResourceDict.goodbye;

// Test Localizer interface
const localizer: Trello.L18N.Localizer = {
    resourceDictionary: { "test": "Test" },
    localize: (key: string, args: readonly string[]) => "localized",
};

// $ExpectType ResourceDictionary
localizer.resourceDictionary;
// $ExpectType string
localizer.localize("key", ["arg1", "arg2"]);

// Test localize method signature
declare const testLocalizer: Trello.L18N.Localizer;
// $ExpectType string
testLocalizer.localize("hello", []);
// $ExpectType string
testLocalizer.localize("welcome", ["John"]);
// $ExpectType string
testLocalizer.localize("message", ["arg1", "arg2", "arg3"]);

// Test Localization interface
const localization: Trello.L18N.Localization = {
    defaultLocale: "en",
    supportedLocales: ["en", "es", "fr"],
    resourceUrl: "https://example.com/resources",
};

// $ExpectType string
localization.defaultLocale;
// $ExpectType string[]
localization.supportedLocales;
// $ExpectType string
localization.resourceUrl;

// Test LocalizerOptions interface
const emptyOptions: Trello.L18N.LocalizerOptions = {};

const optionsWithLocalizer: Trello.L18N.LocalizerOptions = {
    localizer: {
        resourceDictionary: { "key": "value" },
        localize: (key, args) => "result",
    },
};

const optionsWithLoader: Trello.L18N.LocalizerOptions = {
    loadLocalizer: () =>
        Promise.resolve({
            resourceDictionary: { "key": "value" },
            localize: (key, args) => "result",
        }),
};

const optionsWithLocalization: Trello.L18N.LocalizerOptions = {
    localization: {
        defaultLocale: "en",
        supportedLocales: ["en", "de"],
        resourceUrl: "/api/resources",
    },
};

const fullOptions: Trello.L18N.LocalizerOptions = {
    localizer: {
        resourceDictionary: { "greeting": "Hello" },
        localize: (key, args) => "localized",
    },
    loadLocalizer: async () => ({
        resourceDictionary: { "dynamic": "Dynamic" },
        localize: (key, args) => "dynamic",
    }),
    localization: {
        defaultLocale: "en-US",
        supportedLocales: ["en-US", "es-ES", "fr-FR"],
        resourceUrl: "https://cdn.example.com/i18n",
    },
};

// Test property types
// $ExpectType Localizer | undefined
fullOptions.localizer;
// $ExpectType (() => Promise<Localizer>) | undefined
fullOptions.loadLocalizer;
// $ExpectType Localization | undefined
fullOptions.localization;

// Test loadLocalizer return type
declare const options: Trello.L18N.LocalizerOptions;
if (options.loadLocalizer) {
    // $ExpectType Promise<Localizer>
    options.loadLocalizer();
}

// Test type errors
// @ts-expect-error - ResourceDictionary values should be string, not number
const invalidResourceDict1: Trello.L18N.ResourceDictionary = { "key": 123 };

// @ts-expect-error - ResourceDictionary values should be string, not boolean
const invalidResourceDict2: Trello.L18N.ResourceDictionary = { "flag": true };

// @ts-expect-error - missing resourceDictionary property
const invalidLocalizer1: Trello.L18N.Localizer = {
    localize: (key, args) => "result",
};

// @ts-expect-error - missing localize method
const invalidLocalizer2: Trello.L18N.Localizer = {
    resourceDictionary: { "key": "value" },
};

const invalidLocalizer3: Trello.L18N.Localizer = {
    resourceDictionary: { "key": "value" },
    // @ts-expect-error - localize should return string, not number
    localize: (key, args) => 123,
};

// @ts-expect-error - missing defaultLocale
const invalidLocalization1: Trello.L18N.Localization = {
    supportedLocales: ["en"],
    resourceUrl: "url",
};

// @ts-expect-error - missing supportedLocales
const invalidLocalization2: Trello.L18N.Localization = {
    defaultLocale: "en",
    resourceUrl: "url",
};

// @ts-expect-error - missing resourceUrl
const invalidLocalization3: Trello.L18N.Localization = {
    defaultLocale: "en",
    supportedLocales: ["en"],
};

const invalidLocalization4: Trello.L18N.Localization = {
    defaultLocale: "en",
    // @ts-expect-error - supportedLocales should be string[], not string
    supportedLocales: "en",
    resourceUrl: "url",
};

const invalidOptions1: Trello.L18N.LocalizerOptions = {
    // @ts-expect-error - loadLocalizer should return Promise<Localizer>, not Localizer
    loadLocalizer: () => ({
        resourceDictionary: {},
        localize: (key: any, args: any) => "result",
    }),
};

const invalidOptions2: Trello.L18N.LocalizerOptions = {
    // @ts-expect-error - loadLocalizer should return Promise<Localizer>, not Promise<string>
    loadLocalizer: () => Promise.resolve("invalid"),
};

// Test method calls with wrong arguments
declare const testLoc: Trello.L18N.Localizer;
// @ts-expect-error - first argument should be string, not number
testLoc.localize(123, []);

// @ts-expect-error - second argument should be readonly string[], not number[]
testLoc.localize("key", [1, 2, 3]);

// @ts-expect-error - second argument should be readonly string[], not string
testLoc.localize("key", "invalid");
