import bem = require("bero");
import { join } from "bero";

const check1 = bem();

const block1 = bem("block", ["modifier1", undefined, "modifier2"]);

const block2 = bem("block");
const classesElement2 = join(block2("element", ["modifier"]), "extra-element-class");

const classesElement3 = join(block2("element", ["modifier"]), undefined);
const classesElement3bis = join(block2("element", ["modifier"]));

const classesElement4 = join(block2("element", undefined), undefined);
const classesElement4bis = join(block2("element", undefined));
const classesElement4tris = join(block2("element"));

const classesBlock3 = bem("block", "element", {
    modifier1: true,
    modifier2: 1,
    modifier3: undefined,
    modifier4: false,
});

const classesBlock4 = bem("block", {
    element1: true,
    element2: 1,
    element3: false,
});

const classesBlock5 = bem("block", {
    Element1: true,
    ["element2"]: true,
    element3: false,
});

const block6 = bem("block6");
const classesBlock6 = block6(["element1", undefined, "Element2", false]);

const block7 = bem("block7");
const classesBlock7 = block7({
    element1: true,
    element2: 1,
    element3: false,
});

const element8 = bem("block", "element8");
element8({
    modifier1: true,
    modifier2: 1,
    modifier3: undefined,
    modifier4: false,
});

const element9 = bem("block", undefined);

const test1 = false;
bem("block", { test1 });

const test2 = undefined;
bem("block", { test2 });

let testClass = "first-class";
testClass += ` ${bem("block", { test2 })} `;
