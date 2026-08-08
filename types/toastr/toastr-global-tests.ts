// Outside of modules toastr can be used globally
const toast: JQuery = toastr.success("Global toastr is available in script files.");

toastr.options.closeButton = true;
toastr.clear(toast);
