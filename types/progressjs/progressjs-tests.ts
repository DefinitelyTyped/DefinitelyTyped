progressJs(); //without selector, set progress-bar for whole page
progressJs("#targetElement"); //start progress-bar for element id='targetElement'

progressJs().start();

progressJs().set(20); //set progress to 20%

progressJs().start().autoIncrease(4, 500); //every 500 milliseconds, percentage + 4

progressJs().increase(); //increase one percent
progressJs().increase(2); //increase two percent

progressJs().start().set(20).end();

progressJs().setOption("theme", "black");
progressJs().setOption("overlayMode", true);
progressJs().setOption("considerTransition", false);

progressJs().setOptions({ 'theme': 'black', 'overlayMode': true });
progressJs().setOptions({ 'theme': 'black', 'overlayMode': true });
progressJs().setOptions({ 'theme': 'black', 'overlayMode': true, 'considerTransition': false });
progressJs().setOptions({ 'overlayMode': true });

progressJs().onbeforeend(function() {
  alert("before end");
});

progressJs().onbeforestart(function() {
  alert("before start");
});

progressJs().onprogress(function(targetElm, percent) {
  alert("progress changed to:" + percent);
});
