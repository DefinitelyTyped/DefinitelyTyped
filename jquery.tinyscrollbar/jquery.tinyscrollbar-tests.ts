/// <reference path="jquery.tinyscrollbar.d.ts" />

$('#scrollbar1').tinyscrollbar();
$('#scrollbar2').tinyscrollbar({ axis: 'x' });
$('#scrollbar3').tinyscrollbar({ size: 100 });
$('#scrollbar4').tinyscrollbar({ sizethumb: 15 });

var oScrollbar5 = $('#scrollbar5');
oScrollbar5.tinyscrollbar();

//some operation that changes the viewport content...

oScrollbar5.tinyscrollbar_update();

var oScroll6 = $('#scrollbar6');
oScroll6.tinyscrollbar();

//add a click event to a button
$('#scrollbar6-anchor').click(function () {
    oScroll6.tinyscrollbar_update(50);
    return false;
});

var oScrollbar = $('#scrollbar1');
oScrollbar.tinyscrollbar();

oScrollbar.tinyscrollbar_update();
oScrollbar.tinyscrollbar_update('bottom');
