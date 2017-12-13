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
