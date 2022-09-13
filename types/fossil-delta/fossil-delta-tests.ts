import * as fossilDelta from "fossil-delta";

var origin =  new Array<number>(1,2,3);
var target =  new Array<number>(1,2,3,4,5);

var delta = fossilDelta.create(origin, target);
var targetApplied = fossilDelta.apply(origin, delta);

var outputSize: number = fossilDelta.outputSize(delta);
