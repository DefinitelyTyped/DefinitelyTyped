import JsReport = require('jsreport-core');
import JsReportReports = require('jsreport-reports');

(async () => {
    const jsreport = JsReport();
    jsreport.use(JsReportReports());

    await jsreport.render({
        template: {
            content: '',
            recipe: 'html',
            engine: 'handlebars',
        },
        options: {
            reports: {
                save: true
            }
        }
    });

    await jsreport.init();
    await jsreport.close();
})();
