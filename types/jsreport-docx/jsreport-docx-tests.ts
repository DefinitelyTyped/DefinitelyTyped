import JsReport = require("jsreport-core");
import JsReportDocx = require("jsreport-docx");

const template: JsReport.TemplateLike = {
    content: "",
    recipe: "docx",
    engine: "handlebars",
    docx: {
        templateAsetShortid: "aaaa",
    },
};

(async () => {
    const jsreport = JsReport();
    jsreport.use(JsReportDocx());

    try {
        await jsreport.render({
            template,
        });
    } catch (e) {
        // intentional
    }

    await jsreport.init();
    await jsreport.close();
})();
