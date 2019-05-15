export = coins;

declare const coins: coins.Coin[];

declare namespace coins {
    interface Coin {
        id: string;
        symbol: string;
        name: string;
    }
}
