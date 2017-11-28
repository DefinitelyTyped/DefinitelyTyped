import * as materialize from "materialize-css";

// Sidenav
const elem = document.querySelector('.sidenav')!;
// $ExpectType Sidenav
const sidenav = new materialize.Sidenav(elem, {
    edge: "left",
    inDuration: 300,
    onCloseStart: () => console.log("closing")
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
