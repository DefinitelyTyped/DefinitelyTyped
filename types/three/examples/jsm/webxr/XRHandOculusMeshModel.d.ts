import { Group, Object3D } from './../../../src/Three';

import { XRHandModel, XRHandModelHandedness } from './XRHandModelFactory';

export interface XRHandOculusMeshModelOptions {
    model: 'lowpoly';
}

export class XRHandOculusMeshModel {
    controller: Group;
    handModel: XRHandModel;
    bones: Array<Object3D | null>;

    constructor(
        handModel: XRHandModel,
        controller: Group,
        path: string,
        handedness: XRHandModelHandedness,
        options: XRHandOculusMeshModelOptions,
    );

    updateMesh: () => void;
}
