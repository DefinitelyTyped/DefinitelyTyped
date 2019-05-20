// Type definitions for youtube-dl 1.12
// Project: https://github.com/przemyslawpluta/node-youtube-dl
// Definitions by: Bogdan Surai <https://github.com/bsurai>
//                 Moshe Feuchtwanger <https://github.com/moshfeu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />
import * as fs from "fs";

export = youtubedl;
declare function youtubedl(url: string, arg: string[], opt: {[key: string]: string}): youtubedl.Youtubedl;
declare namespace youtubedl {
    interface Youtubedl {
        on(event: string, func: (info: Info) => void): this;
        pipe(stream: fs.WriteStream): this;
    }
    interface Info {
        _filename: string;
        filename: string;
        size: number;
        _duration_raw: number;
        _duration_hms: string;
        duration: string;
    }

    interface Options {
        auto?: boolean;
        all?: boolean;
        lang?: string;
        cwd?: string;
    }

    function exec(url: string, args: string[], options: Options, callback: (err: any, output: string[]) => void): void;

    function getInfo(url: string, args: string[], options: Options, callback: (err: any, output: Info) => void): void;
    function getInfo(url: string, args: string[], callback: (err: any, output: Info) => void): void;
    function getInfo(url: string, callback: (err: any, output: Info) => void): void;

    function getSubs(url: string, options: Options, callback: (err: any, output: string[]) => void): void;
    function getSubs(url: string, callback: (err: any, output: string[]) => void): void;

    function getThumbs(url: string, options: Options, callback: (err: any, output: string[]) => void): void;
    function getThumbs(url: string, callback: (err: any, output: string[]) => void): void;

    function getExtractors(descriptions: boolean, options: Options, callback: (err: any, output: string[]) => void): void;
    function getExtractors(descriptions: boolean, callback: (err: any, output: string[]) => void): void;
    function getExtractors(callback: (err: any, output: string[]) => void): void;
}
