import parseChangelog = require('changelog-parser');

// Because the Changelog type is not exported, we need to inspect the
// `parseChangelog` function to extract the type.
//
// The Changelog type is not exported because changelog-parser exports a default
// export. The type declaration must therefore also export a default type, so it
// is not possible for it to export additional types.
type Changelog = Parameters<NonNullable<Parameters<typeof parseChangelog>[1]>>[1];

const options = {
    filePath: 'path/to/CHANGELOG.md',
    removeMarkdown: false,
};

const fn = (obj: Changelog): void => {
    // verify that the changelog has the documented properties
    const title: string = obj.title;
    const description: string = obj.description;

    const version = obj.versions[0];
    const versionString: string | null = version.version;
    const versionTitle: string = version.title;
    const date: string | null = version.date;
    const body: string = version.body;
    const parsed: string[] = version.parsed['Fixes'];
};

// The callback should receive an object that contains the documented properties.
parseChangelog({ filePath: 'path/to/CHANGELOG.md' }, (error, result) => {
    if (error) {
        throw error;
    }

    fn(result);
});

// The function should accept the documented options.
parseChangelog(options, (error, result) => {
    const title: string = result.title;
});

parseChangelog({ filePath: 'path/to/CHANGELOG.md' }, error => {});

// The function should return a promise.
parseChangelog(options).then(result => {
    const title: string = result.title;
});

// The first argument may be a string, in which case it is treated as the file
// path.
parseChangelog('path/to/CHANGELOG.md').then(result => {
    const title: string = result.title;
});

// The options argument may contain a `text` property instead of a `filePath`
// property..
parseChangelog({ text: '# Change Log' }).then(result => {
    const title: string = result.title;
});
