import autoprefixer = require('autoprefixer');
import Browsers = require('autoprefixer/lib/browsers');
import Prefixes = require('autoprefixer/lib/prefixes');
import { Transformer } from 'postcss';

// No options
const ap1: Transformer = autoprefixer();

// Default options
const ap2: Transformer = autoprefixer({
    overrideBrowserslist: [],
    env: 'test',
    cascade: true,
    add: true,
    remove: true,
    supports: true,
    flexbox: true,
    grid: false,
    stats: {},
    ignoreUnknownVersions: false,
});

const deprecationTest = autoprefixer({
    browser: 'defaults',
    browsers: 'defaults',
    browserslist: 'defaults',
});

autoprefixer.info(); // $ExpectedType () => void
autoprefixer.data; // $ExpectType { browsers: any; prefixes: any; }
autoprefixer.defaults; // $ExpectedType string

// Using environment map in "overrideBrowserslist"
const ap3: Transformer = autoprefixer({
    overrideBrowserslist: {
        production: ['> 1%', 'ie 10'],
        modern: ['last 1 chrome version', 'last 1 firefox version'],
        ssr: ['node 12'],
    },
});

const prefixes = new Prefixes(autoprefixer.data.prefixes, new Browsers(autoprefixer.data.browsers, []));
const autoprefixerApiTest = {
    atRuleName(identifier: string) {
        return Boolean(prefixes.remove[`@${identifier.toLowerCase()}`]);
    },
    selector(identifier: string) {
        return prefixes.remove.selectors.some((selectorObj: { prefixed: string }) => {
            return identifier.toLowerCase() === selectorObj.prefixed;
        });
    },
    mediaFeatureName(identifier: string) {
        return identifier.toLowerCase().includes('device-pixel-ratio');
    },
    property(identifier: string) {
        return Boolean(autoprefixer.data.prefixes[prefixes.unprefixed(identifier.toLowerCase())]);
    },
    propertyValue(prop: string, value: string) {
        const possiblePrefixableValues =
            (prefixes.remove[prop.toLowerCase()] && prefixes.remove[prop.toLowerCase()].values) || false;
        return (
            possiblePrefixableValues &&
            possiblePrefixableValues.some((valueObj: { prefixed: string }) => {
                return value.toLowerCase() === valueObj.prefixed;
            })
        );
    },
};
