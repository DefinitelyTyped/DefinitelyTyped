// Tests that were present in the old 2.1 type declarations
// Slightly modified to reflect the new version

() => {
    const paper = Raphael(10, 50, 320, 200);
    const circle = paper.circle(50, 40, 10);
    circle.attr("fill", "#f00");
    circle.attr("stroke", "#fff");

    const anim = Raphael.animation({ cx: 10, cy: 20 }, 2e3);

    paper.circle(320, 240, 60).animate({
        fill: "#223fa3",
        stroke: "#000",
        "stroke-width": 80,
        "stroke-opacity": 0.5
    }, 2000);

    const img = document.createElement("img");
    const src = "foo.png";
    img.style.display = "none";
    const r = Raphael("holder", 600, 540);
    const raphaelImage = r.image(img.src, 140, 140, 320, 240);

    document.createElement("div").innerHTML = "";
    const R = Raphael("holder", 640, 480);
    R.circle(320, 240, 200).attr({ fill: "#000", "fill-opacity": .5, "stroke-width": 5 });
    const img2 = R.image(src, 160, 120, 320, 240);
    const butt1 = R.set();
    const butt2 = R.set();

    butt1.push(
        R.circle(24.833, 26.917, 26.667).attr({ stroke: "#ccc", fill: "#fff", "fill-opacity": .4, "stroke-width": 2 }),
        R.path("M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359z").attr({ stroke: "none", fill: "#000" }),
        R.circle(24.833, 26.917, 26.667).attr({ fill: "#fff", opacity: 0 })
    );

    butt2.push(
        R.circle(24.833, 26.917, 26.667).attr({ stroke: "#ccc", fill: "#fff", "fill-opacity": .4, "stroke-width": 2 }),
        R.path("M37.566,9.551c9.331,6.686,11.661,19.471,5.502,29.014l2.36,1.689l-4.893,2.262l-4.893,2.262l0.568-5.36l0.567-5.359z").attr({ stroke: "none", fill: "#000" }),
        R.circle(24.833, 26.917, 26.667).attr({ fill: "#fff", opacity: 0 })
    );

    const butt3: import("raphael").RaphaelMatrix = Raphael.matrix(1, 0, 0, 1, 0, 0);
    const butt4: import("raphael").RaphaelMatrix = Raphael.matrix(1, 0, 0, 1, 0, 0);
    let angle: number;

    butt3.translate(10, 181);
    butt4.translate(10, 245);

    raphaelImage
        .click(() => {
            angle -= 90;
            raphaelImage.stop().animate({ transform: "r" + angle }, 1000, "<>");
        }).mouseover(() => {
            butt1[1].animate({ fill: "#fc0" }, 300);
        }).mouseout(() => {
            butt1[1].stop().attr({ fill: "#000" });
        });

    butt2[2]
        .click(() => {
            angle += 90;
            raphaelImage.animate({ transform: "r" + angle }, 1000, "<>");
        }).mouseover(() => {
            butt2[1].animate({ fill: "#fc0" }, 300);
        }).mouseout(() => {
            butt2[1].stop().attr({ fill: "#000" });
        });

    const hldr = document.createElement("div");
    const text = hldr.innerHTML.replace(/^\s+|\s+$|<[^>]+>/g, "");
    hldr.innerHTML = "";

    const R2 = Raphael("holder", 640, 480);
    const txt = [];
    const attr = { font: "50px Helvetica", opacity: 0.5 };
    txt[0] = R2.text(320, 240, text).attr(attr).attr({ fill: "#0f0" });
    R.safari();
};
