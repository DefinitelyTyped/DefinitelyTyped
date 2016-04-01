/// <reference path="../d3/d3.d.ts" />
/// <reference path="nvd3.d.ts" />
nv.addGraph(function() { 
      var chart = nv.models.boxPlotChart() 
          .x(function(d) { return d.label }) 
          .y(function(d) { return d.values.Q3 }) 
          .staggerLabels(true) 
          .maxBoxWidth(75) // prevent boxes from being incredibly wide  
          .yDomain([0, 500]) 
          ; 
       
      d3.select('#chart1 svg') 
          .datum(exampleData()) 
          .call(chart); 
 
      nv.utils.windowResize(chart.update); 
 
      return chart; 
    }); 
 
    function exampleData() { 
     return  [  
        { 
          label: "Sample A", 
          values: {  
            Q1: 120, 
            Q2: 150, 
            Q3: 200, 
            whisker_low: 115, 
            whisker_high: 210, 
            outliers: [50, 100, 225] 
          }, 
        }, 
        { 
          label: "Sample B", 
          values: {  
            Q1: 300, 
            Q2: 350, 
            Q3: 400, 
            whisker_low: 225, 
            whisker_high: 425, 
            outliers: [175]           
          }, 
        }, 
        { 
          label: "Sample C", 
          values: {  
            Q1: 50, 
            Q2: 100, 
            Q3: 125, 
            whisker_low: 25, 
            whisker_high: 175, 
            outliers: [0] 
          }, 
        } 
      ]; 
    }