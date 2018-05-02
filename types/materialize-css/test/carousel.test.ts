import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Carousel
const carousel = new M.Carousel(elem);

$(".whatever").carousel();
