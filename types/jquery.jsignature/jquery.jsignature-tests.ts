/*
 * Taken from the tests section on jSignature
 */
$(document).ready(function () {

    var $sigdiv = $('#signature');

    $sigdiv.jSignature();

    $sigdiv.jSignature("reset");

    var data = $sigdiv.jSignature("getData", "svgbase64");

    $sigdiv.jSignature("setData", "data:" + data);

});
