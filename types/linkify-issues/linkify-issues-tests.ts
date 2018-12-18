import linkifyIssues = require('linkify-issues');

// $ExpectType string
linkifyIssues('Fixes #143 and avajs/ava#1023', {
    user: 'sindresorhus',
    repo: 'dofle',
});
// $ExpectType string
linkifyIssues('Fixes #143 and avajs/ava#1023', {
    user: 'sindresorhus',
    repo: 'dofle',
    attributes: {
        class: 'unicorn',
        multiple: ['a', 'b'],
        number: 1,
        exclude: false,
        include: true,
    },
});
// $ExpectType string
linkifyIssues('Fixes #143 and avajs/ava#1023', {
    user: 'sindresorhus',
    repo: 'dofle',
    type: 'string',
});

const fragment = linkifyIssues('Fixes #143 and avajs/ava#1023', {
    user: 'sindresorhus',
    repo: 'dofle',
    type: 'dom',
});

// $ExpectType DocumentFragment
fragment;

document.body.appendChild(fragment);
