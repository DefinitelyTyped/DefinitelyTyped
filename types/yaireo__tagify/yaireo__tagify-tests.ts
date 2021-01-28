import Tagify, { TagData, TagifySettings } from '@yaireo/tagify';

export function tagTemplate(this: Tagify, tagData: TagData): string {
    return `
    <tag title="${tagData.title || tagData.value}" contenteditable="false" spellcheck="false" tabIndex="-1" class="tagify__tag ${tagData.class ? tagData.class : ''}" ${this.getAttributes(tagData)}>
        <x class="tagify__tag__removeBtn" role="button" aria-label="remove-tag"></x>
        <div><span class="tagify__tag-text">${tagData.value}</span></div>
    </tag>`;
}

const inputElement = document.createElement('input');
const settings: TagifySettings = {
    tagTextProp: 'value',
    placeholder: 'Start typing...',
    delimiters: ',| ',
    pattern: /[a-z0-9]/,
    mode: null,
    mixTagsInterpolator: ['[[', ']]'],
    mixTagsAllowedAfter: /,|\.|\:|\s/,
    duplicates: false,
    trim: false,
    enforceWhitelist: true,
    autocomplete: {
        enabled: true,
        rightKey: true
    },
    whitelist: ['good-word'],
    blacklist: ['bad-word'],
    addTagOnBlur: false,
    callbacks: {
        add: (event) => {
            console.log(event);
        }
    },
    maxTags: 10,
    editTags: { clicks: 1, keepInvalid: false },
    templates: {
        tag: tagTemplate
    },
    validate: (tagData) => /^starts-with/.test(tagData.value),
    transformTag: (tagData) => { tagData.active = true; },
    keepInvalidTags: false,
    skipInvalid: true,
    backspace: 'edit',
    originalInputValueFormat: (data) => JSON.stringify(data),
    mixMode: {
      insertAfterTag: '\u00A0'
    },
    dropdown: {
        enabled: 3,
        caseSensitive: false,
        maxItems: 5,
        classname: 'form-control',
        fuzzySearch: false,
        accentedSearch: false,
        position: 'text',
        highlightFirst: true,
        closeOnSelect: true,
        clearOnSelect: false,
        mapValueTo: 'place',
        searchKeys: ['value', 'color'],
        appendTarget: document.body
    }
};

const tagify = new Tagify(inputElement, settings);

const tagArray: TagData[] = tagify.value;
const scopeEl: HTMLElement = tagify.DOM.scope;
const spanEl: HTMLSpanElement = tagify.DOM.input;
const dropdownEl: HTMLDivElement = tagify.DOM.dropdown;
const inputEl: HTMLInputElement | HTMLTextAreaElement = tagify.DOM.originalInput;

tagify.on('invalid', (event) => {
    console.log(event.detail.data);
});
tagify.on('remove', (event) => {
    // do nothing
});

tagify.addTags(['banana', 'orange', 'apple']);

const tags: TagData[] = [
    { value: 'banana', color: 'yellow' },
    { value: 'apple', color: 'red' },
    { value: 'watermelon', color: 'green' }
];
tagify.addTags(tags);

tagify.addMixTags('[[foo]] and [[bar]]');

tagify.addEmptyTag();
tagify.loadOriginalValues(['banana', 'orange']);
tagify.getWhitelistItem({ value: 'foo' });
tagify.getTagIndexByValue('foo');
tagify.getTagElmByValue('foo');
tagify.isTagDuplicate('foo', true);
tagify.parseMixTags('[[foo]] and [[bar]] are...');
tagify.getTagElms();

const tagElement = tagify.getTagElmByValue('foo');
tagify.tagData(tagElement);
tagify.editTag(tagElement);
tagify.replaceTag(tagElement, { value: 'bar' });
tagify.tagLoading(tagElement, true);
tagify.loading(true);

const newTag = tagify.createTagElem({ value: 'hello' });
tagify.injectAtCaret(newTag);
tagify.placeCaretAfterNode(newTag);
tagify.insertAfterTag(newTag, 'world');

tagify.toggleClass('active', true);

tagify.updateValueByDOMTags();
tagify.parseTemplate('tag', tags);
tagify.setReadonly(false);

tagify.dropdown.show('foo');
tagify.dropdown.selectAll();
tagify.dropdown.hide();

tagify.removeAllTags();
tagify.destroy();
