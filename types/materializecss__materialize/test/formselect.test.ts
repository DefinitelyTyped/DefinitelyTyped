import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType FormSelect
const _formselect = new M.FormSelect(elem);
// $ExpectType FormSelect
const el = M.FormSelect.init(elem);
// $ExpectType FormSelect[]
const els = M.FormSelect.init(document.querySelectorAll('.whatever'));

// $ExpectType FormSelect
new materialize.FormSelect(elem);
// $ExpectType FormSelect
const formSelect = new materialize.FormSelect(elem, {
    classes: "whatever",
    dropdownOptions: {
        alignment: "left"
    }
});
// $ExpectType string[]
formSelect.getSelectedValues();
// $ExpectType void
formSelect.destroy();
// $ExpectType FormSelectOptions
formSelect.options;
// $ExpectType Element
formSelect.el;
// $ExpectType Dropdown
formSelect.dropdown;
// $ExpectType HTMLUListElement
formSelect.dropdownOptions;
// $ExpectType HTMLInputElement
formSelect.input;
// $ExpectType boolean
formSelect.isMultiple;
// $ExpectType Element
formSelect.wrapper;

$(".whatever").formSelect();
$(".whatever").formSelect({ classes: "whatever" });
$(".whatever").formSelect("destroy");
