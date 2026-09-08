// This file has no imports, so use a dummy export to mark this file as a module.
export {};

// @ts-expect-error - UMD global usage should be prohibited inside modules
toastr.success("Module files should import toastr explicitly.");

// Explicit global access remains available for script-tag consumers.
const globalToast: JQuery = globalThis.toastr.success("The UMD value is available on the global object.");
globalThis.toastr.options.closeButton = true;
globalThis.toastr.clear(globalToast);
