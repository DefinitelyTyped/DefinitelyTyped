export declare const randomNumberInRange: (min: number, max: number) => Promise<number>;
export declare const randomBytesToString: (len: number, withAlphabetSmall?: boolean, withAlphabetCapital?: boolean, withNumbers?: boolean) => Promise<string>;
export declare const generateRandomRoomUrl: (lenMin: number, lenMax?: number, withAlphabetSmall?: boolean, withAlphabetCapital?: boolean, withNumbers?: boolean) => Promise<string>;
/**
 * @function
 * Fisher-Yates shuffle of array.
 *
 * @param array: The array to randomly shuffle.
 *
 * @returns Promise<T[]>
 */
export declare const fisherYatesShuffle: <T>(array: T[]) => Promise<T[]>;
//# sourceMappingURL=utils.d.ts.map