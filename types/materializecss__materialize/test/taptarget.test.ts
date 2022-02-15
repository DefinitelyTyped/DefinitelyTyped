import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType TapTarget
const _taptarget = new M.TapTarget(elem);
// $ExpectType TapTarget
const el = M.TapTarget.init(elem);
// $ExpectType TapTarget[]
const els = M.TapTarget.init(document.querySelectorAll('.whatever'));

// $ExpectType TapTarget
const taptarget = new materialize.TapTarget(elem, {
    onClose(origin) {
        // $ExpectType Element
        origin;
    },
    onOpen(origin) {
        // $ExpectType Element
        origin;
    }
});

// $ExpectType void
taptarget.destroy();
// $ExpectType void
taptarget.close();
// $ExpectType void
taptarget.open();
// $ExpectType Element
taptarget.el;
// $ExpectType TapTargetOptions
taptarget.options;

$(".whatever").tapTarget();
$(".whatever").tapTarget("destroy");
$(".whatever").tapTarget("close");
$(".whatever").tapTarget("open");
