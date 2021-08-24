import jsdoc2md = require('jsdoc-to-markdown');

// $ExpectType string
const output = jsdoc2md.renderSync({ files: 'lib/*.js' });

const JsdocDataOptions: jsdoc2md.JsdocOptions = {
    files: 'file.js',
    noCache: true,
};

const RenderOptions: jsdoc2md.RenderOptions = {
    'example-lang': 'js',
    'global-index-format': 'dl',
    'heading-depth': 2,
    'member-index-format': 'grouped',
    'module-index-format': 'table',
    'name-format': 'backticks',
    'no-gfm': true,
    'param-list-format': 'table',
    data: [],
    helper: [''],
    plugin: '',
};

jsdoc2md.render(JsdocDataOptions); // $ExpectType Promise<string>
jsdoc2md.renderSync(RenderOptions); // $ExpectType string
jsdoc2md.getTemplateData(JsdocDataOptions); // $ExpectType Promise<object[]>
jsdoc2md.getTemplateDataSync(JsdocDataOptions); // $ExpectType object[]
jsdoc2md.getJsdocData(JsdocDataOptions); // $ExpectType Promise<object[]>
jsdoc2md.getJsdocDataSync(JsdocDataOptions); // $ExpectType object[]
jsdoc2md.clear(); // $ExpectType Promise<void>
jsdoc2md.getNamepaths(JsdocDataOptions); // $ExpectType Promise<object>

(async () => {
    await jsdoc2md.render(JsdocDataOptions); // $ExpectType string
    await jsdoc2md.getTemplateData(JsdocDataOptions); // $ExpectType object[]
    await jsdoc2md.getJsdocData(JsdocDataOptions); // $ExpectType object[]
    await jsdoc2md.clear(); // $ExpectType void
    await jsdoc2md.getNamepaths(JsdocDataOptions); // $ExpectType object
    await jsdoc2md.render({ files: 'file.js', 'heading-depth': 4, 'name-format': '<code>' });
})();
