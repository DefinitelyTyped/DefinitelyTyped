import parseChangelog = require('changelog-parser');

const options = {
    filePath: 'path/to/CHANGELOG.md',
    removeMarkdown: false
};

parseChangelog('path/to/CHANGELOG.md', (err, result) => {});

parseChangelog(options, (err, result) => {});

parseChangelog('path/to/CHANGELOG.md', (result) => {});

parseChangelog('path/to/CHANGELOG.md');

parseChangelog(options);
