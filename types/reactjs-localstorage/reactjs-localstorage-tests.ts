import { reactLocalStorage } from "reactjs-localstorage";

reactLocalStorage.set("var", "test"); // $ExpectType string
const resultKey: string = reactLocalStorage.get("var"); // $ExpectType string

reactLocalStorage.setObject("var", { test: "test" }); // $ExpectType string
const resultKeyObject: object = reactLocalStorage.getObject("var"); // $ExpectType object

reactLocalStorage.remove("var"); // $ExpectType void
reactLocalStorage.clear(); // $ExpectType void
