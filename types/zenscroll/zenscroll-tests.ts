
import * as zenscroll from 'zenscroll';

//Scroll to the top of an element
var about = document.getElementById("about");
zenscroll.to(about);

// Scroll to a specific vertical position
zenscroll.toY(50);

// Scroll an element into view
var image1 = document.getElementById("imageSample");
zenscroll.intoView(image1, 400, () => console.log('scrolled'));

// Scrolls the element to the center of the screen
zenscroll.center(image1)

var duration = 500; // milliseconds
var offset = 200; // pixels
zenscroll.center(image1, duration, offset);

// Set the duration of the scroll
zenscroll.toY(50, 100) // 100ms == 0.1 second
zenscroll.to(about, 500) // 500ms == half a second
zenscroll.center(image1, 2000) // 2 seconds
zenscroll.to(about, 0) // 0 milliseconds == no smoothing

// Scroll inside a scrollable DIV
var defaultDuration = 500;
var edgeOffset = 30;
var myDiv = document.getElementById("container");
var myScroller = zenscroll.createScroller(myDiv, defaultDuration, edgeOffset);
var target = document.getElementById("item4");
myScroller.center(target);
myScroller.toY(500);
myScroller.intoView(target);

// Execute something when the scrolling is done
zenscroll.intoView(myDiv, 100, function () { myScroller.center(target) })
zenscroll.intoView(myDiv, 100, function () { myScroller.toY(35) })
zenscroll.intoView(myDiv, 100, function () { myScroller.intoView(target) })

// Change settings
var defaultDuration = 777 ;// ms
var edgeOffset = 42 ;// px
zenscroll.setup(defaultDuration, edgeOffset);
myScroller.setup(500, 10);
zenscroll.setup(777); // only updates defaultDuration to 777
zenscroll.setup(null, 42); // only updates edgeOffset to 42
var currentSettings = zenscroll.setup();
var dd = currentSettings.defaultDuration;
var eo = currentSettings.edgeOffset;

// Additional functions
var isScrolling = zenscroll.moving();
zenscroll.stop();
var bodyY = zenscroll.getY();
var myDivY = myScroller.getY();
var myElemY = zenscroll.getTopOf(about);
var relativeTopOfElem = myScroller.getTopOf(about);