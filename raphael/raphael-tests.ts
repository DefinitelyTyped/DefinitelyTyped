/// <reference path="raphael.d.ts" />

var paper = Raphael(10, 50, 320, 200);
var circle = paper.circle(50, 40, 10);
circle.attr("fill", "#f00");
circle.attr("stroke", "#fff");

var anim = Raphael.animation({ cx: 10, cy: 20 }, 2e3);

paper.circle(320, 240, 60).animate({ fill: "#223fa3", stroke: "#000", "stroke-width": 80, "stroke-opacity": 0.5 }, 2000);

declare var img, src;
img.style.display = "none";
var r = Raphael("holder", 600, 540);
r.image(img.src, 140, 140, 320, 240);

document.getElementById("holder").innerHTML = "";
var R = Raphael("holder", 640, 480);
R.circle(320, 240, 200).attr({ fill: "#000", "fill-opacity": .5, "stroke-width": 5 });
var img2 = R.image(src, 160, 120, 320, 240);
    var butt1 = R.set(),
        butt2 = R.set();
butt1.push(R.circle(24.833, 26.917, 26.667).attr({ stroke: "#ccc", fill: "#fff", "fill-opacity": .4, "stroke-width": 2 }),
            R.path("M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z").attr({ stroke: "none", fill: "#000" }),
            R.circle(24.833, 26.917, 26.667).attr({ fill: "#fff", opacity: 0 }));
butt2.push(R.circle(24.833, 26.917, 26.667).attr({ stroke: "#ccc", fill: "#fff", "fill-opacity": .4, "stroke-width": 2 }),
            R.path("M37.566,9.551c9.331,6.686,11.661,19.471,5.502,29.014l2.36,1.689l-4.893,2.262l-4.893,2.262l0.568-5.36l0.567-5.359l2.365,1.694c4.657-7.375,2.83-17.185-4.352-22.33c-7.451-5.338-17.817-3.625-23.156,3.824C6.3,24.695,8.012,35.06,15.458,40.398l-2.857,3.988C2.983,37.494,0.773,24.109,7.666,14.49C14.558,4.87,27.944,2.658,37.566,9.551z").attr({ stroke: "none", fill: "#000" }),
            R.circle(24.833, 26.917, 26.667).attr({ fill: "#fff", opacity: 0 }));
var butt3: RaphaelMatrix, butt4: RaphaelMatrix, angle: number;
butt3.translate(10, 181);
butt4.translate(10, 245);
butt3[2].click(function () {
    angle -= 90;
    img.stop().animate({ transform: "r" + angle }, 1000, "<>");
}).mouseover(function () {
    butt1[1].animate({ fill: "#fc0" }, 300);
}).mouseout(function () {
    butt1[1].stop().attr({ fill: "#000" });
});
butt2[2].click(function () {
    angle += 90;
    img.animate({ transform: "r" + angle }, 1000, "<>");
}).mouseover(function () {
    butt2[1].animate({ fill: "#fc0" }, 300);
}).mouseout(function () {
    butt2[1].stop().attr({ fill: "#000" });
});

var hldr = document.getElementById("holder"),
    text = hldr.innerHTML.replace(/^\s+|\s+$|<[^>]+>/g, "");
hldr.innerHTML = "";
var R2 = Raphael("holder", 640, 480),
    txt = [],
    attr = { font: "50px Helvetica", opacity: 0.5 };
txt[0] = R2.text(320, 240, text).attr(attr).attr({ fill: "#0f0" });
R.safari();