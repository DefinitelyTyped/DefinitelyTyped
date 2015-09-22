/// <reference path="knockout.mapping.d.ts" />
/// <reference path="../knockout/knockout.d.ts" />

var inputJSON = '{ name: "foo" }';
var inputData = { name: 'foo' };
var inputModel = { name: 'bar' };
var inputParent = { name: 'parent' };
var options = {};

var createOptions = {
    data: inputData,
    parent: parent
}

var updateOptions = {
    data: inputData,
    parent: parent,
    observable: ko.observable(7)
}

var targetOptions = {};
var inputOptions = {};

var mappingOptions = {
    ignore: ['age'],
    include: ['name'],
    copy: ['height'],
    mappedProperties: ['age', 'name'],
    deferEvaluation: false,
    create: function (options: KnockoutMappingCreateOptions) { },
    update: function (options: KnockoutMappingUpdateOptions) { },
    key: function (data: any) { return data; }
}


// Utility functions
mapping.isMapped(inputModel);
mapping.defaultOptions();
mapping.resetDefaultOptions();
mapping.getType(inputModel);

// fromJS function
mapping.fromJS(inputData);
mapping.fromJS(inputData, targetOptions);
mapping.fromJS(inputData, inputOptions, inputModel);

// fromJSON function
mapping.fromJSON(inputJSON);
mapping.fromJSON(inputJSON, targetOptions);
mapping.fromJSON(inputJSON, inputOptions, inputModel);

// toJS function
mapping.toJS(inputModel);
mapping.toJS(inputModel, mappingOptions);

// toJSON function
mapping.toJSON(inputModel);
mapping.toJSON(inputModel, mappingOptions);

// visitModel function
mapping.visitModel(inputModel, function (x: any) { return x; }, {});
mapping.visitModel(inputModel, function (x: any) { return x; }, { visitedObjects: null });
mapping.visitModel(inputModel, function (x: any) { return x; }, { parentName: 'parent' });
mapping.visitModel(inputModel, function (x: any) { return x; }, { ignore: ['age'] });
mapping.visitModel(inputModel, function (x: any) { return x; }, { copy: ['height'] });
mapping.visitModel(inputModel, function (x: any) { return x; }, { include: ['name'] });
mapping.visitModel(inputModel, function (x: any) { return x; }, { visitedObjects: null, parentName: 'parent', ignore: ['age'], copy: ['height'], include: ['name'] });