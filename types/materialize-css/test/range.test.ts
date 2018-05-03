import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Range
const _range = new M.Range(elem);

// $ExpectType Range
const range = new materialize.Range(elem);

// $ExpectType void
range.destroy();
// $ExpectType Element
range.el;
// $ExpectType undefined
range.options;

$(".whatever").range();
$(".whatever").range("destroy");
