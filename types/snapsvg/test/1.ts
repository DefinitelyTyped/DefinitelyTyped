// Copied from the snap homepage http://snapsvg.io/

// First lets create our drawing surface out of existing SVG element
// If you want to create new surface just provide dimensions
// like s = Snap(800, 600);
var s = Snap("#svg");
// Lets create big circle in the middle:
var bigCircle = s.circle(150, 150, 100);
// By default its black, lets change its attributes
bigCircle.attr({
    fill: "#bada55",
    stroke: "#000",
    strokeWidth: 5
});
// Now lets create another small circle:
var smallCircle = s.circle(100, 150, 70);
// Lets put this small circle and another one into a group:
var discs = s.group(smallCircle, s.circle(200, 150, 70));
// Now we can change attributes for the whole group
discs.attr({
    fill: "#fff"
});
// Now more interesting stuff
// Lets assign this group as a mask for our big circle
bigCircle.attr({
    mask: discs
});
// Despite our small circle now is a part of a group
// and a part of a mask we could still access it:
smallCircle.animate({ r: 50 }, 1000);
// We don’t have reference for second small circle,
// but we could easily grab it with CSS selectors:
discs.select("circle:nth-child(2)").animate({ r: 50 }, 1000);
// Now lets create pattern
var p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
    fill: "none",
    stroke: "#bada55",
    strokeWidth: 5
});
// To create pattern,
// just specify dimensions in pattern method:
p = p.pattern(0, 0, 10, 10);
// Then use it as a fill on big circle
bigCircle.attr({
    fill: p
});
// We could also grab pattern from SVG
// already embedded into our page
discs.attr({
    fill: Snap("#pattern")
});
// Lets change fill of circles to gradient
// This string means relative radial gradient
// from white to black
discs.attr({ fill: "r()#fff-#000" });
// Note that you have two gradients for each circle
// If we want them to share one gradient,
// we need to use absolute gradient with capital R
discs.attr({ fill: "R(150, 150, 100)#fff-#000" });
// Of course we could animate color as well
p.select("path").animate({ stroke: "#f00" }, 1000);
// Now lets load external SVG file:
Snap.load("mascot.svg", function (f:Snap.Fragment) {
    // Note that we traversre and change attr before SVG
    // is even added to the page
    f.selectAll("polygon[fill='#09B39C']").attr({ fill: "#bada55" });
    var g = f.select("g");
    s.append(g);
    // Making croc draggable. Go ahead drag it around!
    g.drag();
    // Obviously drag could take event handlers too
    // That’s better! selectAll for the rescue.
});
// Writing text as simple as:
s.text(200, 100, "Snap.svg");
// Provide an array of strings (or arrays), to generate tspans
var t = s.text(200, 120, ["Snap", ".", "svg"]);
t.selectAll("tspan:nth-child(3)").attr({
    fill: "#900",
    "font-size": "20px"
});

