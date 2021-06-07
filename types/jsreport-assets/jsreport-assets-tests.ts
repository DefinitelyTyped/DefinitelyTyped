import JsReport = require('jsreport-core');
import JsReportAssets = require('jsreport-assets');

(async () => {
    const jsreport = JsReport();
    jsreport.use(JsReportAssets({
        publicAccessEnabled: true
    }));
    await jsreport.init();
    await jsreport.close();
})();
