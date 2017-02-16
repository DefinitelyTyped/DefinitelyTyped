/**
 * Test document usage
 */

// Init Example
var editor = new MediumEditor('.editable');

var elements = document.querySelectorAll('.editable');
var editor = new MediumEditor(elements);

var editor = new MediumEditor(elements,{});

var editor = new MediumEditor('.editable', {
    delay: 1000,
    targetBlank: true,
    toolbar: {
        buttons: ['bold', 'italic', 'quote'],
        diffLeft: 25,
        diffTop: 10,
    },
    anchor: {
        placeholderText: 'Type a link',
        customClassOption: 'btn',
        customClassOptionText: 'Create Button'
    },
    paste: {
        cleanPastedHTML: true,
        cleanAttrs: ['style', 'dir'],
        cleanTags: ['label', 'meta'],
        unwrapTags: ['sub', 'sup']
    },
    anchorPreview: {
        hideDelay: 300
    },
    placeholder: {
        text: 'Click to edit'
    }
});


// API Example

var editor = new MediumEditor('.editable');
editor.subscribe('editableInput', function (event, editable) {});
