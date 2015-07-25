/// <reference path="../chocolatechipjs/chocolatechipjs.d.ts"/>
/// <reference path="chui.d.ts"/>

$(function() {

   /**
    * Test static methods:
    */
   var concatenatedText = $.concat("This", "is", "text", "to", "contatenate.");
   $.forEach([1,2,3], function(ctx) {
      return ctx;
   });
   $.forEach([1,2,3], function(ctx, idx) {
      return idx;
   });
   
   var isiPhone = $.isiPhone;
   var isAndroid = $.isAndroid;
   var isWinPhone = $.isWinPhone;
   
   $('li').on($.eventStart, function(){
      return;
   });
   $('li').on($.eventEnd, function(){
      return;
   });
   $('li').on($.eventMove, function(){
      return;
   });
   $('li').on($.eventCancel, function(){
      return;
   });
   
   var browserVersion = $.browserVersion();
   $.UIHideNavBar();
   $.UIShowNavBar();
   $.UIGoToArticle("#main");
   $.UIGoBack();
   $.UIGoBackToArticle("#main");
   $.UIBlock();
   $.UIBlock(.5);
   $.UIUnblock();
   $.UIPopup({id: "myPopup", message: 'Hello!!!'});
   $.UIPopup({message: 'Hello!!!', title: "Whatever", callback: $.noop});
   $.UIPopup({message: 'Hello!!!', cancleButton: "Forget It!", continueButton: "OK"});
   $.UIPopover({id: "myPopover"});
   $.UIPopover({callback: function() {}});
   $.UIPopover({title: "Whatever"});
   $.UIPopover({id: "myPopover", callback: function() {}, title: "Whatever"});
   $.UIPopoverClose();
   $.UICreateSegmented({id: "mySegmentedControl", labels : ['first','second','third'], selected: 0, className: "special"});
   $.UIPaging();
   $.UISheet({id: "mySheet", listClass: "specialList", background: 'red',  handle: false});
   $.UIShowSheet("#mySheet");
   $.UIHideSheet();
   $.UISlideout({position: "right", dynamic: false, callback: $.noop});
   var myStepper = $('#myStepper');
   $.UIResetStepper(myStepper);
   $.UICreateSwitch({id: "mySwitch", value: 5, checked: "true", callback: $.noop});
   $.UITabbar({tabs: 3, labels: ["one", "two", "three"], selected: 2});
   $.UISearch({articleId: "#main", placehold: "Looking?", results: 10});
   var carouselPanels = $('li');
   $.UISetupCarousel({target: "#carousel", panels: carouselPanels});
   $.UIBindData();
   $.UIBindData("#myBoundData");
   $.UIUnBindData();
   $.UIUnBindData("#myBoundData");
   
   /**
    * Test plugin methods:
    */
   $("li").forEach(function(ctx, idx) {
      console.log(ctx.nodeName + ": " + idx);
   });
   $('li').iz(".selected").hide();
   $('li').iznt(".selected").show();
   $('li').haz("span").hide();
   $('li').haznt("span").show();
   $('li').hazClass(".selected").hide();
   $('li').hazntClass(".selected").show();
   $('li').hazAttr("disabled").hide();
   $('li').hazntAttr("disabled").show();
   $('#main').bind("singletap", function() {
      return;
   });
   $('#main').UICenter();
   $('#main').UIBusy({size: "120px", color: "red", duration: "5000ms"});
   $('#myPopup').UIPopupClose();
   $('#mySegementedControl').UISegmented({selected: 2, callback: $.noop});
   $("#panelToggler").UIPanelToggle("#togglePanels", $.noop);
   $('#editList').UIEditList({callback: $.noop, deletable: false, movable: true});
   $('#mySelectList').UISelectList();
   $('#myStepper').UIStepper({start: 1, end: 10, defautValue: 5});
   $('#mySwitch').UISwitch();
   $('#myRangeControl').UIRange();
   
});