// Type definitions for @limestonefi/api 0.1
// Project: https://github.com/limestone-finance/limestone-api
// Definitions by: Marton Lederer <https://github.com/martonlederer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

interface PriceData {
  price: number;
  updated: Date;
}

/**
 * Get the price of a supported token
 *
 * @param token Token symbol
 * @returns Price data
 */
export function getPrice(token: string): Promise<PriceData>;
export {};
