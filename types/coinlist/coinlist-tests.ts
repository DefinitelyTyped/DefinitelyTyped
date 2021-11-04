import coins = require('coinlist');
import coinsJson = require('coinlist/src/coins.json');

// $ExpectType Coin[] & CoinsAPI
coins;

// $ExpectType Coin[]
coinsJson;

let coinsArr = [
    {
        id: 'bitcoin',
        symbol: 'BTC',
        name: 'Bitcoin',
    },
    {
        id: 'litecoin',
        symbol: 'LTC',
        name: 'Litecoin',
    },
];

coinsArr = coins;
coinsArr = coinsJson;

// $ExpectType Coin | undefined
coins.get('BTC');

// $ExpectType string | undefined
coins.get('BTC', 'name');
// $ExpectType string | undefined
coins.get('BTC', 'symbol');
// $ExpectType string | undefined
coins.get('BTC', 'id');

coins.map(coin => coin.name);
