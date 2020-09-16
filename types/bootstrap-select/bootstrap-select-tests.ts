$('.selectpicker').selectpicker({
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
});
$('.selectpicker').selectpicker().trigger('change');

$('.selectpicker').selectpicker('val', 'foo');
$('.selectpicker').selectpicker('val', ['foo', 'bar']);
$('.selectpicker').selectpicker('selectAll');
$('.selectpicker').selectpicker('setStyle', 'btn-large', 'add');
$('.selectpicker').selectpicker('val', 'foo').trigger('change');
