const headertmpl = "<h1>{{=it.title}}</h1>";

const pagetmpl = `<h2>Here is the page using a header template< / h2 >
{{#def.header}}
{{=it.name}}`;

const customizableheadertmpl = `{{#def.header}}
{{#def.mycustominjectionintoheader || ''} }`;

const pagetmplwithcustomizableheader = `<h2>Here is the page with customized header template</h2>
{{##def.mycustominjectionintoheader:
<div>{{=it.title}} is not {{=it.name}}</div>
#}}
{{#def.customheader}}
{{=it.name}}`;

const def = {
	header: headertmpl,
	customheader: customizableheadertmpl
};
const data = {
	title: "My title",
	name: "My name"
};

doT.templateSettings.varname = 'test';

let pagefn = doT.template(pagetmpl, undefined, def);
const content = pagefn(data);

pagefn = doT.template(pagetmplwithcustomizableheader, undefined, def);
const contentcustom = pagefn(data);
