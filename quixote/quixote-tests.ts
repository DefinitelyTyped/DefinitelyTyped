/// <reference path="../mocha/mocha.d.ts" />
/// <reference path="quixote.d.ts" />

function test_createFrame() {
    var frame: QFrame;
    before((done) => {
        var options = { src: "" };
        frame = quixote.createFrame(options, done());
    });
}

function test_resetFrame() {
    var frame: QFrame;
    before((done) => {
        var options = { src: "" };
        frame = quixote.createFrame(options, done());
    });
    
    beforeEach(() => {
        frame.reset();
    });
}

function test_removeFrame() {
    var frame: QFrame;
    before((done) => {
        var options = { src: "" };
        frame = quixote.createFrame(options, done());
    });
    
    after(function() {
        frame.remove();
    });
}


