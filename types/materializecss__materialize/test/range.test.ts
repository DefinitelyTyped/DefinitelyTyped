import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType Range
const _range = new M.Range(elem);
// $ExpectType Range
const el = M.Range.init(elem);
// $ExpectType Range[]
const els = M.Range.init(document.querySelectorAll('.whatever'));

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
