import Tagify = require('@yaireo/tagify');
import { BaseTagData, TagData, TagifyConstructorSettings, TagifySettings } from '@yaireo/tagify';

export function tagTemplate(this: Tagify, tagData: TagData): string {
    return `
    <tag title="${tagData.title || tagData.value}" contenteditable="false" spellcheck="false" tabIndex="-1" class="tagify__tag ${tagData.class ? tagData.class : ''}" ${this.getAttributes(tagData)}>
        <x class="tagify__tag__removeBtn" role="button" aria-label="remove-tag"></x>
        <div><span class="tagify__tag-text">${tagData.value}</span></div>
    </tag>`;
}

const settings: TagifyConstructorSettings = {
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
    userInput: true,
    autoComplete: {
        enabled: true,
        rightKey: true
    },
    whitelist: ['good-word'],
    blacklist: ['bad-word'],
    addTagOnBlur: false,
    pasteAsTags: false,
    callbacks: {
        add: (event) => {
            // $ExpectType TagData | undefined
            event.detail.data;
            // $ExpectType number | undefined
            event.detail.index;
            // $ExpectType HTMLElement
            event.detail.tag;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
        },
        blur: event => {
            // $ExpectType Element
            event.detail.relatedTarget;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
        },
        change: event => {
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
            // $ExpectType string
            event.detail.value;
        },
        click: event => {
            // $ExpectType TagData
            event.detail.data;
            // $ExpectType number
            event.detail.index;
            // $ExpectType HTMLElement
            event.detail.tag;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
            // $ExpectType MouseEvent
            event.detail.originalEvent;
        },
        dblclick: event => {
            // $ExpectType TagData | undefined
            event.detail.data;
            // $ExpectType number | undefined
            event.detail.index;
            // $ExpectType HTMLElement
            event.detail.tag;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
        },
        focus: event => {
            // $ExpectType Element
            event.detail.relatedTarget;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
        },
        input: event => {
            // $ExpectType HTMLInputElement | HTMLTextAreaElement
            event.detail.inputElm;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
            // $ExpectType string
            event.detail.value;
        },
        invalid: event => {
            // $ExpectType TagData
            event.detail.data;
            // $ExpectType number | undefined
            event.detail.index;
            // $ExpectType HTMLElement
            event.detail.tag;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
            // $ExpectType string | boolean
            event.detail.message;
        },
        keydown: event => {
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
            // $ExpectType KeyboardEvent
            event.detail.originalEvent;
        },
        remove: event => {
            // $ExpectType TagData | undefined
            event.detail.data;
            // $ExpectType number | undefined
            event.detail.index;
            // $ExpectType HTMLElement
            event.detail.tag;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
        },
        "dropdown:hide": event => {
            // $ExpectType HTMLElement
            event.detail.dropdown;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
        },
        "dropdown:scroll": event => {
            // $ExpectType number
            event.detail.percentage;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
        },
        "dropdown:noMatch": event => {
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
            // $ExpectType string
            event.detail.value;
        },
        "dropdown:select": event => {
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
            // $ExpectType string
            event.detail.value;
        },
        "dropdown:show": event => {
            // $ExpectType HTMLElement
            event.detail.dropdown;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
        },
        "dropdown:updated": event => {
            // $ExpectType HTMLElement
            event.detail.dropdown;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
        },
        "edit:beforeUpdate": event => {
            // $ExpectType TagData | undefined
            event.detail.data;
            // $ExpectType number | undefined
            event.detail.index;
            // $ExpectType HTMLElement
            event.detail.tag;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
        },
        "edit:input": event => {
            // $ExpectType TagData & { newValue: string; }
            event.detail.data;
            // $ExpectType number
            event.detail.index;
            // $ExpectType HTMLElement
            event.detail.tag;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
            // $ExpectType Event
            event.detail.originalEvent;
        },
        "edit:keydown": event => {
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
            // $ExpectType KeyboardEvent
            event.detail.originalEvent;
        },
        "edit:start": event => {
            // $ExpectType TagData
            event.detail.data;
            // $ExpectType number
            event.detail.index;
            // $ExpectType HTMLElement
            event.detail.tag;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
            // $ExpectType boolean
            event.detail.isValid;
        },
        "edit:updated": event => {
            event.detail.data;
            // $ExpectType number | undefined
            event.detail.index;
            // $ExpectType HTMLElement
            event.detail.tag;
            // $ExpectType Tagify<TagData>
            event.detail.tagify;
        },
    },
    maxTags: 10,
    editTags: { clicks: 1, keepInvalid: false },
    texts: {
        empty: 'Enter something',
        exceed: 'Too much',
        pattern: 'Wrong input',
        duplicate: 'Try something new',
        notAllowed: 'Error'
    },
    templates: {
        wrapper: (input, settings) => {
            // Can use "as const" in later TS versions
            if (settings.classNames) {
                const className = settings.mode === "mix" ? settings.classNames.mixMode : settings.classNames.selectMode;
                return `<tags class="${settings.classNames.namespace} ${settings.mode ? `${className}` : ""} ${input.className}"
                        ${settings.readonly ? 'readonly' : ''}
                        ${settings.required ? 'required' : ''}
                        tabIndex="-1">
                <span ${!settings.readonly || settings.mode !== 'mix' ? 'contenteditable' : ''} data-placeholder="${settings.placeholder || '&#8203;'}" aria-placeholder="${settings.placeholder || ''}"
                    class="${settings.classNames.input}"
                    role="textbox"
                    aria-autocomplete="both"
                    aria-multiline="${settings.mode === 'mix' ? true : false}"></span>
            </tags>`;
            }
            return "";
        },
        tag: tagTemplate,
        dropdown(settings) {
            const _sd = settings.dropdown;
            if (settings.classNames && _sd) {
                const isManual = _sd.position === 'manual';
                const className = `${settings.classNames.dropdown}`;

                return `<div class="${isManual ? "" : className} ${_sd.classname}" role="listbox" aria-labelledby="dropdown">
                            <div class="${settings.classNames.dropdownWrapper}"></div>
                </div>`;
            }
            return "";
        },
        dropdownItem(item) {
            if (this.settings.classNames) {
                return `<div ${this.getAttributes(item)}
            class='${this.settings.classNames.dropdownItem} ${item.class ? item.class : ""}'
            tabindex="0"
            role="option">${item.value}</div>`;
            }
            return "";
        },
        dropdownItemNoMatch: (data) => `No suggestion found for: ${data.value}`,
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
    a11y: {
        focusableTags: true
    },
    classNames: {
        namespace: 'tagify',
        mixMode: 'tagify--mix',
        selectMode: 'tagify--select',
        input: 'tagify__input',
        focus: 'tagify--focus',
        tag: 'tagify__tag',
        tagNoAnimation: 'tagify--noAnim',
        tagInvalid: 'tagify--invalid',
        tagNotAllowed: 'tagify--notAllowed',
        inputInvalid: 'tagify__input--invalid',
        tagX: 'tagify__tag__removeBtn',
        tagText: 'tagify__tag-text',
        dropdown: 'tagify__dropdown',
        dropdownWrapper: 'tagify__dropdown__wrapper',
        dropdownItem: 'tagify__dropdown__item',
        dropdownItemActive: 'tagify__dropdown__item--active',
        dropdownInital: 'tagify__dropdown--initial',
        scopeLoading: 'tagify--loading',
        tagLoading: 'tagify__tag--loading',
        tagEditing: 'tagify__tag--editable',
        tagFlash: 'tagify__tag--flash',
        tagHide: 'tagify__tag--hide',
        hasMaxTags: 'tagify--hasMaxTags',
        hasNoTags: 'tagify--noTags',
        empty: 'tagify--empty',
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
        appendTarget: document.body,
        placeAbove: false,
    },
    hooks: {
        beforeRemoveTag: tags => {
            tags[0].node.classList.add('tagify__tag--loading');
            return new Promise((resolve, reject) => {
                if (confirm(`Remove ${tags[0].data.value} ?`)) {
                    resolve();
                } else {
                    reject();
                }
            });
        },
        suggestionClick: (e, data) => {
            if (e.target instanceof HTMLElement) {
                const isAction = e.target.classList.contains('removeBtn');
                const suggestionElm = data.suggestionElm;
                if (data.tagData) {
                    const value = data.tagData.value;
                }
                return new Promise((resolve, reject) => {
                    if (isAction) {
                        tagify.dropdown.refilter.call(tagify);
                        reject();
                    }
                    resolve();
                });
            } else {
                return Promise.resolve();
            }
        },
        beforePaste: (e, data) => {
            return Promise.resolve(data.pastedText.replace('foo', 'bar'));
        }
    },
};

interface MyTagData extends BaseTagData {
    title: string;
    active: boolean;
    name: string;
}

const typedSettings: TagifyConstructorSettings<MyTagData> = {
    templates: {
        tag: (tagData) => `${tagData.name} ${tagData.title.substring(0)}`,
        dropdownItem: item => `${item.active}`,
    },
    validate: (tagData) => /^starts-with/.test(tagData.title.substring(0)),
    transformTag: (tagData) => { tagData.active = true; },
    originalInputValueFormat: (data) => JSON.stringify(data.map(d => d.title.substring(0))),
    hooks: {
        beforeRemoveTag: async tags => { tags.map(t => t.name.substring(0)); },
    },
};

const instanceSettings: TagifySettings = {
    ...settings,
    readonly: true,
    required: false,
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

typedSettings.dropdown = {
    mapValueTo: (data) => 'To:' + data.title.substring(0),
};

const inputElement = document.createElement('input');
const textAreaElement = document.createElement('textarea');
const tagify = new Tagify(inputElement, settings);
const typedTagify = new Tagify(inputElement, typedSettings);
const tagifyArea = new Tagify(textAreaElement);
const tagifyOneArg = new Tagify(inputElement);
const tagifyEmptySettings = new Tagify(inputElement, {});
new Tagify(inputElement, { dropdown: { appendTarget: null } });
new Tagify(inputElement, { pattern: null });
// $ExpectError
new Tagify(inputElement, { required: false });
// $ExpectError
new Tagify(inputElement, { readonly: false });
// $ExpectError
new Tagify(inputElement, { mixTagsInterpolator: ["", "", ""] });
// $ExpectError
new Tagify(inputElement, { mixTagsInterpolator: [""] });

new Tagify<TagData>(inputElement, { tagTextProp: "foobar" });
new Tagify<MyTagData>(inputElement, { tagTextProp: "active" });
// $ExpectError
new Tagify<MyTagData>(inputElement, { tagTextProp: "foobar" });

const tagArray: TagData[] = tagify.value;
const scopeEl: HTMLElement = tagify.DOM.scope;
const spanEl: HTMLSpanElement = tagify.DOM.input;
const dropdownEl: HTMLDivElement = tagify.DOM.dropdown;
const inputEl: HTMLInputElement | HTMLTextAreaElement = tagify.DOM.originalInput;
const invalidPatternMessage = tagify.TEXTS.pattern;

if (tagify.suggestedListItems !== undefined) {
    const item: TagData = tagify.suggestedListItems[0];
}
if (typedTagify.suggestedListItems !== undefined) {
    const item: MyTagData = typedTagify.suggestedListItems[0];
}

tagify.whitelist = ['another', 'good', 'word'];

// $ExpectType Tagify<TagData>
tagify.on('add', (event) => { });
// $ExpectType Tagify<TagData>
tagify.off('add', (event) => { });

// $ExpectError
tagify.on('foobar', (event) => { });
// $ExpectError
tagify.off('foobar', (event) => { });

tagify.on('change', (event) => {
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType string
    event.detail.value;
});
tagify.on('dropdown:noMatch', (event) => {
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType string
    event.detail.value;
});
tagify.on('invalid', (event) => {
    // $ExpectType TagData
    event.detail.data;
    // $ExpectType number | undefined
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType string | boolean
    event.detail.message;
});
tagify.on('add', (event) => {
    // $ExpectType TagData | undefined
    event.detail.data;
    // $ExpectType number | undefined
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.on('remove', (event) => {
    // $ExpectType TagData | undefined
    event.detail.data;
    // $ExpectType number | undefined
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.on('dblclick', (event) => {
    // $ExpectType TagData | undefined
    event.detail.data;
    // $ExpectType number | undefined
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.on('edit:beforeUpdate', (event) => {
    // $ExpectType TagData | undefined
    event.detail.data;
    // $ExpectType number | undefined
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.on('edit:updated', (event) => {
    // $ExpectType TagData | undefined
    event.detail.data;
    // $ExpectType number | undefined
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.on('input', (event) => {
    // $ExpectType HTMLInputElement | HTMLTextAreaElement
    event.detail.inputElm;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType string
    event.detail.value;
});
tagify.on('click', (event) => {
    // $ExpectType TagData
    event.detail.data;
    // $ExpectType number
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType MouseEvent
    event.detail.originalEvent;
});
tagify.on('keydown', (event) => {
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType KeyboardEvent
    event.detail.originalEvent;
});
tagify.on('edit:keydown', (event) => {
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType KeyboardEvent
    event.detail.originalEvent;
});
tagify.on('focus', (event) => {
    // $ExpectType Element
    event.detail.relatedTarget;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.on('blur', (event) => {
    // $ExpectType Element
    event.detail.relatedTarget;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.on('edit:start', (event) => {
    // $ExpectType TagData
    event.detail.data;
    // $ExpectType number
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType boolean
    event.detail.isValid;
});
tagify.on('edit:input', (event) => {
    // $ExpectType TagData & { newValue: string; }
    event.detail.data;
    // $ExpectType number
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType Event
    event.detail.originalEvent;
});
tagify.on('dropdown:show', (event) => {
    // $ExpectType HTMLElement
    event.detail.dropdown;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.on('dropdown:hide', (event) => {
    // $ExpectType HTMLElement
    event.detail.dropdown;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.on('dropdown:updated', (event) => {
    // $ExpectType HTMLElement
    event.detail.dropdown;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.on('dropdown:scroll', (event) => {
    // $ExpectType number
    event.detail.percentage;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.on('dropdown:select', (event) => {
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType string
    event.detail.value;
});

tagify.off('change', (event) => {
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType string
    event.detail.value;
});
tagify.off('dropdown:noMatch', (event) => {
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType string
    event.detail.value;
});
tagify.off('invalid', (event) => {
    // $ExpectType TagData
    event.detail.data;
    // $ExpectType number | undefined
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType string | boolean
    event.detail.message;
});
tagify.off('add', (event) => {
    // $ExpectType TagData | undefined
    event.detail.data;
    // $ExpectType number | undefined
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.off('remove', (event) => {
    // $ExpectType TagData | undefined
    event.detail.data;
    // $ExpectType number | undefined
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.off('dblclick', (event) => {
    // $ExpectType TagData | undefined
    event.detail.data;
    // $ExpectType number | undefined
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.off('edit:beforeUpdate', (event) => {
    // $ExpectType TagData | undefined
    event.detail.data;
    // $ExpectType number | undefined
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.off('edit:updated', (event) => {
    // $ExpectType TagData | undefined
    event.detail.data;
    // $ExpectType number | undefined
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.off('input', (event) => {
    // $ExpectType HTMLInputElement | HTMLTextAreaElement
    event.detail.inputElm;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType string
    event.detail.value;
});
tagify.off('click', (event) => {
    // $ExpectType TagData
    event.detail.data;
    // $ExpectType number
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType MouseEvent
    event.detail.originalEvent;
});
tagify.off('keydown', (event) => {
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType KeyboardEvent
    event.detail.originalEvent;
});
tagify.off('edit:keydown', (event) => {
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType KeyboardEvent
    event.detail.originalEvent;
});
tagify.off('focus', (event) => {
    // $ExpectType Element
    event.detail.relatedTarget;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.off('blur', (event) => {
    // $ExpectType Element
    event.detail.relatedTarget;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.off('edit:start', (event) => {
    // $ExpectType TagData
    event.detail.data;
    // $ExpectType number
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType boolean
    event.detail.isValid;
});
tagify.off('edit:input', (event) => {
    // $ExpectType TagData & { newValue: string; }
    event.detail.data;
    // $ExpectType number
    event.detail.index;
    // $ExpectType HTMLElement
    event.detail.tag;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType Event
    event.detail.originalEvent;
});
tagify.off('dropdown:show', (event) => {
    // $ExpectType HTMLElement
    event.detail.dropdown;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.off('dropdown:hide', (event) => {
    // $ExpectType HTMLElement
    event.detail.dropdown;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.off('dropdown:updated', (event) => {
    // $ExpectType HTMLElement
    event.detail.dropdown;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.off('dropdown:scroll', (event) => {
    // $ExpectType number
    event.detail.percentage;
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
});
tagify.off('dropdown:select', (event) => {
    // $ExpectType Tagify<TagData>
    event.detail.tagify;
    // $ExpectType string
    event.detail.value;
});

const tags: TagData[] = [
    { value: 'banana', color: 'yellow' },
    { value: 'apple', color: 'red' },
    { value: 'watermelon', color: 'green' }
];
tagify.addTags('foo');
tagify.addTags(tags);
const addedElements = tagify.addTags(['banana', 'orange', 'apple'], true, true);
typedTagify.addTags([{ active: false, name: "", title: "", value: "" }]);

tagify.addMixTags('[[foo]] and [[bar]]');
tagify.addMixTags(['[[foo]] and', '[[bar]]...']);
tagify.addMixTags(tags);
typedTagify.addMixTags([{ active: false, name: "", title: "", value: "" }]);

tagify.removeTags();
tagify.removeTags(addedElements, true, 100);

tagify.addEmptyTag();
tagify.addEmptyTag({ label: 'Apple' });
typedTagify.addEmptyTag();
typedTagify.addEmptyTag({ active: false });
// $ExpectError
typedTagify.addEmptyTag({ label: "Apple" });
tagify.loadOriginalValues('banana');
tagify.loadOriginalValues(['banana', 'orange']);
// $ExpectType TagData[]
tagify.getWhitelistItem("foo");
// $ExpectType TagData[]
tagify.getWhitelistItem("foo", 'banana');
// $ExpectType TagData[]
tagify.getWhitelistItem("foo", 'banana', [{ value: "boo" }]);
// $ExpectType MyTagData[]
typedTagify.getWhitelistItem("foo");
// $ExpectType MyTagData[]
typedTagify.getWhitelistItem("foo", "title");
// $ExpectType MyTagData[]
typedTagify.getWhitelistItem("foo", "title", [{ value: 'foo', active: false, name: "", title: "" }]);
// $ExpectError
typedTagify.getWhitelistItem("foo", "banana");
// $ExpectType number[]
tagify.getTagIndexByValue('foo');
// $ExpectType number | false
tagify.isTagDuplicate('foo');
// $ExpectType number | false
tagify.isTagDuplicate('foo', true);
// $ExpectType string
tagify.parseMixTags('[[foo]] and [[bar]] are...');
// $ExpectType HTMLElement[]
tagify.getTagElms();
// $ExpectType HTMLElement[]
tagify.getTagElms('blue', 'green');

// $ExpectType string
tagify.getInputValue();
// $ExpectType string
tagify.getMixedTagsAsString();

// $ExpectType HTMLElement | undefined
const tagElement = tagify.getTagElmByValue('foo');
if (tagElement !== undefined) {
    // $ExpectType TagData | undefined
    tagify.tagData(tagElement);
    tagify.tagData(tagElement, { value: 'bar' });
    tagify.tagData(tagElement, { value: 'bar' }, false);
    tagify.tagData(tagElement, { value: 'bar' }, true);
    // $ExpectType Tagify<TagData>
    tagify.editTag();
    // $ExpectType Tagify<TagData>
    tagify.editTag(tagElement);
    tagify.replaceTag(tagElement, { value: 'bar' });
    // $ExpectType Tagify<TagData>
    tagify.tagLoading(tagElement, true);
}
tagify.loading(true);

const typedTagElement = typedTagify.getTagElmByValue('foo');
if (typedTagElement !== undefined) {
    // $ExpectType MyTagData | undefined
    typedTagify.tagData(typedTagElement);
    // $ExpectType MyTagData | { active: true; }
    typedTagify.tagData(typedTagElement, { active: true });
    // $ExpectType MyTagData | { active: true; }
    typedTagify.tagData(typedTagElement, { active: true }, false);
    // $ExpectType MyTagData | { active: true; }
    typedTagify.tagData(typedTagElement, { active: true }, undefined);
    // $ExpectType MyTagData
    typedTagify.tagData(typedTagElement, { active: true, name: '', title: '', value: '' }, true);
    // $ExpectError
    typedTagify.tagData(typedTagElement, { active: true }, true);
    // $ExpectError
    typedTagify.replaceTag(typedTagElement, { value: 'bar' });
    typedTagify.replaceTag(typedTagElement, { value: 'bar', title: "", name: "", active: false });
}

const newTag = tagify.createTagElem({ value: 'hello' });
// $ExpectError
typedTagify.createTagElem({ value: 'hello' });
typedTagify.createTagElem({ value: 'hello', title: "", name: "", active: false });
// $ExpectType Tagify<TagData>
tagify.injectAtCaret(newTag);
tagify.placeCaretAfterNode(newTag);
tagify.insertAfterTag(newTag, 'world');
tagify.insertAfterTag(newTag, document.createElement('span'));

tagify.toggleClass('active');
tagify.toggleClass('active', true);

tagify.updateValueByDOMTags();
tagify.parseTemplate('wrapper', [inputElement, settings]);
tagify.parseTemplate('tag', [tags[0]]);
tagify.parseTemplate('dropdownItem', [tags[0]]);
tagify.parseTemplate('dropdown', [settings]);
tagify.parseTemplate('dropdownItemNoMatch', [{ value: "" }]);
tagify.parseTemplate((data) => `<span>${data.value}</span>`, [tags[0]]);
// $ExpectError
tagify.parseTemplate((data) => `<span>${data.value}</span>`, [tags]);
tagify.setReadonly(false);
tagify.setDisabled(false);
tagify.setDisabled(true);

tagify.dropdown.show();
tagify.dropdown.show('foo');
tagify.dropdown.selectAll();
tagify.dropdown.hide();
tagify.dropdown.hide(true);
tagify.dropdown.toggle();
tagify.dropdown.toggle(true);
tagify.dropdown.refilter();
tagify.dropdown.refilter('filter value');

tagify.removeAllTags();
tagify.removeAllTags({});
tagify.removeAllTags({ withoutChangeEvent: false });
tagify.removeAllTags({ withoutChangeEvent: true });
tagify.getCleanValue();
tagify.update();
tagify.update({});
tagify.update({ withoutChangeEvent: true });
tagify.destroy();
