/// <reference types="node" />
import jsdoc2md = require('jsdoc-to-markdown');
import fs = require('fs');

const output = jsdoc2md.renderSync({ files: 'lib/*.js' });

fs.writeFileSync('api.md', output);

const JsdocDataOptions = {
    files: 'file.js',
};

const RenderOptions: jsdoc2md.RenderOptions = {
    data: [],
    plugin: '',
    helper: [''],
    moduleIndexFormat: 'table',
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
})();
