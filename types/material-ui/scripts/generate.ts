// Usage: ts-node generate.ts

/// <reference types="node" />

import {get} from 'https';
import {readdir, readFile, writeFile} from 'fs';
import {join, extname, basename, dirname, relative} from 'path';

const token = process.env.GITHUB_ACCESS_TOKEN || ''

const toMixedCase = (name) => {
    let dist = name[0].toUpperCase()
    for (let i = 1; i < name.length; i++) {
        const c = name[i]
        if (c !== '-') {
            dist += c
            continue
        }
        i++
        dist += name[i].toUpperCase()
    }
    return dist
}

const github = (path) => new Promise((resolve, reject) => {
    get({
        headers: {'user-agent': 'DefinitelyTyped/material-ui/generate'},
        host: 'api.github.com',
        path,
    }, (res) => {
        if ((res.statusCode / 100 >> 0) != 2) {
            reject(`GitHub response: ${res.statusCode} ${res.statusMessage}`)
            return
        }
        let data = '';
        res
            .on('data', (chunk) => data += chunk)
            .on('end', () => resolve(JSON.parse(data)))
    }).on('error', reject)
})

const categories = () => github(`/repos/callemall/material-ui/contents/src/svg-icons?ref=master&access_token=${token}`)

const contents = (path) => github(`/repos/callemall/material-ui/contents/${path}?ref=master&access_token=${token}`)

const collator = new Intl.Collator()

const resolvePath = (filename) => join(__dirname, '..', filename)

const readText = (filename) => new Promise<string>((resolve, reject) => {
    readFile(resolvePath(filename), 'utf8', (err, data) => {
        if (err != null) {
            reject(err)
            return
        }
        resolve(data)
    })
})

const writeText = (filename, text) => new Promise((resolve, reject) => {
    writeFile(resolvePath(filename), text, 'utf8', (err) => {
        if (err != null) {
            reject(err)
            return
        }
        resolve()
    })
})

const inject = (content) => {
    content.category = this.name
    return content
}

const rMark = /(\/{2} \{{3})[\s\S]*?(\/{2} \}{3})/g

main().catch((err) => console.error(err));

async function main() {
    const cats = await categories();
    const contentsList = await Promise.all(Array.prototype.map.call(cats, (cat) => contents(cat.path)
        .then((cons) => Array.prototype.map.call(cons, (con) => {
            con.category = cat.name
            return con
        }))
    ));
    const { dts, test } = await Array.prototype.concat.apply([], contentsList)
        .map((content) => {
            const {path} = content
            const name = basename(path, extname(path))
            content.id = join(relative('src', dirname(path)), name)
            content.className = toMixedCase(content.category) + toMixedCase(name)
            return content
        })
        .sort((a, b) => collator.compare(a.id, b.id))
        .reduce((prev, content)  => {
            const {dts, test} = prev
            dts.individuals.push(`declare module 'material-ui/${content.id}' {
    export import ${content.className} = __MaterialUI.SvgIcon;
    export default ${content.className};
}`)
            dts.summarizeds.push(`    export import ${content.className} = __MaterialUI.SvgIcon; // require('material-ui/${content.id}');`)

            test.individuals.push(`import _${content.className} from 'material-ui/${content.id}';`)
            test.summarizeds.push(`    ${content.className},`)
            return prev
        }, {
            dts: {individuals: [], summarizeds: []},
            test: {individuals: [], summarizeds: []},
        });

    {
        const {individuals, summarizeds} = dts
        const file = 'index.d.ts'
        let index = 0
        const script = await readText(file)
        await writeText(file, script.replace(rMark, (_, p1, p2) => {
            let text = ''
            switch (index) {
                case 0:
                    text = individuals.join('\n\n')
                    break
                case 1:
                    text = summarizeds.join('\n')
                    break
            }
            index++
            return p1 + '\n' + text + '\n' + p2
        }))
    }

    {
        const {individuals, summarizeds} = test
        const file = 'material-ui-tests.tsx'
        let index = 0
        const script = await readText(file)
        await writeText(file, script.replace(rMark, (_, p1, p2) => {
            let text = ''
            switch (index) {
                case 0:
                    text = individuals.join('\n')
                    break
                case 1:
                    text = summarizeds.join('\n')
                    break
            }
            index++
            return p1 + '\n' + text + '\n' + p2
        }))
    }
}
