import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import * as utils from "@ckeditor/ckeditor5-adapter-ckfinder/src/utils";
import { Plugin } from "@ckeditor/ckeditor5-core";

if (!(UploadAdapter instanceof Plugin)) {
    throw new Error("UploadAdapter must extend Plugin");
}

let foo = "foo";
let nullValue = null;

foo = utils.getCookie(foo)!;
nullValue = utils.getCookie(foo);

foo = utils.getCsrfToken();

utils.setCookie(foo, "bar");

// $ExpectError
utils.setCookie(foo, 5);
// $ExpectError
const bar: number = utils.getCsrfToken();
// $ExpectError
utils.getCookie(nullValue);
