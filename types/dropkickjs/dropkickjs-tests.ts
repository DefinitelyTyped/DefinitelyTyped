// constructor
var constructorNoOptions = new Dropkick('#my-select');
var constructorNoOptions2 = new Dropkick(new HTMLSelectElement());
var constructorOptions = new Dropkick('#my-select', {});
var constructorOptions2 = new Dropkick(new HTMLSelectElement(), {});

// options
var options: DropkickOptions = {
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
var withFullOptions = new Dropkick('#test', options);

var dk = new Dropkick('#test');

// fields (same as options)
var o1 = dk.disabled;
var o2 = dk.form;
var o3 = dk.length;
var o4 = dk.mobile;
var o5 = dk.multiple;
var o6 = dk.options;
var o7 = dk.selectedIndex;
var o8 = dk.selectedOptions;
var o9 = dk.value;

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

var node = dk.item(4);

dk.open();

dk.refresh();

dk.remove(4);

dk.reset();
dk.reset(true);

var words = dk.search("qwer", "fuzzy");

var node2 = dk.select(4);
var node3 = dk.select("AL");
var node4 = dk.select(4, true);

var node5 = dk.selectOne(4);
var node6 = dk.selectOne(4, true);

// real life example
var fieldValue = '';
var selectOptions: DropkickOptions = {
    open(this: Dropkick) {
        const optionsList = (<any> this).data.elem.lastChild; // undocumented but useful data field
        if (optionsList.scrollWidth > optionsList.offsetWidth) {
            optionsList.style.width = optionsList.scrollWidth + 25 + 'px';
        }
    },
    change: () => {
        fieldValue = select.value;
    }
};
var select = new Dropkick('#select', options);