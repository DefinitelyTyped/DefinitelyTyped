import { Extent } from '../../extent';
import VectorContext from '../VectorContext';
import { SerializableInstructions } from '../canvas';
import BuilderType from './BuilderType';

export default class BuilderGroup {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number);
    finish(): Record<string, Record<BuilderType, SerializableInstructions>>;
    getBuilder(zIndex: number | undefined, builderType: BuilderType): VectorContext;
}
