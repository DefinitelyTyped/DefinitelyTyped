import Dragster = require("dragster");

const dropzone = document.getElementById("my-dropzone") as HTMLElement;
const dragster = new Dragster(dropzone);

dragster.removeListeners();
dragster.reset();
