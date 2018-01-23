let $table = $('table.demo');
$table.floatThead();

$table.floatThead({
    scrollContainer: $table => {
        return $table.closest('.wrapper');
    }
});

$table.floatThead({
    responsiveContainer: $table => {
        return $table.closest('.table-responsive');
    }
});

$table.floatThead({top: 25});

let reinit = $table.floatThead('destroy');
reinit();

$table.floatThead();
$table.floatThead('reflow');
