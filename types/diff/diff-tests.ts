// tslint:disable:no-var only-arrow-functions
import jsdiff = require('diff');
var one = 'beep boop';
var other = 'beep boob blah';

var diff = jsdiff.diffChars(one, other);

diff.forEach(function(part) {
    var mark = part.added ? '+' :
        part.removed ? '-' : ' ';
    console.log(mark + " " + part.value);
});

// --------------------------

class LineDiffWithoutWhitespace extends jsdiff.Diff {
    tokenize(value: string): any {
        return value.split(/^/m);
    }

    equals(left: string, right: string): boolean {
        return left.trim() === right.trim();
    }
}

var obj = new LineDiffWithoutWhitespace(true);
var diff = obj.diff(one, other);
printDiff(diff);

function printDiff(diff: jsdiff.IDiffResult[]) {
    function addLineHeader(decorator: string, str: string) {
        return str.split("\n").map((line, index, array) => {
            if (index === array.length - 1 && line === "") {
                return line;
            } else {
                return decorator + line;
            }
        }).join("\n");
    }

    diff.forEach((part) => {
        if (part.added) {
            console.log(addLineHeader("+", part.value));
        } else if (part.removed) {
            console.log(addLineHeader("-", part.value));
        } else {
            console.log(addLineHeader(" ", part.value));
        }
    });
}

function verifyPatchMethods(oldStr: string, newStr: string, uniDiff: jsdiff.IUniDiff) {
    var verifyPatch = jsdiff.parsePatch(
        jsdiff.createTwoFilesPatch("oldFile.ts", "newFile.ts", oldStr, newStr,
            "old", "new", { context: 1 }));
    if (JSON.stringify(verifyPatch) !== JSON.stringify(uniDiff)) {
        console.error("Patch did not match uniDiff");
    }
}
function verifyApplyMethods(oldStr: string, newStr: string, uniDiff: jsdiff.IUniDiff) {
    var verifyApply = [
        jsdiff.applyPatch(oldStr, uniDiff),
        jsdiff.applyPatch(oldStr, [uniDiff])
    ];
    jsdiff.applyPatches([uniDiff], {
        loadFile: (index: number, callback: (err: Error, data: string) => void) => {
            callback(undefined, one);
        },
        patched: (index: number, content: string) => {
            verifyApply.push(content);
        },
        complete: (err?: Error) => {
            if (err) {
                console.error(err);
            }

            verifyApply.forEach(result => {
                if (result !== newStr) {
                    console.error("Result did not match newStr");
                }
            });
        }
    });
}

verifyPatchMethods(one, other, uniDiff);
var uniDiff = jsdiff.structuredPatch("oldFile.ts", "newFile.ts", one, other,
    "old", "new", { context: 1 });
verifyApplyMethods(one, other, uniDiff);
