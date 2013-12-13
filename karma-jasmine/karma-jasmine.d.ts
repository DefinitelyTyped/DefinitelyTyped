// Type definitions for karma-jasmine plugin
// Project: https://github.com/karma-runner/karma-jasmine
// Definitions by: Michel Salib <michelsalib@hotmail.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jasmine/jasmine.d.ts" />

declare function ddescribe(description: string, specDefinitions: () => void): void;
declare function iit(expectation: string, assertion: () => void): void;
