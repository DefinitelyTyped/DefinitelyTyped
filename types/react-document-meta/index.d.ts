// Type definitions for react-document-meta 3.0
// Project: https://github.com/kodyl/react-document-meta#readme
// Definitions by: ulrichb <https://github.com/ulrichb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface DocumentMetaProps {
    children?: React.ReactNode;
    readonly title?: string | undefined;
    readonly description?: string | undefined;
    readonly canonical?: string | undefined;
}

declare class DocumentMeta extends React.Component<DocumentMetaProps> { }

export default DocumentMeta;
