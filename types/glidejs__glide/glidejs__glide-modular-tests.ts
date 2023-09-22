import Glide, {
    Anchors,
    Autoplay,
    Breakpoints,
    Controls,
    Images,
    Keyboard,
    Swipe,
} from "@glidejs/glide/dist/glide.modular.esm";

// $ExpectType Glide
const glide = new Glide(".glide");

// $ExpectType Glide
glide.mount({ Autoplay });
// $ExpectType Glide
glide.mount({ Anchors, Autoplay, Breakpoints, Controls, Images, Keyboard, Swipe });
