/// <reference path="dot.d.ts" />

var headertmpl = "<h1>{{=it.title}}</h1>";

var pagetmpl = "<h2>Here is the page using a header template< / h2 >\n"
	+ "{{#def.header}}\n"
	+ "{{=it.name}}";

var customizableheadertmpl = "{{#def.header}}"
	+ "\n{{#def.mycustominjectionintoheader || ''} }";

var pagetmplwithcustomizableheader = "<h2>Here is the page with customized header template</h2>\n"
	+ "{{##def.mycustominjectionintoheader:\n"
	+ "	<div>{{=it.title}} is not {{=it.name}}</div>\n"
	+ "#}}\n"
	+ "{{#def.customheader}}\n"
	+ "{{=it.name}}";

var def = {
	header: headertmpl,
	customheader: customizableheadertmpl
};
var data = {
	title: "My title",
	name: "My name"
};

var pagefn = doT.template(pagetmpl, undefined, def);
var content = pagefn(data);

pagefn = doT.template(pagetmplwithcustomizableheader, undefined, def);
var contentcustom = pagefn(data);
