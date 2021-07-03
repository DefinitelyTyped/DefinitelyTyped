import randomIPv6 = require("random-ipv6");

randomIPv6(); // $ExpectType string
randomIPv6({}); // $ExpectType string
randomIPv6({compressed: true}); // $ExpectType string
randomIPv6({padded: true}); // $ExpectType string
randomIPv6({compressed: true, padded: true}); // $ExpectType string
randomIPv6("{token1}:{token2}:{token3}:{token4}:{token5}:{token6}:{token7}:{token8}"); // $ExpectType string
randomIPv6("{token1}:{token2}:{token3}:{token4}:{token5}:{token6}:{token7}:{token8}", {}); // $ExpectType string
randomIPv6("{token1}:{token2}:{token3}:{token4}:{token5}:{token6}:{token7}:{token8}", {compressed: true}); // $ExpectType string
randomIPv6("{token1}:{token2}:{token3}:{token4}:{token5}:{token6}:{token7}:{token8}", {padded: true}); // $ExpectType string
randomIPv6("{token1}:{token2}:{token3}:{token4}:{token5}:{token6}:{token7}:{token8}", {compressed: true, padded: true}); // $ExpectType string
