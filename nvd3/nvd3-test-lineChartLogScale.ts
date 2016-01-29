﻿/// <reference path="nvd3.d.ts" />
module nvd3_test_lineChartLogScale {
var chart;
     var data;


     nv.addGraph(function () {
         chart = nv.models.lineChart()
             .x(function (d) { return d.x; })
             .options({
                 showLegend: true,
                 showYAxis: true,
                 showXAxis: true,
                 useInteractiveGuideline: true
             });

         data = GenerateData();

         chart.xAxis
             .axisLabel("x axis")
             .tickFormat(d3.format('0.2f'));

         chart.yScale(d3.scale.log());
         chart.yAxis
             .axisLabel("Log axis")
             .tickFormat(d3.format('.4e'));

         d3.select('#chart1').append('svg')
             .datum(data)
             .call(chart);

         nv.utils.windowResize(chart.update);

         return chart;

     });

     function GenerateData() {
           var sin = [],
               sin2 = [];
  
           for (var i = 0; i < 100; i++) {
                   sin.push({ x: i, y: Math.abs(i % 10 == 5 ? null : Math.sin(i / 10)) }); //the nulls are to show how defined works 
                   sin2.push({ x: i, y: Math.abs(Math.sin(i / 5) * 0.4 - 0.25) });
      
  }
  
           return [
                { 
                           area: true, 
                           values: sin,
                           key: "l1", 
                           color: "#ff7f0e", 
                           strokeWidth: 4, 
                           classed: 'dashed' 
         },
                  { 
                           values: sin2,
                           key: "l2", 
                           color: "#2ca02c" 
         } 
     ];

  } 

  
}