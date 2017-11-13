$('table').filterTable();

$('table').filterTable({ quickList: ['class', 'tag'] });

$('table').filterTable({
    callback(term, table) {
        table.find('tr').removeClass('striped').filter(':visible:even').addClass('striped');
    }
});
