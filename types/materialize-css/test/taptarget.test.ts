import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType TapTarget
const taptarget = new M.TapTarget(elem);
