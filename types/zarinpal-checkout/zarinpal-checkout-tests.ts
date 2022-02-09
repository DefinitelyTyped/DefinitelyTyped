import * as ZarinpalCheckout from 'zarinpal-checkout';

const zarinpal = ZarinpalCheckout.create('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', false);

zarinpal
    .PaymentRequest({
        Amount: 1000,
        CallbackURL: 'https://your-safe-api/example/zarinpal/validate',
        Description: 'A Payment from Node.JS',
        Email: 'hi@omiid.ir',
        Mobile: '09120000000',
    })
    .then(response => {
        if (response.status === 100) {
            console.log(response.url);
        }
    })
    .catch(err => {
        console.error(err);
    });

zarinpal
    .PaymentVerification({
        Amount: 1000,
        Authority: '000000000000000000000000000000000000',
    })
    .then(response => {
        if (response.status === -21) {
            console.log('Empty!');
        } else {
            console.log(`Verified! Ref ID: ${response.RefID}`);
        }
    })
    .catch(err => {
        console.error(err);
    });

zarinpal
    .UnverifiedTransactions()
    .then(response => {
        if (response.status === 100) {
            console.log(response.authorities);
        }
    })
    .catch(err => {
        console.error(err);
    });

zarinpal
    .RefreshAuthority({
        Authority: '000000000000000000000000000000000000',
        Expire: 1800,
    })
    .then(response => {
        if (response.status === 100) {
            console.log(response.status);
        }
    })
    .catch(err => {
        console.error(err);
    });
