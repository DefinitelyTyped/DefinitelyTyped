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

(async () => {
    // Launch the browser.
    const app = await carlo.launch();

    // Terminate Node.js process on app window closing.
    app.on('exit', () => process.exit());

    // Tell carlo where your web files are located.
    app.serveFolder(__dirname);

    // Expose 'env' function in the web environment.
    await app.exposeFunction('env', _ => process.env);

    // Navigate to the main page of your app.
    await app.load('example.html');
})();
