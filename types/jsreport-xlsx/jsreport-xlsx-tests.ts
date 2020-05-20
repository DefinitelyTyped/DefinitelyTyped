import JsReport = require('jsreport-core');
import JsreportHtml2Xlsx = require('jsreport-html-to-xlsx');
import JsreportXlsx = require('jsreport-xlsx');

const jsreport = JsReport();
jsreport.use(JsreportXlsx());
jsreport.use(JsreportHtml2Xlsx());

(async () => {
    const content = `<table><tr><td>test</td></tr></table>`;
    await jsreport.init();
    const resp = await jsreport.render({
        template: {
            content,
            engine: 'none',
            recipe: 'xlsx'
        }
    });
})();
