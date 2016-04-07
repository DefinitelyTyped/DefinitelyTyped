/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="ej.widgets.all.d.ts" />

$(document).ready(function () {

    //Properties
    $("#draggable1").ejDraggable({
          drag: ondrag1, dragStart: ondragstart1, dragStop: ondragstop1
    });
    $("#droppable1").ejDroppable();
   
});
//Events

function ondrag1() {
    console.log("The mouse is moved during the dragging.");
}
function ondragstart1() {
    console.log("To handle the drag start event as an init option.");
}
function ondragstop1() {
    console.log("The mouse is moved during the dragging..");
}





$(document).ready(function () {

    //Properties
    $("#draggable1").ejDraggable({
          drag: ondrag2, dragStart: ondragstart2, dragStop: ondragstop2
    });
    $("#droppable1").ejDroppable();
   
});
//Events

function ondrag2() {
    console.log("The mouse is moved during the dragging.");
}
function ondragstart2() {
    console.log("To handle the drag start event as an init option.");
}
function ondragstop2() {
    console.log("The mouse is moved during the dragging..");
}





$(document).ready(function () {

    //Properties
    $("#resizable1").ejResizable({resizeStart: onresizestart , resizeStop: onresizestop });
   
});
//Events
function onresizestart() {
    console.log("The resizing is start");
}
function onresizestop() {
    console.log("The resizing is stop");
}





$(document).ready(function () {

    //Properties
    $("#scroller1").ejScroller({ height: 300, width: 500, create: onScrollCreate });
    $("#scroller2").ejScroller({ height: 300, width: 500,scrollTop:40 });

});
//Events
function onScrollCreate() {
    console.log("control created");
}

$(document).ready(function () {
   
    $("#accordion1").ejAccordion({cssClass: "gradient-lime" , create: AccordionCreate });
	 $("#accordion2").ejAccordion({ enabled: true , activate: AccordionActivate });
    
});

function AccordionCreate() { 
    console.log("create");
}
function AccordionActivate(){
    console.log("activate")
}

$(document).ready(function () {
   
    $("#Text1").ejButton({ text: "Button", enabled: false , create: onButtoncreate });
	$("#Text2").ejButton({ text: "Button", cssClass: "customclass" , click: onButtonclick });
});

function onButtoncreate() { 
    console.log("create");
}
function onButtonclick(){
    console.log("click")
}
$(document).ready(function () {

    //Properties
    $("#listbox1").ejListBox({ allowMultiSelection: true, create: onlistBoxcreate });
    $("#listbox2").ejListBox({ showCheckbox: true,checkChange: onlistBoxcheckchange });

});
//Events
function onlistBoxcreate() {
    console.log("control created");
}
function onlistBoxcheckchange() {
    console.log("list item is checked or unchecked");
}





$(document).ready(function () {
   
    $("#checkbox1").ejCheckBox({ enableTriState: true, create: onCheckboxcreate });
    $("#checkbox2").ejCheckBox({ checked: true , change: onCheckboxchange });

});

function onCheckboxcreate() { 
    console.log("create");
}
function onCheckboxchange(){
    console.log("change")
}



$(document).ready(function () {
   
    $("#colorpicker1").ejColorPicker({ value: "#278787" , open: oncolorPickeropen });
    $("#colorpicker2").ejColorPicker({ enabled: true,  create: oncolorPickercreate });
	   
});
function oncolorPickeropen() { 
    console.log("open");
}
function oncolorPickercreate(){
    console.log("create")
}


$(document).ready(function () {
   
            $("#fileExplorer").ejFileExplorer({
                isResponsive: true,
                fileTypes: "*.png, *.gif, *.jpg, *.jpeg, *.docx",
                layout: "largeicons",
                path: "http://mvc.syncfusion.com/ODataServices/FileBrowser/",
                ajaxAction: "http://mvc.syncfusion.com/OdataServices/fileExplorer/fileoperation/doJSONPAction",
                ajaxDataType: "jsonp",
            });
});


$(document).ready(function () {
   
    $("#datepicker1").ejDatePicker({dateFormat: "dd/MM/yyyy" ,open: ondatePickeropen });
    $("#datepicker3").ejDatePicker({value: "21/2/2010" , select: ondatePickerselect });
	   
});
function ondatePickeropen() { 
    console.log("open");
}
function ondatePickerselect(){
    console.log("select")
}


