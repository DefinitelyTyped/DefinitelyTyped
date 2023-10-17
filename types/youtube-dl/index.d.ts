/// <reference types="node" />
import { Readable } from "stream";

export = youtubedl;
declare function youtubedl(url: string, arg: string[], opt: { [key: string]: string }): youtubedl.Youtubedl;
declare namespace youtubedl {
    interface Youtubedl extends Readable {
        on(event: "info" | "complete", listener: (info: Info) => void): this;
        on(event: "next", listener: (data: Info | ReadonlyArray<Info>) => void): this;
        on(event: "error", listener: (err: any) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
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
        auto?: boolean | undefined;
        all?: boolean | undefined;
        lang?: string | undefined;
        cwd?: string | undefined;
    }

    /**
     * Call `youtube-dl` with whatever arguments you like.
     */
    function exec(url: string, args: string[], options: Options, callback: (err: any, output: string[]) => void): void;

    function getInfo(url: string, args: string[], options: Options, callback: (err: any, output: Info) => void): void;
    function getInfo(url: string, args: string[], callback: (err: any, output: Info) => void): void;
    function getInfo(url: string, callback: (err: any, output: Info) => void): void;

    function getSubs(url: string, options: Options, callback: (err: any, output: string[]) => void): void;
    function getSubs(url: string, callback: (err: any, output: string[]) => void): void;

    function getThumbs(url: string, options: Options, callback: (err: any, output: string[]) => void): void;
    function getThumbs(url: string, callback: (err: any, output: string[]) => void): void;

    function getExtractors(
        descriptions: boolean,
        options: Options,
        callback: (err: any, output: string[]) => void,
    ): void;
    function getExtractors(descriptions: boolean, callback: (err: any, output: string[]) => void): void;
    function getExtractors(callback: (err: any, output: string[]) => void): void;
}
