import * as PullToRefresh from "pulltorefreshjs";

PullToRefresh.init();

PullToRefresh.init({});

PullToRefresh.init({
  mainElement: "body",
  onRefresh: () => { window.location.reload(); },
});

PullToRefresh.init({
  resistanceFunction: x => Math.sqrt(x),
});

PullToRefresh.init({
  mainElement: "body",
  onRefresh: () => Promise.resolve(),
});
