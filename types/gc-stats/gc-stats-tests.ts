import GCStats = require("gc-stats");
import { GCStatistics } from "gc-stats";

const gcStats = GCStats();

gcStats.on("stats", (stats: GCStatistics) => {
    const { gctype: gcType, startTime, endTime, before, after, diff } = stats;
    const beforeMallocedMemory = before.mallocedMemory;
    const afterMallocedMemory = after.mallocedMemory;
    const diffMallocedMemory = diff.mallocedMemory;
});
