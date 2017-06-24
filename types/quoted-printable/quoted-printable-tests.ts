import * as quotedPrintable from "quoted-printable";
import * as utf8 from "utf8";

quotedPrintable.version === "0.2.1";
quotedPrintable.encode(utf8.encode("foo=bar"));
quotedPrintable.encode(utf8.encode("Iñtërnâtiônàlizætiøn☃💩"));
utf8.decode(quotedPrintable.decode("foo=3Dbar"));
utf8.decode(quotedPrintable.decode("I=C3=B1t=C3=ABrn=C3=A2ti=C3=B4n=C3=A0liz=C3=A6ti=C3=B8n=E2=98=83=F0=9F=92=\r\n=A9"));
