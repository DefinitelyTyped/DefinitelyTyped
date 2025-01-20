declare namespace engineCheck {
    interface Options {
        searchRoot?: string | undefined;
        silent?: boolean | undefined;
        debug?: boolean | undefined;
    }
}
declare function engineCheck(options?: engineCheck.Options): void;
export = engineCheck;
