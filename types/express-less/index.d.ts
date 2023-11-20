import express = require("express");

declare function less(root: string, options?: less.Options): express.RequestHandler;

declare namespace less {
    export interface Options {
        debug?: boolean;
        compress?: boolean;
        cache?: boolean;
    }
}

export = less;
