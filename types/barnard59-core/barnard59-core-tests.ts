import { createPipeline, defaultLogger, run, VariableMap } from 'barnard59-core';
import Pipeline, { Context } from 'barnard59-core/lib/Pipeline';
import StreamObject from 'barnard59-core/lib/StreamObject';
import { GraphPointer } from 'clownface';
import { Logger } from 'winston';
import { LoaderRegistry } from 'rdf-loaders-registry';
import * as Stream from 'readable-stream';
import Step from 'barnard59-core/lib/Step';

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

function testPipeline() {
    let basePath: string;
    let children: StreamObject[];
    let context: Context;
    let loaderRegistry: LoaderRegistry;
    let logger: Logger;
    let ptr: GraphPointer;
    let variables: VariableMap;
    let stream: Stream.Readable | Stream.Writable;

    const pipeline: Pipeline = <any> {};

    ({
        basePath,
        children,
        context,
        logger,
        ptr,
        variables,
        stream,
        loaderRegistry
    } = pipeline);
}

function testStep() {
    let basePath: string;
    let children: StreamObject[];
    let context: Context;
    let loaderRegistry: LoaderRegistry;
    let logger: Logger;
    let ptr: GraphPointer;
    let variables: VariableMap;
    let args: unknown[] | Record<string, any>;
    let operation: unknown;
    let stream: Stream.Readable | Stream.Writable;

    const step: Step = <any> {};

    ({
        basePath,
        children,
        context,
        logger,
        ptr,
        variables,
        stream,
        args,
        operation,
        loaderRegistry
    } = step);
}
