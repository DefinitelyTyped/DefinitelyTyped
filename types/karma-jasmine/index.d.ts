// Type definitions for karma-jasmine plugin
// Project: https://github.com/karma-runner/karma-jasmine
// Definitions by: Michel Salib <https://github.com/michelsalib>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jasmine" />

declare function fdescribe(description: string, specDefinitions: () => void): void;
declare function fit(expectation: string, assertion: () => void): void;
