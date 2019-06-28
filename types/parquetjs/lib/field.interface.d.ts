export interface FieldInterface {
    name: string,
    primitiveType: string,
    originalType: string,
    path: string[],
    repetitionType: string,
    encoding: string,
    compression: string,
    typeLength: number|null,
    rLevelMax: number,
    dLevelMax: number,
}
