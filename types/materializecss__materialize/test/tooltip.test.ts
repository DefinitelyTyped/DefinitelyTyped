import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType Tooltip
const _tooltip = new M.Tooltip(elem);
// $ExpectType Tooltip
const el = M.Tooltip.init(elem);
// $ExpectType Tooltip[]
const els = M.Tooltip.init(document.querySelectorAll('.whatever'));

// $ExpectType Tooltip
new materialize.Tooltip(elem);
// $ExpectType Tooltip
const tooltip = new materialize.Tooltip(elem, {
    inDuration: 300,
    position: "right"
});
// $ExpectType void
tooltip.open();
// $ExpectType void
tooltip.destroy();
// $ExpectType TooltipOptions
tooltip.options;
// $ExpectType Element
tooltip.el;
// $ExpectType boolean
tooltip.isOpen;

$(".whatever").tooltip();
$(".whatever").tooltip({ unsafeHTML: "<img/>" });
$(".whatever").tooltip("open");
$(".whatever").tooltip("destroy");
