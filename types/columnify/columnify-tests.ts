import columnify = require('columnify');

/**
 * Objects
 */
let data: any = {
    'commander@0.6.1': 1,
    'minimatch@0.2.14': 3,
    'mkdirp@0.3.5': 2,
    'sigmund@1.0.0': 3,
};

columnify(data);

/**
 * Column Names
 */
data = {
    'commander@0.6.1': 1,
    'minimatch@0.2.14': 3,
    'mkdirp@0.3.5': 2,
    'sigmund@1.0.0': 3,
};

columnify(data, { columns: ['MODULE', 'COUNT'] });

/**
 * Arrays of Objects
 */
columnify([
    {
        name: 'mod1',
        version: '0.0.1',
    },
    {
        name: 'module2',
        version: '0.2.0',
    },
]);

/**
 * Filtering & Ordering
 */
data = [
    {
        name: 'module1',
        description: 'some description',
        version: '0.0.1',
    },
    {
        name: 'module2',
        description: 'another description',
        version: '0.2.0',
    },
];

columnify(data, {
    columns: ['name', 'version'],
});

/**
 * Maximum and Minimum Column Widths
 */
columnify(
    [
        {
            name: 'mod1',
            description: 'some description which happens to be far larger than the max',
            version: '0.0.1',
        },
        {
            name: 'module-two',
            description: 'another description larger than the max',
            version: '0.2.0',
        },
    ],
    {
        minWidth: 20,
        config: {
            description: { maxWidth: 30 },
        },
    },
);

/**
 * Truncating
 */
columnify(data, {
    truncate: true,
    config: {
        description: {
            maxWidth: 20,
        },
    },
});

/**
 * Align Right/Center
 */
data = {
    'mocha@1.18.2': 1,
    'commander@2.0.0': 1,
    'debug@0.8.1': 1,
};

columnify(data, { config: { value: { align: 'right' } } });

/**
 * Padding Character
 */
data = {
    shortKey: 'veryVeryVeryVeryVeryLongVal',
    veryVeryVeryVeryVeryLongKey: 'shortVal',
};

columnify(data, { paddingChr: '.' });

/**
 * Preserve Existing Newlines
 */
data = [
    {
        name: 'glob@3.2.9',
        paths: ['node_modules/tap/node_modules/glob', 'node_modules/tape/node_modules/glob'].join('\n'),
    },
    {
        name: 'nopt@2.2.1',
        paths: ['node_modules/tap/node_modules/nopt'],
    },
    {
        name: 'runforcover@0.0.2',
        paths: 'node_modules/tap/node_modules/runforcover',
    },
];

columnify(data, { preserveNewLines: true });

/**
 * Custom Truncation Marker
 */
columnify(data, {
    truncate: true,
    truncateMarker: '>',
    widths: {
        description: {
            maxWidth: 20,
        },
    },
});

/**
 * Custom Column Splitter
 */
columnify(data, {
    columnSplitter: ' | ',
});

/**
 * Control Header Display
 */
columnify(data, {
    showHeaders: false,
});

columnify(data, {
    config: {
        id: { showHeaders: false },
    },
});

/**
 * Transforming Column Data and Headers
 */
columnify(
    [
        {
            name: 'mod1',
            description: 'SOME DESCRIPTION TEXT.',
        },
        {
            name: 'module-two',
            description: 'SOME SLIGHTLY LONGER DESCRIPTION TEXT.',
        },
    ],
    {
        dataTransform(data) {
            return data.toLowerCase();
        },
        config: {
            name: {
                headingTransform(heading) {
                    heading = 'module ' + heading;
                    return `*${heading.toUpperCase()}*`;
                },
            },
        },
    },
);
