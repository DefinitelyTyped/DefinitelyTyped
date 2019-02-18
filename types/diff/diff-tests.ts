import * as diff from 'diff';

const one = 'beep boop';
const other = 'beep boob blah';

let changes = diff.diffChars(one, other);
examineChanges(changes);

// $ExpectType void
diff.diffChars(one, other, {
    callback: (err, value) => {
        err; // $ExpectType undefined
        value; // $ExpectType Change[] | undefined
    },
});
// $ExpectType void
diff.diffChars(one, other, (err, value) => {
    err; // $ExpectType undefined
    value; // $ExpectType Change[] | undefined
});

const diffArraysResult = diff.diffArrays(['a', 'b', 'c'], ['a', 'c', 'd']);
diffArraysResult.forEach(result => {
    result.added; // $ExpectType boolean | undefined
    result.removed; // $ExpectType boolean | undefined
    result.value; // $ExpectType string[]
    result.count; // $ExpectType number | undefined
});

interface DiffObj {
    value: number;
}
const a: DiffObj = { value: 0 };
const b: DiffObj = { value: 1 };
const c: DiffObj = { value: 2 };
const d: DiffObj = { value: 3 };
const arrayOptions: diff.ArrayOptions<DiffObj, DiffObj> = {
    comparator: (left, right) => {
        return left.value === right.value;
    },
};
const arrayChanges = diff.diffArrays([a, b, c], [a, b, d], arrayOptions);
arrayChanges.forEach(result => {
    result.added; // $ExpectType boolean | undefined
    result.removed; // $ExpectType boolean | undefined
    result.value; // $ExpectType DiffObj[]
    result.count; // $ExpectType number | undefined
});

// --------------------------

class LineDiffWithoutWhitespace extends diff.Diff {
    tokenize(value: string): any {
        return value.split(/^/m);
    }

    equals(left: string, right: string): boolean {
        return left.trim() === right.trim();
    }
}

const obj = new LineDiffWithoutWhitespace();
changes = obj.diff(one, other);
examineChanges(changes);

function examineChanges(diff: diff.Change[]) {
    diff.forEach(part => {
        part.added; // $ExpectType boolean | undefined
        part.removed; // $ExpectType boolean | undefined
        part.value; // $ExpectType string
        part.count; // $ExpectType number | undefined
    });
}

function verifyPatchMethods(oldStr: string, newStr: string, uniDiff: diff.ParsedDiff) {
    const verifyPatch = diff.parsePatch(
        diff.createTwoFilesPatch('oldFile.ts', 'newFile.ts', oldStr, newStr, 'old', 'new', {
            context: 1,
        })
    );

    if (
        JSON.stringify(verifyPatch[0], Object.keys(verifyPatch[0]).sort()) !==
        JSON.stringify(uniDiff, Object.keys(uniDiff).sort())
    ) {
        throw new Error('Patch did not match uniDiff');
    }
}
function verifyApplyMethods(oldStr: string, newStr: string, uniDiffStr: string) {
    const uniDiff = diff.parsePatch(uniDiffStr)[0];
    const verifyApply = [diff.applyPatch(oldStr, uniDiff), diff.applyPatch(oldStr, [uniDiff])];
    const options: diff.ApplyPatchesOptions = {
        loadFile(index, callback) {
            index; // $ExpectType ParsedDiff
            callback(undefined, one);
        },
        patched(index, content) {
            index; // $ExpectType ParsedDiff
            verifyApply.push(content);
        },
        complete(err) {
            if (err) {
                throw err;
            }

            verifyApply.forEach(result => {
                if (result !== newStr) {
                    throw new Error('Result did not match newStr');
                }
            });
        },
        compareLine(_, line, operator, patchContent) {
            if (operator === ' ') {
                return true;
            }
            return line === patchContent;
        },
        fuzzFactor: 0
    };
    diff.applyPatches([uniDiff], options);
    diff.applyPatches(uniDiffStr, options);
}

const uniDiffPatch = diff.structuredPatch('oldFile.ts', 'newFile.ts', one, other, 'old', 'new', {
    context: 1,
});
verifyPatchMethods(one, other, uniDiffPatch);

const uniDiffStr = diff.createPatch('file.ts', one, other, 'old', 'new', { context: 1 });
verifyApplyMethods(one, other, uniDiffStr);
