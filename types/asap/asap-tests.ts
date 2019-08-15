import asap = require("asap");
import rawAsap = require("asap/raw");

class Callable {
    call(): void {
        "'Callable' invoked";
    }
}
function f(): void {
    "'f' invoked";
}

// $ExpectType void
asap(f);

// $ExpectType void
asap((): void => {
    "'arrow' invoked";
});

// $ExpectType void
asap(new Callable());

// $ExpectType void
rawAsap(f);

// $ExpectType void
rawAsap((): void => {
    "'arrow' invoked";
});

// $ExpectType void
rawAsap(new Callable());

// $ExpectType void
rawAsap.requestFlush();
