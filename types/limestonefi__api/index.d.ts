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
