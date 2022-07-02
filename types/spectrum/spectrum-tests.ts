// No-arg initializer
$("#picker").spectrum();

// Initializer with options
$("#picker").spectrum({
    color: "yellow"
});

$("#picker").spectrum({
    allowEmpty: true
});

$("#picker").spectrum({
    flat: true,
});

$("#picker").spectrum({
    showInput: true
});

$("#picker").spectrum({
    showAlpha: true
});

$("#picker").spectrum({
    disabled: true
});

$("#picker").spectrum({
    showPalette: true,
});

$("#picker").spectrum({
    showPaletteOnly: true,
    togglePaletteOnly: true,
    togglePaletteMoreText: "more",
    togglePaletteLessText: "less",
    color: "blanchedalmond",
    palette: [
        ["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"],
        ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
        ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
        ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
        ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
        ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
        ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"],
        ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
    ]
});

const paletteModMod: string[][] = [["#000"]];
const paletteUnmodMod: ReadonlyArray<string[]> = [["#000"]];
const paletteModUnmod: Array<ReadonlyArray<string>> = [["#000"]];
const paletteUnmodUnmod: ReadonlyArray<ReadonlyArray<string>> = [["#000"]];
$("#picker").spectrum({
    palette: paletteModMod,
});
$("#picker").spectrum({
    palette: paletteModUnmod,
});
$("#picker").spectrum({
    palette: paletteUnmodMod,
});
$("#picker").spectrum({
    palette: paletteUnmodUnmod,
});
$("#picker").spectrum("option", "palette", paletteModMod);
$("#picker").spectrum("option", "palette", paletteModUnmod);
$("#picker").spectrum("option", "palette", paletteUnmodMod);
$("#picker").spectrum("option", "palette", paletteUnmodUnmod);
const palette = $("#picker").spectrum("option", "palette");
if (palette) {
    // Disallowed, must use "option" method to apply settings
    // @ts-expect-error
    palette[0][0] = "";
    // @ts-expect-error
    palette[0] = [""];
}

$("#picker").spectrum({
    showPalette: true,
    showSelectionPalette: true,
    selectionPalette: ["red", "green", "blue"],
    localStorageKey: "spectrum.homepage",
});

const selectionPaletteMod: string[] = ["red", "green", "blue"];
const selectionPaletteUnmod: ReadonlyArray<string> = ["red", "green", "blue"];
$("#picker").spectrum({
    selectionPalette: selectionPaletteMod,
});
$("#picker").spectrum({
    selectionPalette: selectionPaletteUnmod,
});

$("#picker").spectrum({
    hideAfterPaletteSelect: true,
});

$("#picker").spectrum({
    clickoutFiresChange: true
});
$("#picker").spectrum("option", "selectionPalette", selectionPaletteMod);
$("#picker").spectrum("option", "selectionPalette", selectionPaletteUnmod);
const selectionPalette = $("#picker").spectrum("option", "selectionPalette");
if (selectionPalette) {
    // Disallowed, must use "option" method to apply settings
    // @ts-expect-error
    selectionPaletteUnmod[0] = "red";
}

$("#picker").spectrum({
    showInitial: true,
    showInput: true
});
$("#picker").spectrum({
    chooseText: "Alright",
    cancelText: "No way",
    clearText: "Start over",
    noColorSelectedText: "A world of gray",
});

$("#picker").spectrum({
    showButtons: false
});

$("#picker").spectrum({
    containerClassName: "awesome"
});

$("#picker").spectrum({
    replacerClassName: "awesome"
});

$("#picker").spectrum({
    preferredFormat: "hex"
});

$("#picker").spectrum(
    // Invalid format name raises a type error
    // @ts-expect-error
    { preferredFormat: "lol" }
);

$("#picker").spectrum({
    appendTo: "body"
});
$("#picker").spectrum({
    appendTo: document.createDocumentFragment()
});
$("#picker").spectrum({
    appendTo: [document.createDocumentFragment()]
});
$("#picker").spectrum({
    appendTo: document.createElement("input")
});
$("#picker").spectrum({
    appendTo: [document.createElement("input")]
});
$("#picker").spectrum({
    appendTo: $("#otherPicker")
});
$("#picker").spectrum(
    // Cannot use values not allowed by JQuery#appendTo
    // @ts-expect-error
    { appendTo: [$("#otherPicker")] }
);

