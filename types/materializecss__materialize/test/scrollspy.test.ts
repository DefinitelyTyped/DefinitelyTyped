import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType ScrollSpy
const _scrollspy = new M.ScrollSpy(elem);
// $ExpectType ScrollSpy
const el = M.ScrollSpy.init(elem);
// $ExpectType ScrollSpy[]
const els = M.ScrollSpy.init(document.querySelectorAll('.whatever'));

// $ExpectType ScrollSpy
const scrollspy = new materialize.ScrollSpy(elem, {
    activeClass: "class",
    getActiveElement(id) {
        // $ExpectType string
        id;
        return "string";
    },
    scrollOffset: 1,
    throttle: 1
});

// $ExpectType void
scrollspy.destroy();
// $ExpectType Element
scrollspy.el;
// $ExpectType ScrollSpyOptions
scrollspy.options;

$(".whatever").scrollSpy();
$(".whatever").scrollSpy("destroy");
