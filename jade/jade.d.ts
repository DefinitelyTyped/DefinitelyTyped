// Type definitions for jade
// Project: https://github.com/jadejs/jade
// Definitions by: Panu Horsmalahti <https://github.com/panuhorsmalahti>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'jade' {
    module jade {
        function compile(template: string, options?: any): (locals?: any) => string;
        function compileFile(path: string, options?: any): (locals?: any) => string;
        function compileClient(template: string, options?: any): (locals?: any) => string;
        function compileClientWithDependenciesTracked(template: string, options?: any): {
            body: (locals?: any) => string;
            dependencies: string[];
        };
        function render(template: string, options?: any): string;
        function renderFile(path: string, options?: any): string;
    }
    export default jade;
}
