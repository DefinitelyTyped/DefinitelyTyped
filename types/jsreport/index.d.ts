// import all availible types for jsreport included extensions
import JsReportAssets = require("jsreport-assets");
import JsReportChromePdf = require("jsreport-chrome-pdf");
import JsReportDocx = require("jsreport-docx");
import JsReportHandlebars = require("jsreport-handlebars");
import JReportHtmlToXlsx = require("jsreport-html-to-xlsx");
import JsReportJsRender = require("jsreport-jsrender");
import JReportPdfUtils = require("jsreport-pdf-utils");
import JsReportReports = require("jsreport-reports");
import JsReportScripts = require("jsreport-scripts");
import JsReportTemplates = require("jsreport-templates");
import JsReportXlsx = require("jsreport-xlsx");

// just reexport types from core
import JsReport = require("jsreport-core");
export = JsReport;
