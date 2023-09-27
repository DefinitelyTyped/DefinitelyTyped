import cash from "cash-dom";
import * as materialize from "materializecss__materialize";

const elem = document.querySelector(".whatever") as HTMLElement;

M.textareaAutoResize(elem);
M.textareaAutoResize($(elem));
M.textareaAutoResize(cash(elem));
