import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Slider
const slider = new M.Slider(elem);
