// Type definitions for @mapbox/aws-sdk-jest 0.0
// Project: https://github.com/mapbox/aws-sdk-jest#readme
// Definitions by: stevensnoeijen <https://github.com/stevensnoeijen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

/// <reference types="node"/>
/// <reference types="jest" />

declare module 'aws-sdk' {
    function spyOn(service: string, method: string): jest.Mock;
    function spyOnPromise(service: string, method: string, response?: unknown): jest.Mock;
    function spyOnEachPage(service: string, method: string, pages: Array<Record<string, unknown>>): jest.Mock;
    function clearAllMocks(): void;
}
