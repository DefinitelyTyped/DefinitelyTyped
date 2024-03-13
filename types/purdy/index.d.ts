declare function Purdy(obj: object, options: Purdy.Options): void;

declare namespace Purdy {
    interface Instance {
        (obj: object, options: Options): void;
        print: (...args: any[]) => void;
        stringify: (...args: any[]) => string;
    }

    interface Options {
        depth?: number | null | undefined;
        plain?: boolean | undefined;
        json?: boolean | undefined;
        path?: boolean | undefined;
        proto?: boolean | undefined;
        indent?: number | undefined;
        align?: "left" | "right" | undefined;
        arrayIndex?: boolean | undefined;
        pathPrefix?: string | undefined;
    }

    function purdy(options: Options): Instance;
    function stringify(obj: object, options: Options): string;
}

export = Purdy;
