import cash from "cash-dom";
import materialize = require("materialize-css");

const elem = document.querySelector(".whatever") as HTMLElement;

M.textareaAutoResize(elem);
M.textareaAutoResize($(elem));
M.textareaAutoResize(cash(elem));
