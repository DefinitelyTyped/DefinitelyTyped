import JSONEditor, { JSONEditorOptions } from "jsoneditor";
import React = require("react");

export interface ReactJsonEditorProps {
    values: {};
}

export default class ReactJsoneditor extends React.Component<ReactJsonEditorProps> {
    private editor?: JSONEditor | undefined;
    private options?: JSONEditorOptions | undefined;
}
