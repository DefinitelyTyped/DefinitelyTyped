import CoinGecko = require('coingecko-api');

const client = new CoinGecko();

(async () => {
    await client.ping();
    await client.global();

    /**
     * coins
     */
    const resp = await client.coins.fetchMarketChartRange('pickle-finance', {
        vs_currency: 'usd',
        from: 1620864000,
        to: 1620864000,
    });
    const { data, success, code, message } = resp;

    await client.coins.all({ order: 'gecko_asc', page: 2 });

    await client.coins.fetchHistory('bitcoin', {
        date: '30-10-2021',
        localization: true,
    });

    await client.coins.fetch('bitcoin', {
        tickers: false,
    });

    /**
     * exchanges
     */

    await client.exchanges.all();

    await client.exchanges.fetch('mercado_bitcoin');

    /**
     * simple
     */
    await client.simple.price({ ids: ['pickle-finance', 'ethereum'], vs_currencies: 'usd', include_market_cap: true , include_24hr_change: true});
})();
