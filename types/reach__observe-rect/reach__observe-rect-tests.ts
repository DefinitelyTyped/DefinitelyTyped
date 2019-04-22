import observeRect from "@reach/observe-rect";

const img = document.createElement("img");
const observer = observeRect(img, rect => console.log(rect));
observer.observe();
observer.unobserve();
