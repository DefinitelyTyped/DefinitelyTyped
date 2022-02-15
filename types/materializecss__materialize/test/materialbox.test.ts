import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType Materialbox
const _materialbox = new M.Materialbox(elem);
// $ExpectType Materialbox
const el = M.Materialbox.init(elem);
// $ExpectType Materialbox[]
const els = M.Materialbox.init(document.querySelectorAll('.whatever'));

// $ExpectType Materialbox
const materialbox = new materialize.Materialbox(elem, {
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
materialbox.close();
// $ExpectType void
materialbox.destroy();
// $ExpectType void
materialbox.open();
// $ExpectType Element
materialbox.el;
// $ExpectType MaterialboxOptions
materialbox.options;

$(".whatever").materialbox();
$(".whatever").materialbox({ inDuration: 2 });
$(".whatever").materialbox("open");
$(".whatever").materialbox("destroy");
$(".whatever").materialbox("close");
