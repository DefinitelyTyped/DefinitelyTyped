$('#menu').metisMenu();

$('.metismenu').metisMenu({toggle: false});

$('.test').metisMenu({
    toggle: false,
    activeClass: 'active',
    collapseClass: 'collapse',
    collapseInClass: 'in',
    collapsingClass: 'collapsing',
    preventDefault: true
});

$('.metismenu').metisMenu('dispose');

$('.metismenu')
    .metisMenu()
    .on('show.metisMenu', function(e) {
        // empty logic
    }).on('shown.metisMenu', function(e) {
        // empty logic
    }).on('hide.metisMenu', function(e) {
        // empty logic
    }).on('hidden.metisMenu', function(e) {
        // empty logic
    });
