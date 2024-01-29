import * as React from "react";

export interface DocumentMetaProps {
    children?: React.ReactNode;
    readonly title?: string | undefined;
    readonly description?: string | undefined;
    readonly canonical?: string | undefined;
}

declare class DocumentMeta extends React.Component<DocumentMetaProps> {}

export default DocumentMeta;