$(document).ready(function () {
   
    $("#datetimepicker1").ejDateTimePicker({width:"100%" , create: ondatetimePickercreate });
    $("#datetimepicker2").ejDateTimePicker({enableRTL: true , open: ondatetimePickeropen });
});
function ondatetimePickercreate() { 
    console.log("create");
}
function ondatetimePickeropen(){
    console.log("open")
}


$(document).ready(function () {
    $("#Div1").ejDialog({ enabled: true , open : ondialogOpen });
	$("#Div2").ejDialog({ title: "Low battery" , beforeClose : ondialogbeforeClose });
});
function ondialogbeforeClose() {
    console.log("beforeClose");
}
function ondialogOpen() {
    console.log("open");
}
$(document).ready(function () {
   
    $("#dropdownlist1").ejDropDownList({ targetID: "carsList", create: ondropDowncreate });
	$("#dropdownlist2").ejDropDownList({ watermarkText: "Select a car", change: ondropDownchange });
});

function ondropDowncreate() { 
    console.log("create");
}
function ondropDownchange(){
    console.log("change")
}
$(document).ready(function () {
    $("#num1").ejNumericTextbox({ value:"35" ,create: onEditorcreate });
	$("#num2").ejNumericTextbox({ width:"100%" , change: onEditorchange });
	
	$("#num3").ejPercentageTextbox({ value:"3" ,create: onEditorcreate });
	$("#num4").ejPercentageTextbox({ width:"100%" , change: onEditorchange });
	
	$("#num5").ejCurrencyTextbox({ value:"555" ,create: onEditorcreate });
	$("#num6").ejCurrencyTextbox({ width:"100%" , change: onEditorchange });
		
});

function onEditorcreate() { 
    console.log("create");
}
function onEditorchange(){
    console.log("change")
}

$(document).ready(function () {

    //Properties
    $("#listview1").ejListView({ width: 200,mouseUP: onlistViewmouseup });
    $("#listview2").ejListView({ height: 300, mouseDown: onlistViewmousedown });

});
//Events
function onlistViewmouseup() {
    console.log("mouse up happens on the item.");
}
function onlistViewmousedown() {
    console.log("mouse down happens on the item.");
}









$(document).ready(function () {
    $("#num1").ejMaskEdit({ maskFormat: "99-999-99999" ,create: onmaskEditcreate });
	$("#num2").ejMaskEdit({ watermarkText: "99-999-99999", width:"100%" , change: onmaskEditchange });	
});

function onmaskEditcreate() { 
    console.log("create");
}
function onmaskEditchange(){
    console.log("change")
}
$(document).ready(function () {

    //Properties
    $("#menu1").ejMenu({ enabled: false ,create: onMenucreate });
    $("#menu2").ejMenu({ width: "800px",click: onMenuclick });

});
//Events
function onMenucreate() {
    console.log("control created");
}
function onMenuclick() {
    console.log("mouse click on menu items");
}





$(document).ready(function () {
     $("#pager1").ejPager({ click : onclickpager });
	 $("#pager2").ejPager({ enableRTL: true });
});

function onclickpager(){
    console.log("click")
}
$(document).ready(function () {
   
    $("#progress1").ejProgressBar({ text: 'loading...' , value: 50 , create: ProgressBarCreate });
	$("#progress2").ejProgressBar({ width: 200, value: 50 , change: ProgressBarChange });
    
});

function ProgressBarCreate() { 
    console.log("create");
}
function ProgressBarChange(){
    console.log("change");
}

$(document).ready(function () {
    $("#r1").ejRadioButton({ create: onradioButtoncreate });
    $("#r2").ejRadioButton({ text: "RadioButton",change: onradioButtonchange });
    $("#r3").ejRadioButton({ text: "RadioButton1", enabled: false });  
});

function onradioButtonchange() {    
    console.log("Change triggered");
}
function onradioButtoncreate() {    
    console.log("Create triggered");
}
$(document).ready(function () {
    $("#Div1").ejRating({ enabled: true, click: onRatingclick });
    $("#Div2").ejRating({ incrementStep: 1, change: RatingvalueChanged });    
});

