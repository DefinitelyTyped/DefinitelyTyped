import AceDiff = require('ace-diff');

new AceDiff(); // $ExpectError

const aceDiffConstructorOpts = {
    element: '.acediff',
    left: { content: 'left content' },
    right: { content: 'right content' },
};
new AceDiff(aceDiffConstructorOpts); // $ExpectType AceDiff

const differ = new AceDiff(aceDiffConstructorOpts);

differ.getEditors(); // $ExpectType { left: any; right: any; }
differ.setOptions(); // $ExpectError
const aceDiffOpts = {
    diffGranularity: 'broad' as 'broad', // workaround: cast to avoid https://github.com/Microsoft/TypeScript/issues/11465#issuecomment-252453037
};
differ.setOptions(aceDiffOpts); // $ExpectType void
differ.getNumDiffs(); // $ExpectType number
differ.diff(); // $ExpectType void
differ.destroy(); // $ExpectType void
