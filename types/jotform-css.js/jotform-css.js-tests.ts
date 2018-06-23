import cssjsGlobal = require("../jotform-css.js")
import { CssJs } from "./index"

// not all interface methods tested here, below is a sample of code that I've actually used
class TestParser {
	public parse(cssString: string): string {
		const parser = new (<any>cssjsGlobal).cssjs() as CssJs

		let parsed = parser.parseCSS(cssString)
		parsed = parser.applyNamespacing(parsed, "#id1")
		let css = parser.getCSSForEditor(parsed)
		return css
	}
}

let parsingTest = new TestParser()
let css = parsingTest.parse(".foo { background-color: red }")
