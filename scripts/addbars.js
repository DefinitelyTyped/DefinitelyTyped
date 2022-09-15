const fs = require('fs')
const lines = fs.readFileSync('../dterrors.txt', 'utf8').split('\n')
/** @type {{ [s: string]: { replacements: [string, number][], filename: string } }} */
const projects = {}
/** @type {{ replacements: [string, number][], filename: string }} */
let project = { replacements: [], filename: '' }
lines.forEach((line, i) => {
    // '/home/vsts/work/1/s/types/'
    if (line.startsWith('Error in ')) {
        const match = line.match('Error in (.+)')
        // new project
        if (match) {
            project = { replacements: [], filename: `../types/${match[1]}/${match[1]}-tests.ts` }
            projects[match[1]] = project
        }
        else {
            console.log('skipping', line)
        }
    }
    else if (line.match(/^Error: .+\d+:\d+$/)) {
        const match = line.match(/(types\/.+):\d+:\d+$/)
        if (match) {
            project.filename = `../${match[1]}`
        }
    }
    else if (line.endsWith('expected type to be:')) {
        const match = line.match(/^ERROR: (\d+):/)
        if (match) {
            project.replacements.push([lines[i + 3].slice(2), +match[1]])
        }
    }
})
for (const k of Object.keys(projects)) {
    // 1. open types/${k}/${k}-tests.ts
    // 2. split to lines
    if (!fs.existsSync(projects[k].filename)) {
        console.log("could not find normal test file for", k)
        continue
    }
    const lines = fs.readFileSync(projects[k].filename, 'utf8').split('\n')
    // 3. add to end of line at v[1]
    for (const replacement of projects[k].replacements) {
        const [newt, i] = replacement
        if (lines[i + 1] == null) console.log ('no matching line for', newt, i + 1, 'in', k, '; total length was', lines.length)
        if (lines[i + 1] == null) console.log ([lines[i - 1], lines[i], lines[i + 1]])
        if (lines[i - 1].includes('ExpectType'))
            lines[i - 1] += " || " + newt
        else if (lines[i - 2].includes('ExpectType'))
            lines[i - 2] += " || " + newt
        else
            console.log('Could not find replacement for line', i, 'in', k, lines[i], lines[i+1])
    }
    fs.writeFileSync(projects[k].filename, lines.join('\n'))
}

console.log(Object.keys(projects).length)
