import { Extent } from '../../extent';
import { DeclutterGroups } from '../canvas';
import VectorContext from '../VectorContext';
import { SerializableInstructions } from './Builder';
import BuilderType from './BuilderType';

export default class BuilderGroup {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number, declutter: boolean);
    addDeclutter(group: boolean): DeclutterGroups;
    finish(): { [key: string]: { [key in BuilderType]: SerializableInstructions } };
    getBuilder(zIndex: number | undefined, builderType: BuilderType): VectorContext;
}
