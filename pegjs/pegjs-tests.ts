/// <reference path="./pegjs.d.ts" />
{
    let input: string;
    let result = PEG.parse(input);
    console.log(result);
}

import * as pegjs from 'pegjs';

{
    let pegparser: pegjs.Parser = pegjs.buildParser("start = ('a' / 'b')+");

    try {
        let result: string = pegparser.parse("abba");
    } catch (error) {
        if (error instanceof pegparser.SyntaxError) {
            
        }
    }
}

{
    let parser = pegjs.buildParser("A = 'test'", {
        cache: true,
        allowedStartRules: ["A"],
        optimize: "speed",
        plugins: []
    })
}

try {
    let parserOrSource: pegjs.Parser | string = pegjs.buildParser("A = 'test'", {output: "source"});
} catch (error) {
    if (error instanceof pegjs.GrammarError) {
        let e: pegjs.GrammarError = error;
    } else if (error instanceof pegjs.parser.SyntaxError) {
        let e: pegjs.parser.SyntaxError = error;
    }
    
    let e: pegjs.PegjsError = error;
    console.log(e.expected[0].description);
    console.log(e.expected[0].type);
    console.log(e.expected[0].value);
    console.log(e.location.end.column);
    console.log(e.location.end.offset);
    console.log(e.location.end.line);
    console.log(e.message);
    console.log(e.name);
}