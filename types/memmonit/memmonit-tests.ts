import memmonit = require('memmonit')

let memoryUsage = memmonit.getMemoryUsage("GB");
console.log(memoryUsage);    //2.015354681

let memoryUsageTrunc = memmonit.memoryUsageTrunc("GB");
console.log(memoryUsageTrunc);   //2

let memoryUsageFixed = memmonit.getMemoryUsageFixed("GB", 2);
console.log(memoryUsageFixed);   //2.02

let memoryTotal = memmonit.getMemoryTotal("GB");
console.log(memoryTotal);    //15.364312

let memoryTotalTrunc = memmonit.getMemoryTotalTrunc("GB");
console.log(memoryTotalTrunc);   //15

let memoryTotalFixed = memmonit.getMemoryTotalFixed("GB", 2);
console.log(memoryTotalFixed);

memmonit.registerMemoryUsage("./test.txt", "GB")
memmonit.registerMemoryUsageTrunc("./test.txt", "GB")
memmonit.registerMemoryUsageFixed("./test.txt", "GB")