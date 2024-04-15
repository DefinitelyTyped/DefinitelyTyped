import { bake_cookie, delete_cookie, read_cookie } from "sfcookies";

bake_cookie("Test", "Value"); // $ExpectType void

read_cookie("Test"); // $ExpectType string | unknown[]

delete_cookie("Test"); // $ExpectType void
