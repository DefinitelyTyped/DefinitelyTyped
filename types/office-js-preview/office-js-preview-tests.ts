/*
office-js-preview
Copyright (c) Microsoft Corporation
*/



function test_excel() {

    // Range
    Excel.run(function (ctx) {
        var range = ctx.workbook.getSelectedRange().load("values");
        return ctx.sync()
            .then(function () {
                var vals = range.values;
                for (var i = 0; i < vals.length; i += 1) {
                    for (var j = 0; j < vals[i].length; j += 1) {
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

        var chart = sheet.charts.add(Excel.ChartType._3DColumn, range, "Auto");

        chart.format.fill.setSolidColor("F8F8FF");

        chart.title.text = "Class Demographics";
        chart.title.format.font.bold = true;
        chart.title.format.font.size = 18;
        chart.title.format.font.color = "568568";

        chart.legend.position = "Right";
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

                for (var i = 0; i < rows.items.length; i += 1) {
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

function test_excel_recent_apis(
    functions: Excel.Functions,
    sensitivityLabel: Excel.SensitivityLabel,
    sensitivityLabelDetails: Excel.SensitivityLabelDetails,
    sensitivityLabelsCatalog: Excel.SensitivityLabelsCatalog,
    abacAttribute: Excel.SensitivityLabelAbacAttribute,
    abacAttributeValue: Excel.SensitivityLabelAbacAttributeValue,
) {
    const busyErrorWithoutPreviousValue: Excel.BusyErrorCellValue = {
        type: Excel.CellValueType.error,
    };
    const busyErrorWithPreviousValue: Excel.BusyErrorCellValue = {
        type: Excel.CellValueType.error,
        previousValue: {
            type: Excel.CellValueType.string,
            basicValue: "Previous value",
        },
    };
    const previousValue: Excel.CellValue | undefined = busyErrorWithPreviousValue.previousValue;

    const pythonErrorWithoutInitializationState: Excel.PythonErrorCellValue = {
        type: Excel.CellValueType.error,
    };
    const pythonErrorDuringInitialization: Excel.PythonErrorCellValue = {
        type: Excel.CellValueType.error,
        duringInitialization: true,
    };
    const duringInitialization: boolean | undefined = pythonErrorDuringInitialization.duringInitialization;

    const abacAttributeDataType: Excel.SensitivityLabelAbacAttributeDataType =
        Excel.SensitivityLabelAbacAttributeDataType.stringValue;
    const abacAttributeDataTypeValue: "StringValue" = Excel.SensitivityLabelAbacAttributeDataType.stringValue;
    const abacAttributeClass: Excel.SensitivityLabelAbacAttribute = abacAttribute;
    const abacAttributeValueClass: Excel.SensitivityLabelAbacAttributeValue = abacAttributeValue;

    const abacAttributeValues: Excel.SensitivityLabelAbacAttributeValue[] = sensitivityLabelDetails.abacAttributeValues;
    const isAbacAttributesRequired: boolean = sensitivityLabelDetails.isAbacAttributesRequired;
    const isAbacEnabled: boolean = sensitivityLabelDetails.isAbacEnabled;

    const attributesResult: OfficeExtension.ClientResult<Excel.SensitivityLabelAbacAttribute[]> =
        sensitivityLabelsCatalog.getAttributes();
    const labelingCapability: Excel.LabelingCapability = Excel.LabelingCapability.attributeBasedAccessControlEnabled;
    const labelingCapabilityValue: "AttributeBasedAccessControlEnabled" =
        Excel.LabelingCapability.attributeBasedAccessControlEnabled;
    const labelingCapabilities: Excel.LabelingCapability[] = sensitivityLabelsCatalog.getLabelingCapabilities;
    const updateOptions: Excel.SensitivityLabelTryUpdateOptions = {
        abacAttributes: [abacAttribute],
    };
    const updateResult: OfficeExtension.ClientResult<Excel.SensitivityLabelUpdateResult> =
        sensitivityLabel.tryToUpdate("label-id", updateOptions);
    const sensitivityLabelsCatalogLoadOptions: Excel.Interfaces.SensitivityLabelsCatalogLoadOptions = {
        getLabelingCapabilities: true,
        getLabelingCapability: true,
    };
    const sensitivityLabelsCatalogData: Excel.Interfaces.SensitivityLabelsCatalogData = {
        getLabelingCapabilities: [Excel.LabelingCapability.attributeBasedAccessControlEnabled],
        getLabelingCapability: "AttributeBasedAccessControlEnabled",
    };

    const unsupportedAbac: Excel.SensitivityLabelUpdateResult = Excel.SensitivityLabelUpdateResult.unsupportedAbac;
    const unsupportedAbacValue: "UnsupportedAbac" = Excel.SensitivityLabelUpdateResult.unsupportedAbac;
    const abacAttributesRequired: Excel.SensitivityLabelUpdateResult =
        Excel.SensitivityLabelUpdateResult.abacAttributesRequired;
    const abacAttributesRequiredValue: "AbacAttributesRequired" =
        Excel.SensitivityLabelUpdateResult.abacAttributesRequired;
    const removingLabelNotSupported: Excel.SensitivityLabelUpdateResult =
        Excel.SensitivityLabelUpdateResult.removingLabelNotSupported;
    const removingLabelNotSupportedValue: "RemovingLabelNotSupported" =
        Excel.SensitivityLabelUpdateResult.removingLabelNotSupported;

    const abacAttributeData: Excel.Interfaces.SensitivityLabelAbacAttributeData = {
        dataType: Excel.SensitivityLabelAbacAttributeDataType.stringValue,
        displayName: "Department",
        displayOrder: 1,
        isActive: true,
        isMultiValued: false,
        values: [abacAttributeValue],
    };
    const abacAttributeValueData: Excel.Interfaces.SensitivityLabelAbacAttributeValueData = {
        displayName: "Engineering",
        displayOrder: 1,
        id: "engineering",
        isActive: true,
    };
    const abacAttributeLoadOptions: Excel.Interfaces.SensitivityLabelAbacAttributeLoadOptions = {
        dataType: true,
        displayName: true,
        displayOrder: true,
        isActive: true,
        isMultiValued: true,
        values: true,
    };
    const abacAttributeValueLoadOptions: Excel.Interfaces.SensitivityLabelAbacAttributeValueLoadOptions = {
        displayName: true,
        displayOrder: true,
        id: true,
        isActive: true,
    };
    const sensitivityLabelDetailsData: Excel.Interfaces.SensitivityLabelDetailsData = {
        abacAttributeValues: [abacAttributeValue],
        isAbacAttributesRequired: true,
        isAbacEnabled: true,
    };
    const sensitivityLabelDetailsLoadOptions: Excel.Interfaces.SensitivityLabelDetailsLoadOptions = {
        abacAttributeValues: true,
        isAbacAttributesRequired: true,
        isAbacEnabled: true,
    };

    const dateValueResult: Excel.FunctionResult<number> = functions.datevalue(1);

    const linkedEntityEventType: Excel.EventType = Excel.EventType.linkedEntityDataDomainLinkedEntityCellValueLoaded;
    const linkedEntityEventTypeValue: "LinkedEntityDataDomainLinkedEntityCellValueLoaded" =
        Excel.EventType.linkedEntityDataDomainLinkedEntityCellValueLoaded;

    const dirtySupportingFormulaErrorCode: Excel.ErrorCodes = Excel.ErrorCodes.dirtySupportingFormula;
    const dirtySupportingFormulaErrorCodeValue: "DirtySupportingFormula" = Excel.ErrorCodes.dirtySupportingFormula;
}

function test_removed_excel_preview_apis(
    application: Excel.Application,
    chart: Excel.Chart,
    chartSeries: Excel.ChartSeries,
    comment: Excel.Comment,
    range: Excel.Range,
    rangeAreas: Excel.RangeAreas,
    shapeCollection: Excel.ShapeCollection,
    table: Excel.Table,
    workbook: Excel.Workbook,
    worksheet: Excel.Worksheet,
    worksheetCollection: Excel.WorksheetCollection,
) {
    // @ts-expect-error Removed from the beta CDN.
    const worksheetCalculationBusyEventArgs: Excel.WorksheetCalculationBusyEventArgs = {};
    // @ts-expect-error Removed from the beta CDN.
    const localImage: Excel.LocalImage = workbook.localImage;
    // @ts-expect-error Removed from the beta CDN.
    const documentTask: Excel.DocumentTask = comment.getTask();
    // @ts-expect-error Removed from the beta CDN.
    const builtInPivotTableStyle: Excel.BuiltInPivotTableStyle = Excel.BuiltInPivotTableStyle.dark1;
    // @ts-expect-error Removed from the beta CDN.
    const builtInSlicerStyle: Excel.BuiltInSlicerStyle = Excel.BuiltInSlicerStyle.dark1;
    // @ts-expect-error Removed from the beta CDN.
    const builtInTableStyle: Excel.BuiltInTableStyle = Excel.BuiltInTableStyle.dark1;
    // @ts-expect-error Removed from the beta CDN.
    const autorunEventType: Excel.AutorunEventType = Excel.AutorunEventType.open;
    // @ts-expect-error Removed from the beta CDN.
    const tableSource: Excel.TableSource = Excel.TableSource.range;
    // @ts-expect-error Removed from the beta CDN.
    const pivotTableDateGroupBy: Excel.PivotTableDateGroupBy = Excel.PivotTableDateGroupBy.days;
    // @ts-expect-error Removed from the beta CDN.
    const pythonMarshalMode: Excel.PythonMarshalMode = Excel.PythonMarshalMode.pythonObject;

    // @ts-expect-error Removed from the beta CDN.
    application.formatStaleValues;
    // @ts-expect-error Removed from the beta CDN.
    workbook.externalCodeServiceTimeout;
    // @ts-expect-error Removed from the beta CDN.
    workbook.showPivotFieldList;
    // @ts-expect-error Removed from the beta CDN.
    workbook.use1904DateSystem;
    // @ts-expect-error Removed from the beta CDN.
    workbook.inPreviewMode();
    // @ts-expect-error Removed from the beta CDN.
    worksheet.onCalculationBusy;
    // @ts-expect-error Removed from the beta CDN.
    worksheet.onFiltered;
    // @ts-expect-error Removed from the beta CDN.
    worksheetCollection.addFromBase64("");
    // @ts-expect-error Removed from the beta CDN.
    table.clearStyle();
    // @ts-expect-error Removed from the beta CDN.
    shapeCollection.addSvg("<svg />");
    // @ts-expect-error Removed from the beta CDN.
    range.togglePythonMarshalMode();
    // @ts-expect-error Removed from the beta CDN.
    range.getSpecialCells("DirtyFormulas");
    // @ts-expect-error Removed from the beta CDN.
    rangeAreas.getSpecialCells("DirtyFormulas");
    // @ts-expect-error Removed from the beta CDN.
    chart.chartType = "ColumnClusteredEx";
    // @ts-expect-error Removed from the beta CDN.
    chartSeries.chartType = "LineEx";
    // @ts-expect-error Removed from the beta CDN.
    Excel.EventType.shapeAdded;
    // @ts-expect-error Removed from the beta CDN.
    Excel.EventType.queryQueryRefreshCompleted;
    // @ts-expect-error Removed from the beta CDN.
    Excel.SpecialCellType.dirtyFormulas;
}

function test_word_recent_apis(
    sensitivityLabel: Word.SensitivityLabel,
    sensitivityLabelsCatalog: Word.SensitivityLabelsCatalog,
) {
    const abacAttributeValue: Word.SensitivityLabelAbacAttributeValue = {
        displayName: "Engineering",
        displayOrder: 1,
        id: "engineering",
        isActive: true,
    };
    const abacAttribute: Word.SensitivityLabelAbacAttribute = {
        dataType: Word.SensitivityLabelAbacAttributeDataType.stringValue,
        displayName: "Department",
        displayOrder: 1,
        isActive: true,
        isMultiValued: false,
        values: [abacAttributeValue],
    };
    const updateOptions: Word.SensitivityLabelTryUpdateOptions = {
        abacAttributes: [abacAttribute],
    };
    const updateResult: OfficeExtension.ClientResult<Word.SensitivityLabelUpdateResult> =
        sensitivityLabel.tryToUpdate("label-id", updateOptions);
    const capabilities: Word.LabelingCapability[] = sensitivityLabelsCatalog.getLabelingCapabilities;
    const capability: Word.LabelingCapability = Word.LabelingCapability.attributeBasedAccessControlEnabled;
    const capabilityValue: "AttributeBasedAccessControlEnabled" =
        Word.LabelingCapability.attributeBasedAccessControlEnabled;

    // @ts-expect-error The justification string was replaced by SensitivityLabelTryUpdateOptions.
    sensitivityLabel.tryToUpdate("label-id", "justification");
    // @ts-expect-error ABAC attributes are plain interfaces, not client objects.
    abacAttribute.load();
    // @ts-expect-error Generated client-object data interfaces were removed.
    const abacAttributeData: Word.Interfaces.SensitivityLabelAbacAttributeData = {};

    const annotationAddedEventType: Word.EventType = Word.EventType.annotationAdded;
    const annotationAddedEventTypeValue: "AnnotationAdded" = Word.EventType.annotationAdded;
    const annotationChangedEventType: Word.EventType = Word.EventType.annotationChanged;
    const annotationDeletedEventType: Word.EventType = Word.EventType.annotationDeleted;
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
            for (var i = 0; i < searchResults.items.length; i += 1) {
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
        myContentControl.insertText('One Microsoft Way, Redmond, WA 98052', 'Replace');
        myContentControl.cannotEdit = true;
        myContentControl.appearance = 'Tags';

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

                    for (var i = 0; i < this._calloutNumber; i += 1) {
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

async function test_visio() {
    const url = "someurl";

    try {
        const session = new OfficeExtension.EmbeddedSession(url, { id: "embed-iframe", container: document.getElementById("iframeHost") });
        await session.init();
        await Visio.run(session, async context => {
            const eventResult = context.document.onPageLoadComplete.add(async args => {
                console.log(Date.now() + ": Page Load Complete Event: " + JSON.stringify(args));
            });
            await context.sync();
            console.log("Success");
        });
    } catch (error) {
        if (error instanceof OfficeExtension.Error) {
            console.log("Debug info: " + JSON.stringify(error.debugInfo));
        }
    }
}

function test_OfficePromise() {
    let p1: Promise<any> = Excel.run(async () => { return 10 });
    let p2: Promise<any> = new OfficeExtension.Promise(resolve => setTimeout(resolve, 1000));
    let p3: Promise<any> = new Office.Promise(resolve => setTimeout(resolve, 1000));
    let p4: OfficeExtension.IPromise<any> = new OfficeExtension.Promise(resolve => setTimeout(resolve, 1000));
}

async function test_interfaces() {
    await Excel.run(async context => {
        let range = context.workbook.getSelectedRange();
        range.set({
            values: [["Hi"]],
            format: {
                fill: {
                    color: "red"
                }
            }
        });

        let rangeSettables: Excel.Interfaces.RangeUpdateData = {
            values: [["Hi"]],
            format: {
                fill: {
                    color: "red"
                }
            }
        };
        range.set(rangeSettables);
    });
}

async function testResumeExistingObject () {
    let range: Excel.Range;
    await Excel.run(async context => {
        range = context.workbook.getSelectedRange();
        await context.sync();
    });

    await Excel.run(range, async context => {
        range.clear();
        await context.sync();
    });

    await Excel.run({delayForCellEdit: true, previousObjects: range}, async context => {
        range.clear();
        await context.sync();
    });
}

function test_powerpoint_recent_apis(
    abacAttribute: PowerPoint.SensitivityLabelAbacAttribute,
    sensitivityLabel: PowerPoint.SensitivityLabel,
    sensitivityLabelsCatalog: PowerPoint.SensitivityLabelsCatalog,
) {
    const capability: PowerPoint.LabelingCapability =
        PowerPoint.LabelingCapability.attributeBasedAccessControlEnabled;
    const capabilityValue: "AttributeBasedAccessControlEnabled" =
        PowerPoint.LabelingCapability.attributeBasedAccessControlEnabled;
    const capabilities: PowerPoint.LabelingCapability[] = sensitivityLabelsCatalog.getLabelingCapabilities;
    const updateOptions: PowerPoint.SensitivityLabelTryUpdateOptions = {
        abacAttributes: [abacAttribute],
    };
    const updateResult: OfficeExtension.ClientResult<PowerPoint.SensitivityLabelUpdateResult> =
        sensitivityLabel.tryToUpdate("label-id", updateOptions);
    const catalogData: PowerPoint.Interfaces.SensitivityLabelsCatalogData = {
        getLabelingCapabilities: [PowerPoint.LabelingCapability.attributeBasedAccessControlEnabled],
        getLabelingCapability: "AttributeBasedAccessControlEnabled",
    };
    const catalogLoadOptions: PowerPoint.Interfaces.SensitivityLabelsCatalogLoadOptions = {
        getLabelingCapabilities: true,
        getLabelingCapability: true,
    };
}

/* Office direct API tests */
async function testOfficeDirectApis() {
    let supported = Office.isSetSupported('ExcelApi', '1.10');
    Office.addin.setStartupBehavior(Office.StartupBehavior.load);
    let startupBehavior = Office.addin.getStartupBehavior();
    Office.ribbon.requestUpdate({
        tabs: [
            {
                id: 'test-id',
                controls: [
                {
                    id: 'button-1',
                    enabled: true,
                }]
            },
        ],
    });
}
