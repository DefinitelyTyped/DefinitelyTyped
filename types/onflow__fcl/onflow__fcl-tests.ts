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

// ON-CHAIN INTERACTIONS
async () => {
    const result: number = await fcl.query({
        cadence: `
          pub fun main(a: Int, b: Int, addr: Address): Int {
            log(addr)
            return a + b
          }
        `,
        args: (arg, t) => [arg(7, t.Int), arg(6, t.Int), arg('0xba1132bc08f82fe2', t.Address)],
    });
};

async () => {
    const txId = await fcl.mutate({
        cadence: `
      import Profile from 0xba1132bc08f82fe2

      transaction(name: String) {
        prepare(account: AuthAccount) {
          account.borrow<&{Profile.Owner}>(from: Profile.privatePath)!.setName(name)
        }
      }
    `,
        args: (arg, t) => [arg('myName', t.String)],
    });
};

async (address: fcl.Address) => {
    const account: fcl.AccountObject = await fcl.send([fcl.getAccount(address)]).then(fcl.decode);
};

async () => {
    const block: fcl.BlockObject = await fcl.send([fcl.getBlock(true)]).then(fcl.decode);
};

async () => {
    const block: fcl.Interaction = await fcl.send([fcl.getBlock(), fcl.atBlockHeight(123)]).then(fcl.decode);
};

async () => {
    const block: fcl.BlockObject = await fcl.send([fcl.getBlock(), fcl.atBlockId('23232323232')]).then(fcl.decode);
};

async () => {
    const block: fcl.BlockHeaderObject = await fcl.send([fcl.getBlockHeader()]).then(fcl.decode);
};

async () => {
    const events: fcl.EventObject[] = await fcl
        .send([fcl.getEventsAtBlockHeightRange('A.7e60df042a9c0868.FlowToken.TokensWithdrawn', 35580624, 35580624)])
        .then(fcl.decode);
};

async () => {
    const events: fcl.EventObject[] = await fcl
        .send([
            fcl.getEventsAtBlockIds('A.7e60df042a9c0868.FlowToken.TokensWithdrawn', [
                'c4f239d49e96d1e5fbcf1f31027a6e582e8c03fcd9954177b7723fdb03d938c7',
                '5dbaa85922eb194a3dc463c946cc01c866f2ff2b88f3e59e21c0d8d00113273f',
            ]),
        ])
        .then(fcl.decode);
};

async () => {
    const collection: fcl.CollectionObject = await fcl
        .send([fcl.getCollection('cccdb0c67d015dc7f6444e8f62a3244ed650215ed66b90603006c70c5ef1f6e5')])
        .then(fcl.decode);
};

async () => {
    const status: fcl.TransactionObject & {
        statusString: string;
    } = await fcl
        .send([fcl.getTransactionStatus('9dda5f281897389b99f103a1c6b180eec9dac870de846449a302103ce38453f3')])
        .then(fcl.decode);
};

async () => {
    const tx: fcl.TransactionObject = await fcl
        .send([fcl.getTransaction('9dda5f281897389b99f103a1c6b180eec9dac870de846449a302103ce38453f3')])
        .then(fcl.decode);
};

async () => {
    const code = `
    pub fun main(): Int {
        return 5 + 4
    }
    `;
    const answer: number = await fcl.send([fcl.script(code)]).then(fcl.decode);
};

async () => {
    const account = await fcl.account('0x1d007d755706c469');
};

async () => {
    await fcl.block();
    await fcl.block({ sealed: true });
    await fcl.block({ id: '0b1bdfa9ddaaf31d53c584f208313557d622d1fedee1586ffc38fb5400979faa' });
    await fcl.block({ height: 56481953 });
};

fcl.tx('9dda5f281897389b99f103a1c6b180eec9dac870de846449a302103ce38453f3').subscribe(console.log);

fcl.events('A.7e60df042a9c0868.FlowToken.TokensWithdrawn').subscribe(event => {
    console.log(event);
});

// TODO: add typings for "@onflow/types" to uncomment the test below
// import * as types from "@onflow/types";
// async () => {
//     const response = await fcl.send([
//         fcl.script`
//               pub fun main(int1: Int, int2: Int): Int {
//                   return int1 + int2
//               }
//           `,
//         fcl.args([fcl.arg(1, types.Int), fcl.arg(2, types.Int)]),
//     ]);

//     const decoded = await fcl.decode(response);
// };
