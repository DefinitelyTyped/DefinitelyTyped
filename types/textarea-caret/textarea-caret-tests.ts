import anyNameYouLike = require("textarea-caret");

const element = document.querySelector("textarea");

function testImportedLibrary() {
    element!.addEventListener("input", function() {
        const caret = anyNameYouLike(this, this.selectionEnd);
        console.log("(top, left, height) = (%s, %s, %s)", caret.top, caret.left, caret.height);
    });
}

function testGlobalName() {
    element!.addEventListener("input", function() {
        const caret = window.getCaretCoordinates(this, this.selectionEnd);
        console.log("(top, left, height) = (%s, %s, %s)", caret.top, caret.left, caret.height);
    });
}
