// Type definitions for Jasmine Data Driven Tests
// Project: https://github.com/gburghardt/jasmine-data_driven_tests
// Definitions by: Anthony MacKinnon <https://github.com/AnthonyMacKinnon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function all(description: string, dataset: any[], assertion: (...args: any[]) => void): void;
declare function xall(description: string, dataset: any[], assertion: (...args: any[]) => void): void;