import { wordsToHours, wordsToMinutes, wordsToSeconds } from "words-to-time-converter";

// $ExpectType string
wordsToMinutes("Lorem Ipsum is simply dummy text ...", "slow");

// $ExpectType string
wordsToHours("Lorem Ipsum is simply dummy text ...", "average");

// $ExpectType string
wordsToSeconds("Lorem Ipsum is simply dummy text ...", "fast");

// $ExpectType string
wordsToMinutes("Lorem Ipsum is simply dummy text ...");
