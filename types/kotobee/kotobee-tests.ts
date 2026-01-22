// ------------------- Correct usage -------------------
const validLanguages: LanguageCode[] = [
    "ar",
    "de",
    "es",
    "hu",
    "jp",
    "ms",
    "no",
    "pt",
    "ru",
    "tr",
    "zh-tw",
    "cy",
    "en",
    "fr",
    "it",
    "ko",
    "nl",
    "pl",
    "ro",
    "sw",
    "zh-cn",
    "zh",
];

const validDirections: Directions[] = ["ltr", "rtl"];

// Test all valid languages
validLanguages.forEach(lang => Kotobee.setLanguage(lang));

// Test all valid directions
validDirections.forEach(dir => Kotobee.setDirection(dir));

// ------------------- Incorrect usage -------------------

// Invalid language
// @ts-expect-error
Kotobee.setLanguage("invalid");

// Invalid direction
// @ts-expect-error
Kotobee.setDirection("up");

// Calling clearCache with parameters should error
// @ts-expect-error
Kotobee.clearCache(123);

// Calling clearListeners with parameters should error
// @ts-expect-error
Kotobee.clearListeners("test");

// ------------------- Type assignments -------------------

// Assign valid types
validLanguages.forEach(lang => {
    const l: LanguageCode = lang; // $ExpectType LanguageCode
});

validDirections.forEach(dir => {
    const d: Directions = dir; // $ExpectType Directions
});

// Invalid assignments
// @ts-expect-error
const fakeLang: LanguageCode = "madeup";
// @ts-expect-error
const dirCenter: Directions = "center";
