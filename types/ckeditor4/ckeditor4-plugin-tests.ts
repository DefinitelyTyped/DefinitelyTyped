function test_plugins() {
    ckEditor.plugins.add('abbr', {
        init: (editor: CKEDITOR.editor) => {
            // empty logic
        }
    });

    console.log(ckEditor.plugins.registered['abbr']);

    ckEditor.plugins.add('myPlugin', {
        icons: 'my-plugin-icon',
    });


}

function test_plugin_codesnippet() {
    if (ckEditor.plugins.codesnippet) {
        let highlighter = new ckEditor.plugins.codesnippet.highlighter()
        ckEditor.plugins.codesnippet.setHighlighter(highlighter)
    }
}

function test_plugin_elementspath() {
    const editor = new ckEditor.editor()
    if (editor._.elementspath) {
        const elementspath = editor._.elementspath
        let list = elementspath.list
    }
}

