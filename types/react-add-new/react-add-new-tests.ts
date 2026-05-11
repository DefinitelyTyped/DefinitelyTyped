import { createComponent, createContext, validateName } from "react-add-new";

// $ExpectType true | string
const result = validateName("foo");

// $ExpectType Promise<CreateStatus>
createComponent("Foo", "./", true, true);

// $ExpectType Promise<CreateStatus>
createContext("Foo", "./");
