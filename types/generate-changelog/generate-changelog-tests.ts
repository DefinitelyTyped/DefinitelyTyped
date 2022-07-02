import * as changelog from 'generate-changelog';

changelog.generate({
    allowUnknown: true,
    exclude: ['chore'],
    minor: true,
    repoUrl: 'https://github.com/lob/generate-changelog',
    tag: 'v1.6.0...v1.7.0'
}).then(changelog => changelog.trim());
