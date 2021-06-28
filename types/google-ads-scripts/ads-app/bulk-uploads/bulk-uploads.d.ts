// tslint:disable: unified-signatures
declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Access to bulk uploads: `FileUpload`, `CsvUpload`.
         */
        interface BulkUploads {
            /**
             * Creates a CsvUpload with the given column headers.
             *
             * Example usages:
             *
             *      // Creates a CsvUpload with 3 columns named 'columnA', 'columnB' and 'columnC', respectively.
             *      var upload1 = AdsApp.bulkUploads().newCsvUpload(
             *          ['columnA', 'columnB', 'columnC']);
             *
             *      // Creates a CsvUpload which represents money in currency (e.g. 1.37) instead of in micros
             *      // (e.g. 137000).
             *      var upload2 = AdsApp.bulkUploads().newCsvUpload(
             *          ['columnA', 'columnB', 'columnC'], {
             *            moneyInMicros: false
             *          });
             */
            newCsvUpload(columnNames: string[], optArgs?: NewUploadOptionalArgs): CsvUpload;
            /** Creates a FileUpload with the given Google Sheet. */
            newFileUpload(sheet: GoogleAppsScript.Spreadsheet.Sheet, optArgs?: NewUploadOptionalArgs): FileUpload;
            /** Creates a FileUpload with the content in the given Blob. */
            newFileUpload(blob: GoogleAppsScript.Base.Blob, optArgs?: NewUploadOptionalArgs): FileUpload;
            /** Creates a FileUpload with the content in the given File in Drive. */
            newFileUpload(file: GoogleAppsScript.Drive.File, optArgs?: NewUploadOptionalArgs): FileUpload;
        }

        interface NewUploadOptionalArgs {
            /** File locale, specified in ISO format. Affects how numbers and dates are parsed. Defaults to en_US. See a full list in Supported Locales. */
            fileLocale?: string;
            /** Whether or not to represent money in micros ('1370000') or in currency ('1.37'). Defaults to true. */
            moneyInMicros?: boolean;
            /**
             * The time zone to use for dates. No default. The following formats are supported:
             *
             * A timezone in tz database (e.g. America/Los_Angeles etc.). See a full list in List of tz database time zones;
             *
             * Standard offsets in the form [+-]hhmm (e.g. +0800, -0500).
             *
             * **NOTE:** this field is required for offline conversion uploads.
             */
            timeZone?: string;
        }

        /** Represents a Bulk Upload which can be incrementally built up in CSV format and uploaded to the Bulk Uploads service. */
        interface CsvUpload {
            /**
             * Appends a row to the Bulk Upload.
             *
             * The row object is a key-value map. For each key-value pair:
             *
             * If the key exists in the provided column headers, its value will fill into the cell corresponding to the matching column;
             * If it doesn't exist, the key-value pair is ignored.
             *
             *      // The resulting CSV bulk upload of the following code would be:
             *      // +-------------+-------------+----------------+
             *      // |   Campaign  | Campaign ID | Campaign state |
             *      // +-------------+-------------+----------------+
             *      // | Campaign #2 |  2001684997 |     enabled    |
             *      // +-------------+-------------+----------------+
             *      var bulkUpload = AdsApp.bulkUploads().newCsvUpload([
             *          "Campaign",
             *          "Campaign ID",
             *          "Campaign state"]);
             *      bulkUpload.append({
             *          "Campaign":"Campaign #2",
             *          "Campaign ID":"2001684997",
             *          "Campaign state":"enabled"});
             */
            append(row: Record<string, string | number>): this;
            /**
             * Uploads the file and applies the changes.
             *
             * **When previewing a script, apply() previews the Bulk Upload instead of applying it.**
             */
            apply(): void;
            /** Specifies that this upload is used for Campaign Management entity changes. */
            forCampaignManagement(): this;
            /** Specifies that this upload is used for reporting offline conversions. */
            forOfflineConversions(): this;
            /** Uploads the file and previews the changes. */
            preview(): void;
            /** Sets the file name of the uploaded file. */
            setFileName(fileName: string): this;
        }

        /** Represents a Bulk Upload of an already-existing file, loaded from Blob, Google Sheet or Drive File. */
        interface FileUpload {
            /**
             * Uploads the file and applies the changes.
             *
             * **When previewing a script, apply() previews the Bulk Upload instead of applying it.**
             */
            apply(): void;
            /** Specifies that this upload is used for Campaign Management entity changes. */
            forCampaignManagement(): this;
            /** Specifies that this upload is used for reporting offline conversions. */
            forOfflineConversions(): this;
            /** Uploads the file and previews the changes. */
            preview(): void;
            /** Sets the file name of the uploaded file. */
            setFileName(fileName: string): this;
        }
    }
}
