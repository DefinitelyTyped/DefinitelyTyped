import Tagify, { TagData, TagifySettings } from '@yaireo/tagify';

export function tagTemplate(this: Tagify, tagData: TagData): string {
    return `
    <tag title="${tagData.title || tagData.value}" contenteditable="false" spellcheck="false" tabIndex="-1" class="tagify__tag ${tagData.class ? tagData.class : ''}" ${this.getAttributes(tagData)}>
        <x class="tagify__tag__removeBtn" role="button" aria-label="remove-tag"></x>
        <div><span class="tagify__tag-text">${tagData.value}</span></div>
    </tag>`;
}

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
        wrapper: (input, settings) => '<div></div>',
        tag: tagTemplate,
        dropdown: (settings) => '<select></select>',
        dropdownItem: (item) => `<li>${item.value}</li>`,
        dropdownItemNoMatch: () => '<span>No match</span>'
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

settings.delimiters = /,|"/;
settings.pattern = '[A-Z]';
settings.mode = 'select';
settings.mode = 'mix';
settings.whitelist = [{ value: 'another good word' }];
settings.editTags = 2;
settings.editTags = 1;
settings.editTags = false;
settings.editTags = null;
settings.backspace = false;
settings.mixMode = {
    insertAfterTag: document.createElement('span')
};
settings.dropdown = {
    enabled: false,
    position: 'input',
    mapValueTo: (data) => 'To:' + data.email
};

const inputElement = document.createElement('input');
const textAreaElement = document.createElement('textarea');
const tagify = new Tagify(inputElement, settings);
const tagifyArea = new Tagify(textAreaElement);

const tagArray: TagData[] = tagify.value;
const scopeEl: HTMLElement = tagify.DOM.scope;
const spanEl: HTMLSpanElement = tagify.DOM.input;
const dropdownEl: HTMLDivElement = tagify.DOM.dropdown;
const inputEl: HTMLInputElement | HTMLTextAreaElement = tagify.DOM.originalInput;

tagify.on('invalid', (event) => {
    const data: TagData = event.detail.data;
});
tagify.on('add', (event) => {});
tagify.on('remove', (event) => {});
tagify.on('dblclick', (event) => {});
tagify.on('edit:beforeUpdate', (event) => {});
tagify.on('edit:updated', (event) => {});
tagify.on('input', (event) => {});
tagify.on('click', (event) => {
    const ev: MouseEvent = event.detail.originalEvent;
});
tagify.on('keydown', (event) => {
    const ev: KeyboardEvent = event.detail.originalEvent;
});
tagify.on('edit:keydown', (event) => {});
tagify.on('focus', (event) => {});
tagify.on('blur', (event) => {});
tagify.on('edit:start', (event) => {});
tagify.on('edit:input', (event) => {
    const newValue: string = event.detail.data.newValue;
});
tagify.on('dropdown:show', (event) => {});
tagify.on('dropdown:hide', (event) => {});
tagify.on('dropdown:updated', (event) => {});
tagify.on('dropdown:scroll', (event) => {});
tagify.on('dropdown:select', (event) => {});

const tags: TagData[] = [
    { value: 'banana', color: 'yellow' },
    { value: 'apple', color: 'red' },
    { value: 'watermelon', color: 'green' }
];
tagify.addTags('foo');
tagify.addTags(tags);
const addedElements = tagify.addTags(['banana', 'orange', 'apple'], true, true);

tagify.addMixTags('[[foo]] and [[bar]]');
tagify.addMixTags(['[[foo]] and', '[[bar]]...']);
tagify.addMixTags(tags);

tagify.removeTags();
tagify.removeTags(addedElements, true, 100);

tagify.addEmptyTag();
tagify.addEmptyTag({ label: 'Apple' });
tagify.loadOriginalValues('banana');
tagify.loadOriginalValues(['banana', 'orange']);
tagify.getWhitelistItem({ value: 'foo' });
tagify.getTagIndexByValue('foo');
tagify.isTagDuplicate('foo', true);
tagify.parseMixTags('[[foo]] and [[bar]] are...');
tagify.getTagElms();
tagify.getTagElms('blue', 'green');

const tagElement = tagify.getTagElmByValue('foo');
tagify.tagData(tagElement);
tagify.tagData(tagElement, { value: 'bar' });
tagify.editTag();
tagify.editTag(tagElement);
tagify.replaceTag(tagElement, { value: 'bar' });
tagify.tagLoading(tagElement, true);
tagify.loading(true);

const newTag = tagify.createTagElem({ value: 'hello' });
tagify.injectAtCaret(newTag);
tagify.placeCaretAfterNode(newTag);
tagify.insertAfterTag(newTag, 'world');
tagify.insertAfterTag(newTag, document.createElement('span'));

tagify.toggleClass('active', true);

tagify.updateValueByDOMTags();
tagify.parseTemplate('wrapper', [inputElement, settings]);
tagify.parseTemplate('tag', [tags[0]]);
tagify.parseTemplate('dropdownItem', [tags[0]]);
tagify.parseTemplate('dropdown', [settings]);
tagify.parseTemplate('dropdownItemNoMatch', []);
tagify.parseTemplate((data) => `<span>${data.value}</span>`, [tags[0]]);
tagify.setReadonly(false);

tagify.dropdown.show();
tagify.dropdown.show('foo');
tagify.dropdown.selectAll();
tagify.dropdown.hide();
tagify.dropdown.hide(true);

tagify.removeAllTags();
tagify.destroy();
