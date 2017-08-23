//import $ = require('jquery');

$(() => {
    // examples from http://sunnywalker.github.io/jQuery.FilterTable/

    $('table').filterTable();

    $('table').filterTable({ quickList: ['class', 'tag'] });

    $('table').filterTable({
        callback(term, table) {
            table.find('tr').removeClass('striped').filter(':visible:even').addClass('striped');
        }
    });
});
