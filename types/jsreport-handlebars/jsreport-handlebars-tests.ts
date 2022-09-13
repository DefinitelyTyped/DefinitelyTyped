import JsReport = require('jsreport-core');
import JsReportHandlebars = require('jsreport-handlebars');

(async () => {
    const jsreport = JsReport();
    jsreport.use(JsReportHandlebars());
    await jsreport.init();
    await jsreport.close();
})();
