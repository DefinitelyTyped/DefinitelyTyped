/*
office-js
Copyright (c) Microsoft Corporation
*/



function test_excel() {

	// Range
	Excel.run(function (ctx) {
		var range = ctx.workbook.getSelectedRange().load("values");
		return ctx.sync()
			.then(function () {
				var vals = range.values;
				for (var i = 0; i < vals.length; i++) {
					for (var j = 0; j < vals[i].length; j++) {
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

		var chart = sheet.charts.add(Excel.ChartType._3DColumn, range, "auto");

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

				for (var i = 0; i < rows.items.length; i++) {
					if (rows.items[i].values[0][1] > largestValue) {
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


	// Object.set
	Excel.run(ctx => {
		const range = ctx.workbook.getSelectedRange();
		range.set({
			values: [[1]],
			format: {
				font: {
					bold: true
				},
				fill: {
					color: "red"
				}
			}
		});

		return ctx.sync();
	}).catch(console.log);
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

	// Body.insertInlinePictureFromBase64 Word 1.1    
	Word.run(function (context) {

		// Create a proxy body object.     
		var body = context.document.body;

		// Queue a command to insert the image into the document.        
		var image = body.insertInlinePictureFromBase64('', Word.InsertLocation.start);

		// Queue a command to select the image.
		image.select();

		// Synchronize the document state by executing the queued commands,
		// and returning a promise to indicate task completion. 
		return context.sync()
	})
		.catch(function (error) {
			console.log('Error: ' + JSON.stringify(error));
			if (error instanceof OfficeExtension.Error) {
				console.log('Debug info: ' + JSON.stringify(error.debugInfo));
			}
		});

	// Body.insertInlinePictureFromBase64 Word 1.2
	Word.run((context) => {

		// Create a proxy object for the range at the current selection.
		var imageRange = context.document.getSelection();

		// Load the selected range.
		context.load(imageRange, 'text');

		// Synchronize the document state by executing the queued commands, 
		// and return a promise to indicate task completion.
		return context.sync()
			.then(() => {

				// Queue a command to insert the image into the document.
				var insertedImage = imageRange.insertInlinePictureFromBase64('', Word.InsertLocation.replace);

				// Queue a command to navigate the UI to the insert picture.
				insertedImage.select();

				// Queue an indefinite number of commands to insert paragraphs 
				// based on the number of callouts added to the image. 
				if (this._calloutNumber > 0) {
					var lastParagraph = insertedImage.insertParagraph('Here are your callout descriptions:', Word.InsertLocation.after) as Word.Paragraph;

					for (var i = 0; i < this._calloutNumber; i++) {
						lastParagraph = lastParagraph.insertParagraph((i + 1) + ') [enter callout description].', Word.InsertLocation.after);
					}
				}
			})
			// Synchronize the document state by executing the queued commands.
			.then(context.sync);
	})
		.catch((error) => {
			console.log('Error: ' + JSON.stringify(error));
			if (error instanceof OfficeExtension.Error) {
				console.log('Debug info: ' + JSON.stringify(error.debugInfo));
			}
		});

}
