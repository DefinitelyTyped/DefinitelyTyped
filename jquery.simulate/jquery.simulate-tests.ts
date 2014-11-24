/// <reference path="jquery.simulate.d.ts"/>

var $element = $("body");

$element.simulate("click");
$element.simulate("mousewheel", { detail: 50 });
