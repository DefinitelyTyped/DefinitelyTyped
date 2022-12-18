export interface Currency {
    code: string;
    rate: number;
    name: string;
    symbol: string;
    decimals: number;
    priced: boolean;
    type: 'base' | 'priced';
}

export interface CurrencySelect {
    cartId?: string;
    publicKey: string;
    currency: string;
}
