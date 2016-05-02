/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="ej.mobile.all.d.ts" />

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
    
 