/// <reference path="./node-uuid-base.d.ts" />

/**
 * Expose as CommonJS module
 * For use in node environment or browser environment (using webpack or other module loaders)
 */
declare module "node-uuid" {
    var uuid: __NodeUUID.UUID;
    export = uuid;
}