import JsReport = require("jsreport-core");
import JsReportChromePdf = require("jsreport-chrome-pdf");
import JsRender = require("jsreport-jsrender");
import fs = require('fs');

const jsreport = JsReport({
    tasks: {
        strategy: "http-server"
    }
});

jsreport.beforeRenderListeners.add('test', (req, res) => {
    console.log('input', req.template.content);
});

jsreport.use(JsReportChromePdf());
jsreport.use(JsRender());

(async () => {
    await jsreport.init();
    const res = await jsreport.render({
        template: {
            content: 'content',
            recipe: 'chrome-pdf',
            engine: 'handlebars',
            chrome: {
                landscape: true,
                scale: 2.0,
                url: 'https://jsreport.net',
                header: 'Foo',
                mediaType: 'screen',
                displayHeaderFooter: true,
                margin: {
                    top: '80px',
                    bottom: '80px',
                },
                marginBottom: '80px',
                headerTemplate: '{{printNumber 1}}<br/>',
                footerTemplate: '{{printNumber 2}}<br/>'
            },
            helpers: `function printNumber (num) { return num  }`
        },
        data: { foo: "hello2" }
    });
    fs.writeFileSync('./types/test/test.pdf', res.content);
    process.exit(0);
})();
