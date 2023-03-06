import ChangelogFinder = require('get-changelog-lib');

const changelogFinder = new ChangelogFinder({
    exploreTxtFiles: true,
    branches: ['main'],
    customRepositories: {
        myModule: 'https://myRepository/myModule',
    },
});

changelogFinder.getChangelog('moduleName'); // $ExpectType Promise<string>
