import { cheet } from "cheet.js";

const sequences = {
    cross: "up down left right",
    circle: "left up right down",
};

// Main object

cheet("↑ ↑ ↓ ↓ ← → ← → b a");
cheet("h a n d l e r", (str, seq) => {});
cheet("s o m e h a n d l e r s", {
    done(str, seq) {},
    fail(str) {},
});
cheet("f u l l m u l t i p l e h a n d l e r s", {
    done(str, seq) {},
    fail(str, seq) {},
    next(str, key, num, seq) {},
});

// Global handlers

cheet(sequences.cross);
cheet(sequences.circle);
cheet.done(seq => {
    if (seq === sequences.cross) {
    } else {
    }
});
cheet.fail(seq => {
    if (seq === sequences.cross) {
    } else {
    }
});
cheet.next((str, key, num, seq) => {
    if (seq.join(" ") === sequences.cross) {
    } else {
    }
});

// reset() and disable()
cheet.reset(sequences.cross);
cheet.disable(sequences.circle);
