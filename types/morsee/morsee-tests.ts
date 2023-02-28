import * as morsee from "morsee";

morsee.encode('hello'); // $ExpectType string

morsee.decode('.... . .-.. .-.. --- .--'); // $ExpectType string
