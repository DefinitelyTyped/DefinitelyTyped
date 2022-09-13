import JsReport = require('jsreport');
import Client = require('jsreport-client');

(async () => {
    const jsreport = JsReport();
    await jsreport.init();

    const client = Client('http://localhost:5488');
    await client.render({
        template: {
            recipe: 'html',
            engine: 'none',
            content: 'html'
        }
    });

    await jsreport.close();
})();
