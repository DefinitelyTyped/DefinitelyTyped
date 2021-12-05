/**
 * Docs: https://github.com/suryapratapsinghsuryavanshi/solverjs/blob/main/src/number/number.js
 */

/**
 * the hacToXxx methods return hexadecimal to decimal, Octal, binary numbers.
 */
export function hexToDec(hex: number): number;
export function hexToOct(hex: number): string;
export function hexToBin(hex: number): string;

/**
 * the decToXxx methods return decimal to hexadecimal, Octal, binary numbers.
 */
export function decToHex(dec: number): string;
export function decToOct(dec: number): string;
export function decToBin(dec: number): string;

/**
 * the octToXxx methods return octal to hexadecimal, decimal, binary numbers.
 */
export function octToHex(oct: number): string;
export function octToDec(oct: number): number;
export function octToBin(oct: number): string;

/**
 * the binToXxx methods return binary to hexadecimal, decimal, ocatal numbers.
 */
export function binToHex(bin: string): string;
export function binToDec(bin: string): number;
export function binToOct(bin: string): string;
