/// <reference path="es6-promise.d.ts" />

import rsvp = require('es6-promise');
var Promise = rsvp.Promise;

var promiseString: Promise<string>,
    promiseStringArr: Promise<string[]>,
    arrayOfPromise: Promise<string>[],
    promiseNumber: Promise<number>,
    promiseAny: Promise<any>,
    thenable: Thenable<string>;

// constructor test
var constructResult = new Promise<string>((resolve, reject) => {
    resolve('a string');
});
promiseString = constructResult;


var constructResult1 = new Promise<string>((resolve: (promise: Thenable<string>) => void) => {
    resolve(Promise.resolve('a string'));
});
promiseString = constructResult1;

//cast test
var castResult = Promise.cast('a string');
promiseString = castResult;
var castResult1 = Promise.cast(Promise.resolve('a string'));
promiseString = castResult1;

//resolve test
var resolveResult = Promise.resolve('a string');
promiseString = resolveResult;

var resolveResult1 = Promise.resolve(thenable);
promiseString = resolveResult1;

//reject test
var rejectResult = Promise.reject('there is an error');
promiseAny = rejectResult;

//all test
var allResult = Promise.all(arrayOfPromise);
promiseStringArr = allResult;

//race test
var raceResult = Promise.race(arrayOfPromise);
promiseString = raceResult;


//then test
var thenWithPromiseResult = promiseString.then(word => Promise.resolve(word.length));
promiseNumber = thenWithPromiseResult;

var thenWithPromiseResultAndPromiseReject = promiseString.then(word => Promise.resolve(word.length), error => Promise.resolve(10));
promiseNumber = thenWithPromiseResultAndPromiseReject;

var thenWithPromiseResultAndSimpleReject = promiseString.then(word => Promise.resolve(word.length), error => 10);
promiseNumber = thenWithPromiseResultAndSimpleReject;

var thenWithSimpleResult = promiseString.then(word => word.length);
promiseNumber = thenWithSimpleResult;

var thenWithSimpleResultAndPromiseReject = promiseString.then(word => word.length, error => Promise.resolve(10));
promiseNumber = thenWithSimpleResultAndPromiseReject;

var thenWithSimpleResultAndSimpleReject = promiseString.then(word => word.length, error => 10);
promiseNumber = thenWithSimpleResultAndSimpleReject;

var thenWithUndefinedFullFillAndSimpleReject = promiseString.then(undefined, error => 10);
promiseNumber = thenWithUndefinedFullFillAndSimpleReject;

var thenWithUndefinedFullFillAndPromiseReject = promiseString.then(undefined, error => Promise.resolve(10));
promiseNumber = thenWithUndefinedFullFillAndPromiseReject;

var thenWithNoResultAndNoReject = promiseString.then<number>();
promiseNumber = thenWithNoResultAndNoReject;

//catch test
var catchWithSimpleResult = promiseString.catch(error => 10);
promiseNumber = catchWithSimpleResult;

var catchWithPromiseResult = promiseString.catch(error => Promise.resolve(10));
promiseNumber = catchWithPromiseResult;


//examples coming from http://www.html5rocks.com/en/tutorials/es6/promises/

function get(url: string) {
    // Return a new promise.
    return new Promise<string>(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}



function getJSON(url: string) {
    return get(url).then(JSON.parse);
}

function addHtmlToPage(html: string) {

}

function addTextToPage(text: string) {

}

interface Story {
    heading: string;
    chapterUrls: string[]
}

getJSON('story.json').then(function (story: Story) {
    addHtmlToPage(story.heading);

    // Map our array of chapter urls to
    // an array of chapter json promises.
    // This makes sure they all download parallel.
    return story.chapterUrls.map(getJSON)
        .reduce(function (sequence, chapterPromise) {
            // Use reduce to chain the promises together,
            // adding content to the page for each chapter
            return sequence.then(function () {
                // Wait for everything in the sequence so far,
                // then wait for this chapter to arrive.
                return chapterPromise;
            }).then(function (chapter) {
                    addHtmlToPage(chapter.html);
                });
        }, Promise.resolve());
}).then(function () {
        addTextToPage("All done");
    }).catch(function (err) {
        // catch any error that happened along the way
        addTextToPage("Argh, broken: " + err.message);
    }).then(function () {
        (<HTMLElement>document.querySelector('.spinner')).style.display = 'none';
    });

