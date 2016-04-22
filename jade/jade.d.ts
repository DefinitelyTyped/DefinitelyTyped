// Type definitions for jade
// Project: https://github.com/jadejs/jade
// Definitions by: Panu Horsmalahti <https://github.com/panuhorsmalahti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare export function compile(template: string, options?: any): (locals?: any) => string;
declare export function compileFile(path: string, options?: any): (locals?: any) => string;
declare export function compileClient(template: string, options?: any): (locals?: any) => string;
declare export function compileClientWithDependenciesTracked(template: string, options?: any): {
    body: (locals?: any) => string;
    dependencies: string[];
};
declare export function render(template: string, options?: any): string;
declare export function renderFile(path: string, options?: any): string;