$("#picker").spectrum({
    offset: {
        left: 0,
        top: 0,
    }
});
$("#picker").spectrum({
    offset: {
        left: 0,
    }
});

$("#picker").spectrum({
    change(color) {
        console.log(color);
    }
});
$("#picker").spectrum({
    move(color) {
        // $ExpectType string
        color.toHexString();
    }
});
$("#picker").spectrum({
    hide(color) {
        // $ExpectType string
        color.toHexString();
    }
});
$("#picker").spectrum({
    show(color) {
        // $ExpectType string
        color.toHexString();
    }
});
$("#picker").spectrum({
    beforeShow(color) {
        // $ExpectType string
        color.toHexString();
    }
});
$("#picker").spectrum({
    beforeShow(color) {
        // $ExpectType string
        color.toHexString();
        return false;
    }
});

// JQuery instance method
$("#picker").spectrum("show");
$("#picker").spectrum("hide");
$("#picker").spectrum("toggle");
$("#picker").spectrum("get");
$("#picker").spectrum("set", "#dddddd");
$("#picker").spectrum("container");
$("#picker").spectrum("reflow");
$("#picker").spectrum("destroy");
$("#picker").spectrum("enable");
$("#picker").spectrum("disable");

// $ExpectType Options
$("#picker").spectrum("option");

$("#picker").spectrum("option", "show");
// $ExpectType string | undefined
$("#picker").spectrum("option", "cancelText");
// These options may return false when not set explicitly
// $ExpectType string | false | undefined
$("#picker").spectrum("option", "color");
// $ExpectType string | false | undefined
$("#picker").spectrum("option", "localStorageKey");
// $ExpectType false | "hex" | "hex3" | "hsl" | "rgb" | "name" | undefined || false | ColorFormatName | undefined
$("#picker").spectrum("option", "preferredFormat");
// $ExpectType boolean | undefined
$("#picker").spectrum("option", "disabled");
// Invalid option name raises a type error
// @ts-expect-error
$("#picker").spectrum("option", "foobar");

$("#picker").spectrum("option", "color", "#ededed");
$("#picker").spectrum("option", "disabled", true);
// Invalid option name raises a type error
// @ts-expect-error
$("#picker").spectrum("option", "foobar", "#ededed");
// Invalid option value raises a type error
// @ts-expect-error
$("#picker").spectrum("option", "disabled", "true");
// Passing undefined would be interpreted as the getter, not the setter, so this is disallowed
// @ts-expect-error
$("#picker").spectrum("option", "disabled", undefined);

// Event handling
$("#picker").on("change.spectrum", (e) => {
    // $ExpectType "change"
    e.type;
});
$("#picker").on("move.spectrum", (e) => {
    // $ExpectType "move"
    e.type;
});
$("#picker").on("show.spectrum", (e) => {
    // $ExpectType "show"
    e.type;
});
$("#picker").on("hide.spectrum", (e) => {
    // $ExpectType "hide"
    e.type;
});
$("#picker").on("beforeShow.spectrum", (e) => {
    // $ExpectType "beforeShow"
    e.type;
});
$("#picker").on("dragstart.spectrum", (e) => {
    // $ExpectType "dragstart"
    e.type;
});
$("#picker").on("dragstop.spectrum", (e) => {
    // $ExpectType "dragstop"
    e.type;
});
$("#picker").off("change.spectrum", (e) => {
    // $ExpectType "change"
    e.type;
});
$("#picker").off("move.spectrum", (e) => {
    // $ExpectType "move"
    e.type;
});
$("#picker").off("show.spectrum", (e) => {
    // $ExpectType "show"
    e.type;
});
$("#picker").off("hide.spectrum", (e) => {
    // $ExpectType "hide"
    e.type;
});
$("#picker").off("beforeShow.spectrum", (e) => {
    // $ExpectType "beforeShow"
    e.type;
});
$("#picker").off("dragstart.spectrum", (e) => {
    // $ExpectType "dragstart"
    e.type;
});
$("#picker").off("dragstop.spectrum", (e) => {
    // $ExpectType "dragstop"
    e.type;
});
