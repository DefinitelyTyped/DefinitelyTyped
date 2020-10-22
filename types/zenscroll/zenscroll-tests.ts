import * as zenscroll from 'zenscroll';

// Scroll to the top of an element
const about = document.getElementById("about");
zenscroll.to(about);

// Scroll to a specific vertical position
zenscroll.toY(50);

// Scroll an element into view
const image1 = document.getElementById("imageSample");
zenscroll.intoView(image1, 400, () => console.log('scrolled'));

// Scrolls the element to the center of the screen
zenscroll.center(image1);

const duration = 500; // milliseconds
const offset = 200; // pixels
zenscroll.center(image1, duration, offset);

// Set the duration of the scroll
zenscroll.toY(50, 100); // 100ms == 0.1 second
zenscroll.to(about, 500); // 500ms == half a second
zenscroll.center(image1, 2000); // 2 seconds
zenscroll.to(about, 0); // 0 milliseconds == no smoothing

// Scroll inside a scrollable DIV
const defaultDuration = 500;
const edgeOffset = 30;
const myDiv = document.getElementById("container");
const myScroller = zenscroll.createScroller(myDiv, defaultDuration, edgeOffset);
const target = document.getElementById("item4");
myScroller.center(target);
myScroller.toY(500);
myScroller.intoView(target);

// Execute something when the scrolling is done
zenscroll.intoView(myDiv, 100, () => myScroller.center(target));
zenscroll.intoView(myDiv, 100, () => myScroller.toY(35));
zenscroll.intoView(myDiv, 100, () => myScroller.intoView(target));

// Change settings
zenscroll.setup(defaultDuration, edgeOffset);
myScroller.setup(500, 10);
zenscroll.setup(777); // only updates defaultDuration to 777
zenscroll.setup(null, 42); // only updates edgeOffset to 42
const currentSettings = zenscroll.setup();
const dd = currentSettings.defaultDuration;
const eo = currentSettings.edgeOffset;

// Additional functions
const isScrolling = zenscroll.moving();
zenscroll.stop();
const bodyY = zenscroll.getY();
const myDivY = myScroller.getY();
const myElemY = zenscroll.getTopOf(about);
const relativeTopOfElem = myScroller.getTopOf(about);
