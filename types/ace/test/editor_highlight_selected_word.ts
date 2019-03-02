

var lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
             "Mauris at arcu mi, eu lobortis mauris. Quisque ut libero eget " +
             "diam congue vehicula. Quisque ut odio ut mi aliquam tincidunt. " +
             "Duis lacinia aliquam lorem eget eleifend. Morbi eget felis mi. " +
             "Duis quam ligula, consequat vitae convallis volutpat, blandit " +
             "nec neque. Nulla facilisi. Etiam suscipit lorem ac justo " +
             "sollicitudin tristique. Phasellus ut posuere nunc. Aliquam " +
             "scelerisque mollis felis non gravida. Vestibulum lacus sem, " +
             "posuere non bibendum id, luctus non dolor. Aenean id metus " +
             "lorem, vel dapibus est. Donec gravida feugiat augue nec " +
             "accumsan.Lorem ipsum dolor sit amet, consectetur adipiscing " +
             "elit. Nulla vulputate, velit vitae tincidunt congue, nunc " +
             "augue accumsan velit, eu consequat turpis lectus ac orci. " +
             "Pellentesque ornare dolor feugiat dui auctor eu varius nulla " +
             "fermentum. Sed aliquam odio at velit lacinia vel fermentum " +
             "felis sodales. In dignissim magna eget nunc lobortis non " +
             "fringilla nibh ullamcorper. Donec facilisis malesuada elit " +
             "at egestas. Etiam bibendum, diam vitae tempor aliquet, dui " +
             "libero vehicula odio, eget bibendum mauris velit eu lorem.\n" +
             "consectetur";

function callHighlighterUpdate(session: AceAjax.IEditSession, firstRow: number, lastRow: number) {
    var rangeCount = 0;
    var mockMarkerLayer = { drawSingleLineMarker: function () { rangeCount++; } }
    return rangeCount;
}

var assert: any;
var renderer: AceAjax.VirtualRenderer;

const aceEditorHighlighSelectedWorkTests = {
    setUp: function(next) {
        var session = new AceAjax.EditSession(lipsum);
        var editor = new AceAjax.Editor(renderer, session);
        var selection = session.getSelection();
        next();
    } ,

    "test: highlight selected words by default": function () {
        var selection = session.getSelection();
        var session = new AceAjax.EditSession(lipsum);
        var editor = new AceAjax.Editor(renderer, session);

        assert.equal(editor.getHighlightSelectedWord(), true);
    } ,

    "test: highlight a word": function () {
        var selection = session.getSelection();
        var session = new AceAjax.EditSession(lipsum);
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(0, 9);
        selection.selectWord();

        var highlighter = null;
        assert.ok(highlighter != null);

        var range = selection.getRange();
        assert.equal(session.getTextRange(range), "ipsum");
        assert.equal(highlighter.cache.length, 0);
        assert.equal(callHighlighterUpdate(session, 0, 0), 2);
    } ,

    "test: highlight a word and clear highlight": function () {
        var selection = session.getSelection();
        var session = new AceAjax.EditSession(lipsum);
        var editor = new AceAjax.Editor(renderer, session);

        editor.moveCursorTo(0, 8);
        selection.selectWord();

        var range = selection.getRange();
        assert.equal(session.getTextRange(range), "ipsum");
        assert.equal(callHighlighterUpdate(session, 0, 0), 2);

        session.highlight("");
        assert.equal(callHighlighterUpdate(session, 0, 0), 0);
    } ,

    "test: highlight another word": function () {
        var selection = session.getSelection();
        var session = new AceAjax.EditSession(lipsum);
        var editor = new AceAjax.Editor(renderer, session);

        selection.moveCursorTo(0, 14);
        selection.selectWord();

        var range = selection.getRange();
        assert.equal(session.getTextRange(range), "dolor");
        assert.equal(callHighlighterUpdate(session, 0, 0), 4);
    } ,

    "test: no selection, no highlight": function () {
        var selection = session.getSelection();
        var session = new AceAjax.EditSession(lipsum);
        var editor = new AceAjax.Editor(renderer, session);

        selection.clearSelection();
        assert.equal(callHighlighterUpdate(session, 0, 0), 0);
    } ,

    "test: select a word, no highlight": function () {
        var selection = session.getSelection();
        var session = new AceAjax.EditSession(lipsum);
        var editor = new AceAjax.Editor(renderer, session);

        selection.moveCursorTo(0, 14);
        selection.selectWord();

        editor.setHighlightSelectedWord(false);

        var range = selection.getRange();
        assert.equal(session.getTextRange(range), "dolor");
        assert.equal(callHighlighterUpdate(session, 0, 0), 0);
    } ,

    "test: select a word with no matches": function () {
        var selection = session.getSelection();
        var session = new AceAjax.EditSession(lipsum);
        var editor = new AceAjax.Editor(renderer, session);

        editor.setHighlightSelectedWord(true);

        var currentOptions = this.search.getOptions();
        var newOptions = {
            wrap: true,
            wholeWord: true,
            caseSensitive: true,
            needle: "Mauris"
        };
        this.search.set(newOptions);

        var match = this.search.find(session);
        assert.notEqual(match, null, "found a match for 'Mauris'");

        this.search.set(currentOptions);

        selection.setSelectionRange(match);

        assert.equal(session.getTextRange(match), "Mauris");
        assert.equal(callHighlighterUpdate(session, 0, 0), 1);
    } ,

    "test: partial word selection 1": function () {
        var selection = session.getSelection();
        var session = new AceAjax.EditSession(lipsum);
        var editor = new AceAjax.Editor(renderer, session);

        selection.moveCursorTo(0, 14);
        selection.selectWord();
        selection.selectLeft();

        var range = selection.getRange();
        assert.equal(session.getTextRange(range), "dolo");
        assert.equal(callHighlighterUpdate(session, 0, 0), 0);
    } ,

    "test: partial word selection 2": function () {
        var selection = session.getSelection();
        var session = new AceAjax.EditSession(lipsum);
        var editor = new AceAjax.Editor(renderer, session);

        selection.moveCursorTo(0, 13);
        selection.selectWord();
        selection.selectRight();

        var range = selection.getRange();
        assert.equal(session.getTextRange(range), "dolor ");
        assert.equal(callHighlighterUpdate(session, 0, 0), 0);
    } ,

    "test: partial word selection 3": function () {
        var selection = session.getSelection();
        var session = new AceAjax.EditSession(lipsum);
        var editor = new AceAjax.Editor(renderer, session);

        selection.moveCursorTo(0, 14);
        selection.selectWord();
        selection.selectLeft();
        selection.shiftSelection(1);

        var range = selection.getRange();
        assert.equal(session.getTextRange(range), "olor");
        assert.equal(callHighlighterUpdate(session, 0, 0), 0);
    } ,

    "test: select last word": function () {
        var selection = session.getSelection();
        var session = new AceAjax.EditSession(lipsum);
        var editor = new AceAjax.Editor(renderer, session);

        selection.moveCursorTo(0, 1);

        var currentOptions = this.search.getOptions();
        var newOptions = {
            wrap: true,
            wholeWord: true,
            caseSensitive: true,
            backwards: true,
            needle: "consectetur"
        };
        this.search.set(newOptions);

        var match = this.search.find(session);
        assert.notEqual(match, null, "found a match for 'consectetur'");
        assert.position(match.start, 1, 0);

        this.search.set(currentOptions);

        selection.setSelectionRange(match);

        assert.equal(session.getTextRange(match), "consectetur");
        assert.equal(callHighlighterUpdate(session, 0, 1), 3);
    }
};
