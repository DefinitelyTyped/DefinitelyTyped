import filenameReservedRegex, { windowsReservedNameRegex } from "filename-reserved-regex";

filenameReservedRegex(); // $ExpectType RegExp
windowsReservedNameRegex(); // $ExpectType RegExp
