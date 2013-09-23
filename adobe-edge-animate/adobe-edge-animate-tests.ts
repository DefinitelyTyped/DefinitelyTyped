/// <reference path="adobe-edge-animate.d.ts" />

var sym:AdobeEdge.Symbol = new AdobeEdge.Symbol();
sym.getSymbol("kitten_1").getSymbol("kitten_paw").$("paw").hide();
sym.getSymbol("symbolName").getSymbol("nestedElementName").play();
sym.getComposition().getStage().getSymbol("symbolName").getSymbol("nestedElementName").play();

// Set the child symbols variable
var childSymbols = sym.getChildSymbols();
for (var i = 0; i < childSymbols.length; i++) // Return the number of direct children
{
    childSymbols[i].stop(); // Stop all of the children
}

sym.getComposition().createSymbolChild("kitten_paw", "body > div");

AdobeEdge.Symbol.bindElementAction('xxx', "stage", "document", "click", function (sym, e)
{
    window.open("http://www.mysite.com", "_self");
});

var time:number = sym.getLabelPosition("myLabel");

AdobeEdge.Symbol.bindElementAction('xxx', 'yyy', "${_button}", "click", function (sym, e)
{
    /* Set the creationComplete and then instantiate
     the AdobeEdge.Symbol. If this works successfully, the symbol should have a green
     rectangle instead of a gray one. Note that the symbol's autoplay is
     set to false so that I don't get the green just by waiting. */
    // Need the composition ID in order for this to work
    var compId = sym.getComposition().getCompId();    // Set up the creationComplete event
    AdobeEdge.Symbol.bindSymbolAction(compId, "mySymbol", "creationComplete", function (sym, e)
    {
        sym.stop("green");
    });    // now instantiate the symbol
    var mySymbolObject = sym.createChildSymbol("mySymbol", "Stage");
});

AdobeEdge.Symbol.bindTriggerAction('xxx', 'yyy', "Default Timeline", time, function (sym, e)
{
    sym.stop();
});

AdobeEdge.Symbol.bindTimelineAction('xxx', 'yyy', "Default Timeline", "play", function (sym, e)
{
    sym.setVariable("adobesound", {test:foo});
    this.getSymbol("volplus").stop(0);
    this.getSymbol("volminus").stop(0);
    $('.fooo').bind("ended", function ()
    {

    });
});


// Assumes the following trigger on the main timeline:
sym.setVariable("played", "false");
var test1_play = sym.getSymbol("test1");
var foo = sym.getVariable("played");
if (foo == "false")
{
    test1_play.play();
    sym.setVariable("played", "true");
}
else if (foo == "true")
{
    test1_play.playReverse();
    sym.setVariable("played", "false");
}