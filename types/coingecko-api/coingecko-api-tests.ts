import CoinGecko = require("coingecko-api");

const client = new CoinGecko();

(async () => {
    await client.ping();
    await client.global();

    /**
     * coins
     */
    const resp = await client.coins.fetchMarketChartRange("pickle-finance", {
        vs_currency: "usd",
        from: 1620864000,
        to: 1620864000,
    });
    const { data, success, code, message } = resp;

    await client.coins.all({ order: "gecko_asc", page: 2 });

    /**
     * simple
     */
    await client.simple.price({ ids: ["pickle-finance", "ethereum"], vs_currencies: "usd" });
})();
