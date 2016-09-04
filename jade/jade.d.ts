// Type definitions for jade
// Project: https://github.com/jadejs/jade
// Definitions by: Panu Horsmalahti <https://github.com/panuhorsmalahti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'jade' {
    export function compile(template: string, options?: any): (locals?: any) => string;
    export function compileFile(path: string, options?: any): (locals?: any) => string;
    export function compileClient(template: string, options?: any): (locals?: any) => string;
    export function compileClientWithDependenciesTracked(template: string, options?: any): {
        body: (locals?: any) => string;
        dependencies: string[];
    };
    export function render(template: string, options?: any): string;
    export function renderFile(path: string, options?: any): string;
}
