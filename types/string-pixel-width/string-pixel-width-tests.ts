import stringPixelWidth = require('string-pixel-width');

// $ExpectType number
stringPixelWidth("test");
// $ExpectType number
stringPixelWidth("test", {});
// $ExpectType number
stringPixelWidth("test", { bold: true });
// $ExpectType number
stringPixelWidth("test", { font: "arial" });
// $ExpectType number
stringPixelWidth("test", { italic: true });
// $ExpectType number
stringPixelWidth("test", { size: 10 });
