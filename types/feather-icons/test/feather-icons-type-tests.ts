import { FeatherIconNames, FeatherStrokeLineCap, FeatherStrokeLineJoin } from "feather-icons";

// Test FeatherIconName type
// @ts-expect-error
let iconName: FeatherIconNames = "test fail";

// @ts-expect-error
let iconName: FeatherIconNames = 493;

iconName = "activity";

// Test FeatherStrokeLineCap type
// @ts-expect-error
let lineCap: FeatherStrokeLineCap = 1;

// @ts-expect-error
let lineCap: FeatherStrokeLineCap = "fail test";

lineCap = "butt";
lineCap = "round";
lineCap = "square";

// Test FeatherStrokeLineJoin type
// @ts-expect-error
let lineJoin: FeatherStrokeLineJoin = 25;

// @ts-expect-error
let lineJoin: FeatherStrokeLineJoin = "fail test";

lineJoin = "arcs";
lineJoin = "bevel";
lineJoin = "miter";
lineJoin = "miter-clip";
lineJoin = "round";
