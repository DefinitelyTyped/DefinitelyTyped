import JSONEditor, { JSONEditorOptions } from "jsoneditor";
import * as React from "react";

export interface ReactJsonEditorProps {
    values: {};
}

export default class ReactJsoneditor extends React.Component<ReactJsonEditorProps> {
    private editor?: JSONEditor | undefined;
    private options?: JSONEditorOptions | undefined;
}
