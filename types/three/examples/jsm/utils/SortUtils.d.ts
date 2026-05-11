export interface RadixSortOptions<T> {
    aux?: T[] | undefined;
    get?: ((el: T) => number) | undefined;
    reversed?: boolean | undefined;
}

export const radixSort: <T = number>(arr: T[], opt?: RadixSortOptions<T>) => void;
