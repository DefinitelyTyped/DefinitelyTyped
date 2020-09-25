import { Options, AddOption } from 'multiselect';

// basic usage
$('#your-select').multiSelect();

$('#your-select').multiSelect('select_all');

$('#your-select').multiSelect('select');

// with options
const options: Options = {
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
};

const addOption: AddOption = {
    value: '1',
    text: 'add_text',
    index: 0,
};

$('#your-select').multiSelect(options);

$('#your-select').multiSelect('select', ['elem_0', 'elem_1', 'elem_2']);

$('#your-select').multiSelect('addOption', addOption);
