import JsReport = require('jsreport-core');
import JsReportDocx = require('jsreport-docx');

(async () => {
    const jsreport = JsReport();
    jsreport.use(JsReportDocx());

    try {
        await jsreport.render({
            template: {
                content: '',
                recipe: 'docx',
                engine: 'handlebars',
                docx: {
                    templateAsetShortid: 'aaaa'
                }
            }
        });
    } catch (e) {
        // intentional
    }

    await jsreport.init();
    await jsreport.close();
})();
