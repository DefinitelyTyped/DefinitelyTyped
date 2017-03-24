
var element = document.getElementById('editor_holder');
var editor = new JSONEditor(element, {});

// Set an option globally
JSONEditor.defaults.options.theme = 'bootstrap2';
// Set an option during instantiation
editor = new JSONEditor(element, {
    theme: 'bootstrap2'
});
editor.on('ready', function () {
    // Now the api methods will be available
    editor.validate();
});

var editor2 = new JSONEditor<{ name: string; }>(element, {});
editor2.setValue({ name: "John Smith" });
var value = editor2.getValue();
console.log(value.name) // Will log "John Smith"

// Get a reference to a node within the editor
var name2 = editor.getEditor('root.name');

// `getEditor` will return null if the path is invalid
if (name2) {
    name2.setValue("John Smith");

    console.log(name2.getValue());
}

var errors = editor.validate();

if (errors.length) {
    // errors is an array of objects, each with a `path`, `property`, and `message` parameter
    // `property` is the schema keyword that triggered the validation error (e.g. "minLength")
    // `path` is a dot separated path into the JSON object (e.g. "root.path.to.field")
    console.log(errors);
}
else {
    // It's valid!
}

// Validate an arbitrary value against the editor's schema
var errors = editor.validate({
    value: {
        to: "test"
    }
});

editor.on('change', function () {
    // Do something
});

editor.off('change', function () {
    // Do something
});

editor.watch('path.to.field', function () {
    // Do something
});

editor.unwatch('path.to.field', function () {
    // Do something
});

// Disable entire form
editor.disable();

// Disable part of the form
editor.getEditor('root.location').disable();

// Enable entire form
editor.enable();

// Enable part of the form
editor.getEditor('root.location').enable();

// Check if form is currently enabled
if (editor.isEnabled()) alert("It's editable!");

editor.destroy();

JSONEditor.defaults.options.theme = 'foundation5';

JSONEditor.plugins.sceditor.emoticonsEnabled = false;

JSONEditor.plugins.epiceditor.basePath = 'epiceditor';

JSONEditor.plugins.ace.theme = 'twilight';

JSONEditor.defaults.editors.object.options.collapsed = true;

JSONEditor.defaults.options.template = 'handlebars';

var myengine = {
    compile: function (template: any) {
        // Compile should return a render function
        return function (vars: any) {
            // A real template engine would render the template here
            var result = template;
            return result;
        }
    }
};

// Set globally
JSONEditor.defaults.options.template = myengine;

// Override a specific translation
JSONEditor.defaults.languages.en.error_minLength =
    "This better be at least {{0}} characters long or else!";


// Create your own language mapping
// Any keys not defined here will fall back to the "en" language
JSONEditor.defaults.languages.es = {
    error_notset: "propiedad debe existir"
};

JSONEditor.defaults.language = "es";

JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.type === "object" && schema.format === "location") {
        return "location";
    }

    // If no valid editor is returned, the next resolver function will be used
});

JSONEditor.plugins.selectize.enable = true;

JSONEditor.defaults.custom_validators.push(function (schema, value, path) {
    var errors: JSONEditorError[] = [];
    if (schema.format === "date") {
        if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value)) {
            // Errors must be an object with `path`, `property`, and `message`
            errors.push({
                path: path,
                property: 'format',
                message: 'Dates must be in the format "YYYY-MM-DD"'
            });
        }
    }
    return errors;
});
