// Type definitions for jade
// Project: https://github.com/jadejs/jade
// Definitions by: Panu Horsmalahti <https://github.com/panuhorsmalahti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export declare function compile(template: string, options?: any): (locals?: any) => string;
export declare function compileFile(path: string, options?: any): (locals?: any) => string;
export declare function compileClient(template: string, options?: any): (locals?: any) => string;
export declare function compileClientWithDependenciesTracked(template: string, options?: any): {
    body: (locals?: any) => string;
    dependencies: string[];
};
export declare function render(template: string, options?: any): string;
export declare function renderFile(path: string, options?: any): string;
