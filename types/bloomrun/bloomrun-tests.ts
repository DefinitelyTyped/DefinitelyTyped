import Bloomrun , { bloomrun } from "bloomrun";

const bloomrunInstance: bloomrun.Bloomrun = Bloomrun()
const bloomrunInstanceDepth: bloomrun.Bloomrun = Bloomrun({ indexing: 'depth' })
const bloomrunInstanceInsertion: bloomrun.Bloomrun = Bloomrun({ indexing: 'insertion' })

const pattern: bloomrun.Pattern = { foo: 'bar', x: /.*/ }

let br: bloomrun.Bloomrun

br = bloomrunInstance.add(pattern, 'any type')
br = bloomrunInstance.add(pattern, () => 'function')
br = bloomrunInstance.add(pattern, 4)

br = bloomrunInstance.remove(pattern, 'any type')
br = bloomrunInstance.remove(pattern, () => 'function')
br = bloomrunInstance.remove(pattern, 7)

const lookupOpts = { patterns: true }
const lookupResult: bloomrun.Pattern = bloomrunInstance.lookup(pattern, lookupOpts)
bloomrunInstance.lookup(pattern)

let iterator: bloomrun.Iterator
const iteratorOpts = { patterns: true, payload: true }
iterator = bloomrunInstance.iterator(pattern, iteratorOpts)
iterator = bloomrunInstance.iterator(pattern)

const List: Array<bloomrun.Pattern> = bloomrunInstance.list(pattern)

// default return void
bloomrunInstance.default(pattern)
bloomrunInstance.default('any type')
bloomrunInstance.default(() => 'function')
bloomrunInstance.default(5)