/// <reference types="node" />
import Obsolete = require('obsolete-web');

const {
    template, // $ExpectType string
    position, // $ExpedtType string
    promptOnNonTargetBrowser, // $ExpectType boolean
    promptOnUnknownBrowser, // $ExpectType boolean
} = Obsolete.defaultOptions;

new Obsolete();
new Obsolete(Obsolete.defaultOptions);
new Obsolete().test(['ie 10', 'chrome 23']);
new Obsolete().test(['ie 10', 'chrome 23'], () => {
    console.log('done');
});
