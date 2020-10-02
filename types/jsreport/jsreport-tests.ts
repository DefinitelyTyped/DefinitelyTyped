import JsReport = require('jsreport');
import fs = require('fs');

const jsreport = JsReport();

jsreport.beforeRenderListeners.add('test', (req, res) => {
    console.log('input', req.template.content);
});

(async () => {
    await jsreport.init();
    await jsreport.documentStore.collection('settings').update({}, { $set: { foo: 1 } });
    const res = await jsreport.render({
        template: {
            content: "<h1>{{foo}}</h1>",
            engine: 'handlebars',
            recipe: 'chrome-pdf',
            chrome: {
                landscape: true
            }
        },
        data: { foo: "hello2" }
    });
    fs.writeFileSync('./types/test/test.pdf', res.content);
    process.exit(0);
})();