function RatingvalueChanged() {
    console.log("Value changed");
}
function onRatingclick() {
    console.log("Entered");
}
$(document).ready(function () {
                  
        
    $("#test1").ejRibbon({
        allowResizing:true,applicationTab: {
             menuSettings: {
                 openOnClick: false
             }
         },
         tabs: [{
             id: "home",
             text: "HOME",
             groups: [{
                 text: "New",
                 type: "custom",
                 contentID: "btn"
             }]
         }], 
    });
    $("#test2").ejRibbon({
         width: "100%",
         applicationTab: {
             menuSettings: {
                 openOnClick: false
             }
         },
         tabs: [{
             id: "home",
             text: "HOME",
             groups: [{
                 text: "New",
                 type: "custom",
                 contentID: "btn"
             }]
         }], tabClick: onRibbonTabClick
    });
});

function onRibbonTabClick() {
    console.log("Tab Clicked..");
}

$(function() {
            $("#Kanban").ejKanban(
                {
                    enableRTL: true,
                    columns: [
                        { headerText: "Backlog", key: "Open" },
                        { headerText: "In Progress", key: "InProgress" },
                        { headerText: "Testing", key: "Testing" },
                        { headerText: "Done", key: "Close" }
                    ],                                                           			
                    keyField: "Status",
		    			
                    
                });
        });

$(document).ready(function () {
    var imageData = [
        {
            "imageurl": "../themes/images/rose.jpg",
        },
        {
            "imageurl": "../themes/images/rose.jpg",
        }
     
    ];
    $("#test1").ejRotator({
       dataSource:imageData, allowKeyboardNavigation : false,create: onRotatorCreate
    });
    $("#test2").ejRotator({
        dataSource:imageData, displayItemsCount  : "1",pagerClick: onRotatorpagerClick
        
    });
   

});

function onRotatorCreate() {
    console.log("created");
}
function onRotatorpagerClick() {
    console.log("page clicked..");
}


$(document).ready(function () {
    $("#rteSample").ejRTE({ allowEditing: false , enableRTL: true });
    $("#rteSample").ejRTE({ change: onRtechange , execute: onRteExecute });   
});

function onRtechange() {    
    console.log("Change triggered");
}
function onRteExecute() {    
    console.log("Executed");
}
$(document).ready(function() {
    $("#test1").ejSlider({ showRoundedCorner: true });
    $("#test2").ejSlider({ orientation: ej.Orientation.Vertical });
    $("#test3").ejSlider({ minValue: 20, maxValue: 80 });
    $("#test4").ejSlider({ start: Sliderstart });
    $("#test5").ejSlider({ enabled: false });
    $("#test6").ejSlider({ slide: onSliderslide });   
});
function Sliderstart() {
    console.log("Slider Started");
}
function onSliderslide() {
    console.log("Moving");
}

$(document).ready(function () {
    $("#sbutton").ejSplitButton({ 
                width: "120px",
                height: "50px",
                buttonMode: ej.ButtonMode.Dropdown,
                create: splitButtonopen,
                targetID: "target",
                 });
});

function splitButtonopen()
{
alert("Opened");
}



$(document).ready(function () {
   
    $("#splitter1").ejSplitter({ enableRTL: true , create: onSplitterCreate });
    $("#splitter2").ejSplitter({allowKeyboardNavigation: false , expandCollapse: onSplitterExpandCollapse });
	   
});
function onSplitterCreate() { 
    console.log("Created");
}
function onSplitterExpandCollapse(){
    console.log("expand and collapsed")
}

$(document).ready(function () {
   
    $("#tab1").ejTab({ enableRTL: true , create: onTabCreate });
    $("#tab2").ejTab({ showRoundedCorner: true , ajaxSuccess: onTabAjaxSuccess  });
        
});
function onTabCreate() {
    console.log("created");
}

function onTabAjaxSuccess() {
    console.log("ajaxsuccess");
}


$(function () {
    // declaration
    var websiteCollection = [
        { text: "Google", url: "http://www.google.com", frequency: 12 },
        { text: "All Things Digital", url: "http://allthingsd.com/", frequency: 3 },
       
    ];
    $("#tagtest").ejTagCloud({
        titleText: "Tech Sites",
        dataSource: websiteCollection,
        enableRTL: true, mouseout: onTagMouseout
    });
    $("#tagtest1").ejTagCloud({
        titleText: "Tech Sites",
        dataSource: websiteCollection,
        maxFontSize: "10px", create: onTagCreate
    });
    function onTagCreate() {
        console.log("created");
    }
    function onTagMouseout() {
        console.log("mouseout");
    }
});



    $(function () {
        $("#time").ejTimePicker({ enabled : true, height : "35",close: TimeClose,create: TimeCreate});
    });

   function TimeClose() {
    console.log("close");
    }
   function TimeCreate() {
    console.log("create");
   }
 

    $(function () {
        $("#tbutton").ejToggleButton({
            size: "large",
			height: "28px",
			click:ToggleClick,
			create:ToggleCreate
        });
    });

	function ToggleClick() {
       console.log("click");
    }
    function ToggleCreate() {
       console.log("create");
    }
 
