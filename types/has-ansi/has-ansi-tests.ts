import hasAnsi from "has-ansi";

// $ExpectType boolean
hasAnsi("\u001B[4mUnicorn\u001B[0m");
hasAnsi("cake");
