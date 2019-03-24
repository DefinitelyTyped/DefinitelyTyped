import parseChangelog = require('changelog-parser');

const options = {
    filePath: 'path/to/CHANGELOG.md',
    removeMarkdown: false
};

parseChangelog({filePath: 'path/to/CHANGELOG.md'}, (result, error) => {});

parseChangelog(options, (result, error) => {});

parseChangelog({filePath: 'path/to/CHANGELOG.md'}, (result) => {});

parseChangelog(options);

parseChangelog('path/to/CHANGELOG.md');
