/// <reference path="jquery-validation-unobtrusive.d.ts" />

// Test overloads for `add` method
$.validator.unobtrusive.adapters.add("adapter", () => { });
$.validator.unobtrusive.adapters.add("adapter", function () {
    return true;
});
$.validator.unobtrusive.adapters.add("adapter", ["param1", "param2"], () => { });

// Test overloads for `addMinMax` method
$.validator.unobtrusive.adapters.addMinMax("adapter", "minRule", "maxRule", "minMaxRule");
$.validator.unobtrusive.adapters.addMinMax("adapter", "minRule", "maxRule", "minMaxRule", "minAttr");
$.validator.unobtrusive.adapters.addMinMax("adapter", "minRule", "maxRule", "minMaxRule", "minAttr", "maxAttr");

// Test overloads for `addSingleVal` method
$.validator.unobtrusive.adapters.addSingleVal("adapter", "rule");
$.validator.unobtrusive.adapters.addSingleVal("adapter", "attr", "rule");

// Test overloads for `addBool` method
$.validator.unobtrusive.adapters.addBool("adapter");
$.validator.unobtrusive.adapters.addBool("adapter", "rule");

// Test `addMethod`
$.validator.unobtrusive.adapters.addMethod("adapter", (value, element, params) => {
    return true;
});

// Test method chaining
$.validator.unobtrusive.adapters
    .add("required", () => { })
    .addMinMax("length", "minlength", "maxlength", "rangelength")
    .addSingleVal("regex", "pattern")
    .addBool("url")
    .addMethod("nonalphamin", (value, element, nonalphamin) => {
        return null;
    });

// Test overloads for `parseElement`
$.validator.unobtrusive.parseElement("form");
$.validator.unobtrusive.parseElement(document);
$.validator.unobtrusive.parseElement(document.getElementById("the-form"));
$.validator.unobtrusive.parseElement($("#the-form"));
$.validator.unobtrusive.parseElement($("#the-form"), true);

// Test overloads for `parse`
$.validator.unobtrusive.parse("form");
$.validator.unobtrusive.parse(document);
$.validator.unobtrusive.parse(document.getElementById("the-form"));
$.validator.unobtrusive.parse($("#the-form"));
