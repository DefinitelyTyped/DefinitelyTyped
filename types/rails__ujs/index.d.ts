import { SelectorObject } from "./utils/dom";

export * from "./start";

export * from "./features/confirm";
export * from "./features/disable";
export * from "./features/method";
export * from "./features/remote";

export * from "./utils/ajax";
export * from "./utils/csp";
export * from "./utils/csrf";
export * from "./utils/dom";
export * from "./utils/event";
export * from "./utils/form";

export as namespace Rails;

export const linkClickSelector: string;
export const buttonClickSelector: SelectorObject;
export const inputChangeSelector: string;
export const formSubmitSelector: string;
export const formInputClickSelector: string;
export const formDisableSelector: string;
export const formEnableSelector: string;
export const fileInputSelector: string;
export const linkDisableSelector: string;
export const buttonDisableSelector: string;
