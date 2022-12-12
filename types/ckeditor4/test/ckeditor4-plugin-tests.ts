function test_plugins() {
    ckEditor.plugins.add('abbr', {
        init: (editor: CKEDITOR.editor) => {
            // empty logic
        },
    });

    console.log(ckEditor.plugins.registered['abbr']);

    ckEditor.plugins.add('myPlugin', {
        icons: 'my-plugin-icon',
    });
}

function test_plugin_codesnippet() {
    if (ckEditor.plugins.codesnippet) {
        const highlighter = new ckEditor.plugins.codesnippet.highlighter();
        ckEditor.plugins.codesnippet.setHighlighter(highlighter);
    }
}

function test_plugin_elementsPath() {
    const editor = new ckEditor.editor();
    if (editor._.elementsPath) {
        const elementspath = editor._.elementsPath;
        const list = elementspath.list;
    }
}
