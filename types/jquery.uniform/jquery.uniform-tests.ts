

// Style all <select> elements
$("select").uniform();
// Style everything
$("select, input, a.button, button").uniform();
// Avoid styling some elements
$("select").not(".skip_these").uniform();  // Method 1
$('select[class!="skip_these"]').uniform();  // Method 2

$("select").uniform({
  fileDefaultText: 'Keine Datei ausgewhlt',
  fileButtonText: 'Whlen Sie Datei',
});

$.uniform.defaults.checkedClass = "uniformCheckedClass";
$.uniform.defaults.fileButtonHtml = "Pick a file";

$("select").uniform({activeClass: 'myActiveClass'});

$("input[type=button]").uniform({buttonClass: 'myBtnClass'});

$(":checkbox").uniform({checkboxClass: 'myCheckClass'});

$(":radio, :checkbox").uniform({checkedClass: 'myCheckedClass'});

$("select").uniform({disabledClass: 'myDisabledClass'});

$("select").uniform({eventNamespace: '.uniformEvents'});

$(":file").uniform({fileButtonClass: 'myFileBtnClass'});

$(":file").uniform({fileButtonHtml: 'Choose &hellip;'});

$(":file").uniform({fileClass: 'myFileClass'});

$(":file").uniform({fileDefaultHtml: 'Select a file please'});

$(":file").uniform({filenameClass: 'myFilenameClass'});

$("select").uniform({focusClass: 'myFocusClass'});

$("select").uniform({hoverClass: 'myHoverClass'});

$("select").uniform({idPrefix: 'container'});

$("input").uniform({inputAddTypeAsClass: true});

$("input").uniform({inputClass: "inputElement"});

$(":radio").uniform({radioClass: 'myRadioClass'});

$("input[type='reset']").uniform({resetDefaultHtml: "Clear"});

$("select").uniform({resetSelector: 'input[type="reset"]'});

$("select").uniform({selectClass: 'mySelectClass'});

$("select").uniform({selectMultiClass: 'myMultiSelectClass'});

$("input[type='submit']").uniform({resetDefaultHtml: "Submit Form"});

$("textarea").uniform({textareaClass: "myTextareaClass"});

$("select").uniform({useID: false});

$('input.blue').uniform({wrapperClass: "blueTheme"});
$('input').uniform({wrapperClass: "defaultTheme"});

$.uniform.update("#myUpdatedCheckbox");

$.uniform.update();

$.uniform.restore("select");

var uniforms = $.uniform.elements;
