let cssjsGlobal = require("../../jotform-css.js")
import { CssJs } from "./index"

// not all interface methods tested here, below is a sample of code that I've actually used
class TestParser {
	public parse(): string {
		const parser = new cssjsGlobal.cssjs() as CssJs

		let parsed = parser.parseCSS(".foo { background-color: red }")
		parsed = parser.applyNamespacing(parsed, "#id1")
		let css = parser.getCSSForEditor(parsed)
		return css
	}
}

let parsingTest = new TestParser()
let css = parsingTest.parse()
