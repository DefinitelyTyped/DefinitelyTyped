// Type definitions for react-js-table-with-csv-dl 0.9
// Project: https://github.com/jciccio/react-table-with-csv-download
// Definitions by: manuzcheruz <https://github.com/manuzcheruz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface TableViewerProps {
    /**
     * An array of objects. The key will be used for the table headers.
     */
    content: any[];

    /**
     * An array of strings with the headers you want to display
     */
    headers: string[];

    /**
     * Min table desired height
     */
    minHeight: number;

    /**
     * Max table desired height
     */
    maxHeight: number;

    /**
     * if you want to have a download button
     */
    activateDownloadButton?: boolean;

    topPaginator?: boolean;
    headerCss?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    bodyCss?: React.CSSProperties;
    filename?: string;
    renderLineNumber?: boolean;
    reverseLineNumber?: boolean;
    pagination?: number;
    pageBoxStyle?: React.CSSProperties;
    activePageBoxStyle?: React.CSSProperties;
    maxPagesToDisplay?: number;
    downloadButtonStyle?: React.CSSProperties;
    sortColumn?: string;
    encoding?: string;
    successColor?: string;
    warningColor?: string;
    errorColor?: string;
}

export default class TableViewer extends React.Component<TableViewerProps> { }
