/* tslint:disable */

module AccordionComponent {
    $(function () {
        var sample = new ej.Accordion($("#basicAccordion"), {
            width: "100%",
            allowKeyboardNavigation: true,
            collapseSpeed: 500,
            collapsible: true,
            enableAnimation: true,
            enableMultipleOpen: true,
            events: "click",
            expandSpeed: 500,
            headerSize: "40px",
            htmlAttributes: { title: "Demo" },
            selectedItemIndex: 1,
            showCloseButton: true,
            showRoundedCorner: true
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
 /// <reference path="../tsfiles/ej.web.all.d.ts" />\

module AutocompleteComponent{
    var carList = [
                "Audi S6", "Austin-Healey", "Alfa Romeo", "Aston Martin",
                "BMW 7", "Bentley Mulsanne", "Bugatti Veyron",
                "Chevrolet Camaro", "Cadillac",
                "Duesenberg J", "Dodge Sprinter",
                "Elantra", "Excavator",
                "Ford Boss 302", "Ferrari 360", "Ford Thunderbird",
                "GAZ Siber",
                "Honda S2000", "Hyundai Santro",
                "Isuzu Swift", "Infiniti Skyline",
                "Jaguar XJS",
                "Kia Sedona EX", "Koenigsegg Agera",
                "Lotus Esprit", "Lamborghini Diablo",
                "Mercedes-Benz", "Mercury Coupe", "Maruti Alto 800",
                "Nissan Qashqai",
                "Oldsmobile S98", "Opel Superboss",
                "Porsche 356", "Pontiac Sunbird",
                "Scion SRS/SC/SD", "Saab Sportcombi", "Subaru Sambar", "Suzuki Swift",
                "Triumph Spitfire", "Toyota 2000GT",
                "Volvo P1800", "Volkswagen Shirako"
            ];
    $(function () {        
        var autocompleteInstance =new ej.Autocomplete($("#selectCar"), {        
            width: "100%",
            watermarkText: "Select a car",
            dataSource: carList,
            enableAutoFill: true,
            showPopupButton: true,
            multiSelectMode: "delimiter"
        });  
    });
}


/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module Barcodecomponent {
    $(function () {
        var barcodesample = new ej.datavisualization.Barcode($("#Barcode"), {
            text:"http://www.syncfusion.com"
        });
    });
}


/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module Bulletgraphcomponent {
    $(function () {
        var bulletsample = new ej.datavisualization.BulletGraph($("#BulletGraph"), {
            isResponsive: true,
            load: function () {
                var sender = $("#BulletGraph").data("ejBulletGraph");
                var bulletTheme = window.themeStyle + window.themeColor + window.themeVarient;
                if (bulletTheme) {
                    switch (bulletTheme) {
                        case "flatdark":
                        case "flatazuredark":
                        case "flatlimedark":
                        case "flatsaffrondark":
                        case "gradientdark":
                        case "gradientazuredark":
                        case "gradientlimedark":
                        case "gradientsaffrondark":
                        case "flathigh-contrast-01dark":
                        case "flathigh-contrast-02dark":
                            theme = "flatdark";
                            break;
                        case "flatoffice-365light":
                        case "flatmateriallight":
                            theme = "material";
                            break;
                        default:
                            theme = "flatlight";
                            break;
                    }
                    sender.model.theme = theme;
                }

            },
            tooltipSettings: { visible: true },
            quantitativeScaleSettings: {
                featureMeasures: [{
                    value: 8, comparativeMeasureValue:6.7
                }]
            },
            qualitativeRanges: [{
                rangeEnd: 4.3, rangeStroke:"#ebebeb",
            },
                {
                    rangeEnd: 7.3, rangeStroke:"#d8d8d8"
                },
                {
                    rangeEnd: 10, rangeStroke: "#7f7f7f"
                }
            ],
            captionSettings: {
                textPosition: 'right', text: 'Revenue YTD',
                subTitle: {
                    text: "$ in Thousands", textPosition:"right"
                }
            }
        });
    });
}


/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ButtonComponent {
    $(function () {
        var basicButton = new ej.Button($("#buttonnormal"), {
            size: "large",
            showRoundedCorner: true,
            contentType: "textandimage",
            prefixIcon: "e-icon e-save",
            text: "Save"
        });
        var toggleButton = new ej.ToggleButton($("#TextOnly"), {
            showRoundedCorner: true,
            size: "large",
            contentType: "textandimage",
            defaultPrefixIcon: "e-icon e-save",
            activePrefixIcon: "e-icon e-delete",
            defaultText: "Save",
            activeText: "Delete"
        });
        var splitbuttonnormal = new ej.SplitButton($("#splitbuttonnormal"), {
            showRoundedCorner: true,
            size: "large",
            prefixIcon: "e-icon e-file-empty",
            targetID: "menu1",
            contentType: "textandimage",
            text: "File"
        });
        var groupButton = new ej.GroupButton($("#groupButton"), {
            showRoundedCorner: true,
            size: "large"
        });
        var check1 = new ej.CheckBox($("#check1"), {
            size: "medium", enableTriState: true
        });
        var check2 = new ej.CheckBox($("#check2"), {
            size: "medium", enableTriState: true
        });
        var radio1 = new ej.RadioButton($("#radio1"), {
            size: "medium"
        });
        var radio2 = new ej.RadioButton($("#radio2"), {
            size: "medium", checked: true
        });
    });
}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ChartComponent {
    $(function () {
        var chartsample = new ej.datavisualization.Chart($("#Chart"), {
            primaryXAxis: {
                range: { min: 2005, max: 2011, interval: 1 },
                title: { text: "Year" },
                valueType: "category"
            },
            primaryYAxis: {
                range: { min: 25, max: 50, interval: 5 },
                labelFormat: "{value}%",
                title: { text: "Efficiency" },
                
            },
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
            series: 
			[
			    {
                points: [{ x: 2005, y: 28 }, { x: 2006, y: 25 },{ x: 2007, y: 26 }, { x: 2008, y: 27 }, 
						 { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }],						 
                name: 'India'
                },						
                {
                points: [{ x: 2005, y: 31 }, { x: 2006, y: 28 },{ x: 2007, y: 30 }, { x: 2008, y: 36 }, 
						 { x: 2009, y: 36 }, { x: 2010, y: 39 }, { x: 2011, y: 37 }],						 
                name: 'Germany'
                },
				{
                points: [{ x: 2005, y: 36 }, { x: 2006, y: 32 },{ x: 2007, y: 34 }, { x: 2008, y: 41 }, 
						 { x: 2009, y: 42 }, { x: 2010, y: 42 }, { x: 2011, y: 43 }],						 
                name: 'England'
                },					
                {
                points: [{ x: 2005, y: 39 }, { x: 2006, y: 36 },{ x: 2007, y: 40 }, { x: 2008, y: 44 }, 
						 { x: 2009, y: 45 }, { x: 2010, y: 48 }, { x: 2011, y: 46 }],						 
                name: 'France'
				}
            ],
            isResponsive: true,
            load: function () {
                var sender = $("#Chart").data("ejChart");
                if (!!window.orientation && sender) {           //to modify chart properties for mobile view
                    var model = sender.model,
                        seriesLength = model.series.length;
                    model.legend.visible = false;
                    model.size.height = null;
                    model.size.width = null;
                    for (var i = 0; i < seriesLength; i++) {
                        if (!model.series[i].marker)
                            model.series[i].marker = {};
                        if (!model.series[i].marker.size)
                            model.series[i].marker.size = {};
                        model.series[i].marker.size.width = 6;
                        model.series[i].marker.size.height = 6;
                    }
                    model.primaryXAxis.labelIntersectAction = "rotate45";
                    if (model.primaryXAxis.title)
                        model.primaryXAxis.title.text = "";
                    if (model.primaryYAxis.title)
                        model.primaryYAxis.title.text = "";
                    model.primaryXAxis.edgeLabelPlacement = "hide";
                    model.primaryYAxis.labelIntersectAction = "rotate45";
                    model.primaryYAxis.edgeLabelPlacement = "hide";
                }
                var theme = window.themeStyle + window.themeColor + window.themeVarient;
                if (theme) {
                    switch (theme) {
                        case "flatdark":
                        case "flatazuredark":
                        case "flatlimedark":
                        case "flatsaffrondark":
                            theme = "flatdark";
                            break;
                        case "gradientlight":
                        case "gradientazurelight":
                        case "gradientlimelight":
                        case "gradientsaffronlight":
                            theme = "gradientlight";
                            break;
                        case "gradientdark":
                        case "gradientazuredark":
                        case "gradientlimedark":
                        case "gradientsaffrondark":
                            theme = "gradientdark";
                            break;
                        case "flatbootstraplight":
                            theme = "bootstrap";
                            break;
                        case "flathigh-contrast-01dark":
                        case "flathigh-contrast-02dark":
                            theme = "high-contrast-01";
                            break;
                        case "flatmateriallight":
                        case "flatoffice-365light":
                            theme = "material";
                            break;

                        default:
                            theme = "flatlight";
                            break;
                    }
                    sender.model.theme = theme;                    
                }
            },
            title: { text: 'Efficiency of oil-fired power production' },
            size: { height: "600" },
            legend: { visible: true},
			load:"loadTheme"
        });
    });
}


/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module circulargaugecomponent {
    $(function () {
        var circularsample = new ej.datavisualization.CircularGauge($("#CircularGauge"), {
            enableAnimation: false,
            isResponsive: true,
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
                    width: 7
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
            }]	
        });
    });
}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ColorPickerComponent {
    $(function () {
        var colorSample = new ej.ColorPicker($("#colorpick"), {
            value: "#278787"
        });
    });
}

/// <reference path="../tsfiles/jquery.d.ts" />
 /// <reference path="../tsfiles/ej.web.all.d.ts" />\

module ComboBoxComponent{
    var BikeList = [
        { empid: "bk1", text: "Apache RTR" }, { empid: "bk2", text: "CBR 150-R" }, { empid: "bk3", text: "CBZ Xtreme" },
        { empid: "bk4", text: "Discover" }, { empid: "bk5", text: "Dazzler" }, { empid: "bk6", text: "Flame" },
        { empid: "bk7", text: "Fazzer" }, { empid: "bk8", text: "FZ-S" }, { empid: "bk9", text: "Pulsar" },
        { empid: "bk10", text: "Shine" }, { empid: "bk11", text: "R15" }, { empid: "bk12", text: "Unicorn" }
    ];
    $(function () {        
        var comboboxInstance =new ej.ComboBox($("#selectCar"), {        
            width: "100%",
            placeholder: "Select a Bike",
			fields: { text: "text", value: "empid" },
            dataSource: BikeList,
            autofill: true
        });  
    });
}


/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module DatePickerComponent {
    $(function () {
        var dateSample = new ej.DatePicker($("#datepick"), {
            width: "100%"
        });
    });
}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module DateTimePickerComponent {
    $(function () {
        var datetimeSample = new ej.DateRangePicker($("#daterangepick"), {
            width: "100%"
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module DateTimePickerComponent {
    $(function () {
        var datetimeSample = new ej.DateTimePicker($("#datetimepick"), {
            width: "100%"
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

$(function () {
    var diagram = new ej.datavisualization.Diagram($("#diagram"), {
        width: "1000px",
        height: "600px",
        pageSettings: {
            //Sets page size
            pageHeight: 500,
            pageWidth: 500,
            //Customizes the appearance of page
            pageBorderWidth: 4,
            pageBackgroundColor: "white",
            pageBorderColor: "lightgray",
            pageMargin: 25,
            showPageBreak: true,
            multiplePage: true,
            pageOrientation: ej.datavisualization.Diagram.PageOrientations.Portrait
        },
        scrollSettings: {
            horizontalOffset: 0,
            verticalOffset: 0
        },
        snapSettings: {
            snapConstraints: ej.datavisualization.Diagram.SnapConstraints.ShowLines
        },
        nodes: [
            createNode({ name: "NewIdea", width: 150, height: 60, offsetX: 300, offsetY: 60, labels: [createLabel({ "text": "New idea identified" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Terminator }),
            createNode({ name: "Meeting", width: 150, height: 60, offsetX: 300, offsetY: 155, labels: [createLabel({ "text": "Meeting with board" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Process }),
            createNode({
                name: "BoardDecision", width: 150, height: 110, offsetX: 300, offsetY: 280, labels: [createLabel({ text: "Board decides \nwhether \nto proceed", wrapText: "true", "margin": { left: 20, top: 0, right: 20, bottom: 0 } })],
                type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Decision
            }),
            createNode({ name: "Project", width: 150, height: 100, offsetX: 300, offsetY: 430, labels: [createLabel({ "text": "Find Project \nmanager" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Decision }),
            createNode({
                name: "End", width: 150, height: 60, offsetX: 300, offsetY: 555, labels: [createLabel({ "text": "Implement and Deliver" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Process }),
            createNode({ name: "Decision", width: 250, height: 60, offsetX: 550, offsetY: 60, labels: [createLabel({ "text": "Decision Process for new software ideas" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Card, fillColor: "#858585", borderColor: "#858585" }),
            createNode({ name: "Reject", width: 150, height: 60, offsetX: 550, offsetY: 285, labels: [createLabel({ "text": "Reject and write report" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Process }),
            createNode({ name: "Resources", width: 150, height: 60, offsetX: 550, offsetY: 430, labels: [createLabel({ "text": "Hire new resources" })], type: "flow", shape: ej.datavisualization.Diagram.FlowShapes.Process })
        ],
        connectors: [
            createConnector({ name: "connector1", sourceNode: "NewIdea", targetNode: "Meeting" }),
            createConnector({ name: "connector2", sourceNode: "Meeting", targetNode: "BoardDecision" }),
            createConnector({ name: "connector3", sourceNode: "BoardDecision", targetNode: "Project", labels: [createLabel({ "text": "Yes" })] }),
            createConnector({ name: "connector4", sourceNode: "Project", targetNode: "End", labels: [createLabel({ "text": "Yes" })] }),
            createConnector({ name: "connector5", sourceNode: "BoardDecision", targetNode: "Reject", labels: [createLabel({ "text": "No" })] }),
            createConnector({ name: "connector6", sourceNode: "Project", targetNode: "Resources", labels: [createLabel({ "text": "No" })] })
        ]
    });
    
});

function createNode(option: ej.datavisualization.Diagram.Node) {
    if (!option.fillColor) {
        option.borderColor = "#1BA0E2";
        option.fillColor = "#1BA0E2";
    }
    option.labels[0].fontColor = "white";
    return option;
}

function createConnector(option: ej.datavisualization.Diagram.Connector) {
    option.targetDecorator = { shape: ej.datavisualization.Diagram.DecoratorShapes.Arrow, borderColor: "#606060", width: 10, height: 10 };
    option.lineColor = "#606060";
    if (option.labels && option.labels.length > 0) {
        option.labels[0].fillColor = "white";
    }
    return option;
}

function createLabel(options : any) {
    return options;
}
/// <reference path="../tsfiles/jquery.d.ts" />
 /// <reference path="../tsfiles/ej.web.all.d.ts" />\

module DialogComponent {
    $(function () {
        var dialogInstance = new ej.Dialog($("#basicDialog"), {
            width: 550,
            minWidth: 310,
            minHeight: 215,
			target:".control",
            close:()=>{
			$("#btnOpen").show();}
        });
        var btnInstance = new ej.Button($("#btnOpen"), {
            size: "medium",
            click: ()=>{
			$("#btnOpen").hide();
        $("#basicDialog").ejDialog("open");},
            type: "button",
            height: 30,
            width: 150
        });
    });
}


/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
module digitalgaugecomponent {
    $(function () {
        var digitalgaugesample = new ej.datavisualization.DigitalGauge($("#DigitalGauge"), {
            width: 525,
            height: 305,
            isResponsive: true,
            items: [{
                segmentSettings: {
                    width: 1,
                    spacing: 0,
                    color: "#8c8c8c"
                },
                characterSettings: {
                    opacity: 0.8,
                },
                value: "Syncfusion",
                position: { x: 52, y: 52 }
            }]
        });
    });
}


		
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module DropDownListComponent {
    var BikeList = [
        { empid: "bk1", text: "Apache RTR" }, { empid: "bk2", text: "CBR 150-R" }, { empid: "bk3", text: "CBZ Xtreme" },
        { empid: "bk4", text: "Discover" }, { empid: "bk5", text: "Dazzler" }, { empid: "bk6", text: "Flame" },
        { empid: "bk7", text: "Fazzer" }, { empid: "bk8", text: "FZ-S" }, { empid: "bk9", text: "Pulsar" },
        { empid: "bk10", text: "Shine" }, { empid: "bk11", text: "R15" }, { empid: "bk12", text: "Unicorn" }
    ];
    $(function () {
        var sample = new ej.DropDownList($("#bikeList"),{
            dataSource: BikeList,
            width: "100%",
            watermarkText: "Select a bike",
            fields: { id: "empid", text: "text", value: "text" },
            enableFilterSearch: true,
            caseSensitiveSearch: true,
            enableIncrementalSearch: true,
            enablePopupResize: true, 
            delimiterChar: ";",
            multiSelectMode: ej.MultiSelectMode.Delimiter,
            maxPopupHeight: "300px",
            minPopupHeight: "150px", 
            maxPopupWidth: "500px", 
            minPopupWidth: "350px",
            showCheckbox: true,
            showRoundedCorner: true
        });
    });

}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />



module ExplorerComponent {
    $(function () {
        var file = new ej.FileExplorer($("#fileExplorer"), {
            path: (<any>window).baseurl + "Content/FileBrowser/",
            width: "100%",
            minWidth: "150px",
            layout: "tile",
            isResponsive: true,
            ajaxAction: (<any>window).baseurl + "api/FileExplorer/FileOperations"
        });
    });
}


/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
module GanttComponent {
     $(function () {
         var ganttInstance = new ej.Gantt($("#GanttContainer"), {
        dataSource: (<any>window).projectData,
        allowColumnResize: true,
        allowSorting: true,
        allowSelection: true,       
        enableContextMenu: true,
        taskIdMapping: "taskID",
        allowDragAndDrop: true,
        taskNameMapping: "taskName",
        startDateMapping: "startDate",
        showColumnChooser: true,
        showColumnOptions: true,
        progressMapping: "progress",
        durationMapping: "duration",
        endDateMapping: "endDate",
        childMapping: "subtasks",
        scheduleStartDate: "02/01/2014",
        scheduleEndDate: "04/09/2014",
        //Resources mapping
        resourceInfoMapping: "resourceId",
        resourceNameMapping: "resourceName",
        resourceIdMapping: "resourceId",
        resources: (<any>window).projectResources,
        predecessorMapping: "predecessor",
        showResourceNames: true,
        toolbarSettings: {
            showToolbar: true,
            toolbarItems: ["add","edit","delete","update","cancel","indent","outdent","expandAll","collapseAll","search"]
        },
        editSettings: {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            allowIndent: true,
            editMode: "cellEditing"
        },
        sizeSettings: {
            width: "100%",
            height: "100%"
        },
        dragTooltip: { showTooltip: true },
        showGridCellTooltip: true,
        treeColumnIndex: 1,
        isResponsive: true,
    });
}); 
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module GridComponent {
    $(function () {
        var gridInstance = new ej.Grid($("#Grid"), {
            dataSource: (<any>window).gridData,
            allowGrouping: true,
            allowSorting: true,
            allowMultiSorting: true,
            enableAltRow: true,
            allowPaging: true,
            allowReordering: true,
            allowResizing: true,
            allowFiltering: true,
            allowScrolling: true,
            enableRowHover: true,
            selectionType: "multiple",
            selectionSettings: { enableToggle: true, selectionMode: ["row", "cell", "column"] },
            allowKeyboardNavigation: true,
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, allowEditOnDblClick: true, showDeleteConfirmDialog: true },
            toolbarSettings: { showToolbar: true, toolbarItems: ["add", "edit", "delete", "update", "cancel", "search"] },
            columns: [
                { field: "OrderID", headerText: "Order ID", isPrimaryKey: true, width: 75, textAlign: ej.TextAlign.Right },
                { field: "CustomerID", headerText: "Customer ID", editType: ej.Grid.EditingType.String, width: 80 },
                { field: "EmployeeID", headerText: "Employee ID", width: 75, editType: ej.Grid.EditingType.Dropdown, textAlign: ej.TextAlign.Right, priority: 4 },
                { field: "Freight", width: 75, format: "{0:C}", editType: ej.Grid.EditingType.Numeric, textAlign: ej.TextAlign.Right, priority: 3 },
                { field: "OrderDate", headerText: "Order Date", width: 80, format: "{0:MM/dd/yyyy}", textAlign: ej.TextAlign.Right, priority: 2 },
                { field: "ShipCity", headerText: "Ship City", editType: ej.Grid.EditingType.Dropdown, width: 110, priority: 2 }
            ],
            isResponsive: true,
            minWidth: 700,
            showSummary: true,
            summaryRows: [{ title: "Sum", summaryColumns: [{ summaryType: ej.Grid.SummaryType.Sum, displayColumn: "Freight", dataMember: "Freight", format: "{0:C2}" }] }]
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

var columns = ["Vegie-spread", "Tofuaa", "Alice Mutton", "Konbu", "Fløtemysost"]
var itemSource: any[] = [];
for (var i = 0; i < columns.length; i++) {
    for (var j = 0; j < 6; j++) {
        var value = Math.floor((Math.random() * 100) + 1);
        itemSource.push({ ProductName: columns[i], Year: "Y" + (2011 + j), Value: value })
    }
}

$(function () {
    var heatmap = new ej.datavisualization.HeatMap($("#heatmap"), {
        colorMappingCollection: [
            { value: 0, color: "#8ec8f8", label: { text: "0" } },
            { value: 100, color: "#0d47a1", label: { text: "100" } }
        ],
        isResponsive: true,
        itemsSource: itemSource,
        width: "100%",
        itemsMapping: {
            column: { propertyName: "ProductName", displayName: "Product Name" },
            row: { propertyName: "Year", displayName: "Year" },
            value: { propertyName: "Value" },
            columnMapping: [
                { "propertyName": columns[0], "displayName": columns[0] },
                { "propertyName": columns[1], "displayName": columns[1] },
                { "propertyName": columns[2], "displayName": columns[2] },
                { "propertyName": columns[3], "displayName": columns[3] },
                { "propertyName": columns[4], "displayName": columns[4] },
                { "propertyName": columns[5], "displayName": columns[5] }
            ],
            headerMapping: { propertyName: "Year", displayName: "Year", columnStyle: { width: 105, textAlign: "right" } },
        },
        legendCollection: ["heatmap_legend"]
    });
    var heatmaplegend = new ej.datavisualization.HeatMapLegend($("#heatmap_legend"), {
        colorMappingCollection: [
            { value: 0, color: "#8ec8f8", label: { text: "0" } },
            { value: 100, color: "#0d47a1", label: { text: "100" } }
        ],
        height: "50px",
        width: "75%",
        isResponsive: true
    });
});

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

declare var window:myWindow;
export interface myWindow extends Window{
kanbanData:any;
}
module KanbanComponent {
    $(function () {
        var sample = new ej.Kanban($("#Kanban"), {
            dataSource: new ej.DataManager(<any>window["kanbanData"]).executeLocal(new ej.Query().take(20)),
            columns: [
                { headerText: "Backlog", key: "Open" },
                { headerText: "In Progress", key: "InProgress" },
                { headerText: "Testing", key: "Testing" },
                { headerText: "Done", key: "Close" }
            ],
            keyField: "Status",
            allowTitle: true,
            fields: {
                content: "Summary",
                primaryKey: "Id",
                imageUrl: "ImgUrl"
            },
            allowSelection: false
        });
    });
}

 
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
module lineargaugecomponent {
    $(function () {
        var linearsample = new ej.datavisualization.LinearGauge($("#LinearGauge"), {
            labelColor: "#8c8c8c", width: 500,
            isResponsive: true, enableAnimation: false,
            scales: [{
                width: 4, border: { color: "transparent", width: 0 }, showBarPointers: false, showRanges: true, length: 310,
                position: { x: 52, y: 50 }, markerPointers: [{
                    value: 50, length: 10, width: 10, backgroundColor: "#4D4D4D", border: { color: "#4D4D4D" }
                }],
                labels: [{ font: { size: "11px", fontFamily: "Segoe UI", fontStyle: "bold" }, distanceFromScale: { x: -13 } }],
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
            }]		
        });
    });
}

	
/// <reference path="../tsfiles/jquery.d.ts" />
 /// <reference path="../tsfiles/ej.web.all.d.ts" />\

module ListBoxComponent {
    $(function () {
        var listboxInstance = new ej.ListBox($("#selectcar"), {
            showCheckbox: true
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
 /// <reference path="../tsfiles/ej.web.all.d.ts" />\

module ListviewComponent {
    $(function () {
        var listviewInstance = new ej.ListView($("#defaultlistview"), {
            enableCheckMark: true, 
		    width: 400
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
var world_map=
    {
        "type": "FeatureCollection",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": [
            { "type": "Feature", "properties": { "admin": "Afghanistan", "name": "Afghanistan", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[61.21081709172573, 35.650072333309218], [62.230651483005879, 35.270663967422287], [62.984662306576588, 35.404040839167614], [63.193538445900337, 35.857165635718907], [63.982895949158696, 36.007957465146596], [64.546479119733888, 36.31207326918426], [64.746105177677393, 37.111817735333297], [65.588947788357828, 37.305216783185628], [65.745630731066811, 37.661164048812061], [66.217384881459324, 37.393790188133913], [66.518606805288655, 37.362784328758785], [67.075782098259609, 37.35614390720928], [67.829999627559502, 37.144994004864678], [68.135562371701369, 37.023115139304302], [68.859445835245921, 37.344335842430588], [69.196272820924364, 37.15114350030742], [69.518785434857946, 37.608996690413413], [70.116578403610319, 37.588222764632086], [70.270574171840124, 37.73516469985401], [70.376304152309274, 38.138395901027515], [70.806820509732873, 38.486281643216408], [71.348131137990251, 38.258905341132156], [71.239403924448155, 37.953265082341879], [71.541917759084768, 37.905774441065631], [71.448693475230229, 37.065644843080513], [71.84463829945058, 36.738171291646914], [72.193040805962383, 36.94828766534566], [72.636889682917271, 37.047558091778349], [73.260055779924983, 37.495256862938994], [73.948695916646486, 37.421566270490786], [74.980002475895404, 37.419990139305888], [75.158027785140902, 37.13303091078911], [74.575892775372964, 37.02084137628345], [74.067551710917812, 36.836175645488446], [72.920024855444453, 36.720007025696312], [71.846291945283909, 36.509942328429851], [71.262348260385735, 36.074387518857797], [71.498767938121077, 35.650563259415996], [71.613076206350698, 35.153203436822857], [71.115018751921625, 34.733125718722228], [71.156773309213449, 34.348911444632144], [70.881803012988385, 33.988855902638512], [69.93054324735958, 34.020120144175102], [70.323594191371583, 33.358532619758385], [69.687147251264847, 33.105498969041228], [69.262522007122541, 32.501944078088293], [69.317764113242546, 31.901412258424436], [68.926676873657655, 31.620189113892064], [68.556932000609308, 31.713310044882011], [67.792689243444769, 31.582930406209623], [67.683393589147457, 31.303154201781414], [66.938891229118454, 31.304911200479346], [66.38145755398601, 30.738899237586448], [66.346472609324408, 29.88794342703617], [65.046862013616092, 29.472180691031902], [64.350418735618504, 29.560030625928089], [64.148002150331237, 29.340819200145965], [63.550260858011164, 29.468330796826162], [62.549856805272775, 29.318572496044304], [60.874248488208778, 29.829238999952604], [61.78122155136343, 30.735850328081231], [61.699314406180811, 31.379506130492661], [60.941944614511115, 31.548074652628745], [60.863654819588952, 32.182919623334421], [60.536077915290761, 32.981268825811561], [60.963700392505991, 33.528832302376252], [60.528429803311575, 33.676446031217999], [60.80319339380744, 34.404101874319856], [61.21081709172573, 35.650072333309218]]] } },
            { "type": "Feature", "properties": { "admin": "Angola", "name": "Angola", "continent": "Africa" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[16.326528354567042, -5.877470391466217], [16.573179965896141, -6.622644545115092], [16.860190870845226, -7.222297865429978], [17.089995965247166, -7.545688978712474], [17.472970004962288, -8.068551120641656], [18.134221632569048, -7.987677504104865], [18.464175652752683, -7.847014255406475], [19.016751743249664, -7.988245944860138], [19.166613396896079, -7.738183688999724], [19.417502475673214, -7.155428562044277], [20.037723016040214, -7.116361179231658], [20.091621534920616, -6.943090101756949], [20.60182295093832, -6.939317722199688], [20.514748162526526, -7.299605808138663], [21.728110792739752, -7.290872491081315], [21.74645592620336, -7.920084730667113], [21.949130893652033, -8.305900974158304], [21.80180138518795, -8.908706556842985], [21.875181919042397, -9.523707777548564], [22.208753289486417, -9.894796237836529], [22.155268182064326, -11.084801120653777], [22.402798292742428, -10.99307545333569], [22.837345411884762, -11.017621758674334], [23.456790805767461, -10.867863457892481], [23.912215203555743, -10.926826267137541], [24.017893507592614, -11.237298272347115], [23.904153680118235, -11.722281589406332], [24.079905226342895, -12.191296888887305], [23.930922072045373, -12.565847670138821], [24.0161365088947, -12.91104623784855], [21.933886346125941, -12.898437188369353], [21.887842644953871, -16.080310153876891], [22.562478468524283, -16.898451429921831], [23.215048455506086, -17.523116143465952], [21.377176141045592, -17.930636488519706], [18.956186964603628, -17.789094740472233], [18.263309360434217, -17.309950860262003], [14.209706658595049, -17.353100681225708], [14.058501417709035, -17.423380629142653], [13.462362094789963, -16.971211846588741], [12.814081251688405, -16.941342868724075], [12.21546146001938, -17.111668389558059], [11.734198846085146, -17.301889336824498], [11.640096062881609, -16.673142185129205], [11.778537224991563, -15.793816013250687], [12.123580763404444, -14.878316338767927], [12.175618930722264, -14.449143568583889], [12.500095249083014, -13.547699883684398], [12.738478631245439, -13.137905775609934], [13.312913852601834, -12.483630466362511], [13.633721144269824, -12.038644707897189], [13.738727654686924, -11.297863050993142], [13.686379428775293, -10.73107594161584], [13.38732791510216, -10.373578383020726], [13.120987583069873, -9.766897067914112], [12.875369500386567, -9.166933689005488], [12.929061313537797, -8.959091078327573], [13.23643273280987, -8.56262948978434], [12.933040398824314, -7.596538588087752], [12.728298374083916, -6.927122084178803], [12.227347039446441, -6.294447523629372], [12.322431674863562, -6.100092461779651], [12.735171339578695, -5.965682061388476], [13.024869419006988, -5.984388929878106], [13.375597364971892, -5.864241224799555], [16.326528354567042, -5.877470391466217]]], [[[12.436688266660919, -5.684303887559223], [12.182336866920277, -5.789930515163801], [11.914963006242115, -5.037986748884733], [12.318607618873923, -4.606230157086158], [12.620759718484548, -4.438023369976121], [12.995517205465202, -4.781103203961918], [12.631611769265842, -4.991271254092935], [12.468004184629759, -5.248361504744991], [12.436688266660919, -5.684303887559223]]]] } },
            { "type": "Feature", "properties": { "admin": "Albania", "name": "Albania", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[20.590247430104906, 41.855404161133592], [20.463175083099195, 41.515089016275333], [20.605181919037356, 41.086226304685219], [21.020040317476397, 40.842726955725873], [20.99998986174722, 40.580003973953964], [20.67499677906363, 40.43499990494302], [20.61500044117275, 40.110006822259365], [20.150015903410516, 39.624997666983965], [19.980000441170144, 39.694993394523401], [19.9600016618732, 39.915005805006039], [19.40608198413673, 40.250773423822459], [19.319058872157139, 40.727230129553554], [19.403549838954287, 41.409565741535445], [19.540027296637099, 41.71998607031275], [19.371768833094958, 41.87754751237064], [19.304486118250786, 42.195745144207812], [19.738051385179627, 42.688247382165564], [19.801613396898681, 42.500093492190835], [20.0707, 42.58863], [20.28375451018189, 42.320259507815074], [20.52295, 42.21787], [20.590247430104906, 41.855404161133592]]] } },
            { "type": "Feature", "properties": { "admin": "United Arab Emirates", "name": "United Arab Emirates", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[51.579518670463258, 24.245497137951102], [51.757440626844172, 24.294072984305462], [51.794389275932865, 24.019826158132499], [52.577080519425593, 24.177439276622703], [53.404006788960139, 24.151316840099167], [54.008000929587574, 24.121757920828212], [54.693023716048614, 24.797892360935084], [55.439024692614126, 25.439145209244934], [56.070820753814544, 26.055464178973978], [56.261041701080948, 25.714606431576762], [56.396847365143991, 24.924732163995483], [55.886232537667993, 24.92083059335744], [55.804118686756212, 24.269604193615258], [55.981213820220454, 24.130542914317822], [55.528631626208231, 23.933604030853498], [55.525841098864461, 23.524869289640929], [55.234489373602869, 23.110992743415316], [55.208341098863187, 22.708329982997039], [55.006803012924898, 22.496947536707129], [52.000733270074321, 23.001154486578937], [51.617707553926969, 24.014219265228824], [51.579518670463258, 24.245497137951102]]] } },
            { "type": "Feature", "properties": { "admin": "Argentina", "name": "Argentina", "continent": "South America" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-65.5, -55.2], [-66.45, -55.25], [-66.95992, -54.89681], [-67.56244, -54.87001], [-68.63335, -54.8695], [-68.634010227583147, -52.636370458874453], [-68.25, -53.1], [-67.75, -53.85], [-66.45, -54.45], [-65.05, -54.7], [-65.5, -55.2]]], [[[-64.964892137294569, -22.075861504812348], [-64.377021043542257, -22.79809132252354], [-63.986838141522462, -21.993644301035953], [-62.84646847192154, -22.034985446869452], [-62.685057135657885, -22.249029229422401], [-60.846564704009928, -23.880712579038299], [-60.028966030503973, -24.032796319273238], [-58.807128465394939, -24.771459242453268], [-57.777217169817952, -25.162339776309032], [-57.633660040911124, -25.603656508081666], [-58.618173590719707, -27.123718763947117], [-57.609759690976134, -27.395898532828419], [-56.486701626192989, -27.548499037386243], [-55.695845506398186, -27.387837009390815], [-54.788794928595038, -26.621785577096087], [-54.625290696823541, -25.739255466415479], [-54.130049607954412, -25.547639255477243], [-53.628348965048716, -26.12486500417743], [-53.648735317587885, -26.923472588816104], [-54.490725267135517, -27.474756768505767], [-55.162286342984586, -27.881915378533414], [-56.290899624239088, -28.852760512000849], [-57.62513342958291, -30.21629485445424], [-57.874937303281897, -31.016556084926158], [-58.14244035504074, -32.044503676076182], [-58.132647671121404, -33.040566908502008], [-58.349611172098818, -33.263188978815428], [-58.427074144104367, -33.909454441057541], [-58.495442064026541, -34.4314897600701], [-57.225829637263629, -35.288026625307886], [-57.362358771378737, -35.977390232081497], [-56.737487352105447, -36.413125909166574], [-56.788285285048339, -36.901571547189327], [-57.749156867083421, -38.183870538079901], [-59.231857062401865, -38.720220228837199], [-61.2374452378656, -38.92842457454114], [-62.335956997310134, -38.827707208004362], [-62.125763108962914, -39.424104913084868], [-62.33053097191943, -40.172586358400316], [-62.145994432205228, -40.676896661136723], [-62.74580278181697, -41.028761488612083], [-63.770494757732514, -41.166789239263657], [-64.732089809819698, -40.802677097335128], [-65.118035244391578, -41.064314874028874], [-64.97856055363583, -42.058000990569312], [-64.303407965742466, -42.359016208669495], [-63.755947842042339, -42.043686618824495], [-63.458059048095883, -42.563138116222355], [-64.378803880456289, -42.873558444999638], [-65.181803961839691, -43.495380954767782], [-65.328823411710133, -44.501366062193689], [-65.565268927661592, -45.03678557716978], [-66.509965786389344, -45.039627780945843], [-67.293793911392427, -45.551896254255183], [-67.580546434180079, -46.301772963242527], [-66.597066413017259, -47.033924655953804], [-65.641026577401433, -47.23613453551188], [-65.98508826360073, -48.133289076531128], [-67.166178961847649, -48.697337334996931], [-67.816087612566449, -49.869668877970412], [-68.728745083273154, -50.26421843851886], [-69.138539191347789, -50.732510267947788], [-68.815561489523517, -51.771104011594097], [-68.149994879820397, -52.349983406127699], [-68.571545376241332, -52.299443855346247], [-69.498362189396076, -52.142760912637236], [-71.914803839796321, -52.009022305865912], [-72.329403856074023, -51.425956312872394], [-72.309973517532342, -50.677009779666342], [-72.975746832964617, -50.741450290734299], [-73.328050910114456, -50.378785088909865], [-73.415435757120022, -49.318436374712952], [-72.648247443314929, -48.878618259476774], [-72.331160854771937, -48.244238376661819], [-72.44735531278026, -47.738532810253517], [-71.917258470330196, -46.884838148791786], [-71.552009446891233, -45.560732924177117], [-71.659315558545316, -44.973688653341434], [-71.222778896759721, -44.784242852559409], [-71.329800788036195, -44.407521661151677], [-71.793622606071935, -44.207172133156099], [-71.464056159130493, -43.787611179378324], [-71.915423956983901, -43.408564548517404], [-72.148898078078517, -42.254888197601375], [-71.746803758415453, -42.051386407235988], [-71.915734015577542, -40.832339369470716], [-71.680761277946445, -39.808164157878061], [-71.413516608349042, -38.916022230791107], [-70.814664272734703, -38.552995293940732], [-71.118625047475419, -37.576827487947192], [-71.121880662709771, -36.65812387466233], [-70.364769253201658, -36.005088799789931], [-70.388049485949082, -35.169687595359441], [-69.817309129501453, -34.193571465798279], [-69.814776984319209, -33.273886000299839], [-70.074399380153622, -33.09120981214803], [-70.535068935819439, -31.365010267870279], [-69.919008348251921, -30.336339206668306], [-70.013550381129861, -29.367922865518544], [-69.656130337183143, -28.459141127233686], [-69.001234910748266, -27.521213881136127], [-68.295541551370391, -26.899339694935787], [-68.594799770772667, -26.50690886811126], [-68.386001146097342, -26.185016371365229], [-68.417652960876111, -24.518554782816874], [-67.328442959244128, -24.025303236590908], [-66.985233934177629, -22.986348565362825], [-67.106673550063604, -22.735924574476392], [-66.273339402924833, -21.832310479420677], [-64.964892137294569, -22.075861504812348]]]] } },
            { "type": "Feature", "properties": { "admin": "Armenia", "name": "Armenia", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[43.582745802592726, 41.09214325618256], [44.972480096218071, 41.248128567055588], [45.179495883979335, 40.985353908851401], [45.560351189970433, 40.812289537105919], [45.359174839058156, 40.561503811193447], [45.891907179555076, 40.218475653639992], [45.610012241402913, 39.899993801425175], [46.034534132680662, 39.628020738273058], [46.483498976432443, 39.464154771475528], [46.505719842317966, 38.770605373686287], [46.143623081248812, 38.74120148371221], [45.735379266143006, 39.319719143219736], [45.739978468616975, 39.473999131827114], [45.298144972521456, 39.471751207022422], [45.00198733905674, 39.740003567049548], [44.793989699081934, 39.713002631177041], [44.400008579288695, 40.005000311842267], [43.656436395040934, 40.253563951166178], [43.752657911968399, 40.740200914058754], [43.582745802592726, 41.09214325618256]]] } },
            { "type": "Feature", "properties": { "admin": "French Southern and Antarctic Lands", "name": "Fr. S. Antarctic Lands", "continent": "Seven seas (open ocean)" }, "geometry": { "type": "Polygon", "coordinates": [[[68.935, -48.625], [69.58, -48.94], [70.525, -49.065], [70.56, -49.255], [70.28, -49.71], [68.745, -49.775], [68.72, -49.2425], [68.8675, -48.83], [68.935, -48.625]]] } },
            { "type": "Feature", "properties": { "admin": "Australia", "name": "Australia", "continent": "Oceania" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[145.397978143494782, -40.792548516605883], [146.364120721623692, -41.137695407883335], [146.908583612250823, -41.000546156580668], [147.689259474884125, -40.808258152022681], [148.289067824495987, -40.875437514002122], [148.359864536735785, -42.062445163746439], [148.017301467073082, -42.40702361426861], [147.914051955353784, -43.211522312188485], [147.564564243763982, -42.937688897473855], [146.87034305235494, -43.634597263362082], [146.663327264593647, -43.580853773778543], [146.048377720320389, -43.54974456153888], [145.431929559510536, -42.693776137056268], [145.295090366801674, -42.03360971452755], [144.7180713238306, -41.162551771815707], [144.743754510679622, -40.703975111657705], [145.397978143494782, -40.792548516605883]]], [[[143.561811151299935, -13.763655694232209], [143.922099237238882, -14.548310642152], [144.563713820574804, -14.171176039285879], [144.894908075133515, -14.594457696188622], [145.374723748963419, -14.984976495018284], [145.271991001567244, -15.428205254785691], [145.48525963763575, -16.285672295804769], [145.637033319276952, -16.784918308176611], [145.888904250267672, -16.906926364817647], [146.160308872664473, -17.76165455492524], [146.063673944278662, -18.280072523677315], [146.387478469019584, -18.958274021075905], [147.471081577747896, -19.480722751546676], [148.177601760042478, -19.955939222902767], [148.848413527623222, -20.391209812097252], [148.717465448195583, -20.633468926681513], [149.289420200802056, -21.260510756111096], [149.678337030230637, -22.342511895438388], [150.07738244038859, -22.122783705333315], [150.482939081015161, -22.556142266533012], [150.727265252891158, -22.402404880464655], [150.899554478152254, -23.462236830338679], [151.609175246384211, -24.076256198830755], [152.07353966695905, -24.45788665130619], [152.855197381805908, -25.267501316023008], [153.136162144176751, -26.071173191026187], [153.161948683890358, -26.641319268502439], [153.09290897034856, -27.260299574494503], [153.569469028944184, -28.110066827102099], [153.512108189100218, -28.995077406532751], [153.339095493787056, -29.458201592732443], [153.069241164358857, -30.350240166954809], [153.089601678681788, -30.923641859665445], [152.891577590139377, -31.640445651985949], [152.450002476205327, -32.550002536755237], [151.709117466436766, -33.041342054986337], [151.343971795862387, -33.816023451473846], [151.010555454715103, -34.310360202777879], [150.714139439089024, -35.173459974916803], [150.328219842733233, -35.671879164371923], [150.075212030232251, -36.420205580390508], [149.946124302367139, -37.109052422841224], [149.997283970336127, -37.425260512035123], [149.423882277625523, -37.772681166333463], [148.304622430615893, -37.809061374666875], [147.38173302631526, -38.219217217767543], [146.922122837511324, -38.606532077795116], [146.317921991154776, -39.035756524411433], [145.489652134380549, -38.593767999019043], [144.876976353128157, -38.41744801203911], [145.032212355732952, -37.896187839510972], [144.485682407814011, -38.085323581699257], [143.609973586196077, -38.809465427405321], [142.745426873952965, -38.538267510737519], [142.17832970598198, -38.380034275059835], [141.606581659104677, -38.308514092767872], [140.638578729413211, -38.019332777662541], [139.992158237874321, -37.402936293285094], [139.806588169514043, -36.643602797188272], [139.574147577065219, -36.138362318670666], [139.082808058834075, -35.732754001611774], [138.120747918856296, -35.612296237939397], [138.449461704664998, -35.127261244447887], [138.207564325106659, -34.384722588845925], [137.719170363516128, -35.07682504653102], [136.829405552314711, -35.260534763328614], [137.352371047108477, -34.707338555644093], [137.503886346588331, -34.130267836240769], [137.890116001537649, -33.640478610978327], [137.810327590079112, -32.900007012668105], [136.996837192940347, -33.752771498348629], [136.372069126531642, -34.094766127256186], [135.98904341038434, -34.89011809666048], [135.208212518454104, -34.478670342752601], [135.239218377829161, -33.947953383114971], [134.613416782774607, -33.222778008763136], [134.085903761939107, -32.848072198214759], [134.273902622617015, -32.617233575166949], [132.990776808809812, -32.011224053680188], [132.288080682504869, -31.982646986622761], [131.326330601120901, -31.495803318001041], [129.535793898639668, -31.590422865527476], [128.240937534702198, -31.948488864877849], [127.102867466338282, -32.282266941051041], [126.148713820501129, -32.2159660784206], [125.088623488465586, -32.728751316052829], [124.22164798390493, -32.959486586236061], [124.028946567888511, -33.483847344701708], [123.65966678273071, -33.890179131812722], [122.811036411633609, -33.914467054989835], [122.18306440642283, -34.003402194964217], [121.299190708502579, -33.821036065406126], [120.580268182458113, -33.930176690406618], [119.893695103028222, -33.976065362281808], [119.298899367348781, -34.50936614353396], [119.007340936357977, -34.464149265278529], [118.505717808100769, -34.746819349915093], [118.024971958489516, -35.064732761374707], [117.295507440257438, -35.025458672832862], [116.62510908413492, -35.025096937806829], [115.564346958479689, -34.386427911111547], [115.026808709779516, -34.196517022438918], [115.048616164206763, -33.623425388322026], [115.545123325667078, -33.487257989232951], [115.714673700016661, -33.259571628554944], [115.679378696761376, -32.900368747694124], [115.801645135563959, -32.205062351207026], [115.689610630355105, -31.612437025683782], [115.160909051576937, -30.601594333622455], [114.99704308477942, -30.030724786094162], [115.040037876446249, -29.461095472940794], [114.64197431850198, -28.810230808224706], [114.61649783738217, -28.516398614213042], [114.173579136208446, -28.118076674107321], [114.048883905088132, -27.33476531342712], [113.477497593236876, -26.543134047147898], [113.338953078262477, -26.116545098578477], [113.77835778204026, -26.549025160429174], [113.440962355606587, -25.621278171493152], [113.936901076311642, -25.911234633082877], [114.232852004047288, -26.298446140245868], [114.216160516417006, -25.786281019801105], [113.721255324357685, -24.998938897402123], [113.625343866024025, -24.683971042583146], [113.393523390762667, -24.384764499613262], [113.502043898575607, -23.80635019297025], [113.706992629045146, -23.56021534596406], [113.843418410295669, -23.059987481378734], [113.736551548316072, -22.475475355725372], [114.149756300921865, -21.755881036061009], [114.225307244932651, -22.51748829517863], [114.64776207891866, -21.829519952076904], [115.460167270979298, -21.495173435148541], [115.94737267462699, -21.068687839443708], [116.711615431791529, -20.701681817306817], [117.166316359527684, -20.623598728113802], [117.441545037914238, -20.746898695562162], [118.229558953932951, -20.374208265873232], [118.836085239742701, -20.263310642174822], [118.987807244951753, -20.044202569257319], [119.252493931150624, -19.952941989829835], [119.805225050944543, -19.976506442954978], [120.856220330896633, -19.683707777589188], [121.399856398607199, -19.239755547769729], [121.655137974129062, -18.70531788500713], [122.241665480641757, -18.197648614171765], [122.286623976735655, -17.798603204013911], [122.312772251475408, -17.254967136303446], [123.012574497571904, -16.405199883695854], [123.433789097183009, -17.268558037996225], [123.859344517106592, -17.069035332917249], [123.503242222183232, -16.596506036040363], [123.817073195491915, -16.11131601325199], [124.258286574399847, -16.32794361741956], [124.379726190285794, -15.567059828353973], [124.926152785340022, -15.07510019293532], [125.167275018413875, -14.680395603090004], [125.670086704613823, -14.510070082256018], [125.685796340030493, -14.230655612853834], [126.125149367376096, -14.347340996968949], [126.142822707219864, -14.095986830301211], [126.582589146023736, -13.95279143642041], [127.065867140817332, -13.817967624570922], [127.804633416861932, -14.276906019755042], [128.359689976108939, -14.869169610252253], [128.985543247595899, -14.875990899314738], [129.621473423379598, -14.969783623924553], [129.409600050982988, -14.420669854391031], [129.888640578328591, -13.618703301653481], [130.339465773642928, -13.357375583553473], [130.183506300985982, -13.107520033422301], [130.617795037966971, -12.536392103732464], [131.223494500859999, -12.183648776908113], [131.73509118054946, -12.302452894747159], [132.575298293183096, -12.114040622611013], [132.557211541881031, -11.603012383676683], [131.824698114143644, -11.273781833545097], [132.357223748911395, -11.128519382372641], [133.019560581596409, -11.376411228076844], [133.550845981989028, -11.786515394745134], [134.393068475481982, -12.042365411022173], [134.678632440327021, -11.9411829565947], [135.298491245667975, -12.248606052299051], [135.882693312727611, -11.962266940969796], [136.258380975489445, -12.049341729381606], [136.492475213771627, -11.857208754120389], [136.951620314684988, -12.351958916882735], [136.685124953355739, -12.887223402562054], [136.305406528875096, -13.291229750219895], [135.961758254134111, -13.324509372615889], [136.077616815332533, -13.72427825282578], [135.783836297753226, -14.223989353088211], [135.4286641786112, -14.715432224183896], [135.500184360903177, -14.997740573794427], [136.295174595281367, -15.550264987859121], [137.065360142159477, -15.870762220933353], [137.580470819244795, -16.215082289294084], [138.303217401278971, -16.807604261952658], [138.58516401586337, -16.806622409739173], [139.108542922115475, -17.062679131745366], [139.260574985918197, -17.371600843986183], [140.215245396078274, -17.710804945550063], [140.875463495039241, -17.36906869880394], [141.071110467696258, -16.832047214426719], [141.274095493738798, -16.388870131091604], [141.398222284103781, -15.840531508042584], [141.702183058844611, -15.044921156476928], [141.563380161708665, -14.561333103089506], [141.635520461188094, -14.270394789286284], [141.519868605718955, -13.698078301653805], [141.650920038011009, -12.944687595270562], [141.842691278246207, -12.741547539931187], [141.68699018775078, -12.407614434461134], [141.928629185147543, -11.877465915578778], [142.118488397387978, -11.328042087451619], [142.14370649634634, -11.04273650476814], [142.51526004452495, -10.668185723516642], [142.797310011974048, -11.157354831591515], [142.866763136974271, -11.784706719614929], [143.11594689348567, -11.90562957117791], [143.158631626558758, -12.325655612846187], [143.522123651299864, -12.834358412327429], [143.597157830987669, -13.400422051652594], [143.561811151299935, -13.763655694232209]]]] } },
            { "type": "Feature", "properties": { "admin": "Austria", "name": "Austria", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[16.979666782304033, 48.123497015976298], [16.903754103267257, 47.714865627628321], [16.340584344150411, 47.712901923201215], [16.534267612380372, 47.496170966169103], [16.202298211337361, 46.852385972676949], [16.011663852612653, 46.683610744811688], [15.137091912504982, 46.658702704447016], [14.632471551174827, 46.431817328469535], [13.806475457421524, 46.509306138691201], [12.376485223040813, 46.767559109069843], [12.153088006243051, 47.115393174826437], [11.164827915093268, 46.941579494812721], [11.048555942436533, 46.751358547546324], [10.442701450246627, 46.893546250997424], [9.932448357796657, 46.920728054382948], [9.479969516649019, 47.102809963563367], [9.632931756232974, 47.347601223329974], [9.594226108446346, 47.525058091820256], [9.896068149463188, 47.58019684507569], [10.402083774465209, 47.302487697939156], [10.544504021861625, 47.566399237653762], [11.426414015354736, 47.523766181012967], [12.141357456112784, 47.703083401065761], [12.620759718484491, 47.672387600284395], [12.932626987365945, 47.467645575543983], [13.025851271220487, 47.637583523135824], [12.884102817443901, 48.289145819687903], [13.243357374736998, 48.41611481382904], [13.595945672264433, 48.877171942737135], [14.33889773932472, 48.555305284207193], [14.901447381254055, 48.964401760445817], [15.253415561593979, 49.039074205107575], [16.029647251050218, 48.733899034207916], [16.49928266771877, 48.785808010445095], [16.960288120194573, 48.596982326850593], [16.879982944412998, 48.470013332709463], [16.979666782304033, 48.123497015976298]]] } },
            { "type": "Feature", "properties": { "admin": "Azerbaijan", "name": "Azerbaijan", "continent": "Asia" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[45.001987339056789, 39.740003567049591], [45.298144972521435, 39.471751207022422], [45.739978468616997, 39.473999131827149], [45.735379266143092, 39.319719143219785], [46.143623081248812, 38.74120148371221], [45.457721795438729, 38.874139105783108], [44.952688022650264, 39.33576467544642], [44.79398969908199, 39.713002631177027], [45.001987339056789, 39.740003567049591]]], [[[47.373315464066216, 41.219732367511249], [47.81566572448471, 41.151416124021338], [47.987283156126033, 41.405819200194223], [48.584352654826283, 41.808869533854669], [49.110263706260653, 41.282286688800518], [49.618914829309588, 40.572924302729966], [50.084829542853093, 40.526157131505776], [50.392821079312704, 40.256561184239096], [49.569202101444795, 40.176100979160701], [49.395259230350419, 39.39948171646224], [49.2232283872507, 39.04921885838791], [48.856532423707584, 38.815486355131775], [48.883249139202533, 38.320245266262638], [48.634375441284831, 38.270377509100925], [48.010744256386502, 38.794014797514528], [48.355529412637928, 39.288764960276886], [48.060095249225256, 39.582235419262439], [47.685079380083117, 39.508363959301185], [46.505719842317966, 38.770605373686251], [46.483498976432443, 39.464154771475528], [46.034534132680697, 39.628020738273044], [45.610012241402913, 39.899993801425175], [45.891907179555133, 40.21847565363997], [45.359174839058156, 40.561503811193482], [45.560351189970469, 40.812289537105947], [45.179495883979392, 40.98535390885143], [44.972480096218156, 41.248128567055623], [45.217426385281634, 41.411451931314041], [45.962600538930438, 41.123872585609789], [46.501637404166978, 41.064444688474104], [46.637908156120567, 41.181672675128219], [46.145431756378983, 41.72280243587263], [46.404950799348818, 41.860675157227341], [46.686070591016652, 41.827137152669899], [47.373315464066216, 41.219732367511249]]]] } },
            { "type": "Feature", "properties": { "admin": "Burundi", "name": "Burundi", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[29.339997592900342, -4.499983412294092], [29.276383904749046, -3.293907159034063], [29.02492638521678, -2.839257907730157], [29.632176141078585, -2.917857761246096], [29.938359002407935, -2.348486830254238], [30.469696079232978, -2.413857517103458], [30.527677036264457, -2.807631931167534], [30.743012729624692, -3.034284763199686], [30.752262811004943, -3.359329522315569], [30.505559523243559, -3.568567396665364], [30.116332635221166, -4.090137627787242], [29.753512404099919, -4.45238941815328], [29.339997592900342, -4.499983412294092]]] } },
            { "type": "Feature", "properties": { "admin": "Belgium", "name": "Belgium", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[3.314971144228536, 51.345780951536071], [4.047071160507527, 51.267258612668556], [4.973991326526913, 51.475023708698124], [5.60697594567, 51.037298488969768], [6.156658155958779, 50.803721015010574], [6.043073357781109, 50.128051662794221], [5.782417433300905, 50.090327867221205], [5.674051954784828, 49.52948354755749], [4.799221632515809, 49.985373033236371], [4.286022983425084, 49.90749664977254], [3.588184441755685, 50.378992418003563], [3.123251580425801, 50.780363267614561], [2.658422071960274, 50.796848049515731], [2.513573032246142, 51.148506171261815], [3.314971144228536, 51.345780951536071]]] } },
            { "type": "Feature", "properties": { "admin": "Benin", "name": "Benin", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[2.691701694356254, 6.258817246928628], [1.865240512712318, 6.14215770102973], [1.618950636409238, 6.832038072126236], [1.664477573258381, 9.128590399609378], [1.46304284018467, 9.334624335157086], [1.425060662450136, 9.825395412632998], [1.077795037448737, 10.175606594275022], [0.772335646171484, 10.470808213742357], [0.899563022474069, 10.997339382364258], [1.243469679376488, 11.11051076908346], [1.447178175471066, 11.547719224488857], [1.93598554851988, 11.641150214072551], [2.154473504249921, 11.940150051313337], [2.49016360841793, 12.233052069543671], [2.84864301922667, 12.235635891158266], [3.611180454125558, 11.660167141155966], [3.572216424177469, 11.327939357951516], [3.797112257511713, 10.734745591673104], [3.600070021182801, 10.332186184119406], [3.705438266625918, 10.063210354040207], [3.220351596702101, 9.4441525333997], [2.912308383810255, 9.13760793704432], [2.723792758809509, 8.506845404489708], [2.74906253420022, 7.870734361192886], [2.691701694356254, 6.258817246928628]]] } },
            { "type": "Feature", "properties": { "admin": "Burkina Faso", "name": "Burkina Faso", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[-2.827496303712706, 9.642460842319775], [-3.511898972986272, 9.900326239456216], [-3.980449184576684, 9.862344061721698], [-4.330246954760383, 9.610834865757139], [-4.779883592131966, 9.821984768101741], [-4.954653286143098, 10.152713934769732], [-5.404341599946973, 10.370736802609144], [-5.470564947929004, 10.951269842976044], [-5.197842576508648, 11.375145778850136], [-5.220941941743119, 11.713858954307224], [-4.427166103523802, 12.542645575404292], [-4.280405035814879, 13.228443508349738], [-4.006390753587225, 13.472485459848112], [-3.52280270019986, 13.337661647998612], [-3.103706834312759, 13.54126679122859], [-2.967694464520576, 13.798150336151506], [-2.191824510090384, 14.246417548067352], [-2.001035122068771, 14.559008287000887], [-1.066363491205663, 14.973815009007764], [-0.515854458000348, 15.116157741755725], [-0.26625729003058, 14.924308986872147], [0.374892205414682, 14.928908189346128], [0.295646396495101, 14.444234930880651], [0.429927605805517, 13.988733018443922], [0.993045688490071, 13.335749620003821], [1.024103224297477, 12.851825669806573], [2.177107781593775, 12.625017808477532], [2.154473504249921, 11.940150051313337], [1.93598554851988, 11.641150214072551], [1.447178175471066, 11.547719224488857], [1.243469679376488, 11.11051076908346], [0.899563022474069, 10.997339382364258], [0.023802524423701, 11.018681748900802], [-0.438701544588582, 11.09834096927872], [-0.761575893548183, 10.936929633015053], [-1.203357713211431, 11.009819240762736], [-2.94040930827046, 10.962690334512557], [-2.963896246747111, 10.395334784380081], [-2.827496303712706, 9.642460842319775]]] } },
            { "type": "Feature", "properties": { "admin": "Bangladesh", "name": "Bangladesh", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[92.672720981825549, 22.041238918541247], [92.652257114637976, 21.324047552978481], [92.30323449093865, 21.475485337809815], [92.368553501355606, 20.670883287025344], [92.082886183646124, 21.192195135985767], [92.025215285208361, 21.701569729086764], [91.834890985077408, 22.182935695885561], [91.417087029997646, 22.765019029221218], [90.496006300827247, 22.805016587815125], [90.586956821660948, 22.392793687422863], [90.272970819055544, 21.836367702720107], [89.847467075564268, 22.039146023033421], [89.70204959509492, 21.857115790285299], [89.41886274613546, 21.966178900637296], [89.031961297566198, 22.055708319582973], [88.876311883503064, 22.879146429937826], [88.529769728553759, 23.631141872649163], [88.699940220090895, 24.233714911388557], [88.084422235062405, 24.501657212821918], [88.30637251175601, 24.866079413344199], [88.931553989623069, 25.238692328384769], [88.209789259802477, 25.768065700782707], [88.56304935094974, 26.446525580342716], [89.355094028687276, 26.014407253518065], [89.832480910199592, 25.965082098895476], [89.920692580121838, 25.269749864192171], [90.872210727912105, 25.13260061288954], [91.799595981822065, 25.14743174895731], [92.376201613334786, 24.976692816664961], [91.915092807994398, 24.130413723237108], [91.467729933643668, 24.072639471934789], [91.158963250699713, 23.503526923104381], [91.706475050832083, 22.985263983649183], [91.869927606171302, 23.62434642180278], [92.146034783906799, 23.62749868417259], [92.672720981825549, 22.041238918541247]]] } },
            { "type": "Feature", "properties": { "admin": "Bulgaria", "name": "Bulgaria", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[22.657149692482985, 44.234923000661276], [22.94483239105184, 43.823785305347123], [23.332302280376322, 43.897010809904707], [24.100679152124169, 43.741051337247846], [25.569271681426923, 43.688444729174712], [26.065158725699739, 43.943493760751259], [27.242399529740904, 44.175986029632398], [27.970107049275068, 43.812468166675202], [28.55808149589199, 43.707461656258118], [28.039095086384712, 43.293171698574177], [27.673897739378042, 42.577892361006214], [27.996720411905383, 42.007358710287775], [27.135739373490473, 42.141484890301335], [26.117041863720793, 41.826904608724554], [26.106138136507205, 41.328898830727766], [25.197201368925441, 41.234485988930523], [24.492644891058031, 41.583896185872028], [23.692073601992345, 41.309080918943842], [22.952377150166445, 41.337993882811141], [22.881373732197424, 41.999297186850242], [22.380525750424585, 42.320259507815081], [22.545011834409614, 42.461362006188025], [22.436594679461273, 42.580321153323929], [22.604801466571324, 42.898518785161137], [22.986018507588479, 43.211161200526959], [22.500156691180276, 43.642814439460977], [22.410446404721593, 44.008063462899948], [22.657149692482985, 44.234923000661276]]] } },
            { "type": "Feature", "properties": { "admin": "The Bahamas", "name": "Bahamas", "continent": "North America" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-77.53466, 23.75975], [-77.78, 23.71], [-78.03405, 24.28615], [-78.40848, 24.57564], [-78.19087, 25.2103], [-77.89, 25.17], [-77.54, 24.34], [-77.53466, 23.75975]]], [[[-77.82, 26.58], [-78.91, 26.42], [-78.98, 26.79], [-78.51, 26.87], [-77.85, 26.84], [-77.82, 26.58]]], [[[-77.0, 26.59], [-77.17255, 25.87918], [-77.35641, 26.00735], [-77.34, 26.53], [-77.78802, 26.92516], [-77.79, 27.04], [-77.0, 26.59]]]] } },
            { "type": "Feature", "properties": { "admin": "Bosnia and Herzegovina", "name": "Bosnia and Herz.", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[19.005486281010118, 44.860233669609144], [19.36803, 44.863], [19.11761, 44.42307], [19.59976, 44.03847], [19.454, 43.568100000000115], [19.21852, 43.52384], [19.03165, 43.43253], [18.70648, 43.20011], [18.56, 42.65], [17.674921502358981, 43.028562527023603], [17.297373488034449, 43.446340643887353], [16.916156447017325, 43.667722479825663], [16.456442905348862, 44.041239732431265], [16.239660271884528, 44.351143296885695], [15.750026075918978, 44.81871165626255], [15.959367303133373, 45.233776760430935], [16.318156772535868, 45.004126695325901], [16.534939406000202, 45.211607570977705], [17.00214603035101, 45.233776760430935], [17.861783481526398, 45.067740383477137], [18.553214145591646, 45.08158966733145], [19.005486281010118, 44.860233669609144]]] } },
            { "type": "Feature", "properties": { "admin": "Belarus", "name": "Belarus", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[23.484127638449841, 53.912497667041123], [24.45068362803703, 53.905702216194747], [25.536353794056989, 54.282423407602515], [25.768432651479792, 54.846962592175082], [26.588279249790386, 55.167175604871659], [26.494331495883749, 55.61510691997762], [27.102459751094525, 55.783313707087672], [28.17670942557799, 56.169129950578807], [29.2295133806603, 55.918344224666356], [29.371571893030669, 55.67009064393617], [29.896294386522353, 55.789463202530406], [30.87390913262, 55.550976467503396], [30.971835971813132, 55.081547756564028], [30.75753380709871, 54.811770941784303], [31.384472283663733, 54.157056382862422], [31.791424187962232, 53.974638576872117], [31.731272820774503, 53.794029446012011], [32.405598585751157, 53.618045355842028], [32.693643019346034, 53.351420803432106], [32.304519484188226, 53.132726141972903], [31.497643670382924, 53.167426866256889], [31.30520063652801, 53.073995876673195], [31.540018344862254, 52.742052313846344], [31.78599816257158, 52.10167796488544], [30.927549269338975, 52.042353420614383], [30.619454380014837, 51.822806098022362], [30.55511722181145, 51.319503485715643], [30.157363722460889, 51.416138414101454], [29.254938185347921, 51.368234361366881], [28.992835320763522, 51.602044379271462], [28.617612745892242, 51.427713934934836], [28.241615024536564, 51.572227077839059], [27.454066196408426, 51.59230337178446], [26.337958611768549, 51.832288723347915], [25.327787713327005, 51.910656032918538], [24.553106316839511, 51.888461005249177], [24.005077752384206, 51.617443956094448], [23.52707075368437, 51.578454087930233], [23.508002150168689, 52.023646552124717], [23.19949384938618, 52.486977444053664], [23.799198846133375, 52.691099351606553], [23.804934930117774, 53.08973135030606], [23.527535841574995, 53.47012156840654], [23.484127638449841, 53.912497667041123]]] } },
            { "type": "Feature", "properties": { "admin": "Belize", "name": "Belize", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-89.143080410503302, 17.808318996649316], [-89.150909389995519, 17.955467637600414], [-89.029857347351808, 18.001511338772485], [-88.848343878926585, 17.883198147040229], [-88.490122850279334, 18.486830552641603], [-88.300031094093669, 18.499982204659897], [-88.296336229184803, 18.353272813383263], [-88.106812913754368, 18.348673610909284], [-88.123478563168476, 18.076674709541003], [-88.285354987322776, 17.644142971258031], [-88.197866787452625, 17.489475409408453], [-88.302640753924422, 17.13169363043566], [-88.239517991879893, 17.036066392479551], [-88.355428229510551, 16.530774237529624], [-88.551824510435821, 16.265467434143144], [-88.732433641295927, 16.233634751851351], [-88.930612759135244, 15.887273464415072], [-89.229121670269265, 15.886937567605166], [-89.15080603713092, 17.015576687075832], [-89.143080410503302, 17.808318996649316]]] } },
            { "type": "Feature", "properties": { "admin": "Bolivia", "name": "Bolivia", "continent": "South America" }, "geometry": { "type": "Polygon", "coordinates": [[[-62.84646847192154, -22.034985446869442], [-63.986838141522462, -21.993644301035946], [-64.377021043542243, -22.798091322523533], [-64.964892137294598, -22.07586150481232], [-66.273339402924833, -21.832310479420713], [-67.10667355006359, -22.735924574476414], [-67.82817989772272, -22.872918796482171], [-68.219913092711266, -21.494346612231858], [-68.757167121033731, -20.372657972904459], [-68.442225104430904, -19.405068454671426], [-68.966818406841853, -18.9816834449041], [-69.100246955019472, -18.260125420812674], [-69.590423753524036, -17.580011895419329], [-68.959635382753291, -16.500697930571267], [-69.389764166934697, -15.66012908291165], [-69.160346645774936, -15.323973890853015], [-69.339534674747, -14.953195489158828], [-68.94888668483658, -14.45363941819328], [-68.929223802349526, -13.602683607643007], [-68.880079515239956, -12.89972909917665], [-68.665079718689611, -12.561300144097171], [-69.52967810736493, -10.951734307502193], [-68.786157599549469, -11.036380303596276], [-68.27125362819325, -11.014521172736817], [-68.048192308205373, -10.712059014532484], [-67.173801235610725, -10.30681243249961], [-66.646908331962791, -9.931331475466861], [-65.33843522811641, -9.76198780684639], [-65.444837002205375, -10.51145110437543], [-65.321898769783004, -10.895872084194675], [-65.402281460213018, -11.566270440317151], [-64.31635291203159, -12.461978041232191], [-63.196498786050562, -12.627032565972433], [-62.803060268796372, -13.000653171442682], [-62.127080857986371, -13.19878061284972], [-61.713204311760769, -13.489202162330049], [-61.084121263255646, -13.479383640194595], [-60.503304002511122, -13.775954685117656], [-60.459198167550014, -14.354007256734551], [-60.264326341377355, -14.645979099183638], [-60.251148851142922, -15.077218926659318], [-60.542965664295131, -15.093910414289592], [-60.158389655179022, -16.258283786690082], [-58.241219855366673, -16.299573256091289], [-58.388058437724027, -16.877109063385273], [-58.280804002502244, -17.271710300366014], [-57.734558274960989, -17.552468357007765], [-57.498371141170971, -18.174187513911289], [-57.676008877174297, -18.961839694904025], [-57.949997321185819, -19.400004164306814], [-57.853801642474494, -19.969995212486186], [-58.166392381408038, -20.176700941653674], [-58.183471442280492, -19.868399346600359], [-59.11504248720609, -19.356906019775398], [-60.043564622626477, -19.342746677327419], [-61.786326463453761, -19.633736667562957], [-62.265961269770784, -20.513734633061272], [-62.291179368729203, -21.051634616787389], [-62.685057135657871, -22.24902922942238], [-62.84646847192154, -22.034985446869442]]] } },
            { "type": "Feature", "properties": { "admin": "Brazil", "name": "Brazil", "continent": "South America" }, "geometry": { "type": "Polygon", "coordinates": [[[-57.625133429582945, -30.216294854454258], [-56.290899624239067, -28.852760512000884], [-55.162286342984558, -27.881915378533456], [-54.49072526713551, -27.474756768505785], [-53.648735317587885, -26.923472588816086], [-53.628348965048737, -26.124865004177465], [-54.130049607954376, -25.547639255477247], [-54.625290696823562, -25.739255466415507], [-54.428946092330577, -25.162184747012162], [-54.293476325077435, -24.570799655863958], [-54.292959560754511, -24.021014092710722], [-54.652834235235119, -23.839578138933955], [-55.027901780809543, -24.001273695575225], [-55.400747239795407, -23.956935316668797], [-55.517639329639621, -23.57199757252663], [-55.61068274598113, -22.655619398694839], [-55.797958136606894, -22.356929620047815], [-56.473317430229379, -22.086300144135279], [-56.881509568902885, -22.282153822521476], [-57.937155727761287, -22.090175876557169], [-57.870673997617786, -20.732687676681948], [-58.166392381408038, -20.176700941653674], [-57.853801642474494, -19.969995212486186], [-57.949997321185819, -19.400004164306814], [-57.676008877174297, -18.961839694904025], [-57.498371141170971, -18.174187513911289], [-57.734558274960989, -17.552468357007765], [-58.280804002502244, -17.271710300366014], [-58.388058437724027, -16.877109063385273], [-58.241219855366673, -16.299573256091289], [-60.158389655179022, -16.258283786690082], [-60.542965664295131, -15.093910414289592], [-60.251148851142922, -15.077218926659318], [-60.264326341377355, -14.645979099183638], [-60.459198167550014, -14.354007256734551], [-60.503304002511122, -13.775954685117656], [-61.084121263255646, -13.479383640194595], [-61.713204311760769, -13.489202162330049], [-62.127080857986371, -13.19878061284972], [-62.803060268796372, -13.000653171442682], [-63.196498786050562, -12.627032565972433], [-64.31635291203159, -12.461978041232191], [-65.402281460213018, -11.566270440317151], [-65.321898769783004, -10.895872084194675], [-65.444837002205375, -10.51145110437543], [-65.33843522811641, -9.76198780684639], [-66.646908331962791, -9.931331475466861], [-67.173801235610725, -10.30681243249961], [-68.048192308205373, -10.712059014532484], [-68.27125362819325, -11.014521172736817], [-68.786157599549469, -11.036380303596276], [-69.52967810736493, -10.951734307502193], [-70.093752204046879, -11.123971856331011], [-70.548685675728393, -11.009146823778462], [-70.481893886991159, -9.490118096558842], [-71.302412278921523, -10.079436130415372], [-72.184890713169821, -10.05359791426943], [-72.563033006465631, -9.520193780152715], [-73.226713426390148, -9.462212823121233], [-73.015382656532537, -9.03283334720806], [-73.571059332967053, -8.424446709835832], [-73.987235480429646, -7.523829847853063], [-73.723401455363486, -7.340998630404412], [-73.724486660441627, -6.918595472850638], [-73.120027431923575, -6.629930922068238], [-73.219711269814596, -6.089188734566076], [-72.964507208941185, -5.741251315944892], [-72.891927659787243, -5.274561455916979], [-71.748405727816532, -4.59398284263301], [-70.928843349883564, -4.401591485210367], [-70.79476884630229, -4.251264743673302], [-69.893635219996611, -4.298186944194326], [-69.444101935489599, -1.556287123219817], [-69.420485805932216, -1.122618503426409], [-69.577065395776586, -0.549991957200163], [-70.02065589057004, -0.185156345219539], [-70.015565761989293, 0.541414292804205], [-69.452396002872447, 0.706158758950693], [-69.252434048119042, 0.602650865070075], [-69.218637661400166, 0.985676581217433], [-69.804596727157701, 1.089081122233466], [-69.816973232691609, 1.714805202639624], [-67.868565029558823, 1.692455145673392], [-67.537810024674684, 2.037162787276329], [-67.25999752467358, 1.719998684084956], [-67.065048183852483, 1.130112209473225], [-66.876325853122566, 1.253360500489336], [-66.325765143484944, 0.724452215982012], [-65.548267381437554, 0.78925446207603], [-65.354713304288353, 1.0952822941085], [-64.611011928959854, 1.328730576987041], [-64.199305792890499, 1.49285492594602], [-64.083085496666072, 1.91636912679408], [-63.368788011311644, 2.200899562993129], [-63.422867397705105, 2.411067613124174], [-64.269999152265783, 2.497005520025566], [-64.408827887617903, 3.126786200366623], [-64.368494432214092, 3.797210394705246], [-64.816064012294007, 4.056445217297422], [-64.628659430587533, 4.14848094320925], [-63.888342861574145, 4.020530096854571], [-63.093197597899092, 3.770571193858784], [-62.804533047116692, 4.006965033377951], [-62.085429653559125, 4.162123521334308], [-60.966893276601517, 4.536467596856638], [-60.601179165271922, 4.918098049332129], [-60.733574184803707, 5.2002772078619], [-60.213683437731319, 5.2444863956876], [-59.980958624904865, 5.014061184098138], [-60.111002366767373, 4.574966538914082], [-59.767405768458701, 4.423502915866606], [-59.538039923731219, 3.958802598481937], [-59.815413174057852, 3.606498521332085], [-59.974524909084543, 2.755232652188055], [-59.718545701726732, 2.249630438644359], [-59.646043667221242, 1.786893825686789], [-59.030861579002639, 1.317697658692722], [-58.540012986878288, 1.26808828369252], [-58.429477098205957, 1.46394196207872], [-58.113449876525003, 1.507195135907025], [-57.660971035377358, 1.682584947105638], [-57.33582292339689, 1.948537705895759], [-56.782704230360814, 1.863710842288653], [-56.53938574891454, 1.89952260986692], [-55.995698004771739, 1.817667141116601], [-55.905600145070871, 2.021995754398659], [-56.073341844290283, 2.220794989425499], [-55.973322109589361, 2.510363877773016], [-55.569755011605984, 2.42150625244713], [-55.097587449755125, 2.523748073736612], [-54.524754197799709, 2.311848863123785], [-54.088062506717243, 2.105556545414629], [-53.778520677288903, 2.376702785650081], [-53.554839240113537, 2.33489655192595], [-53.4184651352953, 2.05338918701598], [-52.939657151894949, 2.124857692875636], [-52.556424730018414, 2.504705308437053], [-52.249337531123942, 3.241094468596244], [-51.657797410678882, 4.156232408053028], [-51.317146369010842, 4.203490505383953], [-51.069771287629649, 3.65039765056403], [-50.508875291533641, 1.901563828942456], [-49.974075893745045, 1.736483465986069], [-49.947100796088705, 1.046189683431223], [-50.699251268096901, 0.222984117021681], [-50.388210822132123, -0.078444512536819], [-48.620566779156313, -0.235489190271821], [-48.584496629416577, -1.237805271005001], [-47.824956427590621, -0.5816179337628], [-46.566583624851219, -0.941027520352776], [-44.9057030909904, -1.551739597178134], [-44.417619187993658, -2.137750339367975], [-44.581588507655773, -2.691308282078523], [-43.418791266440188, -2.383110039889793], [-41.47265682632824, -2.912018324397116], [-39.97866533055403, -2.87305429444904], [-38.50038347019656, -3.700652357603394], [-37.223252122535193, -4.820945733258915], [-36.45293738457638, -5.109403578312153], [-35.597795783010454, -5.149504489770648], [-35.235388963347553, -5.464937432480245], [-34.896029832486825, -6.738193047719709], [-34.729993455533027, -7.343220716992965], [-35.128212042774216, -8.996401462442284], [-35.636966518687707, -9.649281508017811], [-37.046518724096991, -11.040721123908799], [-37.683611619607355, -12.17119475672582], [-38.423876512188436, -13.038118584854285], [-38.673887091616507, -13.057652276260615], [-38.953275722802537, -13.79336964280002], [-38.882298143049645, -15.667053724838764], [-39.161092495264306, -17.208406670808468], [-39.267339240056394, -17.867746270420479], [-39.583521491034219, -18.262295830968934], [-39.76082333022763, -19.599113457927402], [-40.774740770010332, -20.90451181405242], [-40.944756232250597, -21.937316989837807], [-41.75416419123821, -22.370675551037454], [-41.988284267736546, -22.970070489190888], [-43.074703742024738, -22.967693373305462], [-44.647811855637798, -23.351959323827838], [-45.35213578955991, -23.796841729428579], [-46.472093268405523, -24.088968601174539], [-47.648972337420645, -24.885199069927715], [-48.495458136577689, -25.877024834905647], [-48.641004808127725, -26.623697605090928], [-48.474735887228647, -27.175911960561887], [-48.661520351747612, -28.186134535435713], [-48.888457404157393, -28.674115085567877], [-49.587329474472668, -29.224469089476333], [-50.696874152211478, -30.984465020472953], [-51.576226162306149, -31.777698256153204], [-52.256081305538032, -32.245369968394662], [-52.71209998229768, -33.196578057591175], [-53.373661668498229, -33.768377780900757], [-53.650543992718084, -33.202004082981823], [-53.209588995971529, -32.727666110974717], [-53.787951626182185, -32.047242526987617], [-54.572451544805105, -31.494511407193745], [-55.601510179249331, -30.853878676071385], [-55.97324459494093, -30.883075860316296], [-56.976025763564721, -30.109686374636119], [-57.625133429582945, -30.216294854454258]]] } },
            { "type": "Feature", "properties": { "admin": "Brunei", "name": "Brunei", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[114.204016554828343, 4.525873928236805], [114.599961379048707, 4.900011298029965], [115.450710483869798, 5.447729803891532], [115.405700311343566, 4.955227565933837], [115.347460972150643, 4.316636053887009], [114.869557326315373, 4.348313706881924], [114.659595981913498, 4.007636826997753], [114.204016554828343, 4.525873928236805]]] } },
            { "type": "Feature", "properties": { "admin": "Bhutan", "name": "Bhutan", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[91.69665652869665, 27.771741848251661], [92.10371178585973, 27.4526140406332], [92.033483514375078, 26.838310451763554], [91.217512648486405, 26.808648179628019], [90.37327477413406, 26.875724188742872], [89.744527622438838, 26.71940298105995], [88.835642531289366, 27.098966376243755], [88.814248488320544, 27.299315904239361], [89.475810174521101, 28.04275889740639], [90.015828891971154, 28.296438503527209], [90.730513950567769, 28.064953925075748], [91.258853794319904, 28.040614325466287], [91.69665652869665, 27.771741848251661]]] } },
            { "type": "Feature", "properties": { "admin": "Botswana", "name": "Botswana", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[25.649163445750155, -18.536025892818987], [25.850391473094724, -18.714412937090533], [26.164790887158478, -19.293085625894935], [27.296504754350501, -20.391519870690995], [27.724747348753247, -20.499058526290387], [27.727227817503252, -20.851801853114711], [28.02137007010861, -21.485975030200578], [28.794656202924209, -21.639454034107445], [29.432188348109033, -22.091312758067584], [28.017235955525244, -22.827753594659072], [27.119409620886238, -23.574323011979772], [26.78640669119741, -24.240690606383478], [26.485753208123292, -24.616326592713097], [25.941652052522151, -24.696373386333214], [25.765848829865206, -25.174845472923671], [25.664666375437712, -25.486816094669706], [25.025170525825782, -25.719670098576891], [24.211266717228792, -25.670215752873567], [23.733569777122703, -25.39012948985161], [23.312096795350179, -25.268689873965712], [22.824271274514896, -25.500458672794768], [22.579531691180584, -25.979447523708142], [22.105968865657864, -26.28025603607913], [21.60589603036939, -26.726533705351748], [20.889609002371731, -26.828542982695907], [20.666470167735437, -26.477453301704916], [20.758609246511831, -25.868136488551446], [20.165725538827186, -24.917961928000768], [19.895767856534427, -24.767790215760588], [19.895457797940672, -21.849156996347865], [20.881134067475866, -21.814327080983144], [20.910641310314531, -18.252218926672018], [21.655040317478971, -18.219146010005222], [23.196858351339298, -17.869038181227783], [23.579005568137713, -18.281261081620055], [24.217364536239209, -17.889347019118485], [24.520705193792534, -17.887124932529932], [25.084443393664564, -17.661815687737366], [25.264225701608005, -17.736539808831413], [25.649163445750155, -18.536025892818987]]] } },
            { "type": "Feature", "properties": { "admin": "Central African Republic", "name": "Central African Rep.", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[15.279460483469107, 7.421924546737968], [16.106231723706767, 7.497087917506504], [16.290561557691884, 7.754307359239304], [16.456184523187343, 7.734773667832966], [16.705988396886251, 7.508327541529978], [17.964929640380884, 7.890914008002865], [18.389554884523218, 8.281303615751822], [18.911021762780504, 8.630894680206351], [18.81200971850927, 8.982914536978596], [19.094008009526018, 9.074846910025837], [20.059685499764267, 9.01270600019485], [21.00086836109616, 9.475985215691507], [21.723821648859452, 10.567055568885973], [22.231129184668784, 10.971888739460507], [22.864165480244218, 11.142395127807543], [22.977543572692603, 10.714462591998538], [23.554304233502187, 10.089255275915306], [23.557249790142826, 9.681218166538683], [23.394779087017181, 9.26506785729222], [23.459012892355979, 8.954285793488891], [23.805813429466745, 8.666318874542425], [24.567369012152078, 8.229187933785466], [25.114932488716786, 7.825104071479172], [25.12413089366472, 7.500085150579436], [25.796647983511171, 6.979315904158069], [26.21341840994511, 6.546603298362071], [26.465909458123232, 5.94671743410187], [27.213409051225163, 5.550953477394557], [27.374226108517483, 5.233944403500059], [27.044065382604703, 5.127852688004835], [26.402760857862535, 5.150874538590869], [25.650455356557465, 5.256087754737123], [25.278798455514302, 5.170408229997191], [25.128833449003274, 4.927244777847789], [24.805028924262409, 4.897246608902349], [24.41053104014625, 5.108784084489129], [23.297213982850135, 4.609693101414221], [22.841479526468103, 4.710126247573483], [22.704123569436284, 4.633050848810156], [22.405123732195531, 4.02916006104732], [21.659122755630019, 4.224341945813719], [20.927591180106273, 4.322785549329736], [20.290679152108932, 4.691677761245287], [19.467783644293146, 5.031527818212779], [18.932312452884755, 4.709506130385973], [18.542982211997778, 4.201785183118317], [18.453065219809925, 3.504385891123348], [17.809900343505259, 3.560196437998569], [17.133042433346297, 3.728196519379451], [16.537058139724135, 3.198254706226278], [16.01285241055535, 2.267639675298084], [15.907380812247649, 2.557389431158612], [15.862732374747479, 3.013537298998982], [15.405395948964379, 3.335300604664339], [15.036219516671249, 3.851367295747123], [14.950953403389658, 4.21038930909492], [14.478372430080466, 4.732605495620446], [14.558935988023501, 5.03059764243153], [14.459407179429345, 5.451760565610299], [14.536560092841111, 6.22695872642069], [14.776545444404572, 6.408498033062044], [15.279460483469107, 7.421924546737968]]] } },
            { "type": "Feature", "properties": { "admin": "Canada", "name": "Canada", "continent": "North America" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-63.6645, 46.55001], [-62.9393, 46.41587], [-62.01208, 46.44314], [-62.50391, 46.03339], [-62.87433, 45.96818], [-64.1428, 46.39265], [-64.39261, 46.72747], [-64.01486, 47.03601], [-63.6645, 46.55001]]], [[[-61.806305, 49.10506], [-62.29318, 49.08717], [-63.58926, 49.40069], [-64.51912, 49.87304], [-64.17322, 49.95718], [-62.85829, 49.70641], [-61.835585, 49.28855], [-61.806305, 49.10506]]], [[[-123.510001587551116, 48.51001089130343], [-124.012890788399474, 48.370846259141402], [-125.655012777338342, 48.825004584338494], [-125.954994466792726, 49.179995835967638], [-126.850004435871853, 49.530000311880421], [-127.029993449544392, 49.814995835970073], [-128.059336304366212, 49.994959011426594], [-128.444584107102145, 50.53913768167611], [-128.358413656255408, 50.770648098343678], [-127.308581096029883, 50.552573554071948], [-126.695000977212302, 50.40090322529538], [-125.755006673823161, 50.295018215529367], [-125.415001587558791, 49.950000515332604], [-124.920768189119315, 49.47527497008339], [-123.92250870832099, 49.062483628935794], [-123.510001587551116, 48.51001089130343]]], [[[-56.134035814017111, 50.687009792679298], [-56.795881720595261, 49.812308661490945], [-56.143105027884289, 50.15011749938283], [-55.471492275602934, 49.935815334668447], [-55.822401089080913, 49.587128607779093], [-54.93514258484565, 49.313010972686833], [-54.473775397343772, 49.556691189159167], [-53.47654944519131, 49.24913890237405], [-53.786013759971233, 48.516780503933617], [-53.086133999226249, 48.687803656603528], [-52.95864824076223, 48.157164211614472], [-52.648098720904173, 47.53554840757549], [-53.069158291218336, 46.655498765644936], [-53.521456264853029, 46.618291734394823], [-54.178935512902527, 46.807065741556997], [-53.961868659060471, 47.625207017601909], [-54.240482143762122, 47.752279364607617], [-55.400773078011483, 46.88499380145312], [-55.997480841685835, 46.919720363953289], [-55.291219041552765, 47.389562486350982], [-56.250798712780508, 47.632545070987383], [-57.325229254777085, 47.572807115257987], [-59.26601518414676, 47.603347886742498], [-59.41949418805369, 47.89945384377485], [-58.796586473207398, 48.251525376979473], [-59.23162451845652, 48.523188381537793], [-58.391804979065213, 49.125580552764163], [-57.358689744686025, 50.718274034215845], [-56.738650071831998, 51.287438259478527], [-55.87097693543528, 51.632094224649187], [-55.406974249886602, 51.588272610065722], [-55.600218268442077, 51.317074693397913], [-56.134035814017111, 50.687009792679298]]], [[[-133.180004041711669, 54.169975490935308], [-132.710007884431292, 54.040009315423518], [-131.749989584003259, 54.120004380909208], [-132.049480347350965, 52.984621487024519], [-131.179042521826574, 52.18043284769827], [-131.577829549822894, 52.182370713909236], [-132.180428426778519, 52.639707139692391], [-132.549992432313843, 53.100014960332132], [-133.054611178755493, 53.411468817755363], [-133.239664482792676, 53.851080227262386], [-133.180004041711669, 54.169975490935308]]], [[[-79.26582, 62.158675], [-79.65752, 61.63308], [-80.09956, 61.7181], [-80.36215, 62.01649], [-80.315395, 62.085565], [-79.92939, 62.3856], [-79.52002, 62.36371], [-79.26582, 62.158675]]], [[[-81.89825, 62.7108], [-83.06857, 62.15922], [-83.77462, 62.18231], [-83.99367, 62.4528], [-83.25048, 62.91409], [-81.87699, 62.90458], [-81.89825, 62.7108]]], [[[-85.161307949549851, 65.657284654392797], [-84.975763719405933, 65.217518215588981], [-84.464012010419495, 65.371772365980163], [-83.88262630891974, 65.109617824963536], [-82.78757687043877, 64.766693020274673], [-81.642013719392509, 64.455135809986942], [-81.553440314444245, 63.979609280037131], [-80.817361212878851, 64.057485663500998], [-80.103451300766594, 63.725981350348597], [-80.991019863595653, 63.41124603947496], [-82.547178107416997, 63.651722317145229], [-83.108797573565042, 64.101875718839707], [-84.100416632813847, 63.569711819098004], [-85.523404710618991, 63.052379055424076], [-85.866768764982339, 63.637252916103542], [-87.221983201836721, 63.541238104905212], [-86.352759772471259, 64.035833238370699], [-86.224886440765133, 64.822916978608262], [-85.883847825854858, 65.738778388117041], [-85.161307949549851, 65.657284654392797]]], [[[-75.86588, 67.14886], [-76.98687, 67.09873], [-77.2364, 67.58809], [-76.81166, 68.14856], [-75.89521, 68.28721], [-75.1145, 68.01036], [-75.10333, 67.58202], [-75.21597, 67.44425], [-75.86588, 67.14886]]], [[[-95.647681203800488, 69.107690358321761], [-96.269521203800579, 68.757040358321731], [-97.61740120380054, 69.060030358321782], [-98.431801203800504, 68.950700358321768], [-99.797401203800504, 69.400030358321786], [-98.917401203800523, 69.710030358321788], [-98.218261203800466, 70.143540358321744], [-97.157401203800532, 69.860030358321794], [-96.557401203800524, 69.680030358321758], [-96.257401203800498, 69.490030358321761], [-95.647681203800488, 69.107690358321761]]], [[[-90.5471, 69.49766], [-90.55151, 68.47499], [-89.21515, 69.25873], [-88.01966, 68.61508], [-88.31749, 67.87338], [-87.35017, 67.19872], [-86.30607, 67.92146], [-85.57664, 68.78456], [-85.52197, 69.88211], [-84.10081, 69.80539], [-82.62258, 69.65826], [-81.28043, 69.16202], [-81.2202, 68.66567], [-81.96436, 68.13253], [-81.25928, 67.59716], [-81.38653, 67.11078], [-83.34456, 66.41154], [-84.73542, 66.2573], [-85.76943, 66.55833], [-86.0676, 66.05625], [-87.03143, 65.21297], [-87.32324, 64.77563], [-88.48296, 64.09897], [-89.91444, 64.03273], [-90.70398, 63.61017], [-90.77004, 62.96021], [-91.93342, 62.83508], [-93.15698, 62.02469], [-94.24153, 60.89865], [-94.62931, 60.11021], [-94.6846, 58.94882], [-93.21502, 58.78212], [-92.76462, 57.84571], [-92.297029999999893, 57.08709], [-90.89769, 57.28468], [-89.03953, 56.85172], [-88.03978, 56.47162], [-87.32421, 55.99914], [-86.07121, 55.72383], [-85.01181, 55.3026], [-83.36055, 55.24489], [-82.27285, 55.14832], [-82.4362, 54.28227], [-82.12502, 53.27703], [-81.40075, 52.15788], [-79.91289, 51.20842], [-79.14301, 51.53393], [-78.60191, 52.56208], [-79.12421, 54.14145], [-79.82958, 54.66772], [-78.22874, 55.13645], [-77.0956, 55.83741], [-76.54137, 56.53423], [-76.62319, 57.20263], [-77.30226, 58.05209], [-78.51688, 58.80458], [-77.33676, 59.85261], [-77.77272, 60.75788], [-78.10687, 62.31964], [-77.41067, 62.55053], [-75.69621, 62.2784], [-74.6682, 62.18111], [-73.83988, 62.4438], [-72.90853, 62.10507], [-71.67708, 61.52535], [-71.37369, 61.13717], [-69.59042, 61.06141], [-69.62033, 60.22125], [-69.2879, 58.95736], [-68.37455, 58.80106], [-67.64976, 58.21206], [-66.20178, 58.76731], [-65.24517, 59.87071], [-64.58352, 60.33558], [-63.80475, 59.4426], [-62.50236, 58.16708], [-61.39655, 56.96745], [-61.79866, 56.33945], [-60.46853, 55.77548], [-59.56962, 55.20407], [-57.97508, 54.94549], [-57.3332, 54.6265], [-56.93689, 53.78032], [-56.15811, 53.64749], [-55.75632, 53.27036], [-55.68338, 52.14664], [-56.40916, 51.7707], [-57.12691, 51.41972], [-58.77482, 51.0643], [-60.03309, 50.24277], [-61.72366, 50.08046], [-63.86251, 50.29099], [-65.36331, 50.2982], [-66.39905, 50.22897], [-67.23631, 49.51156], [-68.51114, 49.06836], [-69.95362, 47.74488], [-71.10458, 46.82171], [-70.25522, 46.98606], [-68.65, 48.3], [-66.55243, 49.1331], [-65.05626, 49.23278], [-64.17099, 48.74248], [-65.11545, 48.07085], [-64.79854, 46.99297], [-64.47219, 46.23849], [-63.17329, 45.73902], [-61.52072, 45.88377], [-60.51815, 47.00793], [-60.4486, 46.28264], [-59.80287, 45.9204], [-61.03988, 45.26525], [-63.25471, 44.67014], [-64.24656, 44.26553], [-65.36406, 43.54523], [-66.1234, 43.61867], [-66.16173, 44.46512], [-64.42549, 45.29204], [-66.02605, 45.25931], [-67.13741, 45.13753], [-67.79134, 45.70281], [-67.79046, 47.06636], [-68.23444, 47.35486], [-68.905, 47.185], [-69.237216, 47.447781], [-69.99997, 46.69307], [-70.305, 45.915], [-70.66, 45.46], [-71.08482, 45.30524], [-71.405, 45.255], [-71.50506, 45.0082], [-73.34783, 45.00738], [-74.867, 45.00048], [-75.31821, 44.81645], [-76.375, 44.09631], [-76.5, 44.018458893758712], [-76.820034145805565, 43.628784288093748], [-77.737885097957687, 43.62905558936329], [-78.720279914042365, 43.625089423184868], [-79.171673550111862, 43.466339423184216], [-79.01, 43.27], [-78.92, 42.965], [-78.939362148743683, 42.863611355148031], [-80.247447679347928, 42.366199856122584], [-81.277746548167144, 42.209025987306845], [-82.439277716791608, 41.675105088867149], [-82.690089280920162, 41.675105088867149], [-83.029810146806909, 41.832795722005834], [-83.141999681312555, 41.975681057292825], [-83.12, 42.08], [-82.9, 42.43], [-82.43, 42.98], [-82.137642381503881, 43.571087551439909], [-82.337763125431053, 44.44], [-82.550924648758169, 45.347516587905368], [-83.592850714843067, 45.816893622412373], [-83.469550747394621, 45.994686387712584], [-83.616130947590563, 46.116926988299056], [-83.890765347005726, 46.116926988299056], [-84.091851264161463, 46.27541860613816], [-84.14211951367335, 46.512225857115723], [-84.3367, 46.40877], [-84.6049, 46.4396], [-84.543748745445853, 46.538684190449132], [-84.779238247399888, 46.637101955749038], [-84.876079881514855, 46.900083319682366], [-85.652363247403414, 47.220218817730498], [-86.461990831228249, 47.553338019392037], [-87.439792623300207, 47.94], [-88.378114183286698, 48.302917588893727], [-89.272917446636654, 48.019808254582657], [-89.6, 48.01], [-90.83, 48.27], [-91.64, 48.14], [-92.61, 48.45], [-93.63087, 48.60926], [-94.32914, 48.67074], [-94.64, 48.84], [-94.81758, 49.38905], [-95.15609, 49.38425], [-95.159069509172014, 49.0], [-97.228720000004799, 49.0007], [-100.65, 49.0], [-104.04826, 48.99986], [-107.05, 49.0], [-110.05, 49.0], [-113.0, 49.0], [-116.04818, 49.0], [-117.03121, 49.0], [-120.0, 49.0], [-122.84, 49.0], [-122.97421, 49.002537777777789], [-124.91024, 49.98456], [-125.62461, 50.41656], [-127.43561, 50.83061], [-127.99276, 51.71583], [-127.85032, 52.32961], [-129.12979, 52.75538], [-129.30523, 53.56159], [-130.51497, 54.28757], [-130.53611, 54.80278], [-129.98, 55.285], [-130.00778, 55.91583], [-131.70781, 56.55212], [-132.73042, 57.69289], [-133.35556, 58.41028], [-134.27111, 58.86111], [-134.945, 59.27056], [-135.47583, 59.78778], [-136.47972, 59.46389], [-137.4525, 58.905], [-138.34089, 59.56211], [-139.039, 60.0], [-140.013, 60.27682], [-140.99778, 60.30639], [-140.9925, 66.00003], [-140.986, 69.712], [-139.12052, 69.47102], [-137.54636, 68.99002], [-136.50358, 68.89804], [-135.62576, 69.31512], [-134.41464, 69.62743], [-132.92925, 69.50534], [-131.43136, 69.94451], [-129.79471, 70.19369], [-129.10773, 69.77927], [-128.36156, 70.01286], [-128.13817, 70.48384], [-127.44712, 70.37721], [-125.75632, 69.48058], [-124.42483, 70.1584], [-124.28968, 69.39969], [-123.06108, 69.56372], [-122.6835, 69.85553], [-121.47226, 69.79778], [-119.94288, 69.37786], [-117.60268, 69.01128], [-116.22643, 68.84151], [-115.2469, 68.90591], [-113.89794, 68.3989], [-115.30489, 67.90261], [-113.49727, 67.68815], [-110.798, 67.80612], [-109.94619, 67.98104], [-108.8802, 67.38144], [-107.79239, 67.88736], [-108.81299, 68.31164], [-108.16721, 68.65392], [-106.95, 68.7], [-106.15, 68.8], [-105.34282, 68.56122], [-104.33791, 68.018], [-103.22115, 68.09775], [-101.45433, 67.64689], [-99.90195, 67.80566], [-98.4432, 67.78165], [-98.5586, 68.40394], [-97.66948, 68.57864], [-96.11991, 68.23939], [-96.12588, 67.29338], [-95.48943, 68.0907], [-94.685, 68.06383], [-94.23282, 69.06903], [-95.30408, 69.68571], [-96.47131, 70.08976], [-96.39115, 71.19482], [-95.2088, 71.92053], [-93.88997, 71.76015], [-92.87818, 71.31869], [-91.51964, 70.19129], [-92.40692, 69.69997], [-90.5471, 69.49766]]], [[[-114.167169999999871, 73.12145], [-114.66634, 72.65277], [-112.441019999999867, 72.9554], [-111.05039, 72.4504], [-109.920349999999857, 72.96113], [-109.00654, 72.63335], [-108.188349999999886, 71.65089], [-107.68599, 72.06548], [-108.39639, 73.08953], [-107.51645, 73.23598], [-106.522589999999866, 73.07601], [-105.402459999999877, 72.67259], [-104.77484, 71.6984], [-104.464759999999814, 70.99297], [-102.78537, 70.49776], [-100.980779999999868, 70.02432], [-101.089289999999892, 69.58447000000011], [-102.731159999999875, 69.50402], [-102.09329, 69.11962], [-102.43024, 68.75282], [-104.24, 68.91], [-105.96, 69.180000000000135], [-107.12254, 69.11922], [-108.999999999999872, 68.78], [-111.534148875200117, 68.630059156817921], [-113.3132, 68.53554], [-113.854959999999807, 69.007440000000102], [-115.22, 69.28], [-116.10794, 69.16821], [-117.34, 69.960000000000107], [-116.674729999999869, 70.06655], [-115.13112, 70.2373], [-113.72141, 70.19237], [-112.4161, 70.36638], [-114.35, 70.6], [-116.48684, 70.52045], [-117.9048, 70.540560000000127], [-118.43238, 70.9092], [-116.11311, 71.30918], [-117.65568, 71.2952], [-119.40199, 71.55859], [-118.56267, 72.30785], [-117.866419999999877, 72.70594], [-115.18909, 73.314590000000109], [-114.167169999999871, 73.12145]]], [[[-104.5, 73.42], [-105.38, 72.76], [-106.94, 73.46], [-106.6, 73.6], [-105.26, 73.64], [-104.5, 73.42]]], [[[-76.34, 73.102684989953005], [-76.251403808593736, 72.826385498046861], [-77.314437866210895, 72.85554504394527], [-78.391670227050795, 72.876655578613253], [-79.486251831054645, 72.742202758789062], [-79.775833129882827, 72.80290222167973], [-80.876098632812514, 73.333183288574205], [-80.833885192871051, 73.693183898925767], [-80.353057861328111, 73.75971984863277], [-78.064437866210923, 73.651931762695327], [-76.34, 73.102684989953005]]], [[[-86.562178514334107, 73.157447007938444], [-85.774371304044521, 72.534125881633798], [-84.850112474288224, 73.34027822538711], [-82.315590176100969, 73.750950832810574], [-80.600087653307611, 72.716543687624181], [-80.748941616524391, 72.061906643350753], [-78.770638597310764, 72.352173163534147], [-77.824623989559569, 72.749616604291035], [-75.605844692675717, 72.243678493937381], [-74.228616095664975, 71.767144273557889], [-74.099140794557698, 71.330840155717638], [-72.242225714797641, 71.556924546994495], [-71.200015428335192, 70.920012518997211], [-68.78605424668487, 70.525023708774242], [-67.914970465756923, 70.121947536897594], [-66.969033372654152, 69.18608734809186], [-68.805122850200533, 68.720198472764409], [-66.449866095633851, 68.067163397892003], [-64.862314419195215, 67.847538560651614], [-63.424934454996745, 66.928473212340649], [-61.851981370680569, 66.862120673277829], [-62.163176845942296, 66.160251369889593], [-63.91844438338417, 64.998668524832837], [-65.148860236253611, 65.426032619886669], [-66.72121904159853, 66.388041083432185], [-68.015016038673949, 66.262725735124391], [-68.141287400979152, 65.689789130304362], [-67.089646165623392, 65.108455105236985], [-65.732080451099748, 64.64840566675862], [-65.320167609301265, 64.382737128346051], [-64.669406297449669, 63.392926744227474], [-65.013803880458894, 62.674185085695974], [-66.275044725190455, 62.945098781986069], [-68.783186204692711, 63.745670071051805], [-67.369680752213029, 62.883965562584869], [-66.328297288667201, 62.28007477482204], [-66.165568203380147, 61.930897121825879], [-68.877366502544632, 62.330149237712803], [-71.023437059193824, 62.910708116295829], [-72.23537858751898, 63.397836005295154], [-71.886278449171286, 63.679989325608837], [-73.37830624051837, 64.193963121183813], [-74.834418911422588, 64.679075629323776], [-74.818502570276706, 64.389093329517962], [-77.709979824520019, 64.229542344816778], [-78.55594885935416, 64.572906399180127], [-77.897281053361908, 65.309192206474776], [-76.018274298797181, 65.326968899183143], [-73.95979529488271, 65.454764716240888], [-74.293883429649625, 65.81177134872938], [-73.94491248238262, 66.310578111426722], [-72.65116716173938, 67.284575507263853], [-72.926059943316076, 67.726925767682374], [-73.311617804645721, 68.069437160912898], [-74.8433072577768, 68.554627183701271], [-76.869100918266739, 68.894735622830254], [-76.228649054657339, 69.147769273547411], [-77.28736996123709, 69.769540106883269], [-78.168633999326588, 69.826487535268896], [-78.95724219431672, 70.166880194775402], [-79.492455003563649, 69.871807766388898], [-81.305470954091732, 69.743185126414332], [-84.944706183598456, 69.966634019644388], [-87.060003424817864, 70.260001125765356], [-88.681713223001495, 70.410741278760796], [-89.513419562523012, 70.762037665480975], [-88.467721116880753, 71.218185533321318], [-89.888151211287465, 71.222552191849942], [-90.205160285181989, 72.235074367960792], [-89.43657670770493, 73.129464219852352], [-88.408241543312784, 73.537888902471209], [-85.826151089200906, 73.803815823045213], [-86.562178514334107, 73.157447007938444]]], [[[-100.35642, 73.84389], [-99.16387, 73.63339], [-97.38, 73.76], [-97.12, 73.47], [-98.05359, 72.99052], [-96.54, 72.56], [-96.72, 71.66], [-98.35966, 71.27285], [-99.32286, 71.35639], [-100.01482, 71.73827], [-102.5, 72.51], [-102.48, 72.83], [-100.43836, 72.70588], [-101.54, 73.36], [-100.35642, 73.84389]]], [[[-93.196295539100205, 72.771992499473342], [-94.26904659704725, 72.024596259235949], [-95.409855516322637, 72.061880805134578], [-96.033745083382428, 72.940276801231789], [-96.01826799191096, 73.437429918095788], [-95.495793423224001, 73.862416897264154], [-94.503657599652328, 74.134906724739196], [-92.420012173211745, 74.100025132942179], [-90.509792853542578, 73.85673248971203], [-92.003965216829869, 72.966244208458477], [-93.196295539100205, 72.771992499473342]]], [[[-120.46, 71.383601793087578], [-123.09219, 70.90164], [-123.62, 71.34], [-125.92894873747332, 71.868688463011395], [-125.499999999999872, 72.292260811795003], [-124.80729, 73.02256], [-123.94, 73.680000000000135], [-124.917749999999899, 74.292750000000112], [-121.53788, 74.44893], [-120.10978, 74.24135], [-117.55564, 74.18577], [-116.58442, 73.89607], [-115.51081, 73.47519], [-116.767939999999882, 73.22292], [-119.22, 72.52], [-120.46, 71.82], [-120.46, 71.383601793087578]]], [[[-93.612755906940464, 74.979997260224437], [-94.156908738973812, 74.59234650338685], [-95.60868058956558, 74.666863918751758], [-96.820932176484561, 74.927623196096576], [-96.288587409229791, 75.377828274223333], [-94.850819871789113, 75.647217515760886], [-93.977746548217908, 75.296489569795952], [-93.612755906940464, 74.979997260224437]]], [[[-98.5, 76.72], [-97.735585, 76.25656], [-97.704415, 75.74344], [-98.16, 75.0], [-99.80874, 74.89744], [-100.88366, 75.05736], [-100.86292, 75.64075], [-102.50209, 75.5638], [-102.56552, 76.3366], [-101.48973, 76.30537], [-99.98349, 76.64634], [-98.57699, 76.58859], [-98.5, 76.72]]], [[[-108.21141, 76.20168], [-107.81943, 75.84552], [-106.92893, 76.01282], [-105.881, 75.9694], [-105.70498, 75.47951], [-106.31347, 75.00527], [-109.7, 74.85], [-112.22307, 74.41696], [-113.74381, 74.39427], [-113.87135, 74.72029], [-111.79421, 75.1625], [-116.31221, 75.04343], [-117.7104, 75.2222], [-116.34602, 76.19903], [-115.40487, 76.47887], [-112.59056, 76.14134], [-110.81422, 75.54919], [-109.0671, 75.47321], [-110.49726, 76.42982], [-109.5811, 76.79417], [-108.54859, 76.67832], [-108.21141, 76.20168]]], [[[-94.684085862999439, 77.097878323058367], [-93.573921068073105, 76.776295884906062], [-91.605023159536586, 76.778517971494594], [-90.741845872749209, 76.449597479956807], [-90.969661424507976, 76.074013170059445], [-89.822237921899244, 75.847773749485626], [-89.187082892599776, 75.610165513807615], [-87.838276333349611, 75.566188869927217], [-86.379192267588664, 75.482421373182163], [-84.789625210290595, 75.699204006646497], [-82.753444586910049, 75.784315090631225], [-81.12853084992436, 75.713983466282016], [-80.05751095245914, 75.336848863415867], [-79.833932868148324, 74.923127346487192], [-80.457770758775823, 74.657303778777774], [-81.948842536125511, 74.442459011524321], [-83.2288936022114, 74.564027818490928], [-86.097452358733292, 74.410032050261137], [-88.150350307960196, 74.392307033984977], [-89.764722052758358, 74.515555325001117], [-92.422440965529418, 74.837757880340973], [-92.768285488642789, 75.38681997344213], [-92.889905972041717, 75.882655341282629], [-93.893824022175977, 76.319243679500516], [-95.962457445035795, 76.44138092722244], [-97.121378953829463, 76.751077785947587], [-96.745122850312342, 77.161388658345132], [-94.684085862999439, 77.097878323058367]]], [[[-116.198586595507322, 77.645286770326194], [-116.335813361458349, 76.876961575010554], [-117.106050584768766, 76.530031846819114], [-118.040412157038119, 76.481171780087081], [-119.899317586885687, 76.053213406061971], [-121.499995077126471, 75.900018622532784], [-122.85492448615895, 76.116542873835684], [-122.854925293603188, 76.116542873835684], [-121.157535360328239, 76.864507554828336], [-119.103938971821023, 77.512219957174608], [-117.570130784965954, 77.498318996888102], [-116.198586595507322, 77.645286770326194]]], [[[-93.840003017943971, 77.51999726023449], [-94.295608283245244, 77.491342678528682], [-96.169654100310055, 77.55511139597688], [-96.436304490936109, 77.83462921824362], [-94.422577277386353, 77.820004787904978], [-93.720656297565867, 77.634331366680314], [-93.840003017943971, 77.51999726023449]]], [[[-110.186938035912945, 77.697014879050286], [-112.051191169058455, 77.409228827616843], [-113.534278937619035, 77.732206529441143], [-112.724586758253835, 78.051050116681935], [-111.264443325630822, 78.152956041161545], [-109.854451870547067, 77.996324774884812], [-110.186938035912945, 77.697014879050286]]], [[[-109.663145718202557, 78.601972561345676], [-110.88131425661885, 78.406919867659994], [-112.542091437615142, 78.407901719873493], [-112.525890876091566, 78.550554511215225], [-111.500010342233367, 78.849993598130538], [-110.96366065147599, 78.804440823065207], [-109.663145718202557, 78.601972561345676]]], [[[-95.830294969449312, 78.056941229963243], [-97.309842902397975, 77.85059723582178], [-98.124289313533964, 78.082856960757567], [-98.55286780474664, 78.458105373845086], [-98.631984422585504, 78.871930243638374], [-97.337231411512604, 78.831984361476756], [-96.754398769908761, 78.765812689926989], [-95.559277920294562, 78.41831452098026], [-95.830294969449312, 78.056941229963243]]], [[[-100.060191820052111, 78.324754340315891], [-99.670939093813601, 77.907544664207393], [-101.303940192452984, 78.018984890444798], [-102.949808722733025, 78.343228664860206], [-105.176132778731514, 78.38033234324574], [-104.210429450277147, 78.677420152491777], [-105.419580451258511, 78.918335679836431], [-105.492289191493128, 79.301593939929177], [-103.529282396237917, 79.16534902619162], [-100.8251580472688, 78.80046173777869], [-100.060191820052111, 78.324754340315891]]], [[[-87.02, 79.66], [-85.81435, 79.3369], [-87.18756, 79.0393], [-89.03535, 78.28723], [-90.80436, 78.21533], [-92.87669, 78.34333], [-93.95116, 78.75099], [-93.93574, 79.11373], [-93.14524, 79.3801], [-94.974, 79.37248], [-96.07614, 79.70502], [-96.70972, 80.15777], [-96.01644, 80.60233], [-95.32345, 80.90729], [-94.29843, 80.97727], [-94.73542, 81.20646], [-92.40984, 81.25739], [-91.13289, 80.72345], [-89.45, 80.509322033898258], [-87.81, 80.32], [-87.02, 79.66]]], [[[-68.5, 83.106321516765732], [-65.82735, 83.02801], [-63.68, 82.9], [-61.85, 82.6286], [-61.89388, 82.36165], [-64.334, 81.92775], [-66.75342, 81.72527], [-67.65755, 81.50141], [-65.48031, 81.50657], [-67.84, 80.9], [-69.4697, 80.61683], [-71.18, 79.8], [-73.2428, 79.63415], [-73.88, 79.430162204802073], [-76.90773, 79.32309], [-75.52924, 79.19766], [-76.22046, 79.01907], [-75.39345, 78.52581], [-76.34354, 78.18296], [-77.88851, 77.89991], [-78.36269, 77.50859], [-79.75951, 77.20968], [-79.61965, 76.98336], [-77.91089, 77.022045], [-77.88911, 76.777955], [-80.56125, 76.17812], [-83.17439, 76.45403], [-86.11184, 76.29901], [-87.6, 76.42], [-89.49068, 76.47239], [-89.6161, 76.95213], [-87.76739, 77.17833], [-88.26, 77.9], [-87.65, 77.970222222222205], [-84.97634, 77.53873], [-86.34, 78.18], [-87.96192, 78.37181], [-87.15198, 78.75867], [-85.37868, 78.9969], [-85.09495, 79.34543], [-86.50734, 79.73624], [-86.93179, 80.25145], [-84.19844, 80.20836], [-83.408695652173819, 80.1], [-81.84823, 80.46442], [-84.1, 80.58], [-87.59895, 80.51627], [-89.36663, 80.85569], [-90.2, 81.26], [-91.36786, 81.5531], [-91.58702, 81.89429], [-90.1, 82.085], [-88.93227, 82.11751], [-86.97024, 82.27961], [-85.5, 82.652273458057024], [-84.260005, 82.6], [-83.18, 82.32], [-82.42, 82.86], [-81.1, 83.02], [-79.30664, 83.13056], [-76.25, 83.172058823529369], [-75.71878, 83.06404], [-72.83153, 83.23324], [-70.665765, 83.169780758382828], [-68.5, 83.106321516765732]]]] } },
            { "type": "Feature", "properties": { "admin": "Switzerland", "name": "Switzerland", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[9.594226108446346, 47.525058091820256], [9.632931756232974, 47.347601223329974], [9.479969516649019, 47.102809963563367], [9.932448357796657, 46.920728054382948], [10.442701450246627, 46.893546250997424], [10.36337812667861, 46.483571275409851], [9.922836541390378, 46.314899400409182], [9.182881707403054, 46.440214748716976], [8.966305779667804, 46.036931871111186], [8.489952426801322, 46.005150865251672], [8.316629672894377, 46.163642483090847], [7.755992058959832, 45.824490057959302], [7.273850945676655, 45.776947740250769], [6.843592970414504, 45.991146552100595], [6.500099724970424, 46.429672756529428], [6.022609490593537, 46.272989813820466], [6.037388950229, 46.725778713561859], [6.768713820023605, 47.287708238303686], [6.736571079138058, 47.541801255882838], [7.192202182655505, 47.449765529971003], [7.466759067422228, 47.620581976911794], [8.31730146651415, 47.613579820336255], [8.522611932009765, 47.830827541691285], [9.594226108446346, 47.525058091820256]]] } },
            { "type": "Feature", "properties": { "admin": "Chile", "name": "Chile", "continent": "South America" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-68.634010227583147, -52.636370458874353], [-68.633349999999879, -54.8695], [-67.56244, -54.87001], [-66.95992, -54.89681], [-67.291029999999878, -55.30124], [-68.148629999999841, -55.61183], [-68.639990810811796, -55.580017999086877], [-69.2321, -55.49906], [-69.95809, -55.19843], [-71.00568, -55.05383], [-72.2639, -54.49514], [-73.2852, -53.957519999999874], [-74.66253, -52.83749], [-73.8381, -53.04743], [-72.43418, -53.7154], [-71.10773, -54.07433], [-70.591779999999787, -53.61583], [-70.26748, -52.93123], [-69.345649999999878, -52.5183], [-68.634010227583147, -52.636370458874353]]], [[[-68.219913092711224, -21.49434661223183], [-67.828179897722634, -22.872918796482178], [-67.106673550063604, -22.735924574476392], [-66.985233934177629, -22.986348565362825], [-67.328442959244128, -24.025303236590908], [-68.417652960876111, -24.518554782816874], [-68.386001146097342, -26.185016371365229], [-68.594799770772667, -26.50690886811126], [-68.295541551370391, -26.899339694935787], [-69.001234910748266, -27.521213881136127], [-69.656130337183143, -28.459141127233686], [-70.013550381129861, -29.367922865518544], [-69.919008348251921, -30.336339206668306], [-70.535068935819439, -31.365010267870279], [-70.074399380153622, -33.09120981214803], [-69.814776984319209, -33.273886000299839], [-69.817309129501453, -34.193571465798279], [-70.388049485949082, -35.169687595359441], [-70.364769253201658, -36.005088799789931], [-71.121880662709771, -36.65812387466233], [-71.118625047475419, -37.576827487947192], [-70.814664272734703, -38.552995293940732], [-71.413516608349042, -38.916022230791107], [-71.680761277946445, -39.808164157878061], [-71.915734015577542, -40.832339369470716], [-71.746803758415453, -42.051386407235988], [-72.148898078078517, -42.254888197601375], [-71.915423956983901, -43.408564548517404], [-71.464056159130493, -43.787611179378324], [-71.793622606071935, -44.207172133156099], [-71.329800788036195, -44.407521661151677], [-71.222778896759721, -44.784242852559409], [-71.659315558545316, -44.973688653341434], [-71.552009446891233, -45.560732924177117], [-71.917258470330196, -46.884838148791786], [-72.44735531278026, -47.738532810253517], [-72.331160854771937, -48.244238376661819], [-72.648247443314929, -48.878618259476774], [-73.415435757120022, -49.318436374712952], [-73.328050910114456, -50.378785088909865], [-72.975746832964617, -50.741450290734299], [-72.309973517532342, -50.677009779666342], [-72.329403856074023, -51.425956312872394], [-71.914803839796321, -52.009022305865912], [-69.498362189396076, -52.142760912637236], [-68.571545376241332, -52.299443855346247], [-69.461284349226617, -52.291950772663924], [-69.94277950710611, -52.537930590373243], [-70.8451016913545, -52.899200528525711], [-71.006332160105217, -53.833252042201345], [-71.429794684520928, -53.856454760300373], [-72.557942877884855, -53.531410001184447], [-73.702756720662862, -52.835069268607249], [-73.702756720662862, -52.835070076051487], [-74.946763475225154, -52.262753588419017], [-75.260026007778507, -51.62935475037321], [-74.976632453089806, -51.043395684615675], [-75.47975419788348, -50.378371677451547], [-75.608015102831942, -48.673772881871784], [-75.182769741502128, -47.711919447623153], [-74.126580980104677, -46.939253431995084], [-75.644395311165439, -46.647643324572016], [-74.69215369332305, -45.76397633238097], [-74.351709357384252, -44.10304412208788], [-73.240356004515192, -44.454960625995611], [-72.717803921179765, -42.383355808278985], [-73.388899909138232, -42.117532240569567], [-73.701335618774834, -43.365776462579738], [-74.33194312203257, -43.224958184584395], [-74.017957119427152, -41.794812920906828], [-73.677099372029943, -39.942212823243111], [-73.217592536090663, -39.258688653318508], [-73.505559455037044, -38.282882582351064], [-73.588060879191076, -37.156284681956016], [-73.166717088499283, -37.123780206044351], [-72.553136969681717, -35.508840020491022], [-71.861732143832555, -33.909092706031522], [-71.438450486929895, -32.418899428030819], [-71.668720669222424, -30.920644626592516], [-71.370082567007714, -30.095682061484997], [-71.48989437527645, -28.861442152625909], [-70.905123867461569, -27.640379734001193], [-70.724953986275963, -25.705924167587209], [-70.403965827095035, -23.628996677344542], [-70.091245897080668, -21.393319187101223], [-70.164419725205974, -19.756468194256183], [-70.372572394477714, -18.347975355708879], [-69.858443569605797, -18.092693780187027], [-69.590423753523979, -17.580011895419286], [-69.100246955019401, -18.260125420812653], [-68.966818406841824, -18.981683444904089], [-68.442225104430918, -19.405068454671419], [-68.757167121033703, -20.37265797290447], [-68.219913092711224, -21.49434661223183]]]] } },
            { "type": "Feature", "properties": { "admin": "China", "name": "China", "continent": "Asia" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[110.339187860151526, 18.678395087147603], [109.475209588663702, 18.19770091396861], [108.655207961056135, 18.507681993071397], [108.626217482540426, 19.367887885001974], [109.119055617308007, 19.821038519769385], [110.211598748822837, 20.101253973872073], [110.786550734502228, 20.077534491450077], [111.01005130416462, 19.695929877190732], [110.570646600386794, 19.255879218009305], [110.339187860151526, 18.678395087147603]]], [[[127.657407261262378, 49.760270494172929], [129.397817824420429, 49.440600084015429], [130.58229332898236, 48.729687404976112], [130.987281528853828, 47.790132351261391], [132.506671991099495, 47.788969631534876], [133.373595819228001, 48.183441677434914], [135.026311476786702, 48.478229885443902], [134.500813836810607, 47.578439846377833], [134.112362095272601, 47.212467352886719], [133.76964399631288, 46.116926988299056], [133.097126906466428, 45.14406647397216], [131.883454217659562, 45.32116160743643], [131.025212030156069, 44.967953192721573], [131.288555129115537, 44.111519680348252], [131.144687941614848, 42.929989732426932], [130.633866408409801, 42.903014634770543], [130.640015903852429, 42.39500946712527], [129.994267205933227, 42.985386867843793], [129.596668735879462, 42.424981797854592], [128.05221520397231, 41.994284572917984], [128.208433058790717, 41.466771552082534], [127.343782993683021, 41.503151760415953], [126.869083286649854, 41.816569322266155], [126.18204511932943, 41.107336127276362], [125.079941847840587, 40.569823716792449], [124.265624627785314, 39.928493353834135], [122.86757042856101, 39.637787583976255], [122.131387974130917, 39.170451768544623], [121.054554478032856, 38.89747101496291], [121.585994907722466, 39.360853583324136], [121.376757033372641, 39.750261338859524], [122.168595005381007, 40.422442531896046], [121.640358514493528, 40.946389878903304], [120.768628778161954, 40.593388169917596], [119.639602085449056, 39.898055935214209], [119.023463983233015, 39.252333075511096], [118.042748651197897, 39.204273993479674], [117.532702264477052, 38.73763580988409], [118.05969852098967, 38.061475531561051], [118.878149855628351, 37.897325344385898], [118.911636183753501, 37.448463853498723], [119.702802362142037, 37.156388658185072], [120.823457472823648, 37.870427761377968], [121.711258579597938, 37.481123358707165], [122.357937453298462, 37.454484157860684], [122.519994744965814, 36.930614325501828], [121.104163853033029, 36.651329047180432], [120.63700890511457, 36.111439520811125], [119.66456180224607, 35.609790554337728], [119.151208123858567, 34.909859117160458], [120.227524855633717, 34.360331936168613], [120.620369093916565, 33.37672272392512], [121.229014113450219, 32.460318711877186], [121.908145786630044, 31.692174384074683], [121.891919386890336, 30.949351508095098], [121.264257440273298, 30.676267401648712], [121.503519321784722, 30.14291494396425], [122.092113885589086, 29.832520453403156], [121.93842817595305, 29.018022365834803], [121.684438511238469, 28.225512600206677], [121.125661248866436, 28.135673122667178], [120.395473260582307, 27.053206895449385], [119.585496860839555, 25.740780544532605], [118.656871372554519, 24.547390855400234], [117.281606479970833, 23.624501451099714], [115.890735304835118, 22.782873236578094], [114.763827345846209, 22.668074042241663], [114.152546828265656, 22.223760077396204], [113.806779819800752, 22.548339748621423], [113.241077915501592, 22.051367499270462], [111.843592157032447, 21.550493679281512], [110.78546552942413, 21.39714386645533], [110.444039341271662, 20.34103261970639], [109.88986128137357, 20.282457383703441], [109.627655063924635, 21.008227037026725], [109.864488153118316, 21.395050970947516], [108.522812941524421, 21.715212307211821], [108.050180291782979, 21.552379869060101], [107.043420037872636, 21.8118989120299], [106.567273390735352, 22.21820486092474], [106.725403273548466, 22.794267889898375], [105.811247186305209, 22.976892401617899], [105.329209425886631, 23.352063300056976], [104.476858351664475, 22.819150092046918], [103.504514601660503, 22.703756618739217], [102.706992222100155, 22.708795070887696], [102.170435825613552, 22.464753119389336], [101.652017856861576, 22.318198757409554], [101.803119744882906, 21.174366766845051], [101.27002566936001, 21.201651923095167], [101.180005324307558, 21.436572984294052], [101.150032993578236, 21.849984442629015], [100.416537713627349, 21.558839423096654], [99.983489211021549, 21.742936713136451], [99.240898878987196, 22.118314317304559], [99.53199222208741, 22.949038804612591], [98.898749220782804, 23.142722072842581], [98.66026248575578, 24.063286037690002], [97.604719679762027, 23.897404690033049], [97.724609002679131, 25.083637193293036], [98.671838006589212, 25.91870250091349], [98.712093947344556, 26.743535874940243], [98.682690057370507, 27.508812160750658], [98.246230910233351, 27.747221381129172], [97.91198774616943, 28.335945136014367], [97.327113885490007, 28.261582749946339], [96.248833449287829, 28.411030992134467], [96.586590610747521, 28.830979519154361], [96.117678664131006, 29.452802028922513], [95.404802280664626, 29.031716620392157], [94.565990431702929, 29.27743805593996], [93.413347609432662, 28.640629380807233], [92.503118931043616, 27.896876329046442], [91.696656528696693, 27.771741848251615], [91.258853794319876, 28.040614325466343], [90.730513950567797, 28.064953925075738], [90.015828891971182, 28.296438503527177], [89.475810174521158, 28.042758897406365], [88.814248488320573, 27.299315904239389], [88.730325962278528, 28.086864732367552], [88.120440708369941, 27.876541652939572], [86.954517043000635, 27.974261786403524], [85.823319940131526, 28.203575954698742], [85.011638218123053, 28.642773952747369], [84.23457970575015, 28.839893703724691], [83.89899295444674, 29.320226141877633], [83.337115106137176, 29.463731594352193], [82.327512648450877, 30.115268052688204], [81.525804477874786, 30.422716986608659], [81.111256138029276, 30.183480943313402], [79.721366815107118, 30.882714748654728], [78.738894484374001, 31.515906073527045], [78.458446486326025, 32.61816437431272], [79.176128777995544, 32.483779812137747], [79.208891636068543, 32.994394639613738], [78.811086460285722, 33.506198025032397], [78.912268914713209, 34.321936346975768], [77.83745079947461, 35.494009507787794], [76.192848341785705, 35.89840342868785], [75.896897414050173, 36.666806138651872], [75.158027785140987, 37.133030910789152], [74.980002475895404, 37.419990139305888], [74.829985792952144, 37.990007025701445], [74.864815708316783, 38.378846340481587], [74.25751427602269, 38.606506862943476], [73.928852166646394, 38.505815334622717], [73.675379266254836, 39.431236884105566], [73.960013055318427, 39.660008449861714], [73.822243686828315, 39.893973497063136], [74.776862420556043, 40.366425279291619], [75.467827996730719, 40.56207225194867], [76.526368035797432, 40.427946071935132], [76.90448449087711, 41.066485907549648], [78.187196893226044, 41.185315863604799], [78.543660923175253, 41.582242540038713], [80.119430373051401, 42.12394074153822], [80.259990268885318, 42.34999929459908], [80.180150180994374, 42.920067857426844], [80.866206496101213, 43.180362046881008], [79.966106398441426, 44.917516994804622], [81.947070753918084, 45.317027492853143], [82.458925815769035, 45.539649563166499], [83.180483839860543, 47.330031236350735], [85.164290399113213, 47.000955715516099], [85.720483839870667, 47.452969468773077], [85.76823286330837, 48.455750637396896], [86.59877648310335, 48.549181626980605], [87.359970330762692, 49.214980780629148], [87.751264276076668, 49.297197984405464], [88.013832228551678, 48.599462795600594], [88.854297723346747, 48.069081732773007], [90.280825636763893, 47.693549099307901], [90.970809360724957, 46.88814606382293], [90.585768263718307, 45.719716091487491], [90.945539585334316, 45.286073309910243], [92.133890822318222, 45.115075995456429], [93.480733677141316, 44.97547211362], [94.688928664125356, 44.352331854828456], [95.306875441471504, 44.241330878265458], [95.762454868556688, 43.319449164394619], [96.349395786527808, 42.725635280928643], [97.451757440177971, 42.74888967546007], [99.515817498779995, 42.524691473961688], [100.845865513108279, 42.663804429691417], [101.833040399179936, 42.51487295182627], [103.312278273534787, 41.907468166667613], [104.522281935649005, 41.90834666601662], [104.964993931093431, 41.597409572916334], [106.129315627061658, 42.134327704428891], [107.744772576937976, 42.481515814781908], [109.243595819131428, 42.519446316084149], [110.412103306115299, 42.871233628911014], [111.129682244920218, 43.406834011400171], [111.82958784388137, 43.743118394539486], [111.667737257943202, 44.073175767587706], [111.348376906379428, 44.457441718110047], [111.87330610560025, 45.102079372735112], [112.436062453258842, 45.01164561622425], [113.463906691544196, 44.808893134127111], [114.46033165899604, 45.339816799493875], [115.985096470200133, 45.727235012386004], [116.717868280098855, 46.38820241961524], [117.421701287914246, 46.67273285581421], [118.874325799638711, 46.805412095723646], [119.663269891438745, 46.692679958678944], [119.772823927897562, 47.048058783550132], [118.866574334794947, 47.747060044946195], [118.064142694166719, 48.06673045510373], [117.295507440257438, 47.697709052107385], [116.308952671373234, 47.853410142602812], [115.742837355615734, 47.726544501326273], [115.485282017073018, 48.135382595403442], [116.191802199367601, 49.134598090199056], [116.67880089728618, 49.888531399121398], [117.879244419426371, 49.510983384796944], [119.288460728025839, 50.142882798862033], [119.279365675942358, 50.582907619827282], [120.182049595216924, 51.64356639261802], [120.738191359541972, 51.964115302124547], [120.725789015791975, 52.516226304730814], [120.177088657716865, 52.753886216841195], [121.003084751470226, 53.251401068731226], [122.245747918792858, 53.431725979213681], [123.571506789240843, 53.458804429734627], [125.068211297710434, 53.161044826868832], [125.946348911646169, 52.792798570356936], [126.564399041856959, 51.784255479532689], [126.939156528837657, 51.353894151405896], [127.287455682484904, 50.739797268265434], [127.657407261262378, 49.760270494172929]]]] } },
            { "type": "Feature", "properties": { "admin": "Ivory Coast", "name": "Côte d'Ivoire", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[-2.856125047202397, 4.994475816259508], [-3.311084357100071, 4.984295559098014], [-4.008819545904941, 5.179813340674314], [-4.64991736491791, 5.168263658057084], [-5.834496222344525, 4.993700669775135], [-6.528769090185845, 4.705087795425015], [-7.518941209330434, 4.338288479017307], [-7.712159389669749, 4.364565944837721], [-7.63536821128403, 5.188159084489455], [-7.53971513511176, 5.313345241716517], [-7.570152553731686, 5.707352199725903], [-7.993692592795879, 6.126189683451541], [-8.311347622094017, 6.193033148621081], [-8.602880214868618, 6.467564195171659], [-8.385451626000572, 6.911800645368742], [-8.485445522485348, 7.395207831243068], [-8.439298468448696, 7.686042792181736], [-8.280703497744936, 7.687179673692156], [-8.221792364932197, 8.123328762235571], [-8.299048631208562, 8.316443589710302], [-8.203498907900878, 8.455453192575446], [-7.832100389019186, 8.575704250518625], [-8.079113735374348, 9.376223863152033], [-8.309616461612249, 9.789531968622439], [-8.22933712404682, 10.129020290563897], [-8.029943610048617, 10.206534939001711], [-7.89958980959237, 10.297382106970824], [-7.622759161804808, 10.147236232946792], [-6.850506557635057, 10.138993841996237], [-6.666460944027547, 10.430810655148447], [-6.493965013037267, 10.411302801958268], [-6.205222947606429, 10.524060777219132], [-6.050452032892266, 10.096360785355442], [-5.816926235365286, 10.222554633012191], [-5.404341599946973, 10.370736802609144], [-4.954653286143098, 10.152713934769732], [-4.779883592131966, 9.821984768101741], [-4.330246954760383, 9.610834865757139], [-3.980449184576684, 9.862344061721698], [-3.511898972986272, 9.900326239456216], [-2.827496303712706, 9.642460842319775], [-2.56218950032624, 8.219627793811481], [-2.983584967450326, 7.379704901555511], [-3.244370083011261, 6.2504715031135], [-2.810701463217839, 5.389051215024109], [-2.856125047202397, 4.994475816259508]]] } },
            { "type": "Feature", "properties": { "admin": "Cameroon", "name": "Cameroon", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[13.07582238124675, 2.267097072759014], [12.951333855855605, 2.321615708826939], [12.359380323952218, 2.19281220133945], [11.751665480199787, 2.326757513839993], [11.276449008843711, 2.261050930180871], [9.649158155972627, 2.283866075037735], [9.795195753629455, 3.073404445809117], [9.404366896205998, 3.734526882335202], [8.948115675501068, 3.904128933117135], [8.744923943729416, 4.352215277519959], [8.488815545290889, 4.495617377129917], [8.500287713259693, 4.771982937026847], [8.757532993208626, 5.47966583904791], [9.233162876023043, 6.444490668153334], [9.522705926154398, 6.453482367372116], [10.118276808318255, 7.038769639509879], [10.497375115611417, 7.055357774275562], [11.058787876030349, 6.644426784690593], [11.745774366918509, 6.981382961449753], [11.839308709366801, 7.397042344589434], [12.063946160539556, 7.799808457872301], [12.218872104550597, 8.305824082874322], [12.753671502339214, 8.717762762888993], [12.955467970438971, 9.417771714714702], [13.1675997249971, 9.64062632897341], [13.308676385153914, 10.160362046748926], [13.572949659894558, 10.798565985553564], [14.415378859116682, 11.572368882692071], [14.468192172918974, 11.90475169519341], [14.57717776862253, 12.085360826053501], [14.181336297266792, 12.483656927943112], [14.213530714584634, 12.802035427293344], [14.495787387762842, 12.859396267137326], [14.893385857816522, 12.219047756392582], [14.960151808337598, 11.555574042197222], [14.923564894274955, 10.891325181517471], [15.467872755605269, 9.982336737503429], [14.909353875394713, 9.99212942142273], [14.627200555081057, 9.920919297724536], [14.171466098699025, 10.021378282099928], [13.954218377344002, 9.549494940626685], [14.544466586981766, 8.965861314322266], [14.979995558337688, 8.796104234243471], [15.120865512765331, 8.382150173369423], [15.436091749745765, 7.692812404811971], [15.279460483469107, 7.421924546737968], [14.776545444404572, 6.408498033062044], [14.536560092841111, 6.22695872642069], [14.459407179429345, 5.451760565610299], [14.558935988023501, 5.03059764243153], [14.478372430080466, 4.732605495620446], [14.950953403389658, 4.21038930909492], [15.036219516671249, 3.851367295747123], [15.405395948964379, 3.335300604664339], [15.862732374747479, 3.013537298998982], [15.907380812247649, 2.557389431158612], [16.01285241055535, 2.267639675298084], [15.940918816805061, 1.727672634280295], [15.14634199388524, 1.964014797367184], [14.337812534246577, 2.22787466064949], [13.07582238124675, 2.267097072759014]]] } },
            { "type": "Feature", "properties": { "admin": "Democratic Republic of the Congo", "name": "Dem. Rep. Congo", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[30.833859897593801, 3.50916596111034], [30.773346795380036, 2.339883327642127], [31.174149204235807, 2.204465236821263], [30.852670118948048, 1.849396470543809], [30.468507521290292, 1.58380544677972], [30.086153598762703, 1.062312730306288], [29.875778842902488, 0.597379868976304], [29.819503208136634, -0.205310153813372], [29.587837762172164, -0.58740569417948], [29.579466180140876, -1.341313164885626], [29.29188683443661, -1.620055840667987], [29.254834832483336, -2.215109958508911], [29.117478875451546, -2.292211195488384], [29.02492638521678, -2.839257907730157], [29.276383904749046, -3.293907159034063], [29.339997592900342, -4.499983412294092], [29.519986606572925, -5.419978936386313], [29.41999271008816, -5.939998874539432], [29.620032179490003, -6.520015150583424], [30.199996779101692, -7.079980970898161], [30.740015496551781, -8.340007419470913], [30.34608605319081, -8.238256524288216], [29.002912225060467, -8.40703175215347], [28.734866570762495, -8.526559340044576], [28.449871046672818, -9.164918308146083], [28.673681674928922, -9.605924981324931], [28.496069777141763, -10.789883721564044], [28.372253045370421, -11.793646742401389], [28.642417433392346, -11.971568698782312], [29.341547885869087, -12.36074391037241], [29.616001417771223, -12.178894545137307], [29.699613885219485, -13.257226657771827], [28.934285922976834, -13.248958428605132], [28.52356163912102, -12.698604424696679], [28.15510867687998, -12.272480564017894], [27.38879886242378, -12.132747491100663], [27.164419793412456, -11.608748467661071], [26.55308759939961, -11.924439792532125], [25.752309604604726, -11.784965101776356], [25.418118116973197, -11.330935967659958], [24.783169793402948, -11.238693536018962], [24.314516228947948, -11.262826429899269], [24.257155389103982, -10.951992689663655], [23.912215203555714, -10.926826267137512], [23.456790805767433, -10.867863457892481], [22.837345411884733, -11.017621758674329], [22.402798292742371, -10.99307545333569], [22.155268182064304, -11.084801120653768], [22.208753289486388, -9.894796237836507], [21.87518191904234, -9.523707777548564], [21.801801385187897, -8.908706556842978], [21.949130893652036, -8.305900974158275], [21.746455926203303, -7.920084730667147], [21.728110792739695, -7.2908724910813], [20.514748162526498, -7.299605808138629], [20.601822950938292, -6.93931772219968], [20.091621534920645, -6.943090101756993], [20.037723016040214, -7.116361179231644], [19.417502475673157, -7.155428562044297], [19.166613396896107, -7.738183688999753], [19.016751743249664, -7.988245944860132], [18.464175652752683, -7.847014255406442], [18.134221632569048, -7.98767750410492], [17.472970004962232, -8.068551120641699], [17.089995965247166, -7.545688978712525], [16.860190870845198, -7.222297865429984], [16.573179965896141, -6.622644545115087], [16.326528354567042, -5.877470391466267], [13.375597364971892, -5.864241224799548], [13.02486941900696, -5.984388929878157], [12.735171339578695, -5.965682061388497], [12.322431674863507, -6.100092461779658], [12.182336866920249, -5.789930515163837], [12.436688266660866, -5.684303887559245], [12.468004184629734, -5.248361504745003], [12.631611769265788, -4.991271254092935], [12.995517205465173, -4.781103203961883], [13.258240187237044, -4.882957452009165], [13.600234816144676, -4.500138441590969], [14.144956088933295, -4.510008640158715], [14.209034864975219, -4.793092136253597], [14.582603794013179, -4.970238946150139], [15.170991652088441, -4.3435071753143], [15.753540073314749, -3.855164890156096], [16.006289503654298, -3.535132744972528], [15.972803175529149, -2.712392266453612], [16.407091912510051, -1.740927015798682], [16.86530683764212, -1.225816338713287], [17.523716261472853, -0.743830254726987], [17.638644646889983, -0.424831638189246], [17.663552687254676, -0.058083998213817], [17.826540154703245, 0.288923244626105], [17.774191928791563, 0.855658677571085], [17.89883548347958, 1.741831976728278], [18.09427575040743, 2.365721543788055], [18.39379235197114, 2.90044342692822], [18.453065219809925, 3.504385891123348], [18.542982211997778, 4.201785183118317], [18.932312452884755, 4.709506130385973], [19.467783644293146, 5.031527818212779], [20.290679152108932, 4.691677761245287], [20.927591180106273, 4.322785549329736], [21.659122755630019, 4.224341945813719], [22.405123732195531, 4.02916006104732], [22.704123569436284, 4.633050848810156], [22.841479526468103, 4.710126247573483], [23.297213982850135, 4.609693101414221], [24.41053104014625, 5.108784084489129], [24.805028924262409, 4.897246608902349], [25.128833449003274, 4.927244777847789], [25.278798455514302, 5.170408229997191], [25.650455356557465, 5.256087754737123], [26.402760857862535, 5.150874538590869], [27.044065382604703, 5.127852688004835], [27.374226108517483, 5.233944403500059], [27.979977247842807, 4.408413397637373], [28.428993768026906, 4.287154649264493], [28.696677687298795, 4.455077215996936], [29.159078403446497, 4.38926727947323], [29.715995314256013, 4.600804755060024], [29.953500197069467, 4.173699042167683], [30.833859897593801, 3.50916596111034]]] } },
            { "type": "Feature", "properties": { "admin": "Republic of Congo", "name": "Congo", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[12.995517205465173, -4.781103203961883], [12.620759718484491, -4.438023369976135], [12.318607618873923, -4.606230157086187], [11.914963006242086, -5.037986748884789], [11.093772820691923, -3.978826592630546], [11.855121697648114, -3.42687061932105], [11.478038771214299, -2.765618991714241], [11.820963575903189, -2.514161472181982], [12.495702752338159, -2.391688327650242], [12.575284458067639, -1.948511244315134], [13.109618767965626, -2.428740329603513], [13.992407260807706, -2.470804945489099], [14.299210239324564, -1.998275648612213], [14.425455763413593, -1.333406670744971], [14.316418491277741, -0.552627455247048], [13.843320753645653, 0.038757635901149], [14.276265903386953, 1.196929836426619], [14.026668735417214, 1.395677395021153], [13.282631463278816, 1.31418366129688], [13.003113641012074, 1.830896307783319], [13.07582238124675, 2.267097072759014], [14.337812534246577, 2.22787466064949], [15.14634199388524, 1.964014797367184], [15.940918816805061, 1.727672634280295], [16.01285241055535, 2.267639675298084], [16.537058139724135, 3.198254706226278], [17.133042433346297, 3.728196519379451], [17.809900343505259, 3.560196437998569], [18.453065219809925, 3.504385891123348], [18.39379235197114, 2.90044342692822], [18.09427575040743, 2.365721543788055], [17.89883548347958, 1.741831976728278], [17.774191928791563, 0.855658677571085], [17.826540154703245, 0.288923244626105], [17.663552687254676, -0.058083998213817], [17.638644646889983, -0.424831638189246], [17.523716261472853, -0.743830254726987], [16.86530683764212, -1.225816338713287], [16.407091912510051, -1.740927015798682], [15.972803175529149, -2.712392266453612], [16.006289503654298, -3.535132744972528], [15.753540073314749, -3.855164890156096], [15.170991652088441, -4.3435071753143], [14.582603794013179, -4.970238946150139], [14.209034864975219, -4.793092136253597], [14.144956088933295, -4.510008640158715], [13.600234816144676, -4.500138441590969], [13.258240187237044, -4.882957452009165], [12.995517205465173, -4.781103203961883]]] } },
            { "type": "Feature", "properties": { "admin": "Colombia", "name": "Colombia", "continent": "South America" }, "geometry": { "type": "Polygon", "coordinates": [[[-75.373223232713841, -0.15203175212045], [-75.801465827116587, 0.084801337073202], [-76.292314419240938, 0.416047268064119], [-76.576379767549383, 0.256935533037435], [-77.424984300430367, 0.395686753741117], [-77.668612840470416, 0.825893052570961], [-77.855061408179509, 0.809925034992773], [-78.855258755188686, 1.380923773601822], [-78.990935228171026, 1.691369940595251], [-78.617831387023699, 1.766404120283056], [-78.662118089497838, 2.267355454920476], [-78.427610439757302, 2.629555568854215], [-77.931542527971473, 2.696605739752925], [-77.510431281224996, 3.325016994638246], [-77.127689785455246, 3.849636135265356], [-77.496271938776999, 4.087606105969427], [-77.307601284479375, 4.667984117039452], [-77.533220587865713, 5.582811997902496], [-77.318815070286718, 5.845354112161359], [-77.476660732722266, 6.691116441266301], [-77.881571417945239, 7.223771267114783], [-77.75341386586139, 7.709839789252141], [-77.431107957656977, 7.638061224798733], [-77.242566494440069, 7.935278225125442], [-77.474722866511314, 8.524286200388216], [-77.353360765273848, 8.670504665558068], [-76.836673957003541, 8.638749497914715], [-76.086383836557843, 9.336820583529486], [-75.674600185840035, 9.443248195834597], [-75.664704149056149, 9.774003200718736], [-75.480425991503338, 10.618990383339305], [-74.906895107711975, 11.08304474532032], [-74.276752692344871, 11.102035834187586], [-74.197222663047683, 11.310472723836865], [-73.414763963500278, 11.227015285685479], [-72.62783525255962, 11.731971543825519], [-72.238194953078903, 11.955549628136325], [-71.754090135368628, 12.437303168177305], [-71.399822353791691, 12.376040757695289], [-71.137461107045866, 12.112981879113503], [-71.331583624950284, 11.776284084515805], [-71.973921678338272, 11.608671576377116], [-72.227575446242923, 11.108702093953237], [-72.614657762325194, 10.821975409381777], [-72.905286017534692, 10.45034434655477], [-73.027604132769554, 9.736770331252441], [-73.304951544880026, 9.151999823437604], [-72.788729824500379, 9.085027167187331], [-72.660494757768092, 8.62528778730268], [-72.439862230097944, 8.405275376820027], [-72.360900641555958, 8.002638454617893], [-72.479678921178831, 7.632506008327352], [-72.444487270788059, 7.42378489830048], [-72.19835242378187, 7.340430813013682], [-71.960175747348629, 6.991614895043538], [-70.674233567981503, 7.087784735538717], [-70.093312954372408, 6.960376491723109], [-69.389479946557103, 6.099860541198835], [-68.985318569602327, 6.206804917826856], [-68.265052456318216, 6.153268133972473], [-67.695087246355001, 6.267318020040645], [-67.34143958196556, 6.095468044454021], [-67.521531948502741, 5.556870428891968], [-67.744696621355203, 5.221128648291667], [-67.823012254493534, 4.503937282728898], [-67.621835903581271, 3.839481716319994], [-67.33756384954367, 3.542342230641721], [-67.303173183853417, 3.31845408773718], [-67.809938117123693, 2.820655015469569], [-67.447092047786299, 2.600280869960869], [-67.181294318293041, 2.250638129074062], [-66.876325853122566, 1.253360500489336], [-67.065048183852483, 1.130112209473225], [-67.25999752467358, 1.719998684084956], [-67.537810024674684, 2.037162787276329], [-67.868565029558823, 1.692455145673392], [-69.816973232691609, 1.714805202639624], [-69.804596727157701, 1.089081122233466], [-69.218637661400166, 0.985676581217433], [-69.252434048119042, 0.602650865070075], [-69.452396002872447, 0.706158758950693], [-70.015565761989293, 0.541414292804205], [-70.02065589057004, -0.185156345219539], [-69.577065395776586, -0.549991957200163], [-69.420485805932216, -1.122618503426409], [-69.444101935489599, -1.556287123219817], [-69.893635219996611, -4.298186944194326], [-70.394043952094975, -3.766591485207825], [-70.692682054309699, -3.742872002785858], [-70.047708502874841, -2.725156345229699], [-70.813475714791949, -2.256864515800742], [-71.413645799429773, -2.342802422702128], [-71.774760708285385, -2.169789727388937], [-72.325786505813639, -2.434218031426453], [-73.070392218707212, -2.308954359550952], [-73.659503546834586, -1.260491224781134], [-74.122395189089048, -1.002832533373848], [-74.441600511355958, -0.530820000819887], [-75.106624518520064, -0.05720549886486], [-75.373223232713841, -0.15203175212045]]] } },
            { "type": "Feature", "properties": { "admin": "Costa Rica", "name": "Costa Rica", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-82.965783047197348, 8.225027980985983], [-83.508437262694287, 8.446926581247281], [-83.711473965169063, 8.656836249216864], [-83.596313035806631, 8.830443223501417], [-83.632641567707822, 9.051385809765319], [-83.909885626953724, 9.290802720573579], [-84.303401658856345, 9.487354030795712], [-84.64764421256865, 9.615537421095707], [-84.713350796227743, 9.908051866083849], [-84.975660366541319, 10.086723130733004], [-84.911374884770211, 9.795991522658921], [-85.110923428065291, 9.557039699741308], [-85.339488288092255, 9.834542141148658], [-85.660786505866966, 9.93334747969072], [-85.797444831062819, 10.134885565629032], [-85.791708747078417, 10.439337266476612], [-85.65931372754666, 10.754330959511718], [-85.941725430021748, 10.895278428587799], [-85.712540452807289, 11.088444932494822], [-85.561851976244171, 11.217119248901593], [-84.903003302738924, 10.952303371621895], [-84.673069017256239, 11.082657172078139], [-84.355930752281026, 10.999225572142901], [-84.190178595704822, 10.793450018756671], [-83.895054490885926, 10.726839097532444], [-83.655611741861563, 10.938764146361418], [-83.402319708982944, 10.39543813724465], [-83.015676642575158, 9.992982082555553], [-82.546196255203469, 9.566134751824674], [-82.932890998043561, 9.476812038608172], [-82.927154914059145, 9.074330145702914], [-82.719183112300513, 8.925708726431493], [-82.868657192704759, 8.807266343618521], [-82.829770677405151, 8.626295477732368], [-82.9131764391242, 8.423517157419068], [-82.965783047197348, 8.225027980985983]]] } },
            { "type": "Feature", "properties": { "admin": "Cuba", "name": "Cuba", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-82.268151211257035, 23.188610744717703], [-81.404457160146819, 23.117271429938775], [-80.61876868358118, 23.105980129482994], [-79.679523688460222, 22.765303249598823], [-79.281485968732071, 22.399201565027049], [-78.347434455056472, 22.512166246017085], [-77.993295864560253, 22.277193508385928], [-77.146422492161037, 21.657851467367831], [-76.523824835908528, 21.20681956632437], [-76.194620123993175, 21.220565497314006], [-75.598222418912655, 21.01662445727413], [-75.671060350228032, 20.735091254147999], [-74.933896043584483, 20.693905137611381], [-74.178024868451246, 20.284627793859737], [-74.296648118777242, 20.050378526280678], [-74.961594611292924, 19.923435370355687], [-75.634680141894577, 19.873774318923193], [-76.323656175425981, 19.952890936762056], [-77.755480923153044, 19.855480861891873], [-77.085108405246729, 20.413353786698789], [-77.492654588516601, 20.673105373613886], [-78.137292243141573, 20.739948838783427], [-78.482826707661161, 21.028613389565848], [-78.719866502583997, 21.598113511638431], [-79.284999966127913, 21.559175319906497], [-80.217475348618635, 21.827324327069032], [-80.517534552721401, 22.037078965741756], [-81.820943366203167, 22.192056586185068], [-82.169991828118611, 22.387109279870746], [-81.79500179719264, 22.636964830001951], [-82.775897996740838, 22.688150336187057], [-83.494458787759328, 22.168517971276124], [-83.908800421875611, 22.154565334557329], [-84.052150845053248, 21.910575059491251], [-84.547030198896351, 21.801227728761639], [-84.974911058273079, 21.896028143801082], [-84.44706214062775, 22.204949856041903], [-84.23035702181177, 22.56575470630376], [-83.778239915690165, 22.78811839445569], [-83.267547573565736, 22.983041897060641], [-82.510436164057495, 23.078746649665181], [-82.268151211257035, 23.188610744717703]]] } },
            { "type": "Feature", "properties": { "admin": "Northern Cyprus", "name": "N. Cyprus", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[32.731780226377445, 35.14002594658843], [32.802473585752743, 35.145503648411363], [32.946960890440799, 35.38670339613369], [33.667227003724939, 35.373215847305509], [34.576473829900458, 35.671595567358786], [33.900804477684197, 35.245755927057608], [33.973616570783456, 35.058506374647997], [33.866439650210104, 35.093594672174177], [33.675391880027057, 35.017862860650446], [33.525685255677494, 35.038688462864066], [33.475817498515845, 35.000344550103499], [33.45592207208346, 35.101423651666401], [33.383833449036295, 35.162711900364563], [33.190977003723042, 35.173124701471373], [32.919572381326127, 35.087832749973636], [32.731780226377445, 35.14002594658843]]] } },
            { "type": "Feature", "properties": { "admin": "Cyprus", "name": "Cyprus", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[33.973616570783456, 35.058506374647997], [34.004880812320032, 34.978097846001852], [32.97982710137844, 34.571869411755436], [32.490296258277532, 34.701654771456468], [32.256667107885953, 35.103232326796622], [32.731780226377445, 35.14002594658843], [32.919572381326127, 35.087832749973636], [33.190977003723042, 35.173124701471373], [33.383833449036295, 35.162711900364563], [33.45592207208346, 35.101423651666401], [33.475817498515845, 35.000344550103499], [33.525685255677494, 35.038688462864066], [33.675391880027057, 35.017862860650446], [33.866439650210104, 35.093594672174177], [33.973616570783456, 35.058506374647997]]] } },
            { "type": "Feature", "properties": { "admin": "Czech Republic", "name": "Czech Rep.", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[16.960288120194573, 48.596982326850593], [16.49928266771877, 48.785808010445095], [16.029647251050218, 48.733899034207916], [15.253415561593979, 49.039074205107575], [14.901447381254055, 48.964401760445817], [14.33889773932472, 48.555305284207193], [13.595945672264433, 48.877171942737135], [13.031328973043427, 49.307068182973232], [12.52102420416119, 49.54741526956272], [12.415190870827441, 49.96912079528056], [12.240111118222556, 50.266337795607271], [12.96683678554319, 50.484076443069071], [13.338131951560282, 50.733234361364346], [14.05622765468817, 50.926917629594286], [14.307013380600633, 51.117267767941399], [14.570718214586062, 51.002339382524262], [15.016995883858666, 51.106674099321566], [15.490972120839725, 50.7847299261432], [16.238626743238566, 50.697732652379827], [16.176253289462263, 50.4226073268579], [16.719475945714429, 50.215746568393527], [16.868769158605655, 50.473973700556016], [17.554567091551117, 50.36214590107641], [17.649445021238986, 50.049038397819942], [18.392913852622168, 49.988628648470737], [18.85314415861361, 49.496229763377634], [18.554971144289478, 49.495015367218777], [18.399993523846174, 49.315000515330034], [18.170498488037961, 49.271514797556421], [18.104972771891848, 49.043983466175298], [17.913511590250462, 48.996492824899072], [17.886484816161808, 48.903475246773695], [17.545006951577101, 48.800019029325362], [17.101984897538895, 48.8169688991171], [16.960288120194573, 48.596982326850593]]] } },
            { "type": "Feature", "properties": { "admin": "Germany", "name": "Germany", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[9.92190636560923, 54.983104153048025], [9.939579705452898, 54.596641954153242], [10.950112338920517, 54.363607082733147], [10.939466993868447, 54.008693345752583], [11.95625247564328, 54.196485500701144], [12.518440382546711, 54.470370591847988], [13.647467075259495, 54.075510972705885], [14.119686313542555, 53.757029120491026], [14.353315463934164, 53.248171291713092], [14.074521111719431, 52.981262518925334], [14.437599725002197, 52.62485016540829], [14.685026482815713, 52.089947414755208], [14.607098422919645, 51.745188096719964], [15.016995883858781, 51.106674099321701], [14.570718214586119, 51.002339382524369], [14.307013380600662, 51.117267767941364], [14.05622765468831, 50.92691762959435], [13.338131951560397, 50.733234361364268], [12.966836785543249, 50.484076443069164], [12.240111118222668, 50.266337795607214], [12.41519087082747, 49.969120795280602], [12.521024204161332, 49.547415269562741], [13.031328973043513, 49.307068182973232], [13.595945672264575, 48.877171942737156], [13.243357374737112, 48.416114813829026], [12.884102817443873, 48.289145819687846], [13.025851271220514, 47.637583523135945], [12.93262698736606, 47.467645575543983], [12.620759718484519, 47.672387600284409], [12.141357456112869, 47.703083401065768], [11.426414015354847, 47.523766181013045], [10.544504021861597, 47.566399237653783], [10.402083774465321, 47.302487697939164], [9.896068149463188, 47.58019684507569], [9.594226108446376, 47.525058091820185], [8.522611932009793, 47.830827541691342], [8.317301466514092, 47.613579820336263], [7.466759067422286, 47.620581976911907], [7.59367638513106, 48.333019110703724], [8.099278598674855, 49.017783515003423], [6.658229607783709, 49.201958319691627], [6.186320428094176, 49.4638028021145], [6.242751092156992, 49.90222565367872], [6.043073357781109, 50.128051662794221], [6.156658155958779, 50.803721015010574], [5.988658074577812, 51.85161570902504], [6.589396599970825, 51.85202912048338], [6.842869500362381, 52.228440253297542], [7.092053256873895, 53.14404328064488], [6.905139601274128, 53.482162177130633], [7.100424838905268, 53.693932196662658], [7.936239454793961, 53.748295803433777], [8.121706170289483, 53.527792466844275], [8.800734490604667, 54.02078563090889], [8.572117954145368, 54.395646470754045], [8.526229282270206, 54.962743638725144], [9.282048780971136, 54.830865383516297], [9.92190636560923, 54.983104153048025]]] } },
            { "type": "Feature", "properties": { "admin": "Djibouti", "name": "Djibouti", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[43.081226027200152, 12.699638576707112], [43.317852410664663, 12.390148423711022], [43.286381463398911, 11.974928290245883], [42.715873650896519, 11.735640570518338], [43.145304803242126, 11.462039699748853], [42.776851841000948, 10.926878566934416], [42.55493000000012, 11.105110000000193], [42.314140000000116, 11.0342], [41.755570000000191, 11.05091], [41.739590000000177, 11.355110000000137], [41.661760000000122, 11.6312], [42.000000000000107, 12.100000000000133], [42.351560000000106, 12.54223000000013], [42.779642368344739, 12.455415757695672], [43.081226027200152, 12.699638576707112]]] } },
            { "type": "Feature", "properties": { "admin": "Denmark", "name": "Denmark", "continent": "Europe" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[12.690006137755629, 55.60999095318077], [12.089991082414738, 54.800014553437919], [11.043543328504226, 55.36486379660424], [10.90391360845163, 55.779954738988735], [12.370904168353288, 56.111407375708822], [12.690006137755629, 55.60999095318077]]], [[[10.912181837618359, 56.4586213242779], [10.667803989309986, 56.081383368547208], [10.369992710011983, 56.190007229224719], [9.649984978889306, 55.469999498102041], [9.921906365609173, 54.983104153048046], [9.282048780971136, 54.830865383516155], [8.526229282270235, 54.962743638724973], [8.120310906617588, 55.517722683323612], [8.089976840862247, 56.540011705137587], [8.256581658571262, 56.809969387430286], [8.543437534223385, 57.110002753316891], [9.424469028367609, 57.172066148499468], [9.775558709358561, 57.447940782289649], [10.580005730846151, 57.730016587954843], [10.54610599126269, 57.21573273378614], [10.250000034230222, 56.890016181050456], [10.369992710011983, 56.60998159446082], [10.912181837618359, 56.4586213242779]]]] } },
            { "type": "Feature", "properties": { "admin": "Dominican Republic", "name": "Dominican Rep.", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-71.71236141629295, 19.714455878167353], [-71.587304450146604, 19.884910590082093], [-70.806706102161726, 19.880285549391981], [-70.214364997016119, 19.622885240146157], [-69.950815192327568, 19.647999986240002], [-69.769250047470067, 19.293267116772437], [-69.222125820579862, 19.313214219637096], [-69.254346076113819, 19.015196234609871], [-68.809411994080818, 18.979074408437846], [-68.317943284768958, 18.612197577381689], [-68.689315965434503, 18.205142320218609], [-69.164945848248905, 18.422648423735108], [-69.623987596297624, 18.380712998930246], [-69.952933926051529, 18.428306993071057], [-70.133232998317879, 18.245915025296892], [-70.517137213814195, 18.184290879788829], [-70.669298468697619, 18.42688589118303], [-70.999950120717173, 18.283328762276206], [-71.400209927033885, 17.598564357976596], [-71.657661912712001, 17.757572740138695], [-71.708304816358037, 18.044997056546091], [-71.687737596305865, 18.316660061104468], [-71.945112067335543, 18.616900132720257], [-71.701302659782485, 18.785416978424049], [-71.624873216422813, 19.169837958243303], [-71.71236141629295, 19.714455878167353]]] } },
            { "type": "Feature", "properties": { "admin": "Algeria", "name": "Algeria", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[11.99950564947161, 23.471668402596443], [8.572893100629782, 21.565660712159136], [5.677565952180684, 19.601206976799713], [4.267419467800038, 19.155265204336995], [3.158133172222704, 19.057364203360034], [3.146661004253899, 19.693578599521441], [2.683588494486428, 19.856230170160114], [2.060990838233919, 20.142233384679482], [1.823227573259032, 20.61080943448604], [-1.550054897457613, 22.792665920497377], [-4.92333736817423, 24.974574082940993], [-8.684399786809051, 27.395744126895998], [-8.66512447756419, 27.58947907155822], [-8.665589565454805, 27.656425889592349], [-8.674116176782972, 28.841288967396572], [-7.059227667661928, 29.579228420524522], [-6.060632290053772, 29.731699734001687], [-5.242129278982786, 30.000443020135581], [-4.859646165374469, 30.501187649043839], [-3.690441046554695, 30.896951605751152], [-3.647497931320145, 31.637294012980668], [-3.068980271812647, 31.724497992473207], [-2.616604783529567, 32.094346218386143], [-1.30789913573787, 32.262888902306095], [-1.124551153966308, 32.651521511357124], [-1.388049282222567, 32.864015000941301], [-1.733454555661467, 33.91971283623198], [-1.792985805661686, 34.527918606091198], [-2.169913702798624, 35.168396307916673], [-1.208602871089056, 35.71484874118709], [-0.127454392894606, 35.888662421200799], [0.503876580415209, 36.301272894835272], [1.466918572606545, 36.605647081034398], [3.161698846050824, 36.783904934225205], [4.815758090849129, 36.865036932923452], [5.320120070017792, 36.716518866516616], [6.261819695672611, 37.110655015606731], [7.330384962603969, 37.118380642234364], [7.737078484741003, 36.885707505840209], [8.420964389691674, 36.946427313783154], [8.217824334352313, 36.433176988260271], [8.376367628623766, 35.479876003555937], [8.140981479534302, 34.655145982393783], [7.524481642292242, 34.097376410451453], [7.612641635782181, 33.344114895148955], [8.430472853233367, 32.748337307255944], [8.439102817426116, 32.506284898400814], [9.055602654668148, 32.102691962201284], [9.482139926805273, 30.307556057246181], [9.805634392952411, 29.424638373323383], [9.859997999723443, 28.959989732371007], [9.683884718472765, 28.144173895779193], [9.756128370816779, 27.688258571884141], [9.629056023811073, 27.140953477480913], [9.716285841519747, 26.512206325785691], [9.319410841518161, 26.094324856057447], [9.910692579801774, 25.365454616796733], [9.948261346077969, 24.93695364023251], [10.30384687667836, 24.37931325937091], [10.771363559622925, 24.562532050061744], [11.560669386449002, 24.097909247325511], [11.99950564947161, 23.471668402596443]]] } },
            { "type": "Feature", "properties": { "admin": "Ecuador", "name": "Ecuador", "continent": "South America" }, "geometry": { "type": "Polygon", "coordinates": [[[-80.302560594387188, -3.404856459164712], [-79.770293341780913, -2.65751189535964], [-79.986559210922394, -2.220794366061014], [-80.368783942369234, -2.685158786635788], [-80.967765469064332, -2.246942640800703], [-80.764806281238023, -1.965047702648532], [-80.933659023751702, -1.057454522306358], [-80.583370327461239, -0.906662692878683], [-80.39932471385373, -0.283703301600141], [-80.020898200180355, 0.360340074053468], [-80.090609707342097, 0.768428859862396], [-79.542762010399784, 0.982937730305963], [-78.855258755188686, 1.380923773601822], [-77.855061408179509, 0.809925034992773], [-77.668612840470416, 0.825893052570961], [-77.424984300430367, 0.395686753741117], [-76.576379767549383, 0.256935533037435], [-76.292314419240938, 0.416047268064119], [-75.801465827116587, 0.084801337073202], [-75.373223232713841, -0.15203175212045], [-75.233722703741932, -0.911416924649529], [-75.544995693652027, -1.56160979574588], [-76.635394253226707, -2.608677666843817], [-77.83790483265858, -3.003020521663103], [-78.450683966775628, -3.873096612161375], [-78.639897223612323, -4.547784112164072], [-79.205289069317715, -4.959128513207388], [-79.62497921417615, -4.454198093283494], [-80.028908047185581, -4.346090996928893], [-80.442241990872134, -4.425724379090673], [-80.46929460317692, -4.059286797708999], [-80.184014858709645, -3.821161797708043], [-80.302560594387188, -3.404856459164712]]] } },
            { "type": "Feature", "properties": { "admin": "Egypt", "name": "Egypt", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[34.9226, 29.50133], [34.64174, 29.09942], [34.42655, 28.34399], [34.15451, 27.8233], [33.92136, 27.6487], [33.58811, 27.97136], [33.13676, 28.41765], [32.42323, 29.85108], [32.32046, 29.76043], [32.73482, 28.70523], [33.34876, 27.69989], [34.10455, 26.14227], [34.47387, 25.59856], [34.79507, 25.03375], [35.69241, 23.92671], [35.49372, 23.75237], [35.52598, 23.10244], [36.69069, 22.20485], [36.86623, 22.0], [32.9, 22.0], [29.02, 22.0], [25.0, 22.0], [25.0, 25.682499996360992], [25.0, 29.238654529533452], [24.70007, 30.04419], [24.95762, 30.6616], [24.80287, 31.08929], [25.16482, 31.56915], [26.49533, 31.58568], [27.45762, 31.32126], [28.45048, 31.02577], [28.91353, 30.87005], [29.68342, 31.18686], [30.09503, 31.4734], [30.97693, 31.55586], [31.68796, 31.4296], [31.96041, 30.9336], [32.19247, 31.26034], [32.99392, 31.02407], [33.7734, 30.96746], [34.26544, 31.21936], [34.9226, 29.50133]]] } },
            { "type": "Feature", "properties": { "admin": "Eritrea", "name": "Eritrea", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[42.351560000000106, 12.54223000000013], [42.00975, 12.86582], [41.59856, 13.452090000000108], [41.15519371924983, 13.773319810435224], [40.8966, 14.118640000000138], [40.026218702969167, 14.519579169162281], [39.34061, 14.53155], [39.0994, 14.74064], [38.51295, 14.50547], [37.90607, 14.959430000000165], [37.59377, 14.2131], [36.42951, 14.42211], [36.323188917798113, 14.822480577041057], [36.753860304518575, 16.291874091044289], [36.852530000000108, 16.95655], [37.16747, 17.263140000000128], [37.904000000000103, 17.42754], [38.410089959473218, 17.998307399970312], [38.990622999839999, 16.84062612555169], [39.266110060388016, 15.922723496967246], [39.814293654140208, 15.435647284400314], [41.179274936697645, 14.491079616753209], [41.734951613132345, 13.921036892141554], [42.276830682144848, 13.34399201095442], [42.589576450375255, 13.000421250861901], [43.081226027200152, 12.699638576707112], [42.779642368344739, 12.455415757695672], [42.351560000000106, 12.54223000000013]]] } },
            { "type": "Feature", "properties": { "admin": "Spain", "name": "Spain", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[-9.034817674180244, 41.880570583659669], [-8.98443315269567, 42.592775173506261], [-9.392883673530644, 43.026624660812686], [-7.978189663108308, 43.748337714200979], [-6.754491746436754, 43.567909450853918], [-5.411886359061596, 43.574239813809669], [-4.347842779955783, 43.403449205085025], [-3.51753170410609, 43.455900783861296], [-1.901351284177764, 43.422802028978332], [-1.502770961910528, 43.034014390630425], [0.338046909190581, 42.579546006839543], [0.701590610363894, 42.795734361332599], [1.826793247087153, 42.343384711265678], [2.985998976258457, 42.473015041669854], [3.039484083680548, 41.892120266276891], [2.091841668312184, 41.226088568683082], [0.810524529635188, 41.014731960609332], [0.721331007499401, 40.678318386389229], [0.106691521819869, 40.123933620762003], [-0.278711310212941, 39.309978135732713], [0.111290724293838, 38.738514309233032], [-0.467123582349103, 38.292365831041138], [-0.683389451490598, 37.642353827457811], [-1.438382127274849, 37.443063666324214], [-2.146452602538119, 36.674144192037282], [-3.415780808923386, 36.658899644511173], [-4.368900926114718, 36.677839056946141], [-4.995219285492211, 36.32470815687963], [-5.377159796561457, 35.946850083961458], [-5.866432257500902, 36.02981659600605], [-6.236693894872174, 36.367677110330327], [-6.520190802425402, 36.942913316387312], [-7.45372555177809, 37.097787583966053], [-7.537105475281022, 37.428904323876232], [-7.166507941099863, 37.803894354802217], [-7.029281175148794, 38.075764065089757], [-7.374092169616317, 38.373058580064914], [-7.098036668313126, 39.03007274022378], [-7.498632371439724, 39.629571031241802], [-7.066591559263527, 39.711891587882768], [-7.026413133156593, 40.184524237624238], [-6.864019944679383, 40.330871893874821], [-6.851126674822551, 41.111082668617513], [-6.389087693700914, 41.381815497394641], [-6.668605515967655, 41.883386949219577], [-7.251308966490822, 41.91834605566504], [-7.422512986673794, 41.792074693359822], [-8.01317460776991, 41.790886135417118], [-8.26385698081779, 42.280468654950326], [-8.671945766626719, 42.134689439454952], [-9.034817674180244, 41.880570583659669]]] } },
            { "type": "Feature", "properties": { "admin": "Estonia", "name": "Estonia", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[24.312862583114615, 57.793423570376966], [24.428927850042154, 58.383413397853275], [24.061198357853179, 58.257374579493394], [23.426560092876681, 58.612753404364618], [23.339795363058641, 59.187240302153363], [24.604214308376182, 59.465853786855007], [25.864189080516631, 59.611090399811324], [26.949135776484518, 59.445803331125767], [27.981114129353237, 59.47538808861286], [28.131699253051742, 59.300825100330904], [27.420166456824941, 58.724581203844224], [27.716685825315714, 57.791899115624354], [27.288184848751509, 57.474528306703817], [26.46353234223778, 57.476388658266316], [25.602809685984365, 57.847528794986559], [25.164593540149262, 57.970156968815175], [24.312862583114615, 57.793423570376966]]] } },
            { "type": "Feature", "properties": { "admin": "Ethiopia", "name": "Ethiopia", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[37.90607, 14.959430000000165], [38.51295, 14.50547], [39.0994, 14.74064], [39.34061, 14.53155], [40.026250000000111, 14.51959], [40.8966, 14.118640000000138], [41.1552, 13.77333], [41.59856, 13.452090000000108], [42.00975, 12.86582], [42.351560000000106, 12.54223000000013], [42.000000000000107, 12.100000000000133], [41.661760000000122, 11.6312], [41.739590000000177, 11.355110000000137], [41.755570000000191, 11.05091], [42.314140000000116, 11.0342], [42.55493000000012, 11.105110000000193], [42.776851841000948, 10.926878566934416], [42.55876, 10.572580000000126], [42.92812, 10.021940000000139], [43.29699, 9.540480000000169], [43.67875, 9.183580000000116], [46.94834, 7.99688], [47.78942, 8.003], [44.9636, 5.001620000000115], [43.66087, 4.95755], [42.769670000000119, 4.252590000000223], [42.12861, 4.234130000000163], [41.855083092644108, 3.918911920483764], [41.171800000000125, 3.91909], [40.768480000000118, 4.257020000000124], [39.854940000000106, 3.83879000000013], [39.559384258765917, 3.422060000000215], [38.89251, 3.50074], [38.67114, 3.61607], [38.436970000000137, 3.58851], [38.120915000000132, 3.598605], [36.85509323800823, 4.447864127672857], [36.159078632855646, 4.447864127672857], [35.817447662353622, 4.776965663462021], [35.817447662353622, 5.338232082790852], [35.298007118233095, 5.506], [34.70702, 6.59422000000012], [34.25032, 6.82607], [34.075100000000184, 7.22595], [33.56829, 7.71334], [32.954180000000228, 7.7849700000001], [33.294800000000116, 8.35458], [33.82550000000014, 8.37916], [33.97498, 8.684560000000145], [33.96162, 9.58358], [34.25745, 10.63009], [34.73115000000012, 10.910170000000106], [34.831630000000125, 11.318960000000116], [35.26049, 12.08286], [35.863630000000164, 12.57828], [36.27022, 13.563330000000118], [36.42951, 14.42211], [37.59377, 14.2131], [37.90607, 14.959430000000165]]] } },
            { "type": "Feature", "properties": { "admin": "Finland", "name": "Finland", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[28.591929559043187, 69.064776923286644], [28.445943637818651, 68.36461294216403], [29.9774263852206, 67.698297024192641], [29.054588657352319, 66.944286200621917], [30.21765, 65.80598], [29.544429559046982, 64.948671576590471], [30.444684686003704, 64.204453436939076], [30.035872430142714, 63.552813625738544], [31.516092156711117, 62.867687486412869], [31.139991082490891, 62.357692776124395], [30.211107212044443, 61.780027777749673], [28.06999759289527, 60.503516547275829], [26.25517296723697, 60.423960679762487], [24.496623976344516, 60.057316392651636], [22.869694858499454, 59.846373196036211], [22.290763787533589, 60.391921291741525], [21.322244093519313, 60.720169989659503], [21.544866163832687, 61.705329494871783], [21.059211053153682, 62.607393296958726], [21.536029493910799, 63.189735012455863], [22.442744174903986, 63.817810370531276], [24.730511508897528, 64.902343655040823], [25.398067661243939, 65.111426500093728], [25.2940430030404, 65.53434642197044], [23.903378533633795, 66.006927395279604], [23.565879754335576, 66.396050930437411], [23.539473097434435, 67.936008612735236], [21.978534783626113, 68.616845608180682], [20.645592889089521, 69.106247260200846], [21.244936150810666, 69.370443020293067], [22.356237827247405, 68.841741441514898], [23.662049594830751, 68.891247463650529], [24.735679152126721, 68.649556789821446], [25.689212680776361, 69.092113755969024], [26.179622023226241, 69.825298977326113], [27.732292107867856, 70.164193020296239], [29.015572950971968, 69.766491197377974], [28.591929559043187, 69.064776923286644]]] } },
            { "type": "Feature", "properties": { "admin": "Fiji", "name": "Fiji", "continent": "Oceania" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[178.3736, -17.33992], [178.71806, -17.62846], [178.55271, -18.15059], [177.93266, -18.28799], [177.38146, -18.16432], [177.28504, -17.72465], [177.67087, -17.38114], [178.12557, -17.50481], [178.3736, -17.33992]]], [[[179.364142661964223, -16.801354076946847], [178.725059362997058, -17.012041674368017], [178.596838595117021, -16.63915], [179.096609362997128, -16.43398427754742], [179.413509362997075, -16.379054277547393], [180.000000000000114, -16.067132663642436], [180.000000000000114, -16.555216566639157], [179.364142661964223, -16.801354076946847]]], [[[-179.917369384765237, -16.501783135649358], [-180.0, -16.555216566639157], [-180.0, -16.067132663642436], [-179.793320109048551, -16.020882256741228], [-179.917369384765237, -16.501783135649358]]]] } },
            { "type": "Feature", "properties": { "admin": "Falkland Islands", "name": "Falkland Is.", "continent": "South America" }, "geometry": { "type": "Polygon", "coordinates": [[[-61.2, -51.85], [-60.0, -51.25], [-59.15, -51.5], [-58.55, -51.1], [-57.75, -51.55], [-58.05, -51.9], [-59.4, -52.2], [-59.85, -51.85], [-60.7, -52.3], [-61.2, -51.85]]] } },
            { "type": "Feature", "properties": { "admin": "France", "name": "France", "continent": "Europe" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-52.556424730018378, 2.504705308437053], [-52.939657151894963, 2.124857692875622], [-53.41846513529525, 2.053389187016037], [-53.554839240113481, 2.334896551925964], [-53.778520677288881, 2.376702785650053], [-54.088062506717264, 2.105556545414629], [-54.524754197799737, 2.311848863123785], [-54.271229620975781, 2.738747870286942], [-54.184284023644743, 3.194172268075234], [-54.011503872276812, 3.622569891774857], [-54.3995422023565, 4.212611395683481], [-54.478632981979203, 4.896755682795642], [-53.958044603070917, 5.756548163267808], [-53.618452928264837, 5.646529038918401], [-52.882141282754063, 5.409850979021598], [-51.823342861525916, 4.565768133966144], [-51.657797410678874, 4.156232408053028], [-52.249337531123977, 3.241094468596287], [-52.556424730018378, 2.504705308437053]]], [[[9.560016310269132, 42.152491970379558], [9.229752231491771, 41.380006822264441], [8.77572309737536, 41.583611965494427], [8.544212680707828, 42.256516628583078], [8.746009148807586, 42.628121853193946], [9.390000848028901, 43.009984849614725], [9.560016310269132, 42.152491970379558]]], [[[3.588184441755714, 50.378992418003563], [4.28602298342514, 49.90749664977254], [4.799221632515752, 49.985373033236314], [5.674051954784885, 49.529483547557433], [5.897759230176375, 49.442667141307155], [6.186320428094204, 49.463802802114444], [6.658229607783538, 49.201958319691549], [8.09927859867477, 49.017783515003366], [7.59367638513106, 48.333019110703724], [7.466759067422228, 47.620581976911851], [7.192202182655533, 47.449765529970982], [6.736571079138086, 47.541801255882874], [6.768713820023634, 47.287708238303672], [6.037388950228971, 46.725778713561894], [6.022609490593566, 46.272989813820502], [6.500099724970453, 46.429672756529428], [6.84359297041456, 45.991146552100659], [6.80235517744566, 45.708579820328673], [7.096652459347835, 45.333098863295859], [6.749955275101711, 45.028517971367584], [7.007562290076661, 44.254766750661382], [7.549596388386161, 44.127901109384808], [7.435184767291841, 43.693844916349164], [6.529245232783068, 43.12889232031835], [4.556962517931395, 43.399650987311581], [3.100410597352719, 43.075200507167118], [2.985998976258486, 42.473015041669882], [1.826793247087181, 42.343384711265649], [0.701590610363922, 42.795734361332642], [0.338046909190581, 42.57954600683955], [-1.502770961910471, 43.034014390630482], [-1.901351284177735, 43.422802028978332], [-1.384225226232956, 44.022610378590166], [-1.193797573237361, 46.014917710954862], [-2.225724249673788, 47.064362697938201], [-2.963276129559573, 47.570326646507958], [-4.491554938159481, 47.95495433205641], [-4.592349819344746, 48.68416046812694], [-3.295813971357745, 48.901692409859628], [-1.616510789384932, 48.644421291694577], [-1.933494025063254, 49.776341864615759], [-0.98946895995536, 49.347375800160869], [1.338761020522753, 50.127173163445256], [1.6390010921385, 50.9466063502975], [2.51357303224617, 51.14850617126185], [2.65842207196033, 50.796848049515646], [3.123251580425716, 50.780363267614504], [3.588184441755714, 50.378992418003563]]]] } },
            { "type": "Feature", "properties": { "admin": "Gabon", "name": "Gabon", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[11.093772820691923, -3.978826592630546], [10.066135288135738, -2.969482517105681], [9.405245395554969, -2.144313246269042], [8.797995639693168, -1.111301364754496], [8.830086704146423, -0.779073581550037], [9.048419630579586, -0.459351494960217], [9.291350538783687, 0.268666083167687], [9.492888624721981, 1.010119533691494], [9.83028405115564, 1.067893784993799], [11.285078973036461, 1.057661851400013], [11.276449008843711, 2.261050930180871], [11.751665480199787, 2.326757513839993], [12.359380323952218, 2.19281220133945], [12.951333855855605, 2.321615708826939], [13.07582238124675, 2.267097072759014], [13.003113641012074, 1.830896307783319], [13.282631463278816, 1.31418366129688], [14.026668735417214, 1.395677395021153], [14.276265903386953, 1.196929836426619], [13.843320753645653, 0.038757635901149], [14.316418491277741, -0.552627455247048], [14.425455763413593, -1.333406670744971], [14.299210239324564, -1.998275648612213], [13.992407260807706, -2.470804945489099], [13.109618767965626, -2.428740329603513], [12.575284458067639, -1.948511244315134], [12.495702752338159, -2.391688327650242], [11.820963575903189, -2.514161472181982], [11.478038771214299, -2.765618991714241], [11.855121697648114, -3.42687061932105], [11.093772820691923, -3.978826592630546]]] } },
            { "type": "Feature", "properties": { "admin": "United Kingdom", "name": "United Kingdom", "continent": "Europe" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-5.661948614921896, 54.554603176483838], [-6.197884894220976, 53.867565009163329], [-6.953730231137994, 54.073702297575622], [-7.572167934591078, 54.059956366585979], [-7.366030646178785, 54.595840969452688], [-7.572167934591078, 55.131622219454883], [-6.733847011736144, 55.172860012423783], [-5.661948614921896, 54.554603176483838]]], [[[-3.00500484863528, 58.635000108466322], [-4.073828497728015, 57.55302480735525], [-3.055001796877661, 57.690019029360933], [-1.959280564776918, 57.684799709699512], [-2.219988165689301, 56.870017401753515], [-3.119003058271118, 55.97379303651546], [-2.085009324543023, 55.909998480851264], [-2.005675679673856, 55.804902850350217], [-1.11499101399221, 54.624986477265388], [-0.4304849918542, 54.464376125702145], [0.184981316742039, 53.325014146531018], [0.469976840831777, 52.929999498091959], [1.681530795914739, 52.739520168663987], [1.559987827164377, 52.099998480836], [1.050561557630914, 51.806760565795678], [1.4498653499503, 51.289427802121949], [0.550333693045502, 50.765738837275862], [-0.787517462558639, 50.774988918656206], [-2.489997524414377, 50.500018622431227], [-2.956273972984035, 50.696879991247002], [-3.617448085942327, 50.228355617872708], [-4.542507900399243, 50.341837063185658], [-5.245023159191134, 49.959999904981082], [-5.776566941745299, 50.159677639356815], [-4.309989793301837, 51.210001125689146], [-3.414850633142122, 51.426008612669236], [-3.422719467108322, 51.426848167406078], [-4.984367234710873, 51.593466091510962], [-5.267295701508885, 51.991400458374571], [-4.222346564134852, 52.30135569926135], [-4.770013393564112, 52.840004991255611], [-4.579999152026914, 53.495003770555165], [-3.093830673788658, 53.404547400669671], [-3.092079637047106, 53.404440822963544], [-2.945008510744343, 53.98499970154667], [-3.614700825433033, 54.60093677329256], [-3.63000545898933, 54.615012925833], [-4.844169073903003, 54.790971177786837], [-5.082526617849224, 55.061600653699358], [-4.719112107756643, 55.508472601943467], [-5.047980922862108, 55.783985500707516], [-5.586397670911139, 55.311146145236805], [-5.64499874513018, 56.275014960344791], [-6.149980841486352, 56.785009670633528], [-5.78682471355529, 57.818848375064633], [-5.009998745127574, 58.630013332750039], [-4.211494513353555, 58.550845038479153], [-3.00500484863528, 58.635000108466322]]]] } },
            { "type": "Feature", "properties": { "admin": "Georgia", "name": "Georgia", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[41.55408410011065, 41.535656236327561], [41.703170607272703, 41.962942816732912], [41.453470086438379, 42.645123399417926], [40.875469191253785, 43.013628038091277], [40.321394484220313, 43.128633938156831], [39.955008579270917, 43.434997666999216], [40.07696495947976, 43.553104153002309], [40.922184686045618, 43.38215851498078], [42.394394565608806, 43.220307929042619], [43.756016880067378, 42.74082815202248], [43.931199985536828, 42.554973863284758], [44.537622918481979, 42.71199270280362], [45.470279168485703, 42.502780666669963], [45.776410353382758, 42.09244395605635], [46.404950799348818, 41.860675157227298], [46.145431756379004, 41.722802435872573], [46.637908156120574, 41.181672675128219], [46.501637404166921, 41.064444688474104], [45.962600538930381, 41.123872585609767], [45.217426385281577, 41.411451931314041], [44.972480096218071, 41.248128567055588], [43.582745802592726, 41.09214325618256], [42.619548781104484, 41.583172715819934], [41.55408410011065, 41.535656236327561]]] } },
            { "type": "Feature", "properties": { "admin": "Ghana", "name": "Ghana", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[1.060121697604927, 5.928837388528875], [-0.507637905265938, 5.343472601742675], [-1.063624640294193, 5.000547797053811], [-1.964706590167594, 4.71046214438337], [-2.856125047202397, 4.994475816259508], [-2.810701463217839, 5.389051215024109], [-3.244370083011261, 6.2504715031135], [-2.983584967450326, 7.379704901555511], [-2.56218950032624, 8.219627793811481], [-2.827496303712706, 9.642460842319775], [-2.963896246747111, 10.395334784380081], [-2.94040930827046, 10.962690334512557], [-1.203357713211431, 11.009819240762736], [-0.761575893548183, 10.936929633015053], [-0.438701544588582, 11.09834096927872], [0.023802524423701, 11.018681748900802], [-0.049784715159944, 10.706917832883928], [0.367579990245389, 10.191212876827176], [0.365900506195885, 9.46500397382948], [0.461191847342121, 8.677222601756013], [0.712029249686878, 8.312464504423827], [0.490957472342245, 7.411744289576474], [0.570384148774849, 6.914358628767188], [0.836931186536333, 6.279978745952147], [1.060121697604927, 5.928837388528875]]] } },
            { "type": "Feature", "properties": { "admin": "Guinea", "name": "Guinea", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[-8.439298468448696, 7.686042792181736], [-8.722123582382123, 7.711674302598509], [-8.926064622422002, 7.309037380396375], [-9.208786383490844, 7.313920803247952], [-9.403348151069748, 7.526905218938906], [-9.33727983238458, 7.928534450711351], [-9.755342169625832, 8.541055202666923], [-10.016566534861253, 8.42850393313523], [-10.230093553091276, 8.406205552601291], [-10.505477260774667, 8.348896389189603], [-10.494315151399629, 8.715540676300433], [-10.65477047366589, 8.977178452994194], [-10.622395188835037, 9.267910061068276], [-10.839151984083299, 9.688246161330367], [-11.117481248407328, 10.045872911006283], [-11.917277390988655, 10.046983954300556], [-12.150338100625003, 9.858571682164378], [-12.425928514037562, 9.835834051955953], [-12.596719122762206, 9.620188300001969], [-12.711957566773076, 9.342711696810765], [-13.246550258832512, 8.903048610871506], [-13.685153977909788, 9.494743760613458], [-14.074044969122278, 9.886166897008248], [-14.330075852912367, 10.015719712763966], [-14.579698859098254, 10.214467271358513], [-14.693231980843501, 10.65630076745404], [-14.83955379887794, 10.876571560098139], [-15.130311245168167, 11.040411688679525], [-14.685687221728896, 11.527823798056485], [-14.382191534878727, 11.509271958863691], [-14.121406419317776, 11.677117010947693], [-13.900799729863772, 11.678718980348744], [-13.743160773157411, 11.811269029177408], [-13.828271857142122, 12.142644151249041], [-13.718743658899511, 12.247185573775507], [-13.700476040084322, 12.586182969610192], [-13.217818162478235, 12.575873521367964], [-12.499050665730561, 12.332089952031053], [-12.278599005573438, 12.354440008997285], [-12.20356482588563, 12.465647691289401], [-11.658300950557928, 12.386582749882834], [-11.513942836950587, 12.442987575729415], [-11.456168585648269, 12.076834214725336], [-11.297573614944508, 12.077971096235768], [-11.036555955438256, 12.211244615116513], [-10.870829637078211, 12.177887478072106], [-10.593223842806278, 11.923975328005977], [-10.165213792348835, 11.844083563682743], [-9.890992804392011, 12.060478623904968], [-9.567911749703212, 12.194243068892472], [-9.327616339546008, 12.334286200403451], [-9.127473517279581, 12.308060411015331], [-8.905264858424529, 12.088358059126433], [-8.786099005559462, 11.812560939984705], [-8.376304897484911, 11.393645941610627], [-8.581305304386772, 11.136245632364801], [-8.620321010767126, 10.810890814655181], [-8.407310756860026, 10.90925690352276], [-8.282357143578279, 10.792597357623842], [-8.335377163109738, 10.494811916541932], [-8.029943610048617, 10.206534939001711], [-8.22933712404682, 10.129020290563897], [-8.309616461612249, 9.789531968622439], [-8.079113735374348, 9.376223863152033], [-7.832100389019186, 8.575704250518625], [-8.203498907900878, 8.455453192575446], [-8.299048631208562, 8.316443589710302], [-8.221792364932197, 8.123328762235571], [-8.280703497744936, 7.687179673692156], [-8.439298468448696, 7.686042792181736]]] } },
            { "type": "Feature", "properties": { "admin": "Gambia", "name": "Gambia", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[-16.84152462408127, 13.151393947802557], [-16.713728807023468, 13.594958604379853], [-15.624596320039936, 13.623587347869556], [-15.398770310924457, 13.860368760630916], [-15.081735398813816, 13.876491807505982], [-14.687030808968483, 13.63035696049978], [-14.376713833055785, 13.625680243377371], [-14.046992356817478, 13.794067898000446], [-13.844963344772404, 13.505041612191999], [-14.277701788784553, 13.28058502853224], [-14.712197231494626, 13.298206691943774], [-15.141163295949463, 13.509511623585235], [-15.511812506562931, 13.278569647672864], [-15.691000535534991, 13.270353094938455], [-15.931295945692208, 13.130284125211331], [-16.84152462408127, 13.151393947802557]]] } },
            { "type": "Feature", "properties": { "admin": "Guinea Bissau", "name": "Guinea-Bissau", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[-15.130311245168167, 11.040411688679525], [-15.664180467175523, 11.458474025920792], [-16.085214199273562, 11.524594021038236], [-16.314786749730199, 11.806514797406548], [-16.308947312881227, 11.958701890506116], [-16.613838263403277, 12.170911159712698], [-16.67745195155457, 12.38485158940105], [-16.147716844130581, 12.547761542201185], [-15.816574266004251, 12.515567124883345], [-15.548476935274005, 12.628170070847343], [-13.700476040084322, 12.586182969610192], [-13.718743658899511, 12.247185573775507], [-13.828271857142122, 12.142644151249041], [-13.743160773157411, 11.811269029177408], [-13.900799729863772, 11.678718980348744], [-14.121406419317776, 11.677117010947693], [-14.382191534878727, 11.509271958863691], [-14.685687221728896, 11.527823798056485], [-15.130311245168167, 11.040411688679525]]] } },
            { "type": "Feature", "properties": { "admin": "Equatorial Guinea", "name": "Eq. Guinea", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[9.492888624721981, 1.010119533691494], [9.305613234096255, 1.160911363119183], [9.649158155972627, 2.283866075037735], [11.276449008843711, 2.261050930180871], [11.285078973036461, 1.057661851400013], [9.83028405115564, 1.067893784993799], [9.492888624721981, 1.010119533691494]]] } },
            { "type": "Feature", "properties": { "admin": "Greece", "name": "Greece", "continent": "Europe" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[23.699980096133, 35.705004380835526], [24.246665073348673, 35.368022365860149], [25.025015496528873, 35.424995632461979], [25.769207797964182, 35.354018052709073], [25.745023227651579, 35.179997666966209], [26.290002882601719, 35.299990342747911], [26.164997592887651, 35.004995429009789], [24.724982130642299, 34.919987697889603], [24.735007358506941, 35.084990546197581], [23.514978468528106, 35.27999156345097], [23.699980096133, 35.705004380835526]]], [[[26.604195590936282, 41.562114569661098], [26.294602085075777, 40.936261298174244], [26.056942172965499, 40.824123440100827], [25.44767703624418, 40.852545477861455], [24.925848422960932, 40.947061672523226], [23.714811232200809, 40.687129218095116], [24.407998894964063, 40.124992987624083], [23.89996788910258, 39.962005520175573], [23.342999301860797, 39.960997829745786], [22.813987664488959, 40.476005153966547], [22.626298862404777, 40.256561184239175], [22.849747755634805, 39.659310818025759], [23.350027296652595, 39.190011298167256], [22.97309939951554, 38.97090322524965], [23.53001631032495, 38.51000112563846], [24.025024855248937, 38.219992987616443], [24.040011020613601, 37.655014553369419], [23.115002882589145, 37.920011298162215], [23.409971958111065, 37.409990749657389], [22.77497195810863, 37.305010077456551], [23.154225294698612, 36.422505804992042], [22.4900281104511, 36.410000108377446], [21.670026482843692, 36.84498647719419], [21.295010613701574, 37.644989325504689], [21.120034213961329, 38.31032339126272], [20.730032179454579, 38.769985256498778], [20.217712029712853, 39.340234686839629], [20.150015903410516, 39.624997666984022], [20.615000441172779, 40.110006822259422], [20.67499677906363, 40.434999904943048], [20.999989861747274, 40.580003973953964], [21.020040317476422, 40.842726955725873], [21.674160597426969, 40.931274522457976], [22.055377638444266, 41.149865831052686], [22.597308383889008, 41.130487168943198], [22.76177, 41.3048], [22.952377150166562, 41.337993882811212], [23.692073601992455, 41.309080918943849], [24.492644891058031, 41.583896185872035], [25.19720136892553, 41.234485988930651], [26.106138136507177, 41.328898830727823], [26.11704186372091, 41.826904608724725], [26.604195590936282, 41.562114569661098]]]] } },
            { "type": "Feature", "properties": { "admin": "Greenland", "name": "Greenland", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-46.76379, 82.62796], [-43.40644, 83.22516], [-39.89753, 83.18018], [-38.62214, 83.54905], [-35.08787, 83.64513], [-27.10046, 83.51966], [-20.84539, 82.72669], [-22.69182, 82.34165], [-26.51753, 82.29765], [-31.9, 82.2], [-31.39646, 82.02154], [-27.85666, 82.13178], [-24.84448, 81.78697], [-22.90328, 82.09317], [-22.07175, 81.73449], [-23.16961, 81.15271], [-20.62363, 81.52462], [-15.76818, 81.91245], [-12.77018, 81.71885], [-12.20855, 81.29154], [-16.28533, 80.58004], [-16.85, 80.35], [-20.04624, 80.17708], [-17.73035, 80.12912], [-18.9, 79.4], [-19.70499, 78.75128], [-19.67353, 77.63859], [-18.47285, 76.98565], [-20.03503, 76.94434], [-21.67944, 76.62795], [-19.83407, 76.09808], [-19.59896, 75.24838], [-20.66818, 75.15585], [-19.37281, 74.29561], [-21.59422, 74.22382], [-20.43454, 73.81713], [-20.76234, 73.46436], [-22.17221, 73.30955], [-23.56593, 73.30663], [-22.31311, 72.62928], [-22.29954, 72.18409], [-24.27834, 72.59788], [-24.79296, 72.3302], [-23.44296, 72.08016], [-22.13281, 71.46898], [-21.75356, 70.66369], [-23.53603, 70.471], [-24.30702, 70.85649], [-25.54341, 71.43094], [-25.20135, 70.75226], [-26.36276, 70.22646], [-23.72742, 70.18401], [-22.34902, 70.12946], [-25.02927, 69.2588], [-27.74737, 68.47046], [-30.67371, 68.12503], [-31.77665, 68.12078], [-32.81105, 67.73547], [-34.20196, 66.67974], [-36.35284, 65.9789], [-37.04378, 65.93768], [-38.37505, 65.69213], [-39.81222, 65.45848], [-40.66899, 64.83997], [-40.68281, 64.13902], [-41.1887, 63.48246], [-42.81938, 62.68233], [-42.41666, 61.90093], [-42.86619, 61.07404], [-43.3784, 60.09772], [-44.7875, 60.03676], [-46.26364, 60.85328], [-48.26294, 60.85843], [-49.23308, 61.40681], [-49.90039, 62.38336], [-51.63325, 63.62691], [-52.14014, 64.27842], [-52.27659, 65.1767], [-53.66166, 66.09957], [-53.30161, 66.8365], [-53.96911, 67.18899], [-52.9804, 68.35759], [-51.47536, 68.72958], [-51.08041, 69.14781], [-50.87122, 69.9291], [-52.013585, 69.574925], [-52.55792, 69.42616], [-53.45629, 69.283625], [-54.68336, 69.61003], [-54.75001, 70.28932], [-54.35884, 70.821315], [-53.431315, 70.835755], [-51.39014, 70.56978], [-53.10937, 71.20485], [-54.00422, 71.54719], [-55.0, 71.406536967272558], [-55.83468, 71.65444], [-54.71819, 72.58625], [-55.32634, 72.95861], [-56.12003, 73.64977], [-57.32363, 74.71026], [-58.59679, 75.09861], [-58.58516, 75.51727], [-61.26861, 76.10238], [-63.39165, 76.1752], [-66.06427, 76.13486], [-68.50438, 76.06141], [-69.66485, 76.37975], [-71.40257, 77.00857], [-68.77671, 77.32312], [-66.76397, 77.37595], [-71.04293, 77.63595], [-73.297, 78.04419], [-73.15938, 78.43271], [-69.37345, 78.91388], [-65.7107, 79.39436], [-65.3239, 79.75814], [-68.02298, 80.11721], [-67.15129, 80.51582], [-63.68925, 81.21396], [-62.23444, 81.3211], [-62.65116, 81.77042], [-60.28249, 82.03363], [-57.20744, 82.19074], [-54.13442, 82.19962], [-53.04328, 81.88833], [-50.39061, 82.43883], [-48.00386, 82.06481], [-46.59984, 81.985945], [-44.523, 81.6607], [-46.9007, 82.19979], [-46.76379, 82.62796]]] } },
            { "type": "Feature", "properties": { "admin": "Guatemala", "name": "Guatemala", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-90.095554572290951, 13.73533763270073], [-90.608624030300817, 13.909771429901948], [-91.232410244496037, 13.927832342987953], [-91.689746670279106, 14.126218166556452], [-92.227750006869812, 14.538828640190925], [-92.203229539747298, 14.830102850804066], [-92.087215949252041, 15.064584662328436], [-92.229248623406249, 15.251446641495857], [-91.747960171255912, 16.066564846251719], [-90.464472622422647, 16.069562079324651], [-90.438866950222021, 16.410109768128091], [-90.600846727240906, 16.470777899638758], [-90.711821865587694, 16.687483018454724], [-91.081670091500641, 16.918476670799404], [-91.453921271515128, 17.252177232324168], [-91.002269253284197, 17.254657701074176], [-91.001519945015943, 17.817594916245707], [-90.067933519230948, 17.819326076727474], [-89.143080410503302, 17.808318996649316], [-89.15080603713092, 17.015576687075832], [-89.229121670269265, 15.886937567605166], [-88.930612759135244, 15.887273464415072], [-88.604586147805833, 15.706380113177358], [-88.518364020526846, 15.855389105690971], [-88.22502275262201, 15.727722479713901], [-88.680679694355618, 15.346247056535301], [-89.15481096063354, 15.066419175674806], [-89.225220099631244, 14.874286200413618], [-89.145535041037149, 14.67801911056908], [-89.353325975282772, 14.424132798719112], [-89.587342698916544, 14.362586167859485], [-89.5342193265205, 14.244815578666302], [-89.7219339668207, 14.134228013561694], [-90.064677903996568, 13.881969509328924], [-90.095554572290951, 13.73533763270073]]] } },
            { "type": "Feature", "properties": { "admin": "Guyana", "name": "Guyana", "continent": "South America" }, "geometry": { "type": "Polygon", "coordinates": [[[-59.758284878159181, 8.367034816924045], [-59.10168412945864, 7.99920197187049], [-58.482962205628041, 7.347691351750696], [-58.454876064677414, 6.832787380394463], [-58.078103196837361, 6.809093736188641], [-57.542218593970631, 6.321268215353355], [-57.147436489476874, 5.973149929219161], [-57.307245856339492, 5.073566595882225], [-57.914288906472123, 4.812626451024413], [-57.860209520078691, 4.576801052260449], [-58.044694383360664, 4.060863552258382], [-57.601568976457848, 3.334654649260684], [-57.281433478409703, 3.333491929534119], [-57.150097825739898, 2.768926906745406], [-56.53938574891454, 1.89952260986692], [-56.782704230360814, 1.863710842288653], [-57.33582292339689, 1.948537705895759], [-57.660971035377358, 1.682584947105638], [-58.113449876525003, 1.507195135907025], [-58.429477098205957, 1.46394196207872], [-58.540012986878288, 1.26808828369252], [-59.030861579002639, 1.317697658692722], [-59.646043667221242, 1.786893825686789], [-59.718545701726732, 2.249630438644359], [-59.974524909084543, 2.755232652188055], [-59.815413174057852, 3.606498521332085], [-59.538039923731219, 3.958802598481937], [-59.767405768458701, 4.423502915866606], [-60.111002366767373, 4.574966538914082], [-59.980958624904865, 5.014061184098138], [-60.213683437731319, 5.2444863956876], [-60.733574184803707, 5.2002772078619], [-61.410302903881941, 5.959068101419616], [-61.139415045807937, 6.234296779806142], [-61.159336310456467, 6.696077378766317], [-60.543999192940966, 6.856584377464881], [-60.295668097562377, 7.043911444522918], [-60.637972785063752, 7.414999904810853], [-60.550587938058186, 7.779602972846178], [-59.758284878159181, 8.367034816924045]]] } },
            { "type": "Feature", "properties": { "admin": "Honduras", "name": "Honduras", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-87.316654425795463, 12.984685777229], [-87.48940873894712, 13.29753489832393], [-87.793111131526501, 13.384480495655165], [-87.723502977229288, 13.785050360565602], [-87.859515347021599, 13.893312486217097], [-88.065342576840109, 13.964625962779788], [-88.503997972349609, 13.845485948130939], [-88.541230841815931, 13.98015473068352], [-88.843072882832743, 14.140506700085208], [-89.058511929057644, 14.340029405164213], [-89.353325975282786, 14.424132798719084], [-89.145535041037164, 14.678019110569149], [-89.22522009963123, 14.874286200413675], [-89.154810960633526, 15.066419175674863], [-88.680679694355575, 15.346247056535386], [-88.225022752621925, 15.727722479714027], [-88.121153123715359, 15.688655096901355], [-87.901812506852394, 15.864458319558194], [-87.615680101252309, 15.878798529519198], [-87.522920905288444, 15.797278957578779], [-87.367762417332116, 15.846940009011286], [-86.903191291028165, 15.756712958229565], [-86.440945604177372, 15.782835394753189], [-86.119233974944322, 15.893448798073958], [-86.00195431185783, 16.005405788634388], [-85.68331743034625, 15.953651841693949], [-85.444003872402547, 15.885749009662444], [-85.182443610357183, 15.909158433490628], [-84.98372188997881, 15.995923163308698], [-84.526979743167118, 15.857223619037423], [-84.36825558138257, 15.835157782448729], [-84.063054572266807, 15.648244126849132], [-83.773976610026111, 15.42407176356687], [-83.410381232420363, 15.27090281825377], [-83.147219000974104, 14.995829169164207], [-83.489988776366005, 15.01626719813566], [-83.628584967772866, 14.880073960830368], [-83.975721401693576, 14.749435939996483], [-84.228341640952394, 14.748764146376626], [-84.449335903648588, 14.62161428472251], [-84.64958207877963, 14.666805324761865], [-84.820036790694289, 14.819586696832628], [-84.924500698572302, 14.790492865452332], [-85.052787441736868, 14.551541042534719], [-85.148750576502877, 14.560196844943615], [-85.165364549484806, 14.354369615125048], [-85.514413011400265, 14.079011745657905], [-85.698665330736944, 13.960078436737998], [-85.801294725268505, 13.8360549992376], [-86.096263800790595, 14.03818736414723], [-86.312142096689826, 13.771356106008223], [-86.520708177419891, 13.778487453664464], [-86.755086636079596, 13.754845485890936], [-86.733821784191463, 13.263092556201398], [-86.880557013684353, 13.254204209847213], [-87.005769009127434, 13.025794379117254], [-87.316654425795463, 12.984685777229]]] } },
            { "type": "Feature", "properties": { "admin": "Croatia", "name": "Croatia", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[18.829838087650039, 45.908877671891837], [19.072768995854172, 45.521511135432078], [19.390475701584588, 45.236515611342369], [19.005486281010118, 44.860233669609144], [18.553214145591646, 45.08158966733145], [17.861783481526398, 45.067740383477137], [17.00214603035101, 45.233776760430935], [16.534939406000202, 45.211607570977705], [16.318156772535868, 45.004126695325901], [15.959367303133373, 45.233776760430935], [15.750026075918978, 44.81871165626255], [16.239660271884528, 44.351143296885695], [16.456442905348862, 44.041239732431265], [16.916156447017325, 43.667722479825663], [17.297373488034449, 43.446340643887353], [17.674921502358981, 43.028562527023603], [18.56, 42.65], [18.450016310304814, 42.47999136002931], [17.509970330483323, 42.84999461523914], [16.930005730871638, 43.209998480800373], [16.015384555737679, 43.507215481127204], [15.174453973052094, 44.243191229827907], [15.376250441151793, 44.317915350922064], [14.920309279040504, 44.73848399512945], [14.901602410550874, 45.076060289076104], [14.258747592839992, 45.233776760430935], [13.952254672917032, 44.802123521496853], [13.65697553880119, 45.136935126315947], [13.679403110415816, 45.484149074884996], [13.715059848697248, 45.500323798192419], [14.411968214585496, 45.466165676447403], [14.595109490627916, 45.63494090431282], [14.935243767972961, 45.471695054702757], [15.327674594797424, 45.452316392593325], [15.323953891672428, 45.731782538427687], [15.671529575267638, 45.8341535507979], [15.768732944408608, 46.23810822202352], [16.564808383864939, 46.503750922219794], [16.882515089595412, 46.380631822284428], [17.630066359129554, 45.951769110694087], [18.456062452882858, 45.759481106136143], [18.829838087650039, 45.908877671891837]]] } },
            { "type": "Feature", "properties": { "admin": "Haiti", "name": "Haiti", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-73.189790615517595, 19.915683905511909], [-72.579672817663607, 19.871500555902351], [-71.71236141629295, 19.714455878167353], [-71.624873216422813, 19.169837958243303], [-71.701302659782485, 18.785416978424049], [-71.945112067335543, 18.616900132720257], [-71.687737596305865, 18.316660061104468], [-71.708304816358037, 18.044997056546091], [-72.372476162389333, 18.214960842354053], [-72.844411180294856, 18.145611070218362], [-73.454554816365018, 18.217906398994696], [-73.922433234335642, 18.030992743395], [-74.458033616824764, 18.342549953682703], [-74.369925299767118, 18.664907538319408], [-73.449542202432696, 18.526052964751141], [-72.694937099890623, 18.445799465401858], [-72.334881557896992, 18.66842153571525], [-72.791649542924873, 19.101625067618027], [-72.784104783810264, 19.483591416903405], [-73.41502234566174, 19.639550889560276], [-73.189790615517595, 19.915683905511909]]] } },
            { "type": "Feature", "properties": { "admin": "Hungary", "name": "Hungary", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[16.202298211337361, 46.852385972676949], [16.534267612380372, 47.496170966169103], [16.340584344150411, 47.712901923201215], [16.903754103267257, 47.714865627628321], [16.979666782304033, 48.123497015976298], [17.488472934649813, 47.867466132186209], [17.857132602620023, 47.758428860050365], [18.696512892336923, 47.88095368101439], [18.777024773847668, 48.081768296900627], [19.174364861739885, 48.111378892603859], [19.66136355965849, 48.266614895208647], [19.769470656013109, 48.2026911484636], [20.239054396249344, 48.327567247096916], [20.473562045989862, 48.562850043321809], [20.801293979584919, 48.62385407164237], [21.872236362401729, 48.319970811550007], [22.085608351334848, 48.422264309271782], [22.640819939878746, 48.150239569687351], [22.710531447040488, 47.882193915389394], [22.09976769378283, 47.672439276716695], [21.626514926853869, 46.994237779318148], [21.021952345471245, 46.316087958351886], [20.220192498462833, 46.127468980486547], [19.596044549241579, 46.171729844744533], [18.829838087649957, 45.908877671891915], [18.456062452882858, 45.759481106136121], [17.630066359129554, 45.95176911069418], [16.882515089595298, 46.380631822284428], [16.564808383864854, 46.503750922219822], [16.370504998447412, 46.841327216166498], [16.202298211337361, 46.852385972676949]]] } },
            { "type": "Feature", "properties": { "admin": "Indonesia", "name": "Indonesia", "continent": "Asia" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[120.715608758630438, -10.239581394087862], [120.295014276206871, -10.258649997603525], [118.967808465654684, -9.55796925215803], [119.900309686361609, -9.361340427287514], [120.425755649905398, -9.665921319215796], [120.775501743656719, -9.969675388227456], [120.715608758630438, -10.239581394087862]]], [[[124.435950148619384, -10.14000090906144], [123.579981724136701, -10.359987481327961], [123.459989048354998, -10.239994805546171], [123.55000939340745, -9.900015557497978], [123.980008986508096, -9.290026950724693], [124.96868248911619, -8.892790215697046], [125.070019972840612, -9.089987481322835], [125.088520135601073, -9.393173109579321], [124.435950148619384, -10.14000090906144]]], [[[117.900018345207741, -8.095681247594923], [118.260616489740471, -8.362383314653327], [118.87845991422212, -8.280682875199828], [119.126506789223086, -8.705824883665072], [117.97040164598927, -8.906639499551257], [117.277730747549015, -9.040894870645557], [116.74014082241662, -9.032936700072637], [117.083737420725313, -8.457157891476539], [117.632024367342126, -8.44930307376819], [117.900018345207741, -8.095681247594923]]], [[[122.903537225436082, -8.094234307490735], [122.756982863456287, -8.649807631060638], [121.2544905945701, -8.933666273639941], [119.924390903809567, -8.810417982623873], [119.920928582846102, -8.44485890059107], [120.715091994307542, -8.236964613480863], [121.341668735846554, -8.53673959720602], [122.007364536630405, -8.46062021244016], [122.903537225436082, -8.094234307490735]]], [[[108.623478631628927, -6.777673841990675], [110.539227329553285, -6.877357679881682], [110.759575636845909, -6.465186455921751], [112.614811232556349, -6.946035658397589], [112.978768345188087, -7.594213148634578], [114.478935174621142, -7.776527601760277], [115.705526971501058, -8.370806573116864], [114.564511346496488, -8.75181690840483], [113.464733514460875, -8.348947442257424], [112.559672479301028, -8.376180922075163], [111.522061395312448, -8.302128594600957], [110.586149530074294, -8.122604668819021], [109.427667270955183, -7.740664157749761], [108.693655226681301, -7.641600437046219], [108.277763299596302, -7.766657403192579], [106.454102004016136, -7.354899590690947], [106.280624220812285, -6.924899997590201], [105.365486281355516, -6.851416110871169], [106.051645949327053, -5.895918877794499], [107.265008579540165, -5.954985039904058], [108.072091099074683, -6.345762220895237], [108.486846144649235, -6.421984958525768], [108.623478631628927, -6.777673841990675]]], [[[134.724624465066654, -6.214400730009286], [134.210133905168902, -6.895237725454704], [134.112775506730998, -6.142467136259014], [134.290335728085779, -5.783057549669038], [134.499625278867882, -5.445042006047898], [134.727001580952106, -5.737582289252158], [134.724624465066654, -6.214400730009286]]], [[[127.249215122588893, -3.459065036638889], [126.874922723498855, -3.790982761249579], [126.183802118027302, -3.607376397316556], [125.989033644719257, -3.177273451351325], [127.00065148326496, -3.12931772218441], [127.249215122588893, -3.459065036638889]]], [[[130.471344028851775, -3.09376433676762], [130.834836053592767, -3.858472181822761], [129.990546502808115, -3.446300957862817], [129.155248651242403, -3.362636813982248], [128.590683628453633, -3.428679294451256], [127.898891229362334, -3.393435967628192], [128.135879347852779, -2.843650404474914], [129.370997756060888, -2.802154229344551], [130.471344028851775, -3.09376433676762]]], [[[134.143367954647772, -1.151867364103594], [134.422627394753022, -2.769184665542383], [135.457602980694674, -3.367752780779113], [136.293314243718754, -2.30704233155609], [137.4407377463275, -1.703513278819372], [138.329727411044757, -1.70268645590265], [139.18492068904294, -2.051295668143637], [139.926684198160387, -2.409051608900284], [141.000210402591847, -2.600151055515624], [141.017056919519007, -5.85902190513802], [141.033851760013874, -9.117892754760417], [140.143415155192542, -8.297167657100955], [139.127766554928087, -8.096042982620942], [138.881476678624949, -8.380935153846094], [137.614473911692812, -8.41168263105976], [138.039099155835174, -7.597882175327354], [138.668621454014783, -7.320224704623072], [138.407913853102343, -6.232849216337483], [137.927839797110835, -5.393365573755998], [135.989250116113453, -4.546543877789047], [135.164597609599667, -4.462931410340771], [133.662880487197867, -3.538853448097526], [133.367704705946778, -4.024818617370314], [132.983955519747326, -4.112978610860281], [132.75694095268895, -3.746282647317129], [132.753788690319197, -3.311787204607071], [131.989804315316178, -2.820551039240455], [133.066844517143466, -2.460417982598443], [133.780030959203486, -2.479848321140209], [133.69621178602614, -2.214541517753687], [132.232373488494204, -2.212526136894325], [131.836221958544684, -1.617161960459597], [130.942839797082797, -1.432522067880796], [130.519558140180038, -0.937720228686075], [131.867537876513609, -0.695461114101818], [132.380116408416768, -0.369537855636977], [133.985548130428384, -0.780210463060442], [134.143367954647772, -1.151867364103594]]], [[[125.240500522971573, 1.419836127117605], [124.43703535369734, 0.427881171058971], [123.685504998876695, 0.235593166500877], [122.723083123872854, 0.431136786293337], [121.056724888189081, 0.381217352699451], [120.18308312386273, 0.23724681233422], [120.040869582195455, -0.519657891444851], [120.935905389490699, -1.408905938323372], [121.475820754076167, -0.955962009285116], [123.34056481332847, -0.615672702643081], [123.258399285984481, -1.076213067228337], [122.822715285331597, -0.930950616055881], [122.388529901215364, -1.516858005381124], [121.508273553555455, -1.904482924002422], [122.454572381684272, -3.186058444840881], [122.271896193532541, -3.529500013852696], [123.170962762546537, -4.683693129091707], [123.162332798353759, -5.34060393638596], [122.628515252778683, -5.634591159694494], [122.236394484548057, -5.282933037948281], [122.71956912647704, -4.46417164471579], [121.738233677254357, -4.851331475446499], [121.48946333220124, -4.574552504091215], [121.619171177253861, -4.188477878438674], [120.898181593917684, -3.602105401222828], [120.972388950688767, -2.627642917494909], [120.305452915529884, -2.931603692235725], [120.39004723519173, -4.097579034037223], [120.430716587405371, -5.528241062037778], [119.796543410319487, -5.67340016034565], [119.36690555224493, -5.379878024927804], [119.653606398600104, -4.459417412944958], [119.498835483885969, -3.49441171632651], [119.078344354326987, -3.487021986508764], [118.767768996252869, -2.801999200047688], [119.180973748858662, -2.147103773612798], [119.323393996255049, -1.35314706788047], [119.825998976725828, 0.154254462073496], [120.035701938966341, 0.566477362465804], [120.885779250167687, 1.309222723796835], [121.666816847826965, 1.013943589681076], [122.927566766451818, 0.875192368977465], [124.077522414242836, 0.917101955566139], [125.065989211121803, 1.643259182131558], [125.240500522971573, 1.419836127117605]]], [[[128.688248732620707, 1.132385972494106], [128.635952183141342, 0.258485826006179], [128.120169712436166, 0.356412665199286], [127.968034295768845, -0.252077325037533], [128.379998813999691, -0.780003757331286], [128.100015903842291, -0.899996433112974], [127.69647464407501, -0.266598402511505], [127.399490187693743, 1.011721503092573], [127.600511509309044, 1.81069082275718], [127.932377557487484, 2.174596258956555], [128.004156121940809, 1.628531398928331], [128.594559360875451, 1.540810655112864], [128.688248732620707, 1.132385972494106]]], [[[117.875627069166001, 1.827640692548911], [118.996747267738158, 0.902219143066048], [117.811858351717788, 0.784241848143722], [117.478338657706047, 0.102474676917026], [117.521643507966587, -0.803723239753211], [116.560048455879496, -1.487660821136231], [116.533796828275158, -2.483517347832901], [116.148083937648607, -4.012726332214014], [116.000857782049067, -3.657037448749008], [114.864803094544513, -4.106984144714416], [114.468651564595064, -3.49570362713382], [113.755671828264099, -3.439169610206519], [113.256994256647545, -3.118775729996854], [112.068126255340644, -3.478392022316071], [111.703290643359992, -2.994442233902631], [111.04824018762821, -3.049425957861188], [110.223846063275971, -2.934032484553483], [110.070935500124335, -1.592874037282414], [109.571947869914041, -1.314906507984489], [109.091873813922518, -0.459506524257051], [108.952657505328162, 0.415375474444346], [109.069136183714036, 1.341933905437642], [109.663260125773718, 2.006466986494984], [109.830226678508836, 1.338135687664191], [110.514060907027101, 0.773131415200993], [111.159137811326559, 0.976478176269509], [111.797548455860408, 0.904441229654651], [112.380251906383648, 1.410120957846757], [112.859809198052176, 1.497790025229946], [113.805849644019531, 1.217548732911041], [114.621355422017473, 1.430688177898886], [115.134037306785231, 2.821481838386219], [115.51907840379198, 3.169238389494395], [115.86551720587677, 4.306559149590156], [117.01521447150634, 4.306094061699468], [117.882034946770162, 4.137551377779487], [117.313232456533513, 3.234428208830578], [118.048329705885351, 2.287690131027361], [117.875627069166001, 1.827640692548911]]], [[[105.817655063909356, -5.852355645372411], [104.710384149191498, -5.873284600450644], [103.868213332130736, -5.037314955264974], [102.584260695406897, -4.220258884298203], [102.156173130300999, -3.614146009946765], [101.399113397225051, -2.799777113459171], [100.902502882900137, -2.05026213949786], [100.141980828860596, -0.650347588710957], [99.26373986206022, 0.183141587724663], [98.970011020913319, 1.042882391764536], [98.601351352943084, 1.823506577965616], [97.699597609449881, 2.453183905442116], [97.17694217324987, 3.30879059489861], [96.424016554757316, 3.86885976807791], [95.380876092513475, 4.970782172053673], [95.293026157617305, 5.479820868344816], [95.936862827541745, 5.439513251157108], [97.484882033277088, 5.24632090903401], [98.369169142655679, 4.268370266126366], [99.142558628335792, 3.590349636240915], [99.693997837322399, 3.174328518075156], [100.641433546961665, 2.099381211755798], [101.658012323007313, 2.083697414555189], [102.498271112073212, 1.398700466310217], [103.076840448013002, 0.561361395668854], [103.838396030698348, 0.104541734208666], [103.437645298274973, -0.711945896002845], [104.010788608824001, -1.059211521004229], [104.369991489684878, -1.084843031421016], [104.539490187602155, -1.782371514496716], [104.887892694113987, -2.340425306816655], [105.622111444116982, -2.42884368246807], [106.10859337771268, -3.06177662517895], [105.857445916774111, -4.305524997579723], [105.817655063909356, -5.852355645372411]]]] } },
            { "type": "Feature", "properties": { "admin": "India", "name": "India", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[77.837450799474553, 35.494009507787759], [78.912268914713209, 34.321936346975782], [78.811086460285722, 33.506198025032404], [79.208891636068572, 32.994394639613709], [79.176128777995501, 32.483779812137705], [78.458446486325997, 32.61816437431272], [78.738894484374001, 31.515906073527056], [79.721366815107089, 30.882714748654724], [81.11125613802929, 30.183480943313398], [80.476721225917373, 29.729865220655334], [80.088424513676259, 28.794470119740136], [81.057202589851997, 28.416095282499036], [81.999987420584958, 27.925479234319987], [83.304248895199535, 27.364505723575554], [84.675017938173767, 27.234901231387528], [85.25177859898335, 26.726198431906337], [86.024392938179147, 26.630984605408567], [87.22747195836628, 26.39789805755607], [88.060237664749806, 26.414615383402484], [88.174804315140904, 26.810405178325944], [88.043132765661198, 27.445818589786818], [88.120440708369841, 27.876541652939586], [88.730325962278528, 28.086864732367509], [88.814248488320544, 27.299315904239361], [88.835642531289366, 27.098966376243755], [89.744527622438838, 26.71940298105995], [90.37327477413406, 26.875724188742872], [91.217512648486405, 26.808648179628019], [92.033483514375078, 26.838310451763554], [92.10371178585973, 27.4526140406332], [91.69665652869665, 27.771741848251661], [92.503118931043616, 27.896876329046442], [93.413347609432662, 28.640629380807219], [94.565990431702929, 29.277438055939978], [95.404802280664612, 29.031716620392125], [96.117678664131006, 29.452802028922459], [96.586590610747479, 28.830979519154337], [96.248833449287758, 28.411030992134435], [97.327113885490007, 28.261582749946331], [97.402561476636123, 27.88253611908544], [97.051988559968066, 27.699058946233144], [97.133999058015277, 27.08377350514996], [96.419365675850941, 27.264589341739221], [95.124767694074933, 26.573572089132295], [95.155153436262566, 26.001307277932078], [94.603249139385355, 25.162495428970399], [94.552657912171611, 24.675238348890328], [94.106741977925054, 23.850740871673477], [93.325187615942767, 24.078556423432197], [93.286326938859247, 23.043658352138998], [93.060294224014598, 22.703110663335565], [93.166127557348361, 22.278459580977099], [92.672720981825549, 22.041238918541247], [92.146034783906799, 23.62749868417259], [91.869927606171302, 23.62434642180278], [91.706475050832083, 22.985263983649183], [91.158963250699713, 23.503526923104381], [91.467729933643668, 24.072639471934789], [91.915092807994398, 24.130413723237108], [92.376201613334786, 24.976692816664961], [91.799595981822065, 25.14743174895731], [90.872210727912105, 25.13260061288954], [89.920692580121838, 25.269749864192171], [89.832480910199592, 25.965082098895476], [89.355094028687276, 26.014407253518065], [88.56304935094974, 26.446525580342716], [88.209789259802477, 25.768065700782707], [88.931553989623069, 25.238692328384769], [88.30637251175601, 24.866079413344199], [88.084422235062405, 24.501657212821918], [88.699940220090895, 24.233714911388557], [88.529769728553759, 23.631141872649163], [88.876311883503064, 22.879146429937826], [89.031961297566198, 22.055708319582973], [88.888765903685396, 21.690588487224741], [88.208497348995209, 21.703171698487804], [86.975704380240259, 21.495561631755201], [87.033168572948853, 20.743307806882406], [86.499351027373777, 20.151638495356604], [85.060265740909671, 19.478578802971096], [83.941005893899998, 18.302009792549722], [83.189217156917834, 17.671221421778977], [82.192792189465905, 17.016636053937813], [82.191241896497175, 16.556664130107844], [81.692719354177456, 16.3102192245079], [80.791999139330116, 15.951972357644488], [80.324895867843864, 15.899184882058346], [80.025069207686428, 15.136414903214144], [80.23327355339039, 13.835770778859978], [80.286293572921849, 13.006260687710832], [79.862546828128487, 12.056215318240886], [79.85799930208681, 10.357275091997108], [79.340511509115984, 10.308854274939618], [78.885345493489169, 9.54613597252772], [79.189719679688281, 9.216543687370146], [78.27794070833049, 8.933046779816932], [77.94116539908434, 8.25295909263974], [77.539897902337927, 7.965534776232331], [76.592978957021657, 8.899276231314188], [76.130061476551063, 10.299630031775518], [75.746467319648488, 11.308250637248303], [75.396101108709573, 11.781245022015822], [74.864815708316812, 12.741935736537895], [74.616717156883524, 13.992582912649677], [74.443859490867197, 14.617221787977693], [73.534199253233368, 15.990652167214957], [73.119909295549419, 17.928570054592495], [72.820909458308634, 19.208233547436162], [72.824475132136783, 20.41950328214153], [72.630533481745388, 21.356009426351001], [71.175273471973938, 20.757441311114228], [70.470458611945091, 20.877330634031381], [69.164130080038817, 22.089298000572697], [69.644927606082391, 22.450774644454334], [69.349596795534325, 22.843179633062686], [68.176645135373377, 23.691965033456704], [68.842599318318761, 24.359133612560932], [71.0432401874682, 24.356523952730193], [70.844699334602822, 25.215102037043511], [70.282873162725579, 25.722228705339823], [70.168926629522005, 26.491871649678835], [69.514392938113119, 26.940965684511365], [70.61649620960192, 27.989196275335861], [71.777665643200308, 27.913180243434521], [72.823751662084689, 28.961591701772047], [73.450638462217412, 29.976413479119863], [74.421380242820263, 30.97981476493117], [74.405928989564998, 31.692639471965272], [75.258641798813187, 32.271105455040491], [74.451559279278698, 32.764899603805489], [74.104293654277328, 33.441473293586846], [73.749948358051952, 34.317698879527846], [74.240202671204955, 34.748887030571247], [75.757060988268321, 34.504922593721311], [76.871721632804011, 34.653544012992732], [77.837450799474553, 35.494009507787759]]] } },
            { "type": "Feature", "properties": { "admin": "Ireland", "name": "Ireland", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[-6.197884894220989, 53.86756500916335], [-6.032985398777609, 53.153164170944336], [-6.788856573910847, 52.260117906292322], [-8.561616583683557, 51.669301255899349], [-9.977085740590267, 51.820454820353071], [-9.16628251793078, 52.864628811242667], [-9.688524542672452, 53.881362616585285], [-8.327987433292007, 54.664518947968624], [-7.572167934591064, 55.131622219454854], [-7.366030646178785, 54.595840969452709], [-7.572167934591064, 54.059956366585986], [-6.953730231138065, 54.073702297575622], [-6.197884894220989, 53.86756500916335]]] } },
            { "type": "Feature", "properties": { "admin": "Iran", "name": "Iran", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[53.921597934795543, 37.198918361961255], [54.800303989486558, 37.392420762678178], [55.511578403551894, 37.964117133123153], [56.180374790273319, 37.935126654607423], [56.619366082592805, 38.121394354803478], [57.330433790928964, 38.029229437810933], [58.436154412678192, 37.522309475243794], [59.234761997316795, 37.412987982730336], [60.377637973883864, 36.52738312432836], [61.123070509694131, 36.491597194966239], [61.21081709172573, 35.650072333309218], [60.80319339380744, 34.404101874319856], [60.528429803311575, 33.676446031217999], [60.963700392505991, 33.528832302376252], [60.536077915290761, 32.981268825811561], [60.863654819588952, 32.182919623334421], [60.941944614511115, 31.548074652628745], [61.699314406180811, 31.379506130492661], [61.78122155136343, 30.735850328081231], [60.874248488208778, 29.829238999952604], [61.369308709564926, 29.303276272085917], [61.771868117118615, 28.699333807890792], [62.727830438085974, 28.259644883735383], [62.755425652929851, 27.378923448184985], [63.23389773952028, 27.217047024030702], [63.316631707619578, 26.756532497661659], [61.874187453056535, 26.239974880472097], [61.497362908784183, 25.078237006118492], [59.616134067630831, 25.380156561783775], [58.525761346272297, 25.609961656185725], [57.39725141788238, 25.739902045183634], [56.97076582217754, 26.966106268821356], [56.492138706290199, 27.14330475515019], [55.723710158110059, 26.964633490501036], [54.715089552637252, 26.480657863871507], [53.493096958231334, 26.812368882753042], [52.483597853409599, 27.580849107365488], [51.520762566947404, 27.865689602158291], [50.852948032439528, 28.814520575469377], [50.115008579311571, 30.14777252859971], [49.576850213423988, 29.9857152369324], [48.941333449098536, 30.31709035900403], [48.567971225789748, 29.926778265903515], [48.014568312376085, 30.452456773392594], [48.00469811380831, 30.985137437457237], [47.685286085812258, 30.984853217079621], [47.849203729042095, 31.709175930298663], [47.334661492711895, 32.469155381799105], [46.109361606639304, 33.017287299118998], [45.416690708199035, 33.967797756479577], [45.648459507028079, 34.748137722303007], [46.15178795755093, 35.093258775364284], [46.076340366404786, 35.67738332777548], [45.420618117053202, 35.977545884742817], [44.77267, 37.17045], [44.225755649600522, 37.971584377589345], [44.421402622257538, 38.281281236314534], [44.109225294782334, 39.428136298168091], [44.793989699081934, 39.713002631177041], [44.9526880226503, 39.335764675446363], [45.457721795438765, 38.874139105783051], [46.143623081248812, 38.74120148371221], [46.505719842317966, 38.770605373686287], [47.685079380083081, 39.508363959301207], [48.060095249225235, 39.582235419262453], [48.355529412637871, 39.2887649602769], [48.010744256386474, 38.794014797514514], [48.634375441284803, 38.27037750910096], [48.883249139202483, 38.32024526626261], [49.199612257693332, 37.582874253889877], [50.147771437384606, 37.37456655532133], [50.842354363819695, 36.872814235983384], [52.26402469260141, 36.700421657857696], [53.825789829326411, 36.965030829408228], [53.921597934795543, 37.198918361961255]]] } },
            { "type": "Feature", "properties": { "admin": "Iraq", "name": "Iraq", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[45.420618117053202, 35.977545884742817], [46.076340366404786, 35.67738332777548], [46.15178795755093, 35.093258775364284], [45.648459507028079, 34.748137722303007], [45.416690708199035, 33.967797756479577], [46.109361606639304, 33.017287299118998], [47.334661492711895, 32.469155381799105], [47.849203729042095, 31.709175930298663], [47.685286085812258, 30.984853217079621], [48.00469811380831, 30.985137437457237], [48.014568312376085, 30.452456773392594], [48.567971225789748, 29.926778265903515], [47.974519077349889, 29.975819200148493], [47.302622104690947, 30.059069932570711], [46.568713413281742, 29.099025173452283], [44.709498732284736, 29.178891099559376], [41.889980910007829, 31.190008653278362], [40.399994337736238, 31.889991766887931], [39.195468377444961, 32.16100881604266], [38.792340529136077, 33.378686428352218], [41.00615888851992, 34.419372260062111], [41.383965285005807, 35.628316555314349], [41.289707472505448, 36.358814602192261], [41.837064243340954, 36.605853786763568], [42.349591098811764, 37.22987254490409], [42.779125604021822, 37.385263576805741], [43.942258742047287, 37.256227525372942], [44.293451775902852, 37.001514390606289], [44.772699008977689, 37.170444647768427], [45.420618117053202, 35.977545884742817]]] } },
            { "type": "Feature", "properties": { "admin": "Iceland", "name": "Iceland", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[-14.508695441129232, 66.455892239031414], [-14.739637417041605, 65.808748277440287], [-13.609732224979807, 65.126671047619851], [-14.9098337467949, 64.36408193628867], [-17.794438035543418, 63.67874909123384], [-18.656245896874989, 63.496382961675806], [-19.972754685942757, 63.643634955491514], [-22.762971971110154, 63.960178941495371], [-21.778484259517676, 64.402115790455497], [-23.955043911219104, 64.891129869233481], [-22.184402635170354, 65.084968166760291], [-22.227423265053329, 65.378593655042721], [-24.326184047939332, 65.611189276788451], [-23.650514695723082, 66.262519029395207], [-22.134922451250883, 66.410468655046856], [-20.576283738679543, 65.732112128351417], [-19.056841600001587, 66.276600857194751], [-17.798623826559048, 65.993853257909763], [-16.167818976292121, 66.526792304135853], [-14.508695441129232, 66.455892239031414]]] } },
            { "type": "Feature", "properties": { "admin": "Israel", "name": "Israel", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[35.719918247222743, 32.709192409794859], [35.545665317534535, 32.393992011030569], [35.183930291491428, 32.532510687788935], [34.974640740709319, 31.866582343059715], [35.225891554512422, 31.754341132121759], [34.970506626125989, 31.616778469360803], [34.927408481594554, 31.35343537040141], [35.397560662586038, 31.489086005167572], [35.420918409981958, 31.100065822874349], [34.922602573391423, 29.501326198844517], [34.26543338393568, 31.219360866820146], [34.556371697738903, 31.548823960896989], [34.48810713068135, 31.605538845337314], [34.752587111151165, 32.07292633720116], [34.955417107896771, 32.827376410446369], [35.098457472480668, 33.080539252244257], [35.126052687324538, 33.090900376918775], [35.460709262846699, 33.089040025356276], [35.552796665190805, 33.264274807258012], [35.821100701650231, 33.277426459276292], [35.836396925608618, 32.868123277308506], [35.700797967274745, 32.716013698857374], [35.719918247222743, 32.709192409794859]]] } },
            { "type": "Feature", "properties": { "admin": "Italy", "name": "Italy", "continent": "Europe" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[15.52037601081383, 38.231155096991465], [15.160242954171732, 37.444045518537813], [15.309897902089002, 37.134219468731793], [15.099988234119445, 36.61998729099539], [14.335228712632013, 36.996630967754747], [13.826732618879927, 37.104531358380186], [12.431003859108809, 37.612949937483812], [12.570943637755132, 38.126381130519682], [13.741156447004581, 38.03496552179535], [14.761249220446157, 38.143873602850498], [15.52037601081383, 38.231155096991465]]], [[[9.210011834356264, 41.209991360024212], [9.809975213264973, 40.500008856766094], [9.669518670295671, 39.177376410471787], [9.214817742559486, 39.240473334300127], [8.806935662479729, 38.906617743478471], [8.428302443077113, 39.171847032216611], [8.388253208050939, 40.378310858718798], [8.159998406617659, 40.950007229163774], [8.709990675500107, 40.899984442705225], [9.210011834356264, 41.209991360024212]]], [[[12.376485223040842, 46.767559109069872], [13.806475457421552, 46.50930613869118], [13.698109978905475, 46.016778062517368], [13.937630242578335, 45.59101593686465], [13.141606479554294, 45.736691799495411], [12.328581170306304, 45.38177806251484], [12.383874952858601, 44.885374253919075], [12.261453484759157, 44.600482082694008], [12.589237094786482, 44.091365871754462], [13.526905958722491, 43.587727362637899], [14.029820997787024, 42.761007798832473], [15.142569614327952, 41.955139675456891], [15.926191033601892, 41.961315009115729], [16.169897088290409, 41.740294908203417], [15.889345737377793, 41.541082261718195], [16.785001661860573, 41.179605617836579], [17.519168735431204, 40.877143459632229], [18.376687452882575, 40.355624904942651], [18.4802470231954, 40.168866278639818], [18.293385044028096, 39.810774441073235], [17.738380161213279, 40.277671006830289], [16.869595981522334, 40.442234605463838], [16.448743116937319, 39.795400702466473], [17.171489698971495, 39.424699815420716], [17.052840610429339, 38.902871202137291], [16.635088331781841, 38.843572496082395], [16.100960727613053, 37.985898749334176], [15.684086948314498, 37.908849188787023], [15.687962680736318, 38.214592800441849], [15.891981235424705, 38.750942491199218], [16.109332309644312, 38.964547024077682], [15.718813510814638, 39.544072374014938], [15.413612501698818, 40.048356838535163], [14.998495721098234, 40.172948716790913], [14.703268263414767, 40.604550279292617], [14.06067182786526, 40.786347968095434], [13.627985060285393, 41.188287258461649], [12.888081902730418, 41.253089504555604], [12.106682570044907, 41.7045348170574], [11.191906365614184, 42.355425319989671], [10.511947869517794, 42.93146251074721], [10.200028924204046, 43.920006822274608], [9.702488234097812, 44.036278794931313], [8.888946160526869, 44.366336167979533], [8.428560825238575, 44.23122813575241], [7.8507666357832, 43.767147935555236], [7.435184767291841, 43.693844916349164], [7.549596388386161, 44.127901109384808], [7.007562290076661, 44.254766750661382], [6.749955275101711, 45.028517971367584], [7.096652459347835, 45.333098863295859], [6.80235517744566, 45.708579820328673], [6.84359297041456, 45.991146552100659], [7.273850945676683, 45.776947740250748], [7.755992058959832, 45.824490057959267], [8.316629672894377, 46.16364248309084], [8.489952426801294, 46.005150865251736], [8.966305779667833, 46.03693187111115], [9.18288170740311, 46.440214748716976], [9.92283654139035, 46.314899400409182], [10.363378126678665, 46.48357127540983], [10.4427014502466, 46.893546250997431], [11.048555942436504, 46.751358547546396], [11.164827915093325, 46.941579494812729], [12.153088006243079, 47.115393174826423], [12.376485223040842, 46.767559109069872]]]] } },
            { "type": "Feature", "properties": { "admin": "Jamaica", "name": "Jamaica", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-77.569600796199197, 18.490525417550483], [-76.896618618462114, 18.400866807524078], [-76.365359056285527, 18.16070058844759], [-76.19965857614163, 17.886867173732963], [-76.902561408175671, 17.868237819891743], [-77.206341315403449, 17.701116237859818], [-77.766022915340599, 17.861597398342237], [-78.337719285785596, 18.225967922432226], [-78.217726610003865, 18.454532782459193], [-77.797364671525614, 18.524218451404774], [-77.569600796199197, 18.490525417550483]]] } },
            { "type": "Feature", "properties": { "admin": "Jordan", "name": "Jordan", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[35.545665317534535, 32.393992011030569], [35.719918247222743, 32.709192409794859], [36.834062127435537, 32.312937526980768], [38.792340529136077, 33.378686428352218], [39.195468377444961, 32.16100881604266], [39.004885695152545, 32.010216986614971], [37.002165561681004, 31.508412990844736], [37.998848911294367, 30.508499864213128], [37.668119744626374, 30.338665269485894], [37.503581984209028, 30.003776150018396], [36.740527784987243, 29.865283311476183], [36.501214227043583, 29.505253607698702], [36.068940870922049, 29.19749461518445], [34.956037225084252, 29.356554673778835], [34.922602573391423, 29.501326198844517], [35.420918409981958, 31.100065822874349], [35.397560662586038, 31.489086005167572], [35.545251906076196, 31.782504787720832], [35.545665317534535, 32.393992011030569]]] } },
            { "type": "Feature", "properties": { "admin": "Japan", "name": "Japan", "continent": "Asia" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[134.638428176003856, 34.149233710256418], [134.766379022358478, 33.806334743783673], [134.20341596897083, 33.201177883429622], [133.792950067276479, 33.521985175097583], [133.280268182508848, 33.289570420864941], [133.014858026257855, 32.704567369104772], [132.363114862192674, 32.989382025681373], [132.371176385630179, 33.463642483040068], [132.924372593314786, 34.060298570282036], [133.492968377822194, 33.944620876596694], [133.904106073136347, 34.364931138642611], [134.638428176003856, 34.149233710256418]]], [[[140.976387567305267, 37.142074286440156], [140.599769728762084, 36.343983466124534], [140.774074334882641, 35.842877102190229], [140.253279250245072, 35.138113918593653], [138.975527785396196, 34.667600002576101], [137.217598911691198, 34.606285915661843], [135.792983026268871, 33.46480520276662], [135.120982700745401, 33.849071153289053], [135.07943484918269, 34.596544908174813], [133.340316196831964, 34.375938218720755], [132.156770868051296, 33.904933376596503], [130.986144647343451, 33.885761420216276], [132.000036248910021, 33.149992377244608], [131.33279015515734, 31.450354519164836], [130.68631798718593, 31.029579169228235], [130.202419875204953, 31.418237616495411], [130.447676222862128, 32.319474595665717], [129.81469160371887, 32.610309556604385], [129.408463169472554, 33.296055813117583], [130.353935174684636, 33.604150702441693], [130.878450962447118, 34.232742824840031], [131.884229364143891, 34.749713853487911], [132.617672967662486, 35.433393052709413], [134.608300815977771, 35.731617743465812], [135.677537876528902, 35.527134100886819], [136.723830601142424, 37.304984239240376], [137.390611607004473, 36.827390651998819], [138.857602166906247, 37.827484646143454], [139.426404657142882, 38.215962225897634], [140.054790073812057, 39.438807481436378], [139.883379347899847, 40.563312486323682], [140.305782505453664, 41.195005194659551], [141.368973423426667, 41.378559882160282], [141.914263136970476, 39.991616115878678], [141.884600864834965, 39.18086456965149], [140.959489373945729, 38.174000962876583], [140.976387567305267, 37.142074286440156]]], [[[143.910161981379474, 44.174099839853724], [144.613426548439634, 43.960882880217511], [145.320825230083074, 44.384732977875437], [145.543137241802754, 43.262088324550596], [144.059661899999867, 42.988358262700551], [143.183849725517291, 41.995214748699183], [141.611490920172457, 42.678790595056071], [141.067286411706618, 41.58459381770799], [139.95510623592105, 41.56955597591103], [139.817543573159924, 42.563758856774392], [140.312087030193169, 43.333272610032644], [141.380548944259999, 43.388824774746489], [141.671952345953912, 44.772125352551477], [141.967644891527982, 45.551483466161343], [143.142870314709796, 44.510358384776957], [143.910161981379474, 44.174099839853724]]]] } },
            { "type": "Feature", "properties": { "admin": "Kazakhstan", "name": "Kazakhstan", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[70.962314894499272, 42.26615428320553], [70.388964878220776, 42.081307684897517], [69.070027296835221, 41.384244289712335], [68.632482944620037, 40.668680731766855], [68.259895867795635, 40.662324530594894], [67.985855747351806, 41.135990708982199], [66.714047072216587, 41.168443508461557], [66.510648634715707, 41.987644151368549], [66.023391554635609, 41.994646307944031], [66.098012322865188, 42.997660020513074], [64.90082441595932, 43.728080552742647], [63.18578698105658, 43.650074978197999], [62.013300408786264, 43.504476630215649], [61.05831994003249, 44.405816962250576], [60.239971958258472, 44.784036770194739], [58.689989048095796, 45.500013739598721], [58.503127068928428, 45.58680430763296], [55.928917270741167, 44.995858466159163], [55.968191359283011, 41.30864166926937], [55.455251092353805, 41.259859117185826], [54.755345493392653, 42.04397146256661], [54.079417759014959, 42.324109402020831], [52.944293247291725, 42.116034247397572], [52.502459751196277, 41.783315538086462], [52.446339145727208, 42.027150783855561], [52.692112257707251, 42.443895372073364], [52.501426222550315, 42.792297878585188], [51.342427199108201, 43.132974758469338], [50.891291945200223, 44.031033637053774], [50.339129266161358, 44.284015611338468], [50.305642938036257, 44.609835516938908], [51.278503452363211, 44.514854234386448], [51.316899041556034, 45.245998236667894], [52.167389764215713, 45.408391425145098], [53.040876499245194, 45.259046535821753], [53.220865512917712, 46.23464590105992], [53.042736850807771, 46.853006089864486], [52.042022739475598, 46.804636949239232], [51.191945428274252, 47.048704738953909], [50.034083286342465, 46.608989976582208], [49.10116, 46.39933000000012], [48.593241001180495, 46.561034247415471], [48.694733514201729, 47.075628160177921], [48.057253045449258, 47.743752753279516], [47.315231154170242, 47.715847479841948], [46.466445753776256, 48.394152330104923], [47.043671502476506, 49.1520388860976], [46.751596307162728, 49.35600576435376], [47.549480421749301, 50.454698391311119], [48.577841424357523, 49.874759629915658], [48.702381626181008, 50.605128485712825], [50.766648390512145, 51.692762356159889], [52.328723585830957, 51.71865224873811], [54.53287845237621, 51.026239732459302], [55.716940545479801, 50.62171662047853], [56.777961053296551, 51.043551337277037], [58.363290643146733, 51.063653469438563], [59.642282342370599, 50.545442206415707], [59.932807244715484, 50.842194118851857], [61.337424350840919, 50.799070136104248], [61.588003371024158, 51.2726587998432], [59.967533807215531, 51.960420437215696], [60.927268507740258, 52.447548326215028], [60.739993117114572, 52.719986477257734], [61.699986199800584, 52.979996446334255], [60.978066440683151, 53.664993394579128], [61.436591424409052, 54.006264553434775], [65.178533563095911, 54.354227810272093], [65.66687584825398, 54.601266994843449], [68.169100376258811, 54.970391750704309], [69.068166945272864, 55.385250149143516], [70.865266554655122, 55.169733588270091], [71.180131056609397, 54.133285224008247], [72.224150018202167, 54.376655381886728], [73.508516066384388, 54.035616766976588], [73.425678745420427, 53.489810289109741], [74.384845005190044, 53.546861070360066], [76.891100294913414, 54.490524400441913], [76.525179477854735, 54.177003485727127], [77.800915561844221, 53.404414984747561], [80.035559523441663, 50.864750881547238], [80.568446893235475, 51.388336493528456], [81.945985548839914, 50.812195949906354], [83.383003778012366, 51.069182847693909], [83.935114780618832, 50.889245510453563], [84.416377394553052, 50.311399644565817], [85.115559523462011, 50.117302964877631], [85.541269972682457, 49.69285858824815], [86.829356723989619, 49.826674709668154], [87.359970330762664, 49.214980780629148], [86.598776483103379, 48.549181626980605], [85.768232863308285, 48.455750637396974], [85.72048383987071, 47.452969468773112], [85.164290399113355, 47.000955715516099], [83.180483839860443, 47.330031236350848], [82.458925815769106, 45.539649563166499], [81.947070753918112, 45.317027492853235], [79.966106398441397, 44.917516994804643], [80.866206496101356, 43.180362046881037], [80.180150180994289, 42.920067857426936], [80.259990268885332, 42.349999294599101], [79.643645460940135, 42.496682847659649], [79.142177361979776, 42.856092434249589], [77.658391961583206, 42.960685533208327], [76.000353631498555, 42.988022365890622], [75.636964959622091, 42.877899888676765], [74.212865838522575, 43.298339341803505], [73.645303582660901, 43.091271877609863], [73.489757521462337, 42.500894476891276], [71.844638299450637, 42.845395412765178], [71.186280552052253, 42.704292914392219], [70.962314894499272, 42.26615428320553]]] } },
            { "type": "Feature", "properties": { "admin": "Kenya", "name": "Kenya", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[40.993, -0.85829], [41.58513, -1.68325], [40.88477, -2.08255], [40.63785, -2.49979], [40.26304, -2.57309], [40.12119, -3.27768], [39.80006, -3.68116], [39.60489, -4.34653], [39.20222, -4.67677], [37.7669, -3.67712], [37.69869, -3.09699], [34.07262, -1.05982], [33.903711197104521, -0.95], [33.893568969666937, 0.109813537861896], [34.18, 0.515], [34.6721, 1.17694], [35.03599, 1.90584], [34.59607, 3.05374], [34.47913, 3.5556], [34.005, 4.249884947362047], [34.620196267853871, 4.847122742081987], [35.298007118232974, 5.506], [35.817447662353501, 5.338232082790795], [35.817447662353501, 4.776965663461889], [36.159078632855639, 4.447864127672768], [36.855093238008116, 4.447864127672768], [38.120915, 3.598605], [38.43697, 3.58851], [38.67114, 3.61607], [38.89251, 3.50074], [39.559384258765846, 3.42206], [39.85494, 3.83879], [40.76848, 4.25702], [41.1718, 3.91909], [41.855083092643966, 3.918911920483726], [40.98105, 2.78452], [40.993, -0.85829]]] } },
            { "type": "Feature", "properties": { "admin": "Kyrgyzstan", "name": "Kyrgyzstan", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[70.96231489449913, 42.266154283205481], [71.186280552052111, 42.704292914392127], [71.84463829945058, 42.845395412765093], [73.489757521462337, 42.500894476891311], [73.645303582660901, 43.09127187760982], [74.212865838522546, 43.298339341803363], [75.636964959622006, 42.877899888676673], [76.000353631498442, 42.988022365890664], [77.658391961583206, 42.960685533208256], [79.142177361979762, 42.856092434249511], [79.643645460940107, 42.496682847659514], [80.259990268885289, 42.349999294599044], [80.119430373051358, 42.123940741538235], [78.543660923175295, 41.582242540038685], [78.187196893225959, 41.185315863604792], [76.904484490877067, 41.066485907549634], [76.526368035797432, 40.427946071935111], [75.467827996730691, 40.562072251948663], [74.776862420556043, 40.366425279291619], [73.822243686828287, 39.893973497063179], [73.960013055318413, 39.660008449861721], [73.67537926625478, 39.431236884105594], [71.784693637991992, 39.279463202464363], [70.549161818325601, 39.604197902986492], [69.464886915977516, 39.526683254548693], [69.559609816368507, 40.103211371412968], [70.648018833299957, 39.935753892571157], [71.014198032520156, 40.244365546218226], [71.774875115856545, 40.145844428053763], [73.055417108049156, 40.86603302668945], [71.870114780570447, 41.392900092121259], [71.157858514291576, 41.143587144529107], [70.420022414028196, 41.519998277343134], [71.259247674448218, 42.167710679689456], [70.96231489449913, 42.266154283205481]]] } },
            { "type": "Feature", "properties": { "admin": "Cambodia", "name": "Cambodia", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[103.497279901139677, 10.632555446815926], [103.090689731867229, 11.153660590047162], [102.58493248902667, 12.186594956913279], [102.348099399833004, 13.39424734135822], [102.988422072361601, 14.225721136934464], [104.281418084736586, 14.416743068901363], [105.218776890078871, 14.27321177821069], [106.04394616091551, 13.881091009979952], [106.496373325630856, 14.57058380783428], [107.382727492301058, 14.202440904186968], [107.614547967562402, 13.535530707244202], [107.491403029410861, 12.337205918827944], [105.810523716253101, 11.567614650921225], [106.249670037869436, 10.961811835163585], [105.199914992292321, 10.889309800658094], [104.334334751403446, 10.486543687375228], [103.497279901139677, 10.632555446815926]]] } },
            { "type": "Feature", "properties": { "admin": "South Korea", "name": "Korea", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[128.349716424676586, 38.612242946927843], [129.212919549680038, 37.432392483055942], [129.460449660358137, 36.784189154602821], [129.468304478066472, 35.632140611303939], [129.091376580929563, 35.08248423923142], [128.18585045787907, 34.890377102186385], [127.386519403188373, 34.475673733044111], [126.485747511908713, 34.390045884736473], [126.3739197124291, 34.934560451795939], [126.559231398627773, 35.684540513647896], [126.117397902532261, 36.725484727519252], [126.860143263863364, 36.893924058574612], [126.174758742376213, 37.749685777328033], [126.237338901881742, 37.840377916000271], [126.683719924018888, 37.804772854151174], [127.073308547067342, 38.256114813788393], [127.780035435090966, 38.304535630845884], [128.205745884311426, 38.370397243801882], [128.349716424676586, 38.612242946927843]]] } },
            { "type": "Feature", "properties": { "admin": "Kosovo", "name": "Kosovo", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[20.76216, 42.05186], [20.717310000000108, 41.84711], [20.59023, 41.85541], [20.52295, 42.21787], [20.28374, 42.32025], [20.0707, 42.58863], [20.25758, 42.81275], [20.49679, 42.88469], [20.63508, 43.21671], [20.81448, 43.27205], [20.95651, 43.13094], [21.143395, 43.068685000000123], [21.27421, 42.90959], [21.43866, 42.86255], [21.63302, 42.67717], [21.77505, 42.6827], [21.66292, 42.43922], [21.54332, 42.32025], [21.576635989402117, 42.245224397061847], [21.352700000000134, 42.2068], [20.76216, 42.05186]]] } },
            { "type": "Feature", "properties": { "admin": "Kuwait", "name": "Kuwait", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[47.974519077349889, 29.975819200148493], [48.183188510944483, 29.534476630159759], [48.09394331237641, 29.306299343374999], [48.416094191283939, 28.552004299426663], [47.708850538937376, 28.526062730416136], [47.459821811722819, 29.002519436147217], [46.568713413281742, 29.099025173452283], [47.302622104690947, 30.059069932570711], [47.974519077349889, 29.975819200148493]]] } },
            { "type": "Feature", "properties": { "admin": "Laos", "name": "Lao PDR", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[105.218776890078871, 14.27321177821069], [105.544338413517664, 14.723933620660414], [105.589038527450128, 15.570316066952856], [104.779320509868768, 16.441864935771445], [104.716947056092465, 17.428858954330078], [103.956476678485288, 18.240954087796872], [103.200192091893726, 18.309632066312769], [102.998705682387694, 17.961694647691598], [102.413004998791592, 17.932781683824281], [102.113591750092453, 18.109101670804161], [101.059547560635139, 17.512497259994486], [101.035931431077742, 18.408928330961611], [101.282014601651667, 19.462584947176762], [100.606293573003128, 19.508344427971217], [100.548881056726856, 20.109237982661124], [100.115987583417819, 20.41784963630818], [100.329101190189519, 20.786121731036229], [101.180005324307515, 21.436572984294024], [101.270025669359939, 21.201651923095177], [101.803119744882906, 21.174366766845065], [101.652017856861491, 22.318198757409544], [102.170435825613552, 22.464753119389297], [102.754896274834636, 21.675137233969462], [103.203861118586431, 20.766562201413745], [104.435000441508024, 20.758733221921528], [104.822573683697073, 19.886641750563879], [104.183387892678908, 19.624668077060214], [103.896532017026701, 19.265180975821799], [105.094598423281496, 18.666974595611073], [105.925762160264, 17.485315456608955], [106.55600792849566, 16.604283962464802], [107.312705926545576, 15.908538316303177], [107.564525181103875, 15.202173163305554], [107.382727492301058, 14.202440904186968], [106.496373325630856, 14.57058380783428], [106.04394616091551, 13.881091009979952], [105.218776890078871, 14.27321177821069]]] } },
            { "type": "Feature", "properties": { "admin": "Lebanon", "name": "Lebanon", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[35.821100701650231, 33.277426459276292], [35.552796665190805, 33.264274807258012], [35.460709262846699, 33.089040025356276], [35.126052687324538, 33.090900376918775], [35.48220665868012, 33.905450140919434], [35.979592319489392, 34.610058295219126], [35.998402540843628, 34.644914048799997], [36.448194207512095, 34.59393524834406], [36.611750115715886, 34.201788641897174], [36.066460402172048, 33.824912421192543], [35.821100701650231, 33.277426459276292]]] } },
            { "type": "Feature", "properties": { "admin": "Liberia", "name": "Liberia", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[-7.712159389669749, 4.364565944837721], [-7.974107224957249, 4.355755113131961], [-9.004793667018673, 4.832418524592199], [-9.913420376006682, 5.593560695819205], [-10.765383876986643, 6.140710760925556], [-11.438779466182053, 6.785916856305746], [-11.199801805048278, 7.105845648624735], [-11.14670427086838, 7.396706447779534], [-10.695594855176477, 7.939464016141085], [-10.230093553091276, 8.406205552601291], [-10.016566534861253, 8.42850393313523], [-9.755342169625832, 8.541055202666923], [-9.33727983238458, 7.928534450711351], [-9.403348151069748, 7.526905218938906], [-9.208786383490844, 7.313920803247952], [-8.926064622422002, 7.309037380396375], [-8.722123582382123, 7.711674302598509], [-8.439298468448696, 7.686042792181736], [-8.485445522485348, 7.395207831243068], [-8.385451626000572, 6.911800645368742], [-8.602880214868618, 6.467564195171659], [-8.311347622094017, 6.193033148621081], [-7.993692592795879, 6.126189683451541], [-7.570152553731686, 5.707352199725903], [-7.53971513511176, 5.313345241716517], [-7.63536821128403, 5.188159084489455], [-7.712159389669749, 4.364565944837721]]] } },
            { "type": "Feature", "properties": { "admin": "Libya", "name": "Libya", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[14.8513, 22.862950000000119], [14.143870883855239, 22.491288967371126], [13.581424594790459, 23.040506089769274], [11.999505649471697, 23.471668402596432], [11.560669386449032, 24.09790924732561], [10.771363559622952, 24.562532050061741], [10.303846876678445, 24.379313259370967], [9.948261346078024, 24.936953640232613], [9.910692579801774, 25.365454616796789], [9.319410841518218, 26.094324856057476], [9.716285841519662, 26.512206325785652], [9.629056023811073, 27.140953477481041], [9.756128370816779, 27.688258571884198], [9.68388471847288, 28.144173895779311], [9.859997999723472, 28.959989732371064], [9.805634392952353, 29.424638373323369], [9.482139926805415, 30.307556057246181], [9.970017124072966, 30.539324856075375], [10.056575148161697, 30.961831366493517], [9.950225050505194, 31.376069647745275], [10.636901482799484, 31.761420803345679], [10.944789666394511, 32.081814683555358], [11.43225345220378, 32.368903103152824], [11.488787469131008, 33.136995754523234], [12.66331, 32.79278], [13.08326, 32.87882], [13.91868, 32.71196], [15.24563, 32.26508], [15.71394, 31.37626], [16.61162, 31.18218], [18.02109, 30.76357], [19.08641, 30.26639], [19.57404, 30.52582], [20.05335, 30.98576], [19.82033, 31.751790000000135], [20.13397, 32.2382], [20.85452, 32.7068], [21.54298, 32.8432], [22.89576, 32.63858], [23.2368, 32.19149], [23.6091300000001, 32.18726], [23.9275, 32.01667], [24.92114, 31.89936], [25.16482, 31.56915], [24.80287, 31.08929], [24.95762, 30.6616], [24.70007, 30.04419], [25.00000000000011, 29.238654529533552], [25.00000000000011, 25.682499996360995], [25.00000000000011, 22.0], [25.00000000000011, 20.00304], [23.850000000000129, 20.0], [23.837660000000135, 19.580470000000101], [19.84926, 21.49509], [15.86085, 23.40972], [14.8513, 22.862950000000119]]] } },
            { "type": "Feature", "properties": { "admin": "Sri Lanka", "name": "Sri Lanka", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[81.787959018891371, 7.523055324733162], [81.637322218760573, 6.481775214051921], [81.218019647144317, 6.197141424988287], [80.348356968104397, 5.968369859232154], [79.872468703128519, 6.763463446474928], [79.6951668639351, 8.200843410673384], [80.147800734379629, 9.824077663609554], [80.838817986986541, 9.268426825391186], [81.304319289071756, 8.564206244333688], [81.787959018891371, 7.523055324733162]]] } },
            { "type": "Feature", "properties": { "admin": "Lesotho", "name": "Lesotho", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[28.978262566857236, -28.955596612261708], [29.325166456832587, -29.257386976846245], [29.018415154748016, -29.743765557577362], [28.848399692507734, -30.070050551068245], [28.291069370239903, -30.226216729454293], [28.107204624145421, -30.545732110314944], [27.749397006956478, -30.645105889612214], [26.999261915807629, -29.875953871379977], [27.532511020627471, -29.242710870075353], [28.07433841320778, -28.851468601193581], [28.541700066855491, -28.647501722937562], [28.978262566857236, -28.955596612261708]]] } },
            { "type": "Feature", "properties": { "admin": "Lithuania", "name": "Lithuania", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[22.731098667092649, 54.327536932993311], [22.651051873472536, 54.582740993866729], [22.757763706155256, 54.856574408581366], [22.31572350433057, 55.01529857036585], [21.26844892750346, 55.190481675835301], [21.05580040862241, 56.031076361711051], [22.201156853939491, 56.337801825579483], [23.878263787539957, 56.273671373105259], [24.860684441840753, 56.372528388079616], [25.000934279080887, 56.164530748104831], [25.533046502390327, 56.100296942766029], [26.494331495883749, 55.61510691997762], [26.588279249790386, 55.167175604871659], [25.768432651479792, 54.846962592175082], [25.536353794056989, 54.282423407602515], [24.45068362803703, 53.905702216194747], [23.484127638449841, 53.912497667041123], [23.243987257589506, 54.220566718149129], [22.731098667092649, 54.327536932993311]]] } },
            { "type": "Feature", "properties": { "admin": "Luxembourg", "name": "Luxembourg", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[6.043073357781109, 50.128051662794221], [6.242751092156992, 49.90222565367872], [6.186320428094176, 49.4638028021145], [5.897759230176403, 49.442667141307012], [5.674051954784828, 49.52948354755749], [5.782417433300905, 50.090327867221205], [6.043073357781109, 50.128051662794221]]] } },
            { "type": "Feature", "properties": { "admin": "Latvia", "name": "Latvia", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[21.05580040862241, 56.031076361711051], [21.090423618257965, 56.783872789122924], [21.581866489353668, 57.411870632549913], [22.524341261492872, 57.753374335350756], [23.31845299652209, 57.006236477274854], [24.120729607853423, 57.025692654032753], [24.312862583114615, 57.793423570376966], [25.164593540149262, 57.970156968815175], [25.602809685984365, 57.847528794986559], [26.46353234223778, 57.476388658266316], [27.288184848751509, 57.474528306703817], [27.770015903440925, 57.244258124411218], [27.855282016722519, 56.759326483784278], [28.17670942557799, 56.169129950578807], [27.102459751094525, 55.783313707087672], [26.494331495883749, 55.61510691997762], [25.533046502390327, 56.100296942766029], [25.000934279080887, 56.164530748104831], [24.860684441840753, 56.372528388079616], [23.878263787539957, 56.273671373105259], [22.201156853939491, 56.337801825579483], [21.05580040862241, 56.031076361711051]]] } },
            { "type": "Feature", "properties": { "admin": "Morocco", "name": "Morocco", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[-5.193863491222031, 35.755182196590845], [-4.591006232105143, 35.330711981745644], [-3.640056525070007, 35.39985504815197], [-2.604305792644111, 35.17909332940112], [-2.169913702798624, 35.168396307916694], [-1.792985805661658, 34.527918606091298], [-1.73345455566141, 33.919712836232115], [-1.388049282222596, 32.864015000941372], [-1.124551153966195, 32.651521511357195], [-1.30789913573787, 32.262888902306024], [-2.616604783529567, 32.094346218386157], [-3.068980271812648, 31.724497992473285], [-3.647497931320145, 31.637294012980814], [-3.690441046554666, 30.896951605751152], [-4.859646165374442, 30.501187649043874], [-5.242129278982786, 30.00044302013557], [-6.060632290053745, 29.731699734001801], [-7.059227667661899, 29.57922842052465], [-8.67411617678283, 28.841288967396643], [-8.665589565454836, 27.656425889592462], [-8.817809007940523, 27.656425889592462], [-8.817828334986642, 27.656425889592462], [-8.794883999049032, 27.120696316022553], [-9.413037482124507, 27.088476060488539], [-9.735343390328749, 26.860944729107409], [-10.189424200877452, 26.860944729107409], [-10.551262579785258, 26.990807603456879], [-11.392554897496948, 26.883423977154386], [-11.718219773800339, 26.104091701760801], [-12.030758836301654, 26.030866197203121], [-12.500962693725368, 24.770116278578136], [-13.891110398809044, 23.691009019459383], [-14.22116777185715, 22.310163072188338], [-14.630832688850942, 21.860939846274867], [-14.750954555713404, 21.500600083903802], [-17.002961798561071, 21.42073415779668], [-17.020428432675768, 21.422310288981631], [-16.973247849993182, 21.88574453377495], [-16.589136928767626, 22.158234361250091], [-16.26192175949566, 22.679339504481273], [-16.326413946995896, 23.017768459560894], [-15.982610642958059, 23.723358466074096], [-15.426003790742183, 24.359133612561035], [-15.089331834360729, 24.520260728446964], [-14.824645148161689, 25.103532619725307], [-14.800925665739666, 25.636264960222285], [-14.439939947964827, 26.254418443297645], [-13.773804897506462, 26.618892320252279], [-13.13994177901429, 27.640147813420491], [-13.121613369914709, 27.654147671719805], [-12.61883663578311, 28.038185533148656], [-11.688919236690761, 28.148643907172577], [-10.9009569971044, 28.832142238880913], [-10.39959225100864, 29.09858592377778], [-9.564811163765624, 29.933573716749855], [-9.814718390329174, 31.177735500609053], [-9.434793260119362, 32.038096421836478], [-9.300692918321827, 32.564679266890629], [-8.657476365585039, 33.24024526624239], [-7.654178432638217, 33.697064927702506], [-6.912544114601358, 34.11047638603744], [-6.24434200685141, 35.145865383437517], [-5.929994269219832, 35.759988104793983], [-5.193863491222031, 35.755182196590845]]] } },
            { "type": "Feature", "properties": { "admin": "Moldova", "name": "Moldova", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[26.619336785597788, 48.220726223333457], [26.857823520624798, 48.368210761094488], [27.52253746919515, 48.467119452501102], [28.259546746541837, 48.155562242213406], [28.670891147585163, 48.118148505234089], [29.122698195113024, 47.849095160506458], [29.050867954227321, 47.510226955752493], [29.415135125452732, 47.346645209332571], [29.559674106573105, 46.928582872091312], [29.908851759569295, 46.67436066343145], [29.838210076626289, 46.525325832701675], [30.024658644335364, 46.423936672545032], [29.759971958136383, 46.349987697935354], [29.170653924279879, 46.379262396828693], [29.072106967899288, 46.517677720722482], [28.862972446414055, 46.437889309263824], [28.933717482221621, 46.258830471372491], [28.659987420371575, 45.939986884131628], [28.48526940279276, 45.596907050145887], [28.233553501099035, 45.488283189468369], [28.054442986775392, 45.944586086605618], [28.160017937947707, 46.371562608417207], [28.128030226359037, 46.81047638608824], [27.551166212684841, 47.405117092470817], [27.233872918412736, 47.826770941756365], [26.924176059687561, 48.123264472030982], [26.619336785597788, 48.220726223333457]]] } },
            { "type": "Feature", "properties": { "admin": "Madagascar", "name": "Madagascar", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[49.543518914595737, -12.469832858940553], [49.80898074727908, -12.895284925999551], [50.05651085795715, -13.555761407121981], [50.217431268114055, -14.758788750876795], [50.476536899625515, -15.226512139550541], [50.377111443895942, -15.706069431219122], [50.200274692593169, -16.000263360256763], [49.860605503138665, -15.414252618066913], [49.672606642460849, -15.710203545802477], [49.863344354050142, -16.451036879138773], [49.774564243372694, -16.875042006093597], [49.49861209493411, -17.10603565843827], [49.435618523970298, -17.953064060134363], [49.04179243347393, -19.118781019774442], [48.548540887247995, -20.496888116134119], [47.930749139198653, -22.391501153251077], [47.547723423051295, -23.781958916928513], [47.095761346226588, -24.941629733990446], [46.282477654817079, -25.178462823184102], [45.409507684110444, -25.601434421493082], [44.833573846217547, -25.346101169538933], [44.039720493349755, -24.9883452287823], [43.763768344911156, -24.460677178649988], [43.697777540874441, -23.574116306250595], [43.345654331237611, -22.77690398528387], [43.254187046080986, -22.057413018484116], [43.433297560404633, -21.336475111580185], [43.893682895692919, -21.163307386970121], [43.89637007017209, -20.830459486578167], [44.374325392439644, -20.072366224856385], [44.464397413924374, -19.435454196859045], [44.23242190936616, -18.961994724200899], [44.042976108584149, -18.331387220943167], [43.963084344260899, -17.409944756746778], [44.312468702986273, -16.850495700754951], [44.446517368351387, -16.216219170804504], [44.944936557806521, -16.179373874580396], [45.502731967964976, -15.974373467678538], [45.872993605336255, -15.793454278224681], [46.312243279817203, -15.780018405828795], [46.882182651564271, -15.210182386946309], [47.70512983581235, -14.594302666891762], [48.005214878131241, -14.091232598530372], [47.869047479042152, -13.663868503476582], [48.29382775248137, -13.784067884987483], [48.845060255738773, -13.08917489995866], [48.863508742066976, -12.487867933810417], [49.194651320193302, -12.040556735891967], [49.543518914595737, -12.469832858940553]]] } },
            { "type": "Feature", "properties": { "admin": "Mexico", "name": "Mexico", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-97.140008307670684, 25.869997463478395], [-97.528072475966539, 24.992144069920297], [-97.702945522842214, 24.272343044526728], [-97.776041836319024, 22.932579860927653], [-97.872366706111094, 22.444211737553356], [-97.699043952204164, 21.898689480064256], [-97.388959520236739, 21.411018988525818], [-97.189333462293277, 20.635433254473124], [-96.525575527720306, 19.890930894444061], [-96.292127244841737, 19.32037140550954], [-95.90088497595994, 18.828024196848727], [-94.8390634834427, 18.562717393462204], [-94.425729539756205, 18.144370835843343], [-93.548651292682365, 18.423836981677933], [-92.786113857783477, 18.524838568592255], [-92.037348192090391, 18.704569200103432], [-91.407903408559235, 18.876083278880227], [-90.771869879910852, 19.284120388256778], [-90.533589850613026, 19.867418117751292], [-90.451475999701231, 20.707521877520428], [-90.278618333684889, 20.999855454995547], [-89.601321173851474, 21.261725775634485], [-88.543866339862845, 21.493675441976613], [-87.658416510757704, 21.458845526611977], [-87.051890224948053, 21.543543199138295], [-86.811982388032931, 21.331514797444747], [-86.845907965832595, 20.849864610268348], [-87.383291185235848, 20.255404771398727], [-87.621054450210721, 19.646553046135917], [-87.436750454441764, 19.472403469312265], [-87.586560431655911, 19.040130113190738], [-87.837191128271485, 18.259815985583426], [-88.090664028663156, 18.516647854074048], [-88.300031094093626, 18.499982204659997], [-88.490122850279278, 18.486830552641717], [-88.84834387892657, 17.883198147040329], [-89.029857347351737, 18.001511338772556], [-89.150909389995462, 17.955467637600403], [-89.143080410503316, 17.808318996649401], [-90.067933519230891, 17.819326076727517], [-91.001519945015943, 17.817594916245692], [-91.002269253284155, 17.254657701074272], [-91.453921271515114, 17.252177232324183], [-91.08167009150057, 16.918476670799517], [-90.711821865587623, 16.687483018454767], [-90.600846727240921, 16.470777899638787], [-90.438866950221993, 16.410109768128105], [-90.464472622422633, 16.069562079324722], [-91.747960171255926, 16.066564846251762], [-92.229248623406278, 15.251446641495871], [-92.087215949252013, 15.06458466232851], [-92.203229539747255, 14.830102850804108], [-92.227750006869812, 14.538828640190953], [-93.359463874061746, 15.61542959234367], [-93.875168830118511, 15.94016429286591], [-94.691656460330108, 16.20097524664288], [-95.250227016973014, 16.128318182840641], [-96.053382127653293, 15.752087917539592], [-96.557434048228274, 15.653515122942787], [-97.263592495496624, 15.917064927631312], [-98.013029954809596, 16.107311713113912], [-98.947675747456486, 16.566043402568763], [-99.697397427147024, 16.706164048728166], [-100.829498867581293, 17.171071071842047], [-101.666088629954444, 17.649026394109622], [-101.918528001700196, 17.916090196193974], [-102.478132086988907, 17.975750637275095], [-103.500989549558057, 18.292294623278845], [-103.917527432046811, 18.748571682200005], [-104.992009650475467, 19.316133938061679], [-105.493038499761411, 19.946767279535429], [-105.731396043707633, 20.434101874264108], [-105.397772996831321, 20.531718654863422], [-105.500660773524402, 20.816895046466122], [-105.27075232625792, 21.076284898355137], [-105.265817226974022, 21.422103583252348], [-105.603160976975374, 21.871145941652568], [-105.693413865973113, 22.269080308516148], [-106.028716396898943, 22.77375234627862], [-106.909980434988341, 23.767774359628895], [-107.91544877809136, 24.548915310152946], [-108.401904873470954, 25.172313951105931], [-109.260198737406625, 25.580609442644054], [-109.444089321717314, 25.824883938087673], [-109.291643846456267, 26.44293406829842], [-109.801457689231796, 26.676175645447923], [-110.391731737085692, 27.162114976504533], [-110.641018846461606, 27.859876003525521], [-111.178918830187826, 27.941240546169062], [-111.759606899851619, 28.467952582303944], [-112.228234626090369, 28.954408677683482], [-112.27182369672866, 29.266844387320074], [-112.80959448937395, 30.021113593052341], [-113.163810594518651, 30.786880804969424], [-113.148669399857141, 31.170965887978912], [-113.871881069781836, 31.56760834403519], [-114.205736660603506, 31.524045111613123], [-114.776451178835003, 31.79953217216114], [-114.936699795372121, 31.393484605427595], [-114.771231859173483, 30.91361725516526], [-114.673899298951739, 30.162681179315985], [-114.330974494262918, 29.750432440707407], [-113.588875088335413, 29.061611436473008], [-113.424053107540516, 28.826173610951223], [-113.271969367305502, 28.754782619739892], [-113.140039435664363, 28.411289374295954], [-112.962298346796473, 28.425190334582503], [-112.761587083774856, 27.78021678314752], [-112.457910529411635, 27.525813706974752], [-112.24495195193677, 27.171726792910754], [-111.616489020619184, 26.662817287700474], [-111.284674648872993, 25.732589830014426], [-110.987819383572386, 25.294606228124557], [-110.71000688357131, 24.826004340101854], [-110.655048997828871, 24.298594672131113], [-110.17285620811343, 24.265547593680417], [-109.771847093528521, 23.811182562754194], [-109.409104377055698, 23.364672349536242], [-109.433392300232896, 23.185587673428696], [-109.85421932660168, 22.818271592698061], [-110.031391974714424, 22.823077500901199], [-110.295070970483636, 23.430973212166684], [-110.949501309028022, 24.000964260345988], [-111.670568407012681, 24.484423122652508], [-112.182035895621468, 24.73841278736716], [-112.148988817170817, 25.470125230404044], [-112.300710822379671, 26.012004299416613], [-112.777296719191526, 26.321959540303162], [-113.464670783321907, 26.768185533143416], [-113.596729906043805, 26.639459540304465], [-113.848936733844241, 26.900063788352437], [-114.465746629680027, 27.142090358991361], [-115.055142178184965, 27.722726752222904], [-114.982252570437382, 27.798200181585109], [-114.570365566854917, 27.741485297144884], [-114.199328782999231, 28.115002549750553], [-114.162018398884612, 28.566111965442296], [-114.931842210736605, 29.279479275015483], [-115.518653937626965, 29.556361599235395], [-115.887365282029563, 30.180793768834171], [-116.2583503894529, 30.836464341753572], [-116.721526252084956, 31.635743720012037], [-117.127759999999839, 32.53534], [-115.99135, 32.612390000000111], [-114.72139, 32.72083], [-114.815, 32.52528], [-113.30498, 32.03914], [-111.02361, 31.33472], [-109.035, 31.341940000000129], [-108.24194, 31.34222], [-108.24, 31.754853718166366], [-106.507589999999851, 31.75452], [-106.1429, 31.39995], [-105.63159, 31.08383], [-105.03737, 30.64402], [-104.70575, 30.12173], [-104.456969999999885, 29.57196], [-103.94, 29.27], [-103.11, 28.97], [-102.48, 29.76], [-101.6624, 29.7793], [-100.9576, 29.380710000000125], [-100.45584, 28.696120000000118], [-100.11, 28.11000000000012], [-99.52, 27.54], [-99.3, 26.84], [-99.019999999999897, 26.37], [-98.24, 26.06], [-97.529999999999887, 25.84], [-97.140008307670684, 25.869997463478395]]] } },
            { "type": "Feature", "properties": { "admin": "Macedonia", "name": "Macedonia", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[20.59023, 41.85541], [20.717310000000108, 41.84711], [20.76216, 42.05186], [21.352700000000134, 42.2068], [21.576635989402117, 42.245224397061847], [21.917080000000105, 42.30364], [22.380525750424674, 42.320259507815074], [22.881373732197339, 41.999297186850349], [22.952377150166505, 41.337993882811176], [22.76177, 41.3048], [22.597308383889008, 41.130487168943198], [22.055377638444266, 41.149865831052686], [21.674160597426969, 40.93127452245794], [21.020040317476397, 40.842726955725873], [20.60518, 41.08622], [20.46315, 41.51509], [20.59023, 41.85541]]] } },
            { "type": "Feature", "properties": { "admin": "Mali", "name": "Mali", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[-12.170750291380299, 14.616834214735503], [-11.834207526079465, 14.799096991428936], [-11.666078253617853, 15.388208319556295], [-11.349095017939502, 15.411256008358475], [-10.650791388379414, 15.132745876521422], [-10.086846482778212, 15.330485744686269], [-9.700255092802703, 15.264107367407359], [-9.550238409859388, 15.486496893775435], [-5.537744309908446, 15.501689764869253], [-5.315277268891931, 16.201853745991837], [-5.488522508150438, 16.325102037007962], [-5.971128709324247, 20.640833441647626], [-6.453786586930334, 24.956590684503418], [-4.92333736817423, 24.974574082940993], [-1.550054897457613, 22.792665920497377], [1.823227573259032, 20.61080943448604], [2.060990838233919, 20.142233384679482], [2.683588494486428, 19.856230170160114], [3.146661004253899, 19.693578599521441], [3.158133172222704, 19.057364203360034], [4.267419467800038, 19.155265204336995], [4.270209995143801, 16.852227484601212], [3.723421665063482, 16.184283759012612], [3.638258904646476, 15.568119818580453], [2.749992709981483, 15.409524847876693], [1.385528191746857, 15.323561102759168], [1.01578331869851, 14.968182277887944], [0.374892205414682, 14.928908189346128], [-0.26625729003058, 14.924308986872147], [-0.515854458000348, 15.116157741755725], [-1.066363491205663, 14.973815009007764], [-2.001035122068771, 14.559008287000887], [-2.191824510090384, 14.246417548067352], [-2.967694464520576, 13.798150336151506], [-3.103706834312759, 13.54126679122859], [-3.52280270019986, 13.337661647998612], [-4.006390753587225, 13.472485459848112], [-4.280405035814879, 13.228443508349738], [-4.427166103523802, 12.542645575404292], [-5.220941941743119, 11.713858954307224], [-5.197842576508648, 11.375145778850136], [-5.470564947929004, 10.951269842976044], [-5.404341599946973, 10.370736802609144], [-5.816926235365286, 10.222554633012191], [-6.050452032892266, 10.096360785355442], [-6.205222947606429, 10.524060777219132], [-6.493965013037267, 10.411302801958268], [-6.666460944027547, 10.430810655148447], [-6.850506557635057, 10.138993841996237], [-7.622759161804808, 10.147236232946792], [-7.89958980959237, 10.297382106970824], [-8.029943610048617, 10.206534939001711], [-8.335377163109738, 10.494811916541932], [-8.282357143578279, 10.792597357623842], [-8.407310756860026, 10.90925690352276], [-8.620321010767126, 10.810890814655181], [-8.581305304386772, 11.136245632364801], [-8.376304897484911, 11.393645941610627], [-8.786099005559462, 11.812560939984705], [-8.905264858424529, 12.088358059126433], [-9.127473517279581, 12.308060411015331], [-9.327616339546008, 12.334286200403451], [-9.567911749703212, 12.194243068892472], [-9.890992804392011, 12.060478623904968], [-10.165213792348835, 11.844083563682743], [-10.593223842806278, 11.923975328005977], [-10.870829637078211, 12.177887478072106], [-11.036555955438256, 12.211244615116513], [-11.297573614944508, 12.077971096235768], [-11.456168585648269, 12.076834214725336], [-11.513942836950587, 12.442987575729415], [-11.467899135778522, 12.754518947800973], [-11.553397793005427, 13.141213690641063], [-11.927716030311613, 13.422075100147392], [-12.124887457721256, 13.994727484589784], [-12.170750291380299, 14.616834214735503]]] } },
            { "type": "Feature", "properties": { "admin": "Myanmar", "name": "Myanmar", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[99.543309360759281, 20.186597601802056], [98.959675734454848, 19.752980658440944], [98.253723992915582, 19.708203029860041], [97.797782830804394, 18.627080389881751], [97.375896437573516, 18.445437730375811], [97.859122755934848, 17.567946071843657], [98.493761020911322, 16.837835598207928], [98.90334842325673, 16.177824204976115], [98.537375929765687, 15.308497422746081], [98.192074009191373, 15.123702500870349], [98.430819126379859, 14.622027696180831], [99.097755161538728, 13.827502549693275], [99.212011753336071, 13.269293728076462], [99.196353794351637, 12.804748439988666], [99.587286004639694, 11.892762762901695], [99.038120558673953, 10.960545762572435], [98.553550653073017, 9.932959906448543], [98.457174106848697, 10.675266018105146], [98.764545526120756, 11.441291612183745], [98.428338657629823, 12.032986761925681], [98.509574009192661, 13.122377631070675], [98.103603957107666, 13.64045970301285], [97.777732375075161, 14.837285874892638], [97.597071567782749, 16.100567938699765], [97.164539829499773, 16.928734442609336], [96.505768670642965, 16.427240505432845], [95.369352248112378, 15.714389960182599], [94.808404575584092, 15.803454291237637], [94.188804152404515, 16.037936102762014], [94.533485955791321, 17.277240301985724], [94.324816522196741, 18.213513902249893], [93.540988397193615, 19.366492621330021], [93.663254835996199, 19.726961574781992], [93.078277622452163, 19.855144965081973], [92.368553501355606, 20.670883287025344], [92.30323449093865, 21.475485337809815], [92.652257114637976, 21.324047552978481], [92.672720981825549, 22.041238918541247], [93.166127557348361, 22.278459580977099], [93.060294224014598, 22.703110663335565], [93.286326938859247, 23.043658352138998], [93.325187615942767, 24.078556423432197], [94.106741977925054, 23.850740871673477], [94.552657912171611, 24.675238348890328], [94.603249139385355, 25.162495428970399], [95.155153436262566, 26.001307277932078], [95.124767694074933, 26.573572089132295], [96.419365675850941, 27.264589341739221], [97.133999058015277, 27.08377350514996], [97.051988559968066, 27.699058946233144], [97.402561476636123, 27.88253611908544], [97.327113885490007, 28.261582749946331], [97.91198774616943, 28.335945136014338], [98.24623091023328, 27.747221381129172], [98.682690057370451, 27.508812160750612], [98.712093947344499, 26.74353587494026], [98.671838006589127, 25.918702500913518], [97.724609002679117, 25.083637193292994], [97.604719679761956, 23.897404690033039], [98.660262485755737, 24.063286037689959], [98.898749220782747, 23.142722072842524], [99.531992222087382, 22.949038804612574], [99.240898878987224, 22.118314317304577], [99.983489211021464, 21.742936713136398], [100.416537713627349, 21.558839423096607], [101.150032993578222, 21.849984442629015], [101.180005324307515, 21.436572984294024], [100.329101190189519, 20.786121731036229], [100.115987583417819, 20.41784963630818], [99.543309360759281, 20.186597601802056]]] } },
            { "type": "Feature", "properties": { "admin": "Montenegro", "name": "Montenegro", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[19.801613396898681, 42.500093492190835], [19.738051385179627, 42.688247382165564], [19.30449, 42.19574], [19.371770000000136, 41.87755], [19.16246, 41.95502], [18.88214, 42.28151], [18.45, 42.48], [18.56, 42.65], [18.70648, 43.20011], [19.03165, 43.43253], [19.21852, 43.52384], [19.48389, 43.35229], [19.63, 43.213779970270522], [19.95857, 43.10604], [20.3398, 42.89852], [20.25758, 42.81275], [20.0707, 42.58863], [19.801613396898681, 42.500093492190835]]] } },
            { "type": "Feature", "properties": { "admin": "Mongolia", "name": "Mongolia", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[87.751264276076697, 49.297197984405479], [88.805566847695488, 49.470520738312409], [90.713667433640666, 50.331811835321076], [92.234711541719662, 50.802170722041716], [93.104219191462661, 50.495290228876414], [94.147566359435615, 50.480536607457083], [94.815949334698701, 50.013433335970838], [95.814027947983973, 49.977466539095708], [97.259727817781396, 49.726060695995727], [98.231761509191543, 50.422400621128737], [97.825739780674283, 51.010995184933165], [98.861490513100307, 52.047366034546684], [99.981732212323507, 51.634006252643978], [100.889480421962588, 51.516855780638316], [102.065222609467298, 51.25992055928311], [102.255908644624299, 50.510560614618669], [103.676545444760194, 50.089966132195109], [104.621552362081687, 50.275329494826067], [105.886591424586726, 50.406019192092209], [106.888804152455336, 50.274295966180219], [107.868175897250936, 49.793705145865808], [108.475167270951275, 49.282547715850725], [109.402449171996636, 49.292960516957535], [110.662010532678764, 49.130128078805861], [111.581230910286607, 49.377968248077678], [112.897739699354361, 49.543565375356984], [114.362456496235239, 50.248302720737399], [114.962109816550154, 50.140247300815112], [115.485695428531386, 49.805177313834591], [116.678800897286152, 49.888531399121376], [116.191802199367544, 49.134598090199091], [115.485282017073018, 48.135382595403428], [115.742837355615748, 47.726544501326273], [116.308952671373206, 47.853410142602826], [117.295507440257396, 47.69770905210742], [118.064142694166691, 48.066730455103674], [118.866574334794933, 47.747060044946153], [119.772823927897477, 47.048058783550125], [119.66326989143873, 46.692679958678909], [118.874325799638711, 46.805412095723646], [117.421701287914175, 46.672732855814253], [116.717868280098841, 46.388202419615205], [115.985096470200062, 45.727235012385989], [114.46033165899604, 45.339816799493811], [113.463906691544139, 44.808893134127111], [112.436062453258785, 45.011645616224278], [111.873306105600278, 45.102079372735055], [111.348376906379428, 44.457441718110083], [111.667737257943202, 44.073175767587706], [111.829587843881342, 43.743118394539515], [111.129682244920218, 43.406834011400136], [110.412103306115256, 42.871233628911014], [109.243595819131428, 42.519446316084093], [107.744772576937933, 42.481515814781865], [106.129315627061658, 42.134327704428898], [104.964993931093446, 41.597409572916334], [104.522281935648977, 41.908346666016541], [103.312278273534787, 41.907468166667591], [101.833040399179922, 42.51487295182627], [100.845865513108237, 42.663804429691439], [99.515817498780009, 42.524691473961717], [97.451757440177985, 42.748889675460013], [96.349395786527793, 42.725635280928678], [95.762454868556674, 43.319449164394598], [95.306875441471504, 44.241330878265458], [94.688928664125299, 44.352331854828414], [93.480733677141274, 44.975472113619951], [92.133890822318193, 45.115075995456444], [90.945539585334288, 45.286073309910265], [90.585768263718265, 45.719716091487513], [90.970809360724985, 46.888146063822923], [90.280825636763893, 47.693549099307923], [88.854297723346733, 48.06908173277295], [88.013832228551721, 48.599462795600601], [87.751264276076697, 49.297197984405479]]] } },
            { "type": "Feature", "properties": { "admin": "Mozambique", "name": "Mozambique", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[34.559989047999345, -11.520020033415923], [35.312397902169032, -11.439146416879145], [36.514081658684248, -11.720938002166733], [36.775150994622791, -11.594537448780804], [37.471284214026596, -11.568750909067157], [37.827644891111383, -11.268769219612834], [38.427556593587745, -11.285202325081654], [39.521029900883768, -10.896853936408224], [40.316588576017182, -10.317096042525696], [40.478387485523022, -10.765440769089992], [40.437253045418672, -11.761710707245014], [40.560811395028558, -12.639176527561023], [40.599620395679743, -14.201975192931858], [40.775475294768988, -14.691764418194239], [40.477250604012596, -15.406294447493968], [40.089263950365208, -16.100774021064456], [39.452558628097044, -16.720891208566936], [38.53835086442151, -17.101023044505954], [37.411132846838875, -17.586368096591233], [36.281279331209348, -18.659687595293445], [35.896496616364054, -18.842260430580634], [35.198399692533137, -19.552811374593887], [34.786383497870041, -19.784011732667732], [34.701892531072836, -20.497043145431007], [35.176127150215358, -21.254361260668407], [35.373427768705731, -21.840837090748874], [35.385848253705397, -22.14], [35.562545536369079, -22.09], [35.533934767404297, -23.070787855727751], [35.371774122872374, -23.535358982031692], [35.607470330555621, -23.706563002214676], [35.458745558419615, -24.122609958596545], [35.040734897610655, -24.478350518493798], [34.215824008935463, -24.816314385682652], [33.013210076639005, -25.357573337507731], [32.574632195777859, -25.727318210556088], [32.660363396950082, -26.148584486599443], [32.915955031065685, -26.215867201443459], [32.830120477028878, -26.74219166433619], [32.071665480281062, -26.733820082304902], [31.985779249811962, -26.29177988048022], [31.837777947728057, -25.843331801051342], [31.752408481581874, -25.484283949487406], [31.930588820124242, -24.369416599222532], [31.670397983534645, -23.658969008073861], [31.191409132621278, -22.251509698172395], [32.244988234188007, -21.116488539313689], [32.508693068173436, -20.395292250248303], [32.659743279762573, -20.30429005298231], [32.772707960752619, -19.715592136313294], [32.611994256324884, -19.419382826416268], [32.654885695127142, -18.672089939043492], [32.849860874164385, -17.979057305577175], [32.847638787575839, -16.713398125884613], [32.328238966610222, -16.392074069893749], [31.852040643040592, -16.319417006091374], [31.636498243951188, -16.071990248277881], [31.173063999157673, -15.860943698797868], [30.338954705534537, -15.880839125230242], [30.274255812305103, -15.507786960515208], [30.179481235481827, -14.796099134991525], [33.214024692525207, -13.97186003993615], [33.789700148256678, -14.451830743063068], [34.064825473778619, -14.359950046448118], [34.459633416488536, -14.613009535381421], [34.517666049952304, -15.013708591372609], [34.307291294092089, -15.478641452702592], [34.381291945134045, -16.183559665596039], [35.033810255683527, -16.801299737213089], [35.339062941231639, -16.107440280830108], [35.771904738108347, -15.896858819240721], [35.686845330555926, -14.611045830954328], [35.267956170398001, -13.887834161029563], [34.907151320136158, -13.565424899960565], [34.559989047999345, -13.579997653866872], [34.280006137841973, -12.280025323132504], [34.559989047999345, -11.520020033415923]]] } },
            { "type": "Feature", "properties": { "admin": "Mauritania", "name": "Mauritania", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[-12.170750291380299, 14.616834214735503], [-12.830658331747513, 15.303691514542942], [-13.43573767745306, 16.039383042866188], [-14.099521450242175, 16.304302273010489], [-14.577347581428977, 16.598263658102805], [-15.135737270558813, 16.587282416240779], [-15.623666144258689, 16.369337063049809], [-16.120690070041928, 16.45566254319338], [-16.463098110407881, 16.135036119038457], [-16.549707810929061, 16.673892116761959], [-16.270551723688353, 17.166962795474866], [-16.146347418674846, 18.108481553616652], [-16.256883307347163, 19.096715806550304], [-16.377651129613266, 19.593817246981981], [-16.277838100641514, 20.092520656814695], [-16.536323614965465, 20.567866319251486], [-17.063423224342568, 20.99975210213082], [-16.845193650773989, 21.333323472574875], [-12.929101935263528, 21.327070624267559], [-13.118754441774708, 22.771220201096249], [-12.874221564169574, 23.284832261645171], [-11.93722449385332, 23.374594224536164], [-11.969418911171159, 25.933352769468261], [-8.687293667017398, 25.881056219988899], [-8.684399786809051, 27.395744126895998], [-4.92333736817423, 24.974574082940993], [-6.453786586930334, 24.956590684503418], [-5.971128709324247, 20.640833441647626], [-5.488522508150438, 16.325102037007962], [-5.315277268891931, 16.201853745991837], [-5.537744309908446, 15.501689764869253], [-9.550238409859388, 15.486496893775435], [-9.700255092802703, 15.264107367407359], [-10.086846482778212, 15.330485744686269], [-10.650791388379414, 15.132745876521422], [-11.349095017939502, 15.411256008358475], [-11.666078253617853, 15.388208319556295], [-11.834207526079465, 14.799096991428936], [-12.170750291380299, 14.616834214735503]]] } },
            { "type": "Feature", "properties": { "admin": "Malawi", "name": "Malawi", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[34.559989047999345, -11.520020033415923], [34.280006137841973, -12.280025323132504], [34.559989047999345, -13.579997653866872], [34.907151320136158, -13.565424899960565], [35.267956170398001, -13.887834161029563], [35.686845330555926, -14.611045830954328], [35.771904738108347, -15.896858819240721], [35.339062941231639, -16.107440280830108], [35.033810255683527, -16.801299737213089], [34.381291945134045, -16.183559665596039], [34.307291294092089, -15.478641452702592], [34.517666049952304, -15.013708591372609], [34.459633416488536, -14.613009535381421], [34.064825473778619, -14.359950046448118], [33.789700148256678, -14.451830743063068], [33.214024692525207, -13.97186003993615], [32.688165317523122, -13.712857761289273], [32.991764357237876, -12.783870537978272], [33.306422153463068, -12.435778090060214], [33.114289178201908, -11.607198174692311], [33.315310499817279, -10.796549981329695], [33.485687697083584, -10.525558770391111], [33.231387973775291, -9.676721693564799], [32.759375441221316, -9.230599053589058], [33.739729038230443, -9.417150974162722], [33.940837724096532, -9.693673841980292], [34.280006137841973, -10.159999688358402], [34.559989047999345, -11.520020033415923]]] } },
            { "type": "Feature", "properties": { "admin": "Malaysia", "name": "Malaysia", "continent": "Asia" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[101.075515578213299, 6.204867051615891], [101.154218784593809, 5.691384182147713], [101.814281854258013, 5.810808417174228], [102.141186964936423, 6.221636053894655], [102.371147088635212, 6.12820506431096], [102.961705356866673, 5.524495144061077], [103.381214634212142, 4.855001125503746], [103.438575474056165, 4.181605536308381], [103.332122023534851, 3.72669790284297], [103.42942874554052, 3.382868760589019], [103.502447544368877, 2.791018581550204], [103.854674106870334, 2.515454006353763], [104.247931756611479, 1.631141058759055], [104.228811476663523, 1.293048000489534], [103.519707472754433, 1.226333726400682], [102.573615350354771, 1.967115383304744], [101.39063846232915, 2.760813706875623], [101.273539666755838, 3.27029165284118], [100.69543541870668, 3.939139715994869], [100.557407668055092, 4.767280381688279], [100.19670617065772, 5.312492580583678], [100.306260207116509, 6.040561835143875], [100.085756870527078, 6.46448944745029], [100.259596388756918, 6.64282481528957], [101.075515578213299, 6.204867051615891]]], [[[118.618320754064825, 4.47820241944754], [117.882034946770162, 4.137551377779487], [117.01521447150634, 4.306094061699468], [115.86551720587677, 4.306559149590156], [115.51907840379198, 3.169238389494395], [115.134037306785231, 2.821481838386219], [114.621355422017473, 1.430688177898886], [113.805849644019531, 1.217548732911041], [112.859809198052176, 1.497790025229946], [112.380251906383648, 1.410120957846757], [111.797548455860408, 0.904441229654651], [111.159137811326559, 0.976478176269509], [110.514060907027101, 0.773131415200993], [109.830226678508836, 1.338135687664191], [109.663260125773718, 2.006466986494984], [110.396135288537039, 1.663774725751395], [111.168852980597478, 1.850636704918784], [111.370081007942076, 2.697303371588872], [111.796928338672842, 2.885896511238073], [112.995614862115247, 3.102394924324869], [113.712935418758718, 3.893509426281127], [114.204016554828399, 4.525873928236819], [114.659595981913526, 4.00763682699781], [114.869557326315373, 4.348313706881952], [115.347460972150671, 4.316636053887009], [115.405700311343594, 4.955227565933824], [115.450710483869798, 5.447729803891561], [116.220741001450961, 6.143191229675621], [116.725102980619752, 6.924771429873998], [117.129626092600461, 6.928052883324566], [117.643393182446303, 6.422166449403305], [117.689075148592337, 5.98749013918018], [118.347691278152197, 5.708695786965462], [119.181903924639926, 5.407835598162249], [119.110693800941718, 5.016128241389864], [118.439727004064082, 4.966518866389619], [118.618320754064825, 4.47820241944754]]]] } },
            { "type": "Feature", "properties": { "admin": "Namibia", "name": "Namibia", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[16.344976840895239, -28.576705010697697], [15.601818068105812, -27.821247247022797], [15.210472446359457, -27.09095590587404], [14.989710727608548, -26.117371921495153], [14.74321414557633, -25.392920017195376], [14.40814415859583, -23.85301401132984], [14.385716586981145, -22.656652927340687], [14.257714064194172, -22.111208184499951], [13.868642205468657, -21.699036960539974], [13.352497999737437, -20.872834161057497], [12.82684533046449, -19.673165785401661], [12.608564080463617, -19.045348809487695], [11.794918654028063, -18.069129327061912], [11.734198846085118, -17.30188933682447], [12.215461460019352, -17.11166838955808], [12.814081251688405, -16.941342868724067], [13.462362094789963, -16.971211846588769], [14.058501417709007, -17.42338062914266], [14.209706658595021, -17.353100681225715], [18.26330936043416, -17.309950860262003], [18.956186964603599, -17.789094740472255], [21.377176141045563, -17.930636488519688], [23.215048455506057, -17.52311614346598], [24.033861525170771, -17.29584319424632], [24.6823490740015, -17.35341073981947], [25.076950310982255, -17.578823337476617], [25.084443393664564, -17.661815687737366], [24.520705193792534, -17.887124932529932], [24.217364536239209, -17.889347019118485], [23.579005568137713, -18.281261081620055], [23.196858351339298, -17.869038181227783], [21.655040317478971, -18.219146010005222], [20.910641310314531, -18.252218926672018], [20.881134067475866, -21.814327080983144], [19.895457797940672, -21.849156996347865], [19.895767856534427, -24.767790215760588], [19.89473432788861, -28.461104831660769], [19.002127312911082, -28.972443129188857], [18.464899122804745, -29.045461928017271], [17.836151971109526, -28.856377862261311], [17.387497185951499, -28.783514092729774], [17.218928663815401, -28.355943291946804], [16.824017368240899, -28.082161553664466], [16.344976840895239, -28.576705010697697]]] } },
            { "type": "Feature", "properties": { "admin": "New Caledonia", "name": "New Caledonia", "continent": "Oceania" }, "geometry": { "type": "Polygon", "coordinates": [[[165.779989862326346, -21.080004978115621], [166.599991489933814, -21.700018812753523], [167.120011428086883, -22.159990736583488], [166.74003462144475, -22.399976088146943], [166.189732293968632, -22.129708347260447], [165.474375441752159, -21.679606621998229], [164.829815301775653, -21.149819838141948], [164.16799523341362, -20.444746595951624], [164.029605747735957, -20.105645847252347], [164.459967075862664, -20.120011895429492], [165.020036249041993, -20.459991143477726], [165.460009393575064, -20.800022067958253], [165.779989862326346, -21.080004978115621]]] } },
            { "type": "Feature", "properties": { "admin": "Niger", "name": "Niger", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[2.154473504249949, 11.940150051313422], [2.177107781593917, 12.625017808477534], [1.024103224297619, 12.851825669806598], [0.993045688490156, 13.335749620003865], [0.429927605805517, 13.988733018443893], [0.295646396495215, 14.444234930880663], [0.374892205414767, 14.928908189346144], [1.015783318698481, 14.968182277887989], [1.385528191746971, 15.323561102759237], [2.74999270998154, 15.409524847876751], [3.63825890464659, 15.56811981858044], [3.723421665063596, 16.184283759012654], [4.270209995143886, 16.852227484601311], [4.267419467800095, 19.155265204337123], [5.677565952180712, 19.601206976799794], [8.572893100629868, 21.565660712159225], [11.999505649471697, 23.471668402596432], [13.581424594790459, 23.040506089769274], [14.143870883855239, 22.491288967371126], [14.8513, 22.862950000000119], [15.096887648181847, 21.308518785074902], [15.471076694407314, 21.048457139565979], [15.487148064850143, 20.730414537025634], [15.90324669766431, 20.387618923417499], [15.68574059414777, 19.957180080642384], [15.300441114979716, 17.927949937405], [15.247731154041842, 16.627305813050778], [13.972201775781681, 15.684365953021139], [13.540393507550785, 14.36713369390122], [13.956698846094124, 13.996691189016925], [13.954476759505607, 13.353448798063765], [14.595781284247604, 13.330426947477859], [14.495787387762899, 12.859396267137353], [14.213530714584746, 12.80203542729333], [14.181336297266906, 12.483656927943169], [13.995352817448289, 12.4615652531383], [13.318701613018558, 13.55635630945795], [13.083987257548809, 13.596147162322492], [12.302071160540546, 13.037189032437535], [11.527803175511504, 13.328980007373556], [10.989593133191532, 13.387322699431191], [10.701031935273816, 13.246917832894038], [10.114814487354748, 13.277251898649464], [9.524928012743088, 12.85110219975456], [9.014933302454436, 12.826659247280414], [7.804671258178869, 13.343526923063731], [7.330746697630046, 13.098038031461213], [6.82044192874781, 13.115091254117598], [6.445426059605721, 13.492768459522718], [5.443058302440135, 13.865923977102225], [4.368343540066006, 13.747481594289408], [4.107945997747378, 13.531215725147941], [3.967282749048933, 12.956108710171574], [3.680633579125924, 12.552903347214167], [3.611180454125587, 11.660167141155965], [2.848643019226585, 12.235635891158207], [2.490163608418015, 12.233052069543588], [2.154473504249949, 11.940150051313422]]] } },
            { "type": "Feature", "properties": { "admin": "Nigeria", "name": "Nigeria", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[8.500287713259693, 4.771982937026847], [7.462108188515939, 4.41210826254624], [7.082596469764438, 4.464689032403228], [6.698072137080598, 4.240594183769516], [5.898172641634686, 4.262453314628984], [5.362804803090881, 4.887970689305957], [5.033574252959368, 5.611802476418233], [4.325607130560683, 6.270651149923466], [3.574180128604552, 6.258300482605717], [2.691701694356254, 6.258817246928628], [2.74906253420022, 7.870734361192886], [2.723792758809509, 8.506845404489708], [2.912308383810255, 9.13760793704432], [3.220351596702101, 9.4441525333997], [3.705438266625918, 10.063210354040207], [3.600070021182801, 10.332186184119406], [3.797112257511713, 10.734745591673104], [3.572216424177469, 11.327939357951516], [3.611180454125558, 11.660167141155966], [3.68063357912581, 12.552903347214222], [3.967282749048848, 12.956108710171572], [4.107945997747321, 13.531215725147829], [4.368343540066063, 13.747481594289324], [5.443058302440163, 13.865923977102295], [6.445426059605636, 13.492768459522676], [6.820441928747753, 13.115091254117514], [7.330746697630017, 13.098038031461199], [7.804671258178784, 13.343526923063745], [9.014933302454462, 12.826659247280427], [9.524928012742945, 12.851102199754477], [10.114814487354689, 13.277251898649409], [10.701031935273702, 13.246917832894081], [10.989593133191532, 13.387322699431108], [11.527803175511393, 13.328980007373584], [12.302071160540521, 13.037189032437521], [13.083987257548866, 13.596147162322563], [13.318701613018558, 13.556356309457824], [13.995352817448346, 12.461565253138343], [14.181336297266792, 12.483656927943112], [14.57717776862253, 12.085360826053501], [14.468192172918974, 11.90475169519341], [14.415378859116682, 11.572368882692071], [13.572949659894558, 10.798565985553564], [13.308676385153914, 10.160362046748926], [13.1675997249971, 9.64062632897341], [12.955467970438971, 9.417771714714702], [12.753671502339214, 8.717762762888993], [12.218872104550597, 8.305824082874322], [12.063946160539556, 7.799808457872301], [11.839308709366801, 7.397042344589434], [11.745774366918509, 6.981382961449753], [11.058787876030349, 6.644426784690593], [10.497375115611417, 7.055357774275562], [10.118276808318255, 7.038769639509879], [9.522705926154398, 6.453482367372116], [9.233162876023043, 6.444490668153334], [8.757532993208626, 5.47966583904791], [8.500287713259693, 4.771982937026847]]] } },
            { "type": "Feature", "properties": { "admin": "Nicaragua", "name": "Nicaragua", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-85.712540452807289, 11.088444932494822], [-86.058488328785245, 11.40343862552994], [-86.525849982432931, 11.806876532432593], [-86.7459915839963, 12.143961900272483], [-87.167516242201131, 12.458257961471656], [-87.668493415054698, 12.909909979702629], [-87.557466600275603, 13.064551703336061], [-87.392386237319201, 12.914018256069836], [-87.316654425795463, 12.984685777228972], [-87.005769009127562, 13.025794379117157], [-86.880557013684339, 13.254204209847241], [-86.733821784191576, 13.263092556201441], [-86.755086636079696, 13.754845485890909], [-86.520708177419877, 13.778487453664436], [-86.312142096689911, 13.771356106008167], [-86.096263800790581, 14.038187364147245], [-85.801294725268576, 13.836054999237586], [-85.698665330736901, 13.960078436738083], [-85.514413011400222, 14.079011745657834], [-85.165364549484792, 14.354369615125076], [-85.148750576502948, 14.560196844943615], [-85.052787441736925, 14.551541042534719], [-84.924500698572388, 14.790492865452348], [-84.820036790694346, 14.819586696832669], [-84.649582078779602, 14.66680532476175], [-84.449335903648588, 14.621614284722494], [-84.228341640952394, 14.748764146376654], [-83.975721401693576, 14.749435939996458], [-83.628584967772895, 14.880073960830298], [-83.489988776366104, 15.016267198135534], [-83.147219000974104, 14.995829169164109], [-83.233234422523907, 14.8998660343981], [-83.28416154654758, 14.676623846897197], [-83.182126430987267, 14.310703029838447], [-83.412499966144424, 13.970077826386554], [-83.519831916014667, 13.56769928634588], [-83.55220720084553, 13.127054348193084], [-83.498515387694255, 12.869292303921226], [-83.473323126951968, 12.419087225794424], [-83.626104499022887, 12.320850328007563], [-83.719613003255034, 11.893124497927724], [-83.650857510090702, 11.629032090700116], [-83.855470343750369, 11.373311265503785], [-83.808935716471538, 11.103043524617274], [-83.655611741861563, 10.938764146361418], [-83.895054490885926, 10.726839097532444], [-84.190178595704822, 10.793450018756671], [-84.355930752281026, 10.999225572142901], [-84.673069017256239, 11.082657172078139], [-84.903003302738924, 10.952303371621895], [-85.561851976244171, 11.217119248901593], [-85.712540452807289, 11.088444932494822]]] } },
            { "type": "Feature", "properties": { "admin": "Netherlands", "name": "Netherlands", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[6.074182570020922, 53.51040334737813], [6.905139601274128, 53.482162177130633], [7.092053256873895, 53.14404328064488], [6.842869500362381, 52.228440253297542], [6.589396599970825, 51.85202912048338], [5.988658074577812, 51.85161570902504], [6.156658155958779, 50.803721015010574], [5.60697594567, 51.037298488969768], [4.973991326526913, 51.475023708698124], [4.047071160507527, 51.267258612668556], [3.314971144228536, 51.345755113319903], [3.830288527043137, 51.620544542031936], [4.705997348661184, 53.091798407597757], [6.074182570020922, 53.51040334737813]]] } },
            { "type": "Feature", "properties": { "admin": "Norway", "name": "Norway", "continent": "Europe" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[28.165547316202911, 71.185474351680497], [31.293418409965472, 70.453787746859902], [30.005435011522785, 70.186258856884876], [31.101078728975118, 69.558080145944857], [29.399580519332879, 69.156916002063056], [28.591929559043187, 69.064776923286686], [29.015572950971968, 69.76649119737796], [27.732292107867885, 70.164193020296281], [26.179622023226298, 69.825298977326142], [25.689212680776389, 69.092113755968995], [24.735679152126714, 68.649556789821432], [23.662049594830759, 68.891247463650515], [22.356237827247405, 68.841741441514941], [21.244936150810723, 69.370443020293109], [20.645592889089581, 69.106247260200846], [20.02526899585791, 69.065138658312705], [19.878559604581248, 68.407194322372604], [17.993868442464386, 68.567391262477329], [17.729181756265344, 68.01055186631622], [16.768878614985535, 68.013936672631374], [16.108712192456832, 67.302455552836889], [15.108411492583055, 66.193866889095418], [13.555689731509087, 64.787027696381458], [13.919905226302202, 64.445420640716108], [13.571916131248766, 64.049114081469654], [12.57993533697393, 64.066218980558332], [11.930569288794228, 63.128317572676977], [11.992064243221531, 61.800362453856557], [12.63114668137524, 61.293571682370079], [12.300365838274896, 60.117932847730046], [11.468271925511173, 59.432393296945989], [11.027368605196925, 58.856149400459394], [10.356556837616095, 59.469807033925363], [8.382000359743641, 58.313288479233265], [7.048748406613297, 58.078884182357271], [5.665835402050418, 58.588155422593658], [5.308234490590733, 59.663231919993805], [4.992078077829005, 61.97099803328426], [5.912900424837885, 62.614472968182682], [8.553411085655766, 63.454008287196459], [10.527709181366784, 64.486038316497471], [12.358346795306371, 65.879725857193151], [14.7611458675816, 67.810641587995121], [16.435927361728968, 68.563205471461671], [19.184028354578512, 69.817444159617807], [21.378416375420606, 70.255169379346043], [23.02374230316158, 70.202071845166259], [24.546543409938515, 71.030496731237221], [26.370049676221807, 70.986261705195361], [28.165547316202911, 71.185474351680497]]], [[[24.72412, 77.85385], [22.49032, 77.44493], [20.72601, 77.67704], [21.41611, 77.93504], [20.8119, 78.25463], [22.88426, 78.45494], [23.28134, 78.07954], [24.72412, 77.85385]]], [[[18.25183, 79.70175], [21.54383, 78.95611], [19.02737, 78.5626], [18.47172, 77.82669], [17.59441, 77.63796], [17.1182, 76.80941], [15.91315, 76.77045], [13.76259, 77.38035], [14.66956, 77.73565], [13.1706, 78.02493], [11.22231, 78.8693], [10.44453, 79.65239], [13.17077, 80.01046], [13.71852, 79.66039], [15.14282, 79.67431], [15.52255, 80.01608], [16.99085, 80.05086], [18.25183, 79.70175]]], [[[25.447625359811887, 80.407340399894494], [27.407505730913492, 80.056405748200447], [25.924650506298171, 79.517833970854539], [23.024465773213613, 79.40001170522909], [20.075188429451877, 79.566823228667232], [19.897266473070907, 79.842361965647498], [18.46226362475792, 79.859880276194403], [17.368015170977454, 80.318896186027004], [20.455992059010693, 80.598155626132225], [21.907944777115397, 80.357679348462071], [22.919252557067431, 80.657144273593488], [25.447625359811887, 80.407340399894494]]]] } },
            { "type": "Feature", "properties": { "admin": "Nepal", "name": "Nepal", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[88.120440708369841, 27.876541652939586], [88.043132765661198, 27.445818589786818], [88.174804315140904, 26.810405178325944], [88.060237664749806, 26.414615383402484], [87.22747195836628, 26.39789805755607], [86.024392938179147, 26.630984605408567], [85.25177859898335, 26.726198431906337], [84.675017938173767, 27.234901231387528], [83.304248895199535, 27.364505723575554], [81.999987420584958, 27.925479234319987], [81.057202589851997, 28.416095282499036], [80.088424513676259, 28.794470119740136], [80.476721225917373, 29.729865220655334], [81.11125613802929, 30.183480943313398], [81.525804477874729, 30.422716986608627], [82.327512648450863, 30.115268052688126], [83.337115106137176, 29.463731594352193], [83.898992954446712, 29.320226141877654], [84.234579705750136, 28.839893703724691], [85.011638218123025, 28.642773952747337], [85.823319940131498, 28.203575954698699], [86.954517043000592, 27.97426178640351], [88.120440708369841, 27.876541652939586]]] } },
            { "type": "Feature", "properties": { "admin": "New Zealand", "name": "New Zealand", "continent": "Oceania" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[173.020374790740703, -40.919052422856417], [173.247234328502003, -41.331998793300777], [173.958405389702875, -40.926700534835604], [174.2475867048081, -41.349155368821663], [174.248516880589449, -41.770008233406749], [173.876446568087886, -42.233184096038819], [173.222739699595621, -42.970038344088557], [172.711246372770717, -43.372287693048492], [173.080112746470206, -43.853343601253577], [172.308583612352464, -43.865694268571332], [171.452925246463622, -44.24251881284372], [171.185137974327233, -44.897104180684885], [170.616697219116588, -45.908928724959701], [169.83142215400926, -46.355774834987585], [169.332331170934253, -46.641235446967848], [168.411353794628525, -46.619944756863582], [167.763744745146823, -46.290197442409195], [166.676886021184202, -46.219917494492236], [166.509144321964669, -45.852704766626204], [167.046424188503238, -45.110941257508664], [168.303763462596862, -44.12397307716612], [168.949408807651508, -43.93581918719142], [169.667814569373149, -43.555325616226334], [170.524919875366152, -43.031688327812823], [171.125089960004004, -42.512753594737781], [171.569713983443194, -41.767424411792128], [171.948708937871885, -41.514416599291145], [172.097227004278722, -40.956104424809674], [172.798579543343948, -40.493962090823466], [173.020374790740703, -40.919052422856417]]], [[[174.612008905330526, -36.156397393540537], [175.336615838927173, -37.209097995758263], [175.3575964704375, -36.52619394302112], [175.808886753642469, -36.798942152657681], [175.958490025127475, -37.555381768546063], [176.763195428776555, -37.881253350578696], [177.438813104560495, -37.961248467766488], [178.010354445708657, -37.579824721020124], [178.517093540762801, -37.695373223624792], [178.274731073313802, -38.582812595373092], [177.970460239979332, -39.166342868812968], [177.206992629299123, -39.145775648760839], [176.939980503647007, -39.449736423501562], [177.032946405340113, -39.879942722331471], [176.8858236026052, -40.06597787858216], [176.508017206119348, -40.60480803808958], [176.012440220440283, -41.289624118821493], [175.239567499082966, -41.688307793953236], [175.067898391009408, -41.425894870775075], [174.650972935278418, -41.281820977545443], [175.227630243223615, -40.459235528323397], [174.900156691789959, -39.908933200847216], [173.824046665743992, -39.508854262043506], [173.852261997775315, -39.146602471677461], [174.57480187408035, -38.797683200842748], [174.743473749081033, -38.027807712558378], [174.69701663645057, -37.381128838857954], [174.292028436579187, -36.71109221776144], [174.319003534235549, -36.534823907213884], [173.840996535535766, -36.121980889634109], [173.05417117745958, -35.237125339500331], [172.636005487353714, -34.529106540669382], [173.007042271209457, -34.450661716450334], [173.551298456107475, -35.006183363587958], [174.329390497126241, -35.265495700828616], [174.612008905330526, -36.156397393540537]]]] } },
            { "type": "Feature", "properties": { "admin": "Oman", "name": "Oman", "continent": "Asia" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[58.861141391846573, 21.114034532144299], [58.487985874266961, 20.428985907467101], [58.03431847517659, 20.481437486243347], [57.826372511634098, 20.24300242764863], [57.66576216007094, 19.736004950433109], [57.788700392493368, 19.067570298737646], [57.694390903560667, 18.944709580963799], [57.2342639504338, 18.947991034414255], [56.609650913321971, 18.574267076079476], [56.512189162019482, 18.087113348863934], [56.283520949128011, 17.876066799383945], [55.661491733630683, 17.884128322821535], [55.269939406155189, 17.632309068263194], [55.274900343655091, 17.228354397037659], [54.791002231674113, 16.950696926333357], [54.239252964093751, 17.04498057704998], [53.57050825380459, 16.707662665264674], [53.108572625547502, 16.651051133688977], [52.782184279192066, 17.349742336491229], [52.000009800022227, 19.000003363516068], [54.999981723862405, 19.999994004796118], [55.666659376859869, 22.000001125572307], [55.208341098863187, 22.708329982997007], [55.234489373602869, 23.110992743415348], [55.52584109886449, 23.524869289640911], [55.528631626208288, 23.933604030853498], [55.981213820220503, 24.130542914317854], [55.80411868675624, 24.269604193615287], [55.88623253766805, 24.920830593357486], [56.396847365143984, 24.924732163995508], [56.845140415276049, 24.241673081961487], [57.403452589757428, 23.878594468678834], [58.136947869708322, 23.747930609628835], [58.729211460205427, 23.565667832935414], [59.180501743410346, 22.992395331305456], [59.450097690677033, 22.660270900965592], [59.80806033716285, 22.533611965418199], [59.806148309168087, 22.31052480721419], [59.442191196536399, 21.71454051359208], [59.282407667889871, 21.433885809814875], [58.861141391846573, 21.114034532144299]]], [[[56.391421339753393, 25.895990708921254], [56.261041701080913, 25.714606431576748], [56.070820753814544, 26.055464178973946], [56.362017449779344, 26.395934353128947], [56.485679152253809, 26.309117946878665], [56.391421339753393, 25.895990708921254]]]] } },
            { "type": "Feature", "properties": { "admin": "Pakistan", "name": "Pakistan", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[75.158027785140902, 37.13303091078911], [75.896897414050116, 36.666806138651829], [76.192848341785677, 35.898403428687821], [77.837450799474553, 35.494009507787759], [76.871721632804011, 34.653544012992732], [75.757060988268321, 34.504922593721311], [74.240202671204955, 34.748887030571247], [73.749948358051952, 34.317698879527846], [74.104293654277328, 33.441473293586846], [74.451559279278698, 32.764899603805489], [75.258641798813187, 32.271105455040491], [74.405928989564998, 31.692639471965272], [74.421380242820263, 30.97981476493117], [73.450638462217412, 29.976413479119863], [72.823751662084689, 28.961591701772047], [71.777665643200308, 27.913180243434521], [70.61649620960192, 27.989196275335861], [69.514392938113119, 26.940965684511365], [70.168926629522005, 26.491871649678835], [70.282873162725579, 25.722228705339823], [70.844699334602822, 25.215102037043511], [71.0432401874682, 24.356523952730193], [68.842599318318761, 24.359133612560932], [68.176645135373377, 23.691965033456704], [67.443666619745457, 23.944843654876983], [67.145441928989058, 24.663611151624639], [66.37282758979326, 25.425140896093847], [64.530407749291115, 25.237038682551425], [62.905700718034595, 25.218409328710202], [61.497362908784183, 25.078237006118492], [61.874187453056535, 26.239974880472097], [63.316631707619578, 26.756532497661659], [63.23389773952028, 27.217047024030702], [62.755425652929851, 27.378923448184985], [62.727830438085974, 28.259644883735383], [61.771868117118615, 28.699333807890792], [61.369308709564926, 29.303276272085917], [60.874248488208778, 29.829238999952604], [62.549856805272775, 29.318572496044304], [63.550260858011164, 29.468330796826162], [64.148002150331237, 29.340819200145965], [64.350418735618504, 29.560030625928089], [65.046862013616092, 29.472180691031902], [66.346472609324408, 29.88794342703617], [66.38145755398601, 30.738899237586448], [66.938891229118454, 31.304911200479346], [67.683393589147457, 31.303154201781414], [67.792689243444769, 31.582930406209623], [68.556932000609308, 31.713310044882011], [68.926676873657655, 31.620189113892064], [69.317764113242546, 31.901412258424436], [69.262522007122541, 32.501944078088293], [69.687147251264847, 33.105498969041228], [70.323594191371583, 33.358532619758385], [69.93054324735958, 34.020120144175102], [70.881803012988385, 33.988855902638512], [71.156773309213449, 34.348911444632144], [71.115018751921625, 34.733125718722228], [71.613076206350698, 35.153203436822857], [71.498767938121077, 35.650563259415996], [71.262348260385735, 36.074387518857797], [71.846291945283909, 36.509942328429851], [72.920024855444453, 36.720007025696312], [74.067551710917812, 36.836175645488446], [74.575892775372964, 37.02084137628345], [75.158027785140902, 37.13303091078911]]] } },
            { "type": "Feature", "properties": { "admin": "Panama", "name": "Panama", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-77.881571417945239, 7.223771267114783], [-78.214936082660103, 7.512254950384159], [-78.429160732726061, 8.052041123888925], [-78.182095709938608, 8.319182440621772], [-78.43546525746568, 8.387705389840788], [-78.622120530903928, 8.718124497915026], [-79.120307176413732, 8.996092027213022], [-79.557877366845176, 8.932374986197145], [-79.760578172510037, 8.584515082224398], [-80.164481167303322, 8.333315944853593], [-80.382659064439608, 8.29840851484043], [-80.480689256497286, 8.090307522001067], [-80.003689948227148, 7.54752411542337], [-80.276670701808982, 7.419754136581713], [-80.421158006497066, 7.271571966984763], [-80.886400926420791, 7.220541490096535], [-81.059542812814698, 7.817921047390596], [-81.189715745757937, 7.647905585150339], [-81.519514736644666, 7.706610012233908], [-81.721311204744453, 8.108962714058434], [-82.131441209628889, 8.175392767769635], [-82.390934414382542, 8.292362372262287], [-82.820081346350406, 8.290863755725821], [-82.850958014644803, 8.073822740099954], [-82.965783047197348, 8.225027980985983], [-82.9131764391242, 8.423517157419068], [-82.829770677405151, 8.626295477732368], [-82.868657192704759, 8.807266343618521], [-82.719183112300513, 8.925708726431493], [-82.927154914059145, 9.074330145702914], [-82.932890998043561, 9.476812038608172], [-82.546196255203469, 9.566134751824674], [-82.187122565423394, 9.207448635286779], [-82.207586432610952, 8.995575262890098], [-81.808566860669259, 8.95061676679617], [-81.714154018872023, 9.031955471223581], [-81.43928707551153, 8.786234035675715], [-80.947301601876745, 8.858503526235905], [-80.521901211250054, 9.11107208906243], [-79.914599778955974, 9.312765204297618], [-79.573302781884294, 9.611610012241526], [-79.021191779277913, 9.552931423374103], [-79.058450486960353, 9.454565334506523], [-78.500887620747164, 9.420458889193879], [-78.055927700497989, 9.247730414258296], [-77.729513515926399, 8.946844387238867], [-77.353360765273848, 8.670504665558068], [-77.474722866511314, 8.524286200388216], [-77.242566494440069, 7.935278225125442], [-77.431107957656977, 7.638061224798733], [-77.75341386586139, 7.709839789252141], [-77.881571417945239, 7.223771267114783]]] } },
            { "type": "Feature", "properties": { "admin": "Peru", "name": "Peru", "continent": "South America" }, "geometry": { "type": "Polygon", "coordinates": [[[-69.590423753524036, -17.580011895419329], [-69.858443569605839, -18.092693780187009], [-70.3725723944777, -18.347975355708861], [-71.375250210236914, -17.77379851651385], [-71.462040778271117, -17.363487644116379], [-73.444529588500401, -16.359362888252992], [-75.23788265654143, -15.26568287522778], [-76.009205084929931, -14.649286390850317], [-76.423469204397733, -13.823186944232431], [-76.259241502574156, -13.535039157772939], [-77.10619238962181, -12.222716159720816], [-78.092152879534623, -10.377712497604062], [-79.036953091126918, -8.38656788496589], [-79.445920376284832, -7.930833428583859], [-79.760578172510037, -7.194340915560081], [-80.537481655586049, -6.541667575713715], [-81.249996304026411, -6.136834405139182], [-80.926346808582423, -5.690556735866563], [-81.410942552399433, -4.736764825055459], [-81.099669562489353, -4.036394138203696], [-80.302560594387188, -3.404856459164712], [-80.184014858709645, -3.821161797708043], [-80.46929460317692, -4.059286797708999], [-80.442241990872134, -4.425724379090673], [-80.028908047185581, -4.346090996928893], [-79.62497921417615, -4.454198093283494], [-79.205289069317715, -4.959128513207388], [-78.639897223612323, -4.547784112164072], [-78.450683966775628, -3.873096612161375], [-77.83790483265858, -3.003020521663103], [-76.635394253226707, -2.608677666843817], [-75.544995693652027, -1.56160979574588], [-75.233722703741932, -0.911416924649529], [-75.373223232713841, -0.15203175212045], [-75.106624518520064, -0.05720549886486], [-74.441600511355958, -0.530820000819887], [-74.122395189089048, -1.002832533373848], [-73.659503546834586, -1.260491224781134], [-73.070392218707212, -2.308954359550952], [-72.325786505813639, -2.434218031426453], [-71.774760708285385, -2.169789727388937], [-71.413645799429773, -2.342802422702128], [-70.813475714791949, -2.256864515800742], [-70.047708502874841, -2.725156345229699], [-70.692682054309699, -3.742872002785858], [-70.394043952094975, -3.766591485207825], [-69.893635219996611, -4.298186944194326], [-70.79476884630229, -4.251264743673302], [-70.928843349883564, -4.401591485210367], [-71.748405727816532, -4.59398284263301], [-72.891927659787243, -5.274561455916979], [-72.964507208941185, -5.741251315944892], [-73.219711269814596, -6.089188734566076], [-73.120027431923575, -6.629930922068238], [-73.724486660441627, -6.918595472850638], [-73.723401455363486, -7.340998630404412], [-73.987235480429646, -7.523829847853063], [-73.571059332967053, -8.424446709835832], [-73.015382656532537, -9.03283334720806], [-73.226713426390148, -9.462212823121233], [-72.563033006465631, -9.520193780152715], [-72.184890713169821, -10.05359791426943], [-71.302412278921523, -10.079436130415372], [-70.481893886991159, -9.490118096558842], [-70.548685675728393, -11.009146823778462], [-70.093752204046879, -11.123971856331011], [-69.52967810736493, -10.951734307502193], [-68.665079718689611, -12.561300144097171], [-68.880079515239956, -12.89972909917665], [-68.929223802349526, -13.602683607643007], [-68.94888668483658, -14.45363941819328], [-69.339534674747, -14.953195489158828], [-69.160346645774936, -15.323973890853015], [-69.389764166934697, -15.66012908291165], [-68.959635382753291, -16.500697930571267], [-69.590423753524036, -17.580011895419329]]] } },
            { "type": "Feature", "properties": { "admin": "Philippines", "name": "Philippines", "continent": "Asia" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[126.376813592637447, 8.414706325713352], [126.478512811387873, 7.750354112168976], [126.537423944200611, 7.189380601424572], [126.19677290253253, 6.274294338400038], [125.831420526229081, 7.293715318221855], [125.363852166852283, 6.78648529706099], [125.683160841983707, 6.049656887227257], [125.396511672060626, 5.581003322772288], [124.219787632342332, 6.16135549562618], [123.938719517106918, 6.88513560630612], [124.243662144061318, 7.360610459823659], [123.610212437027542, 7.833527329942753], [123.29607140512519, 7.418875637232786], [122.825505812675388, 7.457374579290216], [122.085499302255769, 6.899424139834847], [121.919928013192603, 7.192119452336072], [122.312358840017112, 8.034962063016506], [122.94239790251963, 8.316236883981174], [123.487687616063511, 8.693009751821192], [123.841154412939815, 8.240324204944384], [124.6014697612502, 8.514157619659015], [124.764612257995623, 8.960409450715458], [125.471390822451539, 8.986996975129641], [125.412117954612754, 9.760334784377545], [126.222714471543156, 9.28607432701885], [126.306636997585073, 8.782487494334573], [126.376813592637447, 8.414706325713352]]], [[[123.982437778825798, 10.278778591345811], [123.62318322153277, 9.950090643753297], [123.309920688979332, 9.318268744336676], [122.995883009941636, 9.022188625520398], [122.380054966319463, 9.713360907424201], [122.586088901867072, 9.981044826696104], [122.837081333508706, 10.261156927934234], [122.947410516451896, 10.881868394408029], [123.498849725438447, 10.940624497923945], [123.337774285984722, 10.267383938025445], [124.077935825701218, 11.232725531453706], [123.982437778825798, 10.278778591345811]]], [[[118.504580926590336, 9.316382554558087], [117.174274530100675, 8.367499904814663], [117.664477166821371, 9.066888739452933], [118.386913690261736, 9.684499619989223], [118.98734215706105, 10.376292019080507], [119.511496209797528, 11.36966807702721], [119.689676548339889, 10.554291490109872], [119.029458449378978, 10.003653265823869], [118.504580926590336, 9.316382554558087]]], [[[121.883547804859106, 11.891755072471977], [122.483821242361458, 11.582187404827506], [123.120216506035959, 11.583660183147867], [123.100837843926442, 11.165933742716486], [122.637713657726692, 10.741308498574226], [122.002610304859559, 10.441016750526087], [121.967366978036523, 10.905691229694622], [122.038370396005519, 11.415840969280039], [121.883547804859106, 11.891755072471977]]], [[[125.502551711123488, 12.162694606978347], [125.783464797062152, 11.046121934447767], [125.01188398651226, 11.311454576050377], [125.032761265158115, 10.975816148314703], [125.277449172060244, 10.358722032101308], [124.801819289245714, 10.134678859899889], [124.760168084818474, 10.8379951033923], [124.459101190286049, 10.889929917845633], [124.302521600441722, 11.495370998577227], [124.891012811381572, 11.415582587118589], [124.877990350443952, 11.794189968304988], [124.266761509295705, 12.557760931849682], [125.22711632700782, 12.53572093347719], [125.502551711123488, 12.162694606978347]]], [[[121.527393833503481, 13.069590155484516], [121.262190382981544, 12.2055602075644], [120.833896112146533, 12.704496161342416], [120.323436313967477, 13.466413479053866], [121.18012820850214, 13.429697373910439], [121.527393833503481, 13.069590155484516]]], [[[121.321308221523566, 18.504064642811013], [121.937601353036371, 18.21855235439838], [122.246006300954264, 18.478949896717094], [122.336956821787965, 18.224882717354173], [122.174279412933174, 17.810282701076371], [122.51565392465335, 17.09350474697197], [122.252310825693883, 16.262444362854122], [121.662786086108255, 15.931017564350125], [121.505069614753367, 15.124813544164621], [121.728828566577249, 14.328376369682244], [122.258925409027313, 14.218202216035973], [122.701275669445636, 14.336541245984417], [123.950295037940236, 13.782130642141066], [123.855107049658599, 13.237771104378464], [124.181288690284873, 12.997527370653469], [124.077419061378222, 12.536676947474573], [123.298035109552245, 13.027525539598981], [122.928651971529902, 13.552919826710404], [122.671355015148663, 13.185836289925131], [122.034649692880521, 13.784481919810343], [121.126384718918587, 13.636687323455559], [120.628637323083296, 13.857655747935649], [120.679383579593832, 14.271015529838319], [120.99181928923052, 14.525392767795079], [120.693336216312687, 14.756670640517282], [120.564145135582976, 14.396279201713821], [120.070428501466367, 14.970869452367094], [119.920928582846102, 15.406346747290735], [119.883773228028247, 16.363704331929963], [120.286487664878791, 16.034628811095327], [120.39004723519173, 17.599081122299506], [120.7158671407919, 18.505227362537536], [121.321308221523566, 18.504064642811013]]]] } },
            { "type": "Feature", "properties": { "admin": "Papua New Guinea", "name": "Papua New Guinea", "continent": "Oceania" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[155.880025669578401, -6.819996840037758], [155.599991082988765, -6.919990736522491], [155.166994256815087, -6.535931491729299], [154.729191522438327, -5.900828138862208], [154.514114211239644, -5.139117526880012], [154.652503696917336, -5.042430922061839], [154.759990676084357, -5.339983819198493], [155.062917922179338, -5.566791680527486], [155.547746209941693, -6.200654799019658], [156.019965448224752, -6.540013929880386], [155.880025669578401, -6.819996840037758]]], [[[151.982795851854462, -5.478063246282344], [151.459106887008659, -5.560280450058739], [151.301390415653884, -5.840728448106701], [150.754447056276661, -6.083762709175387], [150.241196730753813, -6.317753594592984], [149.709963006793316, -6.316513360218051], [148.890064732050462, -6.026040134305432], [148.318936802360696, -5.74714242922613], [148.401825799756864, -5.437755629094722], [149.298411900020824, -5.583741550319216], [149.845561965127217, -5.505503431829339], [149.996250441690279, -5.026101169457674], [150.139755894164921, -5.001348158389788], [150.236907586873485, -5.53222014732428], [150.807467075808063, -5.455842380396886], [151.089672072553981, -5.113692722192368], [151.647880894170811, -4.757073662946168], [151.537861769821518, -4.167807305521889], [152.136791620084352, -4.148790378438519], [152.338743117480988, -4.31296640382976], [152.318692661751754, -4.867661228050748], [151.982795851854462, -5.478063246282344]]], [[[147.191873814074938, -7.388024183789978], [148.084635858349372, -8.044108168167609], [148.734105259393573, -9.104663588093755], [149.306835158484432, -9.071435642130067], [149.266630894161324, -9.514406019736027], [150.038728469034311, -9.684318129111698], [149.738798456012262, -9.872937106977002], [150.801627638959133, -10.29368661869742], [150.690574985963849, -10.582712904505865], [150.028393182575826, -10.652476088099929], [149.782310012001972, -10.393267103723941], [148.923137648717216, -10.28092253992136], [147.913018426707993, -10.130440769087469], [147.135443150012236, -9.492443536012017], [146.567880894150619, -8.942554619994153], [146.048481073184917, -8.067414239131308], [144.74416792213799, -7.630128269077473], [143.897087844009661, -7.915330498896279], [143.286375767184268, -8.245491224809056], [143.413913202080664, -8.983068942910945], [142.628431431244223, -9.326820570516501], [142.068258905200196, -9.159595635620034], [141.033851760013874, -9.117892754760417], [141.017056919519007, -5.85902190513802], [141.000210402591847, -2.600151055515624], [142.735246616791443, -3.289152927263216], [144.583970982033236, -3.861417738463401], [145.27317955950997, -4.373737888205027], [145.829786411725649, -4.876497897972683], [145.981921828392956, -5.465609226100012], [147.648073358347574, -6.083659356310803], [147.891107619416175, -6.614014580922315], [146.970905389594861, -6.721656589386255], [147.191873814074938, -7.388024183789978]]], [[[153.14003787659874, -4.499983412294113], [152.827292108368255, -4.766427097190998], [152.63867313050298, -4.176127211120927], [152.406025832324929, -3.789742526874561], [151.953236932583536, -3.462062269711821], [151.384279413050024, -3.035421644710111], [150.6620495953388, -2.741486097833956], [150.939965448204532, -2.500002129734028], [151.479984165654514, -2.779985039891386], [151.820015090135087, -2.999971612157907], [152.239989455371074, -3.24000864015366], [152.640016717742526, -3.659983005389647], [153.019993524384631, -3.980015150573293], [153.14003787659874, -4.499983412294113]]]] } },
            { "type": "Feature", "properties": { "admin": "Poland", "name": "Poland", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[15.016995883858666, 51.106674099321566], [14.607098422919531, 51.745188096719964], [14.685026482815685, 52.089947414755187], [14.437599725002197, 52.624850165408382], [14.074521111719488, 52.981262518925426], [14.353315463934136, 53.248171291712957], [14.119686313542584, 53.757029120491026], [14.802900424873455, 54.050706285205735], [16.363477003655728, 54.513158677785711], [17.622831658608671, 54.851535956432897], [18.620858595461637, 54.682605699270766], [18.696254510175461, 54.438718777069276], [19.6606400896064, 54.426083889373913], [20.89224450041862, 54.312524929412518], [22.731098667092649, 54.327536932993311], [23.243987257589506, 54.220566718149129], [23.484127638449841, 53.912497667041123], [23.527535841574995, 53.47012156840654], [23.804934930117774, 53.08973135030606], [23.799198846133375, 52.691099351606553], [23.19949384938618, 52.486977444053664], [23.508002150168689, 52.023646552124717], [23.52707075368437, 51.578454087930233], [24.029985792748899, 50.705406602575174], [23.922757195743259, 50.424881089878738], [23.426508416444388, 50.308505764357449], [22.518450148211596, 49.476773586619736], [22.776418898212619, 49.027395331409608], [22.558137648211751, 49.08573802346713], [21.607808058364206, 49.470107326854077], [20.887955356538406, 49.328772284535823], [20.415839471119849, 49.431453355499755], [19.825022820726865, 49.217125352569219], [19.320712517990469, 49.571574001659179], [18.909574822676316, 49.435845852244562], [18.85314415861361, 49.496229763377634], [18.392913852622168, 49.988628648470737], [17.649445021238986, 50.049038397819942], [17.554567091551117, 50.36214590107641], [16.868769158605655, 50.473973700556016], [16.719475945714429, 50.215746568393527], [16.176253289462263, 50.4226073268579], [16.238626743238566, 50.697732652379827], [15.490972120839725, 50.7847299261432], [15.016995883858666, 51.106674099321566]]] } },
            { "type": "Feature", "properties": { "admin": "Puerto Rico", "name": "Puerto Rico", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-66.2824344550082, 18.51476166429536], [-65.771302863209286, 18.426679185453875], [-65.591003790942935, 18.228034979723912], [-65.847163865813755, 17.975905666571855], [-66.599934455009475, 17.98182261806927], [-67.184162360285256, 17.946553453030074], [-67.24242753769434, 18.374460150622934], [-67.100679083917726, 18.520601101144347], [-66.2824344550082, 18.51476166429536]]] } },
            { "type": "Feature", "properties": { "admin": "North Korea", "name": "Dem. Rep. Korea", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[130.640015903852401, 42.39500946712527], [130.780007358931101, 42.220007229168843], [130.400030552288996, 42.280003567059701], [129.965948521037234, 41.941367906251052], [129.667362095254788, 41.601104437825221], [129.705189243692445, 40.882827867184318], [129.188114862179958, 40.661807766271984], [129.010399611528186, 40.485436102859801], [128.633368361526692, 40.189846910150301], [127.967414178581322, 40.025412502597547], [127.533435500194145, 39.756850083976694], [127.502119582225276, 39.323930772451526], [127.385434198110261, 39.213472398427648], [127.783342726757709, 39.050898342437414], [128.349716424676586, 38.612242946927843], [128.205745884311426, 38.370397243801882], [127.780035435090966, 38.304535630845884], [127.073308547067342, 38.256114813788393], [126.683719924018888, 37.804772854151174], [126.237338901881742, 37.840377916000271], [126.174758742376213, 37.749685777328033], [125.689103631697165, 37.940010077459014], [125.568439162295675, 37.752088731429616], [125.275330438336184, 37.66907054295271], [125.24008711151312, 37.857224432927424], [124.981033156433952, 37.948820909164773], [124.712160679219352, 38.108346055649783], [124.985994093933954, 38.548474229479673], [125.221948683778677, 38.665857245430665], [125.13285851450749, 38.848559271798578], [125.386589797060566, 39.387957872061158], [125.321115757346774, 39.551384589184202], [124.737482131042384, 39.660344346671614], [124.265624627785286, 39.928493353834149], [125.079941847840615, 40.569823716792442], [126.182045119329402, 41.107336127276362], [126.86908328664984, 41.816569322266176], [127.343782993682993, 41.50315176041596], [128.208433058790632, 41.466771552082477], [128.052215203972281, 41.994284572917934], [129.59666873587949, 42.424981797854542], [129.994267205933198, 42.985386867843779], [130.640015903852401, 42.39500946712527]]] } },
            { "type": "Feature", "properties": { "admin": "Portugal", "name": "Portugal", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[-9.034817674180244, 41.880570583659669], [-8.671945766626719, 42.134689439454952], [-8.26385698081779, 42.280468654950326], [-8.01317460776991, 41.790886135417118], [-7.422512986673794, 41.792074693359822], [-7.251308966490822, 41.91834605566504], [-6.668605515967655, 41.883386949219577], [-6.389087693700914, 41.381815497394641], [-6.851126674822551, 41.111082668617513], [-6.864019944679383, 40.330871893874821], [-7.026413133156593, 40.184524237624238], [-7.066591559263527, 39.711891587882768], [-7.498632371439724, 39.629571031241802], [-7.098036668313126, 39.03007274022378], [-7.374092169616317, 38.373058580064914], [-7.029281175148794, 38.075764065089757], [-7.166507941099863, 37.803894354802217], [-7.537105475281022, 37.428904323876232], [-7.45372555177809, 37.097787583966053], [-7.855613165711985, 36.838268540996253], [-8.382816127953687, 36.978880113262449], [-8.898856980820325, 36.868809312480771], [-8.746101446965552, 37.6513455266766], [-8.839997524439879, 38.266243394517609], [-9.287463751655221, 38.358485826158592], [-9.526570603869713, 38.737429104154906], [-9.44698889814023, 39.392066148428363], [-9.048305223008425, 39.755093085278766], [-8.977353481471679, 40.159306138665798], [-8.7686840478771, 40.76063894303018], [-8.790853237330309, 41.18433401139125], [-8.990789353867568, 41.543459377603625], [-9.034817674180244, 41.880570583659669]]] } },
            { "type": "Feature", "properties": { "admin": "Paraguay", "name": "Paraguay", "continent": "South America" }, "geometry": { "type": "Polygon", "coordinates": [[[-62.685057135657871, -22.24902922942238], [-62.291179368729203, -21.051634616787389], [-62.265961269770784, -20.513734633061272], [-61.786326463453761, -19.633736667562957], [-60.043564622626477, -19.342746677327419], [-59.11504248720609, -19.356906019775398], [-58.183471442280492, -19.868399346600359], [-58.166392381408038, -20.176700941653674], [-57.870673997617786, -20.732687676681948], [-57.937155727761287, -22.090175876557169], [-56.881509568902885, -22.282153822521476], [-56.473317430229379, -22.086300144135279], [-55.797958136606894, -22.356929620047815], [-55.61068274598113, -22.655619398694839], [-55.517639329639621, -23.57199757252663], [-55.400747239795407, -23.956935316668797], [-55.027901780809543, -24.001273695575225], [-54.652834235235119, -23.839578138933955], [-54.292959560754511, -24.021014092710722], [-54.293476325077435, -24.570799655863958], [-54.428946092330577, -25.162184747012162], [-54.625290696823562, -25.739255466415507], [-54.788794928595038, -26.621785577096126], [-55.695845506398143, -27.387837009390857], [-56.486701626192989, -27.548499037386286], [-57.609759690976134, -27.395898532828383], [-58.618173590719735, -27.123718763947089], [-57.633660040911117, -25.603656508081638], [-57.777217169817924, -25.162339776309032], [-58.807128465394968, -24.771459242453307], [-60.028966030504016, -24.032796319273267], [-60.846564704009907, -23.880712579038288], [-62.685057135657871, -22.24902922942238]]] } },
            { "type": "Feature", "properties": { "admin": "Palestine", "name": "Palestine", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[35.545665317534535, 32.393992011030569], [35.545251906076196, 31.782504787720832], [35.397560662586038, 31.489086005167572], [34.927408481594554, 31.35343537040141], [34.970506626125989, 31.616778469360803], [35.225891554512422, 31.754341132121759], [34.974640740709319, 31.866582343059715], [35.183930291491428, 32.532510687788935], [35.545665317534535, 32.393992011030569]]] } },
            { "type": "Feature", "properties": { "admin": "Qatar", "name": "Qatar", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[50.810108270069563, 24.754742539971371], [50.743910760303677, 25.482424221289389], [51.01335167827348, 26.006991685484191], [51.286461622936045, 26.114582017515865], [51.589078810437243, 25.801112779233375], [51.606700473848804, 25.215670477798735], [51.389607781790623, 24.627385972588051], [51.112415398977006, 24.556330878186721], [50.810108270069563, 24.754742539971371]]] } },
            { "type": "Feature", "properties": { "admin": "Romania", "name": "Romania", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[22.710531447040488, 47.882193915389394], [23.142236362406798, 48.096341050806942], [23.760958286237404, 47.985598456405448], [24.402056105250374, 47.981877753280422], [24.866317172960571, 47.737525743188307], [25.207743361112986, 47.891056423527459], [25.945941196402394, 47.987148749374207], [26.197450392366925, 48.220881252630342], [26.619336785597788, 48.220726223333457], [26.924176059687561, 48.123264472030982], [27.233872918412736, 47.826770941756365], [27.551166212684841, 47.405117092470817], [28.128030226359037, 46.81047638608824], [28.160017937947707, 46.371562608417207], [28.054442986775392, 45.944586086605618], [28.233553501099035, 45.488283189468369], [28.679779493939371, 45.30403087013169], [29.149724969201646, 45.464925442072442], [29.603289015427425, 45.293308010431119], [29.62654340995876, 45.035390936862392], [29.141611769331831, 44.820210272799038], [28.837857700320196, 44.913873806328041], [28.55808149589199, 43.707461656258118], [27.970107049275068, 43.812468166675202], [27.242399529740904, 44.175986029632398], [26.065158725699739, 43.943493760751259], [25.569271681426923, 43.688444729174712], [24.100679152124169, 43.741051337247846], [23.332302280376322, 43.897010809904707], [22.94483239105184, 43.823785305347123], [22.657149692482985, 44.234923000661276], [22.474008416440594, 44.409227606781762], [22.705725538837349, 44.578002834647016], [22.459022251075933, 44.702517198254291], [22.145087924902807, 44.478422349620573], [21.562022739353605, 44.768947251965486], [21.483526238702233, 45.181170152357772], [20.874312778413351, 45.416375433934228], [20.76217492033998, 45.734573065771428], [20.220192498462833, 46.127468980486547], [21.021952345471245, 46.316087958351886], [21.626514926853869, 46.994237779318148], [22.09976769378283, 47.672439276716695], [22.710531447040488, 47.882193915389394]]] } },
            { "type": "Feature", "properties": { "admin": "Russia", "name": "Russia", "continent": "Europe" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[143.648007440362846, 50.747600409541512], [144.65414757708561, 48.976390692737581], [143.173927850517174, 49.306551418650365], [142.558668247650076, 47.861575018904908], [143.533492466404027, 46.836728013692479], [143.505277134372591, 46.137907619809475], [142.747700636973889, 46.740764878926562], [142.092030064054484, 45.966755276058777], [141.906925083585008, 46.805928860046535], [142.018442824470867, 47.780132961612921], [141.904444614835029, 48.859188544299563], [142.135800002205656, 49.615163072297449], [142.179983351815281, 50.952342434281903], [141.594075962490024, 51.935434882202529], [141.682546014573632, 53.301966457728767], [142.606934035410745, 53.762145087287891], [142.209748976815376, 54.225475979216853], [142.654786411712934, 54.365880845753864], [142.914615513276544, 53.704577541714734], [143.260847609632037, 52.740760403039033], [143.235267775647628, 51.756660264688733], [143.648007440362846, 50.747600409541512]]], [[[22.731098667092649, 54.327536932993311], [20.892244500418652, 54.312524929412568], [19.6606400896064, 54.42608388937397], [19.88848147958134, 54.866160386771483], [21.268448927503492, 55.190481675835279], [22.315723504330599, 55.015298570365886], [22.757763706155281, 54.856574408581416], [22.651051873472564, 54.582740993866693], [22.731098667092649, 54.327536932993311]]], [[[180.000000000000114, 70.832199208546669], [178.903425, 70.78114], [178.7253, 71.0988], [180.000000000000114, 71.515714336428246], [180.000000000000114, 70.832199208546669]]], [[[143.60385, 73.21244], [142.08763, 73.20544], [140.038155, 73.31692], [139.86312, 73.36983], [140.81171, 73.76506], [142.06207, 73.85758], [143.48283, 73.47525], [143.60385, 73.21244]]], [[[150.73167, 75.08406], [149.575925, 74.68892], [147.977465, 74.778355], [146.11919, 75.17298], [146.358485, 75.49682], [148.22223, 75.345845], [150.73167, 75.08406]]], [[[145.086285, 75.562625], [144.3, 74.82], [140.61381, 74.84768], [138.95544, 74.61148], [136.97439, 75.26167], [137.51176, 75.94917], [138.831075, 76.13676], [141.471615, 76.09289], [145.086285, 75.562625]]], [[[57.535692579992386, 70.720463975702145], [56.944979282463933, 70.63274323188665], [53.677375115784187, 70.762657782668455], [53.412016635965372, 71.206661688920192], [51.601894565645708, 71.474759019650477], [51.455753615124209, 72.014881089965129], [52.478275180883564, 72.229441636840946], [52.444168735570841, 72.77473135038484], [54.427613559797649, 73.627547512497571], [53.508289829325136, 73.749813951300141], [55.902458937407644, 74.627486477345329], [55.631932814359701, 75.081412258597155], [57.868643833248839, 75.609390367323186], [61.170044386647497, 76.251883450008123], [64.498368361270209, 76.439055487769267], [66.210977003855092, 76.809782213031227], [68.157059767534818, 76.939696763812904], [68.852211134725124, 76.544811306454605], [68.180572544227644, 76.233641669409096], [64.637326287703004, 75.737754625136219], [61.583507521414752, 75.260884507946784], [58.477082147053366, 74.309056301562819], [56.986785516187993, 73.333043524866227], [55.41933597191094, 72.371267605265956], [55.622837762276291, 71.540594794390316], [57.535692579992386, 70.720463975702145]]], [[[106.970130000000111, 76.97419], [107.240000000000123, 76.48], [108.1538, 76.723350000000138], [111.077260000000138, 76.71], [113.33151, 76.22224], [114.13417, 75.84764], [113.88539, 75.327790000000121], [112.77918, 75.03186], [110.151250000000175, 74.47673], [109.4, 74.18], [110.64, 74.04], [112.11919, 73.787740000000113], [113.019540000000234, 73.976930000000138], [113.529580000000294, 73.33505], [113.96881, 73.59488], [115.56782, 73.75285], [118.776330000000215, 73.58772], [119.02, 73.12], [123.20066, 72.97122], [123.257770000000178, 73.73503], [125.380000000000166, 73.56], [126.97644, 73.56549], [128.59126, 73.03871], [129.05157, 72.39872], [128.46, 71.98], [129.715990000000204, 71.19304], [131.288580000000252, 70.786990000000102], [132.253500000000145, 71.8363], [133.857660000000294, 71.386420000000143], [135.56193, 71.655250000000123], [137.49755, 71.34763], [138.234090000000123, 71.62803], [139.86983, 71.487830000000116], [139.14791, 72.4161900000001], [140.46817, 72.849410000000134], [149.5, 72.2], [150.35118000000017, 71.60643], [152.96890000000019, 70.84222], [157.00688, 71.03141], [158.99779, 70.86672], [159.830310000000225, 70.45324], [159.70866, 69.72198], [160.94053000000028, 69.43728], [162.279070000000104, 69.64204], [164.05248, 69.66823], [165.940370000000172, 69.47199], [167.83567, 69.58269], [169.57763000000017, 68.6938], [170.816880000000253, 69.01363], [170.008200000000159, 69.65276], [170.453450000000259, 70.09703], [173.643910000000204, 69.81743], [175.72403000000017, 69.877250000000217], [178.6, 69.4], [180.000000000000114, 68.963636363636553], [180.000000000000114, 64.979708702198465], [179.99281, 64.97433], [178.707200000000199, 64.53493], [177.411280000000147, 64.60821], [178.313000000000187, 64.07593], [178.90825000000018, 63.251970000000128], [179.37034, 62.98262], [179.48636, 62.56894], [179.228250000000116, 62.304100000000133], [177.3643, 62.5219], [174.569290000000194, 61.76915], [173.68013, 61.65261], [172.15, 60.95], [170.6985, 60.33618], [170.330850000000282, 59.88177], [168.90046, 60.57355], [166.294980000000265, 59.7885500000002], [165.840000000000202, 60.16], [164.87674, 59.7316], [163.539290000000108, 59.86871], [163.217110000000218, 59.21101], [162.01733, 58.24328], [162.05297, 57.83912], [163.19191, 57.61503], [163.057940000000144, 56.159240000000111], [162.129580000000203, 56.12219], [161.70146, 55.285680000000148], [162.117490000000117, 54.85514], [160.368770000000325, 54.34433], [160.021730000000218, 53.20257], [158.530940000000157, 52.958680000000236], [158.23118, 51.94269], [156.789790000000266, 51.01105], [156.42000000000013, 51.7], [155.99182, 53.15895], [155.43366, 55.381030000000109], [155.914420000000291, 56.767920000000132], [156.75815, 57.3647], [156.81035, 57.83204], [158.364330000000166, 58.05575], [160.150640000000124, 59.314770000000109], [161.87204, 60.343000000000117], [163.66969, 61.1409], [164.473550000000103, 62.55061], [163.258420000000172, 62.46627], [162.65791, 61.6425], [160.12148, 60.54423], [159.30232, 61.77396], [156.72068, 61.43442], [154.218060000000293, 59.758180000000117], [155.04375, 59.14495], [152.81185, 58.88385], [151.265730000000246, 58.78089], [151.33815, 59.50396], [149.78371, 59.655730000000126], [148.54481, 59.16448], [145.48722, 59.33637], [142.197820000000121, 59.03998], [138.958480000000293, 57.08805], [135.12619, 54.72959], [136.70171, 54.603550000000112], [137.19342, 53.97732], [138.1647, 53.755010000000247], [138.80463, 54.25455], [139.90151, 54.189680000000166], [141.34531, 53.089570000000109], [141.37923, 52.23877], [140.59742000000017, 51.23967], [140.51308, 50.045530000000113], [140.061930000000189, 48.446710000000152], [138.554720000000202, 46.99965], [138.21971, 46.30795], [136.86232, 45.143500000000174], [135.515350000000183, 43.989], [134.869390000000237, 43.39821], [133.536870000000249, 42.81147], [132.90627, 42.79849], [132.278070000000241, 43.284560000000106], [130.935870000000136, 42.55274], [130.78, 42.220000000000191], [130.640000000000157, 42.395], [130.633866408409801, 42.903014634770543], [131.144687941614961, 42.929989732426932], [131.288555129115593, 44.111519680348252], [131.025190000000237, 44.96796], [131.883454217659562, 45.321161607436508], [133.097120000000189, 45.14409], [133.769643996313164, 46.116926988299149], [134.112350000000163, 47.212480000000127], [134.50081, 47.578450000000139], [135.026311476786759, 48.478229885443902], [133.373595819228001, 48.183441677434836], [132.506690000000106, 47.78896], [130.987260000000106, 47.79013], [130.582293328982644, 48.72968740497619], [129.397817824420486, 49.4406000840156], [127.657400000000351, 49.76027], [127.287455682484904, 50.739797268265434], [126.939156528837827, 51.353894151405896], [126.564399041856959, 51.784255479532689], [125.946348911646439, 52.792798570356936], [125.068211297710434, 53.161044826868924], [123.57147, 53.4588], [122.245747918793043, 53.431725979213681], [121.003084751470354, 53.251401068731226], [120.177088657716865, 52.753886216841195], [120.725789015791975, 52.516226304730893], [120.7382, 51.96411], [120.182080000000155, 51.64355], [119.27939, 50.58292], [119.288460728025839, 50.142882798861947], [117.87924441942647, 49.510983384797036], [116.67880089728618, 49.888531399121398], [115.485695428531415, 49.805177313834733], [114.962109816550353, 50.140247300815119], [114.362456496235325, 50.24830272073747], [112.897739699354361, 49.543565375356984], [111.581230910286649, 49.377968248077671], [110.662010532678835, 49.130128078805846], [109.402449171996707, 49.292960516957685], [108.475167270951275, 49.282547715850704], [107.868175897251092, 49.793705145865871], [106.888804152455293, 50.274295966180276], [105.886591424586868, 50.40601919209216], [104.62158, 50.275320000000157], [103.676545444760336, 50.08996613219513], [102.25589, 50.510560000000105], [102.06521, 51.25991], [100.889480421962631, 51.516855780638409], [99.981732212323564, 51.63400625264395], [98.861490513100492, 52.047366034546698], [97.82573978067451, 51.010995184933236], [98.231761509191699, 50.422400621128716], [97.259760000000199, 49.72605], [95.814020000000156, 49.977460000000114], [94.815949334698757, 50.01343333597088], [94.147566359435601, 50.480536607457161], [93.10421, 50.49529], [92.234711541719676, 50.802170722041737], [90.713667433640765, 50.331811835321098], [88.805566847695573, 49.470520738312459], [87.751264276076824, 49.297197984405543], [87.359970330762692, 49.214980780629148], [86.829356723989648, 49.826674709668133], [85.541269972682485, 49.69285858824815], [85.115559523462082, 50.117302964877631], [84.416377394553038, 50.311399644565817], [83.935114780618903, 50.889245510453563], [83.383003778012451, 51.069182847693881], [81.945985548839943, 50.812195949906325], [80.568446893235446, 51.388336493528435], [80.035559523441705, 50.864750881547209], [77.80091556184432, 53.404414984747532], [76.525179477854749, 54.177003485727127], [76.891100294913443, 54.490524400441913], [74.384820000000119, 53.546850000000113], [73.425678745420512, 53.489810289109741], [73.50851606638436, 54.035616766976588], [72.224150018202195, 54.376655381886778], [71.180131056609468, 54.133285224008247], [70.86526655465515, 55.169733588270091], [69.068166945272893, 55.385250149143488], [68.169100376258896, 54.970391750704366], [65.66687, 54.601250000000149], [65.178533563095939, 54.354227810272064], [61.436600000000126, 54.00625], [60.978066440683236, 53.664993394579128], [61.69998619980062, 52.979996446334255], [60.73999311711453, 52.719986477257734], [60.927268507740237, 52.447548326214999], [59.967533807215567, 51.96042043721566], [61.588003371024136, 51.272658799843171], [61.337424350840998, 50.799070136104248], [59.932807244715555, 50.842194118851822], [59.642282342370564, 50.545442206415707], [58.363320000000122, 51.06364], [56.77798, 51.04355], [55.71694, 50.621710000000142], [54.532878452376181, 51.026239732459359], [52.328723585831042, 51.718652248738088], [50.766648390512174, 51.692762356159861], [48.702381626181044, 50.605128485712825], [48.577841424357601, 49.87475962991563], [47.549480421749379, 50.454698391311119], [46.751596307162764, 49.356005764353725], [47.043671502476585, 49.152038886097571], [46.466445753776291, 48.394152330104923], [47.315240000000152, 47.71585], [48.05725, 47.74377], [48.694733514201872, 47.075628160177885], [48.59325000000014, 46.56104], [49.101160000000121, 46.39933], [48.645410000000105, 45.80629], [47.67591, 45.641490000000111], [46.68201, 44.6092], [47.59094, 43.660160000000118], [47.49252, 42.98658], [48.58437000000017, 41.80888], [47.987283156126033, 41.405819200194387], [47.815665724484653, 41.151416124021338], [47.373315464066387, 41.219732367511135], [46.686070591016708, 41.827137152669899], [46.404950799348924, 41.860675157227426], [45.7764, 42.092440000000224], [45.470279168485909, 42.502780666670041], [44.537622918482057, 42.711992702803677], [43.93121, 42.554960000000101], [43.755990000000182, 42.74083], [42.394400000000154, 43.2203], [40.922190000000128, 43.382150000000131], [40.076964959479838, 43.553104153002486], [39.95500857927108, 43.434997666999287], [38.68, 44.28], [37.539120000000104, 44.65721], [36.675460000000122, 45.24469], [37.40317, 45.40451], [38.23295, 46.24087], [37.67372, 46.63657], [39.14767, 47.044750000000128], [39.121200000000123, 47.26336], [38.22353803889947, 47.102189846375971], [38.2551123390298, 47.546400458356956], [38.77057, 47.825620000000228], [39.738277622238982, 47.898937079452068], [39.895620000000136, 48.23241], [39.67465, 48.783820000000127], [40.080789015469477, 49.307429917999364], [40.069040000000108, 49.60105], [38.594988234213552, 49.926461900423718], [38.010631137857068, 49.915661526074715], [37.393459506995228, 50.383953355503664], [36.626167840325387, 50.225590928745127], [35.35611616388811, 50.577197374059139], [35.37791, 50.77394], [35.02218305841793, 51.207572333371495], [34.224815708154402, 51.255993150428921], [34.141978387190612, 51.56641347920619], [34.391730584457228, 51.768881740925892], [33.75269982273587, 52.335074571331646], [32.715760532367163, 52.238465481162159], [32.412058139787767, 52.288694973349763], [32.15944000000021, 52.061250000000101], [31.78597, 52.10168], [31.540018344862254, 52.742052313846429], [31.305200636527978, 53.073995876673301], [31.49764, 53.167430000000124], [32.304519484188368, 53.132726141972839], [32.693643019346119, 53.351420803432141], [32.405598585751157, 53.618045355842], [31.731272820774585, 53.794029446012011], [31.791424187962399, 53.974638576872181], [31.384472283663818, 54.157056382862365], [30.757533807098774, 54.811770941784388], [30.971835971813245, 55.08154775656412], [30.873909132620064, 55.55097646750351], [29.896294386522435, 55.789463202530484], [29.371571893030783, 55.670090643936263], [29.229513380660389, 55.918344224666399], [28.176709425577933, 56.169129950578778], [27.855282016722519, 56.759326483784363], [27.770015903440985, 57.244258124411189], [27.288184848751648, 57.474528306703903], [27.716685825315771, 57.791899115624439], [27.420150000000202, 58.724570000000128], [28.131699253051856, 59.300825100330982], [27.98112, 59.47537], [29.1177, 60.028050000000107], [28.07, 60.503520000000137], [30.211107212044645, 61.780027777749673], [31.139991082491029, 62.357692776124431], [31.516092156711263, 62.867687486412898], [30.035872430142796, 63.552813625738551], [30.444684686003736, 64.204453436939062], [29.544429559047014, 64.948671576590542], [30.21765, 65.80598], [29.054588657352376, 66.944286200622017], [29.977426385220689, 67.69829702419274], [28.445943637818765, 68.364612942163987], [28.591929559043358, 69.064776923286686], [29.39955, 69.15692000000017], [31.101080000000103, 69.55811], [32.132720000000255, 69.905950000000232], [33.77547, 69.301420000000107], [36.51396, 69.06342], [40.292340000000159, 67.9324], [41.059870000000124, 67.457130000000106], [41.125950000000174, 66.79158000000011], [40.01583, 66.266180000000119], [38.38295, 65.99953], [33.918710000000168, 66.75961], [33.18444, 66.63253], [34.81477, 65.900150000000124], [34.87857425307876, 65.436212877048192], [34.943910000000152, 64.414370000000147], [36.23129, 64.10945], [37.012730000000111, 63.84983], [37.141970000000143, 64.33471], [36.539579035089801, 64.76446], [37.176040000000135, 65.143220000000113], [39.59345, 64.520790000000162], [40.4356, 64.76446], [39.762600000000148, 65.49682], [42.09309, 66.47623], [43.01604000000011, 66.41858], [43.94975000000013, 66.06908], [44.53226, 66.756340000000122], [43.69839, 67.35245], [44.187950000000136, 67.95051], [43.45282, 68.57079], [46.250000000000135, 68.25], [46.821340000000156, 67.68997], [45.55517, 67.56652], [45.56202, 67.010050000000192], [46.349150000000137, 66.66767], [47.894160000000248, 66.884550000000146], [48.13876, 67.52238], [50.227660000000142, 67.998670000000132], [53.717430000000164, 68.85738], [54.47171, 68.80815], [53.485820000000118, 68.20131], [54.72628, 68.09702], [55.442680000000124, 68.43866], [57.317020000000149, 68.46628], [58.802000000000206, 68.88082], [59.941420000000178, 68.27844], [61.077840000000165, 68.94069], [60.03, 69.52], [60.55, 69.85], [63.504000000000147, 69.54739], [64.888115, 69.234835000000132], [68.512160000000108, 68.09233000000016], [69.18068, 68.61563000000011], [68.16444, 69.14436], [68.13522, 69.35649], [66.930080000000103, 69.454610000000102], [67.25976, 69.92873], [66.724920000000125, 70.708890000000125], [66.69466, 71.028970000000228], [68.540060000000111, 71.934500000000227], [69.19636, 72.843360000000146], [69.94, 73.04000000000012], [72.58754, 72.77629], [72.79603, 72.22006], [71.84811, 71.40898], [72.47011, 71.09019], [72.79188, 70.39114], [72.564700000000201, 69.02085], [73.66787, 68.4079], [73.2387, 67.7404], [71.280000000000101, 66.320000000000149], [72.423010000000147, 66.172670000000167], [72.82077, 66.53267], [73.920990000000131, 66.789460000000119], [74.186510000000183, 67.28429], [75.052, 67.760470000000154], [74.469260000000148, 68.32899], [74.93584, 68.98918], [73.84236, 69.07146], [73.601870000000204, 69.62763], [74.3998, 70.63175], [73.1011, 71.447170000000241], [74.890820000000204, 72.12119], [74.65926, 72.83227], [75.158010000000175, 72.854970000000108], [75.68351, 72.300560000000118], [75.288980000000109, 71.33556], [76.35911, 71.152870000000135], [75.903130000000161, 71.87401], [77.5766500000001, 72.26717], [79.652020000000107, 72.32011], [81.5, 71.75], [80.61071, 72.582850000000107], [80.51109, 73.6482], [82.25, 73.85], [84.65526, 73.805910000000154], [86.822300000000226, 73.93688], [86.00956, 74.459670000000145], [87.166820000000143, 75.11643], [88.31571, 75.14393], [90.26, 75.64], [92.90058, 75.77333], [93.234210000000132, 76.0472], [95.860000000000127, 76.14], [96.67821, 75.91548], [98.922540000000197, 76.44689], [100.759670000000199, 76.43028], [101.03532, 76.86189], [101.990840000000105, 77.287540000000192], [104.3516, 77.69792], [106.066640000000135, 77.37389], [104.705000000000211, 77.1274], [106.970130000000111, 76.97419]]], [[[105.07547, 78.30689], [99.43814, 77.921], [101.2649, 79.23399], [102.08635, 79.34641], [102.837815, 79.28129], [105.37243, 78.71334], [105.07547, 78.30689]]], [[[51.136186557831266, 80.54728017854093], [49.793684523320692, 80.415427761548202], [48.894411248577526, 80.33956675894369], [48.75493655782175, 80.175468248200829], [47.586119012244147, 80.010181179515328], [46.502825962109647, 80.247246812654339], [47.072455275262897, 80.559424140129451], [44.846958042181107, 80.589809882317169], [46.799138624871226, 80.771917629713627], [48.31847741068465, 80.784009914869927], [48.52280602396668, 80.514568996900138], [49.097189568890897, 80.753985907708412], [50.039767693894603, 80.918885403151791], [51.522932977103679, 80.699725653801906], [51.136186557831266, 80.54728017854093]]], [[[99.93976, 78.88094], [97.75794, 78.7562], [94.97259, 79.044745], [93.31288, 79.4265], [92.5454, 80.14379], [91.18107, 80.34146], [93.77766, 81.0246], [95.940895, 81.2504], [97.88385, 80.746975], [100.186655, 79.780135], [99.93976, 78.88094]]]] } },
            { "type": "Feature", "properties": { "admin": "Rwanda", "name": "Rwanda", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[30.419104852019235, -1.134659112150416], [30.816134881317705, -1.698914076345388], [30.758308953583104, -2.287250257988368], [30.469696079232978, -2.413857517103458], [29.938359002407935, -2.348486830254238], [29.632176141078585, -2.917857761246096], [29.02492638521678, -2.839257907730157], [29.117478875451546, -2.292211195488384], [29.254834832483336, -2.215109958508911], [29.29188683443661, -1.620055840667987], [29.579466180140876, -1.341313164885626], [29.821518588996003, -1.443322442229785], [30.419104852019235, -1.134659112150416]]] } },
            { "type": "Feature", "properties": { "admin": "Western Sahara", "name": "W. Sahara", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[-8.794883999049075, 27.120696316022503], [-8.81782833498667, 27.656425889592349], [-8.665589565454805, 27.656425889592349], [-8.66512447756419, 27.58947907155822], [-8.684399786809051, 27.395744126895998], [-8.687293667017398, 25.881056219988899], [-11.969418911171159, 25.933352769468261], [-11.93722449385332, 23.374594224536164], [-12.874221564169574, 23.284832261645171], [-13.118754441774708, 22.771220201096249], [-12.929101935263528, 21.327070624267559], [-16.845193650773989, 21.333323472574875], [-17.063423224342568, 20.99975210213082], [-17.020428432675736, 21.422310288981475], [-17.002961798561085, 21.420734157796574], [-14.750954555713532, 21.50060008390366], [-14.630832688851068, 21.860939846274899], [-14.221167771857251, 22.310163072188153], [-13.891110398809044, 23.691009019459297], [-12.500962693725368, 24.770116278578193], [-12.030758836301613, 26.030866197203036], [-11.718219773800353, 26.104091701760616], [-11.392554897496977, 26.883423977154358], [-10.551262579785272, 26.990807603456879], [-10.18942420087758, 26.860944729107398], [-9.735343390328877, 26.860944729107398], [-9.413037482124464, 27.088476060488514], [-8.794883999049075, 27.120696316022503]]] } },
            { "type": "Feature", "properties": { "admin": "Saudi Arabia", "name": "Saudi Arabia", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[42.779332309750963, 16.34789134364868], [42.64957278826607, 16.77463532151496], [42.347989129410706, 17.075805568911996], [42.270887892431219, 17.474721787989122], [41.754381951673949, 17.833046169500971], [41.221391229015573, 18.671599636301206], [40.939341261566533, 19.486485297111752], [40.247652215339819, 20.174634507726488], [39.801684604660934, 20.338862209550054], [39.139399448408277, 21.29190481209293], [39.023695916506782, 21.986875311770191], [39.066328973147577, 22.579655666590263], [38.492772251140075, 23.688451036060851], [38.023860304523616, 24.078685614512928], [37.483634881344379, 24.285494696545008], [37.154817742671177, 24.858482977797301], [37.209491408035994, 25.084541530858104], [36.931627231602583, 25.602959499610172], [36.639603712721218, 25.826227525327219], [36.249136590323808, 26.570135606384873], [35.640181512196385, 27.376520494083415], [35.130186801907875, 28.063351955674712], [34.632336053207972, 28.058546047471559], [34.787778761541936, 28.607427273059692], [34.832220493312938, 28.957483425404838], [34.956037225084252, 29.356554673778835], [36.068940870922049, 29.19749461518445], [36.501214227043583, 29.505253607698702], [36.740527784987243, 29.865283311476183], [37.503581984209028, 30.003776150018396], [37.668119744626374, 30.338665269485894], [37.998848911294367, 30.508499864213128], [37.002165561681004, 31.508412990844736], [39.004885695152545, 32.010216986614971], [39.195468377444961, 32.16100881604266], [40.399994337736238, 31.889991766887931], [41.889980910007829, 31.190008653278362], [44.709498732284736, 29.178891099559376], [46.568713413281742, 29.099025173452283], [47.459821811722819, 29.002519436147217], [47.708850538937376, 28.526062730416136], [48.416094191283939, 28.552004299426663], [48.807594842327163, 27.689627997339876], [49.299554477745815, 27.461218166609804], [49.470913527225647, 27.109999294538078], [50.152422316290874, 26.689663194275994], [50.212935418504671, 26.277026882425371], [50.113303257045928, 25.943972276304248], [50.23985883972874, 25.608049628190923], [50.527386509000728, 25.327808335872099], [50.660556675016885, 24.999895534764018], [50.810108270069563, 24.754742539971371], [51.112415398977006, 24.556330878186721], [51.389607781790623, 24.627385972588051], [51.579518670463258, 24.245497137951102], [51.617707553926969, 24.014219265228824], [52.000733270074321, 23.001154486578937], [55.006803012924898, 22.496947536707129], [55.208341098863187, 22.708329982997039], [55.666659376859812, 22.000001125572336], [54.999981723862355, 19.999994004796104], [52.000009800022227, 19.000003363516054], [49.116671583864857, 18.616667588774941], [48.183343540241324, 18.166669216377311], [47.466694777217626, 17.116681626854877], [47.000004917189749, 16.949999294497438], [46.749994337761642, 17.283338120996174], [46.366658563020529, 17.233315334537632], [45.399999220568752, 17.333335069238554], [45.216651238797184, 17.43332896572333], [44.062613152855072, 17.410358791569589], [43.791518589051904, 17.319976711491105], [43.380794305196098, 17.579986680567668], [43.115797560403351, 17.088440456607369], [43.218375278502734, 16.666889960186406], [42.779332309750963, 16.34789134364868]]] } },
            { "type": "Feature", "properties": { "admin": "Sudan", "name": "Sudan", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[33.963392794971178, 9.464285229420623], [33.824963480907506, 9.48406084571536], [33.842130853028145, 9.981914637215992], [33.721959248183097, 10.325262079630191], [33.206938084561777, 10.720111638406591], [33.086766479716729, 11.441141267476493], [33.206938084561777, 12.179338268667093], [32.743419037302537, 12.24800775714999], [32.674749548819641, 12.024831919580716], [32.073891524594778, 11.973329803218517], [32.314234734284746, 11.681484477166519], [32.400071594888338, 11.080626452941486], [31.850715687025509, 10.531270545078822], [31.352861895524875, 9.810240916008693], [30.837840731903377, 9.707236683284519], [29.996639497988546, 10.290927335388684], [29.618957311332842, 10.084918869940223], [29.515953078608607, 9.793073543888053], [29.000931914987166, 9.604232450560287], [28.966597170745779, 9.398223985111654], [27.970889587744345, 9.398223985111654], [27.833550610778783, 9.604232450560287], [27.112520981708876, 9.638567194801622], [26.752006167173811, 9.466893473594492], [26.477328213242508, 9.552730334198086], [25.96230704962101, 10.136420986302422], [25.790633328413943, 10.411098940233726], [25.069603699343979, 10.27375996326799], [24.79492574541268, 9.810240916008693], [24.537415163602017, 8.917537565731719], [24.194067721187643, 8.728696472403895], [23.886979580860665, 8.619729712933063], [23.805813429466745, 8.666318874542522], [23.459012892355979, 8.954285793489019], [23.394779087017291, 9.26506785729225], [23.557249790142915, 9.681218166538766], [23.554304233502187, 10.089255275915319], [22.977543572692749, 10.714462591998538], [22.864165480244246, 11.142395127807616], [22.87622, 11.384610000000119], [22.50869, 11.67936], [22.49762, 12.26024], [22.28801, 12.64605], [21.93681, 12.588180000000133], [22.03759, 12.95546], [22.29658, 13.37232], [22.18329, 13.78648], [22.51202, 14.09318], [22.30351, 14.32682], [22.567950000000106, 14.944290000000134], [23.02459, 15.68072], [23.886890000000101, 15.61084], [23.837660000000135, 19.580470000000101], [23.850000000000129, 20.0], [25.00000000000011, 20.00304], [25.00000000000011, 22.0], [29.02, 22.0], [32.9, 22.0], [36.86623, 22.0], [37.18872, 21.01885], [36.96941, 20.837440000000125], [37.114700000000134, 19.80796], [37.48179, 18.61409], [37.86276, 18.36786], [38.410089959473218, 17.998307399970312], [37.904000000000103, 17.42754], [37.16747, 17.263140000000128], [36.852530000000108, 16.95655], [36.75389, 16.29186], [36.32322, 14.82249], [36.42951, 14.42211], [36.27022, 13.563330000000118], [35.86363, 12.57828], [35.26049, 12.08286], [34.831630000000125, 11.318960000000116], [34.73115000000012, 10.910170000000106], [34.25745, 10.63009], [33.96162, 9.58358], [33.963392794971178, 9.464285229420623]]] } },
            { "type": "Feature", "properties": { "admin": "South Sudan", "name": "S. Sudan", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[33.963392794971178, 9.464285229420623], [33.97498, 8.68456], [33.82550000000014, 8.37916], [33.294800000000116, 8.35458], [32.95418, 7.7849700000001], [33.56829, 7.71334], [34.0751, 7.22595], [34.25032, 6.82607], [34.70702, 6.59422000000012], [35.298007118233095, 5.506], [34.620196267853935, 4.847122742082034], [34.005, 4.249884947362147], [33.39, 3.79], [32.68642, 3.79232], [31.881450000000136, 3.55827], [31.24556, 3.7819], [30.83385, 3.50917], [29.95349, 4.1737], [29.715995314256013, 4.600804755060152], [29.159078403446635, 4.389267279473244], [28.696677687298795, 4.455077215996993], [28.428993768026992, 4.287154649264607], [27.979977247842946, 4.408413397637388], [27.374226108517625, 5.233944403500173], [27.213409051225248, 5.550953477394613], [26.465909458123289, 5.946717434101855], [26.213418409945113, 6.546603298362127], [25.796647983511257, 6.979315904158169], [25.124130893664805, 7.500085150579422], [25.114932488716867, 7.825104071479244], [24.567369012152191, 8.229187933785452], [23.886979580860665, 8.619729712933063], [24.194067721187643, 8.728696472403895], [24.537415163602017, 8.917537565731719], [24.79492574541268, 9.810240916008693], [25.069603699343979, 10.27375996326799], [25.790633328413943, 10.411098940233726], [25.96230704962101, 10.136420986302422], [26.477328213242508, 9.552730334198086], [26.752006167173811, 9.466893473594492], [27.112520981708876, 9.638567194801622], [27.833550610778783, 9.604232450560287], [27.970889587744345, 9.398223985111654], [28.966597170745779, 9.398223985111654], [29.000931914987166, 9.604232450560287], [29.515953078608607, 9.793073543888053], [29.618957311332842, 10.084918869940223], [29.996639497988546, 10.290927335388684], [30.837840731903377, 9.707236683284519], [31.352861895524875, 9.810240916008693], [31.850715687025509, 10.531270545078822], [32.400071594888338, 11.080626452941486], [32.314234734284746, 11.681484477166519], [32.073891524594778, 11.973329803218517], [32.674749548819641, 12.024831919580716], [32.743419037302537, 12.24800775714999], [33.206938084561777, 12.179338268667093], [33.086766479716729, 11.441141267476493], [33.206938084561777, 10.720111638406591], [33.721959248183097, 10.325262079630191], [33.842130853028145, 9.981914637215992], [33.824963480907506, 9.48406084571536], [33.963392794971178, 9.464285229420623]]] } },
            { "type": "Feature", "properties": { "admin": "Senegal", "name": "Senegal", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[-16.713728807023468, 13.594958604379853], [-17.126106736712611, 14.373515733289221], [-17.625042690490655, 14.72954051356407], [-17.185172898822227, 14.91947724045286], [-16.700706346085919, 15.621527411354107], [-16.463098110407881, 16.135036119038457], [-16.120690070041928, 16.45566254319338], [-15.623666144258689, 16.369337063049809], [-15.135737270558813, 16.587282416240779], [-14.577347581428977, 16.598263658102805], [-14.099521450242175, 16.304302273010489], [-13.43573767745306, 16.039383042866188], [-12.830658331747513, 15.303691514542942], [-12.170750291380299, 14.616834214735503], [-12.124887457721256, 13.994727484589784], [-11.927716030311613, 13.422075100147392], [-11.553397793005427, 13.141213690641063], [-11.467899135778522, 12.754518947800973], [-11.513942836950587, 12.442987575729415], [-11.658300950557928, 12.386582749882834], [-12.20356482588563, 12.465647691289401], [-12.278599005573438, 12.354440008997285], [-12.499050665730561, 12.332089952031053], [-13.217818162478235, 12.575873521367964], [-13.700476040084322, 12.586182969610192], [-15.548476935274005, 12.628170070847343], [-15.816574266004251, 12.515567124883345], [-16.147716844130581, 12.547761542201185], [-16.67745195155457, 12.38485158940105], [-16.84152462408127, 13.151393947802557], [-15.931295945692208, 13.130284125211331], [-15.691000535534991, 13.270353094938455], [-15.511812506562931, 13.278569647672864], [-15.141163295949463, 13.509511623585235], [-14.712197231494626, 13.298206691943774], [-14.277701788784553, 13.28058502853224], [-13.844963344772404, 13.505041612191999], [-14.046992356817478, 13.794067898000446], [-14.376713833055785, 13.625680243377371], [-14.687030808968483, 13.63035696049978], [-15.081735398813816, 13.876491807505982], [-15.398770310924457, 13.860368760630916], [-15.624596320039936, 13.623587347869556], [-16.713728807023468, 13.594958604379853]]] } },
            { "type": "Feature", "properties": { "admin": "Solomon Islands", "name": "Solomon Is.", "continent": "Oceania" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[162.119024693040842, -10.482719008021133], [162.398645868172196, -10.826367282762119], [161.700032180018354, -10.820011081590222], [161.319796991214702, -10.204751478723123], [161.917383254237933, -10.446700534713653], [162.119024693040842, -10.482719008021133]]], [[[160.852228631837903, -9.872937106977002], [160.462588332357228, -9.89520964929484], [159.849447463214176, -9.794027194867367], [159.640002883135139, -9.639979750205269], [159.70294477766663, -9.242949720906777], [160.362956170898428, -9.400304457235533], [160.688517694337179, -9.610162448772808], [160.852228631837903, -9.872937106977002]]], [[[161.679981724289121, -9.599982191611373], [161.52939660059053, -9.784312025596433], [160.788253208660507, -8.917543226764918], [160.579997186524338, -8.320008640173965], [160.92002811100491, -8.320008640173965], [161.280006138349961, -9.120011488484449], [161.679981724289121, -9.599982191611373]]], [[[159.875027297198585, -8.337320244991714], [159.917401971677975, -8.538289890174864], [159.133677199539335, -8.114181410355398], [158.586113722974687, -7.754823500197713], [158.211149530264834, -7.421872246941147], [158.359977655265425, -7.320017998893915], [158.820001255527671, -7.56000335045739], [159.640002883135139, -8.020026950719567], [159.875027297198585, -8.337320244991714]]], [[[157.53842573468927, -7.347819919466928], [157.339419793933217, -7.404767347852554], [156.902030471014768, -7.176874281445391], [156.491357863591304, -6.765943291860394], [156.542827590153934, -6.599338474151478], [157.140000441718882, -7.021638278840653], [157.53842573468927, -7.347819919466928]]]] } },
            { "type": "Feature", "properties": { "admin": "Sierra Leone", "name": "Sierra Leone", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[-11.438779466182053, 6.785916856305746], [-11.708194545935736, 6.860098374860724], [-12.428098924193815, 7.262942002792029], [-12.949049038128193, 7.798645738145736], [-13.124025437868479, 8.163946438016977], [-13.246550258832512, 8.903048610871506], [-12.711957566773076, 9.342711696810765], [-12.596719122762206, 9.620188300001969], [-12.425928514037562, 9.835834051955953], [-12.150338100625003, 9.858571682164378], [-11.917277390988655, 10.046983954300556], [-11.117481248407328, 10.045872911006283], [-10.839151984083299, 9.688246161330367], [-10.622395188835037, 9.267910061068276], [-10.65477047366589, 8.977178452994194], [-10.494315151399629, 8.715540676300433], [-10.505477260774667, 8.348896389189603], [-10.230093553091276, 8.406205552601291], [-10.695594855176477, 7.939464016141085], [-11.14670427086838, 7.396706447779534], [-11.199801805048278, 7.105845648624735], [-11.438779466182053, 6.785916856305746]]] } },
            { "type": "Feature", "properties": { "admin": "El Salvador", "name": "El Salvador", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-87.793111131526558, 13.384480495655051], [-87.904112108089507, 13.149016831917134], [-88.483301561216791, 13.163951320849488], [-88.843227912129692, 13.259733588102474], [-89.256742723329282, 13.4585328231293], [-89.812393561547637, 13.520622056527994], [-90.095554572290951, 13.73533763270073], [-90.064677903996568, 13.881969509328924], [-89.7219339668207, 14.134228013561694], [-89.5342193265205, 14.244815578666302], [-89.587342698916544, 14.362586167859485], [-89.353325975282772, 14.424132798719112], [-89.058511929057644, 14.340029405164085], [-88.843072882832814, 14.140506700085169], [-88.541230841815974, 13.980154730683475], [-88.50399797234968, 13.845485948130854], [-88.065342576840123, 13.964625962779774], [-87.859515347021585, 13.893312486216979], [-87.723502977229387, 13.785050360565503], [-87.793111131526558, 13.384480495655051]]] } },
            { "type": "Feature", "properties": { "admin": "Somaliland", "name": "Somaliland", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[48.938129510296491, 9.451748968946672], [48.486735874226994, 8.837626247589979], [47.78942, 8.003], [46.948328484897942, 7.996876532417386], [43.67875, 9.183580000000116], [43.296975132018744, 9.540477403191742], [42.92812, 10.021940000000139], [42.55876, 10.572580000000126], [42.776851841000948, 10.926878566934416], [43.145304803242126, 11.462039699748853], [43.470659620951658, 11.27770986576388], [43.666668328634834, 10.864169216348158], [44.117803582542805, 10.445538438351603], [44.614259067570849, 10.442205308468941], [45.556940545439133, 10.698029486529775], [46.645401238802997, 10.816549383991171], [47.525657586462778, 11.127228094929986], [48.021596307167769, 11.193063869669741], [48.378783807169263, 11.375481675660122], [48.948206414593457, 11.410621649618516], [48.942005242718423, 11.394266058798163], [48.938491245322595, 10.982327378783451], [48.938232863161076, 9.973500067581481], [48.938129510296491, 9.451748968946672]]] } },
            { "type": "Feature", "properties": { "admin": "Somalia", "name": "Somalia", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[49.72862, 11.5789], [50.25878, 11.67957], [50.73202, 12.0219], [51.1112, 12.02464], [51.13387, 11.74815], [51.04153, 11.16651], [51.04531, 10.6409], [50.83418, 10.27972], [50.55239, 9.19874], [50.07092, 8.08173], [49.4527, 6.80466], [48.59455, 5.33911], [47.74079, 4.2194], [46.56476, 2.85529], [45.56399, 2.04576], [44.06815, 1.05283], [43.13597, 0.2922], [42.04157, -0.91916], [41.81095, -1.44647], [41.58513, -1.68325], [40.993, -0.85829], [40.98105, 2.78452], [41.855083092643966, 3.918911920483726], [42.12861, 4.23413], [42.76967, 4.25259], [43.66087, 4.95755], [44.9636, 5.00162], [47.78942, 8.003], [48.486735874226937, 8.837626247589993], [48.938129510296442, 9.451748968946616], [48.938232863161026, 9.973500067581508], [48.938491245322481, 10.982327378783465], [48.942005242718345, 11.394266058798136], [48.948204758509732, 11.410617281697961], [49.26776, 11.43033], [49.72862, 11.5789]]] } },
            { "type": "Feature", "properties": { "admin": "Republic of Serbia", "name": "Serbia", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[20.874312778413408, 45.416375433934306], [21.483526238702204, 45.181170152357865], [21.562022739353718, 44.768947251965635], [22.145087924902892, 44.478422349620573], [22.459022251075961, 44.702517198254426], [22.705725538837434, 44.578002834647002], [22.47400841644065, 44.409227606781762], [22.657149692483067, 44.234923000661347], [22.410446404721593, 44.008063462900047], [22.500156691180219, 43.642814439460999], [22.986018507588479, 43.211161200527094], [22.604801466571352, 42.898518785161109], [22.43659467946139, 42.580321153323943], [22.545011834409642, 42.461362006188025], [22.380525750424674, 42.320259507815074], [21.917080000000105, 42.30364], [21.576635989402117, 42.245224397061847], [21.54332, 42.32025], [21.66292, 42.43922], [21.77505, 42.6827], [21.63302, 42.67717], [21.43866, 42.86255], [21.27421, 42.90959], [21.143395, 43.068685000000123], [20.95651, 43.13094], [20.81448, 43.27205], [20.63508, 43.21671], [20.49679, 42.88469], [20.25758, 42.81275], [20.3398, 42.89852], [19.95857, 43.10604], [19.63, 43.213779970270522], [19.48389, 43.35229], [19.21852, 43.52384], [19.454, 43.568100000000115], [19.59976, 44.03847], [19.11761, 44.42307], [19.36803, 44.863], [19.00548, 44.86023], [19.390475701584588, 45.236515611342369], [19.072768995854172, 45.521511135432078], [18.82982, 45.90888], [19.596044549241636, 46.171729844744547], [20.22019249846289, 46.127468980486569], [20.76217492033998, 45.734573065771478], [20.874312778413408, 45.416375433934306]]] } },
            { "type": "Feature", "properties": { "admin": "Suriname", "name": "Suriname", "continent": "South America" }, "geometry": { "type": "Polygon", "coordinates": [[[-57.147436489476874, 5.973149929219161], [-55.949318406789786, 5.772877915872], [-55.841779751190408, 5.953125311706059], [-55.033250291551759, 6.025291449401662], [-53.958044603070888, 5.756548163267764], [-54.478632981979224, 4.896755682795585], [-54.3995422023565, 4.212611395683466], [-54.006930508018996, 3.620037746592558], [-54.181726040246261, 3.189779771330421], [-54.269705166223183, 2.732391669115046], [-54.524754197799709, 2.311848863123785], [-55.097587449755125, 2.523748073736612], [-55.569755011605984, 2.42150625244713], [-55.973322109589361, 2.510363877773016], [-56.073341844290283, 2.220794989425499], [-55.905600145070871, 2.021995754398659], [-55.995698004771739, 1.817667141116601], [-56.53938574891454, 1.89952260986692], [-57.150097825739898, 2.768926906745406], [-57.281433478409703, 3.333491929534119], [-57.601568976457848, 3.334654649260684], [-58.044694383360664, 4.060863552258382], [-57.860209520078691, 4.576801052260449], [-57.914288906472123, 4.812626451024413], [-57.307245856339492, 5.073566595882225], [-57.147436489476874, 5.973149929219161]]] } },
            { "type": "Feature", "properties": { "admin": "Slovakia", "name": "Slovakia", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[18.85314415861361, 49.496229763377634], [18.909574822676316, 49.435845852244562], [19.320712517990469, 49.571574001659179], [19.825022820726865, 49.217125352569219], [20.415839471119849, 49.431453355499755], [20.887955356538406, 49.328772284535823], [21.607808058364206, 49.470107326854077], [22.558137648211751, 49.08573802346713], [22.280841912533553, 48.825392157580659], [22.085608351334848, 48.422264309271782], [21.872236362401729, 48.319970811550007], [20.801293979584919, 48.62385407164237], [20.473562045989862, 48.562850043321809], [20.239054396249344, 48.327567247096916], [19.769470656013109, 48.2026911484636], [19.66136355965849, 48.266614895208647], [19.174364861739885, 48.111378892603859], [18.777024773847668, 48.081768296900627], [18.696512892336923, 47.88095368101439], [17.857132602620023, 47.758428860050365], [17.488472934649813, 47.867466132186209], [16.979666782304033, 48.123497015976298], [16.879982944412998, 48.470013332709463], [16.960288120194573, 48.596982326850593], [17.101984897538895, 48.8169688991171], [17.545006951577101, 48.800019029325362], [17.886484816161808, 48.903475246773695], [17.913511590250462, 48.996492824899072], [18.104972771891848, 49.043983466175298], [18.170498488037961, 49.271514797556421], [18.399993523846174, 49.315000515330034], [18.554971144289478, 49.495015367218777], [18.85314415861361, 49.496229763377634]]] } },
            { "type": "Feature", "properties": { "admin": "Slovenia", "name": "Slovenia", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[13.806475457421524, 46.509306138691201], [14.632471551174827, 46.431817328469535], [15.137091912504982, 46.658702704447016], [16.011663852612653, 46.683610744811688], [16.202298211337361, 46.852385972676949], [16.370504998447412, 46.841327216166498], [16.564808383864854, 46.503750922219822], [15.768732944408548, 46.238108222023442], [15.671529575267552, 45.834153550797865], [15.323953891672403, 45.731782538427673], [15.327674594797424, 45.452316392593218], [14.935243767972931, 45.471695054702671], [14.595109490627804, 45.6349409043127], [14.411968214585411, 45.466165676447446], [13.715059848697221, 45.500323798192369], [13.937630242578305, 45.591015936864608], [13.698109978905475, 46.016778062517339], [13.806475457421524, 46.509306138691201]]] } },
            { "type": "Feature", "properties": { "admin": "Sweden", "name": "Sweden", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[22.183173455501922, 65.723740546320158], [21.213516879977213, 65.02600535751526], [21.369631381930954, 64.413587958424273], [19.778875766690216, 63.609554348395022], [17.847779168375208, 62.749400132896803], [17.11955488451812, 61.341165676510954], [17.831346062906388, 60.636583360427394], [18.787721795332086, 60.081914374422581], [17.869224887776337, 58.95376618105869], [16.829185011470084, 58.719826972073385], [16.44770958829147, 57.041118069071871], [15.87978559740378, 56.104301866268649], [14.666681349352071, 56.20088511822216], [14.100721062891461, 55.407781073622637], [12.942910597392054, 55.361737372450563], [12.625100538797025, 56.307080186581956], [11.787942335668671, 57.441817125063061], [11.027368605196866, 58.856149400459344], [11.468271925511145, 59.432393296946024], [12.300365838274896, 60.117932847730025], [12.631146681375181, 61.293571682370121], [11.992064243221559, 61.800362453856543], [11.930569288794228, 63.128317572676963], [12.57993533697393, 64.066218980558318], [13.571916131248711, 64.049114081469696], [13.9199052263022, 64.445420640716065], [13.555689731509087, 64.7870276963815], [15.108411492582999, 66.19386688909546], [16.108712192456775, 67.302455552836875], [16.768878614985478, 68.013936672631388], [17.729181756265344, 68.010551866316263], [17.993868442464329, 68.567391262477344], [19.878559604581248, 68.407194322372561], [20.025268995857882, 69.065138658312691], [20.645592889089521, 69.106247260200846], [21.978534783626113, 68.616845608180682], [23.539473097434435, 67.936008612735236], [23.565879754335576, 66.396050930437411], [23.903378533633795, 66.006927395279604], [22.183173455501922, 65.723740546320158]]] } },
            { "type": "Feature", "properties": { "admin": "Swaziland", "name": "Swaziland", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[32.071665480281062, -26.733820082304902], [31.868060337051073, -27.17792734142127], [31.282773064913325, -27.285879408478991], [30.685961948374477, -26.743845310169526], [30.676608514129633, -26.398078301704604], [30.949666782359905, -26.022649021104144], [31.044079624157146, -25.731452325139436], [31.333157586397899, -25.660190525008943], [31.837777947728057, -25.843331801051342], [31.985779249811962, -26.29177988048022], [32.071665480281062, -26.733820082304902]]] } },
            { "type": "Feature", "properties": { "admin": "Syria", "name": "Syria", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[38.792340529136077, 33.378686428352218], [36.834062127435537, 32.312937526980768], [35.719918247222743, 32.709192409794859], [35.700797967274745, 32.716013698857374], [35.836396925608618, 32.868123277308506], [35.821100701650231, 33.277426459276292], [36.066460402172048, 33.824912421192543], [36.611750115715886, 34.201788641897174], [36.448194207512095, 34.59393524834406], [35.998402540843628, 34.644914048799997], [35.905023227692219, 35.410009467097318], [36.149762811026527, 35.821534735653664], [36.417550083163029, 36.040616970355053], [36.685389031731795, 36.259699205056457], [36.739494256341395, 36.817520453431079], [37.066761102045824, 36.623036200500614], [38.167727492024191, 36.901210435527766], [38.699891391765895, 36.712927354472335], [39.522580193852541, 36.716053778625984], [40.673259311695681, 37.091276353497285], [41.212089471203043, 37.074352321921687], [42.349591098811764, 37.22987254490409], [41.837064243340954, 36.605853786763568], [41.289707472505448, 36.358814602192261], [41.383965285005807, 35.628316555314349], [41.00615888851992, 34.419372260062111], [38.792340529136077, 33.378686428352218]]] } },
            { "type": "Feature", "properties": { "admin": "Chad", "name": "Chad", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[14.495787387762899, 12.859396267137353], [14.595781284247604, 13.330426947477859], [13.954476759505607, 13.353448798063765], [13.956698846094124, 13.996691189016925], [13.540393507550785, 14.36713369390122], [13.97217, 15.68437], [15.247731154041842, 16.627305813050778], [15.300441114979716, 17.927949937405], [15.68574059414777, 19.957180080642384], [15.90324669766431, 20.387618923417499], [15.487148064850143, 20.730414537025634], [15.47106, 21.04845], [15.096887648181847, 21.308518785074902], [14.8513, 22.862950000000119], [15.86085, 23.40972], [19.84926, 21.49509], [23.837660000000135, 19.580470000000101], [23.886890000000101, 15.61084], [23.02459, 15.68072], [22.567950000000106, 14.944290000000134], [22.30351, 14.32682], [22.51202, 14.09318], [22.18329, 13.78648], [22.29658, 13.37232], [22.03759, 12.95546], [21.93681, 12.588180000000133], [22.28801, 12.64605], [22.49762, 12.26024], [22.50869, 11.67936], [22.87622, 11.384610000000119], [22.864165480244246, 11.142395127807616], [22.231129184668756, 10.971888739460608], [21.723821648859538, 10.567055568885959], [21.000868361096305, 9.475985215691479], [20.059685499764267, 9.012706000194838], [19.094008009526071, 9.074846910025768], [18.81200971850927, 8.982914536978623], [18.911021762780589, 8.630894680206435], [18.389554884523303, 8.281303615751879], [17.964929640380884, 7.890914008002992], [16.705988396886365, 7.508327541529978], [16.4561845231874, 7.734773667832938], [16.290561557691884, 7.754307359239417], [16.106231723706738, 7.497087917506461], [15.279460483469164, 7.42192454673801], [15.436091749745737, 7.692812404811887], [15.120865512765302, 8.382150173369437], [14.979995558337688, 8.796104234243442], [14.544466586981851, 8.965861314322238], [13.954218377344088, 9.549494940626685], [14.17146609869911, 10.021378282100043], [14.627200555081057, 9.920919297724591], [14.909353875394796, 9.992129421422758], [15.46787275560524, 9.982336737503543], [14.923564894275042, 10.891325181517514], [14.960151808337679, 11.555574042197234], [14.89336, 12.21905], [14.495787387762899, 12.859396267137353]]] } },
            { "type": "Feature", "properties": { "admin": "Togo", "name": "Togo", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[1.865240512712318, 6.14215770102973], [1.060121697604927, 5.928837388528875], [0.836931186536333, 6.279978745952147], [0.570384148774849, 6.914358628767188], [0.490957472342245, 7.411744289576474], [0.712029249686878, 8.312464504423827], [0.461191847342121, 8.677222601756013], [0.365900506195885, 9.46500397382948], [0.367579990245389, 10.191212876827176], [-0.049784715159944, 10.706917832883928], [0.023802524423701, 11.018681748900802], [0.899563022474069, 10.997339382364258], [0.772335646171484, 10.470808213742357], [1.077795037448737, 10.175606594275022], [1.425060662450136, 9.825395412632998], [1.46304284018467, 9.334624335157086], [1.664477573258381, 9.128590399609378], [1.618950636409238, 6.832038072126236], [1.865240512712318, 6.14215770102973]]] } },
            { "type": "Feature", "properties": { "admin": "Thailand", "name": "Thailand", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[102.58493248902667, 12.186594956913279], [101.687157830819928, 12.645740057826568], [100.831809523524839, 12.627084865769204], [100.978467238369191, 13.412721665902563], [100.097797479251099, 13.406856390837429], [100.018732537844528, 12.307001044153353], [99.478920526123602, 10.846366685423545], [99.153772414143134, 9.963061428258554], [99.222398716226749, 9.239255479362425], [99.873831821698118, 9.207862046745118], [100.279646844486194, 8.29515289960605], [100.45927412313273, 7.429572658717175], [101.017327915452697, 6.856868597842476], [101.623079054778032, 6.740622463401918], [102.141186964936367, 6.221636053894626], [101.81428185425797, 5.810808417174242], [101.154218784593837, 5.691384182147713], [101.075515578213327, 6.20486705161592], [100.259596388756933, 6.642824815289542], [100.085756870527092, 6.46448944745029], [99.690690545655727, 6.848212795433595], [99.519641554769606, 7.343453884302759], [98.988252801512289, 7.907993068875325], [98.503786248775967, 8.382305202666286], [98.339661899816988, 7.794511623562384], [98.150009393305808, 8.350007432483876], [98.259150018306229, 8.973922837759799], [98.553550653073017, 9.932959906448543], [99.038120558673953, 10.960545762572435], [99.587286004639694, 11.892762762901695], [99.196353794351637, 12.804748439988666], [99.212011753336071, 13.269293728076462], [99.097755161538728, 13.827502549693275], [98.430819126379859, 14.622027696180831], [98.192074009191373, 15.123702500870349], [98.537375929765687, 15.308497422746081], [98.90334842325673, 16.177824204976115], [98.493761020911322, 16.837835598207928], [97.859122755934848, 17.567946071843657], [97.375896437573516, 18.445437730375811], [97.797782830804394, 18.627080389881751], [98.253723992915582, 19.708203029860041], [98.959675734454848, 19.752980658440944], [99.543309360759281, 20.186597601802056], [100.115987583417819, 20.41784963630818], [100.548881056726856, 20.109237982661124], [100.606293573003128, 19.508344427971217], [101.282014601651667, 19.462584947176762], [101.035931431077742, 18.408928330961611], [101.059547560635139, 17.512497259994486], [102.113591750092453, 18.109101670804161], [102.413004998791592, 17.932781683824281], [102.998705682387694, 17.961694647691598], [103.200192091893726, 18.309632066312769], [103.956476678485288, 18.240954087796872], [104.716947056092465, 17.428858954330078], [104.779320509868768, 16.441864935771445], [105.589038527450128, 15.570316066952856], [105.544338413517664, 14.723933620660414], [105.218776890078871, 14.27321177821069], [104.281418084736586, 14.416743068901363], [102.988422072361601, 14.225721136934464], [102.348099399833004, 13.39424734135822], [102.58493248902667, 12.186594956913279]]] } },
            { "type": "Feature", "properties": { "admin": "Tajikistan", "name": "Tajikistan", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[71.014198032520156, 40.244365546218226], [70.648018833299957, 39.935753892571157], [69.559609816368507, 40.103211371412968], [69.464886915977516, 39.526683254548693], [70.549161818325601, 39.604197902986492], [71.784693637991992, 39.279463202464363], [73.67537926625478, 39.431236884105594], [73.928852166646408, 38.505815334622724], [74.257514276022718, 38.606506862943441], [74.864815708316812, 38.378846340481587], [74.829985792952087, 37.990007025701388], [74.980002475895404, 37.419990139305888], [73.948695916646486, 37.421566270490786], [73.260055779924983, 37.495256862938994], [72.636889682917271, 37.047558091778349], [72.193040805962383, 36.94828766534566], [71.84463829945058, 36.738171291646914], [71.448693475230229, 37.065644843080513], [71.541917759084768, 37.905774441065631], [71.239403924448155, 37.953265082341879], [71.348131137990251, 38.258905341132156], [70.806820509732873, 38.486281643216408], [70.376304152309274, 38.138395901027515], [70.270574171840124, 37.73516469985401], [70.116578403610319, 37.588222764632086], [69.518785434857946, 37.608996690413413], [69.196272820924364, 37.15114350030742], [68.859445835245921, 37.344335842430588], [68.135562371701369, 37.023115139304302], [67.829999627559502, 37.144994004864678], [68.392032505165943, 38.157025254868728], [68.176025018185911, 38.901553453113898], [67.442219679641298, 39.140143541005479], [67.701428664017342, 39.580478420564518], [68.536416456989414, 39.533452867178923], [69.011632928345477, 40.086158148756653], [69.329494663372813, 40.727824408524839], [70.666622348925031, 40.960213324541407], [70.458159621059608, 40.49649485937028], [70.601406691372674, 40.218527330072284], [71.014198032520156, 40.244365546218226]]] } },
            { "type": "Feature", "properties": { "admin": "Turkmenistan", "name": "Turkmenistan", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[61.21081709172573, 35.650072333309218], [61.123070509694131, 36.491597194966239], [60.377637973883864, 36.52738312432836], [59.234761997316795, 37.412987982730336], [58.436154412678192, 37.522309475243794], [57.330433790928964, 38.029229437810933], [56.619366082592805, 38.121394354803478], [56.180374790273319, 37.935126654607423], [55.511578403551894, 37.964117133123153], [54.800303989486558, 37.392420762678178], [53.921597934795543, 37.198918361961255], [53.735511102112504, 37.906136176091685], [53.880928582581831, 38.952093003895349], [53.101027866432894, 39.290573635407121], [53.357808058491216, 39.975286363274442], [52.693972609269807, 40.033629055331964], [52.91525109234361, 40.87652334244472], [53.85813927594112, 40.631034450842165], [54.736845330632136, 40.951014919593455], [54.0083109881813, 41.551210842447404], [53.721713494690576, 42.123191433270016], [52.916749708880069, 41.868116563477322], [52.81468875510361, 41.135370591794704], [52.502459751196135, 41.783315538086356], [52.94429324729164, 42.116034247397586], [54.079417759014937, 42.324109402020817], [54.755345493392625, 42.04397146256656], [55.455251092353755, 41.259859117185826], [55.968191359282898, 41.308641669269356], [57.096391229079089, 41.32231008561056], [56.93221520368779, 41.82602610937559], [57.786529982337065, 42.170552883465511], [58.629010857991453, 42.751551011723045], [59.976422153569771, 42.223081976890199], [60.083340691981654, 41.425146185871391], [60.46595299667068, 41.22032664648254], [61.547178989513547, 41.2663703476546], [61.882714064384679, 41.084856879229392], [62.374260288344992, 40.053886216790382], [63.518014764261018, 39.363256537425627], [64.170223016216752, 38.892406724598231], [65.215998976507379, 38.402695013984292], [66.546150343700205, 37.974684963526855], [66.518606805288655, 37.362784328758785], [66.217384881459324, 37.393790188133913], [65.745630731066811, 37.661164048812061], [65.588947788357828, 37.305216783185628], [64.746105177677393, 37.111817735333297], [64.546479119733888, 36.31207326918426], [63.982895949158696, 36.007957465146596], [63.193538445900337, 35.857165635718907], [62.984662306576588, 35.404040839167614], [62.230651483005879, 35.270663967422287], [61.21081709172573, 35.650072333309218]]] } },
            { "type": "Feature", "properties": { "admin": "East Timor", "name": "Timor-Leste", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[124.96868248911619, -8.892790215697081], [125.086246372580248, -8.656887302284678], [125.947072381698234, -8.432094821815033], [126.64470421763852, -8.39824675866385], [126.957243280139792, -8.273344821814396], [127.335928175974615, -8.397316582882601], [126.967991978056517, -8.668256117388891], [125.925885044458568, -9.106007175333351], [125.088520135601073, -9.393173109579292], [125.070019972840583, -9.08998748132287], [124.96868248911619, -8.892790215697081]]] } },
            { "type": "Feature", "properties": { "admin": "Trinidad and Tobago", "name": "Trinidad and Tobago", "continent": "North America" }, "geometry": { "type": "Polygon", "coordinates": [[[-61.68, 10.76], [-61.105, 10.89], [-60.895, 10.855], [-60.935, 10.11], [-61.77, 10.0], [-61.95, 10.09], [-61.66, 10.365], [-61.68, 10.76]]] } },
            { "type": "Feature", "properties": { "admin": "Tunisia", "name": "Tunisia", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[9.482139926805273, 30.307556057246181], [9.055602654668148, 32.102691962201284], [8.439102817426116, 32.506284898400814], [8.430472853233367, 32.748337307255944], [7.612641635782181, 33.344114895148955], [7.524481642292242, 34.097376410451453], [8.140981479534302, 34.655145982393783], [8.376367628623766, 35.479876003555937], [8.217824334352313, 36.433176988260271], [8.420964389691674, 36.946427313783154], [9.509993523810605, 37.349994411766531], [10.210002475636315, 37.230001735984807], [10.180650262094529, 36.724037787415071], [11.028867221733348, 37.09210317641395], [11.100025668999249, 36.899996039368908], [10.600004510143092, 36.410000108377368], [10.593286573945134, 35.947444362932806], [10.939518670300686, 35.698984076473486], [10.807847120821007, 34.833507188449182], [10.149592726287123, 34.330773016897702], [10.339658644256613, 33.785741685515312], [10.856836378633684, 33.768740139291275], [11.108500603895118, 33.293342800422188], [11.488787469131008, 33.136995754523134], [11.432253452203692, 32.368903103152867], [10.944789666394453, 32.081814683555358], [10.636901482799484, 31.761420803345747], [9.950225050505081, 31.376069647745251], [10.056575148161752, 30.961831366493595], [9.97001712407285, 30.539324856075236], [9.482139926805273, 30.307556057246181]]] } },
            { "type": "Feature", "properties": { "admin": "Turkey", "name": "Turkey", "continent": "Asia" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[36.913127068842151, 41.335358384764291], [38.347664829264502, 40.948586127275711], [39.512606642420238, 41.102762763018561], [40.373432651538245, 41.013672593747337], [41.554084100110707, 41.535656236327604], [42.619548781104548, 41.58317271581992], [43.582745802592704, 41.09214325618256], [43.752657911968491, 40.740200914058811], [43.656436395040963, 40.253563951166157], [44.400008579288759, 40.005000311842302], [44.79398969908199, 39.713002631177027], [44.109225294782355, 39.428136298168049], [44.421402622257595, 38.281281236314513], [44.225755649600522, 37.971584377589345], [44.772699008977739, 37.170444647768441], [44.293451775902852, 37.001514390606353], [43.942258742047343, 37.256227525372928], [42.77912560402185, 37.385263576805798], [42.349591098811764, 37.229872544904104], [41.212089471203015, 37.074352321921729], [40.673259311695702, 37.091276353497356], [39.522580193852512, 36.716053778626012], [38.699891391765917, 36.712927354472313], [38.167727492024156, 36.90121043552778], [37.066761102045824, 36.623036200500614], [36.739494256341366, 36.817520453431108], [36.685389031731816, 36.259699205056499], [36.417550083163086, 36.040616970355096], [36.149762811026584, 35.821534735653664], [35.782084995269848, 36.274995429014915], [36.160821567537049, 36.650605577128367], [35.550936313628334, 36.565442816711325], [34.714553256984367, 36.795532131490909], [34.026894972476455, 36.219960028623966], [32.509158156064096, 36.107563788389193], [31.69959516777956, 36.644275214172602], [30.621624790171062, 36.677864895162308], [30.391096225717114, 36.262980658506983], [29.69997562024556, 36.144357408181001], [28.732902866335387, 36.676831366516431], [27.641186557737363, 36.658822129862749], [27.048767937943289, 37.653360907536005], [26.318218214633042, 38.208133246405382], [26.804700148228726, 38.985760199533551], [26.170785353304375, 39.463612168936457], [27.280019972449388, 40.420013739578302], [28.819977654747209, 40.460011298172212], [29.240003696415574, 41.219990749672682], [31.145933872204434, 41.087621568357058], [32.347979363745786, 41.736264146484629], [33.513282911927512, 42.018960069337304], [35.167703891751863, 42.040224921225438], [36.913127068842151, 41.335358384764291]]], [[[27.192376743282406, 40.690565700842448], [26.358009067497782, 40.151993923496477], [26.043351271272535, 40.617753607743161], [26.056942172965332, 40.824123440100735], [26.294602085075692, 40.936261298174166], [26.604195590936282, 41.562114569661013], [26.117041863720825, 41.826904608724554], [27.135739373490505, 42.141484890301307], [27.996720411905407, 42.007358710287768], [28.115524529744441, 41.622886054036279], [28.988442824018779, 41.299934190428175], [28.806438429486743, 41.05496206314853], [27.619017368284112, 40.999823309893102], [27.192376743282406, 40.690565700842448]]]] } },
            { "type": "Feature", "properties": { "admin": "Taiwan", "name": "Taiwan", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[121.777817824389899, 24.394273586519393], [121.175632358892713, 22.790857245367164], [120.747079705896198, 21.970571397382106], [120.220083449383651, 22.814860948166732], [120.106188592612369, 23.556262722258229], [120.694679803552233, 24.53845083261373], [121.49504438688875, 25.295458889257379], [121.951243931161429, 24.997595933527034], [121.777817824389899, 24.394273586519393]]] } },
            { "type": "Feature", "properties": { "admin": "United Republic of Tanzania", "name": "Tanzania", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[33.903711197104592, -0.95], [34.07262, -1.05982], [37.69869, -3.09699], [37.7669, -3.67712], [39.20222, -4.67677], [38.74054, -5.90895], [38.79977, -6.47566], [39.44, -6.84], [39.470000000000134, -7.1], [39.19469, -7.7039], [39.25203, -8.00781], [39.18652, -8.48551], [39.53574, -9.112369999999883], [39.9496, -10.0984], [40.31659, -10.317099999999867], [39.521, -10.89688], [38.427556593587767, -11.285202325081626], [37.82764, -11.26879], [37.47129, -11.56876], [36.775150994622884, -11.59453744878078], [36.514081658684397, -11.720938002166745], [35.312397902169145, -11.439146416879165], [34.559989047999451, -11.520020033415845], [34.28, -10.16], [33.940837724096518, -9.693673841980283], [33.73972, -9.41715], [32.759375441221373, -9.230599053589001], [32.191864861791935, -8.930358981973255], [31.556348097466628, -8.762048841998647], [31.157751336950064, -8.594578747317312], [30.74, -8.34], [30.2, -7.08], [29.62, -6.52], [29.419992710088305, -5.939998874539297], [29.519986606573063, -5.419978936386257], [29.339997592900367, -4.499983412294113], [29.753512404099858, -4.452389418153301], [30.11632, -4.09012], [30.50554, -3.56858], [30.75224, -3.35931], [30.74301, -3.03431], [30.52766, -2.80762], [30.46967, -2.41383], [30.758308953583132, -2.287250257988375], [30.816134881317844, -1.698914076345374], [30.419104852019291, -1.134659112150416], [30.769860000000101, -1.01455], [31.86617, -1.02736], [33.903711197104592, -0.95]]] } },
            { "type": "Feature", "properties": { "admin": "Uganda", "name": "Uganda", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[31.86617, -1.02736], [30.769860000000101, -1.01455], [30.419104852019291, -1.134659112150416], [29.821518588996121, -1.443322442229771], [29.579466180141019, -1.341313164885605], [29.587837762172164, -0.587405694179381], [29.8195, -0.2053], [29.875778842902431, 0.597379868976361], [30.086153598762785, 1.062312730306416], [30.468507521290285, 1.583805446779706], [30.852670118948133, 1.849396470543752], [31.174149204235952, 2.204465236821306], [30.77332, 2.339890000000139], [30.83385, 3.50917], [31.24556, 3.7819], [31.88145, 3.55827], [32.68642, 3.79232], [33.39, 3.79], [34.005, 4.249884947362147], [34.47913, 3.5556], [34.59607, 3.053740000000118], [35.03599, 1.90584], [34.6721, 1.17694], [34.18, 0.515], [33.893568969666994, 0.109813537861839], [33.903711197104592, -0.95], [31.86617, -1.02736]]] } },
            { "type": "Feature", "properties": { "admin": "Ukraine", "name": "Ukraine", "continent": "Europe" }, "geometry": { "type": "Polygon", "coordinates": [[[31.78599816257158, 52.10167796488544], [32.159412062312661, 52.061266994833204], [32.412058139787625, 52.288694973349735], [32.715760532366964, 52.238465481162038], [33.7526998227357, 52.335074571331681], [34.391730584457001, 51.768881740925778], [34.141978387190385, 51.566413479206226], [34.22481570815426, 51.255993150428942], [35.022183058417873, 51.207572333371445], [35.377923618315116, 50.773955390010343], [35.35611616388794, 50.577197374059054], [36.62616784032533, 50.225590928745127], [37.393459506995065, 50.383953355503586], [38.01063113785689, 49.915661526074622], [38.59498823421341, 49.926461900423618], [40.069058465339097, 49.601055406281688], [40.080789015469342, 49.307429917999272], [39.674663934087526, 48.783818467801872], [39.895632358567575, 48.232405097031425], [39.738277622238819, 47.898937079451983], [38.770584751141186, 47.825608222029807], [38.255112339029743, 47.546400458356807], [38.223538038899413, 47.102189846375872], [37.42513715998998, 47.022220567404197], [36.759854770664383, 46.698700263040919], [35.823684523264816, 46.645964463887054], [34.962341749823871, 46.273196519549636], [35.020787794745978, 45.65121898048465], [35.51000857925316, 45.409993394546177], [36.529997999830151, 45.46998973243705], [36.334712762199146, 45.113215643893952], [35.239999220528112, 44.939996242851599], [33.882511020652878, 44.361478583344066], [33.326420932760037, 44.564877020844875], [33.546924269349446, 45.034770819674883], [32.454174432105496, 45.327466132176063], [32.630804477679128, 45.519185695978905], [33.588162062318382, 45.851568508480227], [33.298567335754704, 46.08059845639783], [31.744140252415171, 46.333347886737378], [31.675307244602401, 46.706245022155528], [30.748748813609094, 46.583100084003995], [30.37760867688888, 46.032410183285663], [29.603289015427425, 45.293308010431119], [29.149724969201646, 45.464925442072442], [28.679779493939371, 45.30403087013169], [28.233553501099035, 45.488283189468369], [28.48526940279276, 45.596907050145887], [28.659987420371575, 45.939986884131628], [28.933717482221621, 46.258830471372491], [28.862972446414055, 46.437889309263824], [29.072106967899288, 46.517677720722482], [29.170653924279879, 46.379262396828693], [29.759971958136383, 46.349987697935354], [30.024658644335364, 46.423936672545032], [29.838210076626289, 46.525325832701675], [29.908851759569295, 46.67436066343145], [29.559674106573105, 46.928582872091312], [29.415135125452732, 47.346645209332571], [29.050867954227321, 47.510226955752493], [29.122698195113024, 47.849095160506458], [28.670891147585163, 48.118148505234089], [28.259546746541837, 48.155562242213406], [27.52253746919515, 48.467119452501102], [26.857823520624798, 48.368210761094488], [26.619336785597788, 48.220726223333457], [26.197450392366925, 48.220881252630342], [25.945941196402394, 47.987148749374207], [25.207743361112986, 47.891056423527459], [24.866317172960571, 47.737525743188307], [24.402056105250374, 47.981877753280422], [23.760958286237404, 47.985598456405448], [23.142236362406798, 48.096341050806942], [22.710531447040488, 47.882193915389394], [22.640819939878746, 48.150239569687351], [22.085608351334848, 48.422264309271782], [22.280841912533553, 48.825392157580659], [22.558137648211751, 49.08573802346713], [22.776418898212619, 49.027395331409608], [22.518450148211596, 49.476773586619736], [23.426508416444388, 50.308505764357449], [23.922757195743259, 50.424881089878738], [24.029985792748899, 50.705406602575174], [23.52707075368437, 51.578454087930233], [24.005077752384206, 51.617443956094448], [24.553106316839511, 51.888461005249177], [25.327787713327005, 51.910656032918538], [26.337958611768549, 51.832288723347915], [27.454066196408426, 51.59230337178446], [28.241615024536564, 51.572227077839059], [28.617612745892242, 51.427713934934836], [28.992835320763522, 51.602044379271462], [29.254938185347921, 51.368234361366881], [30.157363722460889, 51.416138414101454], [30.55511722181145, 51.319503485715643], [30.619454380014837, 51.822806098022362], [30.927549269338975, 52.042353420614383], [31.78599816257158, 52.10167796488544]]] } },
            { "type": "Feature", "properties": { "admin": "Uruguay", "name": "Uruguay", "continent": "South America" }, "geometry": { "type": "Polygon", "coordinates": [[[-57.625133429582945, -30.216294854454258], [-56.976025763564721, -30.109686374636119], [-55.97324459494093, -30.883075860316296], [-55.601510179249331, -30.853878676071385], [-54.572451544805105, -31.494511407193745], [-53.787951626182185, -32.047242526987617], [-53.209588995971529, -32.727666110974717], [-53.650543992718084, -33.202004082981823], [-53.373661668498229, -33.768377780900757], [-53.806425950726521, -34.396814874002224], [-54.935866054897716, -34.952646579733617], [-55.674089728403274, -34.752658786764066], [-56.215297003796053, -34.85983570733741], [-57.139685024633096, -34.430456231424238], [-57.817860683815489, -34.462547295877492], [-58.427074144104381, -33.909454441057569], [-58.349611172098854, -33.2631889788154], [-58.132647671121433, -33.040566908502008], [-58.142440355040748, -32.044503676076147], [-57.874937303281875, -31.016556084926201], [-57.625133429582945, -30.216294854454258]]] } },
            { "type": "Feature", "properties": { "admin": "United States of America", "name": "United States", "continent": "North America" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-155.54211, 19.08348], [-155.68817, 18.91619], [-155.93665, 19.05939], [-155.90806, 19.33888], [-156.07347, 19.70294], [-156.02368, 19.81422], [-155.85008, 19.97729], [-155.91907, 20.17395], [-155.86108, 20.26721], [-155.78505, 20.2487], [-155.40214, 20.07975], [-155.22452, 19.99302], [-155.06226, 19.8591], [-154.80741, 19.50871], [-154.83147, 19.45328], [-155.222169999999892, 19.23972], [-155.54211, 19.08348]]], [[[-156.07926, 20.64397], [-156.41445, 20.57241], [-156.58673, 20.783], [-156.70167, 20.8643], [-156.71055, 20.92676], [-156.61258, 21.01249], [-156.25711, 20.91745], [-155.99566, 20.76404], [-156.07926, 20.64397]]], [[[-156.75824, 21.17684], [-156.78933, 21.06873], [-157.32521, 21.09777], [-157.25027, 21.21958], [-156.75824, 21.17684]]], [[[-157.65283, 21.32217], [-157.70703, 21.26442], [-157.7786, 21.27729], [-158.12667, 21.31244], [-158.2538, 21.53919], [-158.29265, 21.57912], [-158.0252, 21.71696], [-157.94161, 21.65272], [-157.65283, 21.32217]]], [[[-159.34512, 21.982], [-159.46372, 21.88299], [-159.80051, 22.06533], [-159.74877, 22.1382], [-159.5962, 22.23618], [-159.36569, 22.21494], [-159.34512, 21.982]]], [[[-94.81758, 49.38905], [-94.639999999999858, 48.840000000000103], [-94.32914, 48.67074], [-93.63087, 48.60926], [-92.61, 48.45], [-91.64, 48.14], [-90.829999999999856, 48.27], [-89.6, 48.01], [-89.272917446636654, 48.019808254582834], [-88.378114183286513, 48.302917588893806], [-87.439792623300207, 47.94], [-86.461990831228135, 47.553338019392037], [-85.652363247403215, 47.220218817730498], [-84.876079881514855, 46.900083319682366], [-84.779238247399817, 46.637101955749117], [-84.54374874544564, 46.538684190449224], [-84.6049, 46.4396], [-84.3367, 46.408770000000104], [-84.142119513673279, 46.512225857115723], [-84.091851264161463, 46.275418606138253], [-83.890765347005654, 46.116926988299149], [-83.616130947590491, 46.116926988299149], [-83.469550747394621, 45.994686387712584], [-83.592850714843067, 45.816893622412543], [-82.550924648758169, 45.347516587905446], [-82.337763125431053, 44.44], [-82.137642381503952, 43.571087551439987], [-82.43, 42.98], [-82.899999999999878, 42.430000000000135], [-83.119999999999877, 42.08], [-83.141999681312555, 41.975681057292995], [-83.029810146806909, 41.832795722005997], [-82.690089280920162, 41.675105088867319], [-82.439277716791608, 41.675105088867319], [-81.277746548167059, 42.209025987306845], [-80.247447679347843, 42.36619985612267], [-78.939362148743683, 42.863611355148116], [-78.92, 42.965], [-79.009999999999863, 43.27], [-79.171673550111862, 43.466339423184301], [-78.720279914042365, 43.625089423184953], [-77.737885097957601, 43.629055589363382], [-76.820034145805565, 43.628784288093748], [-76.5, 44.018458893758599], [-76.375, 44.09631], [-75.31821, 44.81645000000016], [-74.867, 45.00048000000011], [-73.347829999999874, 45.00738], [-71.505059999999858, 45.0082], [-71.405, 45.255000000000123], [-71.08482, 45.305240000000154], [-70.659999999999783, 45.46], [-70.305, 45.915], [-69.99997, 46.69307], [-69.237216, 47.447781], [-68.905, 47.185], [-68.23444, 47.35486], [-67.79046, 47.06636], [-67.79134, 45.702810000000134], [-67.13741, 45.13753], [-66.96466, 44.809700000000149], [-68.03252, 44.3252], [-69.059999999999874, 43.98], [-70.116169999999897, 43.684050000000141], [-70.645475633410967, 43.090238348964043], [-70.81489, 42.8653], [-70.825, 42.335], [-70.494999999999891, 41.805], [-70.08, 41.78], [-70.185, 42.145], [-69.88497, 41.922830000000111], [-69.96503, 41.637170000000161], [-70.64, 41.475], [-71.12039, 41.494450000000164], [-71.859999999999829, 41.32], [-72.295, 41.27], [-72.87643, 41.22065], [-73.71, 40.931102351654481], [-72.24126, 41.119480000000138], [-71.944999999999808, 40.93], [-73.345, 40.63], [-73.982, 40.628], [-73.952325, 40.75075], [-74.25671, 40.47351], [-73.96244, 40.42763], [-74.17838, 39.70926], [-74.90604, 38.93954], [-74.98041, 39.1964], [-75.20002, 39.24845], [-75.52805, 39.4985], [-75.32, 38.96], [-75.071834764789784, 38.782032230179276], [-75.05673, 38.404120000000106], [-75.37747, 38.01551], [-75.94023, 37.21689], [-76.03127, 37.2566], [-75.722049999999783, 37.937050000000106], [-76.23287, 38.319215], [-76.35, 39.15], [-76.542725, 38.717615], [-76.32933, 38.08326], [-76.98999793161353, 38.239991766913384], [-76.301619999999886, 37.917945], [-76.25874, 36.9664000000001], [-75.9718, 36.89726], [-75.868039999999809, 36.55125], [-75.72749, 35.550740000000125], [-76.36318, 34.808540000000129], [-77.39763499999988, 34.51201], [-78.05496, 33.92547], [-78.554349999999815, 33.861330000000116], [-79.06067, 33.49395], [-79.20357, 33.15839], [-80.301325, 32.509355], [-80.86498, 32.0333], [-81.33629, 31.44049], [-81.49042, 30.729990000000122], [-81.31371, 30.03552], [-80.98, 29.18000000000011], [-80.53558499999987, 28.47213], [-80.529999999999774, 28.04], [-80.056539284977532, 26.88000000000013], [-80.088015, 26.205765], [-80.131559999999837, 25.816775], [-80.38103, 25.20616], [-80.679999999999879, 25.08], [-81.17213, 25.201260000000126], [-81.33, 25.64], [-81.709999999999795, 25.87], [-82.239999999999895, 26.730000000000125], [-82.70515, 27.49504], [-82.85526, 27.88624], [-82.65, 28.550000000000146], [-82.929999999999865, 29.100000000000129], [-83.70959, 29.93656], [-84.1, 30.090000000000114], [-85.10882, 29.63615], [-85.28784, 29.686120000000127], [-85.7731, 30.152610000000116], [-86.399999999999878, 30.400000000000112], [-87.530359999999831, 30.27433], [-88.41782, 30.3849], [-89.180489999999836, 30.31598], [-89.593831178419748, 30.159994004836843], [-89.413735, 29.89419], [-89.43, 29.48864], [-89.21767, 29.29108], [-89.40823, 29.15961], [-89.77928, 29.307140000000135], [-90.15463, 29.11743], [-90.880224999999896, 29.148535000000116], [-91.626784999999842, 29.677000000000127], [-92.49906, 29.5523], [-93.22637, 29.78375], [-93.84842, 29.71363], [-94.69, 29.480000000000125], [-95.60026, 28.73863], [-96.59404, 28.30748], [-97.139999999999802, 27.83], [-97.37, 27.38], [-97.379999999999853, 26.69], [-97.33, 26.210000000000115], [-97.139999999999802, 25.87], [-97.529999999999859, 25.84], [-98.239999999999895, 26.060000000000109], [-99.019999999999854, 26.37], [-99.3, 26.84], [-99.52, 27.54], [-100.11, 28.11000000000012], [-100.45584, 28.696120000000118], [-100.957599999999886, 29.380710000000125], [-101.6624, 29.779300000000113], [-102.48, 29.76], [-103.11, 28.97], [-103.94, 29.27], [-104.456969999999814, 29.57196], [-104.705749999999895, 30.12173], [-105.03737, 30.64402], [-105.63159, 31.083830000000113], [-106.1429, 31.39995], [-106.507589999999794, 31.75452], [-108.24, 31.754853718166398], [-108.24194, 31.34222], [-109.035, 31.341940000000161], [-111.02361, 31.33472], [-113.30498, 32.03914], [-114.815, 32.52528], [-114.721389999999829, 32.72083], [-115.991349999999869, 32.61239000000014], [-117.127759999999753, 32.53534], [-117.295937691273863, 33.04622461520389], [-117.944, 33.621236431201389], [-118.410602275897475, 33.740909223124497], [-118.519894822799685, 34.027781577575745], [-119.081, 34.078], [-119.438840642016658, 34.348477178284291], [-120.36778, 34.44711], [-120.62286, 34.60855], [-120.74433, 35.156860000000101], [-121.714569999999853, 36.16153], [-122.54747, 37.551760000000101], [-122.51201, 37.783390000000132], [-122.95319, 38.113710000000104], [-123.7272, 38.951660000000111], [-123.865169999999878, 39.766990000000128], [-124.39807, 40.3132], [-124.17886, 41.142020000000109], [-124.2137, 41.999640000000134], [-124.532839999999894, 42.76599], [-124.14214, 43.70838], [-124.020535, 44.615895], [-123.898929999999893, 45.52341], [-124.079635, 46.86475], [-124.395669999999896, 47.72017], [-124.687210083007812, 48.184432983398537], [-124.566101074218736, 48.379714965820384], [-123.12, 48.04], [-122.587359999999876, 47.096], [-122.34, 47.36], [-122.5, 48.18], [-122.84, 49.0], [-120.0, 49.0], [-117.03121, 49.0], [-116.04818, 49.0], [-112.999999999999872, 49.0], [-110.049999999999812, 49.0], [-107.049999999999898, 49.0], [-104.04826, 48.99986], [-100.65, 49.0], [-97.228720000004699, 49.0007], [-95.159069509171943, 49.0], [-95.15609, 49.38425], [-94.81758, 49.38905]]], [[[-153.006314053336837, 57.115842190165878], [-154.0050902984581, 56.734676825581047], [-154.516402757770067, 56.992748928446687], [-154.670992804971092, 57.461195787172493], [-153.762779507441451, 57.816574612043773], [-153.228729417921073, 57.968968410872421], [-152.564790615835108, 57.901427313866961], [-152.141147223906273, 57.591058661521977], [-153.006314053336837, 57.115842190165878]]], [[[-165.579164191733554, 59.909986884187539], [-166.192770148767238, 59.754440822988961], [-166.848337368821944, 59.941406155020942], [-167.455277066090048, 60.213069159579376], [-166.467792121424566, 60.384169826897775], [-165.674429694663644, 60.293606879306232], [-165.579164191733554, 59.909986884187539]]], [[[-171.731656867539357, 63.782515367275906], [-171.114433560245175, 63.592191067144981], [-170.491112433940657, 63.694975490973505], [-169.682505459653555, 63.431115627691142], [-168.689439460300662, 63.297506212000584], [-168.77194088445458, 63.188598130945437], [-169.529439867204985, 62.976931464277882], [-170.290556200215917, 63.194437567794452], [-170.671385667990847, 63.375821845138965], [-171.553063117538642, 63.317789211675077], [-171.791110602891166, 63.40584585230048], [-171.731656867539357, 63.782515367275906]]], [[[-155.067790290324211, 71.147776394323685], [-154.344165208941206, 70.696408596470192], [-153.900006273392563, 70.889988511835682], [-152.210006069935275, 70.829992173944831], [-152.270002407826127, 70.60000621202984], [-150.739992438744508, 70.430016588005699], [-149.720003018167489, 70.530010484490433], [-147.613361579357047, 70.214034939241785], [-145.689989800225248, 70.120009670686741], [-144.920010959076393, 69.989991767040479], [-143.58944618042517, 70.152514146598307], [-142.072510348713365, 69.851938178172631], [-140.985987521560702, 69.711998399526365], [-140.985988329004869, 69.711998399526365], [-140.992498752029377, 66.000028591568665], [-140.997769748123119, 60.306396796298593], [-140.012997816153074, 60.276837877027575], [-139.03900042031583, 60.000007229240012], [-138.340889999999888, 59.562110000000146], [-137.4525, 58.905000000000101], [-136.47972, 59.46389], [-135.47583, 59.78778], [-134.945, 59.270560000000117], [-134.27111, 58.86111], [-133.355548882207188, 58.410285142645151], [-132.73042, 57.692890000000105], [-131.707809999999853, 56.55212], [-130.00778, 55.91583], [-129.979994263358265, 55.284997870497207], [-130.536110189467223, 54.802753404349389], [-131.08581823797212, 55.178906155002025], [-131.967211467142278, 55.497775580459049], [-132.250010742859445, 56.369996242897443], [-133.539181084356386, 57.178887437562125], [-134.07806292029602, 58.123067531966889], [-135.038211032279037, 58.187714748763931], [-136.628062309954629, 58.212209377670447], [-137.800006279686016, 58.499995429103777], [-139.867787041412981, 59.537761542389134], [-140.825273817133024, 59.72751740176507], [-142.574443535564427, 60.084446519604981], [-143.958880994879848, 59.99918040632339], [-145.925556816827822, 60.458609727614274], [-147.114373949146625, 60.884656073644628], [-148.224306200127643, 60.672989406977152], [-148.018065558850736, 59.978328965893631], [-148.570822516860858, 59.914172675203297], [-149.727857835875824, 59.705658270905545], [-150.608243374616421, 59.368211168039487], [-151.716392788683294, 59.155821031319974], [-151.859433153267105, 59.74498403587959], [-151.40971900124714, 60.725802720779392], [-150.346941494732505, 61.033587551509854], [-150.621110806256951, 61.284424953854447], [-151.895839199816834, 60.727197984451273], [-152.578329841095581, 60.061657212964285], [-154.019172126257558, 59.350279446034264], [-153.287511359653166, 58.864727688219787], [-154.232492438758442, 58.146373602930531], [-155.307491421510207, 57.727794501366319], [-156.308334723923082, 57.422774359763636], [-156.556097378546298, 56.979984849670636], [-158.117216559867728, 56.463608099994175], [-158.433321296197136, 55.994153550838533], [-159.603327399717415, 55.566686102920116], [-160.289719611634183, 55.643580634170561], [-161.223047655257773, 55.364734605523481], [-162.23776607974105, 55.024186916720097], [-163.069446581046378, 54.689737046927171], [-164.785569221027174, 54.40417308208216], [-164.942226325520011, 54.572224839895327], [-163.84833960676562, 55.039431464246107], [-162.870001390615897, 55.348043117893198], [-161.804174974596009, 55.894986477270429], [-160.563604702781134, 56.008054511125025], [-160.070559862284483, 56.418055324928744], [-158.684442918919416, 57.016675116597852], [-158.461097378553944, 57.216921291728866], [-157.722770352183858, 57.570000515363056], [-157.550274421193564, 58.328326321030218], [-157.041674974576949, 58.918884589261708], [-158.194731208305427, 58.615802313869828], [-158.517217984023034, 58.787781480537305], [-159.058606126928709, 58.424186102931671], [-159.711667040017318, 58.931390285876333], [-159.981288825500144, 58.572549140041623], [-160.355271165996498, 59.071123358793628], [-161.355003425115001, 58.670837714260742], [-161.968893602526293, 58.671664537177371], [-162.054986538724648, 59.266925360747436], [-161.874170702135331, 59.633621324290587], [-162.518059048492034, 59.989723619213905], [-163.818341437820123, 59.798055731843377], [-164.662217577146407, 60.267484442782639], [-165.346387702474772, 60.507495632562396], [-165.350831875651835, 61.073895168697497], [-166.121379157555907, 61.500019029376212], [-165.734451870770471, 62.074996853271792], [-164.919178636717788, 62.633076483807919], [-164.562507901039339, 63.146378485763044], [-163.753332485996964, 63.219448961023758], [-163.067224494457832, 63.05945872664801], [-162.260555386381697, 63.541935736741159], [-161.534449836248569, 63.455816962326757], [-160.772506680321101, 63.76610810002326], [-160.958335130842528, 64.222798570402759], [-161.518068407212184, 64.402787584075313], [-160.777777676414729, 64.788603827566405], [-161.391926235987597, 64.777235012462327], [-162.453050096668818, 64.559444688568206], [-162.757786017894034, 64.338605455168803], [-163.54639421288428, 64.559160468190484], [-164.960829841145141, 64.446945095468848], [-166.425288255864473, 64.686672064870706], [-166.845004238939026, 65.088895575614529], [-168.110560065767146, 65.669997056736733], [-166.70527116602193, 66.088317776139391], [-164.474709642575448, 66.576660061297488], [-163.652511766595637, 66.576660061297488], [-163.788601651036117, 66.077207343196662], [-161.677774421210131, 66.116119696712403], [-162.489714525379981, 66.735565090595102], [-163.719716966791083, 67.116394558370089], [-164.430991380856511, 67.616338202577779], [-165.390286831706703, 68.042772121850234], [-166.764440680995989, 68.35887685817967], [-166.204707404626561, 68.883030910916162], [-164.430810513343431, 68.915535386827727], [-163.168613654614489, 69.371114813912882], [-162.930566169261965, 69.858061835399255], [-161.908897264635499, 70.333329983187625], [-160.93479651593367, 70.447689927849567], [-159.039175788387126, 70.891642157668926], [-158.119722866833939, 70.824721177851032], [-156.580824551398024, 71.357763576941736], [-155.067790290324211, 71.147776394323685]]]] } },
            { "type": "Feature", "properties": { "admin": "Uzbekistan", "name": "Uzbekistan", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[66.518606805288655, 37.362784328758785], [66.546150343700205, 37.974684963526855], [65.215998976507379, 38.402695013984292], [64.170223016216752, 38.892406724598231], [63.518014764261018, 39.363256537425627], [62.374260288344992, 40.053886216790382], [61.882714064384679, 41.084856879229392], [61.547178989513547, 41.2663703476546], [60.46595299667068, 41.22032664648254], [60.083340691981654, 41.425146185871391], [59.976422153569771, 42.223081976890199], [58.629010857991453, 42.751551011723045], [57.786529982337065, 42.170552883465511], [56.93221520368779, 41.82602610937559], [57.096391229079089, 41.32231008561056], [55.968191359282898, 41.308641669269356], [55.928917270741081, 44.995858466159099], [58.503127068928457, 45.586804307632818], [58.689989048095882, 45.500013739598621], [60.239971958258316, 44.784036770194717], [61.05831994003244, 44.405816962250505], [62.013300408786236, 43.504476630215642], [63.185786981056559, 43.650074978197999], [64.900824415959264, 43.728080552742576], [66.098012322865074, 42.997660020513088], [66.023391554635609, 41.994646307943974], [66.510648634715707, 41.987644151368436], [66.714047072216502, 41.168443508461493], [67.985855747351806, 41.135990708982213], [68.259895867795606, 40.662324530594894], [68.632482944620008, 40.668680731766798], [69.070027296835306, 41.384244289712363], [70.388964878220776, 42.081307684897439], [70.96231489449913, 42.266154283205481], [71.259247674448218, 42.167710679689456], [70.420022414028196, 41.519998277343134], [71.157858514291576, 41.143587144529107], [71.870114780570447, 41.392900092121259], [73.055417108049156, 40.86603302668945], [71.774875115856545, 40.145844428053763], [71.014198032520156, 40.244365546218226], [70.601406691372674, 40.218527330072284], [70.458159621059608, 40.49649485937028], [70.666622348925031, 40.960213324541407], [69.329494663372813, 40.727824408524839], [69.011632928345477, 40.086158148756653], [68.536416456989414, 39.533452867178923], [67.701428664017342, 39.580478420564518], [67.442219679641298, 39.140143541005479], [68.176025018185911, 38.901553453113898], [68.392032505165943, 38.157025254868728], [67.829999627559502, 37.144994004864678], [67.075782098259609, 37.35614390720928], [66.518606805288655, 37.362784328758785]]] } },
            { "type": "Feature", "properties": { "admin": "Venezuela", "name": "Venezuela", "continent": "South America" }, "geometry": { "type": "Polygon", "coordinates": [[[-71.331583624950284, 11.776284084515805], [-71.36000566271079, 11.53999359786121], [-71.947049933546495, 11.423282375530018], [-71.620868292920164, 10.969459947142791], [-71.633063930941063, 10.446494452349027], [-72.074173956984495, 9.865651353388369], [-71.695644090446521, 9.072263088411246], [-71.26455929226772, 9.137194525585981], [-71.039999355743376, 9.859992784052407], [-71.350083787710773, 10.211935126176213], [-71.400623338492224, 10.968969021036013], [-70.155298834906503, 11.375481675660039], [-70.293843349881016, 11.846822414594211], [-69.943244594996813, 12.162307033736095], [-69.584300096297454, 11.459610907431211], [-68.882999233664435, 11.44338450769156], [-68.233271450458716, 10.885744126829945], [-68.194126552997616, 10.554653225135921], [-67.296248541926317, 10.545868231646306], [-66.227864142507983, 10.648626817258684], [-65.655237596281737, 10.20079885501732], [-64.890452236578156, 10.077214667191296], [-64.329478725833724, 10.389598700395679], [-64.318006557864933, 10.641417954953978], [-63.079322475828725, 10.701724351438598], [-61.880946010980182, 10.7156253117251], [-62.730118984616396, 10.420268662960904], [-62.388511928950969, 9.948204453974636], [-61.588767462801918, 9.873066921422263], [-60.830596686431711, 9.38133982994894], [-60.671252407459718, 8.580174261911877], [-60.150095587796166, 8.602756862823425], [-59.758284878159181, 8.367034816924045], [-60.550587938058186, 7.779602972846178], [-60.637972785063752, 7.414999904810853], [-60.295668097562377, 7.043911444522918], [-60.543999192940966, 6.856584377464881], [-61.159336310456467, 6.696077378766317], [-61.139415045807937, 6.234296779806142], [-61.410302903881941, 5.959068101419616], [-60.733574184803707, 5.2002772078619], [-60.601179165271922, 4.918098049332129], [-60.966893276601517, 4.536467596856638], [-62.085429653559125, 4.162123521334308], [-62.804533047116692, 4.006965033377951], [-63.093197597899092, 3.770571193858784], [-63.888342861574145, 4.020530096854571], [-64.628659430587533, 4.14848094320925], [-64.816064012294007, 4.056445217297422], [-64.368494432214092, 3.797210394705246], [-64.408827887617903, 3.126786200366623], [-64.269999152265783, 2.497005520025566], [-63.422867397705105, 2.411067613124174], [-63.368788011311644, 2.200899562993129], [-64.083085496666072, 1.91636912679408], [-64.199305792890499, 1.49285492594602], [-64.611011928959854, 1.328730576987041], [-65.354713304288353, 1.0952822941085], [-65.548267381437554, 0.78925446207603], [-66.325765143484944, 0.724452215982012], [-66.876325853122566, 1.253360500489336], [-67.181294318293041, 2.250638129074062], [-67.447092047786299, 2.600280869960869], [-67.809938117123693, 2.820655015469569], [-67.303173183853417, 3.31845408773718], [-67.33756384954367, 3.542342230641721], [-67.621835903581271, 3.839481716319994], [-67.823012254493534, 4.503937282728898], [-67.744696621355203, 5.221128648291667], [-67.521531948502741, 5.556870428891968], [-67.34143958196556, 6.095468044454021], [-67.695087246355001, 6.267318020040645], [-68.265052456318216, 6.153268133972473], [-68.985318569602327, 6.206804917826856], [-69.389479946557103, 6.099860541198835], [-70.093312954372408, 6.960376491723109], [-70.674233567981503, 7.087784735538717], [-71.960175747348629, 6.991614895043538], [-72.19835242378187, 7.340430813013682], [-72.444487270788059, 7.42378489830048], [-72.479678921178831, 7.632506008327352], [-72.360900641555958, 8.002638454617893], [-72.439862230097944, 8.405275376820027], [-72.660494757768092, 8.62528778730268], [-72.788729824500379, 9.085027167187331], [-73.304951544880026, 9.151999823437604], [-73.027604132769554, 9.736770331252441], [-72.905286017534692, 10.45034434655477], [-72.614657762325194, 10.821975409381777], [-72.227575446242923, 11.108702093953237], [-71.973921678338272, 11.608671576377116], [-71.331583624950284, 11.776284084515805]]] } },
            { "type": "Feature", "properties": { "admin": "Vietnam", "name": "Vietnam", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[108.050180291782908, 21.552379869060111], [106.715067987090066, 20.696850694252014], [105.881682163519002, 19.752050482659694], [105.662005649846279, 19.058165188060567], [106.426816847765991, 18.004120998603224], [107.36195356651973, 16.697456569887049], [108.269495070429599, 16.079742336486145], [108.877106561317447, 15.276690578670436], [109.335269810017209, 13.42602834721772], [109.200135939573954, 11.666859239137761], [108.366129998815424, 11.00832062422627], [107.22092858279521, 10.36448395430183], [106.4051127462034, 9.530839748569317], [105.158263787865081, 8.599759629750492], [104.795185174582372, 9.2410383162765], [105.076201613385592, 9.918490505406806], [104.334334751403446, 10.486543687375228], [105.199914992292321, 10.889309800658094], [106.249670037869436, 10.961811835163585], [105.810523716253101, 11.567614650921225], [107.491403029410861, 12.337205918827944], [107.614547967562402, 13.535530707244202], [107.382727492301058, 14.202440904186968], [107.564525181103875, 15.202173163305554], [107.312705926545576, 15.908538316303177], [106.55600792849566, 16.604283962464802], [105.925762160264, 17.485315456608955], [105.094598423281496, 18.666974595611073], [103.896532017026701, 19.265180975821799], [104.183387892678908, 19.624668077060214], [104.822573683697073, 19.886641750563879], [104.435000441508024, 20.758733221921528], [103.203861118586431, 20.766562201413745], [102.754896274834636, 21.675137233969462], [102.170435825613552, 22.464753119389297], [102.706992222100084, 22.708795070887668], [103.504514601660546, 22.703756618739202], [104.476858351664447, 22.819150092046961], [105.329209425886603, 23.352063300056908], [105.811247186305209, 22.976892401617899], [106.725403273548451, 22.794267889898414], [106.567273390735295, 22.218204860924768], [107.043420037872608, 21.811898912029907], [108.050180291782908, 21.552379869060111]]] } },
            { "type": "Feature", "properties": { "admin": "Vanuatu", "name": "Vanuatu", "continent": "Oceania" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[167.844876743845077, -16.466333103097153], [167.515181105822847, -16.597849623279966], [167.180007765977791, -16.159995212470957], [167.2168013857696, -15.891846205308449], [167.844876743845077, -16.466333103097153]]], [[[167.107712437201485, -14.933920179913951], [167.2700281110302, -15.74002084723487], [167.001207310247935, -15.614602146062492], [166.79315799384085, -15.668810723536719], [166.649859247095549, -15.392703545801192], [166.629136997746429, -14.6264970842096], [167.107712437201485, -14.933920179913951]]]] } },
            { "type": "Feature", "properties": { "admin": "Yemen", "name": "Yemen", "continent": "Asia" }, "geometry": { "type": "Polygon", "coordinates": [[[53.108572625547502, 16.651051133688949], [52.385205926325874, 16.38241120041965], [52.191729363825075, 15.938433132384018], [52.168164910699986, 15.597420355689945], [51.172515089732471, 15.175249742081489], [49.574576450403136, 14.708766587782746], [48.679230584514151, 14.003202419485657], [48.238947381387412, 13.948089504446369], [47.938914015500771, 14.007233181204423], [47.354453566279702, 13.592219753468379], [46.71707645039173, 13.399699204965016], [45.877592807810252, 13.347764390511681], [45.625050083199874, 13.290946153206759], [45.406458774605241, 13.02690542241143], [45.144355910020849, 12.953938300015306], [44.9895333188744, 12.699586900274708], [44.494576450382844, 12.721652736863344], [44.175112745954486, 12.585950425664873], [43.48295861183712, 12.63680003504008], [43.222871128112118, 13.220950425667422], [43.251448195169516, 13.767583726450848], [43.087943963398047, 14.062630316621306], [42.892245314308717, 14.802249253798745], [42.604872674333606, 15.213335272680592], [42.805015496600042, 15.261962795467252], [42.702437778500652, 15.718885809791995], [42.823670688657408, 15.911742255105263], [42.779332309750963, 16.34789134364868], [43.218375278502734, 16.666889960186406], [43.115797560403351, 17.088440456607369], [43.380794305196098, 17.579986680567668], [43.791518589051904, 17.319976711491105], [44.062613152855072, 17.410358791569589], [45.216651238797184, 17.43332896572333], [45.399999220568752, 17.333335069238554], [46.366658563020529, 17.233315334537632], [46.749994337761642, 17.283338120996174], [47.000004917189749, 16.949999294497438], [47.466694777217626, 17.116681626854877], [48.183343540241324, 18.166669216377311], [49.116671583864857, 18.616667588774941], [52.000009800022227, 19.000003363516054], [52.782184279192037, 17.349742336491229], [53.108572625547502, 16.651051133688949]]] } },
            { "type": "Feature", "properties": { "admin": "South Africa", "name": "South Africa", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[31.521001417778869, -29.257386976846245], [31.325561150850994, -29.401977634398907], [30.901762729625336, -29.909956963828034], [30.622813348113816, -30.423775730106122], [30.055716180142774, -31.140269463832951], [28.925552605919535, -32.172041110972494], [28.219755893677092, -32.771952813448848], [27.464608188595967, -33.226963799778794], [26.419452345492818, -33.614950453426175], [25.909664340933482, -33.667040297176392], [25.78062828950069, -33.944646091448334], [25.172861769315965, -33.796851495093577], [24.67785322439212, -33.987175795224537], [23.594043409934635, -33.794474379208147], [22.988188917744729, -33.916430759416976], [22.574157342222232, -33.864082533505304], [21.542799106541022, -34.258838799782922], [20.689052768646999, -34.417175388325226], [20.071261020597628, -34.795136814107984], [19.616405063564567, -34.819166355123706], [19.193278435958714, -34.462598972309777], [18.855314568769867, -34.444305515278458], [18.424643182049376, -33.997872816708963], [18.377410922934612, -34.13652068454806], [18.244499139079917, -33.867751560198023], [18.250080193767442, -33.281430759414434], [17.925190463948436, -32.61129078545342], [18.247909783611185, -32.429131361624563], [18.221761508871477, -31.661632989225662], [17.566917758868861, -30.72572112398754], [17.0644161312627, -29.878641045859158], [17.06291751472622, -29.875953871379977], [16.344976840895239, -28.576705010697697], [16.824017368240899, -28.082161553664466], [17.218928663815401, -28.355943291946804], [17.387497185951499, -28.783514092729774], [17.836151971109526, -28.856377862261311], [18.464899122804745, -29.045461928017271], [19.002127312911082, -28.972443129188857], [19.89473432788861, -28.461104831660769], [19.895767856534427, -24.767790215760588], [20.165725538827186, -24.917961928000768], [20.758609246511831, -25.868136488551446], [20.666470167735437, -26.477453301704916], [20.889609002371731, -26.828542982695907], [21.60589603036939, -26.726533705351748], [22.105968865657864, -26.28025603607913], [22.579531691180584, -25.979447523708142], [22.824271274514896, -25.500458672794768], [23.312096795350179, -25.268689873965712], [23.733569777122703, -25.39012948985161], [24.211266717228792, -25.670215752873567], [25.025170525825782, -25.719670098576891], [25.664666375437712, -25.486816094669706], [25.765848829865206, -25.174845472923671], [25.941652052522151, -24.696373386333214], [26.485753208123292, -24.616326592713097], [26.78640669119741, -24.240690606383478], [27.119409620886238, -23.574323011979772], [28.017235955525244, -22.827753594659072], [29.432188348109033, -22.091312758067584], [29.839036899542965, -22.102216485281172], [30.322883335091767, -22.271611830333931], [30.659865350067083, -22.151567478119912], [31.191409132621278, -22.251509698172395], [31.670397983534645, -23.658969008073861], [31.930588820124242, -24.369416599222532], [31.752408481581874, -25.484283949487406], [31.837777947728057, -25.843331801051342], [31.333157586397899, -25.660190525008943], [31.044079624157146, -25.731452325139436], [30.949666782359905, -26.022649021104144], [30.676608514129633, -26.398078301704604], [30.685961948374477, -26.743845310169526], [31.282773064913325, -27.285879408478991], [31.868060337051073, -27.17792734142127], [32.071665480281062, -26.733820082304902], [32.830120477028878, -26.74219166433619], [32.580264926897677, -27.470157566031808], [32.462132602678444, -28.30101124442055], [32.203388706193032, -28.752404880490065], [31.521001417778869, -29.257386976846245]], [[28.978262566857236, -28.955596612261708], [28.541700066855491, -28.647501722937562], [28.07433841320778, -28.851468601193581], [27.532511020627471, -29.242710870075353], [26.999261915807629, -29.875953871379977], [27.749397006956478, -30.645105889612214], [28.107204624145421, -30.545732110314944], [28.291069370239903, -30.226216729454293], [28.848399692507734, -30.070050551068245], [29.018415154748016, -29.743765557577362], [29.325166456832587, -29.257386976846245], [28.978262566857236, -28.955596612261708]]] } },
            { "type": "Feature", "properties": { "admin": "Zambia", "name": "Zambia", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[32.759375441221316, -9.230599053589058], [33.231387973775291, -9.676721693564799], [33.485687697083584, -10.525558770391111], [33.315310499817279, -10.796549981329695], [33.114289178201908, -11.607198174692311], [33.306422153463068, -12.435778090060214], [32.991764357237876, -12.783870537978272], [32.688165317523122, -13.712857761289273], [33.214024692525207, -13.97186003993615], [30.179481235481827, -14.796099134991525], [30.274255812305103, -15.507786960515208], [29.51683434420314, -15.644677829656386], [28.947463413211256, -16.043051446194436], [28.825868768028492, -16.389748630440611], [28.467906121542676, -16.468400160388843], [27.598243442502753, -17.290830580314005], [27.044427117630729, -17.938026218337427], [26.706773309035633, -17.961228936436477], [26.381935255648919, -17.846042168857892], [25.264225701608005, -17.736539808831413], [25.084443393664564, -17.661815687737366], [25.076950310982255, -17.578823337476617], [24.6823490740015, -17.35341073981947], [24.033861525170771, -17.29584319424632], [23.215048455506057, -17.52311614346598], [22.562478468524255, -16.89845142992181], [21.887842644953867, -16.080310153876876], [21.933886346125913, -12.898437188369357], [24.016136508894672, -12.91104623784857], [23.930922072045373, -12.565847670138854], [24.079905226342838, -12.191296888887361], [23.904153680118181, -11.722281589406318], [24.017893507592586, -11.237298272347088], [23.912215203555714, -10.926826267137512], [24.257155389103982, -10.951992689663655], [24.314516228947948, -11.262826429899269], [24.783169793402948, -11.238693536018962], [25.418118116973197, -11.330935967659958], [25.752309604604726, -11.784965101776356], [26.55308759939961, -11.924439792532125], [27.164419793412456, -11.608748467661071], [27.38879886242378, -12.132747491100663], [28.15510867687998, -12.272480564017894], [28.52356163912102, -12.698604424696679], [28.934285922976834, -13.248958428605132], [29.699613885219485, -13.257226657771827], [29.616001417771223, -12.178894545137307], [29.341547885869087, -12.36074391037241], [28.642417433392346, -11.971568698782312], [28.372253045370421, -11.793646742401389], [28.496069777141763, -10.789883721564044], [28.673681674928922, -9.605924981324931], [28.449871046672818, -9.164918308146083], [28.734866570762495, -8.526559340044576], [29.002912225060467, -8.40703175215347], [30.34608605319081, -8.238256524288216], [30.740015496551781, -8.340007419470913], [31.157751336950042, -8.594578747317362], [31.55634809746649, -8.76204884199864], [32.191864861791963, -8.930358981973276], [32.759375441221316, -9.230599053589058]]] } },
            { "type": "Feature", "properties": { "admin": "Zimbabwe", "name": "Zimbabwe", "continent": "Africa" }, "geometry": { "type": "Polygon", "coordinates": [[[31.191409132621278, -22.251509698172395], [30.659865350067083, -22.151567478119912], [30.322883335091767, -22.271611830333931], [29.839036899542965, -22.102216485281172], [29.432188348109033, -22.091312758067584], [28.794656202924209, -21.639454034107445], [28.02137007010861, -21.485975030200578], [27.727227817503252, -20.851801853114711], [27.724747348753247, -20.499058526290387], [27.296504754350501, -20.391519870690995], [26.164790887158478, -19.293085625894935], [25.850391473094724, -18.714412937090533], [25.649163445750155, -18.536025892818987], [25.264225701608005, -17.736539808831413], [26.381935255648919, -17.846042168857892], [26.706773309035633, -17.961228936436477], [27.044427117630729, -17.938026218337427], [27.598243442502753, -17.290830580314005], [28.467906121542676, -16.468400160388843], [28.825868768028492, -16.389748630440611], [28.947463413211256, -16.043051446194436], [29.51683434420314, -15.644677829656386], [30.274255812305103, -15.507786960515208], [30.338954705534537, -15.880839125230242], [31.173063999157673, -15.860943698797868], [31.636498243951188, -16.071990248277881], [31.852040643040592, -16.319417006091374], [32.328238966610222, -16.392074069893749], [32.847638787575839, -16.713398125884613], [32.849860874164385, -17.979057305577175], [32.654885695127142, -18.672089939043492], [32.611994256324884, -19.419382826416268], [32.772707960752619, -19.715592136313294], [32.659743279762573, -20.30429005298231], [32.508693068173436, -20.395292250248303], [32.244988234188007, -21.116488539313689], [31.191409132621278, -22.251509698172395]]] } }
        ]
    };

var randomcountriesData1 = [
    { country: "Iran", "continent": "Asia", "CategoryName": "Books", "Sales": 550 },
    { country: "Benin", "continent": "Africa", "CategoryName": "Books", "Sales": 1000 },
    { country: "China", "continent": "Asia", "CategoryName": "Books", "Sales": 420 },
    { country: "Chile", "continent": "South America", "CategoryName": "Books", "Sales": 1100 },
    { country: "Cuba", "continent": "North America", "CategoryName": "Books", "Sales": 450 },
    { country: "Spain", "continent": "Europe", "CategoryName": "Books", "Sales": 1200 },
    { country: "Fiji", "continent": "Oceania", "CategoryName": "Books", "Sales": 618.0 },
];

module mapcomponenet {
    $(function () {
        var mapsample = new ej.datavisualization.Map($("#map"), {
            enableAnimation: true,
            navigationControl: {
                enableNavigation: true,
                orientation: 'vertical',
                absolutePosition: { x: 5, y: 15 },
                dockPosition: 'none'
            },
            layers: [
                {
                    layerType: 'geometry',
                    enableMouseHover: false,
                    enableSelection: false,
                    shapeSettings: {
                        fill: "#626171",
                        autoFill: false,
                        highlightStroke: "white",
                        stroke: "white",
                        strokeThickness: 0.5,
                        highlightColor: "#BFBFBF"
                    },
                    shapeData: world_map,
                    legendSettings: { dockOnMap: false }
                }
            ]
        });
    });
}



/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />


module MenuComponent {
    $(function () {
        var sample = new ej.Menu($("#syncfusionProducts"),{
            width: "100%",
            animationType: ej.AnimationType.Default,
            cssClass: 'gradient-lime ',
            enableAnimation: true,
            enableSeparator: true,
            height: 40,
            htmlAttributes: { "aria-label": "menu" },
            menuType: "normalmenu",
            orientation: ej.Orientation.Horizontal,
            showRootLevelArrows: true,
            showSubLevelArrows: true,
            subMenuDirection: ej.Direction.Right,
            titleText: "Menu",

        });
    });

}





/// <reference path="../tsfiles/jquery.d.ts" />
 /// <reference path="../tsfiles/ej.web.all.d.ts" />\

module NavigationDrawerComponent {
    $(function () {
        var navigationdrawerInstance = new ej.NavigationDrawer($("#navpane"), {
           targetId: "butdrawer",
            contentId: "content_container",
            type: "overlay",
            direction: "left",
            enableListView: true,
            listViewSettings: {
                width: 300,
                selectedItemIndex: 0
            },
            position: "normal"
        });
		$("#navpane_listview").click(function(e: any) {
            var text=e.target["text"]||$(e.target).closest("li.e-list").text();
            $("#butdrawer").parent().children("h2").text(text);
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module PDFViewerComponent {
    $(function () {
        var pdfviewerControl = new ej.PdfViewer($("#pdfviewer"), {
            serviceUrl:(<any>window).baseurl+ "api/PdfViewer",
            isResponsive: true
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module PivotChartOlap {
    $(function () {
        var sample = new ej.PivotChart($("#PivotChart"),{
            dataSource: {
			data: "http://bi.syncfusion.com/olap/msmdpump.dll", 
			catalog: "Adventure Works DW 2008 SE",
			cube: "Adventure Works",
			rows: [
				{
					fieldName: "[Date].[Fiscal]"
				}
			],
			columns: [
				{
					fieldName: "[Customer].[Customer Geography]"
				}
			],
			values: [
				{
					measures: [
						{
							fieldName: "[Measures].[Internet Sales Amount]"
						}
                    ],
					axis: "columns"
				}
            ],
			filters:[]
        },
		isResponsive: true,zooming:{enableScrollbar: true},
        commonSeriesOptions: {
			type: "column"
		},
		size: { height: "460px", width: "100%" },
		primaryXAxis: { title: { text: "Date - Fiscal" }, labelRotation: 0 },
		primaryYAxis: { title: { text: "Internet Sales Amount" } },
		legend: { visible: true, rowCount: 2 },
		load:"loadTheme"
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

var pivot_dataset = [
    { Amount: 100, Country: "Canada", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Alberta" },
    { Amount: 200, Country: "Canada", Date: "FY 2006", Product: "Van", Quantity: 3, State: "British Columbia" },
    { Amount: 300, Country: "Canada", Date: "FY 2007", Product: "Car", Quantity: 4, State: "Brunswick" },
    { Amount: 150, Country: "Canada", Date: "FY 2008", Product: "Bike", Quantity: 3, State: "Manitoba" },
    { Amount: 200, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 4, State: "Ontario" },
    { Amount: 100, Country: "Canada", Date: "FY 2007", Product: "Van", Quantity: 1, State: "Quebec" },
    { Amount: 200, Country: "France", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Charente-Maritime" },
    { Amount: 250, Country: "France", Date: "FY 2006", Product: "Van", Quantity: 4, State: "Essonne" },
    { Amount: 300, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 3, State: "Garonne (Haute)" },
    { Amount: 150, Country: "France", Date: "FY 2008", Product: "Van", Quantity: 2, State: "Gers" },
    { Amount: 200, Country: "Germany", Date: "FY 2006", Product: "Van", Quantity: 3, State: "Bayern" },
    { Amount: 250, Country: "Germany", Date: "FY 2007", Product: "Car", Quantity: 3, State: "Brandenburg" },
    { Amount: 150, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 4, State: "Hamburg" },
    { Amount: 200, Country: "Germany", Date: "FY 2008", Product: "Bike", Quantity: 4, State: "Hessen" },
    { Amount: 150, Country: "Germany", Date: "FY 2007", Product: "Van", Quantity: 3, State: "Nordrhein-Westfalen" },
    { Amount: 100, Country: "Germany", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Saarland" },
    { Amount: 150, Country: "United Kingdom", Date: "FY 2008", Product: "Bike", Quantity: 5, State: "England" },
    { Amount: 250, Country: "United States", Date: "FY 2007", Product: "Car", Quantity: 4, State: "Alabama" },
    { Amount: 200, Country: "United States", Date: "FY 2005", Product: "Van", Quantity: 4, State: "California" },
    { Amount: 100, Country: "United States", Date: "FY 2006", Product: "Bike", Quantity: 2, State: "Colorado" },
    { Amount: 150, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 3, State: "New Mexico" },
    { Amount: 200, Country: "United States", Date: "FY 2005", Product: "Bike", Quantity: 4, State: "New York" },
    { Amount: 250, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 3, State: "North Carolina" },
    { Amount: 300, Country: "United States", Date: "FY 2007", Product: "Van", Quantity: 4, State: "South Carolina" }
]

module PivotChartRelational {

    $(function () {
        var sample = new ej.PivotChart($("#PivotChart"),{
            dataSource: {
			data: pivot_dataset,
			rows: [
				{
					fieldName: "Country",
					fieldCaption: "Country"
				},
				{
					fieldName: "State",
					fieldCaption: "State"
				},
				{
					fieldName: "Date",
					fieldCaption: "Date"
				}
			],
			columns: [
				{
					fieldName: "Product",
					fieldCaption: "Product"
				}
			],
			values: [
				{
					fieldName: "Amount",
					fieldCaption: "Amount"
				}
			],
			filters:[]
		},
		isResponsive: true,zooming:{enableScrollbar: true},
		commonSeriesOptions: {
			type: "column"
		},
		size: { height: "460px", width: "100%" },
		primaryYAxis: { title: { text: "Amount" } },
		legend: { visible: true },
		load:"loadTheme"
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module PivotGaugeOlap {

    $(function () {
        var sample = new ej.PivotGauge($("#PivotGauge"),{
            dataSource: {
				data: "http://bi.syncfusion.com/olap/msmdpump.dll",
				catalog: "Adventure Works DW 2008 SE",
				cube: "Adventure Works",
				rows: [
					{
						fieldName: "[Date].[Fiscal]",
						filterItems: { filterType: "include", values: ["[Date].[Fiscal].[Fiscal Year].&amp;[2004]"] }
					},
				],
				columns: [
					{
						fieldName: "[Customer].[Customer Geography]"
					}
				],
				values: [
					{
						measures: [
							{
								fieldName: "[Measures].[Internet Sales Amount]"
							},
							{
								fieldName: "[Measures].[Internet Revenue Status]"
							},
							{
								fieldName: "[Measures].[Internet Revenue Trend]"
							},
							{
								fieldName: "[Measures].[Internet Revenue Goal]"
							},
						],
						axis: "columns"
					}
				],
				filters:[]
			},
            enableTooltip: true, isResponsive: true,
            labelFormatSettings: { decimalPlaces: 2 },
			scales: [{
				showRanges: true,
				radius: 150, showScaleBar: true, size: 1,
                border: {
					width: 0.5
				},
				showIndicators: true, showLabels: true,
                pointers: [{
					showBackNeedle: true,
					backNeedleLength: 20,
					length: 120,
					width: 7
                },
				{		
					type: "marker",
					markerType: "diamond",
					distanceFromScale: 5,
					placement: "center",
					backgroundColor: "#29A4D9",
					length: 25,
					width: 15
				}],
                ticks: [{
					type: "major",
                    distanceFromScale: 2,
					height: 16,
					width: 1, color: "#8c8c8c"
				},
                {
					type: "minor",
					height: 6,
					width: 1,
					distanceFromScale: 2,
                    color: "#8c8c8c"
                }],
                labels: [{
                    color: "#8c8c8c"
				}],
                ranges: [{
					distanceFromScale: -5,
                    backgroundColor: "#fc0606",
					border: { color: "#fc0606" }
                }, 
				{
					distanceFromScale: -5
                }],
				customLabels: [{
					position: { x: 180, y: 290 },
					font: { size: "10px", fontFamily: "Segoe UI", fontStyle: "Normal" }, color: "#666666"
                },
				{
					position: { x: 180, y: 320 },
					font: { size: "10px", fontFamily: "Segoe UI", fontStyle: "Normal" }, color: "#666666"
                },
				{
                    position: { x: 180, y: 150 },
                    font: { size: "12px", fontFamily: "Segoe UI", fontStyle: "Normal" }, color: "#666666"
                }]
            }]
        });
    });	
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

var pivot_dataset = [
    { Amount: 100, Country: "Canada", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Alberta" },
    { Amount: 200, Country: "Canada", Date: "FY 2006", Product: "Van", Quantity: 3, State: "British Columbia" },
    { Amount: 300, Country: "Canada", Date: "FY 2007", Product: "Car", Quantity: 4, State: "Brunswick" },
    { Amount: 150, Country: "Canada", Date: "FY 2008", Product: "Bike", Quantity: 3, State: "Manitoba" },
    { Amount: 200, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 4, State: "Ontario" },
    { Amount: 100, Country: "Canada", Date: "FY 2007", Product: "Van", Quantity: 1, State: "Quebec" },
    { Amount: 200, Country: "France", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Charente-Maritime" },
    { Amount: 250, Country: "France", Date: "FY 2006", Product: "Van", Quantity: 4, State: "Essonne" },
    { Amount: 300, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 3, State: "Garonne (Haute)" },
    { Amount: 150, Country: "France", Date: "FY 2008", Product: "Van", Quantity: 2, State: "Gers" },
    { Amount: 200, Country: "Germany", Date: "FY 2006", Product: "Van", Quantity: 3, State: "Bayern" },
    { Amount: 250, Country: "Germany", Date: "FY 2007", Product: "Car", Quantity: 3, State: "Brandenburg" },
    { Amount: 150, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 4, State: "Hamburg" },
    { Amount: 200, Country: "Germany", Date: "FY 2008", Product: "Bike", Quantity: 4, State: "Hessen" },
    { Amount: 150, Country: "Germany", Date: "FY 2007", Product: "Van", Quantity: 3, State: "Nordrhein-Westfalen" },
    { Amount: 100, Country: "Germany", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Saarland" },
    { Amount: 150, Country: "United Kingdom", Date: "FY 2008", Product: "Bike", Quantity: 5, State: "England" },
    { Amount: 250, Country: "United States", Date: "FY 2007", Product: "Car", Quantity: 4, State: "Alabama" },
    { Amount: 200, Country: "United States", Date: "FY 2005", Product: "Van", Quantity: 4, State: "California" },
    { Amount: 100, Country: "United States", Date: "FY 2006", Product: "Bike", Quantity: 2, State: "Colorado" },
    { Amount: 150, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 3, State: "New Mexico" },
    { Amount: 200, Country: "United States", Date: "FY 2005", Product: "Bike", Quantity: 4, State: "New York" },
    { Amount: 250, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 3, State: "North Carolina" },
    { Amount: 300, Country: "United States", Date: "FY 2007", Product: "Van", Quantity: 4, State: "South Carolina" }
]

module PivotGaugeRelational {
    $(function () {
        var sample = new ej.PivotGauge($("#PivotGauge"),{
            dataSource: {
				data: pivot_dataset,
				rows: [
					{
						fieldName: "Country",
					},
					{
						fieldName: "State",
					}
				],
				columns: [
					{
						fieldName: "Product",
					}
				],
                values: [
					{
						fieldName: "Amount",
					},
					{
						fieldName: "Quantity",
					}
				]
			},
            enableTooltip: true, isResponsive: true,
            labelFormatSettings: { decimalPlaces: 2 },
			scales: [{
				showRanges: true,
				radius: 150, showScaleBar: true, size: 1,
                border: {
					width: 0.5
				},
				showIndicators: true, showLabels: true,
                pointers: [{
					showBackNeedle: true,
					backNeedleLength: 20,
					length: 120,
					width: 7
                },
				{		
					type: "marker",
					markerType: "diamond",
					distanceFromScale: 5,
					placement: "center",
					backgroundColor: "#29A4D9",
					length: 25,
					width: 15
				}],
                ticks: [{
					type: "major",
                    distanceFromScale: 2,
					height: 16,
					width: 1, color: "#8c8c8c"
				},
                {
					type: "minor",
					height: 6,
					width: 1,
					distanceFromScale: 2,
                    color: "#8c8c8c"
                }],
                labels: [{
                    color: "#8c8c8c"
				}],
                ranges: [{
					distanceFromScale: -5,
                    backgroundColor: "#fc0606",
					border: { color: "#fc0606" }
                }, 
				{
					distanceFromScale: -5
                }],
				customLabels: [{
					position: { x: 180, y: 290 },
					font: { size: "10px", fontFamily: "Segoe UI", fontStyle: "Normal" }, color: "#666666"
                },
				{
					position: { x: 180, y: 320 },
					font: { size: "10px", fontFamily: "Segoe UI", fontStyle: "Normal" }, color: "#666666"
                },
				{
                    position: { x: 180, y: 150 },
                    font: { size: "12px", fontFamily: "Segoe UI", fontStyle: "Normal" }, color: "#666666"
                }]
            }]
        });
    });	
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module PivotGridOlap {

    $(function () {
        var sample = new ej.PivotGrid($("#PivotGrid"),{
            dataSource: {
			data: "http://bi.syncfusion.com/olap/msmdpump.dll",
			catalog: "Adventure Works DW 2008 SE",
			cube: "Adventure Works",
			rows: [
				{
					fieldName: "[Date].[Fiscal]"
				}
			],
			columns: [
				{
					fieldName: "[Customer].[Customer Geography]"
				}
			],
            values: [
				{
					measures: [
						{
							fieldName: "[Measures].[Internet Sales Amount]",
						}
                    ],
					axis: "columns"
				}
			],
			filters:[]
		},
        enableGroupingBar: true, 
        pivotTableFieldListID:"PivotSchemaDesigner"
        });
        $("#PivotSchemaDesigner").ejPivotSchemaDesigner();
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

var pivot_dataset = [
    { Amount: 100, Country: "Canada", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Alberta" },
    { Amount: 200, Country: "Canada", Date: "FY 2006", Product: "Van", Quantity: 3, State: "British Columbia" },
    { Amount: 300, Country: "Canada", Date: "FY 2007", Product: "Car", Quantity: 4, State: "Brunswick" },
    { Amount: 150, Country: "Canada", Date: "FY 2008", Product: "Bike", Quantity: 3, State: "Manitoba" },
    { Amount: 200, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 4, State: "Ontario" },
    { Amount: 100, Country: "Canada", Date: "FY 2007", Product: "Van", Quantity: 1, State: "Quebec" },
    { Amount: 200, Country: "France", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Charente-Maritime" },
    { Amount: 250, Country: "France", Date: "FY 2006", Product: "Van", Quantity: 4, State: "Essonne" },
    { Amount: 300, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 3, State: "Garonne (Haute)" },
    { Amount: 150, Country: "France", Date: "FY 2008", Product: "Van", Quantity: 2, State: "Gers" },
    { Amount: 200, Country: "Germany", Date: "FY 2006", Product: "Van", Quantity: 3, State: "Bayern" },
    { Amount: 250, Country: "Germany", Date: "FY 2007", Product: "Car", Quantity: 3, State: "Brandenburg" },
    { Amount: 150, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 4, State: "Hamburg" },
    { Amount: 200, Country: "Germany", Date: "FY 2008", Product: "Bike", Quantity: 4, State: "Hessen" },
    { Amount: 150, Country: "Germany", Date: "FY 2007", Product: "Van", Quantity: 3, State: "Nordrhein-Westfalen" },
    { Amount: 100, Country: "Germany", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Saarland" },
    { Amount: 150, Country: "United Kingdom", Date: "FY 2008", Product: "Bike", Quantity: 5, State: "England" },
    { Amount: 250, Country: "United States", Date: "FY 2007", Product: "Car", Quantity: 4, State: "Alabama" },
    { Amount: 200, Country: "United States", Date: "FY 2005", Product: "Van", Quantity: 4, State: "California" },
    { Amount: 100, Country: "United States", Date: "FY 2006", Product: "Bike", Quantity: 2, State: "Colorado" },
    { Amount: 150, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 3, State: "New Mexico" },
    { Amount: 200, Country: "United States", Date: "FY 2005", Product: "Bike", Quantity: 4, State: "New York" },
    { Amount: 250, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 3, State: "North Carolina" },
    { Amount: 300, Country: "United States", Date: "FY 2007", Product: "Van", Quantity: 4, State: "South Carolina" }
]

module PivotGridRelational {
    $(function () {
        var sample = new ej.PivotGrid($("#PivotGrid"),{
            dataSource: {
			data: pivot_dataset,
			rows: [
				{
					fieldName: "Country",
					fieldCaption: "Country"
				},
				{
					fieldName: "State",
					fieldCaption: "State"
				}
			],
			columns:                     
				[{
					fieldName: "Product",
					fieldCaption: "Product"
				}
			],
			values: [
				{
					fieldName: "Amount",
                    fieldCaption: "Amount"
				},
				{
					fieldName: "Quantity",
					fieldCaption: "Quantity"
				}
            ],
			filters:[]
		},
        enableGroupingBar: true, 
        pivotTableFieldListID:"PivotSchemaDesigner"
        });
       $("#PivotSchemaDesigner").ejPivotSchemaDesigner(); 

    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module PivotTreeMap {
    $(function () {
        var sample = new ej.PivotTreeMap($("#PivotTreeMap"),{
            dataSource: {
			data: "http://bi.syncfusion.com/olap/msmdpump.dll;Locale Identifier=1033;",
			catalog: "Adventure Works DW 2008 SE",
			cube: "Adventure Works",
			rows: [
				{
					fieldName: "[Customer].[Customer Geography]"
				}
			],
			columns: [
				{
					fieldName: "[Date].[Fiscal]"
				}
			],
            values: [
				{
					measures: [
						{
							fieldName: "[Measures].[Customer Count]",
						}
					],
					axis: "columns"
				}
			],
			filters:[]
		}
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ProgressBarComponent {
    $(function () {
        var sample = new ej.ProgressBar($("#progressBar"),{
            width: 200,
            value: 45,
            height: 20,
            enablePersistence: true,
            maxValue: 200,
            minValue: 0,
            showRoundedCorner: true,
            text: 'loading...'
        });
    });

}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />\

declare var rteObj: any;
declare var data: any;
var radialEle = $('#defaultradialmenu'), action = 0, forRedo = 0;
var rteEle = $("#rteSample1");
module RadialMenuComponent {
    $(function () {

        if (!(ej.browserInfo().name == "msie" && parseInt(ej.browserInfo().version) < 9)) {
            var radialmenuInstance = new ej.RadialMenu($("#defaultradialmenu"), {
                imageClass: "imageclass",
                backImageClass: "backimageclass",
                targetElementId: "radialtarget1"
            });
			$("#radialtarget1").parent().css("position", "relative");
        }
        else {
            $("#contentDiv").html("Radial Menu is only supported from Internet Explorer Versioned 9 and above.").css({ "font-size": "20px", "color": "red" });
        }
        var rteInstance = new ej.RTE($("#rteSample1"), {
            width: "100%",
            minWidth: "10px",
            change: (e) => { radialEle.ejRadialMenu("enableItem", "Undo"); },
            select: (e) => {
                var target = $("#radialtarget1"), radialRadius = 150, radialDiameter = 2 * radialRadius,
                    // To get Iframe positions
                    iframeY = e.event.clientY, iframeX = e.event.clientX,
                    // To set Radial Menu position within target
                    x = iframeX > target.width() - radialRadius ? target.width() - radialDiameter : (iframeX > radialRadius ? iframeX - radialRadius : 0),
                    y = iframeY > target.height() - radialRadius ? target.height() - radialDiameter : (iframeY > radialRadius ? iframeY - radialRadius : 0);
                radialEle.ejRadialMenu("setPosition", x, y);
                radialEle.focus();
                $('iframe').contents().find('body').blur();
            },
            showToolbar: false,
            showContextMenu: false
        });
        $(window).resize(function () {
            if (ej.isMobile() && ej.isPortrait())
                $('#defaultradialmenu').css({ "left": 25 });
        });
    });
}


function bold(e: any) {

    rteObj = rteEle.data("ejRTE");
    rteObj.executeCommand("bold");
    data = rteObj._getSelectedHtmlString() ? true : false;
    if (data) action += 1;
    forRedo = action;
    radialEle.focus();
}
function italic(e: any) {
    rteObj = rteEle.data("ejRTE");
    rteObj.executeCommand("italic");
    data = rteObj._getSelectedHtmlString() ? true : false;
    if (data) action += 1;
    forRedo = action;
    radialEle.focus();
}
function undo(e: any) {
    rteObj = rteEle.data("ejRTE");
    rteObj.executeCommand("undo");
    action -= 1;
    if (action == 0)
        radialEle.ejRadialMenu("disableItem", "Undo");
    radialEle.ejRadialMenu("enableItem", "Redo");
    radialEle.focus();
}
function redo(e: any) {
    rteObj = rteEle.data("ejRTE");
    rteObj.executeCommand("redo");
    action += 1;
    if (forRedo == action) radialEle.ejRadialMenu("disableItem", "Redo");
    radialEle.ejRadialMenu("enableItem", "Undo");
    radialEle.focus();
}

/// <reference path="../tsfiles/jquery.d.ts" />
 /// <reference path="../tsfiles/ej.web.all.d.ts" />\

module RadialSliderComponent {
    $(function () {
        var radialsliderInstance = new ej.RadialSlider($("#radialSlider"), {
           innerCircleImageUrl: "images/radialslider/chevron-right.png"
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
module rangecomponent {
    $(function () {
        var linearsample = new ej.datavisualization.RangeNavigator($("#RangeNavigator"), {
            enableDeferredUpdate: true,
            padding: "15",
            allowSnapping: true,
            selectedRangeSettings: {
                start: "2010/5/1", end: "2011/10/1"
            },
            isResponsive: true,
            tooltipSettings: {
                visible: true, labelFormat: "MM/dd/yyyy", backgroundColor: "gray", tooltipDisplayMode: "ondemand"
            },
            load: () => {
                var rn = $("#RangeNavigator").data("ejRangeNavigator");
                rn.model.series = [
                    {
                        type: 'line',
                        dataSource: data.Open, xName: "XValue", yName: "YValue",
                        fill: '#69D2E7'
                    }
                ];
            },
            loaded: function () {
                var sender = $("#RangeNavigator").data("ejRangeNavigator");
                var theme = window.themeStyle + window.themeColor + window.themeVarient;
                if (theme) {
                    switch (theme) {
                        case "flatazurelight":
                            theme = "azurelight";
                            break;
                        case "flatlimelight":
                            theme = "limelight";
                            break;
                        case "flatsaffronlight":
                            theme = "saffronlight";
                            break;
                        case "gradientazurelight":
                            theme = "gradientazure";
                            break;
                        case "gradientlimelight":
                            theme = "gradientlime";
                            break;
                        case "gradientsaffronlight":
                            theme = "gradientsaffron";
                            break;
                        case "flatazuredark":
                            theme = "azuredark";
                            break;
                        case "flatlimedark":
                            theme = "limedark";
                            break;
                        case "flatsaffrondark":
                            theme = "saffrondark";
                            break;
                        case "gradientazuredark":
                            theme = "gradientazuredark";
                            break;
                        case "gradientlimedark":
                            theme = "gradientlimedark";
                            break;
                        case "gradientsaffrondark":
                            theme = "gradientsaffrondark";
                            break;
                        case "flathigh-contrast-01dark":
                            theme = "highcontrast01";
                            break;
                        case "flathigh-contrast-02dark":
                            theme = "highcontrast02";
                            break;
                        case "flatmateriallight":
                            theme = "material";
                            break;
                        case "flatoffice-365light":
                            theme = "office";
                            break;
                        default:
                            theme = "flatlight";
                            break;
                    }
                    sender.model.theme = theme;
                }
            }

        });
    });
}
var data;
data = GetData();

function GetData() {
    var series1:any[]=[];
    var series2:any[]= [];
    var value = 100;
    var value1 = 120;
    for (var i = 1; i < 730; i++) {

        if (Math.random() > .5) {
            value += Math.random();
            value1 += Math.random();
        } else {
            value -= Math.random();
            value1 -= Math.random();
        }
        var point1 = { XValue: new Date(2010, 0, i), YValue: value };
        var point2 = { XValue: new Date(2010, 0, i), YValue: value1 };
        series1.push(point1);
        series2.push(point2);
    }

    data = { Open: series1, Close: series2 };
    return data;
};
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module RatingComponent {
    $(function () {

        var sample1 = new ej.Rating($("#fullRating"),{
            value: 4,
            precision: ej.Rating.Precision.Full,
            allowReset: true,
            cssClass: "gradient-lime",
            enabled: true,
            enablePersistence: true,
            incrementStep: 2,
            maxValue: 10,
            minValue: 0,
            orientation: ej.Orientation.Horizontal,
            shapeHeight: 25,
            shapeWidth: 25,
            showTooltip: true
        });
		
        var sample2 = new ej.Rating($("#halfRating"),{
            precision: ej.Rating.Precision.Half,
            value: 3.5,
            allowReset: true,
            cssClass: "gradient-lime",
            enabled: true,
            enablePersistence: true,
            incrementStep: 2,
            maxValue: 10,
            minValue: 0,
            orientation: "horizontal",
            shapeHeight: 25,
            shapeWidth: 25,
            showTooltip: true
        });

        var sample3 = new ej.Rating($("#exactRating"),{
            precision: ej.Rating.Precision.Exact,
            value: 3.7,
            allowReset: true,
            cssClass: "gradient-lime",
            enabled: true,
            enablePersistence: true,
            incrementStep: 2,
            maxValue: 10,
            minValue: 0,
            orientation: "horizontal",
            shapeHeight: 25,
            shapeWidth: 25,
            showTooltip: true
        }); 
    });

}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ReportViewerComponent {
	$(function () {
		var report = new ej.ReportViewer($("#territoryReportViewer"), {
			reportServiceUrl: (<any>window).baseurl + 'api/ReportViewer',
			reportServerUrl: 'http://mvc.syncfusion.com/reportserver',
			processingMode: ej.ReportViewer.ProcessingMode.Remote,
			reportPath: "/SSRSSamples2/Territory Sales new",
			isResponsive: true
		});
	});
}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
var fontfamily = ["Segoe UI", "Arial", "Times New Roman", "Tahoma", "Helvetica"], fontsize = ["1pt", "2pt", "3pt", "4pt", "5pt"], action1 = ["New", "Clear"], action2 = ["Bold", "Italic", "Underline", "strikethrough", "superscript", "subscript", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyFull", "Undo", "Redo"];
module RibbonComponent {
    $(function () {
        var sample = new ej.Ribbon($("#defaultRibbon"), {
            width: "100%",
            expandPinSettings: {
                toolTip: "Collapse the Ribbon"
            },
            collapsePinSettings: {
                toolTip: "Pin the Ribbon"
            },
            applicationTab: {
                 type: ej.Ribbon.ApplicationTabType.Menu, menuItemID: "ribbonmenu", menuSettings: { openOnClick: false } 
            },
            tabs: [{
                id: "home", text: "HOME", groups: [{
                    text: "New", alignType: ej.Ribbon.AlignType.Rows, content: [{
                        groups: [{
                            id: "new",
                            text: "New",
                            toolTip: "New",
                            buttonSettings: {
                                contentType: ej.ContentType.ImageOnly,
                                imagePosition: ej.ImagePosition.ImageTop,
                                prefixIcon: "e-icon e-ribbon e-new",
                                click: "onClick"
                            }
                        }
                        ],
                        defaults: {
                            type: "button",
                            width: 60,
                            height: 70
                        }
                    }]
                },
                {
                        text: "Clipboard", alignType: ej.Ribbon.AlignType.Columns, content: [{
                            groups: [{
                                id: "paste",
                                text: "paste",
                                toolTip: "Paste",
                                splitButtonSettings: {
                                    contentType: ej.ContentType.ImageOnly,
                                    prefixIcon: "e-icon e-ribbon e-ribbonpaste",
                                    targetID: "pasteSplit",
                                    buttonMode: "dropdown",
                                    click: "onClick",
                                    arrowPosition: ej.ArrowPosition.Bottom
                                }
                            }
                            ],
                            defaults: {
                                type: "splitbutton",
                                width: 50,
                                height: 70
                            }
                        },
                        {
                             groups: [{
                                    id: "cut",
                                    text: "Cut",
                                    toolTip: "Cut",
                                    buttonSettings: {
                                        contentType: ej.ContentType.TextAndImage,
                                        click: "onClick",
                                        prefixIcon: "e-icon e-ribbon e-ribboncut"
                                    }
                                },
                                    {
                                        id: "copy",
                                        text: "Copy",
                                        toolTip: "Copy",
                                        buttonSettings: {
                                            contentType: ej.ContentType.TextAndImage,
                                            click: "onClick",
                                            prefixIcon: "e-icon e-ribbon e-ribboncopy"
                                        }
                                    },
                                    {
                                        id: "clear",
                                        text: "Clear",
                                        toolTip: "Clear All",
                                        buttonSettings: {
                                            contentType: ej.ContentType.TextAndImage,
                                            click: "onClick",
                                            prefixIcon: "e-icon e-ribbon clearAll"
                                        }
                                    }],
                                     defaults: {
                                    type: "button",
                                    width: 60,
                                    isBig: false
                                }
                            }] 
                },
                {
                        text: "Font", alignType: "rows", content: [{
                            groups: [{
                                id: "fontfamily",
                                toolTip: "Font",
                                dropdownSettings: {
                                    dataSource: fontfamily,
                                    text: "Segoe UI",
                                    select: "onClick",
                                    width: 150
                                }
                            },
                                {
                                    id: "fontsize",
                                    toolTip: "FontSize",
                                    dropdownSettings: {
                                        dataSource: fontsize,
                                        text: "1pt",
                                        select: "onClick",
                                        width: 65
                                    }
                                }],
                            defaults: {
                                type: "dropdownlist",
                                height: 28
                            }
                        },
                            {
                                groups: [{
                                    id: "bold",
                                    toolTip: "Bold",
                                    type: ej.Ribbon.Type.ToggleButton,
                                    toggleButtonSettings: {
                                        contentType: ej.ContentType.ImageOnly,
                                        defaultText: "Bold",
                                        activeText: "Bold",
                                        click: "onClick",
                                        defaultPrefixIcon: "e-icon e-ribbon bold",
                                        activePrefixIcon: "e-icon e-ribbon bold"
                                    }
                                },
                                    {
                                        id: "italic",
                                        toolTip: "Italic",
                                        type: ej.Ribbon.Type.ToggleButton,
                                        toggleButtonSettings: {
                                            contentType: ej.ContentType.ImageOnly,
                                            defaultText: "Italic",
                                            activeText: "Italic",
                                            click: "onClick",
                                            defaultPrefixIcon: "e-icon e-ribbon e-ribbonitalic",
                                            activePrefixIcon: "e-icon e-ribbon e-ribbonitalic"
                                        }
                                    },
                                    {
                                        id: "underline",
                                        text: "Underline",
                                        toolTip: "Underline",
                                        type: ej.Ribbon.Type.ToggleButton,
                                        toggleButtonSettings: {
                                            contentType: ej.ContentType.ImageOnly,
                                            defaultText: "Underline",
                                            activeText: "Underline",
                                            click: "onClick",
                                            defaultPrefixIcon: "e-icon e-ribbon e-ribbonunderline",
                                            activePrefixIcon: "e-icon e-ribbon e-ribbonunderline"
                                        }
                                    },
                                    {
                                        id: "strikethrough",
                                        text: "strikethrough",
                                        toolTip: "Strikethrough",
                                        type: ej.Ribbon.Type.ToggleButton,
                                        toggleButtonSettings: {
                                            contentType: ej.ContentType.ImageOnly,
                                            defaultText: "Strikethrough",
                                            activeText: "Strikethrough",
                                            click: "onClick",
                                            defaultPrefixIcon: "e-icon e-ribbon strikethrough",
                                            activePrefixIcon: "e-icon e-ribbon strikethrough"
                                        }
                                    },
                                    {
                                        id: "superscript",
                                        text: "superscript",
                                        toolTip: "Superscript",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-superscripticon"
                                        }
                                    },
                                    {
                                        id: "subscript",
                                        text: "subscript",
                                        toolTip: "Subscript",
                                        enableSeparator: true,
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-subscripticon"
                                        }
                                    },
                                    {
                                        id: "fontcolor",
                                        text: "Font Color",
                                        toolTip: "Font Color",
                                        type: ej.Ribbon.Type.Custom,
                                        contentID: "fontcolor"
                                    },
                                    {
                                        id: "fillcolor",
                                        text: "Fill Color",
                                        toolTip: "Fill Color",
                                        type: ej.Ribbon.Type.Custom,
                                        contentID: "fillcolor"
                                    }
                                ],
                                defaults: {
                                    isBig: false
                                }
                            }]
                    },
                    {
                        text: "Alignment", alignType: ej.Ribbon.AlignType.Rows, content: [
                            {
                                groups: [{
                                    id: "bullet",
                                    text: "Bullet Format",
                                    toolTip: "Bullets",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon e-bullet"
                                    }
                                },
                                    {
                                        id: "number",
                                        text: "Number Format",
                                        toolTip: "Numbering",
                                        enableSeparator: true,
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-numbericon"
                                        }
                                    },
                                    {
                                        id: "textindent",
                                        text: "Indent",
                                        toolTip: "Text Indent",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-indent"
                                        }
                                    },
                                    {
                                        id: "textoudent",
                                        text: "Outdent",
                                        toolTip: "Text Outdent",
                                        enableSeparator: true,
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-outdent"
                                        }
                                    },
                                    {
                                        id: "sortascending",
                                        text: "Sort",
                                        toolTip: "Sort",
                                        enableSeparator: true,
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-sort"
                                        }
                                    },
                                    {
                                        id: "border",
                                        text: "Border",
                                        toolTip: "Border",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-border"
                                        }
                                    }],
                                defaults: {
                                    type: "button",
                                    isBig: false
                                }
                            },
                            {
                                groups: [{
                                    id: "alignleft",
                                    text: "JustifyLeft",
                                    toolTip: "Align Left",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.ImageOnly,
                                        prefixIcon: "e-icon e-ribbon alignleft"
                                    }
                                },
                                    {
                                        id: "aligncenter",
                                        text: "JustifyCenter",
                                        toolTip: "Align Center",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon aligncenter"
                                        }
                                    },
                                    {
                                        id: "alignright",
                                        text: "JustifyRight",
                                        toolTip: "Align Right",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon alignright"
                                        }
                                    },
                                    {
                                        id: "justify",
                                        text: "JustifyFull",
                                        toolTip: "Justify",
                                        enableSeparator: true,
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon justify"
                                        }
                                    },
                                    {
                                        id: "uppercase",
                                        text: "Upper Case",
                                        toolTip: "Upper Case",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-uppercase"
                                        }
                                    },
                                    {
                                        id: "lowercase",
                                        text: "Lower Case",
                                        toolTip: "Lower Case",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.ImageOnly,
                                            prefixIcon: "e-icon e-ribbon e-lowercase"
                                        }
                                    }],
                                defaults: {
                                    type: "button",
                                    isBig: false
                                }
                            }]
                    },
                    {
                        text: "Actions", alignType: ej.Ribbon.AlignType.Rows, content: [{
                            groups: [{
                                id: "undo",
                                text: "Undo",
                                toolTip: "Undo",
                                buttonSettings: {
                                    click: "onClick",
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-undo"
                                }
                            },
                                {
                                    id: "redo",
                                    text: "Redo",
                                    toolTip: "Redo",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-redo"
                                    }
                                }
                            ],
                            defaults: {
                                type: "button",
                                width: 40,
                                height: 70
                            }
                        }]
                    },
                    {
                        text: "View", alignType: ej.Ribbon.AlignType.Rows, content: [{
                            groups: [{
                                id: "zoomin",
                                text: "Zoom In",
                                toolTip: "Zoom In",                                
                                buttonSettings: {
                                    width: 58,
                                    click: "onClick",
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-zoomin"
                                }
                            },
                                {
                                    id: "zoomout",
                                    text: "Zoom Out",
                                    toolTip: "Zoom Out",                                    
                                    buttonSettings: {
                                        width: 70,
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-zoomout"
                                    }
                                },
                                {
                                    id: "fullscreen",
                                    text: "Full Screen",
                                    toolTip: "Full Screen",                                    
                                    buttonSettings: {
                                        width: 73,
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-fullscreen"
                                    }
                                }
                            ],
                            defaults: {
                                type: "button",
                                height: 70
                            }
                        }]
                    }]
            },{
                    id: "insert", text: "INSERT", groups: [{
                        text: "Tables", alignType: ej.Ribbon.AlignType.Columns, content: [{
                            groups: [{
                                id: "tables",
                                text: "Tables",
                                toolTip: "Tables",
                                buttonSettings: {
                                    click: "onClick",
                                    contentType: ej.ContentType.TextAndImage,
                                    imagePosition: ej.ImagePosition.ImageTop,
                                    prefixIcon: "e-icon e-ribbon e-table"
                                }
                            }
                            ],
                            defaults: {
                                type: "button",
                                width: 50,
                                height: 70
                            }
                        }]
                    },
                        {
                            text: "Illustrations", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "pictures",
                                    text: "Pictures",
                                    toolTip: "Pictures",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-picture"
                                    }
                                },
                                    {
                                        id: "videos",
                                        text: "Videos",
                                        toolTip: "Videos",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.TextAndImage,
                                            imagePosition: ej.ImagePosition.ImageTop,
                                            prefixIcon: "e-icon e-ribbon e-video"
                                        }
                                    },
                                    {
                                        id: "shapes",
                                        text: "Shapes",
                                        toolTip: "Shapes",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.TextAndImage,
                                            imagePosition: ej.ImagePosition.ImageTop,
                                            prefixIcon: "e-icon e-ribbon e-shape"
                                        }
                                    },
                                    {
                                        id: "charts",
                                        text: "Charts",
                                        toolTip: "Charts",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.TextAndImage,
                                            imagePosition: ej.ImagePosition.ImageTop,
                                            prefixIcon: "e-icon e-ribbon e-chart"
                                        }
                                    }
                                ],
                                defaults: {
                                    type: "button",
                                    width: 56,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Comments", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "comments",
                                    text: "Comments",
                                    toolTip: "Comments",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-comment"
                                    }
                                }
                                ],
                                defaults: {
                                    type: "button",
                                    width: 70,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Text", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "text",
                                    text: "Text",
                                    toolTip: "Text",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-text",
                                        width: 50
                                    }
                                },
                                    {
                                        id: "datetime",
                                        text: "Date Time",
                                        toolTip: "DateTime",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.TextAndImage,
                                            imagePosition: ej.ImagePosition.ImageTop,
                                            prefixIcon: "e-icon e-ribbon e-datetimenew"
                                        }
                                    }
                                ],
                                defaults: {
                                    type: "button",
                                    width: 70,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Hyperlink", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "hyperlink",
                                    text: "Hyperlink",
                                    toolTip: "Hyperlink",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-hyperlink"
                                    }
                                }
                                ],
                                defaults: {
                                   type: "button",
                                    width: 70,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Equation", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "equation",
                                    text: "Equation",
                                    toolTip: "Equation",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-equation"
                                    }
                                }
                                ],
                                defaults: {
                                    type: "button",
                                    width: 60,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Print Layout", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "printlayout",
                                    text: "Print Layout",
                                    toolTip: "Print Layout",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-printlayout"
                                    }
                                }
                                ],
                                defaults: {
                                    type: "button",
                                    width: 80,
                                    height: 70
                                }
                            }]
                        },
                        {
                            text: "Save", alignType: ej.Ribbon.AlignType.Rows, content: [{
                                groups: [{
                                    id: "print",
                                    text: "Print",
                                    toolTip: "Print",
                                    buttonSettings: {
                                        click: "onClick",
                                        contentType: ej.ContentType.TextAndImage,
                                        imagePosition: ej.ImagePosition.ImageTop,
                                        prefixIcon: "e-icon e-ribbon e-print"
                                    }
                                },
                                    {
                                        id: "save",
                                        text: "Save",
                                        toolTip: "Save",
                                        buttonSettings: {
                                            click: "onClick",
                                            contentType: ej.ContentType.TextAndImage,
                                            imagePosition: ej.ImagePosition.ImageTop,
                                            prefixIcon: "e-icon e-ribbon e-save"
                                        }
                                    }
                                ],
                                defaults: {
                                    type: "button",
                                    width: 50,
                                    height: 70
                                }
                            }]
                        }
                    ]
                }
            ],   
            create: function createControl(args) {
                var ribbon = $("#defaultRibbon").data("ejRibbon");
                $("#fontcolor").ejColorPicker({ value: "#FFFF00", modelType: "palette", cssClass: "e-ribbon", toolIcon: "e-fontcoloricon", select: colorHandler });
                $("#fillcolor").ejColorPicker({ value: "#FF0000", modelType: "palette", cssClass: "e-ribbon", toolIcon: "e-fillcoloricon", select: colorHandler });
            }
        });
    });
}
function colorHandler(args:any) {
    (this._id.indexOf("fillcolor") != -1) ? $("#contenteditor").css('background-color', args.value) : document.execCommand('forecolor', false, args.value);
}
function onClick(args) {
    var val, prop = args.text;
    val = (ej.isNullOrUndefined(args.model.text)) ? args.model.activeText : args.model.text;
    if (action1.indexOf(val) != -1)
        $("#contenteditor").empty();
    else if (action2.indexOf(val) != -1)
        document.execCommand(val, false, null);
    else if (fontfamily.indexOf(prop) != -1)
        document.execCommand("FontName", false, prop);
    else if (fontsize.indexOf(prop) != -1)
        document.execCommand("FontSize", false, prop.replace("pt", ""));
    else
        $("#contenteditor").append("<p> Action: " + val + " Triggered </p>");
}



/// <reference path="../tsfiles/jquery.d.ts" />
 /// <reference path="../tsfiles/ej.web.all.d.ts" />\

module RotatorComponent {
    $(function () {
        var rotatorInstance = new ej.Rotator($("#sliderContent"), {
            slideWidth: "100%",
            frameSpace: "0px",
            slideHeight: "auto",
            displayItemsCount: "1",
            navigateSteps: "1",
            pagerPosition:"outside",
            orientation: "horizontal",
            showPager: true,
            enabled: true,
            showCaption: true,
            allowKeyboardNavigation: true,
            showPlayButton: true,
            isResponsive:true,
            animationType: "slide",
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module RTEComponent {
    $(function () {
        var sample = new ej.RTE($("#rteSample"),{
            width: "100%",
            minWidth: "150px",
            showFooter: true,
            showHtmlSource: true,
            allowEditing: true,
            allowKeyboardNavigation: true,
            autoFocus: true,
            autoHeight: true,
            colorPaletteColumns: 10,
            colorPaletteRows: 5,
            cssClass: 'gradient-lime',
            enableResize: true,
            enableTabKeyNavigation: true,
            fileBrowser: {
                filePath: (<any>window).baseurl + "Content/FileBrowser/",
                extensionAllow: "*.png, *.doc, *.pdf, *.txt, *.docx",
                ajaxAction: (<any>window).baseurl + "api/FileExplorer/FileOperations"
            },
            imageBrowser: {
                filePath: (<any>window).baseurl + "Content/FileBrowser/",
                extensionAllow: "*.png, *.gif, *.jpg, *.jpeg, *.docx",
                ajaxAction: (<any>window).baseurl + "api/FileExplorer/FileOperations"
            },
            isResponsive: true,
            showClearAll: true,
            showClearFormat: true,
            showDimensions: true,
            showCharCount: true,
            tools: {
                formatStyle: ["format"],
                edit: ["findAndReplace"],
                font: ["fontName", "fontSize", "fontColor", "backgroundColor"],
                style: ["bold", "italic", "underline", "strikethrough"],
                alignment: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
                lists: ["unorderedList", "orderedList"],
                clipboard: ["cut", "copy", "paste"],
                doAction: ["undo", "redo"],
                indenting: ["outdent", "indent"],
                clear: ["clearFormat", "clearAll"],
                links: ["createLink", "removeLink"],
                images: ["image"],
                media: ["video"],
                tables: ["createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn", "deleteTable"],
                effects: ["superscript", "subscript"],
                casing: ["upperCase", "lowerCase"],
                view: ["fullScreen", "zoomIn", "zoomOut"],
                print: ["print"],
                customUnorderedList: [{
                    name: "unOrderInsert",
                    tooltip: "Custom UnOrderList",
                    css: "e-rte-toolbar-icon e-rte-unlistitems customUnOrder",
                    text: "Smiley",
                    listImage: "url('../content/images/rte/Smiley-GIF.gif')"
                }],
                customOrderedList: [{
                    name: "orderInsert",
                    tooltip: "Custom OrderList",
                    css: "e-rte-toolbar-icon e-rte-listitems customOrder",
                    text: "Lower-Greek",
                    listStyle: "lower-greek"
                }]
            }
        });
    });

}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ScheduleComponent {
    $(function () {
        var sample = new ej.Schedule($("#Schedule1"), {
            width: "100%",
            height: "525px",
            currentDate: new Date(2017, 5, 5),
            timeScale: {
                minorSlotCount: 4,
                majorSlot: 60
            },
            contextMenuSettings: {
                enable: true,
                menuItems: {
                    appointment: [
                        { id: "open", text: "Open Appointment" },
                        { id: "delete", text: "Delete Appointment" },
                        { id: "customMenu3", text: "Menu Item 3" },
                        { id: "customMenu4", text: "Menu Item 4" }
                    ],
                    cells: [
                        { id: "new", text: "New Appointment" },
                        { id: "recurrence", text: "New Recurring Appointment" },
                        { id: "today", text: "Today" },
                        { id: "gotodate", text: "Go to date" },
                        { id: "settings", text: "Settings" },
                        { id: "view", text: "View", parentId: "settings" },
                        { id: "timemode", text: "TimeMode", parentId: "settings" },
                        { id: "view_Day", text: "Day", parentId: "view" },
                        { id: "view_Week", text: "Week", parentId: "view" },
                        { id: "view_Workweek", text: "Workweek", parentId: "view" },
                        { id: "view_Month", text: "Month", parentId: "view" },
                        { id: "timemode_Hour12", text: "12 Hours", parentId: "timemode" },
                        { id: "timemode_Hour24", text: "24 Hours", parentId: "timemode" },
                        { id: "workhours", text: "Work Hours", parentId: "settings" },
                        { id: "customMenu1", text: "Menu Item 1" },
                        { id: "customMenu2", text: "Menu Item 2" }
                    ]
                }
            },
            resources: [{
                field: "ownerId",
                title: "Owner",
                name: "Owners", allowMultiple: true,
                resourceSettings: {
                    dataSource: [
                        { text: "Nancy", id: 1, groupId: 1, color: "#f8a398" },
                        { text: "Steven", id: 3, groupId: 2, color: "#56ca85" },
                        { text: "Michael", id: 5, groupId: 1, color: "#51a0ed" }
                    ],
                    text: "text", id: "id", groupId: "groupId", color: "color"
                }
            }],
            appointmentSettings: {
                dataSource: new ej.DataManager((<any>window).ResourcesData).executeLocal(new ej.Query().take(10)),
                id: "Id",
                subject: "Subject",
                startTime: "StartTime",
                endTime: "EndTime",
                description: "Description",
                allDay: "AllDay",
                recurrence: "Recurrence",
                recurrenceRule: "RecurrenceRule",
                resourceFields: "ownerId"
            }
        });
    });
}   
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ScrollerComponent {
    $(function () {
        var scrollerSample = new ej.Scroller($("#scrollcontent"), {
            height: "300px",
            width: "100%"
        });
        $(window).bind('resize', function () {
            scrollerSample.refresh();
        });    });
}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
module SignatureComponent {
    $(function () {
        var basicSignature = new ej.Signature($("#signature"), {
            height: "400px",
            isResponsive: true,
            strokeWidth: 3
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />


module SliderComponent {
    $(function () {
        var slider = new ej.Slider($("#minSlider"), {
            sliderType: "MinRange",
            value: 60,
            minValue: 0,
            maxValue: 100
        });
        var rangeslider = new ej.Slider($("#rangeSlider"), {
            sliderType: "Range",
            values: [30, 60],
            minValue: 0
        });

    });
}



/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module linesparkline {
    $(function () {

        var sparklinesample = new ej.Sparkline($("#line"), {
            dataSource: [12, 14, 11, 12, 11, 15, 12, 10, 11, 12, 15, 13, 12, 11, 10, 13, 15, 12, 14, 16, 14, 12, 11],
            tooltip: {
                visible: true,
                font: { size:"12px" }
            },
            type: "line",
            size: { height: "40", width:"170" },
        });
    });
}

module columnsparkline {
    $(function () {
        var sparkcolumnsample = new ej.Sparkline($("#column"), {
            dataSource: [2, 6, -1, 1, 12, 5, -2, 7, -3, 5, 8, 10,],
            negativePointColor: "red",
            highPointColor: "blue",
            tooltip: {
                visible: true,
                font: {
                    size: "12px",
                }
            },
            type: "column",
            size: { height: "100", width: "150" },
        });
    });
}

module areasparkline {
    $(function () {
        var sparkareasample = new ej.Sparkline($("#area"), {
            dataSource: [12, -10, 11, 8, 17, 6, 2, -17, 13, -6, 8, 10,],
            markerSettings: { visible: true },
            highPointColor: "blue",
            lowPointColor: "orange",
            type: "area",
            opacity: 0.5,
            tooltip: {
                visible: true,
                font: {
                    size: "12px",
                }
            },
            size: { height: "100", width: "150" },
        });
    });
}

module windlosssparkline {
    $(function () {
        var sparkwinlosssample = new ej.Sparkline($("#winloss"), {
            dataSource: [12, 15, -11, 13, 17, 0, -12, 17, 13, -15, 8, 10,],
            type: "winloss",
            size: { height: "100", width: "150" },
        });
    });
}

module piesparkline1 {
    $(function () {
        var sparkpiesample1 = new ej.Sparkline($("#pie1"), {
            dataSource: [4, 6, 7],
            type: "pie",
            tooltip: {
                visible: true,
                font: {
                    size: "12px",
                }
            },
            size: { height: "40", width: "40" },
        });
    });
}

module piesparkline2 {
    $(function () {
        var sparkpiesample2 = new ej.Sparkline($("#pie2"), {
            dataSource: [8, 9, 1,],
            type: "pie",
            tooltip: {
                visible: true,
                font: {
                    size: "12px",
                }
            },
            size: { height: "40", width: "40" },
        });
    });
}

module piesparkline3 {
    $(function () {
        var sparkpiesample3 = new ej.Sparkline($("#pie3"), {
            dataSource: [2, 3, 5],
            type: "pie",
            tooltip: {
                visible: true,
                font: {
                    size: "12px",
                }
            },
            size: { height: "40", width: "40" },
        });
    });
}

module piesparkline4 {
    $(function () {
        var sparkpiesample4 = new ej.Sparkline($("#pie4"), {
            dataSource: [10, 12, 11],
            type: "pie",
            tooltip: {
                visible: true,
                font: {
                    size: "12px",
                }
            },
            size: { height: "40", width: "40" },
        });
    });
}

	
/// <reference path="../tsfiles/jquery.d.ts" />
 /// <reference path="../tsfiles/ej.web.all.d.ts" />\


module SplitterComponent {
    $(function () {
        var splitterInstance = new ej.Splitter($("#outterSpliter"), {
            height: "250px",
            width: "50%",
            orientation: ej.Orientation.Vertical,
            properties: [{}, { paneSize: 80 }],
            isResponsive:true
        });
        var splitterInstance1 = new ej.Splitter($("#innerSpliter"), {
            isResponsive:true,
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module SpreadsheetComponent {
$(function () {
        var sample = new ej.Spreadsheet($("#basicSpreadsheet"), {
            scrollSettings: {
                height: 550,
            },
            importSettings: {
                importMapper: (<any>window).baseurl + "api/Spreadsheet/Import"
            },
            exportSettings: {
                excelUrl: (<any>window).baseurl + "api/Spreadsheet/ExcelExport",
                csvUrl: (<any>window).baseurl + "api/Spreadsheet/CsvExport",
                pdfUrl: (<any>window).baseurl + "api/Spreadsheet/PdfExport"
            },
            sheets: [{ rangeSettings: [{ dataSource: (<any>window).defaultData, startCell: "A1" }] }],
			loadComplete: () => {  
			var spreadsheet = $("#basicSpreadsheet").data("ejSpreadsheet"), xlFormat = spreadsheet.XLFormat;
			if (!(<any>spreadsheet).isImport) {
        spreadsheet.setWidthToColumns([140, 128, 105, 100, 100, 110, 120, 120, 100]);
        xlFormat.format({ "style": { "font-weight": "bold" } }, "A1:H1");
        xlFormat.format({ "type": "currency" }, "E2:H11");
        spreadsheet.XLRibbon.updateRibbonIcons();
    }}
        });
    });
}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

var default_data: Array<Object> = [
    { Category : "Employees", Country : "USA", JobDescription : "Sales",         JobGroup:"Executive",                         EmployeesCount : 50 },
	{ Category : "Employees", Country : "USA", JobDescription : "Sales",         JobGroup : "Analyst",                         EmployeesCount : 40 },
	{ Category : "Employees", Country : "USA", JobDescription : "Marketing",                                                   EmployeesCount : 40 },
	{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 55 },
	{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 175},
	{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 70 },
	{ Category : "Employees", Country : "USA", JobDescription : "Management",                                                  EmployeesCount : 40 },
	{ Category : "Employees", Country : "USA", JobDescription : "Accounts",                                                    EmployeesCount : 60 },
	
	{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 43 },
	{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 125},
	{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 60 },
	{ Category : "Employees", Country : "India",   JobDescription : "HR Executives",                                               EmployeesCount : 70 },
	{ Category : "Employees", Country : "India",   JobDescription : "Accounts",                                                    EmployeesCount : 45 },
	
	{ Category : "Employees", Country : "Germany", JobDescription : "Sales",         JobGroup : "Executive",                       EmployeesCount : 30 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Sales",         JobGroup : "Analyst",                         EmployeesCount : 40 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Marketing",                                                   EmployeesCount : 50 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 40 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 65 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 27 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Management",                                                  EmployeesCount : 33 },
	{ Category : "Employees", Country : "Germany", JobDescription : "Accounts",                                                    EmployeesCount : 55 },
	
	{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 45 },
	{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 96 },
	{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 55 },
	{ Category : "Employees", Country : "UK",      JobDescription : "HR Executives",                                               EmployeesCount : 60 },
	{ Category : "Employees", Country : "UK",      JobDescription: "Accounts",                                                     EmployeesCount: 30  },
	
	{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 40 },
	{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 65 },
	{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 27 },
	{ Category : "Employees", Country : "France", JobDescription: "Marketing",                                                     EmployeesCount: 50  }
];

module sunburstcomponent {
    $(function () {
        var sunburstsample = new ej.SunburstChart($("#Sunburst"), {
            valueMemberPath: "EmployeesCount",           
            levels: [
                {groupMemberPath: "Country"},
				{groupMemberPath: "JobDescription"},
				{groupMemberPath: "JobGroup"},
				{groupMemberPath: "JobRole"}
            ],
            dataSource: default_data,
            dataLabelSettings:{visible:true},
			tooltip:{visible:false},
			enableAnimation:false,
			size:{height:"600"},
			innerRadius:0.2,
            load: function () {
                var sender = $("#Sunburst").data("ejSunburstChart");
                var SunBurstTheme = window.themeStyle + window.themeColor + window.themeVarient;
                SunBurstTheme = SunBurstTheme.toString();
                if (SunBurstTheme.indexOf("dark") > -1 || SunBurstTheme.indexOf("contrast") > -1)
                    SunBurstTheme = "flatdark";
                else
                    SunBurstTheme = "flatlight";
                sender.model.theme = SunBurstTheme;
            },
			title:{text:"Employees Count"},
			zoomSettings:{enable:false},
			legend:{visible:true,position:'top'},
			load:"loadTheme"
        });
    });
}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module TabComponent {
    $(function () {
        var sample = new ej.Tab($("#defaultTab"),{
            width: "500px",
            collapsible: true,
            events: "click",
            heightAdjustMode: ej.Tab.HeightAdjustMode.Content,
            showCloseButton: true,
            showRoundedCorner: false
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module TagCloudComponent {
    
    
    var websiteCollection = [
        { text: "Google", url: "http://www.google.com", frequency: 12 },
        { text: "All Things Digital", url: "http://allthingsd.com/", frequency: 3 },
        { text: "Arts Technica", url: "http://arstechnica.com/", frequency: 8 },
        { text: "Business Week", url: "http://www.businessweek.com/", frequency: 2 },
        { text: "Yahoo", url: "http://in.yahoo.com/", frequency: 12 },
        { text: "Center Networks", url: "http://www.centernetworks.com/", frequency: 5 },
        { text: "Crave", url: "http://news.cnet.com/crave/", frequency: 8 },
        { text: "Crunch Gear", url: "http://techcrunch.com/gadgets/", frequency: 20 },
        { text: "Daily Tech", url: "http://www.dailytech.com/", frequency: 1 },
        { text: "Electronista", url: "http://www.electronista.com/", frequency: 3 },
        { text: "Engadget", url: "http://www.engadget.com/", frequency: 5 },
        { text: "Gearlog", url: "http://www.gearlog.com/", frequency: 9 },
        { text: "Information Week", url: "http://www.informationweek.com/", frequency: 0 },
        { text: "PCWorld", url: "http://www.pcworld.com/", frequency: 11 },
        { text: "Tech Republic", url: "http://techrepublic.com/", frequency: 3 },
        { text: "Valleywag", url: "http://valleywag.gawker.com/", frequency: 6 },
        { text: "Rediff", url: "http://in.rediff.com/", frequency: 9 },
        { text: "WebProNews", url: "http://www.webpronews.com/", frequency: 2 }
    ];

    $(function () {
        var sample = new ej.TagCloud($("#techWebList"), {
            titleText: "Tech Sites",
            dataSource: websiteCollection,
            cssClass: "gradient-lime",
            fields: {
                text: "text", url: "url", frequency: "frequency"
            }
        });
            
    });
}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
module EditorComponent {
    $(function () {
        var num = new ej.NumericTextbox($("#numeric"), {
            value: 30,
            minValue: 1,
            maxValue: 100,
            name: "numeric",
            width: "100%"
        });
        var per = new ej.PercentageTextbox($("#percent"), {
            value: 60,
            minValue: 10,
            maxValue: 1000,
            name: "percent",
            width: "100%"
        });
        var cur = new ej.CurrencyTextbox($("#currency"), {
            value: 100,
            minValue: 10,
            maxValue: 1000,
            name: "currency",
            width: "100%"
        });
        var mask = new ej.MaskEdit($("#maskedit"), {
            name: "mask",
            value: "4242422424",
            maskFormat: "99 999-99999",
            width: "100%"
        })
    });
}


/// <reference path="../tsfiles/jquery.d.ts" />
 /// <reference path="../tsfiles/ej.web.all.d.ts" />\

module TileViewComponent {
    $(function () {
        var tile1 = new ej.Tile($("#tile1"), {
            imagePosition:"fill",
			caption:{text:"People"},
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/people_1.png'
        });
		var tile2 = new ej.Tile($("#tile2"), {
            imagePosition:"center",		
			tileSize:"small",
			imageUrl:'content/images/tile/windows/alerts.png',		 
	
        });
		var tile3 = new ej.Tile($("#tile3"), {
            imagePosition:"center",		 
			tileSize:"small",
			imageUrl:'content/images/tile/windows/bing.png',		 
        });
		var tile4 = new ej.Tile($("#tile4"), {
            tileSize:"small",
		 	imageUrl:'content/images/tile/windows/camera.png',		 
        });
		var tile5 = new ej.Tile($("#tile5"), {
            imagePosition:"center",		 
			tileSize:"small",
			imageUrl:'content/images/tile/windows/messages.png',		 
        });
		var tile6 = new ej.Tile($("#tile6"), {
            imagePosition:"center",		 
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/games.png',	
			caption:{text:"Play"}
        });
		var tile7 = new ej.Tile($("#tile7"), {	 
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/map.png',
			caption:{text:"Maps"}
        });
		var tile8 = new ej.Tile($("#tile8"), {
            imagePosition:"fill",		 
			tileSize:"wide",
			imageUrl:'content/images/tile/windows/sports.png',
			caption:{text:"Sports"}
        });
		var tile9 = new ej.Tile($("#tile9"), {
            imagePosition:"fill",
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/people_2.png',
			caption:{text:"People"}
        });
		var tile10 = new ej.Tile($("#tile10"), {
            imagePosition:"center",
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/pictures.png',
			caption:{text:"Photo"}
        });
		var tile11 = new ej.Tile($("#tile11"), {
            imagePosition:"center",
			tileSize:"wide",
			imageUrl:'content/images/tile/windows/weather.png',
			caption:{text:"Weather"}
        });
		var tile12 = new ej.Tile($("#tile12"), {
            imagePosition:"center",
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/music.png',
			caption:{text:"Music"}
        });
		var tile13 = new ej.Tile($("#tile13"), {
            imagePosition:"center",
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/favs.png',
			caption:{text:"Favorites"}
        });
    });
}
/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module TimePickerComponent {
    $(function () {
        var timeSample = new ej.TimePicker($("#timepick"), {
            width: "100%"
        });
    });
}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module ToolbarComponent {
    
    $(function () {
        var sample = new ej.Toolbar($("#editingToolbar"),{
            width: "100%",
            cssClass: "gradient-lime",
            enableSeparator: true,
            
            isResponsive: true,
            orientation: ej.Orientation.Horizontal,
            showRoundedCorner: true
        });
    });

}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module TooltipComponent {
    
    $(function () {

        var sample1 = new ej.Tooltip($("#link1"),{
            content: "ECMAScript (or ES) is a trademarked scripting-language specification standardized by Ecma International in ECMA-262 and ISO/IEC 16262.",
            associate: "mousefollow",
            autoCloseTimeout: 5000,
            collision: "fit",
            containment: ".frame",
            showRoundedCorner: true,
            showShadow: true
        });

        var sample2 = new ej.Tooltip($("#link2"),{
            content: "The World Wide Web (WWW) is an information space where documents and other web resources are identified by URLs, interlinked by hypertext links, and can be accessed via the Internet.",
            position: {
                stem: {
                    horizontal: "right",
                    vertical: "center"
                },
                target: {
                    horizontal: "left",
                    vertical: "center"
                }
            },
            autoCloseTimeout: 5000,
            collision: "fit",
            containment: ".frame",
            showRoundedCorner: true,
            showShadow: true
        });

        var sample3 = new ej.Tooltip($("#link3"),{
            content: 'Object-oriented programming (OOP) is a programming language model organized around objects rather than "actions" and data rather than logic.',
            position: {
                stem: {
                    horizontal: "right",
                    vertical: "center"
                },
                target: {
                    horizontal: "left",
                    vertical: "center",
                },
            },
            associate: "mousefollow",
            autoCloseTimeout: 5000,
            collision: "fit",
            containment: ".frame",
            showRoundedCorner: true,
            showShadow: true
        });
    });
}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
module TreeGridComponent {
    $(function () {
        var treegridInstance = new ej.TreeGrid($("#TreeGridContainer"), {
        dataSource: (<any>window).treeGridData,
        childMapping: "subtasks",
        allowSorting: true,
        allowMultiSorting: true,
        enableAltRow: true,
        allowFiltering: true,
        treeColumnIndex: 1,
        allowKeyboardNavigation: true,
        showColumnChooser: true,
        showColumnOptions: true,
        contextMenuSettings: {
            showContextMenu: true,
            contextMenuItems: ["add", "edit", "delete"]
        },
        columnDialogFields: ["field", "headerText", "editType", "width", "visible", "allowSorting", "textAlign", "headerTextAlign"],
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            editMode: "cellEditing",
            rowPosition: "belowSelectedRow"
        },
        toolbarSettings: {
            showToolbar: true,
            toolbarItems: ["add","edit","delete","update","cancel","expandAll","collapseAll"]
        },
        columns: [
            { field: "taskID", headerText: "Task Id", allowFiltering: false, editType: "numericedit", filterEditType: "numericedit" },
            { field: "taskName", headerText: "Task Name", editType: "stringedit", filterEditType: "stringedit" },
            { field: "startDate", headerText: "Start Date", editType: "datepicker", filterEditType: "datepicker", format:"{0:MM/dd/yyyy}" },
            { field: "endDate", headerText: "End Date", editType: "datepicker", filterEditType: "datepicker", format:"{0:MM/dd/yyyy}" },
            { field: "progress", headerText: "Progress", editType: "numericedit", filterEditType: "numericedit" }
        ],
        isResponsive: true,
    });
});
} 

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

var population_data: Array<Object> = [
    { Continent: "Asia", Country: "Indonesia", Growth: 3, Population: 237641326 },
    { Continent: "Asia", Country: "Russia", Growth: 2, Population: 152518015 },
    { Continent: "Asia", Country: "Malaysia", Growth: 1, Population: 29672000 },
    { Continent: "North America", Country: "United States", Growth: 4, Population: 315645000 },
    { Continent: "North America", Country: "Mexico", Growth: 2, Population: 112336538 },
    { Continent: "North America", Country: "Canada", Growth: 1, Population: 39056064 },
    { Continent: "South America", Country: "Colombia", Growth: 1, Population: 47000000 },
    { Continent: "South America", Country: "Brazil", Growth: 3, Population: 193946886 },
    { Continent: "Africa", Country: "Nigeria", Growth: 2, Population: 170901000 },
    { Continent: "Africa", Country: "Egypt", Growth: 1, Population: 83661000 },
    { Continent: "Europe", Country: "Germany", Growth: 1, Population: 81993000 },
    { Continent: "Europe", Country: "France", Growth: 1, Population: 65605000 },
    { Continent: "Europe", Country: "UK", Growth: 1, Population: 63181775 }
];

module treemapcomponent {
    $(function () {
        var treemapsample = new ej.datavisualization.TreeMap($("#treemap"), {
            leafItemSettings: { showLabels: true, labelPath: "Country" },
            rangeColorMapping: [
                { color: "#77D8D8", legendLabel: "1% Growth", from: 0, to: 1 },
                { color: "#AED960", from: 0, legendLabel: "2% Growth", to: 2 },
                { color: "#FFAF51", from: 0, legendLabel: "3% Growth", to: 3 },
                { color: "#F3D240", from: 0, legendLabel: "4% Growth", to: 4 }
            ],
            levels: [
                { groupPath: "Continent", groupGap: 5, headerHeight: 25, showHeader: true, headerTemplate: 'headertemplate' }
            ],
            dataSource: population_data,
            colorValuePath: "Growth",
            weightValuePath: "Population",
            borderThickness: 0,
            showLegend: true
        });
    });
}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />
 

module TreeViewComponent {
    $(function () {
        var tree = new ej.TreeView($("#treeView"), {
            allowEditing: true,
            allowDragAndDrop: true,
            allowDropChild: true,
            allowDropSibling: true,
        });
    });
}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module UploadboxComponent {
    
    $(function () {
        var sample = new ej.Uploadbox($("#UploadDefault"),{
            saveUrl: (<any>window).baseurl + "api/uploadbox/Save",
            removeUrl: (<any>window).baseurl + "api/uploadbox/Remove",
            buttonText: {
                browse: "Choose File", upload: "Upload", cancel: "Cancel"
            },
            cssClass: "gradient- purple",
            dialogAction: {
                modal: false, closeOnComplete: false, drag: true
            },
            extensionsAllow: ".zip",
            multipleFilesSelection: true,
            showFileDetails: true
        });
    });

}

/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module WaitingPopupComponent {
    $(function () {
        var sample = new ej.WaitingPopup($("#target"),{
            showOnInit: true,
            showImage: true,
            text: 'waiting&hellip;',
			target: "#target",
			appendTo: "#waiting"
        });
    });

}
