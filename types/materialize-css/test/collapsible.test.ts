import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Collapsible
const collapsible = new M.Collapsible(elem);
