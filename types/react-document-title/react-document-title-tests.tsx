import * as React from "react";
import DocumentTitle, { DocumentTitleProps } from "react-document-title";

<DocumentTitle title="Test" />;

<DocumentTitle title="Test">A Child</DocumentTitle>;

<DocumentTitle title="Test">
    <div>A Child</div>
</DocumentTitle>;
