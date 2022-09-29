import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType Sidenav
const _sidenav = new M.Sidenav(elem);
// $ExpectType Sidenav
const el = M.Sidenav.init(elem);
// $ExpectType Sidenav[]
const els = M.Sidenav.init(document.querySelectorAll('.whatever'));

// $ExpectType Sidenav
new materialize.Sidenav(elem);
// $ExpectType Sidenav
const sidenav = new materialize.Sidenav(elem, {
    edge: "left",
    inDuration: 300,
    onCloseStart(el) {
        // $ExpectType Sidenav
        this;
        // $ExpectType Element
        el;
    }
});
// $ExpectType void
sidenav.open();
// $ExpectType void
sidenav.destroy();
// $ExpectType SidenavOptions
sidenav.options;
// $ExpectType Element
sidenav.el;
// $ExpectType boolean
sidenav.isOpen;

$(".whatever").sidenav();
$(".whatever").sidenav({ inDuration: 200 });
$(".whatever").sidenav("open");
$(".whatever").sidenav("destroy");
