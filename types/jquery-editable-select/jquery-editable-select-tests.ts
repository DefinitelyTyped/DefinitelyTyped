function test_editable_select() {
    $("#select").editableSelect();
    $("#select").editableSelect({ filter: true, duration: 'slow', effects: 'default', appendTo: '.someelementclass', trigger: 'focus'});
    $("#select").editableSelect('remove', 0);
    $("#select").editableSelect('destroy');
    $("#select").editableSelect('hide');
    $("#select").editableSelect('show');
    $("#select").editableSelect('filter');
    $("#select").editableSelect('clear');
    $("#select").editableSelect('select', $('#option1'));
    $("#select").editableSelect('add', 'some text');
    $("#select").editableSelect('add', 'some text', 0);
    $("#select").editableSelect('add', 'some text', 0, [{name: 'attribute1', value: 'attribute1value'}]);
    $("#select").editableSelect('add', 'some text', 0, [{name: 'attribute1', value: 'attribute1value'}], 'some data');
}
