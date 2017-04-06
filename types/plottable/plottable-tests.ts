

var data = [
  { x: 1, y: 1, x2: 2, y2: 2 },
  { x: 4, y: 4, x2: 3, y2: 3 },
  { x: 2, y: 2, x2: 3, y2: 3 }
];

// Create a dataset
var dataset = new Plottable.Dataset(data);

// Generate a bunch of scales
var linearScale = new Plottable.Scales.Linear();
var modifiedLogScale = new Plottable.Scales.ModifiedLog();
var categoryScale = new Plottable.Scales.Category();
var categorySecondaryScale = new Plottable.Scales.Category();

// Generate a bunch of axes
var numericAxis = new Plottable.Axes.Numeric(linearScale, "bottom");
var numericSecondaryAxis = new Plottable.Axes.Numeric(modifiedLogScale, "left");
var categoryAxis = new Plottable.Axes.Category(categoryScale, "bottom");
var categorySecondaryAxis = new Plottable.Axes.Category(categorySecondaryScale, "left");

// Scatter plot
var scatter = new Plottable.Plots.Scatter()
  .x((d) => d.x, linearScale)
  .y((d) => d.y, categoryScale)
  .addDataset(dataset);

// Line plot
var line = new Plottable.Plots.Line()
  .x((d) => d.x, linearScale)
  .y((d) => d.y, modifiedLogScale)
  .addDataset(dataset);

// Rectangle plot
var rectangle = new Plottable.Plots.Rectangle()
  .x((d) => d.x, linearScale)
  .y((d) => d.y, modifiedLogScale)
  .x2((d) => d.x2)
  .y2((d) => d.y2)
  .addDataset(dataset);

// Create a group of plots
var group = new Plottable.Components.Group([line, scatter]);

// Make a chart
new Plottable.Components.Table([
  [numericSecondaryAxis, group],
  [null, numericAxis]
]);