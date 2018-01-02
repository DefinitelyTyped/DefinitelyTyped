import { rollup, watch, Bundle, Plugin, ConfigFileOptions } from 'rollup'

declare const console: { log(...messages: any[]): void, warn(message: string): void }

let cache: Bundle | undefined
const plugin: Plugin = {
    name: 'test-plugin',
    resolveId(importee, importer) {
        if (importer === undefined) {
            return 'custom/entry/point.js'
        }
        return importer.trim()
    },
    transform(source, id) {
        if (id === 'rxjs') {
            this.error(new Error(`Don't import this directly`))
            return null
        }
        const indexOfQuote = source.indexOf('"')
        if (indexOfQuote >= 0) {
            this.warn(`Prefer ' over " for strings`, indexOfQuote)
            return undefined
        }
        return source
    },
    transformBundle(source, options) {
        if (options.format === 'iife') {
            return `window.nonModule = true\n${source}`
        } else if (options.format === 'cjs') {
            return null
        }

        return undefined
    }
}

async function main() {
    const bundle = await rollup({
        input: 'main.js',
        external: ['external-module'],
        plugins: [plugin],
        onwarn: ({ code, frame, loc, message }) => {
            if (loc) {
                const { file, line, column } = loc
                console.log(`[${code}] - ${file}(${line},${column}): ${message}`)
            } else {
                console.log(`[${code}] - ${message}`)
            }

            if (frame) console.warn(frame)
        },
        cache,
    })

    const bundle2 = await rollup({
        input: 'main.js',
        external: id => /^rxjs/.test(id),
        plugins: plugin
    })

    const { code, map } = await bundle.generate({
        format: 'cjs',
        indent: false,
        sourcemap: true,
    })

    console.log(code, map)

    cache = bundle

    await bundle.write({
        format: 'cjs',
        file: 'bundle.js',
        name: 'myLib',
        interop: false,
        globals: {
            jquery: '$',
            lodash: '_',
        },
        banner: '/* Banner */',
        footer: '/* Footer */',
        intro: 'var ENV = "production";',
        outro: 'var VERSION = "1.0.0";',
        indent: '  ',
        sourcemap: 'inline',
        sourcemapFile: 'bundle.js.map',
        strict: true,
    })

    await bundle.write({
        format: 'cjs',
        file: 'bundle.js',
        name: 'myLib',
        interop: false,
        globals: (x: string) => x.replace("", "/"),
        banner: '/* Banner */',
        footer: '/* Footer */',
        intro: 'var ENV = "production";',
        outro: 'var VERSION = "1.0.0";',
        indent: '  ',
        sourcemap: 'inline',
        sourcemapFile: 'bundle.js.map',
        strict: true,
    })

    const watcher = watch({
        input: 'main.js',
        output: {
            file: 'bundle.js',
            format: 'es'
        },
        watch: {
            chokidar: true
        }
    })

    watcher.on('event', e => {
        switch (e.code) {
            case 'START':
                console.log(`We're rolling!`)
                return
            case 'END':
                console.log(`We're all rolled up!`)
                return
            case 'ERROR':
            case 'FATAL':
                console.log(e.error.message)
                return
            case 'BUNDLE_START':
                console.log(`Bundling: ${e.input}`)
                return
            case 'BUNDLE_END':
                console.log(`Bundling: ${e.input}`)
                return
        }

        assertNever(e)
    })

    watcher.close()
}

main()

export const defaultConfig: ConfigFileOptions = {
    input: 'main.js',
    output: {
        file: 'bundle.js',
        format: 'iife',
    }
}

export const multiConfig: ConfigFileOptions = {
    input: 'main.js',
    output: [
        {
            file: 'bundle.esm.js',
            format: 'es',
        },
        {
            file: 'bundle.cjs.js',
            format: 'cjs',
        }
    ]
}

function assertNever(nope: never) {
    throw new Error('Oh no!')
}
