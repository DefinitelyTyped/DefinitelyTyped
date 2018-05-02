import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Parallax
const parallax = new M.Parallax(elem);
