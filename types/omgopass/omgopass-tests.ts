import generatePassword = require("omgopass");

// $ExpectType string
generatePassword({ hasNumbers: false });

// $ExpectType string
generatePassword({ syllablesCount: 5 });

// $ExpectType string
generatePassword({ titlecased: false });

// $ExpectType string
generatePassword({
    syllablesCount: 4,
    minSyllableLength: 3,
    maxSyllableLength: 4,
    hasNumbers: false,
    titlecased: true,
    separators: "-_",
    vowels: "аеиоуэюя",
    consonants: "бвгджзклмнпрстчш",
});
