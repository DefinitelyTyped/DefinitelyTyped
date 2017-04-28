$("#picker").spectrum();

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

$("#picker").spectrum({
    showPalette: true,
    showSelectionPalette: true,
    localStorageKey: "spectrum.homepage",
});

$("#picker").spectrum({
    hideAfterPaletteSelect: true,
});

$("#picker").spectrum({
    clickoutFiresChange: true
});

$("#picker").spectrum({
    showInitial: true,
    showInput: true
});
$("#picker").spectrum({
    chooseText: "Alright",
    cancelText: "No way"
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

$("#picker").spectrum({
    appendTo: "body"
});
$("#picker").spectrum({
    appendTo: $("#otherPicker")
});

$("#picker").spectrum({
    change: function (color) {
        console.log(color);
    }
});

$("#picker").spectrum({
    move: function (color) {
        console.log(color);
    }
});
$("#picker").spectrum({
    hide: function (color) {
        console.log(color);
    }
});
$("#picker").spectrum({
    show: function (color) {
        console.log(color);
    }
});
$("#picker").spectrum({
    beforeShow: function (color) {
        console.log(color);
    }
});

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
$("#picker").spectrum("option", "show");
$("#picker").spectrum("option", "color", "#ededed");