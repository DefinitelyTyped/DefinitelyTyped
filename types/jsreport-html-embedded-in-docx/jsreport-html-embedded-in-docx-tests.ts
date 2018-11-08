import JsReport = require('jsreport-core');
import JsreportHtml2docx = require('jsreport-html-embedded-in-docx');

const jsreport = JsReport();
jsreport.use(JsreportHtml2docx());

(async () => {
	const content = `<h1>Hello</h1>`;
	await jsreport.init();
	await jsreport.render({
		template: {
			content,
			engine: 'none',
			recipe: 'html-embedded-in-docx'
		}
	});
})();
