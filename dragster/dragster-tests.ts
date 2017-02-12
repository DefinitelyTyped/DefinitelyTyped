import Dragster = require("dragster");

var dropzone = document.getElementById("my-dropzone") as HTMLElement;
var dragster = new Dragster(dropzone);

dragster.removeListeners();
dragster.reset();