

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

// Test `Adapters` indexer
var adapterName = $.validator.unobtrusive.adapters[0].name;

// Test `Adapters` iterator
$.each($.validator.unobtrusive.adapters, function (index, adapter) {
    console.log(adapter.name);
    console.log(adapter.params);
    console.log(adapter.adapt);
});

// Test `Adapters` array
$.validator.unobtrusive.adapters.push({ name: "adapter", params: ["param1"], adapt: () => { } });

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
