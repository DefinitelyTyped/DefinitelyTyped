import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Materialbox
const materialbox = new M.Materialbox(elem);
