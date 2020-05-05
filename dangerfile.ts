import fs = require('fs')
import os = require('os')
import { message, warn } from "danger"
const suggestionsDir = [os.homedir(), ".dts", "suggestions"].join('/')
let msg = "\n\n=== SUGGESTIONS ===\n"
const suggestionLines: string[] = [];
for (const suggestionFile of fs.readdirSync(suggestionsDir)) {
    msg += suggestionFile
    const path = [suggestionsDir, suggestionFile].join('/');
    const suggestions = fs.readFileSync(path, "utf8").split("\n");
    suggestionLines.push(`"${suggestionFile}": [${suggestions.join(",")}]`);
}
message(msg)
message(suggestionLines.join('\n'))

