// Type definitions for coinlist 3.1
// Project: https://github.com/lukechilds/coinlist
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import coinsJson = require('./src/coins.json');

export = coins;

declare const coins: coins.Coin[] & coins.CoinsAPI;

declare namespace coins {
    type Coin = coinsJson.Coin;

    interface CoinsAPI {
        get(symbol: string): Coin | undefined;
        get(symbol: string, property: 'id' | 'symbol' | 'name'): string | undefined;
    }
}
