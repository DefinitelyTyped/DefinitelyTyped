import Paystack = require('paystack');

(async () => {
    const paystack = Paystack('test');

    let trans = await paystack.transaction.initialize({
        amount: 3000,
        email: 'dane@google.com',
        name: 'Segun',
        reference: '3235_332',
    });

    trans = await paystack.transaction.verify('agdag3214');

    trans = await paystack.customer.create({
        first_name: 'Any',
        email: 'dance@gmail.com',
        last_name: 'Any',
        phone: '09035647621',
        metadata: {},
    });

    trans = await paystack.misc.list_banks({ perPage: 50, page: 1 });

    trans = await paystack.plan.create({ name: 'string', amount: 3000, interval: 'hourly' });

    trans = await paystack.subaccount.create({
        account_number: '',
        business_name: '',
        percentage_charge: 3.5,
        settlement_bank: 'any',
    });

    trans = await paystack.subscription.create({
        customer: 'any',
        authorization: 'code',
        plan: '23s',
        start_date: new Date(),
    });
})();
