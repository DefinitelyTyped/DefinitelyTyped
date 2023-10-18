import through = require("through");

declare namespace coffeeify {
    interface Coffeeify {
        isCoffee(file: string): boolean;
        isLiterate(file: string): boolean;
        sourceMap: boolean;
        compile(file: string, data: string, callback: Callback): void;
        (file: string): through.ThroughStream;
    }

    interface Callback {
        (error: ParseError, compiled: string): void;
    }

    interface ParseError extends SyntaxError {
        new(error: any, src: string, file: string): ParseError;
        message: string;
        line: number;
        column: number;
        annotated: string;
    }
}

declare var coffeeify: coffeeify.Coffeeify;

export = coffeeify;
