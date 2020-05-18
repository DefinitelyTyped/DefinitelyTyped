// Type definitions for random-words v1.1.1
// Project: https://github.com/punkave/random-words
// Defenitions by: Mustafa Kamal <https://github.com/mustafakamal-fe/>
// Defeinitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// <reference path="./random-words/random-words.d.ts"/>

interface Options {
    min? : number;
    max?: number;
    exactly?: number;
    join?: string;
    maxLength?:number;
    wordsPerString?:number;
    seperator?:string;
    formatter?:(word: string, index:number) => string;
}

declare module "random-words" {
    function words(p: number | Options): string;
    export = words;
}