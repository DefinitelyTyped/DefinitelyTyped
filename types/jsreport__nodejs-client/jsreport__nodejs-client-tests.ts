import JsReport = require('jsreport');
import client = require('@jsreport/nodejs-client');

(async () => {
    const jsreport = JsReport();
    await jsreport.init();

    await client('http://localhost:5488').render({
        template: {
            recipe: 'html',
            engine: 'none',
            content: 'html',
        },
    });

    await jsreport.close();
})();
