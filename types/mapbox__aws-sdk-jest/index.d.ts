/// <reference types="node"/>
/// <reference types="jest" />

declare module "aws-sdk" {
    function spyOn(service: string, method: string): jest.Mock;
    function spyOnPromise(service: string, method: string, response?: unknown): jest.Mock;
    function spyOnEachPage(service: string, method: string, pages: Array<Record<string, unknown>>): jest.Mock;
    function clearAllMocks(): void;
}
