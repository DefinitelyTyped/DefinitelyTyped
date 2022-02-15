import * as materialize from "@materializecss/materialize";
import cash from "cash-dom";

const elem = document.querySelector('.whatever') as HTMLElement;

M.textareaAutoResize(elem);
M.textareaAutoResize($(elem));
M.textareaAutoResize(cash(elem));
