/// <reference types="jquery" />

autosize(document.querySelectorAll("textarea")); // $ExpectType NodeListOf<HTMLTextAreaElement>
autosize(document.querySelector("textarea")!); // $ExpectType HTMLTextAreaElement
autosize(document.getElementById("my-textarea")!); // $ExpectType HTMLElement
autosize($("#my-textarea")); // $ExpectType JQuery<HTMLElement>

autosize.update(document.querySelectorAll("textarea")); // $ExpectType NodeListOf<HTMLTextAreaElement>
autosize.update(document.querySelector("textarea")!); // $ExpectType HTMLTextAreaElement
autosize.update(document.getElementById("my-textarea")!); // $ExpectType HTMLElement
autosize.update($("#my-textarea")); // $ExpectType JQuery<HTMLElement>

autosize.destroy(document.querySelectorAll("textarea")); // $ExpectType NodeListOf<HTMLTextAreaElement>
autosize.destroy(document.querySelector("textarea")!); // $ExpectType HTMLTextAreaElement
autosize.destroy(document.getElementById("my-textarea")!); // $ExpectType HTMLElement
autosize.destroy($("#my-textarea")); // $ExpectType JQuery<HTMLElement>
