import { keysReduce } from "./helpers"

keysReduce({"a": "b"} as {[key: string]: string}, (e) => "b", "a" as string)