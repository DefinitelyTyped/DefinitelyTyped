import { keysReduce } from "bbob__plugin-helper/helpers"

const obj: {[key: string]: string} = {"a": "b"};
keysReduce(obj, (e) => "b", "a" as string)
