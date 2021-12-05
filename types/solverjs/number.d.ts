/**
 * Docs: https://github.com/suryapratapsinghsuryavanshi/solverjs/blob/main/src/number/number.js
 */
declare namespace SolverJS {
    interface Static {
        /**
         * the hacToXxx methods return hexadecimal to decimal, Octal, binary numbers.
         */
        hexToDec(hex: number): number;
        hexToOct(hex: number): string;
        hexToBin(hex: number): string;

        /**
         * the decToXxx methods return decimal to hexadecimal, Octal, binary numbers.
         */
        decToHex(dec: number): string;
        decToOct(dec: number): string;
        decToBin(dec: number): string;

        /**
         * the octToXxx methods return octal to hexadecimal, decimal, binary numbers.
         */
        octToHex(oct: number): string;
        octToDec(oct: number): number;
        octToBin(oct: number): string;

        /**
         * the binToXxx methods return binary to hexadecimal, decimal, ocatal numbers.
         */
        binToHex(bin: string): string;
        binToDec(bin: string): number;
        binToOct(bin: string): string;
    }
}
