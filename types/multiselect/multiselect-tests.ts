// basic usage
$('#your-select').multiSelect();

$('#your-select').multiSelect('select_all');

$('#your-select').multiSelect('select');

// with options
$('#your-select').multiSelect({
    afterInit: (value: string) => console.log(value),
    afterSelect: (values: string) => console.log('Select value: ' + values),
    afterDeselect: () => console.log('Deselect value'),
    selectableHeader: '<div>Selectable items</div>',
    selectableFooter: '<div>Selectable footer</div>',
    disabledClass: 'disabled',
    selectableOptgroup: false,
    keepOrder: false,
    dblClick: false,
    cssClass: '',
});

$('#your-select').multiSelect('select', ['elem_0', 'elem_1', 'elem_2']);

$('#your-select').multiSelect('addOption', {
    value: '1',
    text: 'add_text',
    index: 0,
});
