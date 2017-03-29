

var scroller: Scroller = new Scroller((left, top, zoom) => { });
scroller = new Scroller((left, top, zoom) => { }, {
  scrollingX: true,
  scrollingY: true,
  animating: true,
  animationDuration: 400,
  bouncing: false,
  locking: false,
  paging: false,
  snapping: true,
  zooming: 10,
  minZoom: 1,
  maxZoom: 2
});

scroller.setDimensions(10, 10, 10, 10);
scroller.setPosition(200, 300);
scroller.setSnapSize(300, 300);
scroller.activatePullToRefresh(200, () => { }, () => { }, () => { });
scroller.finishPullToRefresh();
var data: {
  left: number;
  top: number;
  zoom: number
} = scroller.getValues();
scroller.zoomTo(10);
scroller.zoomBy(10);
scroller.doMouseZoom(10, 10, 10, 10);
scroller.doTouchStart({
  pageX: 10,
  pageY: 20
}, 200);
scroller.doTouchMove([10], 200);
scroller.doTouchEnd(300);