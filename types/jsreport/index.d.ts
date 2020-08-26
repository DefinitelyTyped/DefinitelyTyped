// Type definitions for jsreport 2.9
// Project: https://github.com/jsreport/jsreport
// Definitions by: pofider <https://github.com/jsreport>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// import all availible types for jsreport included extensions
import JsReportChromePdf = require('jsreport-chrome-pdf');
import JsReportJsRender = require('jsreport-jsrender');
import JReportHtmlToXlsx = require('jsreport-html-to-xlsx');
import JsReportXlsx = require('jsreport-xlsx');

// just reexport types from core
import JsReport = require('jsreport-core');
export = JsReport;
