import bem, { BEMParameter } from "better-bem";

bem("block").cn;
bem("block").mod("modifier").cn;
bem("block").mod(["modifier"]).cn;
bem("block").mod(["modifier", {}]).cn;
bem("block").mod(["modifier", { a: false, b: 5, c: "c", d: null, e: undefined }]).cn;

bem("block").el("element").cn;

bem("block")
    .el("element")
    .mod("modifier").cn;

bem("block")
    .el("element")
    .mod(["modifier"]).cn;

bem("block")
    .el("element")
    .mod(["modifier", {}]).cn;

bem("block")
    .el("element")
    .mod(["modifier", { a: false, b: 5, c: "c", d: null, e: undefined }]).cn;

bem("block").el(["element1", "element2"]).cn;

bem("block")
    .el(["element1", "element2"])
    .mod("modifier").cn;

bem("block")
    .el(["element1", "element2"])
    .mod(["modifier"]).cn;

bem("block")
    .el(["element1", "element2"])
    .mod(["modifier", {}]).cn;

bem("block")
    .el(["element1", "element2"])
    .mod(["modifier", { a: false, b: 5, c: "c", d: null, e: undefined }]).cn;

bem(["block1", "block2"]).cn;
bem(["block1", "block2"]).mod("modifier").cn;
bem(["block1", "block2"]).mod(["modifier"]).cn;
bem(["block1", "block2"]).mod(["modifier", {}]).cn;
bem(["block1", "block2"]).mod(["modifier", { a: false, b: 5, c: "c", d: null, e: undefined }]).cn;

bem(["block1", "block2"]).el("element").cn;

bem(["block1", "block2"])
    .el("element")
    .mod("modifier").cn;

bem(["block1", "block2"])
    .el("element")
    .mod(["modifier"]).cn;

bem(["block1", "block2"])
    .el("element")
    .mod(["modifier", {}]).cn;

bem(["block1", "block2"])
    .el("element")
    .mod(["modifier", { a: false, b: 5, c: "c", d: null, e: undefined }]).cn;

bem(["block1", "block2"]).el(["element1", "element2"]).cn;

bem(["block1", "block2"])
    .el(["element1", "element2"])
    .mod("modifier").cn;

bem(["block1", "block2"])
    .el(["element1", "element2"])
    .mod(["modifier"]).cn;

bem(["block1", "block2"])
    .el(["element1", "element2"])
    .mod(["modifier", {}]).cn;

bem(["block1", "block2"])
    .el(["element1", "element2"])
    .mod(["modifier", { a: false, b: 5, c: "c", d: null, e: undefined }]).cn;

bem("block")
    .el("element")
    .el("element")
    .el("element").cn;

bem("block")
    .mod("modifier")
    .mod("modifier")
    .mod("modifier").cn;

bem("block")
    .el("element")
    .mod("modifier").cn;

bem("block")
    .el("element")
    .mod("modifier")
    .el("element")
    .mod("modifier").cn;

bem("block")
    .mod("modifier")
    .el("element")
    .mod("modifier")
    .el("element").cn;

{
    const className = bem("article")
        .el("header")
        .mod("large")
        .el("title")
        .mod("red").cn;
}

{
    const header = bem("header");

    const title = header.el("text title");

    const blueTitle = title.mod({ color: "blue" });

    const emphasizedText = blueTitle.el("emp").mod("bold");
}

{
    const styles = {
        test: "string",
    };

    const header = bem("header", "blue", styles);

    const title = header.el("title");

    const nonStrictHeader = bem("header", "blue", styles, false);
}

{
    const defaultGlue = bem("element", [{ color: "blue" }], {}, true).el("child");
    defaultGlue.cn;

    const customGlue = bem("element", [{ color: "blue" }], {}, true, { el: "_", mod: "-", prop: "--" }).el("child");
    customGlue.cn;
}

// The following values are considered errors as using them
// in modifiers can "kill" a bem chain (make it return "")

// @ts-expect-error
const a: BEMParameter = 0;

// @ts-expect-error
const b: BEMParameter = null;

// @ts-expect-error
const c: BEMParameter = undefined;

// Still they should be allowed in records and in lists
const e: BEMParameter = { testA: undefined, testB: null, testC: 1 };

const f: BEMParameter = [["test"], [undefined]];
