/*
office-js
Copyright (c) Microsoft Corporation
*/

/// <reference path="office-js.d.ts" />

function test_excel() {
	
	// Range
	Excel.run(function(ctx) {
		var range = ctx.workbook.getSelectedRange().load("values");
		return ctx.sync()
			.then(function() {
				var vals = range.values;
				for (var i = 0; i < vals.length; i++){
					for (var j = 0; j < vals[i].length; j++){
						vals[i][j] = vals[i][j].toUpperCase();
					}
				}
				range.values = vals;
			})
			.then(ctx.sync);	
	}).catch(function (error) {
		console.log(error);
	});
	
	
	// Chart
	Excel.run(function (ctx) {
		var sheet = ctx.workbook.worksheets.getItem("Sheet1");
		
		var range = sheet.getRange("A1:B3");
		range.values = [
			["", "Gender"],
			["Male", 12],
			["Female", 14]
		];
		
		var chart = sheet.charts.add("pie", range, "auto");
		
		chart.format.fill.setSolidColor("F8F8FF");
		
		chart.title.text = "Class Demographics";
		chart.title.format.font.bold = true;
		chart.title.format.font.size = 18;
		chart.title.format.font.color = "568568";
		
		chart.legend.position = "right";
		chart.legend.format.font.name = "Algerian";
		chart.legend.format.font.size = 13;
		
		chart.dataLabels.showPercentage = true;
		chart.dataLabels.format.font.size = 15;
		chart.dataLabels.format.font.color = "444444";
		
		var points = chart.series.getItemAt(0).points;
		points.getItemAt(0).format.fill.setSolidColor("8FBC8F");
		points.getItemAt(1).format.fill.setSolidColor("D87093");
		
		return ctx.sync();
	}).catch(function (error) {
		console.log(error);
	});
	
	
	// Table
	Excel.run(function (ctx) {
		var rows = ctx.workbook.tables.getItem("Table1").rows.load("values");
		return ctx.sync()
			.then(function () {
				var largestRow = 0;
				var largestValue = 0;
				
				for (var i = 0; i < rows.items.length; i++){
					if (rows.items[i].values[0][1] > largestValue){
						largestRow = i;
						largestValue = rows.items[i].values[0][1];
					}
				}
				
				var largestRowRng = rows.getItemAt(largestRow).getRange();
				largestRowRng.format.fill.color = "#ff0000";
				
			})
			.then(ctx.sync);	
	}).catch(function (error) {
		console.log(error);
	});
	
}

function test_word() {
	
	// Search
	Word.run(function (context) {
		
		// Create a proxy object for the document body.
		var body = context.document.body;
		
		// Setup the search options.
		var options = Word.SearchOptions.newObject(context);
		options.matchCase = false
	
		// Queue a commmand to search the document.
		var searchResults = context.document.body.search('video', options);
	
		// Queue a commmand to load the results.
		context.load(searchResults, 'text, font');
	
		// Synchronize the document state by executing the queued-up commands, 
		// and return a promise to indicate task completion.
		return context.sync().then(function () {
			var results = 'Found count: ' + searchResults.items.length + 
						'; we highlighted the results.';
	
			// Queue a command to change the font for each found item. 
			for (var i = 0; i < searchResults.items.length; i++) {
			searchResults.items[i].font.color = '#FF0000'    // Change color to Red
			searchResults.items[i].font.highlightColor = '#FFFF00';
			searchResults.items[i].font.bold = true;
			}
			
			// Synchronize the document state by executing the queued-up commands, 
			// and return a promise to indicate task completion.
			return context.sync().then(function () {
				console.log(results);
			});  
		});  
	})
	.catch(function (error) {
		console.log('Error: ' + JSON.stringify(error));
		if (error instanceof OfficeExtension.Error) {
			console.log('Debug info: ' + JSON.stringify(error.debugInfo));
		}
	});

	
	// Content control
	Word.run(function (context) {
		
		// Create a proxy range object for the current selection.
		var range = context.document.getSelection();
		
		// Queue a commmand to create the content control.
		var myContentControl = range.insertContentControl();
		myContentControl.tag = 'Customer-Address';
		myContentControl.title = 'Enter Customer Address Here:';
		myContentControl.style = 'Heading 2';
		myContentControl.insertText('One Microsoft Way, Redmond, WA 98052', 'replace');
		myContentControl.cannotEdit = true;
		myContentControl.appearance = 'tags';
		
		// Queue a command to load the id property for the content control you created.
		context.load(myContentControl, 'id');
		
		// Synchronize the document state by executing the queued-up commands, 
		// and return a promise to indicate task completion.
		return context.sync().then(function () {
			console.log('Created content control with id: ' + myContentControl.id);
		});  
	})
	.catch(function (error) {
		console.log('Error: ' + JSON.stringify(error));
		if (error instanceof OfficeExtension.Error) {
			console.log('Debug info: ' + JSON.stringify(error.debugInfo));
		}
	});

}
