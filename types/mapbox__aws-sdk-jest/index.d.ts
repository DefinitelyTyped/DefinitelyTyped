// Type definitions for @mapbox/aws-sdk-jest 0.0.4
// Project: https://github.com/mapbox/aws-sdk-jest#readme
// Definitions by: stevensnoeijen <https://github.com/stevensnoeijen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jest" />

declare module 'aws-sdk' {
    export function spyOn(service: string, method: string): jest.Mock;
    export function spyOnPromise(service: string, method: string, response?: unknown): jest.Mock;
    export function spyOnEachPage(service: string, method: string, pages: Record<string, unknown>[]): jest.Mock;
    export function clearAllMocks(): void;
}