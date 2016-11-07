/// <reference path="grecaptcha.d.ts" />

var params: ReCaptchaV2.Parameters = {
  "sitekey": "mySuperSecretKey",
  "theme": "light",
  "type": "image",
  "size": "normal",
  "tabindex": 5,
  "callback": (response: string) => { },
  "expired-callback": () => { },
}

var id1: number = grecaptcha.render("foo");
var id2: number = grecaptcha.render("foo", params);
var id3: number = grecaptcha.render(document.getElementById("foo"));
var id4: number = grecaptcha.render(document.getElementById("foo"), params);

// response takes a number and returns a string
var response1: string = grecaptcha.getResponse(id1);

// reset takes a number
grecaptcha.reset(id1);
