import { GraphPointer } from "clownface";
import { Writable } from "stream";
import { Logger } from 'winston';
import Pipeline, { VariableMap } from 'barnard59-core/lib/Pipeline';

interface Runner {
    finished: Promise<any>;
    pipeline: Pipeline;
}

interface Create {
    basePath: string;
    outputStream: Writable;
    variables?: VariableMap;
    logger?: Logger;
    level?: 'error' | 'info' | 'debug';
}

export default  function create(ptr: GraphPointer, args?: Create): Promise<Runner>;
export {};
