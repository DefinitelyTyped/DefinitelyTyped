declare module 'eval-estree-expression' {
    export function evaluate(tree: any, context: any, options: any): any;
    export namespace evaluate {
        function sync(tree: any, context: any, options: any): any;
    }
}