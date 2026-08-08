// This file has no imports, so use a dummy export to mark this file as a module.
export {};

// @ts-expect-error - UMD global usage should be prohibited inside modules
toastr.success("Module files should import toastr explicitly.");
