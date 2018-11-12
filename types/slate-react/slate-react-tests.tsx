import { Editor, Plugin, EditorProps, RenderNodeProps } from "slate-react";
import { Value, Editor as Controller, Operation } from "slate";
import * as React from "react";
import * as Immutable from "immutable";

class MyPlugin implements Plugin {
    renderNode(props: RenderNodeProps, editor: Controller, next: () => void) {
        const { node } = props;
        if (node) {
            switch (node.object) {
                case "block":
                    return <div id="slate-block-test"/>;
                case "inline":
                    return <span id="slate-inline-test">Hello world</span>;
                default:
                    return undefined;
            }
        }
    }
    onChange = (change: {operations: Immutable.List<Operation>, value: Value}) => {
        console.log(change.value);
    }
}

const myPlugin = new MyPlugin();

interface MyEditorState {
    value: Value;
}

class MyEditor extends React.Component<EditorProps, MyEditorState> {
    constructor(props: EditorProps) {
        super(props);
        this.state = {
            value: Value.create()
        };
    }
    render() {
        return <Editor
            value={this.state.value}
            renderNode={ myPlugin.renderNode }
            onChange={ myPlugin.onChange }/>;
    }
}
