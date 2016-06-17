/// <reference path="./source-map.d.ts" />

﻿import SourceMap = require('source-map');

function testSourceMapConsumer() {
    function testConstructor() {
        var scm: SourceMap.SourceMapConsumer;

        // create with full RawSourceMap
        scm = new SourceMap.SourceMapConsumer({
            version: 'foo',
            sources: ['foo', 'bar'],
            names: ['foo', 'bar'],
            sourcesContent: ['foo'],
            mappings: 'foo'
        });

        // create with partial RawSourceMap
        scm = new SourceMap.SourceMapConsumer({
            version: 'foo',
            sources: ['foo', 'bar'],
            names: ['foo', 'bar'],
            mappings: 'foo'
        });
    }

    function testOriginalPositionFor(scm: SourceMap.SourceMapConsumer) {
        var origPos: SourceMap.MappedPosition;
        origPos = scm.originalPositionFor({ line: 42, column: 42 });
    }

    function testGeneratedPositionFor(scm: SourceMap.SourceMapConsumer) {
        var genPos: SourceMap.Position;
        genPos = scm.generatedPositionFor({ line: 42, column: 42, source: 'foo' });
        genPos = scm.generatedPositionFor({ line: 42, column: 42, source: 'foo', name: 'bar' });
    }

    function testSourceContentFor(scm: SourceMap.SourceMapConsumer) {
        var content: string;
        content = scm.sourceContentFor('foo');
    }

    function testEachMapping(scm: SourceMap.SourceMapConsumer) {
        var x: SourceMap.MappingItem;
        var context: {};

        scm.eachMapping(mapping => { x = mapping; });
        scm.eachMapping(mapping => { x = mapping; }, context);
        scm.eachMapping(mapping => { x = mapping; }, context, SourceMap.SourceMapConsumer.GENERATED_ORDER);
        scm.eachMapping(mapping => { x = mapping; }, context, SourceMap.SourceMapConsumer.ORIGINAL_ORDER);
    }
}

function testSourceMapGenerator() {
    function testConstructor() {
        var generator: SourceMap.SourceMapGenerator;

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
        var str: string;
        str = generator.toString();
    }
}

function testSourceNode() {
    function testConstructor() {
        var node: SourceMap.SourceNode;

        node = new SourceMap.SourceNode();
        node = new SourceMap.SourceNode(42, 42, 'foo');
        node = new SourceMap.SourceNode(42, 42, 'foo', 'bar');
        node = new SourceMap.SourceNode(42, 42, 'foo', 'bar', 'slam');
    }

    function testFromStringWithSourceMap(scm: SourceMap.SourceMapConsumer) {
        var node: SourceMap.SourceNode;

        node = SourceMap.SourceNode.fromStringWithSourceMap('foo', scm);
        node = SourceMap.SourceNode.fromStringWithSourceMap('foo', scm, 'bar');
    }

    function testAdd(node: SourceMap.SourceNode) {
        node.add('foo');
    }

    function testPrepend(node: SourceMap.SourceNode) {
        node.prepend('foo');
    }

    function testSetSourceContent(node: SourceMap.SourceNode) {
        node.setSourceContent('foo', 'bar');
    }

    function testWalk(node: SourceMap.SourceNode) {
        var chunk: string;
        var mapping: SourceMap.MappedPosition;

        node.walk((c, m) => { chunk = c; mapping = m; });
    }

    function testWalkSourceContents(node: SourceMap.SourceNode) {
        var file: string;
        var content: string;

        node.walkSourceContents((f, c) => { file = f; content = c; });
    }

    function testJoin(node: SourceMap.SourceNode) {
        node = node.join('foo');
    }

    function testReplaceRight(node: SourceMap.SourceNode) {
        node = node.replaceRight('foo', 'bar');
    }

    function testToString(node: SourceMap.SourceNode) {
        var str: string;
        str = node.toString();
    }

    function testToStringWithSourceMap(node: SourceMap.SourceNode, sos: SourceMap.StartOfSourceMap) {
        var result: SourceMap.CodeWithSourceMap;
        result = node.toStringWithSourceMap();
        result = node.toStringWithSourceMap(sos);
    }
}
