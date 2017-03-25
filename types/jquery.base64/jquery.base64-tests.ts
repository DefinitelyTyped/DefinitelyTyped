var encoded = $.base64.encode("");
$.base64.decode(encoded);

var encodedUTF8 = $.base64.encode("", true);
$.base64.decode(encodedUTF8, true);
