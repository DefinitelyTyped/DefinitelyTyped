

var callback = () => {};
var domNode = document.createElement("div");

// Basic usage

// Can add a ready() handler to the document which initializes the color picker and links it to the text field
$(document).ready(function() {
    $("#colorpicker").farbtastic("#color");
});

// Advanced Usage: jQuery Method

// Create color pickers in the selected objects
$("#colorpicker").farbtastic();

// Optional callback using a callback function 
$("#colorpicker").farbtastic(callback);
$("#colourpicker").farbtastic(function (color) {
    console.log(typeof color === "string");
});

// Optional callback using a DOM node 
$("#colorpicker").farbtastic(domNode);

// Optional callback using a jQuery object
$("#colorpicker").farbtastic($("#color"));

// Optional callback using a jQuery selector
$("#colorpicker").farbtastic("#color");

// Advanced Usage: Object

// Can invoke method for returning Farbtastic object instead of a jQuery object
$.farbtastic(domNode);
$.farbtastic($("#color"));
$.farbtastic("#color");

// Optional callback using a callback function
$.farbtastic(domNode, callback);
$.farbtastic($("#color"), callback);
$.farbtastic("#color", callback);

// Optional callback using a DOM node 
$.farbtastic(domNode, domNode);
$.farbtastic($("#color"), domNode);
$.farbtastic("#color", domNode);

// Optional callback using a jQuery object
$.farbtastic(domNode, $("#color"));
$.farbtastic($("#color"), $("#color"));
$.farbtastic("#color", $("#color"));

// Optional callback using a jQuery selector
$.farbtastic(domNode, "#color");
$.farbtastic($("#color"), "#color");
$.farbtastic("#color", "#color");

// Advanced Usage: Options
$("#colorpicker").farbtastic({
    callback: (color) => {
        console.log(color);
    }
});
$.farbtastic(domNode, {
    width: 500
});
$.farbtastic($("#color"), {
    wheelWidth: 300
});
$.farbtastic("#color", {});

// Advanced Usage: Methods
$.farbtastic("#colorpicker").linkTo(callback);
$.farbtastic("#colorpicker").linkTo(domNode);
$.farbtastic("#colorpicker").linkTo("#color");
$.farbtastic("#colorpicker").linkTo($("#color"));

$.farbtastic("#colorpicker").setColor("#aabbcc");
$.farbtastic("#colorpicker").setColor([0.1, 0.2, 0.3]);
$.farbtastic("#colorpicker").setHSL([0.1, 0.2, 0.3]);

// Advanced Usage: Properties
$.farbtastic("#colorpicker").color === "#aabbcc";
$.farbtastic("#colorpicker").hsl === [0.1, 0.2, 0.3];
$.farbtastic("#colorpicker").linked === $("#colorpicker");
$.farbtastic("#colorpicker").linked === callback;

// Can chain jQuery methods
$("#colorpicker")
    .farbtastic()
    .addClass("color-picker");

// Can chain Farbtastic methods
$.farbtastic("#colorpicker")
    .linkTo(domNode)
    .setColor("#000000")
    .setHSL([0, 0, 0]);            
            
