import { flag, code, name, countries } from "country-emoji";

flag("PT")!; // $ExpectType string
flag("Portugal")!; // $ExpectType string
flag("🇵🇹"); // $ExpectType string | undefined

code("PT"); // $ExpectType string | undefined
code("Portugal")!; // $ExpectType string
code("🇵🇹")!; // $ExpectType string

name("PT")!; // $ExpectType string
name("Portugal"); // $ExpectType string | undefined
name("🇵🇹")!; // $ExpectType string

countries; // $ExpectType { [key: string]: [string, string]; }
