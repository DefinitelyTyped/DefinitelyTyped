
import madge, { MadgeConfig } from 'madge';

const config: MadgeConfig = {
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
    dependencyFilter: (id: string) => { return id !== 'filtered-path' }
}

const partialConfig: Partial<MadgeConfig> = {
    baseDir: '/src',
    includeNpm: true
}

madge(''); // $ExpectType Promise<Madge>
madge('', {}) // $ExpectType Promise<Madge>
madge('', config) // $ExpectType Promise<Madge>
madge('', partialConfig) // $ExpectType Promise<Madge>

madge(); // $ExpectError
madge(0); // $ExpectError
madge('', 0); // $ExpectError
madge('', { unexpectedConfig: 1 }) // $ExpectError
