export = hasbin;

declare function hasbin(bin: string, done: (result: boolean) => void): void;

declare namespace hasbin {
    function all(bins: string[], done: (result: boolean) => void): void;

    function any(bins: string[], done: (result: boolean) => void): void;

    function every(bins: string[], done: (result: boolean) => void): void;

    function first(bins: string[], done: (result: false | string) => void): void;

    function some(bins: string[], done: (result: boolean) => void): void;

    function async(bin: string, done: (result: boolean) => void): void;

    function sync(bin: string): boolean;

    namespace all {
        function sync(bins: string[]): boolean;
    }

    namespace any {
        function sync(bins: string[]): boolean;
    }

    namespace every {
        function sync(bins: string[]): boolean;
    }

    namespace first {
        function sync(bins: string[]): false | string;
    }

    namespace some {
        function sync(bins: string[]): boolean;
    }
}
