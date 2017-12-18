/**
 * Typescript definition tests for d3/d3-queue module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Queue from 'd3-queue';

// -------------------------------------------------------------------
// Test Queue
// -------------------------------------------------------------------

// Create queue ======================================================

let qNoResult: d3Queue.Queue;
let qWithResults: d3Queue.Queue;

// With default concurrency
qNoResult = d3Queue.queue();

// With limited concurrency
qWithResults = d3Queue.queue(3);

// Defer Tasks =======================================================

// No Results Task ---------------------------------------------------

function delayedHello(name: string, delay: number, callback: (error: any | null) => void) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback(null);
    }, delay);
}

qNoResult = qNoResult.defer(delayedHello, 'Alice', 250);

qNoResult.defer(delayedHello, 'Bob', 500);

// Task with Reuslts -------------------------------------------------

function getFileStats(path: string, callback: (error: any | null, stats?: any) => void) {
    // magically get file stats and behave like fs.stat when invoking the callback
}

qWithResults
    .defer(getFileStats, './workingpath/file1.json')
    .defer(getFileStats, './yetanotherworkingpath/file2.json');

// Await Tasks Completion =============================================

// No Results Task ---------------------------------------------------

qNoResult = qNoResult.await((error) => {
    if (error) throw error;
    console.log('Goodbye!');
});

// Task with Reuslts -------------------------------------------------

// await
qWithResults
    .await((error, file1Stat, file2Stat) => {
        if (error) throw error;
        console.log(file1Stat, file2Stat);
    });

// awaitAll

qWithResults = d3Queue.queue()
    .defer(getFileStats, './workingpath/file1.json')
    .defer(getFileStats, './yetanotherworkingpath/file2.json')
    .awaitAll((error, fileStats) => {
        if (error) throw error;
        console.log(fileStats[0], fileStats[1]);
    });

// Abort Deferred Tasks ==============================================

function requestDataFromInterWeb(url: string, callback: (error: any | null, data?: any) => void) {
    // magically get data from the interweb, e.g. like d3-request would, while supporting an abort() method
}

qWithResults = d3Queue.queue()
    .defer(requestDataFromInterWeb, 'http://www.google.com:81')
    .defer(requestDataFromInterWeb, 'http://www.google.com:81')
    .awaitAll((error, results) => {
        if (error) throw error;
        console.log(results[0], results[1]);
    });

qWithResults.abort();
