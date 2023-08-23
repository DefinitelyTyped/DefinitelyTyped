// Type definitions for geobuckets 0.0
// Project: https://github.com/mtralka/GeoBuckets#readme
// Definitions by: Dmitry Baranov <https://github.com/DmitryBaranovAndreevich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */

export function arithmeticProgressionBuckets(data: number[], numberClasses: number): Promise<number[]>;
export function equalIntervalBuckets(
    data: number[],
    numberClasses: number,
    classMin?: number,
    classMax?: number,
): Promise<number[]>;
export function geometricProgressionBuckets(data: number[], numberClasses: number): Promise<number[]>;
export function jenksBuckets(data: number[], numberClasses: number): Promise<number[]>;
export function quantileBuckets(data: number[], numberClasses: number): Promise<number[]>;
export function standardDeviationBuckets(
    data: number[],
    numberClasses: number,
    matchDataBounds?: boolean,
): Promise<number[]>;
export function calcStandardDeviation(data: number[]): Promise<number>;
export function calcMean(data: number[]): Promise<number>;
export function generateBuckets(
    name: BucketTypes | string,
    data: number[],
    numberClasses: number,
): Promise<number[]>;

export enum BucketTypes {
    EQI = 'EQI',
    QNT = 'QNT',
    STD = 'STD',
    GPG = 'GPG',
    APG = 'APG',
    JNK = 'JNK',
}
