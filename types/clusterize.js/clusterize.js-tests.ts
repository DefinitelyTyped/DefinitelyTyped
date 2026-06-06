import Clusterize = require("clusterize.js");

const options: Clusterize.Options = { contentId: "", scrollId: "" };
const clusterize = new Clusterize(options);

clusterize.append(["<li></li>"]);

clusterize.prepend(["<li></li>"]);

clusterize.getRowsAmount();

clusterize.update(["<li></li>"]);

clusterize.getScrollProgress();

clusterize.refresh();

clusterize.clear();

clusterize.destroy();

const contentElement = document.createElement("div");
const scrollElement = document.createElement("div");
const optionsv18: Clusterize.Options = { contentElem: contentElement, scrollElem: scrollElement };
const clusterizev18 = new Clusterize(optionsv18);

clusterizev18.append(["<li></li>"]);

clusterizev18.prepend(["<li></li>"]);

clusterizev18.getRowsAmount();

clusterizev18.update(["<li></li>"]);

clusterizev18.getScrollProgress();

clusterizev18.refresh();

clusterizev18.clear();

clusterizev18.destroy();
