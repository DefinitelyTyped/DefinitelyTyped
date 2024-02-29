import angular = require("angular");
import ngShowdown = require("ng-showdown");

const app: angular.IModule = angular.module("tests", ["ng-showdown"]);

app.config(($showdownProvider: ngShowdown.ShowdownProvider) => {
    $showdownProvider.setOption("noHeaderId", true); // $ExpectType ShowdownProvider
    $showdownProvider.setOption("foo", "bar"); // $ExpectType ShowdownProvider
    $showdownProvider.getOption("foo"); // $ExpectType any
    $showdownProvider.loadExtension("extension"); // $ExpectType ShowdownProvider
    $showdownProvider.$get().stripHtml("<p>Foo bar</p>"); // $ExpectType string
    $showdownProvider.$get().makeHtml("# Hello World!"); // $ExpectType string
});

app.controller("myController", ($showdown: ngShowdown.SDObject) => {
    $showdown.stripHtml("<p>Foo bar</p>"); // $ExpectType string
    $showdown.makeHtml("# Hello World!"); // $ExpectType string
    $showdown.getOption("foo"); // $ExpectType any
    $showdown.getOptions(); // $ExpectType ShowdownOptions
});

declare const $filter: angular.IFilterService;
// $ExpectType (text: string) => string
const stripHtmlFilter = $filter("stripHtml");
stripHtmlFilter("<p>Foo bar</p>"); // $ExpectType string
