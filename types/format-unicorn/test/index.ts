import 'format-unicorn';

// Unsafe version
let outputString: string;

outputString = 'Hello, {name}; you have {favoriteNumber}'.formatUnicorn({
  name: "kruncher",
  favoriteNumber: 42
});
