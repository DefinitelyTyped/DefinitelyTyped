import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType Dropdown
const _dropdown = new M.Dropdown(elem);
// $ExpectType Dropdown
const el = M.Dropdown.init(elem);
// $ExpectType Dropdown[]
const els = M.Dropdown.init(document.querySelectorAll('.whatever'));

// $ExpectType Dropdown
new materialize.Dropdown(elem);
// $ExpectType Dropdown
const dropdown = new materialize.Dropdown(elem, {
    alignment: "left"
});
// $ExpectType void
dropdown.open();
// $ExpectType void
dropdown.close();
// $ExpectType void
dropdown.destroy();
// $ExpectType void
dropdown.recalculateDimensions();
// $ExpectType Element
dropdown.dropdownEl;
// $ExpectType Element
dropdown.el;
// $ExpectType number
dropdown.focusedIndex;
// $ExpectType string
dropdown.id;
// $ExpectType boolean
dropdown.isOpen;
// $ExpectType boolean
dropdown.isScrollable;
// $ExpectType DropdownOptions
dropdown.options;

$(".whatever").dropdown();
$(".whatever").dropdown({ alignment: "left" });
$(".whatever").dropdown("open");
$(".whatever").dropdown("close");
$(".whatever").dropdown("destroy");
$(".whatever").dropdown("recalculateDimensions");
