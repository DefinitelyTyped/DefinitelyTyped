/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jquery.tipsy.d.ts"/>

// basic
$('#example-1').tipsy();

// code snippets from http://onehackoranother.com/projects/jquery/tipsy/
$('#foo').tipsy({gravity: 'n'}); // nw | n | ne | w | e | sw | s | se

$('#foo').tipsy({gravity: $.fn.tipsy.autoNS});

$('#example-fade').tipsy({fade: true});

$('#example-custom-attribute').tipsy({title: 'id'});

$('#example-callback').tipsy({title: function() { return this.getAttribute('original-title').toUpperCase(); } });

$('#example-fallback').tipsy({fallback: "Where's my tooltip yo'?" });

$('#example-html').tipsy({html: true });

$('#example-delay').tipsy({delayIn: 500, delayOut: 1000});

$(function() {
  $('#focus-example [title]').tipsy({trigger: 'focus', gravity: 'w'});
});

function onclickExample1() { $("#manual-example a[rel=tipsy]").tipsy("show"); return false; }
function onclickExample2() { $("#manual-example a[rel=tipsy]").tipsy("hide"); return false; }
$('#manual-example a[rel=tipsy]').tipsy({trigger: 'manual'});

$('a.live-tipsy').tipsy({live: true});