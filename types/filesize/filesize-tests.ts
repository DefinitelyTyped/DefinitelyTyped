import filesize = require("filesize");

filesize(500);                        // "500 B"
filesize(500, {bits: true});          // "4 Kb"
filesize(265318, {base: 10});         // "265.32 kB"
filesize(265318);                     // "259.1 KB"
filesize(265318, {round: 0});         // "259 KB"
filesize(265318, {output: "array"});  // [259.1, "KB"]
filesize(265318, {output: "object"}); // {value: 259.1, suffix: "KB", symbol: "KB"}
filesize(1, {symbols: {B: "Б"}});     // "1 Б"
filesize(1024);                       // "1 KB"
filesize(1024, {exponent: 0});        // "1024 B"
filesize(1024, {output: "exponent"}); // 1
filesize(265318, {standard: "iec"});  // "259.1 KiB"
filesize(265318, {standard: "iec", fullform: true}); // "259.1 kibibytes"
filesize(12, {fullform: true, fullforms: ["байтов"]});  // "12 байтов"
filesize(265318, {separator: ","});   // "259,1 KB"
filesize(265318, {locale: 'de-DE'});  // "259,1 KB"

const size = filesize.partial({standard: "iec"});
size(265318);
