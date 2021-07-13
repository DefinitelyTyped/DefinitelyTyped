import madge = require("madge");

// $ExpectType Promise<MadgeInstance>
madge('');

// $ExpectType Promise<MadgeInstance>
madge('', {});

// $ExpectType Promise<MadgeInstance>
madge('', { baseDir: '/src' });

// $ExpectType Promise<MadgeInstance>
madge('', {
    baseDir: '/src',
    includeNpm: true,
    fileExtensions: ['ts', 'js'],
    excludeRegExp: [/ab+c/],
    requireConfig: '',
    webpackConfig: '',
    tsConfig: '',
    layout: '',
    rankdir: 'RL',
    fontName: '',
    fontSize: '',
    backgroundColor: '',
    nodeShape: '',
    nodeStyle: '',
    nodeColor: '',
    noDependencyColor: '',
    cyclicNodeColor: '',
    edgeColor: '',
    graphVizOptions: {},
    graphVizPath: '',
    detectiveOptions: {},
    dependencyFilter: (id: string) => id !== 'filtered-path'
});

madge(); // $ExpectError
madge(0); // $ExpectError
madge('', 0); // $ExpectError
madge('', { unexpectedConfig: 1 }); // $ExpectError

(async () => {
    await madge(''); // $ExpectType MadgeInstance
    await madge(); // $ExpectError

    (await madge('')).obj(); // $ExpectType MadgeModuleDependencyGraph
    (await madge('')).obj(0); // $ExpectError

    (await madge('')).warnings(); // $ExpectType MadgeWarnings
    (await madge('')).warnings(0); // $ExpectError

    (await madge('')).circular(); // $ExpectType string[][]
    (await madge('')).circular(0); // $ExpectError

    (await madge('')).circularGraph(); // $ExpectType MadgeModuleDependencyGraph
    (await madge('')).circularGraph(0); // $ExpectError

    (await madge('')).depends(''); // $ExpectType string[]
    (await madge('')).depends(); // $ExpectError
    (await madge('')).depends(0); // $ExpectError

    (await madge('')).orphans(); // $ExpectType string[]
    (await madge('')).orphans(0); // $ExpectError

    (await madge('')).leaves(); // $ExpectType string[]
    (await madge('')).leaves(0); // $ExpectError

    (await madge('')).dot(); // $ExpectType Promise<string>
    (await madge('')).dot(true); // $ExpectType Promise<string>
    (await madge('')).dot(false); // $ExpectType Promise<string>
    (await madge('')).dot(0); // $ExpectError

    (await madge('')).image(''); // $ExpectType Promise<string>
    (await madge('')).image(); // $ExpectError
    (await madge('')).image(0); // $ExpectError
    (await madge('')).image('', true); // $ExpectType Promise<string>
    (await madge('')).image('', false); // $ExpectType Promise<string>
    (await madge('')).image('', 0); // $ExpectError

    (await madge('')).svg(); // $ExpectType Promise<Buffer>
    (await madge('')).svg(0); // $ExpectError
})();
