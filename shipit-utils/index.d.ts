// Type definitions for shipit-utils 1.4
// Project: https://github.com/shipitjs/shipit-utils
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="shipit"/>

declare module "shipit-utils" {
    import shipit = require("shipit-cli");

    type GruntOrShipit = typeof shipit | {};

    export function equalValues(value: any[]): void;

    export function getShipit(gruntOrShipit: GruntOrShipit): typeof shipit;
    export function getShipit(gruntOrShipit: GruntOrShipit): typeof shipit;

    export function registerTask(gruntOrShipit: GruntOrShipit, name: string, task: Function): typeof shipit;
    export function registerTask(gruntOrShipit: GruntOrShipit, name: string, dependencies: string[]): typeof shipit;

    export function runTask(gruntOrShipit: {}): void;
}
