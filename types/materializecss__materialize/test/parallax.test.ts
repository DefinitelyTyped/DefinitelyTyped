import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType Parallax
const _parallax = new M.Parallax(elem);
// $ExpectType Parallax
const el = M.Parallax.init(elem);
// $ExpectType Parallax[]
const els = M.Parallax.init(document.querySelectorAll('.whatever'));

// $ExpectType Parallax
const parallax = new materialize.Parallax(elem, { responsiveThreshold: 1 });

// $ExpectType void
parallax.destroy();
// $ExpectType Element
parallax.el;
// $ExpectType ParallaxOptions
parallax.options;

$(".whatever").parallax();
$(".whatever").parallax({ responsiveThreshold: 2 });
$(".whatever").parallax("destroy");
