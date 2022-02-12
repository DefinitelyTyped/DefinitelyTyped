import * as fcl from '@onflow/fcl';

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
