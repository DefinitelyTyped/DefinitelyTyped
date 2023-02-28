const aceSplitTests = {

    "test: use split": function() {
        const aceSplit = ace.require('ace/ext/spolit') as typeof AceAjax.Split;
        const split = new aceSplit.Split(document.getElementById('container')) as AceAjax.Split;
        split.setOrientation(split.BESIDE)
        split.setSplits(2)
        split.setFontSize(16)

        const editor = split.getEditor(0);
        editor.destroy();
    },

};
