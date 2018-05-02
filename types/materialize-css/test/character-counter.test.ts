import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType CharacterCounter
const _characterCounter = new M.CharacterCounter(elem);

// $ExpectType CharacterCounter
const characterCounter = new materialize.CharacterCounter(elem);
// $ExpectType void
characterCounter.destroy();
// $ExpectType Element
characterCounter.el;

$(".whatever").characterCounter();
$(".whatever").characterCounter("destroy");
