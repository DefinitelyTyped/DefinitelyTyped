import { Context, Element } from "svgcanvas";

const dom = new Element({});
const ctx = new Context(500, 500);

function createContext() {
    const ctx1 = new Context(500, 500);
    const ctx2 = new Context({ width: 500, height: 500 });
}

function wrapCanvas() {
    const canvas = document.createElement("canvas");
    const context2D = canvas.getContext("2d");
    const options = {
        height: 2000, // falsy values get converted to 500
        width: 0 / 0, // falsy values get converted to 500
        ctx: context2D, // existing Context2D to wrap around
        enableMirroring: false, // whether canvas mirroring (get image data) is enabled (defaults to false)
        document: undefined, // overrides default document object
    };
}

function elementProperties() {
    dom.className = "abc";
    dom.className === "abc";

    dom.tagName === "CANVAS";
    // @ts-expect-error
    dom.tagName === "";
    // @ts-expect-error
    dom.tagName = "CANVAS";

    dom.width = 100;
    dom.width === 100;

    dom.height = 100;
    dom.height === 100;
}

function getSerializedSvg() {
    const mySerializedSVG = ctx.getSerializedSvg();
}

function getSvg() {
    const svg = ctx.getSvg();
}

async function toDataURL() {
    const elem = new Element({});

    // Valid sync invocations
    const strings = [
        elem.toDataURL(),
        elem.toDataURL(""),
        elem.toDataURL(null),
        elem.toDataURL(undefined),
        elem.toDataURL("image/svg+xml"),
        elem.toDataURL("image/svg+xml", 1),
        elem.toDataURL("image/svg+xml", null),
        elem.toDataURL("image/svg+xml", undefined),
        elem.toDataURL("image/svg+xml", 1, {}),
        elem.toDataURL("image/svg+xml", 1, { async: false }),
    ] satisfies string[];

    // @ts-expect-error
    elem.toDataURL("image/jpeg");
    // @ts-expect-error
    elem.toDataURL("image/jpeg", 1, { async: false });
    // @ts-expect-error
    elem.toDataURL("image/png");
    // @ts-expect-error
    elem.toDataURL("image/png", 1, { async: false });

    // Valid async invocations
    const promises = [
        elem.toDataURL("image/jpeg", 1, { async: true }),
        elem.toDataURL("image/jpeg", null, { async: true }),
        elem.toDataURL("image/jpeg", undefined, { async: true }),
        elem.toDataURL("image/png", 1, { async: true }),
        elem.toDataURL("image/png", null, { async: true }),
        elem.toDataURL("image/png", undefined, { async: true }),
        elem.toDataURL("image/svg+xml", 1, { async: true }),
        elem.toDataURL("image/svg+xml", null, { async: true }),
        elem.toDataURL("image/svg+xml", undefined, { async: true }),
    ] satisfies Promise<string>[];
}

function toObjectURL(): string {
    return dom.toObjectURL();
}