$(function () {// document ready
        // Toolbar control creation 
        $("#ToolbarItem").ejToolbar({
            width: "auto", // width of the Toolbar
            height: "33px", // height of the Toolbar
			create:ToolBarCreate,
			click:ToolBarClick
        });    
    });
    
function ToolBarCreate() {
    console.log("click");
}
function ToolBarClick() {
    console.log("create");
}
 
$(document).ready(function () {
   
   $("#treeView").ejTreeView({ width: 300 , cssClass: 'customclass' , create: TreeViewCreate });
    
   $("#treeView1").ejTreeView({  height: 300 ,  enabled: true , nodeClick: TreeViewClick });
});


function TreeViewCreate() { 
    console.log("create");
}
function TreeViewClick(){
    console.log("click");
}

$(document).ready(function () {

    //Properties
    $("#uploadbbox1").ejUploadbox({ height: "60px", create: onuploadBoxcreate });
    $("#uploadbbox2").ejUploadbox({ enableRTL: true, fileSelect: onuploadBoxfileselect });

});
//Events
function onuploadBoxcreate() {
    console.log("control created");
}
function onuploadBoxfileselect() {
    console.log("file has been selected");
}









$(document).ready(function () {

    //Properties
    $("#waitingpopup1").ejWaitingPopup({ showOnInit: true, create: onwaitingPopupcreate });
    $("#waitingpopup2").ejWaitingPopup({ showOnInit: true, showImage: false });

});
//Events
function onwaitingPopupcreate() {
    console.log("control created");
}





$(function () {
            $("#Grid").ejGrid({
                allowPaging: true,
                allowSorting: true,
                rowSelected: onGridRowSelect,
                columnSelected: onGridColumnSelect,
                rightClick: onGridRightClick,
                columns: [
                        { field: "OrderID", headerText: "Order ID", width: 75 , textAlign: ej.TextAlign.Right },
                        { field: "CustomerID", headerText: "Customer ID", width: 80 },
                        { field: "EmployeeID", headerText: "Employee ID", width: 75, textAlign: ej.TextAlign.Right },
                        { field: "Freight", width: 75, format: "{0:C}", textAlign: ej.TextAlign.Right },
                        { field: "OrderDate", headerText: "Order Date", width: 80, format: "{0:MM/dd/yyyy}", textAlign: ej.TextAlign.Right },
                        { field: "ShipCity", headerText: "Ship City", width: 110 }
                ]
            });
        });
  
function onGridRowSelect()
{
console.log("Row Selected");
}  
function onGridRightClick()
{
console.log("Right Click Button Clicked");
}  
function onGridColumnSelect()
{
console.log("Column Selected");
}  

    $(function () {
            $("#PivotGrid").ejPivotGrid({
				load: PivotGridload,
				renderComplete: PivotGridrenderComplete,
				url: "/wcf/PivotGridService.svc",
				isResponsive: true 
                            
            });
	 });

	function PivotGridload() {
       console.log("load");
    }
    function PivotGridrenderComplete() {
       console.log("rendercomplete");
    }
 

    $(function () {
                        $("#PivotSchemaDesigner1").ejPivotSchemaDesigner({
						height: "630px",
						url: "/wcf/PivotService.svc"
						});
	 });

	
 
$(document).ready(function () {
     $("#pivotpager1").ejPivotPager({ categoricalCurrentPage: 1 });
	 $("#pivotpager2").ejPivotPager({ seriesPageCount: 0 });
});

$(document).ready(function () {
    $("#test1").ejSchedule({
        cellHeight:"35px", cellClick: onScheduleCellClick
    });
    $("#test2").ejSchedule({
        enableRTL: true, menuItemClick: onScheduleMenuItemClick
    });
});
function onScheduleCellClick() {
    console.log("cell clicked..");
}
function onScheduleMenuItemClick() {
    console.log("Menu Item Clicked..");
}


        $(function () {
            $("#RecurrenceEditor").ejRecurrenceEditor({
                selectedRecurrenceType: 0,
                create: RecurrenceEditorOncreate
            });
            
        });

	     function RecurrenceEditorOncreate() {
             this.element.find("#recurrencetype_wrapper").css("width", "33%");
         }
 
