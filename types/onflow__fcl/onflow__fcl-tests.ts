import * as fcl from '@onflow/fcl';

// CONFIGURATION
// Setting Configuration Values
// Ref: https://docs.onflow.org/fcl/reference/api/#setting-configuration-values
fcl.config({
    'accessNode.api': 'https://access-testnet.onflow.org',
    'discovery.wallet': 'https://fcl-discovery.onflow.org/testnet/authn',
});
// OR
fcl.config().put('foo', 'bar').put('accessNode.api', 'https://access-testnet.onflow.org');

// Getting Configuration Values
// Ref: https://docs.onflow.org/fcl/reference/api/#getting-configuration-values
const FALLBACK = 1;
fcl.config()
    .get('woot', FALLBACK)
    .then(d => console.log(d));

// Address replacement in scripts and transactions
// Ref: https://docs.onflow.org/fcl/reference/api/#address-replacement-in-scripts-and-transactions
fcl.config().put('0xFlowToken', '0x7e60df042a9c0868');

// WALLET INTERACTIONS
fcl.authenticate();
fcl.authenticate({
    service: {
        f_type: 'Service',
        f_vsn: '1.0.0',
        type: 'authn',
        method: 'IFRAME/RPC',
        uid: 'blocto#authn',
        endpoint: 'https://flow-wallet.blocto.app/authn',
        provider: {
            address: '0x55ad22f01ef568a1',
            name: 'Blocto',
            icon: '/images/blocto.png',
            description: 'Your Entrance To The Blockchain World.',
            color: '#afd8f7',
            supportEmail: 'support@blocto.app',
            website: 'https://blocto.portto.io',
        },
    },
});

fcl.unauthenticate();

fcl.reauthenticate();

fcl.signUp();
fcl.logIn();

console.log(fcl.authz);

fcl.currentUser.subscribe(console.log);
const user = fcl.currentUser.snapshot();

export const signMessage = async () => {
    const MSG = Buffer.from('FOO').toString('hex');
    try {
        return await fcl.currentUser.signUserMessage(MSG);
    } catch (error) {
        console.log(error);
    }
};

fcl.discovery.authn.subscribe(res => console.log(res.results));
