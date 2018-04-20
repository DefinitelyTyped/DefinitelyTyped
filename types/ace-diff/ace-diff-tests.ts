import AceDiff = require('ace-diff');

new AceDiff(); // $ExpectError

const aceDiffOpts = {
    element: '.acediff',
    left: { content: 'left content' },
    right: { content: 'left content' },
};
new AceDiff(aceDiffOpts); // $ExpectType AceDiff

const differ = new AceDiff(aceDiffOpts);

differ.getEditors(); // $ExpectType { left: any; right: any; }
differ.setOptions(); // $ExpectType void
differ.getNumDiffs(); // $ExpectType number
differ.diff(); // $ExpectType void
differ.destroy(); // $ExpectType void
