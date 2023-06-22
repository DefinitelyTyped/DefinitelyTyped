import Barion = require('node-barion');

const barion = new Barion({
    Environment: 'test',
    POSKey: '9b652eac8f034674902b5cf0c3e2a984'
});

const transfer = {
    UserName: 'info@example.com',
    Password: 'someRlyStrongP4ss#!',
    SourceAccountId: 'bdf45c1d-bb98-4fee-bbf1-62411fb26b86',
    TargetEmail: 'hello@example.com',
    Amount: {
        Currency: 'HUF' as 'HUF',
        Value: 404
    },
    Comment: 'Buy me 1 EUR please.'
};

barion.emailTransfer(transfer, (err, data) => {
    if (err && err.name === 'BarionModelError') {
        return;
    } else if (err) {
        return;
    }
});

async function sendOrder() {
    try {
        const data = await barion.emailTransfer(transfer);
    } catch (err) {
    }
}
