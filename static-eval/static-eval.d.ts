declare module 'static-eval' {
    function evaluate(ast, vars: { [name: string]: any });
    export =evaluate;
}
