import katexLib = require('katex');

class KatexTest {
	constructor() {
		katexLib.render('My Latex String', document.createElement('div'));

		try {
			let options: katexLib.KatexOptions = { breakOnUnsupportedCmds: true };
			let value: string = katexLib.renderToString('My Latex String', options);
		} catch (error) {
			if (error instanceof katexLib.ParseError) {
				//do something with this error
			}
		}
	}
}