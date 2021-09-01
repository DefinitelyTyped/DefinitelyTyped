const $selectpicker = $('.selectpicker');
$selectpicker.selectpicker({
    actionsBox: true,
    container: 'body',
    countSelectedText: 'counts > #',
    deselectAllText: 'test',
    dropdownAlignRight: true,
    dropupAuto: true,
    header: 'test',
    hideDisabled: true,
    iconBase: 'fa',
    liveSearch: true,
    liveSearchNormalize: true,
    liveSearchPlaceholder: 'test',
    liveSearchStyle: 'contains',
    maxOptions: 10,
    maxOptionsText: 'test',
    mobile: true,
    multipleSeparator: ', ',
    noneSelectedText: 'test',
    noneResultsText: 'test',
    selectAllText: 'test',
    selectedTextFormat: 'values',
    selectOnTab: true,
    showContent: true,
    showIcon: true,
    showSubtext: true,
    showTick: true,
    size: 'auto',
    style: 'test',
    styleBase: 'test',
    tickIcon: 'test',
    title: 'test',
    virtualScroll: true,
    width: 'auto',
    windowPadding: 0,
    sanitize: true,
    sanitizeFn: () => {},
});

$selectpicker.selectpicker().trigger('change');

$selectpicker.selectpicker('val', 'foo');
$selectpicker.selectpicker('val', ['foo', 'bar']);
$selectpicker.selectpicker('selectAll');
$selectpicker.selectpicker('setStyle', 'btn-large', 'add');
$selectpicker.selectpicker('val', 'foo').trigger('change');

$.fn.selectpicker.Constructor.BootstrapVersion = '4';

$.fn.selectpicker.Constructor.DEFAULTS.actionsBox; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.allowClear; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.chunkSize; // $ExpectType number
$.fn.selectpicker.Constructor.DEFAULTS.container; // $ExpectType string | boolean
$.fn.selectpicker.Constructor.DEFAULTS.countSelectedText; // $ExpectType string | ((numSelected: number, numTotal: number) => string)
$.fn.selectpicker.Constructor.DEFAULTS.deselectAllText; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.display; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.doneButton; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.doneButtonText; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.dropdownAlignRight; // $ExpectType string | boolean
$.fn.selectpicker.Constructor.DEFAULTS.dropupAuto; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.header; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.hideDisabled; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.iconBase; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.liveSearch; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.liveSearchNormalize; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.liveSearchPlaceholder; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.liveSearchStyle; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.maxOptions; // $ExpectType number | boolean
$.fn.selectpicker.Constructor.DEFAULTS.maxOptionsText; // $ExpectType string | any[] | ((numAll: number, numGroup: number) => [string, string])
$.fn.selectpicker.Constructor.DEFAULTS.mobile; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.multipleSeparator; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.noneResultsText; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.noneSelectedText; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.placeholder; // $ExpectType null
$.fn.selectpicker.Constructor.DEFAULTS.sanitize; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.sanitizeFn = unsafeElements => {
    unsafeElements; // $ExpectType (HTMLElement | Node | ChildNode)[]
};
$.fn.selectpicker.Constructor.DEFAULTS.selectAllText; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.selectedTextFormat; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.selectOnTab; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.showContent; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.showIcon; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.showSubtext; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.showTick; // $ExpectType boolean
$.fn.selectpicker.Constructor.DEFAULTS.size; // $ExpectType number | boolean | "auto"
$.fn.selectpicker.Constructor.DEFAULTS.source; // $ExpectType object
$.fn.selectpicker.Constructor.DEFAULTS.style; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.styleBase; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.template; // $ExpectType object
$.fn.selectpicker.Constructor.DEFAULTS.tickIcon; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.title; // $ExpectType string
$.fn.selectpicker.Constructor.DEFAULTS.virtualScroll; // $ExpectType number | boolean
$.fn.selectpicker.Constructor.DEFAULTS.whiteList; // $ExpectType Record<string, string[]>
$.fn.selectpicker.Constructor.DEFAULTS.width; // $ExpectType string | boolean
$.fn.selectpicker.Constructor.DEFAULTS.windowPadding; // $ExpectType number | number[]
