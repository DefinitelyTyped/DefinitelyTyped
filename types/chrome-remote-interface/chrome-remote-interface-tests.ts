import CDP = require('chrome-remote-interface');

(async () => {
    let client: CDP.Client | undefined;
    try {
        const cdpPort = { port: 9223 };
        client = await CDP(cdpPort);
        const { Page, Runtime } = client;
        await Page.enable();
        await Page.navigate({ url: 'https://github.com' });
        // await Page.loadEventFired();
        await Runtime.enable();
        const loc = await Runtime.evaluate({ expression: 'window.location.toString()' });
        const targets = await CDP.List(cdpPort);
        for (const target of targets) {
            if (target.url.startsWith('https://github.com')) {
                await CDP.Close({ ...cdpPort, id: target.id });
            }
        }
    } finally {
        if (client) {
            await client.close();
        }
    }
})();

(() => {
    const cdpPort = { port: 9223 };
    CDP(cdpPort, client => {
        CDP.List(cdpPort, (err, targets) => {
            if (!err) {
                for (const target of targets) {
                    if (target.url.startsWith('https://github.com')) {
                        CDP.Close({ id: target.id }, err => {});
                    }
                }
            }
        });
        client.close();
    });
})();

(() => {
    CDP(client => {
        CDP.List((err, targets) => {
            if (!err) {
                for (const target of targets) {
                    if (target.url.startsWith('https://github.com')) {
                        CDP.Close({ id: target.id }, err => {});
                    }
                }
            }
        });
        client.close();
    });
})();
