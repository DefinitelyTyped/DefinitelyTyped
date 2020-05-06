import fs = require('fs')
import os = require('os')
import { message, warn, markdown } from "danger"
const suggestionsDir = [os.homedir(), ".dts", "suggestions"].join('/')
const lines: string[] = []
if (fs.existsSync(suggestionsDir)) {
    for (const suggestionFile of fs.readdirSync(suggestionsDir)) {
        const path = [suggestionsDir, suggestionFile].join('/')
        const suggestions = fs.readFileSync(path, "utf8").split('\n').map(x => JSON.parse(x)) as Array<{ fileName: string, ruleName: string, message: string }>
        const name = suggestionFile.slice(0, suggestionFile.indexOf('.txt'))
        lines.push("## " + name)
        for (const s of suggestions) {
            lines.push("- " + s.fileName.slice(s.fileName.indexOf("types/" + name)) + " &mdash; " + s.message)
        }
    }
    markdown(lines.join('\n'))
}

