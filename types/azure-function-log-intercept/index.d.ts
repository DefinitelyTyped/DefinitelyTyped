import { Context } from "@azure/functions";

/**
 * `console.log` doesn't actually log as you would expect in `node.js` Azure Functions.
 * You are expected to use `context.log` and` context` is not a global object, it's a parameter to your Azure Function
 * so you would have to pass this throughout your modules/functions to get logging like you would expect.
 * This package fixes this with minimal friction, 0 dependencies, and allows you
 * to use `console.log` (and other `console` methods) like normal.
 */
declare function intercept(context: Context): void;

export = intercept;
