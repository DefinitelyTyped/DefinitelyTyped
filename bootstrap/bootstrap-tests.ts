/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="bootstrap.d.ts" />

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

$('.typeahead').typeahead();

$('#navbar').affix();