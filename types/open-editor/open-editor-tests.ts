import openEditor = require('open-editor');

openEditor([
    'unicorn.js:5:3',
    {
        file: 'readme.md',
        line: 10,
        column: 2,
    },
]);
openEditor(
    [
        'unicorn.js:5:3',
        {
            file: 'readme.md',
            line: 10,
            column: 2,
        },
    ],
    { editor: 'vi' }
);

// $ExpectType EditorRunConfig
openEditor.make([
    'unicorn.js:5:3',
    {
        file: 'readme.md',
        line: 10,
        column: 2,
    },
]);
// $ExpectType EditorRunConfig
openEditor.make(
    [
        'unicorn.js:5:3',
        {
            file: 'readme.md',
            line: 10,
            column: 2,
        },
    ],
    { editor: 'vi' }
);
