// Type definitions for react-document-title 2.0
// Project: https://github.com/gaearon/react-document-title
// Definitions by: Cleve Littlefield <https://github.com/cleverguy25>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

interface DocumentTitleProps {
    title: string;
}

declare class DocumentTitle extends React.Component<DocumentTitleProps, any> {
}

export default DocumentTitle;
