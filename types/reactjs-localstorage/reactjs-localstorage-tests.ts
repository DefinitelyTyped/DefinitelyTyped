import * as reactLocalStorage from "reactjs-localstorage";

reactLocalStorage.set("var", "test"); // $ExpectType any
const resultKey: any = reactLocalStorage.get("var"); // $ExpectType any

reactLocalStorage.setObject("var", { test: "test" }); // $ExpectType any
const resultKeyObject: any = reactLocalStorage.getObject("var"); // $ExpectType any

reactLocalStorage.remove("var"); // $ExpectType void
reactLocalStorage.clear(); // $ExpectType void
