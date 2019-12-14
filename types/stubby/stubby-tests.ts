import { Stubby } from 'stubby';

// README
{
    const stubby1 = new Stubby();
    const stubby2 = new Stubby();

    stubby1.start({
        stubs: 80,
        admin: 81,
        location: 'localhost',
        data: [
            {
                request: { url: '/anywhere' },
            },
            {
                request: { url: '/but/here' },
            },
        ],
    });

    stubby2.start({
        stubs: 82,
        admin: 83,
        location: '127.0.0.2',
    });
}
