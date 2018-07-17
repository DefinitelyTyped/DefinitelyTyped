import { Editor, Plugin, EditorProps } from "slate-react";
import { Slate } from "slate";
import * as React from "react";

class MyPlugin implements Plugin {
    onChange(change: Slate.Change): void {
        change.blur();
    }
}

const myPlugin = new MyPlugin();

interface MyEditorState {
    value: Slate.Value;
}

class MyEditor extends React.Component<EditorProps, MyEditorState> {
    constructor(props: EditorProps) {
        super(props);
        this.state = {
            value: Slate.Value.create()
        };
    }

    render() {
        return <Editor value={this.state.value} onChange={myPlugin.onChange} />;
    }
}
