// Type definitions for react-native-fetch-polyfill
// Project: https://github.com/robinpowered/react-native-fetch-polyfill
// Definitions by: Dzianis Dziarkach <derkachdeveloper@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/**
 * The polyfill that implements a subset of the standard Fetch specification, enough to make fetch a viable replacement for most uses of XMLHttpRequest in traditional web applications.
 * @param { RequestInfo } input - The URL of the request or the Request object of the Fetch API.
 * @param { RequestInit } init - An options object containing any custom settings that you want to apply to the request(additionaly added a timeout property).
 */
export default function fetch(input: RequestInfo, init?:RequestInit & { timeout?: number }): Promise<Response>;