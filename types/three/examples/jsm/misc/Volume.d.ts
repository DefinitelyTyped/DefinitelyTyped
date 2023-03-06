import { Matrix3 } from '../../../src/Three';

import { VolumeSlice } from './VolumeSlice';

export class Volume {
    constructor(xLength?: number, yLength?: number, zLength?: number, type?: string, arrayBuffer?: ArrayLike<number>);

    xLength: number;
    yLength: number;
    zLength: number;

    axisOrder: Array<'x' | 'y' | 'z'>;

    data: ArrayLike<number>;

    spacing: number[];
    offset: number[];

    matrix: Matrix3;

    lowerThreshold: number;
    upperThreshold: number;

    sliceList: VolumeSlice[];

    getData(i: number, j: number, k: number): number;
    access(i: number, j: number, k: number): number;
    reverseAccess(index: number): number[];

    map(functionToMap: () => void, context: this): this;

    extractPerpendicularPlane(axis: string, RASIndex: number): object;
    extractSlice(axis: string, index: number): VolumeSlice;

    repaintAllSlices(): this;
    computeMinMax(): number[];
}
