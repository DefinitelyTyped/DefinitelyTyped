$(".whatever").sidenav();
$(".whatever").sidenav({ inDuration: 200 });
$(".whatever").sidenav("open");
$(".whatever").sidenav("destroy");

$(".whatever").tabs();
$(".whatever").tabs({ duration: 200 });
$(".whatever").tabs("destroy");
$(".whatever").tabs("select", "id");

$(".whatever").modal();
$(".whatever").modal({ inDuration: 200 });
$(".whatever").modal("open");
$(".whatever").modal("destroy");

$(".whatever").characterCounter();
$(".whatever").characterCounter("destroy");

$(".whatever").autocomplete({
    data: {
        Apple: null,
        Google: "https://placehold.it/250x250"
    }
});
$(".whatever").autocomplete("updateData", { Microsoft: null });

$(".whatever").tooltip();
$(".whatever").tooltip({ html: "<img/>" });
$(".whatever").tooltip("open");
$(".whatever").tooltip("destroy");

$(".whatever").floatingActionButton();
$(".whatever").floatingActionButton({ direction: "left" });
$(".whatever").floatingActionButton("open");
$(".whatever").floatingActionButton("destroy");

// Toast can not be invoked using jQuery.

$(".whatever").datepicker();
$(".whatever").datepicker({ defaultDate: new Date() });
$(".whatever").datepicker("open");
$(".whatever").datepicker("destroy");
$(".whatever").datepicker("setDate", new Date());
$(".whatever").datepicker("gotoDate", new Date());

$(".whatever").timepicker();
$(".whatever").timepicker({ defaultTime: "13:14" });
$(".whatever").timepicker("open");
$(".whatever").timepicker("destroy");
$(".whatever").timepicker("showView", "hours");
