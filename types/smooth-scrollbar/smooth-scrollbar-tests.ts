import Scrollbar from "smooth-scrollbar";

const elem = document.createElement("div");

const scrollbar = Scrollbar.init(elem, {
    continuousScrolling: true,
    damping: 5,
    overscrollDamping: 5,
    overscrollEffect: "glow",
    overscrollEffectColor: "green",
    renderByPixels: true,
    speed: 10,
    syncCallbacks: true,
    thumbMinSize: 1
});

Scrollbar.has(elem);
Scrollbar.get(elem) === scrollbar;

scrollbar.targets.container;
scrollbar.targets.xAxis.track;

scrollbar.update(true);
scrollbar.setPosition(10, 10);

scrollbar.addListener(status => status.direction);
scrollbar.infiniteScroll(status => status.direction.y);

scrollbar.hideTrack("both");
scrollbar.showTrack("x");
scrollbar.destroy(true);
