/// <reference path="knockout.mapping.amd.d.ts" />

import koMapping = module("knockout.mapping");
function test_fromJS_assignment() {
    var js = {
        field_1: "abc",
        field_2: 123,
        field_3: { field_3_1: "def" },
        field_4: [4, 5, 6, 7, 8]
    }

    var mapped = koMapping.fromJS(js);
    mapped.field_1();
    mapped.field_2();
    mapped.field_3();
    mapped.field_4();
}

function test_toJS_assignment() {
    var observables = {
        field_1: ko.observable("abc"),
        field_2: ko.observable(123),
        field_3: ko.observable({ field_3_1: "def" }),
        field_4: ko.observableArray([4, 5, 6, 7, 8]),
        field_5: ko.computed(function () {
            return 3 * 2;
        })
    }

    var raw = koMapping.toJS(observables);
    raw.field_1;
    raw.field_2;
    raw.field_3;
    raw.field_4;
    raw.field_5;
}

function test_fromJSON_assignment() {
    var json = "{ 'field_1': 'abc', 'field_2': 123, 'field_3': { 'field_3_1': 'def; }, 'field_4': [4, 5, 6, 7, 8] }";
    var mapped = koMapping.fromJSON(json);
    mapped.field_1();
    mapped.field_2();
    mapped.field_3();
    mapped.field_4();
}

function test_fromJSON_updateExisting() {
    var observables = {
        field_1: ko.observable("xyz"),
        field_2: ko.observable(999),
        field_3: ko.observable({ field_3_1: "yuj" }),
        field_4: ko.observableArray([40, 50, 60, 70, 80]),
    }
    var json = "{ 'field_1': 'abc', 'field_2': 123, 'field_3': { 'field_3_1': 'def; }, 'field_4': [4, 5, 6, 7, 8] }";
    koMapping.fromJSON(json, observables);

    observables.field_1();
    observables.field_2();
    observables.field_3();
    observables.field_4();
}

///<summary>
///Test code taken in essence from http://knockoutjs.com/documentation/plugins-mapping.html 
///</summary>
function test_fromJS_withMappingOptions() {
    var data = {
        name: 'Scot',
        children: [
            { id: 1, name: 'Alicw' }
        ]
    }
    var viewModel = ko.mapping.fromJS(data);
    viewModel.name();
    viewModel.children()[0];
    viewModel.children()[0].id();
    viewModel.children()[0].name();
    

    data = {
        name: 'Scott',
        children: [
            { id: 1, name: 'Alice' }
        ]
    }

    var mapping = {
        'children': {
            key: function (data) {
                return ko.utils.unwrapObservable(data.id);
            }
        }
    }
    ko.mapping.fromJS(data, mapping, viewModel);
    viewModel.name();
    viewModel.children()[0];
    viewModel.children()[0].id();
    viewModel.children()[0].name();
}