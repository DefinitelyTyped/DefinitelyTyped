/// <reference path="./diff.d.ts" />

import jsdiff = require('diff');

var one = 'beep boop';
var other = 'beep boob blah';

var diff = jsdiff.diffChars(one, other);

diff.forEach(function (part) {
    var mark = part.added ? '+' :
        part.removed ? '-' : ' ';
    console.log(mark + " " + part.value);
});

// --------------------------

class LineDiffWithoutWhitespace extends jsdiff.Diff {
    tokenize(value:string):any {
        return value.split(/^/m);
    }

    equals(left:string, right:string):boolean {
        return left.trim() === right.trim();
    }
}

var obj = new LineDiffWithoutWhitespace(true);
var diff = obj.diff(one, other);
printDiff(diff);

function printDiff(diff:jsdiff.IDiffResult[]) {
    function addLineHeader(decorator:string, str:string) {
        return str.split("\n").map((line, index, array) => {
            if (index === array.length - 1 && line === "") {
                return line;
            } else {
                return decorator + line;
            }
        }).join("\n");
    }

    diff.forEach((part)=> {
        if (part.added) {
            console.log(addLineHeader("+", part.value));
        } else if (part.removed) {
            console.log(addLineHeader("-", part.value));
        } else {
            console.log(addLineHeader(" ", part.value));
        }
    });

}