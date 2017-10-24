import { rollup, Bundle } from 'rollup'

let cache: Bundle | undefined

async function main() {
    const bundle = await rollup({
        entry: 'main.js',
        cache,
    })

    const result = bundle.generate({
        format: 'cjs',
    })

    cache = bundle

    await bundle.write({
        format: 'cjs',
        dest: 'bundle.js',
    })
}

main()
