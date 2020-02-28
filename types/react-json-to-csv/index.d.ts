import * as React from 'react';

export interface CsvDownloadProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Data in JSON format
     *
     * @default null
     */
    data: object | null;
    /**
     * @default export.csv
     */
    filename?: string;
    /**
     * @default Download Data
     */
    children?: string;
}

declare const CsvDownload: React.FunctionComponent<CsvDownloadProps>;

export default CsvDownload;
