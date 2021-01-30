import { TypedArray } from '../polyfills';

export interface LoaderUtils {
    decodeText(array: TypedArray): string;
    extractUrlBase(url: string): string;
}

export const LoaderUtils: LoaderUtils;
