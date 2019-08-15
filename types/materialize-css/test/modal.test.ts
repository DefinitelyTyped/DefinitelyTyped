import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Modal
const _modal = new M.Modal(elem);
// $ExpectType Modal
const el = M.Modal.init(elem);
// $ExpectType Modal[]
const els = M.Modal.init(document.querySelectorAll('.whatever'));

// $ExpectType Modal
new materialize.Modal(elem);
// $ExpectType Modal
const modal = new materialize.Modal(elem, {
    inDuration: 300,
    onOpenStart(el) {
        // $ExpectType Modal
        this;
        // $ExpectType Element
        el;
    }
});
// $ExpectType void
modal.open();
// $ExpectType void
modal.destroy();
// $ExpectType ModalOptions
modal.options;
// $ExpectType Element
modal.el;
// $ExpectType boolean
modal.isOpen;

$(".whatever").modal();
$(".whatever").modal({ inDuration: 200 });
$(".whatever").modal("open");
$(".whatever").modal("destroy");
