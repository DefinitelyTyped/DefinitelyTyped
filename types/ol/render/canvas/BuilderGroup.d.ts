import { Extent } from '../../extent';
import { SerializableInstructions } from '../canvas';
import VectorContext from '../VectorContext';
import BuilderType from './BuilderType';

export default class BuilderGroup {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number);
    finish(): { [key: string]: { [key in BuilderType]: SerializableInstructions } };
    getBuilder(zIndex: number | undefined, builderType: BuilderType): VectorContext;
}
