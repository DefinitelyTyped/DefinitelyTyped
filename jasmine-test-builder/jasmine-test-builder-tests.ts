/// <reference types="jasmine" />

import {ListElement} from "./example-project/ListElement";
import {LinkedList} from "./example-project/LinkedList";
import {DD} from "./example-project/assets/DummyData.asset";
import JasmineTestBuilder = jasmine.JasmineTestBuilder;

let tb:JasmineTestBuilder<LinkedList<ListElement>> = new JasmineTestBuilder<LinkedList<ListElement>>();

tb.init("LinkedList - Add and Remove - SUITE", LinkedList, [ListElement, ["data2","data3","data4","data5"]]);
    tb.test("Add element")
        .withMethod("addElem", ["data6"])
        .andProp("start")
        .result(DD.listFromArrayData(["data2","data3","data4","data5","data6"]).start);

    tb.test("Add element to right")
        .withMethod("addElemRight", ["data7"])
        .andProp("start")
        .result(DD.listFromArrayData(["data2","data3","data4","data5","data6","data7"]).start);

    tb.test("Add element to left")
        .withMethod("addElemLeft", ["data1"])
        .andProp("start")
        .result(DD.listFromArrayData(["data1","data2","data3","data4","data5","data6","data7"]).start);

    tb.test("Remove element")
        .withMethod("toStart")
        .andMethod("toNext")
        .andMethod("removeElem")
        .andMethod("toStart")
        .andMethod("toNext")
        .andMethod("toNext")
        .andMethod("removeElem")
        .andProp("start")
        .result(DD.listFromArrayData(["data1","data3","data5","data6","data7"]).start);

    tb.test("Remove element by position")
        .withMethod("removeElemByPos", [1])
        .andProp("start")
        .result(DD.listFromArrayData(["data1","data5","data6","data7"]).start);

    tb.test("Remove element by data")
        .withMethod("removeElemByData", ["data6"])
        .andProp("start")
        .result(DD.listFromArrayData(["data1","data5","data7"]).start);

    tb.test("Remove all elements by data")
        .withMethod("removeElemByData", ["data5"])
        .withMethod("removeElemByData", ["data1"])
        .withMethod("removeElemByData", ["data7"])
        .andProp("start")
        .result(DD.listFromArrayData([]).start);

    tb.test("Insert element in an empty list")
        .withMethod("insertElem", ["data1"])
        .andMethod("insertElem", ["data2"])
        .andMethod("insertElem", ["data4"])
        .andMethod("insertElem", ["data5"])
        .andMethod("insertElem", ["data6"])
        .andProp("start")
        .result(DD.listFromArrayData(["data6","data5","data4","data2","data1"]).start);

    tb.test("Insert element in the middle without pass a position")
        .withMethod("toStart")
        .andMethod("toNext")
        .andMethod("toNext")
        .andMethod("toNext")
        .andMethod("insertElem", ["data3"])
        .andProp("start")
        .result(DD.listFromArrayData(["data6","data5","data4","data3","data2","data1"]).start);

    tb.test("Insert element passing a middle position")
        .withMethod("insertElem", ["data7", 4])
        .andProp("start")
        .result(DD.listFromArrayData(["data6","data5","data4","data3","data7","data2","data1"]).start);

tb.run();
