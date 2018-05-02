import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Chips
const chips = new M.Chips(elem);
