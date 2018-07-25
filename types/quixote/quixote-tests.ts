// Stub mocha functions
const {describe, it, before, after, beforeEach, afterEach} = null as any as {
    [s: string]: ((s: string, cb: (done: any) => void) => void) & ((cb: (done: any) => void) => void) & {only: any, skip: any};
};

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


