/// <reference types="node" />

import { get, STATUS_CODES } from "http"
import { mkdir, writeFile, unlink, rmdir } from "fs"
import * as path from "path"

interface Package {
    name: string
    description: string
    version: string
    homepage?: string
}

interface Registry {
    name: string
    description: string
    "dist-tags": { latest: string }
    versions: { [version: string]: Package }
}

const newPackageName = process.argv[2]
if (!newPackageName) {
    throw new Error("Usage: node scripts/new-package.js new-package-name")
}

run().catch(e => {
    console.error(e)
    process.exit(1)
})

async function run() {
    const files: [string, string][] = [
        ["index.d.ts", await getIndex()],
        [`${newPackageName}-tests.ts`, ""],
        ["tsconfig.json", `${JSON.stringify(getTSConfig(), undefined, 4)}\n`],
        ["tslint.json", '{ "extends": "../tslint.json" }\n'],
    ]

    try {
        await pify1(mkdir, newPackageName)
        await Promise.all(files.map(([name, text]) => write(name, text)))
    } catch (e) {
        if (e.code === "EEXIST") {
            console.warn(`Module “${newPackageName}” already exists!`)
        } else {
            console.error(`Error creating module files: ${e}\nCleaning Up.`)
            await Promise.all(files.map(([name]) => rm(name)))
            await pify1(rmdir, newPackageName)
        }
        process.exit(1)
    }
}

async function getIndex() {
    let version = "x.x"
    let project = "https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)"
    try {
        const reg: Registry = JSON.parse(await loadString(`http://registry.npmjs.org/${newPackageName}`))

        const { latest } = reg["dist-tags"]
        const { homepage } = reg.versions[latest]

        version = latest.split(".").slice(0, 2).join(".")
        if (homepage !== undefined) project = homepage
    } catch (e) {
        console.warn(`Warning: could not retrieve version/homepage information: ${e.message}`)
    }

    return `// Type definitions for ${newPackageName} ${version}
// Project: ${project}
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

Fill the header in!
`
}

function getTSConfig() {
    return {
        "compilerOptions": {
            "module": "commonjs",
            "target": "es6",
            "noImplicitAny": true,
            "noImplicitThis": true,
            "strictNullChecks": true,
            "baseUrl": "../",
            "typeRoots": [
                "../"
            ],
            "types": [],
            "noEmit": true,
            "forceConsistentCasingInFileNames": true
        },
        "files": [
            "index.d.ts",
            `${newPackageName}-tests.ts`
        ]
    }
}

function write(name: string, content: string) {
    return new Promise((resolve, reject) => {
        writeFile(path.join(newPackageName, name), content, err => err ? reject(err): resolve())
    })
}

function rm(name: string) {
    return pify1(unlink, path.join(newPackageName, name)).catch((e: NodeJS.ErrnoException) => {
        if (e.code === "ENOENT") return
        throw e
    })
}

function pify1<F extends (a: A, cb: (err?: Error) => void) => void, A>(fn: F, arg: A) {
    return new Promise((resolve, reject) => {
        fn(arg, err => err ? reject(err): resolve())
    })
}

function loadString(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        get(url, (res) => {
            if (res.statusCode !== 200) {
                return reject(new Error(`HTTP Error ${res.statusCode}: ${STATUS_CODES[res.statusCode || 500]} for ${url}`))
            }
            let rawData = ""
            res.on("data", chunk => rawData += chunk)
            res.on("end", () => resolve(rawData))
        }).on("error", e => reject(e))
    })
}
