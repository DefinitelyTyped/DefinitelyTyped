import BulmaTagsInput, { BulmaTagsInputItem } from '@creativebulma/bulma-tagsinput';

let input: BulmaTagsInput;
input = new BulmaTagsInput('#id');
input = new BulmaTagsInput(document.createElement('input'));
input = new BulmaTagsInput('#id', {});
input = new BulmaTagsInput(document.createElement('input'), {});

input = BulmaTagsInput.attach('#id');
input = BulmaTagsInput.attach(document.createElement('input'));
input = BulmaTagsInput.attach('#id', {});
input = BulmaTagsInput.attach(document.createElement('input'), {});

input = new BulmaTagsInput('#id', { allowDuplicates: true });
input = new BulmaTagsInput('#id', { caseSensitive: false });
input = new BulmaTagsInput('#id', { clearSelectionOnTyping: true });
input = new BulmaTagsInput('#id', { closeDropdownOnItemSelect: false });
input = new BulmaTagsInput('#id', { delimiter: ' ' });
input = new BulmaTagsInput('#id', { freeInput: false });
input = new BulmaTagsInput('#id', { highlightDuplicate: false });
input = new BulmaTagsInput('#id', { highlightMatchesString: false });
input = new BulmaTagsInput('#id', { itemText: '' });
input = new BulmaTagsInput('#id', { itemValue: '' });
input = new BulmaTagsInput('#id', { maxTags: 42 });
input = new BulmaTagsInput('#id', { maxChars: 1337 });
input = new BulmaTagsInput('#id', { minChars: 0 });
input = new BulmaTagsInput('#id', { noResultsLabel: 'Where is Perry?' });
input = new BulmaTagsInput('#id', { placeholder: '' });
input = new BulmaTagsInput('#id', { removable: false });
input = new BulmaTagsInput('#id', { searchMinChars: 2 });
input = new BulmaTagsInput('#id', { searchOn: 'text' });
input = new BulmaTagsInput('#id', { searchOn: 'value' });
input = new BulmaTagsInput('#id', { selectable: false });
input = new BulmaTagsInput('#id', { source: ['', { text: '', value: '' }] });
input = new BulmaTagsInput('#id', { source: () => ['', { text: '', value: '' }] });
input = new BulmaTagsInput('#id', { source: Promise.resolve(['', { text: '', value: '' }]) });
input = new BulmaTagsInput('#id', { tagClass: '' });
input = new BulmaTagsInput('#id', { trim: false });

input
    .add('')
    .add({ text: '', value: '' })
    .add(['', { text: '', value: '' }])
    .clearSelection()
    .flush()
    .focus();

let bool: boolean;
let num: number;

bool = input.has('');
bool = input.has({ text: '', value: '' });
bool = input.hasValue('');
bool = input.hasText('');
num = input.indexOf('');
num = input.indexOf({ text: '', value: '' });
const element: HTMLInputElement = input.input;
input
    .add(input.items)
    .remove('')
    .remove({ text: '', value: '' })
    .remove(['', { text: '', value: '' }])
    .removeAll()
    .removeAtIndex(0, false)
    .select('')
    .select({ text: '', value: '' })
    .selectAtIndex(0)
    .add(input.selected);
const value: string | string[] = input.value;

let bulmaItem: BulmaTagsInputItem;
input.on('before.add', item => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.on('after.add', ({ item }) => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.on('before.remove', item => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.on('after.remove', item => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.on('before.flush', ([item]) => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.on('after.flush', ([item]) => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.on('before.select', ({ item }) => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.on('after.select', ({ item }) => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.on('before.unselect', ({ item }) => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.on('after.unselect', ({ item }) => {
    if (typeof item !== 'string') bulmaItem = item;
});

input.once('before.add', item => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.once('after.add', ({ item }) => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.once('before.remove', item => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.once('after.remove', item => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.once('before.flush', ([item]) => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.once('after.flush', ([item]) => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.once('before.select', ({ item }) => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.once('after.select', ({ item }) => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.once('before.unselect', ({ item }) => {
    if (typeof item !== 'string') bulmaItem = item;
});
input.once('after.unselect', ({ item }) => {
    if (typeof item !== 'string') bulmaItem = item;
});

input.off('before.add');
input.off('after.add');
input.off('before.remove');
input.off('after.remove');
input.off('before.flush');
input.off('after.flush');
input.off('before.select');
input.off('after.select');
input.off('before.unselect');
input.off('after.unselect');
