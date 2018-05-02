import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Pushpin
const pushpin = new M.Pushpin(elem);
