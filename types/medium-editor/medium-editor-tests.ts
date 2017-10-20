import MediumEditor = require('medium-editor');

/**
 * Test document usage
 */

// Init Example
const editor1 = new MediumEditor('.editable');

const elements = document.querySelectorAll('.editable');
const editor2 = new MediumEditor(elements);

const editor3 = new MediumEditor(elements, {});

const editor4 = new MediumEditor('.editable', {
    delay: 1000,
    targetBlank: true,
    toolbar: {
        buttons: ['bold', 'italic', 'quote', { name: 'underline', classList: ['icon-strike'] }],
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

const editor = new MediumEditor('.editable');
editor.subscribe('editableInput', (event: any, editable: HTMLElement) => {});
