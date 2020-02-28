// Type definitions for react-json-to-csv 1.0
// Project: https://github.com/coston/react-json-to-csv
// Definitions by: keith alleman <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
