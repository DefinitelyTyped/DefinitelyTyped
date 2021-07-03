import JsReport = require('jsreport-core');
import JsReportTemplates = require('jsreport-templates');

(async () => {
    const jsreport = JsReport();
    jsreport.use(JsReportTemplates());

    await jsreport.init();
    await jsreport.close();
})();
