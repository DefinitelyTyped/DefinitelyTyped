declare namespace adone.pretty {
    namespace I {
        interface JSONOptions {
            emptyArrayMsg?: string;
            keysColor?: string;
            dashColor?: string;
            numberColor?: string;
            stringColor?: string;
            defaultIndentation?: number;
            noColor?: boolean;
            noAlign?: boolean;
        }
    }

    function json(data: any, options?: I.JSONOptions, indentation?: number): string;
}
