// Type definitions for react-native-view-pdf 0.8
// Project: https://github.com/rumax/react-native-PDFView#readme
// Definitions by: Sérgio Miguel <https://github.com/thesergiomiguel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as React from 'react';

type HTTPMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

interface URLProps {
        method?: HTTPMethod;
        headers?: { [key: string]: string };
        body?: string;
}

export interface PDFViewProps {
        onError?: (error: Error) => void;
        onLoad?: () => void;
        onPageChanged?: (page: number, pageCount: number) => void;
        onScrolled?: (offset: number) => void;
        resource: string;
        resourceType?: 'url' | 'base64' | 'file';
        fileFrom?: 'bundle' | 'documentsDirectory';
        urlProps?: URLProps;
        textEncoding?: 'utf-8' | 'utf-16';
        fadeInDuration?: number;
        [key: string]: any;
}

declare class PDFView extends React.Component<PDFViewProps> {}

export default PDFView;
