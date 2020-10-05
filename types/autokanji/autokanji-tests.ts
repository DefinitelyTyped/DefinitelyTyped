import autoKanji = require('autokanji');

autoKanji.find('あつい'); // $ExpectType string[]
autoKanji.setLenience(3); // $ExpectType void
