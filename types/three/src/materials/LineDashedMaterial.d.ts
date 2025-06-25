import { LineBasicMaterial, LineBasicMaterialParameters } from "./LineBasicMaterial.js";

export interface LineDashedMaterialParameters extends LineBasicMaterialParameters {
    scale?: number | undefined;
    dashSize?: number | undefined;
    gapSize?: number | undefined;
}

export class LineDashedMaterial extends LineBasicMaterial {
    constructor(parameters?: LineDashedMaterialParameters);

    /**
     * Read-only flag to check if a given object is of type {@link LineDashedMaterial}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLineDashedMaterial: true;

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

    setValues(parameters: LineDashedMaterialParameters): void;
}
