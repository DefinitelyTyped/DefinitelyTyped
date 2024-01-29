import bwipjs = require("bwip-js");
import * as fs from "fs";
import * as http from "http";

bwipjs.loadFont("Inconsolata", 108, fs.readFileSync("fonts/Inconsolata.otf", "binary"));

http.createServer(function(req, res) {
    // If the url does not begin /?bcid= then 404.  Otherwise, we end up
    // returning 400 on requests like favicon.ico.
    if (req.url!.indexOf("/?bcid=") != 0) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("BWIPJS: Unknown request format.", "utf8");
    } else {
        bwipjs(req, res);
    }
}).listen(3030);

bwipjs.toBuffer(
    {
        bcid: "code128", // Barcode type
        text: "0123456789", // Text to encode
        scale: 3, // 3x scaling factor
        height: 10, // Bar height, in millimeters
        includetext: true, // Show human-readable text
        textxalign: "center", // Always good to set this
        textfont: "Inconsolata", // Use your custom font
        textsize: 13, // Font size, in points
    },
    function(err: string | Error, png: Buffer) {
        if (err) {
            console.log(err);
        } else {
            // `png` is a Buffer
            // png.length           : PNG file length
            // png.readUInt32BE(16) : PNG image width
            // png.readUInt32BE(20) : PNG image height
        }
    },
);

bwipjs
    .toBuffer({
        bcid: "code128", // Barcode type
        text: "0123456789", // Text to encode
        scale: 3, // 3x scaling factor
        height: 10, // Bar height, in millimeters
        includetext: true, // Show human-readable text
        textxalign: "center", // Always good to set this
        textfont: "Inconsolata", // Use your custom font
        textsize: 13, // Font size, in points
    })
    .then((png: Buffer) => {
        // `png` is a Buffer
        // png.length           : PNG file length
        // png.readUInt32BE(16) : PNG image width
        // png.readUInt32BE(20) : PNG image height
    })
    .catch((err: Error) => {
        console.log(err);
    });

bwipjs
    .toDataURL({
        bcid: "code128", // Barcode type
        text: "0123456789", // Text to encode
        scale: 3, // 3x scaling factor
        height: 10, // Bar height, in millimeters
        includetext: true, // Show human-readable text
        textxalign: "center", // Always good to set this
        textfont: "Inconsolata", // Use your custom font
        textsize: 13, // Font size, in points
    })
    .then((data: { width: number; height: number; uri: string }) => {})
    .catch((err: Error) => {
        console.log(err);
    });

const testRender: bwipjs.DrawingOption<void> = {
    scale(sx: number, sy: number): [number, number] | null {
        return null;
    },
    measure(
        str: string,
        font: string,
        fwidth: number,
        fheight: number,
    ): { width: number; ascent: number; descent: number } {
        return {
            width: 0,
            ascent: 0,
            descent: 0,
        };
    },
    init(width: number, height: number): void {},
    line(x0: number, y0: number, x1: number, y1: number, lw: number, rgb: string): void {},
    polygon(pts: Array<[number, number]>): void {},
    hexagon(pts: [[number, number], [number, number], [number, number], [number, number], [number, number]]): void {},
    ellipse(x: number, y: number, rx: number, ry: number, ccw: boolean): void {},
    fill(rgb: string): void {},
    text(
        x: number,
        y: number,
        str: string,
        rgb: string,
        font: { name: string; width: number; height: number; dx: number },
    ): void {},
    end(): void {},
};

bwipjs.render(
    {
        bcid: "code128", // Barcode type
        text: "0123456789", // Text to encode
        scale: 3, // 3x scaling factor
        height: 10, // Bar height, in millimeters
        includetext: true, // Show human-readable text
        textxalign: "center", // Always good to set this
        textfont: "Inconsolata", // Use your custom font
        textsize: 13, // Font size, in points
    },
    testRender,
);

const rawRes = bwipjs.raw({
    bcid: "code128", // Barcode type
    text: "0123456789", // Text to encode
});
if ("bbs" in rawRes[0]) {
    rawRes[0].bbs;
}

bwipjs.fixupOptions({
    bcid: "code128", // Barcode type
    text: "0123456789", // Text to encode
});

// Browser canvas implementation
const canvas = document.createElement("canvas") as HTMLCanvasElement;
bwipjs(
    canvas,
    {
        bcid: "qrcode",
        text: "example",
    },
    (err?: string | Error, cvs?: HTMLCanvasElement): void => {
        if (err) {
            err; // $ExpectType string | Error
        } else if (cvs) {
            cvs; // $ExpectType HTMLCanvasElement
        }
    },
);

// Browser canvas implementation using .toCanvas()
// See: https://github.com/metafloor/bwip-js#browser-usage
const canvasElement = document.createElement("canvas") as HTMLCanvasElement;
canvasElement.setAttribute("id", "canvas2");
const toCanvas = bwipjs.toCanvas("canvas2", {
    bcid: "code128",
    text: "testing",
});
toCanvas; // $ExpectType HTMLCanvasElement

// Test the alttext fix as a browser implementation
const canvasElement2 = document.createElement("canvasTextTest") as HTMLCanvasElement;
canvasElement2.setAttribute("id", "canvasTextTest");
const toCanvasText = bwipjs.toCanvas("canvasTextTest", {
    bcid: "code128",
    text: "1123581321345589",
    alttext: "Alternative text",
});
toCanvasText; // $ExpectType HTMLCanvasElement
