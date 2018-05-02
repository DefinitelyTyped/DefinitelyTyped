import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Range
const range = new M.Range(elem);
