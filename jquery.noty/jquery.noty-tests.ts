/// <reference path="jquery.noty.d.ts" />

var n = noty({text: "foo"});
n.setTimeout(10).setText("bar").setType("foobar").show().close();

var m = $.noty.get("foo");
if (typeof m !== "boolean") {
  m.setText("foo");
}
