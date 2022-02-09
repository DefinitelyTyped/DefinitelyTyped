// Tests for knockout.projections.d.ts

//The baseDir is used in building the path to use in the require statement. If your modules live in the modules directory, then you can specify it globally here.
ko.bindingHandlers.module.baseDir = "blub";

//This allows the ability to globally override the function that the module binding calls after loading an AMD module that does not return a constructor.
ko.bindingHandlers.module.initializer= "initialize";

//The dispose method name can be globally overriden. This function is optionally called when a module is being removed/swapped.
ko.bindingHandlers.module.disposeMethod ="dispose";

//The templateProperty option can be globally set. If defined, when a module is loaded - if it has a property with the key specified here
// (where the value is a string or function), the value of that property will be used as the template for the module. The result is a fully
// self-contained module (i.e. it has its own template, not an external one).
ko.bindingHandlers.module.templateProperty ="test";


ko.amdTemplateEngine.defaultPath = "your/path/to/templates";
ko.amdTemplateEngine.defaultSuffix = ".template.html";
ko.amdTemplateEngine.defaultRequireTextPluginName = "text";
