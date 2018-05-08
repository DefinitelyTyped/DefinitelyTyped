$('body').off('.data-api');
$('body').off('.alert.data-api');

$(".btn.danger").button("toggle").addClass("fat");
$("#myModal").modal();
$("#myModal").modal({ keyboard: false });
$("#myModal").modal('show');

$('#myModal').on('show', (e) => e.preventDefault());

$('#myModal').modal({ keyboard: false });
$('#myModal').modal('toggle');

$('.dropdown-toggle').dropdown();

$('#navbar').scrollspy();
$('body').scrollspy({ target: '#navbar-example' });

$('#element').tooltip('show');

$('#element').popover('show');

$(".alert").alert();
$(".alert").alert('close');

$('.nav-tabs').button();
$().button('toggle');

$(".collapse").collapse();

$('#myCollapsible').collapse({ toggle: false });

$('.carousel').carousel();
$('.carousel').carousel({ interval: 2000 });

$('.typeahead').typeahead({
    matcher: item => true,
    sorter: (items: any[]) => items,
    updater: item => item,
    highlighter: item => ""
});

$('#navbar').affix();

$('.item').emulateTransitionEnd(2000);

$.support.transition = false;
console.log(($.support.transition as any as TransitionEventNames).end === "transitionend");
