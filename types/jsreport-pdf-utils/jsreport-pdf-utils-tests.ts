import JsReport = require('jsreport-core');
import JsReportPdfUtils = require('jsreport-pdf-utils');

(async () => {
    const jsreport = JsReport();
    jsreport.use(JsReportPdfUtils());

    try {
        await jsreport.render({
            template: {
                content: '',
                recipe: 'docx',
                engine: 'handlebars',
                pdfOperations: [{
                    type: 'merge'
                }]
            }
        });
    } catch (e) {
        // intentional
    }

    await jsreport.init();
    await jsreport.close();
})();
