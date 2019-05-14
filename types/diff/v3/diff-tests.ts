import jsdiff = require('diff');
const one = 'beep boop';
const other = 'beep boob blah';

let diff = jsdiff.diffChars(one, other);
printDiff(diff);

const diffArraysResult = jsdiff.diffArrays<string>(['a', 'b', 'c'], ['a', 'c', 'd']);
diffArraysResult.forEach(result => {
    if (result.added) {
        console.log(`added ${result.value.length} line(s):`, ...result.value);
    } else if (result.removed) {
        console.log(`removed ${result.value.length} line(s):`, ...result.value);
    } else {
        console.log(`no changes`);
    }
});

interface DiffObj {
    value: number;
}
const a: DiffObj = {value: 0};
const b: DiffObj = {value: 1};
const c: DiffObj = {value: 2};
const d: DiffObj = {value: 3};
const arrayOptions: jsdiff.IArrayOptions = {
    comparator: (left: DiffObj, right: DiffObj) => {
      return left.value === right.value;
    }
};
const diffResult = jsdiff.diffArrays([a, b, c], [a, b, d], arrayOptions);
diffResult.forEach(result => {
    if (result.added) {
        console.log(`added ${result.value.length} line(s):`, ...result.value);
    } else if (result.removed) {
        console.log(`removed ${result.value.length} line(s):`, ...result.value);
    } else {
        console.log(`no changes`);
    }
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

const obj = new LineDiffWithoutWhitespace();
diff = obj.diff(one, other);
printDiff(diff);

function printDiff(diff: jsdiff.IDiffResult[]) {
    function addLineHeader(decorator: string, str: string | string[]) {
        return (typeof str === 'string' ? str.split("\n") : str).map((line, index, array) => {
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
    const verifyPatch = jsdiff.parsePatch(
        jsdiff.createTwoFilesPatch("oldFile.ts", "newFile.ts", oldStr, newStr,
            "old", "new", { context: 1 }));

    if (JSON.stringify(verifyPatch[0], Object.keys(verifyPatch[0]).sort()) !== JSON.stringify(uniDiff, Object.keys(uniDiff).sort())) {
        console.error("Patch did not match uniDiff");
    }
}
function verifyApplyMethods(oldStr: string, newStr: string, uniDiff: jsdiff.IUniDiff) {
    const verifyApply = [
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

const uniDiffPatch = jsdiff.structuredPatch("oldFile.ts", "newFile.ts", one, other,
    "old", "new", { context: 1 });
verifyPatchMethods(one, other, uniDiffPatch);

const uniDiffStr = jsdiff.createPatch("file.ts", one, other, "old", "new",
    { context: 1 });
const uniDiffApply = jsdiff.parsePatch(uniDiffStr)[0];
verifyApplyMethods(one, other, uniDiffApply);
