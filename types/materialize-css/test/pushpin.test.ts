import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Pushpin
const _pushpin = new M.Pushpin(elem);
// $ExpectType Pushpin
const el = M.Pushpin.init(elem);
// $ExpectType Pushpin[]
const els = M.Pushpin.init(document.querySelectorAll('.whatever'));

// $ExpectType Pushpin
const pushpin = new materialize.Pushpin(elem, {
    bottom: 1,
    offset: 1,
    onPositionChange(position) {
        // $ExpectType "pinned" | "pin-top" | "pin-bottom"
        position;
    },
    top: 1
});

// $ExpectType void
pushpin.destroy();
// $ExpectType Element
pushpin.el;
// $ExpectType PushpinOptions
pushpin.options;
// $ExpectType number
pushpin.originalOffset;

$(".whatever").pushpin();
$(".whatever").pushpin({ top: 2 });
$(".whatever").pushpin("destroy");
