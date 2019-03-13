import carlo = require('carlo');

async function main() {
    const app = await carlo.launch({
        title: 'Test'
    });

    app.browserForTest();
}
