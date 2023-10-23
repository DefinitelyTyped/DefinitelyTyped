import * as React from "react";

interface DocumentTitleProps {
    title: string;
    children?: React.ReactChild | null | undefined;
}

declare class DocumentTitle extends React.Component<DocumentTitleProps, any> {
}

export default DocumentTitle;
