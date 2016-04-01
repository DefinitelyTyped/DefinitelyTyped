/// <reference path="fingerprint.d.ts"/>

function test_no_option() {
  var fingerprint = new Fingerprint().get();
}

function test_set_canvas_enabled() {
  var fingerprint = new Fingerprint({canvas: true}).get();
}

function test_set_screen_resolution_enabled() {
  var fingerprint = new Fingerprint({screen_resolution: true}).get();
}

function test_set_ie_activex_enabled() {
  var fingerprint = new Fingerprint({ie_activex: true}).get();
}

function test_set_hasher_in_option() {
  var my_hasher = (value: string, seed: number) => { return value.length % seed; };
  var fingerprint = new Fingerprint({hasher: my_hasher}).get();

  var fingerprint = new Fingerprint({hasher: (value, seed) => { return value.length % seed; }}).get();
}

function test_set_hasher_in_constructor() {
  var my_hasher = (value: string, seed: number) => { return value.length % seed; };
  var fingerprint = new Fingerprint(my_hasher).get();

  var fingerprint = new Fingerprint((value, seed) => { return value.length % seed; }).get();
}

function test_call_methods() {
  var f = new Fingerprint();
  f.murmurhash3_32_gc("abcde", 123);
  if (f.hasLocalStorage()) {
    alert("LocalStorage");
  }
  if (f.hasSessionStorage()) {
    alert("SessionStorage");
  }
  if (f.isCanvasSupported()) {
    alert("CanvasSupported");
  }
  if (f.isIE()) {
    alert("IE");
  }
  f.getPluginsString();
  f.getRegularPluginsString();
  f.getIEPluginsString();
  f.getScreenResolution();
  f.getCanvasFingerprint();
}
