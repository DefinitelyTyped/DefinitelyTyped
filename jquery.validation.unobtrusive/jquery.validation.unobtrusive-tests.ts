/// <reference path="jquery.validation.unobtrusive.d.ts" />

$.validator.unobtrusive.adapters.add("adapter", () => { });
$.validator.unobtrusive.adapters.add("adapter", function () {
});

$.validator.unobtrusive.adapters.addBool("adapter");

$.validator.unobtrusive.adapters.addMethod("adapter",(value, element) => {
    return true;
})

$.validator.unobtrusive.parse(document);
