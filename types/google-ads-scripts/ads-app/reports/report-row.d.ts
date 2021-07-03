declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents a row of a report.
         *
         * NOTE: The ReportRow works as an associative array indexed by AWQL column name. In addition to working as a normal associative array,
         * ReportRow also has a ReportRow.formatForUpload() method, for convenience when working with bulk uploads.
         *
         * Typical usage:
         *
         *      var rows = report.rows();
         *      while (rows.hasNext()) {
         *        var row = rows.next();
         *        // The row works as an associative array
         *        var clicks = row['Clicks'];
         *        // Tweak the row and append it to a bulk upload.
         *        row['MaxCpc'] = row['MaxCpc'] + 1;
         *        upload.append(row.formatForUpload());
         *      }
         */
        interface ReportRow extends Record<string, any> {
            /**
             * Returns the report row as an associative array indexed by display column name.
             *
             * For detailed information about the display column name, please see the `Display Name` column in all types of reports.
             *
             * NOTE: If you're generating a CsvUpload with Report, make sure to use this method while appending rows. Typical usage:
             *
             *      var rows = report.rows();
             *      while (rows.hasNext()) {
             *        var row = rows.next();
             *        // ... tweak the row
             *        upload.append(row.formatForUpload());
             *      }
             */
            formatForUpload(): Record<string, string | number>;
        }

        /**
         * Represents an iterator of report rows.
         *
         * Typical usage:
         *
         *      var rows = report.rows();
         *      while (rows.hasNext()) {
         *        var row = rows.next();
         *      }
         */
        interface ReportRowIterator {
            /** Returns true if the report has more rows. */
            hasNext(): boolean;
            /** Returns the next row in the report. */
            next(): ReportRow;
        }

        /**
         * Represents an iterator of report rows.
         *
         * Typical usage:
         *
         *      var rows = report.rows();
         *      while (rows.hasNext()) {
         *        var row = rows.next();
         *      }
         */
        interface SearchRowIterator {
            /** Returns true if the search has more rows. */
            hasNext(): boolean;
            /**
             * Returns the next row in the search.
             *
             * Search rows are returned as plain Javascript objects. Individual requested fields can be accessed by accessing the nested field.
             *
             *
             *      var rows = AdsApp.search(
             *          'SELECT search_term_view.search_term, metrics.ctr ' +
             *          'FROM   search_term_view ' +
             *          'WHERE  segments.date BETWEEN "2013-01-01" AND "2013-03-01"');
             *
             *      while (rows.hasNext()) {
             *        var row = rows.next();
             *        var searchTerm = row['search_term_view'];
             *        var query = searchTerm['search_term'];
             *        var ctr = row['metrics']['ctr'];
             *      }
             */
            next(): any;
        }
    }
}
