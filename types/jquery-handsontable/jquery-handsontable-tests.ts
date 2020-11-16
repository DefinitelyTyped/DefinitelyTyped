var data = [
    ["", "Maserati", "Mazda", "Mercedes", "Mini", "Mitsubishi"],
    ["2009", 0, 2941, 4303, 354, 5814],
    ["2010", 5, 2905, 2867, 412, 5284],
    ["2011", 4, 2517, 4822, 552, 6127],
    ["2012", 2, 2422, 5399, 776, 4151]
];

var div = $('div');
$('body').append(div);

div.handsontable({
    data: data,
    minSpareRows: 1,
    colHeaders: true,
    contextMenu: true
});

var instance: Handsontable.Context = div.handsontable('getInstance');
for (var i = 1; i < instance.countCols(); i++) {
    for (var j = 1; j < instance.countRows(); j++) {
        var value = parseInt(instance.getDataAtCell(j, i)) * 2;
        instance.setDataAtCell(j, i, value);
    }
}
