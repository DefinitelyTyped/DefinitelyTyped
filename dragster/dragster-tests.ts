import Dragster = require("dragster");

var dropzone = document.getElementById("my-dropzone");
var dragster = new Dragster(dropzone);

dragster.removeListeners();
dragster.reset();