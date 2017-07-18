import fastDiff = require('fast-diff');

let diffs: fastDiff.Diff[];
diffs = fastDiff("hi there", "hi");
diffs = fastDiff("hi there", "hi", 1);

diffs.forEach((diff: fastDiff.Diff) => {
    const operation: number = diff[0];
    const text: string = diff[1];

    switch (diff[0]) {
        case fastDiff.DIFF_EQUAL: break;
        case fastDiff.DIFF_DELETE: break;
        case fastDiff.DIFF_INSERT: break;
    }
});
