import b_ = require("b_");

const blockClass: string = b_("block");
const blockWithModsClass: string = b_("block", {stringMod: "string", boolMod: true, numberMod: 5});
const elemClass: string = b_("block", "elem");
const elemWithModsClass: string = b_("block", "elem", {stringMod: "string", boolMod: true, numberMod: 5});

const withBlock = b_.with("block");
const withBlockClass: string = withBlock();
const withBlockWithModsClass: string = withBlock({stringMod: "string", boolMod: true, numberMod: 5});
const withBlockElemClass: string = withBlock("elem");
const withBlockElemWithModsClass: string = withBlock("elem", {stringMod: "string", boolMod: true, numberMod: 5});

const lockBlock = b_.lock("block");
const lockBlockClass: string = lockBlock();
const lockBlockWithModsClass: string = lockBlock({stringMod: "string", boolMod: true, numberMod: 5});
const lockBlockElemClass: string = lockBlock("elem");
const lockBlockElemWithModsClass: string = lockBlock("elem", {stringMod: "string", boolMod: true, numberMod: 5});

const withElem = b_.with("block", "elem");
const withElemClass: string = withElem();
const withElemWithModsClass: string = withElem({stringMod: "string", boolMod: true, numberMod: 5});

const parameterizedB_ = b_.B({
    tailSpace: " ",
    elementSeparator: "-",
    modSeparator: "_",
    modValueSeparator: "-",
    classSeparator: " ",
    isFullModifier: true,
    isFullBoolValue: true
});

const parameterizedBlockClass: string = parameterizedB_("block");
const parameterizedBlockWithModsClass: string = parameterizedB_("block", {stringMod: "string", boolMod: true, numberMod: 5});
const parameterizedElemClass: string = parameterizedB_("block", "elem");
const parameterizedElemWithModsClass: string = parameterizedB_("block", "elem", {stringMod: "string", boolMod: true, numberMod: 5});

const parameterizedWithBlock = parameterizedB_.with("block");
const parameterizedWithBlockClass: string = parameterizedWithBlock();
const parameterizedWithBlockWithModsClass: string = parameterizedWithBlock({stringMod: "string", boolMod: true, numberMod: 5});
const parameterizedWithBlockElemClass: string = parameterizedWithBlock("elem");
const parameterizedWithBlockElemWithModsClass: string = parameterizedWithBlock("elem", {stringMod: "string", boolMod: true, numberMod: 5});

const parameterizedLockBlock = parameterizedB_.lock("block");
const parameterizedLockBlockClass: string = parameterizedLockBlock();
const parameterizedLockBlockWithModsClass: string = parameterizedLockBlock({stringMod: "string", boolMod: true, numberMod: 5});
const parameterizedLockBlockElemClass: string = parameterizedLockBlock("elem");
const parameterizedLockBlockElemWithModsClass: string = parameterizedLockBlock("elem", {stringMod: "string", boolMod: true, numberMod: 5});

const parameterizedWithElem = parameterizedB_.with("block", "elem");
const parameterizedWithElemClass: string = parameterizedWithElem();
const parameterizedWithElemWithModsClass: string = parameterizedWithElem({stringMod: "string", boolMod: true, numberMod: 5});
