import { Board } from "johnny-five";
import { BACKWARD, COLOR_ORDER, FORWARD, Pixel, Strip } from "node-pixel";

const board = new Board();
const strip = new Strip({ board, strips: [{ pin: 6, length: 8 }], color_order: COLOR_ORDER.GRB });
strip.clear();
strip.show();
strip.color("red");
strip.length;
strip.off();
strip.shift(1, FORWARD, true);
strip.shift(1, BACKWARD, true);

const pixel: Pixel = strip.pixel(1);
pixel.clear();
strip.pixel(1).color("red");
strip.pixel(1).colour("red");
strip.pixel(1).off();

strip.on("error", (err) => {
    console.log(err);
});

strip.on("ready", () => {
    strip.color("red");
    strip.off();
    strip.show();
});
