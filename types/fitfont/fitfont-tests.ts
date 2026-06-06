import { FitFont } from "fitfont";

const fitfont1 = new FitFont({ id: "xxx", font: "Arial" });
fitfont1.halign = "end";
fitfont1.valign = "baseline";
fitfont1.letterspacing = 2;
fitfont1.text = "Foo!";

const fitfont2 = new FitFont({ id: "xxx", font: "Arial", halign: "start", letterspacing: 3, valign: "top" });
fitfont2.text = "Foo!";
