/// <reference types="karma-browserstack-launcher" />

import karma = require("karma");

declare function testingKarma(): karma.ConfigOptions;

export = testingKarma;
