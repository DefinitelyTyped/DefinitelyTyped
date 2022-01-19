import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

bake_cookie("Test", "Value"); // $ExpectType void

read_cookie("Test"); // $ExpectType string

delete_cookie("Test"); // $ExpectType void
