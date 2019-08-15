import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever') as HTMLElement;

M.textareaAutoResize(elem);
M.textareaAutoResize($(elem));
M.textareaAutoResize(cash(elem));
