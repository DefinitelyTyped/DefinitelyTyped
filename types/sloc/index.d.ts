// Type definitions for sloc 0.2
// Project: https://github.com/flosse/sloc#readme
// Definitions by: Gary King <https://github.com/garyking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare function sloc(code: string, extension: string, options?: sloc.Options): Record<sloc.Key, number>;

declare namespace sloc {
    const keys: Key[];

    const extensions: Extension[];

    interface Options {
        debug: boolean;
    }

    type Extension =
        | 'asm'
        | 'brs'
        | 'c'
        | 'cc'
        | 'clj'
        | 'cljs'
        | 'cls'
        | 'coffee'
        | 'cpp'
        | 'cr'
        | 'cs'
        | 'css'
        | 'cxx'
        | 'erl'
        | 'f90'
        | 'f95'
        | 'f03'
        | 'f08'
        | 'f18'
        | 'fs'
        | 'fsi'
        | 'fsx'
        | 'go'
        | 'groovy'
        | 'gs'
        | 'h'
        | 'handlebars'
        | 'hbs'
        | 'hpp'
        | 'hr'
        | 'hs'
        | 'html'
        | 'htm'
        | 'hx'
        | 'hxx'
        | 'hy'
        | 'iced'
        | 'ily'
        | 'ino'
        | 'jade'
        | 'java'
        | 'jl'
        | 'js'
        | 'jsx'
        | 'mjs'
        | 'kt'
        | 'kts'
        | 'latex'
        | 'less'
        | 'ly'
        | 'lua'
        | 'ls'
        | 'ml'
        | 'mli'
        | 'mochi'
        | 'monkey'
        | 'mustache'
        | 'nix'
        | 'nim'
        | 'nut'
        | 'php'
        | 'php5'
        | 'pl'
        | 'py'
        | 'r'
        | 'rb'
        | 'rkt'
        | 'rs'
        | 'sass'
        | 'scala'
        | 'scss'
        | 'sty'
        | 'styl'
        | 'svg'
        | 'sql'
        | 'swift'
        | 'tex'
        | 'ts'
        | 'tsx'
        | 'vb'
        | 'vue'
        | 'xml'
        | 'yaml'
        | 'm'
        | 'mm'
        | 'bsl';

    type Key = 'total' | 'source' | 'comment' | 'single' | 'block' | 'mixed' | 'blockEmpty' | 'empty' | 'todo';
}

export = sloc;
