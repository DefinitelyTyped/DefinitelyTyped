import Client from 'belvo';

const client = new Client('YOUR-KEY-ID', 'YOUR-SECRET', 'sandbox');

async function testingBankingEndpoints() {
    try {
        client.connect(); // $ExpectType void

        const link = await client.links.register('erebor_mx_retail', 'bnk1006', 'supersecret'); // $ExpectType LinksReturn
        const accounts = await client.accounts.retrieve(link.id); // $ExpectType AccountsReturn | AccountsReturn[]
        const transactions = await client.transactions.retrieve(link.id, '2021-01-01', '2021-12-31'); // $ExpectType TransactionsReturn | TransactionsReturn[]
        const balances = await client.balances.retrieve(link.id, '2021-01-01'); // $ExpectType BalancesReturn | BalancesReturn[]
        const owners = await client.owners.retrieve(link.id); // $ExpectType OwnersReturn | OwnersReturn[]
        const statements = await client.statements.retrieve(link.id, "2021", "01", "6966b0e6-6642-4333-9678-fd0c22f90a6d"); // $ExpectType StatementsReturn | StatementsReturn[]
        const incomes = await client.incomes.retrieve(link.id); // $ExpectType IncomesReturn | IncomesReturn[]

        return {
            accounts,
            transactions,
            balances,
            owners,
            statements,
            incomes
        };
    } catch (error) {
        return error;
    }
}
