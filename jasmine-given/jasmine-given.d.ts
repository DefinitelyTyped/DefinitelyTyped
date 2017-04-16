// Type definitions for Jasmine Given 2.6.3
// Project: https://github.com/searls/jasmine-given/
// Definitions by: Max Nylin <https://github.com/brp-nylin/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function Given(givenFunc: () => void): void;
declare function When(whenFunc: () => void): void;
declare function Then(thenFunc: () => void): void;
