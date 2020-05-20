import * as coinbase from "coinbase";

const client = new coinbase.Client({ apiKey: "key", apiSecret: "secret", version: "2017-10-22" });

client.getAccounts({}, (error: Error | null, result: coinbase.Account[]): void => undefined);

client.getAccount("abcdef", (error: Error | null, account: coinbase.Account): void => {
    account.buy({ amount: "1", commit: false, currency: "BTC", payment_method: "abcdef" }, (error: Error | null, buy: coinbase.Buy): void => {
        buy.commit((error: Error | null, buy: coinbase.Buy): void => undefined);
    });

    account.createAddress({ name: "foo" }, (error: Error | null, address: coinbase.Address): void => {
        address.getTransactions({}, (error: Error | null, transactions: coinbase.Transaction[]): void => undefined);
    });

    account.delete((error: Error | null): void => undefined);

    account.deposit({ amount: "1", commit: false, currency: "USD", payment_method: "abcdef" }, (error: Error | null, deposit: coinbase.Deposit): void => {
        deposit.commit((error: Error | null, deposit: coinbase.Deposit): void => undefined);
    });

    account.getAddress("abcdef", (error: Error | null, address: coinbase.Address): void => undefined);

    account.getAddresses((error: Error | null, address: coinbase.Address[]): void => undefined);

    account.getBuy("abcdef", (error: Error | null, buy: coinbase.Buy): void => undefined);

    account.getBuys(null, (error: Error | null, buy: coinbase.Buy[]): void => undefined);

    account.getDeposit("abcdef", (error: Error | null, deposit: coinbase.Deposit): void => undefined);

    account.getDeposits((error: Error | null, deposit: coinbase.Deposit[]): void => undefined);

    account.getSell("abcdef", (error: Error | null, deposit: coinbase.Sell): void => undefined);

    account.getSells(null, (error: Error | null, deposit: coinbase.Sell[]): void => undefined);

    account.getTransaction("abcdef", (error: Error | null, deposit: coinbase.Transaction): void => undefined);

    account.getTransactions({}, (error: Error | null, deposit: coinbase.Transaction[]): void => undefined);

    account.getWithdrawal("abcdef", (error: Error | null, deposit: coinbase.Withdrawal): void => undefined);

    account.getWithdrawals((error: Error | null, deposit: coinbase.Withdrawal[]): void => undefined);

    account.requestMoney(
        { amount: "1", currency: "EUR", description: "foo", to: "bar", type: "request" },
        (error: Error | null, result: coinbase.Transaction) => undefined
    );
    account.requestMoney({ amount: "1", currency: "EUR", to: "bar", type: "request" }, (error: Error | null, tx: coinbase.Transaction) => {
        tx.cancel((error: Error | null, tx: coinbase.Transaction): void => undefined);
        tx.complete((error: Error | null, tx: coinbase.Transaction): void => undefined);
        tx.resend((error: Error | null, tx: coinbase.Transaction): void => undefined);
    });

    account.sell(
        { agree_btc_amount_varies: true, amount: "1", commit: true, currency: "BTC", payment_method: "abcdef", quote: true },
        (error: Error | null, sell: coinbase.Sell): void => {
            sell.commit((error: Error | null, sell: coinbase.Sell): void => undefined);
        }
    );
    account.sell(
        { currency: "BTC", payment_method: "abcdef", total: "3" },
        (error: Error | null, sell: coinbase.Sell): void => {
            sell.commit((error: Error | null, sell: coinbase.Sell): void => undefined);
        }
    );

    account.sendMoney(
        { amount: "1", currency: "EUR", description: "foo", fee: "2", idem: "bar", to: "baz", type: "send" },
        (error: Error | null, result: coinbase.Transaction) => undefined
    );

    account.setPrimary((error: Error | null, result: coinbase.Account): void => undefined);

    account.transferMoney(
        { amount: "1", currency: "USD", description: "foo", to: "bar", type: "transfer" },
        (error: Error | null, tx: coinbase.Transaction): void => undefined
    );

    account.update({ name: "foo" }, (error: Error | null, result: coinbase.Account): void => undefined);

    account.withdraw({ amount: "1", commit: false, currency: "ETH", payment_method: "abcdef" }, (error: Error | null, result: coinbase.Withdrawal): void => {
        result.commit((error: Error | null, result: coinbase.Withdrawal): void => undefined);
    });
});

client.getBuyPrice({ currencyPair: "USD-BTC" }, (error: Error | null, result: coinbase.Price): void => undefined);

client.getCurrencies((error: Error | null, result: coinbase.Currencies): void => undefined);

client.getExchangeRates({ currency: "ETC" }, (error: Error | null, result: coinbase.ExchangeRate): void => undefined);

client.getPaymentMethod("foo", (error: Error | null, result: coinbase.PaymentMethod): void => undefined);

client.getPaymentMethods((error: Error | null, result: coinbase.PaymentMethod[]): void => undefined);

client.getSellPrice({ currencyPair: "USD-BTC" }, (error: Error | null, result: coinbase.Price): void => undefined);

client.getSpotPrice({ currencyPair: "USD-BTC" }, (error: Error | null, result: coinbase.Price): void => undefined);
client.getSpotPrice({ currencyPair: "USD-BTC", date: "2017-22-01" }, (error: Error | null, result: coinbase.Price): void => undefined);

client.getTime((error: Error | null, result: coinbase.Time): void => undefined);

client.getUser("abcdef", (error: Error | null, user: coinbase.User): void => {
    user.showAuth((error: Error | null, auth: coinbase.Auth): void => undefined);
    user.update({ name: "foo", time_zone: "bar", native_currency: "USD" }, (error: Error | null, user: coinbase.User): void => undefined);
});
