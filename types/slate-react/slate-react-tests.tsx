import { Editor, Plugin, EditorProps } from "slate-react";
import { Change, Value } from "slate";
import * as React from "react";

class MyPlugin implements Plugin {
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
        return <Editor value={this.state.value} onChange={myPlugin.onChange} />;
    }
}
