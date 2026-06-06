declare namespace cwise_parser {
    interface CompiledArgument {
        name: string;
        lvalue: boolean;
        rvalue: boolean;
        count: number;
    }
    interface CompiledRoutine {
        body: string;
        args: CompiledArgument[];
        thisVars: string[];
        localVars: string[];
    }
}

declare function cwise_parser<T>(func: (a: number, ...args: T[]) => any): cwise_parser.CompiledRoutine;
export = cwise_parser;
