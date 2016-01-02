/// <reference path="./knockout.d.ts" />

﻿import ko = require("knockout");

var myArray = ko.observableArray([1, 2, 3]);

class MyViewModel {
	name = ko.observable("Jeff");
}

ko.applyBindings(new MyViewModel());
