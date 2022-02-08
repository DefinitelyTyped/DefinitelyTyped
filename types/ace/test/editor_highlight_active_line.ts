var assert: any;
var renderer: AceAjax.VirtualRenderer;

const aceEditorHighlightActiveLineTests = {
    'test: set highlightActiveLine to true and call getter': function () {
        var session = new AceAjax.EditSession('test');
        var editor = new AceAjax.Editor(renderer, session);

        editor.setHighlightActiveLine(true);
        assert.equal(editor.getHighlightActiveLine(), true);
    },
};