$(document).ready(function () {

$("#GanttContainer").ejGantt({
                allowSelection: true,
                allowColumnResize: true,
                taskIdMapping: "TaskID",
                taskNameMapping: "TaskName",
                scheduleStartDate: "02/23/2014",
                scheduleEndDate: "03/31/2014",
                startDateMapping: "StartDate",
                endDateMapping: "EndDate",
                progressMapping: "Progress",
                childMapping: "Children",
                allowGanttChartEditing: false,
                treeColumnIndex: 1,
                enableResize: true,
                expanded: onGanttExpand,
                load: onGanttLoad
            });
});

function onGanttExpand()
{
console.log("Expanded");
}
function onGanttLoad()
{
console.log("Loading");
}
$(document).ready(function () {
                  
        
    $("#test1").ejReportViewer({ reportServiceUrl: "../api/RDLReport",enablePageCache: false,reportLoaded: onReportReportLoaded });
    $("#test2").ejReportViewer({
        renderMode: ej.ReportViewer.RenderMode.Default,reportServiceUrl: "../api/RDLReport",renderingBegin: onReportRenderingBegin });
});
function onReportRenderingBegin() {
    console.log("Rendering Begin..");
}
function onReportReportLoaded() {
    console.log("Report Loaded..");
}

$(document).ready(function () {
 var dataManager = [
         {
             taskID: 1,
             taskName: "Planning",
             startDate: "02/03/2014",
             endDate: "02/07/2014",
             progress: 100,
             duration: 5,
             priority: "Normal",
             approved: false,
             subtasks: [
                 { taskID: 2, taskName: "Plan timeline", startDate: "02/03/2014", endDate: "02/07/2014", duration: 5, progress: 100, priority: "Normal", approved: false },
                 { taskID: 3, taskName: "Plan budget", startDate: "02/03/2014", endDate: "02/07/2014", duration: 5, progress: 100, approved: true },
                 { taskID: 4, taskName: "Allocate resources", startDate: "02/03/2014", endDate: "02/07/2014", duration: 5, progress: 100, priority: "Critical", approved: false },
                 { taskID: 5, taskName: "Planning complete", startDate: "02/07/2014", endDate: "02/07/2014", duration: 0, progress: 0, priority: "Low", approved: true }
             ]
         }];
   
$("#test1").ejTreeGrid({
       dataSource:dataManager,allowColumnResize:  true,
             columns: [
                    { field: "taskID", headerText: "Task Id", editType: "numericedit" },
                    { field: "taskName", headerText: "Task Name", editType: "stringedit" },
                    { field: "startDate", headerText: "Start Date", editType: "datepicker" },
                    { field: "endDate", headerText: "End Date", editType: "datepicker" },
                    { field: "duration", headerText: "Duration", editType: "numericedit" },
                    { field: "progress", headerText: "Progress", editType: "numericedit" }
                ],load: onTreeLoad
    });
    $("#test2").ejTreeGrid({
        dataSource:dataManager,rowHeight : 30,
            columns: [
                    { field: "taskID", headerText: "Task Id", editType: "numericedit" },
                    { field: "taskName", headerText: "Task Name", editType: "stringedit" },
                    { field: "startDate", headerText: "Start Date", editType: "datepicker" },
                    { field: "endDate", headerText: "End Date", editType: "datepicker" },
                    { field: "duration", headerText: "Duration", editType: "numericedit" },
                    { field: "progress", headerText: "Progress", editType: "numericedit" }
                ],rowSelected: onTreeRowSelected
        
    });
   

});
function onTreeLoad() {
    console.log("loaded..");
}
function onTreeRowSelected() {
    console.log("row Selected..");
}


$(document).ready(function () {
        $("#navpane").ejNavigationDrawer({ type: "overlay", direction: "left",  position: "fixed",open: NavigationDrawerOpen });
});

function NavigationDrawerOpen()
{
  console.log("open");
}


    $(function () {
            $('#radialmenu').ejRadialMenu({ targetElementId: "radialtarget", "autoOpen":true,select: RadialMenuSelect , mouseUp: RadialMenuMouseUp });
        });

   function RadialMenuMouseUp() {
    console.log("mouseUp");
    }
   function RadialMenuSelect() {
    console.log("select");
   }
 


