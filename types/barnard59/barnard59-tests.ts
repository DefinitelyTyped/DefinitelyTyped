import { DatasetCore, NamedNode } from '@rdfjs/types';
import { findPipeline, runner } from 'barnard59';
import Pipeline from 'barnard59-core/lib/Pipeline';
import { GraphPointer } from 'clownface';
import { Logger } from 'winston';

function testCreate() {
    const dataset: DatasetCore = <any> {};
    const iri: NamedNode = <any> {};
    let pipleine: GraphPointer;

    pipleine = findPipeline(dataset);
    pipleine = findPipeline(dataset, 'http://foo.bar/pipeline');
    pipleine = findPipeline(dataset, iri);
}

async function testRunner() {
    let finished: Promise<void>;
    let pipeline: Pipeline;
    const logger: Logger = <any> {};
    const pointer: GraphPointer = <any> {};

    ({ finished, pipeline } = await runner(pointer));
    ({ finished, pipeline } = await runner(pointer, {
        basePath: '',
        logger,
        outputStream: process.stdout,
    }));
    ({ finished, pipeline } = await runner(pointer, {
        basePath: '',
        logger,
        outputStream: process.stdout,
        level: 'debug',
        variables: new Map()
    }));
}
