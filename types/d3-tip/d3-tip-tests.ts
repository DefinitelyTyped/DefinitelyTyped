// test variables

interface dataType {
    Title: string,
    Number: number
}

let data: dataType[] = [ { Title: "one", Number: 1 }, { Title: "two", Number: 2} ];
let svgElement: SVGElement;
let root: HTMLElement;

// start tests

let d3tip: d3.Tooltip = d3.tip();

d3tip = d3tip.hide();

d3tip = d3tip.show();
d3tip = d3tip.show(data);
d3tip = d3tip.show(svgElement);
d3tip = d3tip.show(data, svgElement);

let attributeValue: string = d3tip.attr("library");
d3tip = d3tip.attr("library","d3");
d3tip = d3tip.attr("library", (d, i, o) => (d as dataType).Title);
d3tip = d3tip.attr<dataType>("library", (d, i, o) => d.Title);

let styleValue: string = d3tip.style("library");
d3tip = d3tip.style("library","d3");
d3tip = d3tip.style("library", (d, i, o) => (d as dataType).Title);
d3tip = d3tip.style<dataType>("library", (d, i, o) => d.Title);

let offsetValue: [number, number] = d3tip.offset();
d3tip = d3tip.offset([-1, -1]);
d3tip = d3tip.offset((d, i, o) => [-1, -1]);

let directionValue: ("n" | "s" | "e" | "w" | "nw" | "ne" | "sw" | "se") = d3tip.direction();
d3tip = d3tip.direction("n");
d3tip = d3tip.direction((d, i ,o) => "n");

let htmlValue: string = d3tip.html();
d3tip = d3tip.html("<html><html/>");
d3tip = d3tip.html((d, i ,o) => "<html><html/>");

let rootElementValue: HTMLElement = d3tip.rootElement();
d3tip = d3tip.rootElement(root);
d3tip = d3tip.rootElement<dataType>((d, i ,o) => root);

d3tip = d3tip.destroy();

