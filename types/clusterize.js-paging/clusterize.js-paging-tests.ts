import ClusterizePaging = require("clusterize.js-paging");

const options: ClusterizePaging.Options = {
    contentId: "",
    scrollId: "",
    dummyRow: "<tr><tr/>",
    preload: 30,
    pageSize: 30,
};
const clusterizePaging = new ClusterizePaging(options);

clusterizePaging.append(["<li></li>"]);

clusterizePaging.prepend(["<li></li>"]);

clusterizePaging.getRowsAmount();

clusterizePaging.update(["<li></li>"]);

clusterizePaging.getScrollProgress();

clusterizePaging.refresh();

clusterizePaging.clear();

clusterizePaging.destroy();
