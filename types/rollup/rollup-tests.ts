import { rollup, Bundle, Plugin } from 'rollup'

let cache: Bundle | undefined
let plugin: Plugin

async function main() {
    const bundle = await rollup({
        input: 'main.js',
        external: ['external-module'],
        plugins: [plugin],
        cache,
    })

    const bundle2 = await rollup({
        input: 'main.js',
        external: id => /^rxjs/.test(id),
        plugins: plugin
    })

    const result = bundle.generate({
        format: 'cjs',
        indent: false,
    })

    cache = bundle

    await bundle.write({
        format: 'cjs',
        dest: 'bundle.js',
        globals: {
            jquery: '$',
            lodash: '_',
        },
        banner: '/* Banner */',
        footer: '/* Footer */',
        intro: 'var ENV = "production";',
        outro: 'var VERSION = "1.0.0";',
        indent: '  ',
    })
}

main()
