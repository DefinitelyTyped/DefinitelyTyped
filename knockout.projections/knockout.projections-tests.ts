// Tests for knockout.projections.d.ts

/// <reference path="../knockout/knockout.d.ts" />
/// <reference path="knockout.projections.d.ts" />

// Test map
var sourceItems = ko.observableArray([1, 2, 3, 4, 5]);
var squares = sourceItems.map(function (x) { return x * x; });
var squaresAsStrings = sourceItems.map(function (x) { return (x * x).toString(); });

sourceItems.push(6);
// 'squares' has automatically updated and now contains [1, 4, 9, 16, 25, 36]
// 'squaresAsStrings' has automatically updated and now contains ['1', '4', '9', '16', '25', '36']

sourceItems.reverse();
// 'squares' now contains [36, 25, 16, 9, 4, 1]
// 'squaresAsStrings' now contains ['36', '25', '16', '9', '4', '1']

// Test Filtering

var evenSquares = squares.filter(function (x) { return x % 2 === 0; });
// evenSquares is now an observable containing [36, 16, 4]

sourceItems.push(9);
// This has no effect on evenSquares, because 9*9=81 is odd

sourceItems.push(10);
// evenSquares now contains [36, 16, 4, 100]
