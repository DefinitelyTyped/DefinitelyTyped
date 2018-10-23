import { Editor, Plugin, EditorProps, RenderNodeProps } from "slate-react";
import { Change, Value } from "slate";
import * as React from "react";

class MyPlugin implements Plugin {
    renderNode(props: RenderNodeProps) {
        const { node } = props;
        if (node) {
            switch (node.object) {
                case "block":
                    return <div id="slate-block-test"/>;
                case "inline":
                    return <span id="slate-inline-test">Hello world</span>;
                case "text":
                    return <p id="slate-text-test">Hello world</p>;
                default:
                    return undefined;
            }
        }
    }

    onChange(change: Change): void {
        change.blur();
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
            onChange={myPlugin.onChange}
            renderNode={myPlugin.renderNode} />;
    }
}
