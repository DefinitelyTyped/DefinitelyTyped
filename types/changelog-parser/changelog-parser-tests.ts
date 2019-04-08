import parseChangelog = require('changelog-parser');

const options = {
    filePath: 'path/to/CHANGELOG.md',
    removeMarkdown: false
};

const fn = (obj: object): void => {};

parseChangelog({filePath: 'path/to/CHANGELOG.md'}, (error, result) => {
    if (error) {
        throw error;
    }

    fn(result);
});

parseChangelog(options, (error, result) => {});

parseChangelog({filePath: 'path/to/CHANGELOG.md'}, (error) => {});

parseChangelog(options).then((result) => {});

parseChangelog('path/to/CHANGELOG.md').then((result) => {});
