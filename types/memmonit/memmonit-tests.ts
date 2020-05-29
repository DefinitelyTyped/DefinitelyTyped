import memmonit = require('memmonit');

const memoryMonitoring = memmonit.MemoryMonitoring;
const registerMonitoring = memmonit.RegisterMonitoring;

const memoryUsage = memoryMonitoring.getMemoryUsage("GB");
console.log(memoryUsage);    // 2.015354681

const memoryUsageTrunc = memoryMonitoring.memoryUsageTrunc("GB");

console.log(memoryUsageTrunc);   // 2

const memoryUsageFixed = memoryMonitoring.getMemoryUsageFixed("GB", 2);
console.log(memoryUsageFixed);   // 2.02

const memoryTotal = memoryMonitoring.getMemoryTotal("GB");

console.log(memoryTotal);    // 15.364312

const memoryTotalTrunc = memoryMonitoring.getMemoryTotalTrunc("GB");

console.log(memoryTotalTrunc);   // 15

const memoryTotalFixed = memoryMonitoring.getMemoryTotalFixed("GB", 2);

console.log(memoryTotalFixed);

registerMonitoring.registerMemoryUsage("./test.txt", "GB");

registerMonitoring.registerMemoryUsageTrunc("./test.txt", "GB");

registerMonitoring.registerMemoryUsageFixed("./test.txt", "GB");