$(function ()
{
     $("#tile1").ejTile({ text: "Map", tileSize: "medium", imageUrl: 'http://js.syncfusion.com/ug/web/content/tile/map.png', mouseUp: TileMouseUp, mouseDown: TileMouseDown });
});
	
function TileMouseUp() {
    console.log("mouseUp");
}

function TileMouseDown() {
    console.log("mousedown");
}




    $(function () {
        $("#radialSlider").ejRadialSlider({ innerCircleImageUrl: "chevron-right.png",autoOpen:true, create: RadialSliderCreate , start: RadialSliderStart });
    });

   function RadialSliderCreate() {
    console.log("create");
    }
   function RadialSliderStart() {
    console.log("start");
   }
 
$(document).ready(function () {
    $("#test1").ejSpreadsheet({
        allowDelete: true, cellEdit: onSpreadsheetCellEdit
    });
    $("#test2").ejSpreadsheet({
        cssClass: "gradient-lime", drag: onSpreadsheetDrag
    });
});
function onSpreadsheetDrag() {
    console.log("item drag..");
}
function onSpreadsheetCellEdit() {
    console.log("cell edited..");
}


   $(function()
                {
                    $("#OlapChart").ejOlapChart(
                    {
                        url: "OlapChartService.svc",
			    renderFailure: OlapChartRenderFailure,
	        	    renderSuccess: OlapChartRenderSuccess
                    });
                });

  function OlapChartRenderFailure() {
    console.log("failure");
    }
  function OlapChartRenderSuccess() {
    console.log("success");
  }
 

    $(function()
     {
        $("#OlapClient").ejOlapClient(
        {
              url: "/wcf/OlapClientService.svc",
			  title: "OLAP Browser",
			  renderFailure: OlapClientRenderFailure,
			  renderSuccess: OlapClientRenderSuccess
        });
    });

	function OlapClientRenderFailure() {
       console.log("failure");
    }
    function OlapClientRenderSuccess() {
       console.log("success");
    }
 
$(document).ready(function()
                {
                    $("#olapgauge1").ejOlapGauge(
                    {
                        url: "../wcf/OlapGaugeService.svc",
						enableTooltip: true,
						renderFailure: olapGaugerenderFailure,
						renderSuccess: olapGaugerenderSuccess
                    });
                });
function olapGaugerenderFailure() {
    console.log("failure");
    }
function olapGaugerenderSuccess() {
    console.log("success");
    }
 
$(document).ready(function () {
   
  $("#CoreLinearGauge").ejLinearGauge({
                labelColor: "#8c8c8c", width: 500,
                scales: [{
                    width: 4, border: { color: "transparent",width:0 }, showBarPointers: false, showRanges: true, length: 310, 
                    position: { x: 52, y: 50 }, markerPointers: [{
                        value: 50, length: 10, width: 10, backgroundColor: "#4D4D4D", border: { color: "#4D4D4D" }
                    }],
                    labels: [{ font: { size: "11px", fontFamily: "Segoe UI", fontStyle: "bold" }, distanceFromScale:{x: -13} }],
                    ticks: [{ type: "majorinterval", width: 1, color: "#8c8c8c" }],
                    ranges: [{
                        endValue: 60,
                        startValue: 0,
                        backgroundColor: "#F6B53F",
                        border: { color: "#F6B53F" }, startWidth: 4, endWidth: 4
                    }, {
                        endValue: 100,
                        startValue: 60,
                        backgroundColor: "#E94649",
                        border: { color: "#E94649" }, startWidth: 4, endWidth: 4
                    }]
                }],
				init:onLinearGaugeinit,
				mouseClick:onLinearGaugemouseClick
            });
});

function onLinearGaugeinit()
{
  console.log("init");
}
function onLinearGaugemouseClick()
{
  console.log("mouseClick");
}

