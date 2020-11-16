import JsReport = require('jsreport-core');
import JsReportScripts = require('jsreport-scripts');

(async () => {
    const jsreport = JsReport();
    jsreport.use(JsReportScripts());

    await jsreport.render({
        template: {
            content: '',
            recipe: 'html',
            engine: 'handlebars',
            scripts: [{
                content: `function beforeRender(req, res) {}`
            }]
        }
    });

    await jsreport.init();
    await jsreport.close();
})();
