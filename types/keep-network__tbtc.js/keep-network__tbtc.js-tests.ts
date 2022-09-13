import TBTC from '@keep-network/tbtc.js';

const tbtc = TBTC.withConfig({
    web3: {} as any,
    bitcoinNetwork: "testnet",
    electrum: {
        testnet: {
            server: "electrumx-server.test.tbtc.network",
            port: 50002,
            protocol: "ssl"
        },
        testnetWS: {
            server: "electrumx-server.test.tbtc.network",
            port: 50003,
            protocol: "ws"
        }
    },
});
