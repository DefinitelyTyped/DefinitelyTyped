import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType FloatingActionButton
const _fab = new M.FloatingActionButton(elem);
// $ExpectType FloatingActionButton
const el = M.FloatingActionButton.init(elem);
// $ExpectType FloatingActionButton[]
const els = M.FloatingActionButton.init(document.querySelectorAll('.whatever'));

// $ExpectType FloatingActionButton
new materialize.FloatingActionButton(elem);
// $ExpectType FloatingActionButton
const fab = new materialize.FloatingActionButton(elem, {
    direction: 'left'
});
// $ExpectType void
fab.open();
// $ExpectType void
fab.destroy();
// $ExpectType FloatingActionButtonOptions
fab.options;
// $ExpectType Element
fab.el;
// $ExpectType boolean
fab.isOpen;

$(".whatever").floatingActionButton();
$(".whatever").floatingActionButton({ direction: "left" });
$(".whatever").floatingActionButton("open");
$(".whatever").floatingActionButton("destroy");
