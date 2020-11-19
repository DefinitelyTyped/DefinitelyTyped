// Tests based on the official API docs
// https://dmitrybaranovskiy.github.io/raphael/reference.html#Raphael

import R, { RaphaelStatic } from "raphael";

interface SvgRaphaelStatic extends RaphaelStatic<"SVG"> { }
interface VmlRaphaelStatic extends RaphaelStatic<"VML"> { }

function isUsesSvg(raphael: RaphaelStatic<any>): raphael is SvgRaphaelStatic {
    return raphael.type === "SVG";
}

function isUsesVml(raphael: RaphaelStatic<any>): raphael is VmlRaphaelStatic {
    return raphael.type === "VML";
}

() => {
    function assertNever(x: never): never {
        return x;
    }

    // $ExpectType RaphaelPaper<"SVG" | "VML">
    const paper = R();

    // $ExpectType RaphaelSet<"SVG" | "VML">
    const set = paper.set();

    // $ExpectType RaphaelPath<"SVG" | "VML">
    const path = paper.path("");

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    const circle = paper.circle(0, 0, 0);

    // $ExpectType RaphaelMatrix
    const matrix = R.matrix(0, 0, 0, 0, 0, 0);

    // $ExpectType RaphaelAnimation
    const animation = R.animation({}, 0);

    // $ExpectType RaphaelFont | undefined
    const font = paper.getFont("Arial");

    const element: HTMLElement = document.createElement("div");

    // ================================
    // === Raphael main entry point ===
    // ================================

    // $ExpectType RaphaelPaper<"SVG" | "VML">
    R(10, 50, 320, 200);

    // $ExpectType RaphaelPaper<"SVG" | "VML">
    R(element, 320, 200);

    // $ExpectType RaphaelPaper<"SVG" | "VML">
    R("notepad", 320, 200);

    // $ExpectType RaphaelSet<"SVG" | "VML">
    R([
        "notepad",
        320,
        200,
        {
            type: "rect",
            x: 10,
            y: 10,
            width: 25,
            height: 25,
            stroke: "#f00"
        },
        {
            type: "text",
            x: 30,
            y: 40,
            text: "Dump"
        }
    ]);

    // $ExpectType number
    R.angle(1, 1, 1, 1);
    // $ExpectType number
    R.angle(1, 1, 1, 1, 1, 1);

    // $ExpectType RaphaelAnimation
    R.animation({ cursor: "" }, 0, "ease-in");
    // $ExpectType RaphaelAnimation
    R.animation({ cursor: "", }, 0, "custom", function() {
        this.clone();
    });

    // $ExpectType number | undefined
    R.color("#00FF00").error;
    // $ExpectType string
    R.color("#00FF00").hex;
    // $ExpectType number
    R.color("#00FF00").r;
    // $ExpectType number
    R.color("#00FF00").h;

    // $ExpectType number
    R.deg(1);

    R.el.red = function() {
        this.attr({ fill: "#f00" });
    };
    R.el.colored = function(r, g, b) {
        return this.attr("fill", R.rgb(r, g, b));
    };
    // $ExpectError
    R.el.orange = () => { };
    // $ExpectError
    R.el.colored = () => { };
    // $ExpectType void
    circle.red();
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.colored(0, 0, 0);
    // $ExpectError
    circle.orange();
    // $ExpectError
    circle.colored();

    // $ExpectType number
    R.findDotsAtSegment(0, 0, 0, 0, 0, 0, 0, 0, 0).x;
    // $ExpectType number
    R.findDotsAtSegment(0, 0, 0, 0, 0, 0, 0, 0, 0).y;
    // $ExpectType number
    R.findDotsAtSegment(0, 0, 0, 0, 0, 0, 0, 0, 0).alpha;
    // $ExpectType number
    R.findDotsAtSegment(0, 0, 0, 0, 0, 0, 0, 0, 0).m.x;
    // $ExpectType number
    R.findDotsAtSegment(0, 0, 0, 0, 0, 0, 0, 0, 0).m.y;
    // $ExpectType number
    R.findDotsAtSegment(0, 0, 0, 0, 0, 0, 0, 0, 0).n.x;
    // $ExpectType number
    R.findDotsAtSegment(0, 0, 0, 0, 0, 0, 0, 0, 0).n.y;
    // $ExpectType number
    R.findDotsAtSegment(0, 0, 0, 0, 0, 0, 0, 0, 0).start.x;
    // $ExpectType number
    R.findDotsAtSegment(0, 0, 0, 0, 0, 0, 0, 0, 0).start.y;
    // $ExpectType number
    R.findDotsAtSegment(0, 0, 0, 0, 0, 0, 0, 0, 0).end.x;
    // $ExpectType number
    R.findDotsAtSegment(0, 0, 0, 0, 0, 0, 0, 0, 0).end.y;

    R.fn.arrow = function(x1: number, y1: number, x2: number, y2: number, size: number) {
        return this.path("Z");
    };
    // $ExpectError
    R.fn.arrow.foo = () => { };
    R.fn.myStuff = {
        arrow(flag: boolean) { return flag ? 1 : 0; },
        star() { },
    };
    R.fn.firstLevel = {
        secondLevel: {
            method: () => true,
        },
    };
    R.fn.myStuff = {
        // $ExpectError
        arrow(flag: boolean) { return ""; },
        star() { },
    };
    // $ExpectError
    R.fn.myStuff = () => { };
    // $ExpectError
    R.fn.firstLevel = () => { };
    // $ExpectError
    R.fn.firstLevel.secondLevel = () => { };
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.attr({ fill: "#f00" });
    // $ExpectError
    paper.arrow2();
    // $ExpectType number
    paper.myStuff.arrow(false);
    // $ExpectType void
    paper.myStuff.star();
    // $ExpectType boolean
    paper.firstLevel.secondLevel.method();
    // $ExpectError
    paper.myStuff.arrow2();

    paper.path(R.format("M{1},{2}h{3}v{4}h{5}z", 0, 0, 0, 0, 0));

    paper.path(R.fullfill("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
        x: 10,
        y: 20,
        dim: {
            width: 40,
            height: 50,
            "negative width": -40
        },
    }));

    // $ExpectType string
    R.getColor();
    // $ExpectType string
    R.getColor(0);

    // $ExpectType number
    R.getPointAtLength("", 0).alpha;
    // $ExpectType number
    R.getPointAtLength("", 0).x;
    // $ExpectType number
    R.getPointAtLength("", 0).y;

    // $ExpectType number
    R.getRGB("").r;
    // $ExpectType number
    R.getRGB("").g;
    // $ExpectType number
    R.getRGB("").b;
    // $ExpectType string
    R.getRGB("").hex;
    // $ExpectType number | undefined
    R.getRGB("").error;

    // $ExpectType string
    R.getSubpath("", 0, 0);

    // $ExpectType number
    R.getTotalLength("");

    // $ExpectType string
    R.hsb(0, 0, 0);

    // $ExpectType number
    R.hsb2rgb(0, 0, 0).r;
    // $ExpectType number
    R.hsb2rgb(0, 0, 0).g;
    // $ExpectType number
    R.hsb2rgb(0, 0, 0).b;
    // $ExpectType string
    R.hsb2rgb(0, 0, 0).hex;

    // $ExpectType string
    R.hsl(0, 0, 0);

    // $ExpectType number
    R.hsl2rgb(0, 0, 0).r;
    // $ExpectType number
    R.hsl2rgb(0, 0, 0).g;
    // $ExpectType number
    R.hsl2rgb(0, 0, 0).b;
    // $ExpectType string
    R.hsl2rgb(0, 0, 0).hex;

    const x: unknown = undefined;
    if (R.is(x, "array")) {
        const c: any[] = x;
        x.join();
    } else if (R.is(x, "boolean")) {
        const b: boolean = x;
    } else if (R.is(x, "function")) {
        x();
    } else if (R.is(x, "null")) {
        const c: null = x;
    } else if (R.is(x, "number")) {
        const c: number = x;
        x.toFixed();
    } else if (R.is(x, "object")) {
        const c: object | null = x;
    } else if (R.is(x, "string")) {
        const c: string = x;
        x.toLowerCase();
    } else if (R.is(x, "symbol")) {
        const c: symbol = x;
    } else if (R.is(x, "undefined")) {
        const c: undefined = x;
    } else if (R.is(x, "whatever")) {
    }

    // $ExpectType RaphaelMatrix
    R.matrix(0, 0, 0, 0, 0, 0);

    // $ExpectType RaphaelStatic<"SVG" | "VML">
    R.ninja();
    R.ninja().deg(0);

    R.parsePathString("");
    R.parsePathString(["M", 0, 0]);
    R.parsePathString([["M", 0, 0], ["Z"]]);
    // $ExpectError
    R.parsePathString(["Z", 0, 0]);

    R.parseTransformString("");
    R.parseTransformString(["t", 0, 0]);
    R.parseTransformString([["t", 0, 0], ["r", 0]]);
    // $ExpectError
    R.parseTransformString(["r", 0, 0]);

    R.path2curve("");
    R.path2curve(["M", 0, 0]);
    R.path2curve([["M", 0, 0], ["Z"]]);
    // $ExpectError
    R.path2curve(["Z", 0, 0]);

    R.pathToRelative("");
    R.pathToRelative(["M", 0, 0]);
    R.pathToRelative([["M", 0, 0], ["Z"]]);
    // $ExpectError
    R.pathToRelative(["Z", 0, 0]);

    // $ExpectType number
    R.rad(0);

    if (font) {
        // $ExpectType RaphaelFont
        R.registerFont(font);
    }

    // $ExpectType string
    R.rgb(0, 0, 0);

    // $ExpectType number
    R.rgb2hsb(0, 0, 0).h;
    // $ExpectType number
    R.rgb2hsb(0, 0, 0).s;
    // $ExpectType number
    R.rgb2hsb(0, 0, 0).b;

    // $ExpectType number
    R.rgb2hsl(0, 0, 0).h;
    // $ExpectType number
    R.rgb2hsl(0, 0, 0).s;
    // $ExpectType number
    R.rgb2hsl(0, 0, 0).l;

    R.setWindow(window);

    // $ExpectType number
    R.snapTo(0, 0);
    // $ExpectType number
    R.snapTo([0, 0], 0);
    // $ExpectType number
    R.snapTo(0, 0, 10);

    R.st.green = function() {
        this.forEach(function(item) {
            this.location;
            item.red();
        });
    };
    R.st.colorized = function(r, g, b) {
        return this;
    };
    // $ExpectError
    R.st.yellow = () => { };
    // $ExpectError
    R.st.colorized = () => 0;
    set.green();
    set.colorized(0, 0, 0);
    // $ExpectError
    circle.green();
    // $ExpectError
    set.red();
    // $ExpectError
    set.yellow();

    // $ExpectType boolean
    R.svg;

    switch (R.type) {
        case "SVG": break;
        case "VML": break;
        default: assertNever(R.type);
    }

    // $ExpectType boolean
    R.vml;

    // ====================
    // === Raphael Paper ==
    // ====================

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement> | null
    paper.bottom;

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    paper.circle(0, 0, 0);

    // $ExpectType void
    paper.clear();

    paper.customAttributes.hue = function(num) {
        this.hide();
        num = num % 1;
        return { fill: `hsb("${num}, .75, 1)` };
    };
    paper.customAttributes.hsb = (h, s, b) => {
        return { fill: `hsb(${h}, ${s}, ${b})` };
    };
    circle.attr({ hue: .45 });
    circle.animate({ hue: 1 }, 1e3);
    // $ExpectType number | undefined
    circle.attr("hue");
    circle.attr({ hsb: ".5 .8 1" });
    circle.animate({ hsb: "1 0 .5" }, 1e3);
    // $ExpectType string | undefined
    circle.attr("hsb");

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGEllipseElement>
    paper.ellipse(0, 0, 0, 0);

    // $ExpectType RaphaelPaper<"SVG" | "VML">
    paper.forEach(function(element) {
        // $ExpectType Window
        this;
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        element;
        return false;
    });
    // $ExpectType RaphaelPaper<"SVG" | "VML">
    paper.forEach(() => {});
    // $ExpectType RaphaelPaper<"SVG" | "VML">
    paper.forEach(function() {
        // $ExpectType number
        this;
    }, 0);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement> | null
    paper.getById(0);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement> | null
    paper.getElementByPoint(0, 0);

    // $ExpectError RaphaelFont | undefined
    paper.getFont("Arial");
    // $ExpectError RaphaelFont | undefined
    paper.getFont("Arial", "bold");
    // $ExpectError RaphaelFont | undefined
    paper.getFont("Arial", "bold", "style");
    // $ExpectError RaphaelFont | undefined
    paper.getFont("Arial", "bold", "style", "stretch");

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGImageElement>
    paper.image("", 0, 0, 0, 0);

    // $ExpectType RaphaelPath<"SVG" | "VML">
    paper.path();
    // $ExpectType RaphaelPath<"SVG" | "VML">
    paper.path("Z");

    if (font) {
        // $ExpectType RaphaelSet<"SVG" | "VML">
        paper.print(0, 0, "", font);
        // $ExpectType RaphaelSet<"SVG" | "VML">
        paper.print(0, 0, "", font, 16);
        // $ExpectType RaphaelSet<"SVG" | "VML">
        paper.print(0, 0, "", font, 16, "middle");
        // $ExpectType RaphaelSet<"SVG" | "VML">
        paper.print(0, 0, "", font, 16, "middle", 0);
    }

    // $ExpectType RaphaelStatic<"SVG" | "VML">
    paper.raphael;

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGRectElement>
    paper.rect(0, 0, 0, 0);
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGRectElement>
    paper.rect(0, 0, 0, 0, 10);

    // $ExpectType void
    paper.remove();

    // $ExpectType void
    paper.renderfix();

    // $ExpectType void
    paper.safari();

    // $ExpectType RaphaelSet<"SVG" | "VML">
    paper.set();
    // $ExpectType RaphaelSet<"SVG" | "VML">
    paper.set(circle);
    // $ExpectType RaphaelSet<"SVG" | "VML">
    paper.set(circle, circle);

    // $ExpectType RaphaelSet<"SVG" | "VML">
    paper.setFinish();

    // $ExpectType RaphaelPaper<"SVG" | "VML">
    paper.setSize(0, 0);

    // $ExpectType void
    paper.setStart();

    // $ExpectType RaphaelPaper<"SVG" | "VML">
    paper.setViewBox(0, 0, 0, 0);
    // $ExpectType RaphaelPaper<"SVG" | "VML">
    paper.setViewBox(0, 0, 0, 0, true);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGTextElement>
    paper.text(0, 0, "foo");

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement> | null
    paper.bottom;

    // =======================
    // === Raphael Element ===
    // =======================

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.animate(animation);
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.animate({ cx: 0 }, 0);
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.animate({ cx: 0 }, 0, "back-in");
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.animate({ cx: 0 }, 0, "back-in", function() { this.hide(); });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.animateWith(circle, animation, animation);
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.animateWith(circle, animation, { cx: 0 }, 0);
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.animateWith(circle, animation, { cx: 0 }, 0, "back-in");
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.animateWith(circle, animation, { cx: 0 }, 0, "back-in", function() { this.hide(); });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.attr("opacity", 0);
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.attr("transform", "t 0 0");
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.attr("transform", ["t", 0, 0]);
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.attr("hue", 0);
    // $ExpectError
    circle.attr<"opacity">("opacity", "0");

    // $ExpectType number | undefined
    circle.attr("opacity");
    // $ExpectType RaphaelTransformSegment[] | undefined
    circle.attr("transform");
    // $ExpectType number | undefined
    circle.attr("hue");

    // $ExpectType []
    circle.attr([]);
    // $ExpectType [number | undefined]
    circle.attr(["cy"]);
    // $ExpectType [string | undefined, number | undefined, "butt" | "square" | "round" | undefined, number | undefined]
    circle.attr(["fill", "cx", "stroke-linecap", "hue"]);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.attr({
        hue: 0,
        "text-anchor": "start",
        width: 0,
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.click(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.click(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.click(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType any
    circle.data("foo");
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.data("foo", 0);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.dblclick(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.dblclick(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.dblclick(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.drag(
        function(dx, dy, x, y, event) {
            // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
            this;
            // $ExpectType number
            dx;
            // $ExpectType number
            dy;
            // $ExpectType number
            x;
            // $ExpectType number
            y;
            // $ExpectType DragEvent
            event;
        },
        function(x, y, event) {
            // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
            this;
            // $ExpectType number
            x;
            // $ExpectType number
            y;
            // $ExpectType DragEvent
            event;
        },
        function(event) {
            // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
            this;
            // $ExpectType DragEvent
            event;
        }
    );
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.drag(
        function() {
            // $ExpectType boolean
            this;
        },
        function() {
            // $ExpectType number
            this;
        },
        function() {
            // $ExpectType string
            this;
        },
        true, 0, ""
    );
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.drag(
        function() {
            // $ExpectType RaphaelPath<"SVG" | "VML">
            this;
        },
        function() {
            // $ExpectType RaphaelPath<"SVG" | "VML">
            this;
        },
        function() {
            // $ExpectType RaphaelPath<"SVG" | "VML">
            this;
        }
    );
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.drag(
        function() {
            // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
            this;
        },
        function() {
            // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
            this;
        },
        function() {
            // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
            this;
        }
    );

    // $ExpectType number
    circle.getBBox().x;
    // $ExpectType number
    circle.getBBox().y;
    // $ExpectType number
    circle.getBBox().width;
    // $ExpectType number
    circle.getBBox().height;
    // $ExpectType RaphaelAxisAlignedBoundingBox
    circle.getBBox(true);

    // $ExpectError
    circle.getPointAtLength(0);

    // $ExpectError
    circle.getSubpath(0, 0);

    // $ExpectError
    circle.getTotalLength();

    // $ExpectType RaphaelSet<"SVG" | "VML">
    circle.glow();
    // $ExpectType RaphaelSet<"SVG" | "VML">
    circle.glow({});
    // $ExpectType RaphaelSet<"SVG" | "VML">
    circle.glow({
        width: 0,
        fill: true,
        opacity: 0,
        offsetx: 0,
        offsety: 0,
        color: "",
    });

    circle.hide();

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.hover(
        function(event) {
            // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
            this;
            // $ExpectType MouseEvent
            event;
        },
        function(event) {
            // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
            this;
            // $ExpectType MouseEvent
            event;
        }
    );
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.hover(
        function() {
            // $ExpectType boolean
            this;
        },
        function() {
            // $ExpectType number
            this;
        },
        false, 0
    );
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.hover(
        function() {
            // $ExpectType RaphaelPath<"SVG" | "VML">
            this;
        },
        function() {
            // $ExpectType RaphaelPath<"SVG" | "VML">
            this;
        }
    );
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.hover(
        function() {
            // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
            this;
        },
        function() {
            // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
            this;
        }
    );

    // $ExpectType number
    circle.id;
    path.id;
    // $ExpectError
    set.id;

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.insertAfter(circle);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.insertBefore(circle);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.mousedown(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.mousedown(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.mousedown(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.mousemove(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.mousemove(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.mousemove(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.mouseout(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.mouseout(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.mouseout(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.mouseover(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.mouseover(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.mouseover(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.mouseup(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.mouseup(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.mouseup(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement> | null
    circle.next;
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement> | null
    path.next;
    // $ExpectError
    set.next;

    // $ExpectType Element | SVGCircleElement
    circle.node;

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.onDragOver(function(other) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        other;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.onDragOver(function(other) {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        other;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.onDragOver(function(other) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        other;
    });

    // $ExpectType RaphaelPaper<"SVG" | "VML">
    circle.paper;
    // $ExpectType RaphaelPaper<"SVG" | "VML">
    path.paper;
    // $ExpectError
    set.paper;

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.pause();
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.pause(animation);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement> | null
    circle.prev;
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement> | null
    path.prev;
    // $ExpectError
    set.prev;

    // $ExpectType RaphaelStatic<"SVG" | "VML"> | undefined
    circle.raphael;
    // $ExpectType RaphaelStatic<"SVG" | "VML"> | undefined
    path.raphael;
    // $ExpectError
    set.raphael;

    // $ExpectType void
    circle.remove();

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.removeData();
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.removeData("foo");

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.resume();
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.resume(animation);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.rotate(90);
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.rotate(90, 0, 0);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.scale(2);
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.scale(2, 3);
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.scale(2, 3, 100, 42);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.setTime(animation, 9);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.show();

    // $ExpectType RaphaelAnimation
    circle.status()[0].anim;
    // $ExpectType number
    circle.status()[0].status;
    // $ExpectType number
    circle.status(animation);
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.status(animation, 0);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.stop();
    circle.stop(animation);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.toBack();

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.toFront();

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.touchcancel(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType TouchEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.touchcancel(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.touchcancel(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.touchend(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType TouchEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.touchend(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.touchend(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.touchmove(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType TouchEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.touchmove(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.touchmove(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.touchstart(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType TouchEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.touchstart(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.touchstart(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType string
    circle.transform();
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.transform("t100,100r30,100,100s2,2,100,100r45s1.5");

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.translate(0, 0);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.unclick(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.unclick(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.unclick(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.undblclick(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.undblclick(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.undblclick(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.undrag();

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.unhover(
        function(event) {
            // $ExpectType any
            this;
            // $ExpectType MouseEvent
            event;
        },
        function(event) {
            // $ExpectType any
            this;
            // $ExpectType MouseEvent
            event;
        }
    );
    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.unhover(
        function(this: boolean) {
            // $ExpectType boolean
            this;
        },
        function(this: number) {
            // $ExpectType number
            this;
        }
    );
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.unhover(
        function() {
            // $ExpectType any
            this;
        },
        function() {
            // $ExpectType any
            this;
        }
    );
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.unhover(
        function() {
            // $ExpectType any
            this;
        },
        function() {
            // $ExpectType any
            this;
        }
    );

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.unmousedown(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.unmousedown(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.unmousedown(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.unmousemove(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.unmousemove(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.unmousemove(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.unmouseout(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.unmouseout(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.unmouseout(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.unmouseover(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.unmouseover(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.unmouseover(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.unmouseup(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType MouseEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.unmouseup(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.unmouseup(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.untouchcancel(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType TouchEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.untouchcancel(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.untouchcancel(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.untouchend(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType TouchEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.untouchend(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.untouchend(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.untouchmove(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType TouchEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.untouchmove(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.untouchmove(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
    circle.untouchstart(function(event) {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGCircleElement>
        this;
        // $ExpectType TouchEvent
        event;
    });
    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.untouchstart(function() {
        // $ExpectType RaphaelPath<"SVG" | "VML">
        this;
    });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.untouchstart(function() {
        // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement>
        this;
    });

    // ====================
    // === Raphael Path ===
    // ====================

    // $ExpectType RaphaelPath<"SVG" | "VML">
    path.hide();

    // $ExpectType number
    path.getPointAtLength(0).x;
    // $ExpectType number
    path.getPointAtLength(0).y;
    // $ExpectType number
    path.getPointAtLength(0).alpha;

    // $ExpectType string
    path.getSubpath(0, 0);

    // $ExpectType number
    path.getTotalLength();

    // ===================
    // === Raphael Set ===
    // ===================

    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.hide();

    set.clear();

    // $ExpectType boolean
    set.exclude(circle);

    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.forEach(el => { el.hide(); });
    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.forEach(function() { this.toFixed(); }, 0);

    // $ExpectType RaphaelElement<"SVG" | "VML", Element | SVGElement> | undefined
    set.pop();

    // $ExpectType RaphaelSet<"SVG" | "VML">
    set.push(circle);

    // =========================
    // === Raphael Animation ===
    // =========================

    // $ExpectType RaphaelAnimation
    animation.delay(0);

    // $ExpectType RaphaelAnimation
    animation.repeat(0);

    // ======================
    // === Raphael Matrix ===
    // ======================

    // $ExpectType number
    matrix.a;
    // $ExpectType number
    matrix.b;
    // $ExpectType number
    matrix.c;
    // $ExpectType number
    matrix.d;
    // $ExpectType number
    matrix.e;
    // $ExpectType number
    matrix.f;

    // $ExpectType void
    matrix.add(0, 0, 0, 0, 0, 0);

    // $ExpectType RaphaelMatrix
    matrix.clone();

    // $ExpectType RaphaelMatrix
    matrix.invert();

    // $ExpectType void
    matrix.rotate(0, 0, 0);

    // $ExpectType void
    matrix.scale(0);
    // $ExpectType void
    matrix.scale(0, 0);
    // $ExpectType void
    matrix.scale(0, 0, 0, 0);
    // $ExpectError
    matrix.scale(0, 0, 0);

    // $ExpectType number
    matrix.split().dx;
    // $ExpectType number
    matrix.split().dy;
    // $ExpectType number
    matrix.split().scalex;
    // $ExpectType number
    matrix.split().scaley;
    // $ExpectType number
    matrix.split().shear;
    // $ExpectType number
    matrix.split().rotate;
    // $ExpectType boolean
    matrix.split().isSimple;

    // $ExpectType string
    matrix.toTransformString();

    // $ExpectType void
    matrix.translate(0, 0);

    // $ExpectType number
    matrix.x(0, 0);

    // $ExpectType number
    matrix.y(0, 0);

    // ==========================
    // === Raphael Technology ===
    // ==========================
    if (isUsesSvg(R)) {
        const Svg = R as SvgRaphaelStatic;
        // $ExpectType SVGCircleElement
        Svg().circle(0, 0, 0).node;
        // $ExpectType SVGEllipseElement
        Svg().ellipse(0, 0, 0, 0).node;
        // $ExpectType SVGImageElement
        Svg().image("", 0, 0, 0, 0).node;
        // $ExpectType SVGPathElement
        Svg().path("Z").node;
        // $ExpectType SVGRectElement
        Svg().rect(0, 0, 0, 0).node;
        // $ExpectType SVGTextElement
        Svg().text(0, 0, "").node;
        // $ExpectType SVGElement
        Svg().canvas;
        // $ExpectType "SVG"
        Svg.type;
    }
    if (isUsesVml(R)) {
        const r = R;
        const Vml = R as VmlRaphaelStatic;
        // $ExpectType Element
        Vml().circle(0, 0, 0).node;
        // $ExpectType Element
        Vml().ellipse(0, 0, 0, 0).node;
        // $ExpectType Element
        Vml().image("", 0, 0, 0, 0).node;
        // $ExpectType Element
        Vml().path("Z").node;
        // $ExpectType Element
        Vml().rect(0, 0, 0, 0).node;
        // $ExpectType Element
        Vml().text(0, 0, "").node;
        // $ExpectType Element
        Vml().canvas;
        // $ExpectType "VML"
        Vml.type;
    }
};
