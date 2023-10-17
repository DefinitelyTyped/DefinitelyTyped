declare function jsonic(text: string): any;
declare namespace jsonic {
    interface Options {
        depth?: number | undefined;
        maxitems?: number | undefined;
        maxchars?: number | undefined;
        omit?: string[] | undefined;
        exclude?: string[] | undefined;
    }

    function stringify(val: any, opts?: Options): string;
}

export = jsonic;
