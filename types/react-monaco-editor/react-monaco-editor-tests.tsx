// Adapted from https://github.com/superRaytin/react-monaco-editor/blob/master/examples/index.js

import * as React from 'react';
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';

interface CodeEditorState {
    code?: string;
}

// Using with webpack
class CodeEditor extends React.Component<object, CodeEditorState> {
    constructor(props: object) {
        super(props);
        this.state = {
            code: '// type your code... \n',
        };
    }
    editor: monaco.editor.ICodeEditor;
    editorDidMount = (editor: monaco.editor.ICodeEditor) => {
        console.log('editorDidMount', editor, editor.getValue(), editor.getModel());
        this.editor = editor;
    }
    onChange = (newValue: string, e: monaco.editor.IModelContentChangedEvent) => {
        console.log('onChange', newValue, e);
        this.setState({
            code: newValue,
        });
    }
    changeEditorValue = () => {
        if (this.editor) {
            this.editor.setValue('// code changed! \n');
        }
    }
    changeBySetState = () => {
        this.setState({code: '// code changed by setState! \n'});
    }
    render() {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            theme: 'vs',
            cursorStyle: 'line',
            automaticLayout: false,
        };
        return (
            <div>
            <div>
            <button onClick={this.changeEditorValue}>Change value</button>
            <button onClick={this.changeBySetState}>Change by setState</button>
            </div>
            <hr />
            <MonacoEditor
            height="500"
            language="javascript"
            value={code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
            />
            </div>
        );
    }
}

// Using with require.config
class AnotherEditor extends React.Component<object, CodeEditorState> {
    constructor(props: object) {
        super(props);
        const jsonCode = [
            '{',
            '    "$schema": "http://myserver/foo-schema.json"',
            "}"
        ].join('\n');
        this.state = {
            code: jsonCode,
        };
    }
    editorWillMount = (monacoModule: typeof monaco) => {
        monacoModule.languages.json.jsonDefaults.setDiagnosticsOptions({
            schemas: [{
                uri: "http://myserver/foo-schema.json",
                schema: {
                    type: "object",
                    properties: {
                        p1: {
                            enum: [ "v1", "v2"]
                        },
                        p2: {
                            $ref: "http://myserver/bar-schema.json"
                        }
                    }
                }
            }, {
                uri: "http://myserver/bar-schema.json",
                schema: {
                    type: "object",
                    properties: {
                        q1: {
                            enum: [ "x1", "x2"]
                        }
                    }
                }
            }]
        });
    }
    render() {
        const code = this.state.code;
        const requireConfig = {
            url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.1/require.min.js',
            paths: {
                vs: 'https://as.alipayobjects.com/g/cicada/monaco-editor-mirror/0.6.1/min/vs'
            }
        };
        return (
            <div>
            <MonacoEditor
            width="800"
            height="600"
            language="json"
            defaultValue={code}
            requireConfig={requireConfig}
            editorWillMount={this.editorWillMount}
            />
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
            <h2>Monaco Editor Sample (controlled mode)</h2>
            <CodeEditor />
            <hr />
            <h2>Another editor (uncontrolled mode)</h2>
            <AnotherEditor />
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('root')
);