$(document).ready(function () {
   
     $("#CoreCircularGauge").ejCircularGauge({
                backgroundColor: "transparent", width: 500, 
                scales: [{
                    showRanges: true,
                    startAngle: 122, sweepAngle: 296, radius: 130, showScaleBar: true, size: 1, maximum: 120, majorIntervalValue: 20, minorIntervalValue: 10,
                    border: {
                        width: 0.5,
                    },
                    pointers: [{
                        value: 60,
                        showBackNeedle: true,
                        backNeedleLength: 20,
                        length: 95,
                        width: 7,
                        pointerCap: { radius: 12 }
                    }],
                    ticks: [{
                        type: "major",
                        distanceFromScale: 2,
                        height: 16,
                        width: 1, color: "#8c8c8c"
                    }, { type: "minor", height: 8, width: 1, distanceFromScale: 2, color: "#8c8c8c" }],
                    labels: [{
                        color: "#8c8c8c"
                    }],
                    ranges: [{
                        distanceFromScale: -30,
                        startValue: 0,
                        endValue: 70
                    }, {
                        distanceFromScale: -30,
                        startValue: 70,
                        endValue: 110,
                        backgroundColor: "#fc0606",
                        border: { color: "#fc0606" }
                    },
                    {
                        distanceFromScale: -30,
                        startValue: 110,
                        endValue: 120,
                        backgroundColor: "#f5b43f",
                        border: { color: "#f5b43f" }
                    }]
                }],
				mouseClick:onCircularMouseClick
            });
	   
});

function onCircularMouseClick()
{
  console.log("Mouse click..");
}

$(document).ready(function () {
   
   $("#DigitalCore").ejDigitalGauge({
                width: 525,
                height: 305,
                items: [{
                    segmentSettings: {
                        width: 1,
                        spacing: 0,
                        color: "#8c8c8c"
                    },
                    characterSettings: {
                        opacity: 0.8,
                    },
                    value: "123456789",
                    position: { x: 52, y: 52 }
                }],
				init:onDigitalGaugeinit,
				itemRendering:onDigitalGaugeItemRendering
            });
});

function onDigitalGaugeinit()
{
  console.log("init");
}
function onDigitalGaugeItemRendering()
{
  console.log("itemRendering");
}

$(document).ready(function () {
   
     $("#container").ejChart(
        {
		 
		
			
			//Initializing Common Properties for all the series
            commonSeriesOptions: 
			{
                type: 'line', enableAnimation: true,
				tooltip:{ visible :true, template:'Tooltip'},
                marker:
                {
                    shape: 'circle',
                    size:
                    {
                        height: 10, width: 10
                    },
                    visible: true
                },
                 border : {width: 2}                             
            },	
				
           
 
            title :{text: 'Efficiency of oil-fired power production'},
            size: { height: "600" },
            legend: { visible: true},
			create:onChartCreate
        });
	   
});

function onChartCreate()
{
  console.log("create");
}

$(document).ready(function () {

	 $("#scrollcontent").ejRangeNavigator({

            enableDeferredUpdate: true,
            padding: "15",
            allowSnapping:true,
		      selectedRangeSettings: {
               start:"2015/5/25", end:"2016/5/25"
           },
          
   })
});

