// jQuery tests
// only instantiation & methods available through jQuery
const el = document.querySelector('.foo') || document.createElement('div');

// carousel
$(".foo").carousel();
$(".foo").carousel('next', 1);
$(".foo").carousel('prev', 1);
$(".foo").carousel('set', 1);
$(".foo").carousel('destroy');
// collapsible
$(".foo").collapsible();
$(".foo").collapsible('open');
$(".foo").collapsible('close');
$(".foo").collapsible('destroy');
// dropdown
$(".foo").dropdown();
$(".foo").dropdown('open');
$(".foo").dropdown('close');
$(".foo").dropdown('recalculateDimensions');
$(".foo").dropdown('destroy');
// tapTarget
$(".foo").tapTarget();
$(".foo").tapTarget('open');
$(".foo").tapTarget('close');
$(".foo").tapTarget('destroy');
// materialbox
$(".foo").materialbox();
$(".foo").materialbox('open');
$(".foo").materialbox('close');
$(".foo").materialbox('destroy');
// slider
$(".foo").slider();
$(".foo").slider('pause');
$(".foo").slider('start');
$(".foo").slider('prev');
$(".foo").slider('next');
$(".foo").slider('destroy');
// modal
$(".foo").modal();
$(".foo").modal("open");
$(".foo").modal("close");
$(".foo").modal("destroy");
// parallax
$(".foo").parallax();
$(".foo").parallax("destroy");
// pushpin
$(".foo").parallax();
$(".foo").parallax("destroy");
// scrollSpy
$(".foo").scrollSpy();
$(".foo").scrollSpy("destroy");
// sidenav
$(".foo").sidenav();
$(".foo").sidenav("open");
$(".foo").sidenav("close");
$(".foo").sidenav("destroy");
// tabs
$(".foo").tabs();
$(".foo").tabs("destroy");
$(".foo").tabs("updateTabIndicator");
$(".foo").tabs("select", "id");
// toast not available in jQuery
// tooltip
$(".foo").tooltip();
$(".foo").tooltip("open");
$(".foo").tooltip("close");
$(".foo").tooltip("destroy");
// floatingActionButton
$(".foo").floatingActionButton();
$(".foo").floatingActionButton("open");
$(".foo").floatingActionButton("close");
$(".foo").floatingActionButton("destroy");
// autocomplete
$(".foo").autocomplete();
$(".foo").autocomplete("destroy");
$(".foo").autocomplete("selectOption", el);
$(".foo").autocomplete("updateData", { Microsoft: null });
// chips
$(".foo").chips();
$(".foo").chips("destroy");
$(".foo").chips("addChip", {
    tag: '',
    image: ''
});
<<<<<<< HEAD
$(".foo").chips("deleteChip", 2);
$(".foo").chips("selectChip", 2);
// datepicker
$(".foo").datepicker();
$(".foo").datepicker("open");
$(".foo").datepicker("close");
$(".foo").datepicker("destroy");
$(".foo").datepicker("setDate", new Date());
$(".foo").datepicker("gotoDate", new Date());
$(".foo").datepicker("toString");
// timepicker
$(".foo").timepicker();
$(".foo").timepicker("open");
$(".foo").timepicker("close");
$(".foo").timepicker("destroy");
$(".foo").timepicker("showView", "hours");
// formSelect
$(".foo").formSelect();
$(".foo").formSelect("getSelectedValues");
$(".foo").formSelect("destroy");
// charactercounter
$(".foo").characterCounter();
$(".foo").characterCounter("destroy");
=======
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

$(".whatever").formSelect();
$(".whatever").formSelect({ classes: "whatever" });
$(".whatever").formSelect("destroy");

$(".whatever").dropdown();
$(".whatever").dropdown({ alignment: "left" });
$(".whatever").dropdown("open");
$(".whatever").dropdown("close");
$(".whatever").dropdown("destroy");
$(".whatever").dropdown("recalculateDimensions");
>>>>>>> d010c2aeab88ecc300eac377ef653fbf721ab188
