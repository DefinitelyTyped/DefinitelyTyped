/// <reference types="jui-core"/>

import {jui} from 'jui-core';
import {
    UIAccordion, UIAutoComplete, UIColorPicker, UICombo, UIDatePicker, UIDropdown, UIModal, UINotify,
    UIPaging, UIProgress, UIProperty, UISelect
} from 'jui';

jui.ready([
    'ui.accordion',
    'ui.autocomplete',
    'ui.colorpicker',
    'ui.combo',
    'ui.datepicker',
    'ui.dropdown',
    'ui.modal',
    'ui.notify',
    'ui.paging',
    'ui.progress',
    'ui.property',
    'ui.select'
], function (
    accordion: UIAccordion,
    autocomplete: UIAutoComplete,
    colorpicker: UIColorPicker,
    combo: UICombo,
    datepicker: UIDatePicker,
    dropdown: UIDropdown,
    modal: UIModal,
    notify: UINotify,
    paging: UIPaging,
    progress: UIProgress,
    property: UIProperty,
    select: UISelect
) {
    let a: UIAccordion = accordion("#test", {
        multipanel: false
    });

    console.log(a.activeIndex());

    let autoComplete: UIAutoComplete = autocomplete("#test", {
        words : []
    });

    autoComplete.update([]);

    let colorPicker: UIColorPicker = colorpicker("#test", {
        color: '#FFFF00'
    });

    console.log(colorPicker.getColor('hex'));

    let comboInstance: UICombo = combo("#test", {
        keydown: true
    })

    console.log(comboInstance.getValue());

    let datePicker: UIDatePicker = datepicker("#test", {
        type: "daily"
    });

    datePicker.select(Date.now());

    datePicker.select(2016, 1, 2);

    datePicker.select(new Date());

    let dropdownInstance: UIDropdown = dropdown("#test", {
        width: 100
    })

    dropdownInstance.update([]);

    dropdownInstance.hide();

    dropdownInstance.reload();

    let m : UIModal = modal("#test", {autoHide: true});

    m.show();

    let n: UINotify = notify("#test");

    n.add({ title: "Caution message Send!!!", message: "Feb 15, 2013-12-24 02:24:19", color: 'warning' }, 1000);
    n.add({ title: "Caution message Send!!!", message: "Feb 15, 2013-12-24 02:24:19", color: 'success' }, 1000);
    n.reset();

    let p: UIPaging = paging("#test", { count :100, pageCount : 5 });

    p.first();
    p.last();
    p.next();
    p.prev();
    p.page(10);

    let prog: UIProgress = progress("#test", { striped: true });

    console.log(prog.getValue());

    prog.setValue(100);

    let propertyView: UIProperty = property("#test", {
        items : [
            { type : 'group', title : 'Sample Category'},
            { type : 'text', title : 'Category Name',  key: 'sample-category-name', value : 'test'}
        ]
    })

    console.log(propertyView.getValue());

    let selectInstance: UISelect = select("#test", {
        items : [
            { type : 'item', value : '0', text : 'first', html : '<div>test</div>', selected : true },
            { type : 'divider' }
        ],
        multi: true,
        placeholder: 'Sample Select'
    });

    console.log(selectInstance.getValue());

});
