const elem = document.querySelector('.whatever')!;
// $ExpectType Sidenav
const sidenav = new M.Sidenav(elem);

// $ExpectType Tabs
const tabs = new M.Tabs(elem);

// $ExpectType Modal
const modal = new M.Modal(elem);
