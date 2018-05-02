import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType ScrollSpy
const scrollspy = new M.ScrollSpy(elem);
