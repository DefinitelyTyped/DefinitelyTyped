import { createPipeline, defaultLogger, run } from 'barnard59-core';
import Pipeline, { VariableMap } from "barnard59-core/lib/Pipeline";
import { GraphPointer } from 'clownface';
import { Logger } from 'winston';
import LoaderRegistry = require('rdf-loaders-registry');

function testCreatePipeline() {
    const ptr: GraphPointer = <any> {};
    const loaderRegistry: LoaderRegistry = <any> {};
    const logger: Logger = <any> {};

    let pipeline: Pipeline;

    pipeline = createPipeline(ptr);
    pipeline = createPipeline(ptr, { basePath: '' });
    pipeline = createPipeline(ptr, {
        basePath: '',
        loaderRegistry,
        context: {},
        logger,
        variables: new Map()
    });
}

function testDefaultLogger() {
    let logger: Logger;

    logger = defaultLogger();
    logger = defaultLogger({});

    const level: 'error' | 'info' | 'debug' = 'error';
    logger = defaultLogger({
        level
    });

    logger = defaultLogger({
        console: true
    });

    logger = defaultLogger({
        errorFilename: './err.log'
    });

    logger = defaultLogger({
        filename: 'pipeline.log'
    });
}

async function testRun() {
    const pipeline: Pipeline = <any> {};

    await run(pipeline);
    await run(pipeline, {
        end: true
    });
    await run(pipeline, {
        resume: true
    });
}

declare module 'barnard59-core' {
    interface Variables {
        foo: string;
        bar: number;
    }
}

function testAugmentedVariables(variables: VariableMap) {
    variables.set('foo', 'bar');
    // $ExpectError
    variables.set('foo', {});

    const foo: string = variables.get('foo');
    const bar: number = variables.get('bar');
    // $ExpectError
    const notBar: string = variables.get('bar');
}
