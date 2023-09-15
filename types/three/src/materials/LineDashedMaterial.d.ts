import { LineBasicMaterial, LineBasicMaterialParameters } from './LineBasicMaterial.js';

export interface LineDashedMaterialParameters extends LineBasicMaterialParameters {
    scale?: number | undefined;
    dashSize?: number | undefined;
    gapSize?: number | undefined;
}

export class LineDashedMaterial extends LineBasicMaterial {
    constructor(parameters?: LineDashedMaterialParameters);

    /**
     * @default 'LineDashedMaterial'
     */
    type: string;

    /**
     * @default 1
     */
    scale: number;

    /**
     * @default 1
     */
    dashSize: number;

    /**
     * @default 1
     */
    gapSize: number;
    readonly isLineDashedMaterial: true;

    setValues(parameters: LineDashedMaterialParameters): void;
}
