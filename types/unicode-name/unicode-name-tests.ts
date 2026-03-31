import {
    unicodeAliases,
    unicodeBaseName,
    unicodeCorrectName,
    unicodeLabel,
    unicodeName,
    unicodeQualifiedSequenceName,
    unicodeReadableName,
    unicodeSequenceName,
    unicodeType,
} from "unicode-name";

// Test string parameter
unicodeName("A"); // $ExpectType string | undefined
unicodeBaseName("🚡"); // $ExpectType string | undefined
unicodeCorrectName("Ƣ"); // $ExpectType string | undefined

// Test number parameter
unicodeName(65); // $ExpectType string | undefined
unicodeBaseName(48); // $ExpectType string | undefined

// Test aliases interface
const aliases = unicodeAliases("\0");
if (aliases) {
    aliases.control; // $ExpectType string[] | undefined
    aliases.abbreviation; // $ExpectType string[] | undefined
}

// Test other functions
unicodeType("A"); // $ExpectType string | undefined
unicodeLabel("\0"); // $ExpectType string | undefined
unicodeReadableName("A"); // $ExpectType string | undefined

// Test sequence functions (string only)
unicodeSequenceName("🇺🇳"); // $ExpectType string | undefined
unicodeQualifiedSequenceName("‼︎"); // $ExpectType string | undefined
