import * as React from "react";

declare namespace DocumentTitle {
    interface DocumentTitleProps {
        title: string;
        children?: React.ReactElement | number | string | null | undefined;
    }
}

declare class DocumentTitle extends React.Component<DocumentTitle.DocumentTitleProps> {}

export = DocumentTitle;
