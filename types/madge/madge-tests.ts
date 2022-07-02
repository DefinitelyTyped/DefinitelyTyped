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

// @ts-expect-error
madge();
// @ts-expect-error
madge(0);
// @ts-expect-error
madge('', 0);
// @ts-expect-error
madge('', { unexpectedConfig: 1 });

(async () => {
    await madge(''); // $ExpectType MadgeInstance
    // @ts-expect-error
    await madge();

    (await madge('')).obj(); // $ExpectType MadgeModuleDependencyGraph
    // @ts-expect-error
    (await madge('')).obj(0);

    (await madge('')).warnings(); // $ExpectType MadgeWarnings
    // @ts-expect-error
    (await madge('')).warnings(0);

    (await madge('')).circular(); // $ExpectType string[][]
    // @ts-expect-error
    (await madge('')).circular(0);

    (await madge('')).circularGraph(); // $ExpectType MadgeModuleDependencyGraph
    // @ts-expect-error
    (await madge('')).circularGraph(0);

    (await madge('')).depends(''); // $ExpectType string[]
    // @ts-expect-error
    (await madge('')).depends();
    // @ts-expect-error
    (await madge('')).depends(0);

    (await madge('')).orphans(); // $ExpectType string[]
    // @ts-expect-error
    (await madge('')).orphans(0);

    (await madge('')).leaves(); // $ExpectType string[]
    // @ts-expect-error
    (await madge('')).leaves(0);

    (await madge('')).dot(); // $ExpectType Promise<string>
    (await madge('')).dot(true); // $ExpectType Promise<string>
    (await madge('')).dot(false); // $ExpectType Promise<string>
    // @ts-expect-error
    (await madge('')).dot(0);

    (await madge('')).image(''); // $ExpectType Promise<string>
    // @ts-expect-error
    (await madge('')).image();
    // @ts-expect-error
    (await madge('')).image(0);
    (await madge('')).image('', true); // $ExpectType Promise<string>
    (await madge('')).image('', false); // $ExpectType Promise<string>
    // @ts-expect-error
    (await madge('')).image('', 0);

    (await madge('')).svg(); // $ExpectType Promise<Buffer>
    // @ts-expect-error
    (await madge('')).svg(0);
})();
