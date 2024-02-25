import { parse, stringify } from "mokapi/yaml";

// @ts-expect-error
parse(1)
parse("")
const n: number = parse("")
const s: string = parse("")
const o: {} = parse("")

// @ts-expect-error
const n1: number = stringify(1)
const s1: string = stringify({})
stringify("foo")