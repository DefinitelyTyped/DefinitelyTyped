/// <reference path="knockout-paging.d.ts" />

// Different option formats
var emptyOptions      = {};
var pageNumberOptions = { pageNumber: 2 };
var pageSizeOptions   = { pageSize: 10 };
var generatorOptions  = { pageGenerator: 'sliding' };
var allOptions        = { pageNumber: 2, pageSize: 10, pageGenerator: 'sliding' };

function defaults() {
	ko.paging.defaults.pageNumber = 1;
	ko.paging.defaults.pageSize = 50;
}

function pageGenerators() {

	// Allow to set the windowSize on sliding page generator
	ko.paging.generators['sliding'].windowSize(5);

	// Add custom page generator
	ko.paging.generators['custom'] = {
		generate: function(pagedObservable: KnockoutObservable<any>) {
			return [0, 1];
		}
	}
}

function usingPagedObservableArrayFunctionOnKnockoutStatic() {
	var simplePaged = ko.pagedObservableArray();
	var initializedPaged = ko.pagedObservableArray([1, 2, 3]);
	var emptyOptionsPaged = ko.pagedObservableArray([1, 2, 3], emptyOptions);
	var pageNumberOptionsPaged = ko.pagedObservableArray([1, 2, 3], pageNumberOptions);
	var pageSizeOptionsPaged = ko.pagedObservableArray([1, 2, 3], pageSizeOptions);
	var generatorOptionsPaged = ko.pagedObservableArray([1, 2, 3], generatorOptions);
	var allOptionsPaged = ko.pagedObservableArray([1, 2, 3], allOptions);

    // Here we verify that the returned type is the paged observable array
    simplePaged.pageSize();
    initializedPaged.pageSize();
    emptyOptionsPaged.pageSize();
    pageNumberOptionsPaged.pageSize();
    pageSizeOptionsPaged.pageSize();
    generatorOptionsPaged.pageSize();
    allOptionsPaged.pageSize();
}

function usingExtend() {
	var emptyOptionsPaged = ko.observableArray([]).extend({ paged: emptyOptions });
	var pageNumberOptionsPaged = ko.observableArray([]).extend({ paged: pageNumberOptions });
	var pageSizeOptionsPaged = ko.observableArray([]).extend({ paged: pageSizeOptions });
	var generatorOptionsPaged = ko.observableArray([]).extend({ paged: generatorOptions });
	var allOptionsPaged = ko.observableArray([]).extend({ paged: allOptions });
    var withInitialArrayValue = ko.observableArray([1, 2, 3]).extend({ paged: emptyOptions });

    // Here we verify that the returned type is the paged observable array
    emptyOptionsPaged.pageSize();
    pageNumberOptionsPaged.pageSize();
    pageSizeOptionsPaged.pageSize();
    generatorOptionsPaged.pageSize();
    allOptionsPaged.pageSize();
}

function observables() {
    var paged = ko.pagedObservableArray([]);
	var pageSize = paged.pageSize();
	var pageNumber = paged.pageNumber();
}

function computed() {
    var paged = ko.pagedObservableArray([]);
    var pageItems = paged.pageItems();
    var pageCount = paged.pageCount();
    var itemCount = paged.itemCount();
    var firstItemOnPage = paged.firstItemOnPage();
    var lastItemOnPage = paged.lastItemOnPage();
    var hasPreviousPage = paged.hasPreviousPage();
    var hasNextPage = paged.hasNextPage();
    var isFirstPage = paged.isFirstPage();
    var isLastPage = paged.isLastPage();
    var pages = paged.pages();
}

function functions() {
    var paged = ko.pagedObservableArray([]);
    paged.toNextPage();
    paged.toLastPage();
    paged.toNextPage();
    paged.toPreviousPage();
    paged.toFirstPage();
}