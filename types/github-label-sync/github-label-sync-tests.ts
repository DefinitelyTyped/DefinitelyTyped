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
});
