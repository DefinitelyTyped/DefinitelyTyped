import {
	sendFrameHeight,
	sendHeightOnLoad,
	sendHeightOnResize,
	sendHeightOnPoll,
	sendHeightOnFramerInit,
  initFrame,
  initFrameAndPoll,
  Framer,
  autoInitFrames,
  observeIframe,
} from '@newswire/frames';

initFrame();
initFrameAndPoll();
sendFrameHeight();
sendHeightOnLoad();
sendHeightOnResize();
sendHeightOnFramerInit();
sendHeightOnPoll(150);

const container = document.getElementById('embed-container')!;
const src = 'https://i-am-an-embed/';
const attributes = { sandbox: 'allow-scripts allow-same-origin' };
new Framer(container, { src, attributes });

autoInitFrames();

const unobserve = observeIframe(document.createElement("iframe"));
unobserve();
