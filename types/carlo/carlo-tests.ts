import carlo = require('carlo');

async function main() {
    const app = await carlo.launch({
        title: 'Test'
    });

    app.browserForTest();

    const window = await app.createWindow({});
    window.setBounds({
        top: 10,
        width: 30
    });
}
