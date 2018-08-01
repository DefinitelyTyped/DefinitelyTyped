// constructor
const constructorNoOptions = new Dropkick('#my-select');
const constructorNoOptions2 = new Dropkick(new HTMLSelectElement());
const constructorOptions = new Dropkick('#my-select', {});
const constructorOptions2 = new Dropkick(new HTMLSelectElement(), {});

// options
const options: DropkickOptions = {
    disabled: true,
    form: new HTMLFormElement(),
    length: 1,
    mobile: true,
    multiple: true,
    options: ['test'],
    selectedIndex: 0,
    selectedOptions: ['test'],
    value: 'test',
    change() { },
    close() { },
    open() { },
    initialize: () => { }
};
const withFullOptions = new Dropkick('#test', options);

const dk = new Dropkick('#test');

// fields (same as options)
const o1 = dk.disabled;
const o2 = dk.form;
const o3 = dk.length;
const o4 = dk.mobile;
const o5 = dk.multiple;
const o6 = dk.options;
const o7 = dk.selectedIndex;
const o8 = dk.selectedOptions;
const o9 = dk.value;

// methods
dk.add('new');
dk.add(new HTMLSelectElement());
dk.add('new', 'old');
dk.add('new', 1);

dk.disable();
dk.disable(false);
dk.disable(4, true);
dk.disable(4);

dk.dispose();

dk.focus();

dk.hide(4);
dk.hide(4, false);

const node = dk.item(4);

dk.open();

dk.refresh();

dk.remove(4);

dk.reset();
dk.reset(true);

const words = dk.search("qwer", "fuzzy");

const node2 = dk.select(4);
const node3 = dk.select("AL");
const node4 = dk.select(4, true);

const node5 = dk.selectOne(4);
const node6 = dk.selectOne(4, true);

// real life example
let fieldValue = '';
const selectOptions: DropkickOptions = {
    open(this: Dropkick) {
        const optionsList = (<any> this).data.elem.lastChild; // undocumented but useful data field
        if (optionsList.scrollWidth > optionsList.offsetWidth) {
            optionsList.style.width = `${optionsList.scrollWidth + 25}px`;
        }
    },
    change: () => {
        fieldValue = select.value;
    }
};
const select = new Dropkick('#select', options);
