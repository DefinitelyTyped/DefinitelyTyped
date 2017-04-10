import * as moment from 'moment';

$('#test1').livestamp(new Date('June 18, 1987'));
$('#test2').livestamp(1362282933);
$('#test3').livestamp('destroy');
$('#test4').livestamp(moment(new Date('June 18, 1987')));

$.livestamp.update();
$.livestamp.pause();
$.livestamp.resume();
$.livestamp.interval(340);
var result:number = $.livestamp.interval();