import * as React from "react";

interface DocumentTitleProps {
    title: string;
    children?: React.ReactElement | number | string | null | undefined;
}

declare class DocumentTitle extends React.Component<DocumentTitleProps, any> {
}

export default DocumentTitle;
