import morphPlugin, { morph } from "@alpinejs/morph";
import Alpine from "alpinejs";

Alpine.plugin(morphPlugin);

const originalNode = document.createElement("div");

Alpine.morph(originalNode, "<div></div>", {
    updating(from, to, childrenOnly, skip) {
        // $ExpectType Node
        from;

        // $ExpectType Node
        to;

        // $ExpectType void
        childrenOnly();

        // $ExpectType void
        skip();
    },
    updated(from, to) {
        // $ExpectType Node
        from;

        // $ExpectType Node
        to;
    },
    removing(toRemove, skip) {
        // $ExpectType Node
        toRemove;

        // $ExpectType void
        skip();
    },
    removed(from) {
        // $ExpectType Node
        from;
    },
    adding(toAdd, skip) {
        // $ExpectType Node
        toAdd;

        // $ExpectType void
        skip();
    },
    added(toCloned) {
        // $ExpectType Node
        toCloned;
    },
    key(el) {
        // $ExpectType Node
        el;

        return "key";
    },
    lookahead: true,
});

morph(originalNode, document.createElement("div"), {
    updating(from, to, childrenOnly, skip) {
        // $ExpectType Node
        from;

        // $ExpectType Node
        to;

        // $ExpectType void
        childrenOnly();

        // $ExpectType void
        skip();
    },
    updated(from, to) {
        // $ExpectType Node
        from;

        // $ExpectType Node
        to;
    },
    removing(toRemove, skip) {
        // $ExpectType Node
        toRemove;

        // $ExpectType void
        skip();
    },
    removed(from) {
        // $ExpectType Node
        from;
    },
    adding(toAdd, skip) {
        // $ExpectType Node
        toAdd;

        // $ExpectType void
        skip();
    },
    added(toCloned) {
        // $ExpectType Node
        toCloned;
    },
    key(el) {
        // $ExpectType Node
        el;

        return "key";
    },
    lookahead: true,
});
