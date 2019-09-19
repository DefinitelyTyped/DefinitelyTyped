import * as slm from 'source-list-map';

const node = new slm.CodeNode('hello');

node.addGeneratedCode('world');
node.getGeneratedCode();
node.getMappings();
node.mapGeneratedCode(function (code) {
    if (typeof code === 'string') {}

    return code;
})

slm.fromStringWithSourceMap('hello', {
    sources: [node, new slm.CodeNode('hello')],
    sourcesContent: ['hi'],
    mappings: 'null'
});

const snode = new slm.SourceNode('hi', 'i\'am', 'e-cloud');
const snode1 = new slm.SourceNode('hi', 'i\'am', 'e-cloud', 1);
snode.getGeneratedCode();

const context = new slm.MappingsContext();
snode.getMappings(context);

context.ensureSource('hey', 'guy');

const map = new slm.SourceListMap('hey', 'sorry', 'to be late');
const map1 = new slm.SourceListMap([snode, node]);

map.add('hi', 'every', 'body');
map.toStringWithSourceMap({ file: 'here' });
