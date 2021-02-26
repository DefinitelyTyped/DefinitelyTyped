// Type definitions for Google Ads Scripts 2021-02-26
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="google-apps-script" />

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents a Google Ads report.
         */
        interface Report {
            /**
             * Exports the content of the report into a SpreadsheetApp.Sheet.
             * 
             * Typical usage:
             * 
             *      var spreadsheet = SpreadsheetApp.create("Report output");
             *      var report = AdsApp.report("SELECT Clicks, Impressions, AverageCpc, HourOfDay " +
             *          "FROM ACCOUNT_PERFORMANCE_REPORT " +
             *          "DURING LAST_MONTH");
             *      report.exportToSheet(spreadsheet.getActiveSheet());
             *      Logger.log("Report available at " + spreadsheet.getUrl());
             * 
             * Returns nothing. */
            exportToSheet(sheet: SpreadsheetApp.Sheet): void;
            /**
             * Returns the column header of the report matching the given AWQL column name.
             * 
             * AWQL names are the names of the selected columns as they appear in the generated report. For a full list of AWQL column names, and the display column names they correspond to, please see the Name and Display Name column in all types of reports.
             * 
             *      var report = AdsApp.report("SELECT Clicks, Impressions, AverageCpc, HourOfDay " +
             *          "FROM ACCOUNT_PERFORMANCE_REPORT " +
             *          "DURING LAST_MONTH");
             *      var columnHeader1 = report.getColumnHeader("HourOfDay");
             *      // AWQL name: "HourOfDay"
             *      Logger.log(columnHeader1.getReportColumnName());
             *      // display name: "Hour of day"
             *      Logger.log(columnHeader1.getBulkUploadColumnName());
             *      var columnHeader2 = report.getColumnHeader("AverageCpc");
             *      // AWQL name: "AverageCpc"
             *      Logger.log(columnHeader2.getReportColumnName());
             *      // display name: "Avg. CPC"
             *      Logger.log(columnHeader2.getBulkUploadColumnName());
             */
            getColumnHeader(): ReportColumnHeader;
            /** Returns an iterator over the rows of the report. */
            rows(): ReportRowIterator;
        }

        /** Represents a column header of a report. */
        interface ReportColumnHeader {
            /** Returns the name of the column header to use in bulk uploads. */
            getBulkUploadColumnName(): string;
            /** Returns the name of the column header as used in report queries. */
            getReportColumnName(): string;
        }
    }
}
