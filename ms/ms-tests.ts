import ms = require('ms');

ms('2 days')  // 172800000 
ms('1d')      // 86400000 

ms(60000)             // "1m" 
ms(2 * 60000)         // "2m" 
ms(ms('10 hours'))    // "10h" 

ms(60000, { long: true })             // "1 minute" 
ms(2 * 60000, { long: true })         // "2 minutes" 
ms(ms('10 hours'), { long: true })    // "10 hours" 