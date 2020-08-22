import postcss = require('postcss');
import cssDeclarationSorter = require('css-declaration-sorter');

postcss([cssDeclarationSorter({})]).process('a { color: hyperblue; display: block; }');
postcss([cssDeclarationSorter({ order: 'alphabetical' })]).process('a { color: hyperblue; display: block; }');
postcss([cssDeclarationSorter({ order: 'smacss' })]).process('a { color: hyperblue; display: block; }');
postcss([cssDeclarationSorter({ order: 'concentric-css' })]).process('a { color: hyperblue; display: block; }');
postcss([cssDeclarationSorter({ order: (propA, propB) => -1 })]).process('a { color: hyperblue; display: block; }');
postcss([cssDeclarationSorter({ order: 'alphabetical', keepOverrides: true })]).process(
    'a { color: hyperblue; display: block; }',
);
