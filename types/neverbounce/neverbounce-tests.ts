import NeverBounce = require('neverbounce');

const Client = new NeverBounce({});

Client.account.info().then(() => {});

Client.jobs.create([
        {
            id: '12345',
            email: 'email',
            name: 'name'
        }
    ], NeverBounce.job.inputType.supplied,
    'Created from Array.csv'
).then(() => {});
