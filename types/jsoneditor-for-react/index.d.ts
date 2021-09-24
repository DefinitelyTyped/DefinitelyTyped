// Type definitions for jsoneditor-for-react 0.0
// Project: https://github.com/mixj93/jsoneditor-for-react#readme
// Definitions by:  Joep Kockelkorn <https://github.com/joepkockelkorn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';
import JSONEditor, { JSONEditorOptions } from 'jsoneditor';

export interface ReactJsonEditorProps {
    values: {};
}

export default class ReactJsoneditor extends React.Component<ReactJsonEditorProps> {
    private editor?: JSONEditor | undefined;
    private options?: JSONEditorOptions | undefined;
}
