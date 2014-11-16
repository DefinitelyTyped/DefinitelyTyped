/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jsrender.d.ts"/>

$.views.converters("upper", function(val) {
  return val.toUpperCase();
});

$.views.converters({
  upper: (val: string) => val.toUpperCase(),
  lower: (val: string) => val.toLowerCase()
});

$.views.converters.html("< > ' \" &");
$.views.converters.attr( "< > ' \" &");
$.views.converters.url("<_>_\"_ ");

function renderBoldP(value: any): string {
   return "<p><b>" + value + "</b></p>";
}

$.views.tags("boldp", renderBoldP);
$.views.tags("boldp", {
  template: "<p><b>{{:~tag.tagCtx.args[0]}}</b></p>"
});

function myFormatFunction(value: string, upper: string): string {
  return upper ? value.toUpperCase() : value.toLowerCase();
}
$.views.helpers("format", myFormatFunction);
$.views.helpers({format: myFormatFunction});

var person = {
    name: "Adriana"
};

$.templates("personTmpl", "<label>Name:</label> {{:name}}");
var html = $.render["personTmpl"](person);
console.log(html);

var myTmpl = $.templates("<label>Name:</label> {{:name}}");
var html = myTmpl.render(person);
console.log(html);

$.templates({
  personTmpl: "#personTemplate",
  labelTmpl: "Name:"
});

var html = $("#personTemplate").render(person);
console.log(html);
