import JsReport = require('jsreport-core');

const jsreport = JsReport();
jsreport.init().then(() => {
	return jsreport.render({
		template: {
			content: '<h1>Hello {{:foo}}</h1>',
			engine: 'jsrender',
			recipe: 'phantom-pdf'
		},
		data: {
			foo: "world"
		}
	}).then((resp) => {
		// prints pdf with headline Hello world
		console.log(resp.content.toString());
	});
}).catch((e) => {
	console.log(e);
});
