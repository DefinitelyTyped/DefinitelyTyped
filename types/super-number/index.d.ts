declare namespace Ints {
    interface Integer {
        findNearestInteger(n: number): number;
        getDivisiblesOf(n: number): number[];
        getEvenNumbers(): number[];
        getEvenNumbersGreaterOrEqualThan(n: number): number[];
        getEvenNumbersGreaterThan(n: number): number[];
        getEvenNumbersLessOrEqualThan(n: number): number[];
        getEvenNumbersLessThan(n: number): number[];
        getGreatersThan(n: number): number[];
        getLessersThan(n: number): number[];
        getLessEvenNumbers(): number[];
        getLessOddNumbers(): number[];
        getLessOrEqualEvenNumbers(): number[];
        getLessOrEqualOddNumbers(): number[];
        getLessOrEqualPrimeNumbers(): number[];
        getLessPrimeNumbers(): number[];
        getMultiplesOf(n: number): number[];
        getNegativesNumbers(): number[];
        getOddNumbers(): number[];
        getOddNumbersGreaterOrEqualThan(n: number): number[];
        getOddNumbersGreaterThan(n: number): number[];
        getOddNumbersLessOrEqualThan(n: number): number[];
        getOddNumbersLessThan(n: number): number[];
        getPositivesNumbers(): number[];
        getPrimeNumbers(): number[];
        getPrimeNumbersGreaterOrEqualThan(n: number): number[];
        getPrimeNumbersGreaterThan(n: number): number[];
        getPrimeNumbersLessOrEqualThan(n: number): number[];
        getPrimeNumbersLessThan(n: number): number[];
        isEvenNumber(): boolean;
        isOddNumber(): boolean;
        isPrimeNumber(): boolean;
    }
}

declare function Ints(n: number | number[]): Ints.Integer;
export = Ints;
