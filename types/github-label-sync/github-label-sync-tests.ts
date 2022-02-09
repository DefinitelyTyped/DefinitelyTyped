import githubLabelSync, { defaults } from 'github-label-sync';

githubLabelSync({
    accessToken: 'abc',
    labels: [
        {
            name: 'label',
            color: '123456',
            aliases: ['some', 'aliases', 'for', 'the', 'label'],
        },
        {
            name: 'other label',
            color: 'abcdef',
            description: 'A very inspiring description',
        },
    ],
    repo: 'owner/repo',

    allowAddedLabels: true,
    dryRun: true,
    endpoint: 'abc',
    format: {
        diff: s => s + 'a',
        success: s => s + 'b',
        warning: s => s + 'c',
    },
    log: {
        info: _s => {},
        warn: _s => {},
    },
});

githubLabelSync({
    ...defaults,
    accessToken: 'abc',
    repo: 'owner/name',
    endpoint: 'abc',
});

githubLabelSync({
    accessToken: 'abc',
    repo: 'owner/name',
    labels: [],
}).then(value => {
    value[0].name;
    value[0].type;
    value[0].actual;
    value[0].actual?.name;
    value[0].actual?.color;
    value[0].actual?.description;
    value[0].expected?.name;
    value[0].expected?.color;
    value[0].expected?.description;
});
