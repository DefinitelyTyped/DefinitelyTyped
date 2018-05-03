import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Chips
const _chips = new M.Chips(elem);
// $ExpectType Chips
const el = M.Chips.init(elem);
// $ExpectType Chips[]
const els = M.Chips.init(document.querySelectorAll('.whatever'));

// $ExpectType Chips
const chips = new materialize.Chips(elem, {
    data: [{ tag: "tag" }],
    onChipAdd() { },
    onChipDelete() { },
    onChipSelect() { }
});

// $ExpectType void
chips.addChip({ tag: "tag" });
// $ExpectType void
chips.deleteChip(1);
// $ExpectType void
chips.destroy();
// $ExpectType void
chips.selectChip(1);
// $ExpectType Autocomplete
chips.autocomplete;
// $ExpectType ChipData[]
chips.chipsData;
// $ExpectType Element
chips.el;
// $ExpectType boolean
chips.hasAutocomplete;
// $ExpectType ChipsOptions
chips.options;

$(".whatever").chips({ data: [{ tag: "tag" }] });
$(".whatever").chips("destroy");
