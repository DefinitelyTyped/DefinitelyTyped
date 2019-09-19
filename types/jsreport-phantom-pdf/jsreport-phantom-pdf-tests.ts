import JsReport = require("jsreport-core");
import JsReportPhantomPdf = require("jsreport-phantom-pdf");
import JsRender = require("jsreport-jsrender");
import fs = require('fs');

const jsreport = JsReport({
	tasks: {
		strategy: "http-server"
	}
});

jsreport.beforeRenderListeners.add('test', (req, res) => {
	console.log('input', req.template.content);
});

jsreport.use(JsReportPhantomPdf());
jsreport.use(JsRender());

(async () => {
	await jsreport.init();
	await jsreport.documentStore.collection('settings').update({}, { $set: { foo: 1 } });
	const res = await jsreport.render({
		template: {
			content: "<h1>{{:foo}}</h1>",
			engine: 'jsrender',
			recipe: 'phantom-pdf',
			phantom: {
				header: 'header',
				headerHeight: '5cm',
				orientation: 'landscape'
			}
		},
		data: { foo: "hello2" }
	});
	fs.writeFileSync('./types/test/test.pdf', res.content);
	process.exit(0);
})();
