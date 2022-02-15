import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType Collapsible
const _collapsible = new M.Collapsible(elem);
// $ExpectType Collapsible
const el = M.Collapsible.init(elem);
// $ExpectType Collapsible[]
const els = M.Collapsible.init(document.querySelectorAll('.whatever'));

// $ExpectType Collapsible
const collapsible = new materialize.Collapsible(elem, {
    accordion: true,
    inDuration: 1,
    outDuration: 1,
    onCloseEnd(el) {
        // $ExpectType Element
        el;
    },
    onCloseStart(el) {
        // $ExpectType Element
        el;
    },
    onOpenEnd(el) {
        // $ExpectType Element
        el;
    },
    onOpenStart(el) {
        // $ExpectType Element
        el;
    }
});

// $ExpectType void
collapsible.close(1);
// $ExpectType void
collapsible.destroy();
// $ExpectType void
collapsible.open(1);
// $ExpectType Element
collapsible.el;
// $ExpectType CollapsibleOptions
collapsible.options;

$(".whatever").collapsible();
$(".whatever").collapsible("destroy");
$(".whatever").collapsible("open", 1);
$(".whatever").collapsible("close", 1);
