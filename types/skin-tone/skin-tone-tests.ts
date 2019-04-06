import skinTone = require('skin-tone');

// $ExpectType string
skinTone('👍', 4);
skinTone('👍', skinTone.NONE);
skinTone('👍', skinTone.WHITE);
skinTone('👍', skinTone.CREAM_WHITE);
skinTone('👍', skinTone.LIGHT_BROWN);
skinTone('👍', skinTone.BROWN);
skinTone('👍', skinTone.DARK_BROWN);
