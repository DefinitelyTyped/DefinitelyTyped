
import memmonit = require('memmonit')

const memoryUsage = memmonit.getMemoryUsage("GB");
console.log(memoryUsage);    //2.015354681

const memoryUsageTrunc = memmonit.memoryUsageTrunc("GB");
console.log(memoryUsageTrunc);   //2

const memoryUsageFixed = memmonit.getMemoryUsageFixed("GB", 2);
console.log(memoryUsageFixed);   //2.02

const memoryTotal = memmonit.getMemoryTotal("GB");
console.log(memoryTotal);    //15.364312

const memoryTotalTrunc = memmonit.getMemoryTotalTrunc("GB");
console.log(memoryTotalTrunc);   //15

const memoryTotalFixed = memmonit.getMemoryTotalFixed("GB", 2);
console.log(memoryTotalFixed);

memmonit.registerMemoryUsage("./test.txt", "GB")
memmonit.registerMemoryUsageTrunc("./test.txt", "GB")
memmonit.registerMemoryUsageFixed("./test.txt", "GB")