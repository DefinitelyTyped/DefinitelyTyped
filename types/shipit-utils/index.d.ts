import shipit = require("shipit-cli");

export type GruntOrShipit = typeof shipit | {};
export type EmptyCallback = () => void;

export function equalValues(value: any[]): void;
export function getShipit(gruntOrShipit: GruntOrShipit): typeof shipit;
export function getShipit(gruntOrShipit: GruntOrShipit): typeof shipit;
export function registerTask(
    gruntOrShipit: GruntOrShipit,
    name: string,
    dependenciesOrTask: string[] | EmptyCallback,
): typeof shipit;
export function runTask(gruntOrShipit: {}): void;
