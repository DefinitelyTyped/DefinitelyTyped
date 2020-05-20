import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType CharacterCounter
const _characterCounter = new M.CharacterCounter(elem);
// $ExpectType CharacterCounter
const el = M.CharacterCounter.init(elem);
// $ExpectType CharacterCounter[]
const els = M.CharacterCounter.init(document.querySelectorAll('.whatever'));

// $ExpectType CharacterCounter
const characterCounter = new materialize.CharacterCounter(elem);
// $ExpectType void
characterCounter.destroy();
// $ExpectType Element
characterCounter.el;

$(".whatever").characterCounter();
$(".whatever").characterCounter("destroy");