$(document).ready(function () {
   $("#BulletGraph1").ejBulletGraph({
            qualitativeRangeSize: 32,            
            quantitativeScaleLength: 475, tooltipSettings: {template: "Tooltip", visible: true}, orientation: ej.datavisualization.BulletGraph.Orientation.Horizontal,
            flowDirection: ej.datavisualization.BulletGraph.FlowDirection.Forward,
            quantitativeScaleSettings: {
                location: { x: 110, y: 10 },
                minimum: 0,
                maximum: 10,
                interval: 1,
                minorTicksPerInterval: 4,
                majorTickSettings:{ size: 13, width: 1, stroke: 'gray'},
				minorTickSettings:{ size: 5, width: 1, stroke: 'gray'},
                
                labelSettings: {
                    position: ej.datavisualization.BulletGraph.LabelPosition.Below, offset: 14, size: 10
                },
                featuredMeasureSettings: { width: 6 },
				comparativeMeasureSettings:{
                                           width: 5
                },
                featureMeasures: [{ value: 8, comparativeMeasureValue: 6.7, category: ""}]
            },
            qualitativeRanges: [{
                rangeEnd: 4.3
            }, {
                rangeEnd: 7.3
            }, {
                rangeEnd: 10
            }],
            captionSettings: { textAngle: 0,
                location: { x: 17, y: 20 }, text: "Revenue YTD", font: { color: null, fontFamily: 'Segoe UI', fontStyle: ej.datavisualization.BulletGraph.FontStyle.Normal, size: '12px', fontWeight: ej.datavisualization.BulletGraph.FontWeight.Normal, opacity: 1 }, //'#707070'
                subTitle: { textAngle: 0,
                    text: "$ in Thousands", location: { x: 10, y: 35 }, font: { color: null, fontFamily: 'Segoe UI', fontStyle: ej.datavisualization.BulletGraph.FontStyle.Normal, size: '12px', fontWeight: ej.datavisualization.BulletGraph.FontWeight.Normal, opacity: 1} //'#707070'
                }
            }
			


        });
		
		  $("#BulletGraph2").ejBulletGraph({ qualitativeRangeSize: 32, height:140,
            quantitativeScaleLength: 475, orientation: ej.datavisualization.BulletGraph.Orientation.Horizontal,
            flowDirection: ej.datavisualization.BulletGraph.FlowDirection.Forward,
            quantitativeScaleSettings: {
                location: { x: 110, y: 10 },
                minimum: -10,
                maximum: 10,
                interval: 2,
                minorTicksPerInterval: 4,
				majorTickSettings:{ size: 13, width: 1},
				minorTickSettings:{ size: 5, width: 1},
                
                labelSettings: {
                    position: ej.datavisualization.BulletGraph.LabelPosition.Below, offset: 14, size: 10, labelSuffix: ' %'
                },
                featuredMeasureSettings: { width: 6 },
				comparativeMeasureSettings:{ width: 5 },
                featureMeasures: [{ value: 8, comparativeMeasureValue: 6.7}]
            },
            qualitativeRanges: [{
                rangeEnd: -4, rangeStroke: "#61a301"
            }, {
                rangeEnd: 3, rangeStroke: "#fcda21"
            }, {
                rangeEnd: 10, rangeStroke: "#d61e3f"
            }],
            captionSettings: { textAngle: 0,
                location: { x: 60, y: 25 }, text: "Profit", font: { color: null, fontFamily: 'Segoe UI', fontStyle: ej.datavisualization.BulletGraph.FontStyle.Normal, size: '13px', fontWeight: ej.datavisualization.BulletGraph.FontWeight.Normal, opacity: 1 }, //'#707070'
                //subTitle: { textAngle: 0,
                //    text: "profit in %", location: { x: 35, y: 35 }, font: { color: null, fontFamily: 'Segoe UI', fontStyle: ej.datavisualization.BulletGraph.FontStyle.Normal, size: '12px', fontWeight: ej.datavisualization.BulletGraph.FontWeight.Normal, opacity: 1} //'#707070'
               //}
            },
		    drawLabels:onBulletDrawLabel
        });
        
});

		function onBulletDrawLabel()
		{
		  console.log("drawLabel");
		}


$(document).ready(function () {
   
    $("#barcode").ejBarcode({ text: "HTTP://WWW.SYNCFUSION.COM", symbologyType: "qrbarcode", xDimension: 8, displayText: true, load:onBarcodeLoad });
	
});

function onBarcodeLoad()
		{
		  console.log("load");
		}

           jQuery(function ($) {		
		    $("#container").ejMap({                
                 mouseover:MapMouseOver,
                 onRenderComplete:MapOnRenderComplete,
				 navigationControl:{enableNavigation:true,orientation:'vertical',absolutePosition:{x:5,y:15},dockPosition: 'none'},
                 background:'white',
                 enableAnimation: true,                 
                 layers: [
                       {
                               layerType: "geometry",
                               enableSelection: false,
							   enableMouseHover:false,
                               
                               showMapItems: false,
                               markerTemplate: 'template',                              
                               shapeSettings: {
                                   fill: "#626171",
                                   strokeThickness: "1",
                                   stroke: "#6F6F79",
                                   highlightStroke:"#6F6F79",
                                   valuePath: "name",
                                   highlightColor: "gray"

                               },                               
                               
                       }
                 ]

             });
         });
	   function MapMouseOver() {
          console.log("mouseover");
       }
	   function MapOnRenderComplete() {
          console.log("onRenderComplete");
       }
	

       jQuery(function ($) {
            $("#treemapContainer").ejTreeMap({
			    treeMapItemSelected:onTreeMapItemSelected,
               
                levels: [
                     { groupPath: "Continent", groupGap: 5}
                   ], 
                colorValuePath: "Growth",
                rangeColorMapping: [
                      { color: "#DC562D", from: "0", to: "1" },
                      { color: "#FED124", from: "1", to: "1.5" },
                      { color: "#487FC1", from: "1.5", to: "2" },
                      { color: "#0E9F49", from: "2", to: "3" }
                ],
                showTooltip:true,
                leafItemSettings: { labelPath: "Region" }
            });
        });
	function onTreeMapItemSelected() {
       console.log("TreeMapItemSelected");
    }
    
 