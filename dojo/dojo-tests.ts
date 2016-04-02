/// <reference path="dojo.d.ts" />
import lang = require("dojo/_base/lang");
import topic = require("dojo/topic");
import domConstruct = require("dojo/dom-construct");

function test_require() {
    require(["foo"], foo => 1);
    require({ config: 1 });
    define(["foo"], () => 1);
}

function test_mixin() {
    let ab = lang.mixin({ a: 1 }, { b: 2 });
    ab.a;
    ab.b;
}

function test_topic() {
    topic.publish("foo");
    topic.publish("foo", "bar");
}

function test_dom() {
    domConstruct.create("div");
    domConstruct.create("div", {});
}