import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';
import { BufferGeometry } from '../core/BufferGeometry.js';
import { InstancedBufferGeometry } from '../core/InstancedBufferGeometry.js';

export class BufferGeometryLoader extends Loader<InstancedBufferGeometry | BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(json: unknown): InstancedBufferGeometry | BufferGeometry;
}
