import SourceMap = require('source-map');

function testSourceMapConsumer() {
    function testConstructor() {
        let scm: SourceMap.SourceMapConsumer;

        // create with full RawSourceMap
        scm = new SourceMap.SourceMapConsumer({
            version: 3,
            sources: ['foo', 'bar'],
            names: ['foo', 'bar'],
            sourcesContent: ['foo'],
            mappings: 'foo',
            file: 'sdf'
        });

        scm = new SourceMap.SourceMapConsumer(JSON.stringify({
            version: 3,
            sources: ['foo', 'bar'],
            names: ['foo', 'bar'],
            sourcesContent: ['foo'],
            mappings: 'foo',
            file: 'sdf'
        }));

        // create with partial RawSourceMap
        scm = new SourceMap.SourceMapConsumer({
            version: 3,
            sources: ['foo', 'bar'],
            names: ['foo', 'bar'],
            mappings: 'foo',
            file: 'sdf'
        });

        // create from index map
        const iscm: SourceMap.IndexedSourceMapConsumer = new SourceMap.SourceMapConsumer({
            version: 3,
            sections: [
                { offset: { line: 0, column: 0 }, map: {
                    version: 3,
                    sources: ['foo', 'bar'],
                    names: ['foo', 'bar'],
                    mappings: 'foo',
                    file: 'foo'
                } }
            ]
        });

        let scg: SourceMap.SourceMapGenerator;
        const bscm: SourceMap.BasicSourceMapConsumer = SourceMap.SourceMapConsumer.fromSourceMap(scg);
    }

    function testOriginalPositionFor(scm: SourceMap.SourceMapConsumer) {
        let origPos: SourceMap.MappedPosition;
        origPos = scm.originalPositionFor({ line: 42, column: 42 });
        origPos = scm.originalPositionFor({ line: 42, column: 42, bias: SourceMap.SourceMapConsumer.LEAST_UPPER_BOUND });
    }

    function testAllGeneratedPositionsFor(scm: SourceMap.SourceMapConsumer) {
        let origPos: SourceMap.MappedPosition;
        let origPoses: SourceMap.Position[];
        origPoses = scm.allGeneratedPositionsFor(origPos);
    }

    function testGeneratedPositionFor(scm: SourceMap.SourceMapConsumer) {
        let genPos: SourceMap.Position;
        genPos = scm.generatedPositionFor({ line: 42, column: 42, source: 'foo' });
        genPos = scm.generatedPositionFor({ line: 42, column: 42, source: 'foo', name: 'bar' });
        genPos = scm.generatedPositionFor({ line: 42, column: 42, source: 'foo', name: 'bar', bias: SourceMap.SourceMapConsumer.LEAST_UPPER_BOUND });
    }

    function testSourceContentFor(scm: SourceMap.SourceMapConsumer) {
        let content: string;
        content = scm.sourceContentFor('foo');
    }

    function testEachMapping(scm: SourceMap.SourceMapConsumer) {
        let x: SourceMap.MappingItem;
        let context: {};

        scm.eachMapping(mapping => { x = mapping; });
        scm.eachMapping(mapping => { x = mapping; }, context);
        scm.eachMapping(mapping => { x = mapping; }, context, SourceMap.SourceMapConsumer.GENERATED_ORDER);
        scm.eachMapping(mapping => { x = mapping; }, context, SourceMap.SourceMapConsumer.ORIGINAL_ORDER);
    }
}

function testSourceMapGenerator() {
    function testConstructor() {
        let generator: SourceMap.SourceMapGenerator;

        generator = new SourceMap.SourceMapGenerator();
        generator = new SourceMap.SourceMapGenerator({
            file: 'foo'
        });
        generator = new SourceMap.SourceMapGenerator({
            sourceRoot: 'foo'
        });
        generator = new SourceMap.SourceMapGenerator({
            file: 'foo',
            sourceRoot: 'bar'
        });
    }

    function testFromSourceMap(generator: SourceMap.SourceMapGenerator, scm: SourceMap.SourceMapConsumer) {
        generator = SourceMap.SourceMapGenerator.fromSourceMap(scm);
    }

    function testAddMapping(generator: SourceMap.SourceMapGenerator) {
        generator.addMapping({
            generated: { line: 42, column: 42 },
            original: { line: 42, column: 42 },
            source: 'foo',
            name: 'foo'
        });

        generator.addMapping({
            generated: { line: 42, column: 42 },
            original: { line: 42, column: 42 },
            source: 'foo'
        });
    }

    function testSetSourceContent(generator: SourceMap.SourceMapGenerator) {
        generator.setSourceContent('foo', 'bar');
    }

    function testApplySourceMap(generator: SourceMap.SourceMapGenerator, scm: SourceMap.SourceMapConsumer) {
        generator.applySourceMap(scm);
        generator.applySourceMap(scm, 'foo');
        generator.applySourceMap(scm, 'foo', 'bar');
    }

    function testToString(generator: SourceMap.SourceMapGenerator) {
        let str: string;
        str = generator.toString();
    }
}

function testSourceNode() {
    function testConstructor() {
        let node: SourceMap.SourceNode;

        node = new SourceMap.SourceNode();
        node = new SourceMap.SourceNode(42, 42, 'foo');
        node = new SourceMap.SourceNode(42, 42, 'foo', 'bar');
        node = new SourceMap.SourceNode(42, 42, 'foo', 'bar', 'slam');
        node = new SourceMap.SourceNode(42, 42, 'foo', ['bar', 'slam']);
    }

    function testFromStringWithSourceMap(scm: SourceMap.SourceMapConsumer) {
        let node: SourceMap.SourceNode;

        node = SourceMap.SourceNode.fromStringWithSourceMap('foo', scm);
        node = SourceMap.SourceNode.fromStringWithSourceMap('foo', scm, 'bar');
    }

    function testAdd(node: SourceMap.SourceNode) {
        node.add('foo');
        node.add(new SourceMap.SourceNode());
        node.add([new SourceMap.SourceNode(), 'bar']);
    }

    function testPrepend(node: SourceMap.SourceNode) {
        node.prepend('foo');
        node.prepend(new SourceMap.SourceNode());
        node.prepend([new SourceMap.SourceNode(), 'bar']);
    }

    function testSetSourceContent(node: SourceMap.SourceNode) {
        node.setSourceContent('foo', 'bar');
    }

    function testWalk(node: SourceMap.SourceNode) {
        let chunk: string;
        let mapping: SourceMap.MappedPosition;

        node.walk((c, m) => { chunk = c; mapping = m; });
    }

    function testWalkSourceContents(node: SourceMap.SourceNode) {
        let file: string;
        let content: string;

        node.walkSourceContents((f, c) => { file = f; content = c; });
    }

    function testJoin(node: SourceMap.SourceNode) {
        node = node.join('foo');
    }

    function testReplaceRight(node: SourceMap.SourceNode) {
        node = node.replaceRight('foo', 'bar');
    }

    function testToString(node: SourceMap.SourceNode) {
        let str: string;
        str = node.toString();
    }

    function testToStringWithSourceMap(node: SourceMap.SourceNode, sos: SourceMap.StartOfSourceMap) {
        let result: SourceMap.CodeWithSourceMap;
        result = node.toStringWithSourceMap();
        result = node.toStringWithSourceMap(sos);
    }
}
