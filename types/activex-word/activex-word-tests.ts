let app = new ActiveXObject('Word.Application');

// https://msdn.microsoft.com/en-us/vba/word-vba/articles/modifying-a-portion-of-a-document
app.Selection.Words.Item(1).Copy();
app.ActiveDocument.Paragraphs.Item(1).Range.Copy();
app.ActiveDocument.Words.Item(1).Case = Word.WdCharacterCase.wdUpperCase;
app.Selection.Sections.Item(1).PageSetup.BottomMargin = app.InchesToPoints(0.5);
app.ActiveDocument.Content.ParagraphFormat.Space2();

let activeDoc = app.ActiveDocument;
(() => {
    let rngTenCharacters = activeDoc.Range(0, 10);
    let rngThreeWords = activeDoc.Range(activeDoc.Words.Item(1).Start, activeDoc.Words.Item(3).End);
    let rngParagraphs = activeDoc.Range(
        activeDoc.Paragraphs.Item(2).Range.Start,
        activeDoc.Paragraphs.Item(3).Range.End
    );
})();

// https://msdn.microsoft.com/en-us/vba/word-vba/articles/working-with-range-objects
(() => {
    // using the Range method

    let rngDoc = activeDoc.Range(0, 10);
    rngDoc.Bold = true;

    rngDoc = activeDoc.Range(0, 0);
    rngDoc.InsertBefore('Hello');

    rngDoc = activeDoc.Range(
        activeDoc.Paragraphs.Item(2).Range.Start,
        activeDoc.Paragraphs.Item(3).Range.End
    );

    // using the Range property

    let rngParagraphs = activeDoc.Paragraphs.Item(1).Range;

    activeDoc.Paragraphs.Item(2).Range.Select();

    rngParagraphs.Bold = true;
    rngParagraphs.ParagraphFormat.Alignment = Word.WdParagraphAlignment.wdAlignParagraphCenter;
    rngParagraphs.Font.Name = 'Stencil';
    rngParagraphs.Font.Size = 15;

    // redefine a Range object

    let rngParagraph = app.Selection.Range;
    rngParagraph.SetRange(rngParagraph.Start, rngParagraph.End + 10);

    rngParagraph = activeDoc.Paragraphs.Item(2).Range;
    rngParagraph.SetRange(rngParagraph.Start, activeDoc.Paragraphs.Item(3).Range.End);
    rngParagraph.Select();
    app.Selection.Font.Italic = true;
})();

// https://msdn.microsoft.com/en-us/vba/word-vba/articles/displaying-built-in-word-dialog-boxes
(() => {
    // showing a built-in dialog box

    app.Dialogs.Item(Word.WdWordDialog.wdDialogFileOpen).Show();
    app.Dialogs.Item(Word.WdWordDialog.wdDialogFilePrint).Show();

    let dlg = app.Dialogs.Item(Word.WdWordDialog.wdDialogFormatBordersAndShading);
    dlg.DefaultTab = Word.WdWordDialogTab.wdDialogFormatBordersAndShadingTabBorders;
    dlg.Show();

    dlg = app.Dialogs.Item(Word.WdWordDialog.wdDialogToolsOptionsUserInfo);
    dlg.Display();
    if ((dlg as any).Name !== '') { dlg.Execute(); }

    // returning and changing dialog box settings

    let dlgParagraph = app.Dialogs.Item(Word.WdWordDialog.wdDialogFormatParagraph);
    WScript.Echo(`Right indent = ${(dlgParagraph as any).RightIndent}`);

    dlg = app.Dialogs.Item(Word.WdWordDialog.wdDialogFormatParagraph);
    (dlg as any).KeepWithNext = 1;
    dlg.Execute();

    // use of the Update method -- https://msdn.microsoft.com/en-us/vba/word-vba/articles/dialog-update-method-word
    dlg = app.Dialogs.Item(Word.WdWordDialog.wdDialogFormatFont);
    app.Selection.Font.Name = 'Arial';
    dlg.Update();
    dlg.Show();

    // checking how a dialog box was closed

    if (app.Dialogs.Item(Word.WdWordDialog.wdDialogInsertBreak).Show() === -1) {
        app.StatusBar = 'Break inserted';
    }
})();

// https://msdn.microsoft.com/en-us/vba/word-vba/articles/applying-formatting-to-text
(() => {
    // Applying formatting to the selection
    let font = app.Selection.Font;
    font.Name = 'Times New Roman';
    font.Size = 14;
    font.AllCaps = true;
    let paragraphFormat = app.Selection.ParagraphFormat;
    paragraphFormat.LeftIndent = app.InchesToPoints(0.5);
    paragraphFormat.Space1();

    // Applying formatting to a range
    let rngFormat = activeDoc.Range(
        activeDoc.Paragraphs.Item(1).Range.Start,
        activeDoc.Paragraphs.Item(3).Range.End
    );
    rngFormat.Font.Name = 'Arial';
    rngFormat.ParagraphFormat.Alignment = Word.WdParagraphAlignment.wdAlignParagraphJustify;

    // Inserting text and applying character and paragraph formatting
    rngFormat = activeDoc.Range(0, 0);
    rngFormat.InsertAfter('Title');
    rngFormat.InsertParagraphAfter();
    font = rngFormat.Font;
    font.Name = 'Tahoma';
    font.Size = 24;
    font.Bold = true;
    let paragraph = activeDoc.Paragraphs.Item(1);
    paragraph.Alignment = Word.WdParagraphAlignment.wdAlignParagraphCenter;
    paragraph.SpaceAfter = app.InchesToPoints(0.5);

    // Toggling the space before a paragraph between 12 points and none
    paragraph = app.Selection.Paragraphs.Item(1);
    paragraph.SpaceBefore = paragraph.SpaceBefore > 0 ? 0 : 6;

    // Toggle bold formatting
    app.Selection.Font.Bold = Word.WdConstants.wdToggle;

    // Increase margins by .5 inches
    let pageSetup = activeDoc.PageSetup;
    pageSetup.LeftMargin += app.InchesToPoints(.5);
    pageSetup.RightMargin += app.InchesToPoints(.5);
})();

// Assigning ranges -- https://msdn.microsoft.com/en-us/vba/word-vba/articles/assigning-ranges
(() => {
    let rng1 = activeDoc.Words.Item(1);
    let rng2 = activeDoc.Words.Item(2);

    // unlike VBA, Javascript doesn't have the notion of default properties
    // after this line, rng1 and rng2 will refer to the same Range object
    rng1 = rng2;
    // changes to the Range will be visible via both variables
    rng1.MoveStart(Word.WdUnits.wdParagraph);

    // using the Duplicate property
    rng1 = rng2.Duplicate;
})();

// Editing text -- https://msdn.microsoft.com/en-us/vba/word-vba/articles/editing-text
(() => {
    // Determining whether text is selected
    if (app.Selection.Type === Word.WdSelectionType.wdSelectionIP) {
        app.Selection.Font.Engrave = true;
    } else {
        WScript.Echo('You need to select some text');
    }

    // Collapsing a section or range

    app.Selection.Collapse(Word.WdCollapseDirection.wdCollapseStart);

    let rngWords = activeDoc.Words.Item(1);
    rngWords.Collapse(Word.WdCollapseDirection.wdCollapseEnd);
    rngWords.Text = '(This is a test.)';

    // Extending a selection or range

    app.Selection.MoveEnd(Word.WdUnits.wdWord, 3);

    let rngParagraphs = activeDoc.Paragraphs.Item(1).Range;
    rngParagraphs.MoveEnd(Word.WdUnits.wdParagraph, 2);

    // Changing text

    activeDoc.Words.Item(1).Text = 'The ';

    let rngFirstParagraph = activeDoc.Paragraphs.Item(1).Range;
    rngFirstParagraph.Delete();
    rngFirstParagraph.InsertAfter('New text');
    rngFirstParagraph.InsertParagraphAfter();
})();

// finding and replacing text or formatting
(() => {
    // Finding text and selecting it
    let find = app.Selection.Find;
    find.Forward = true;
    find.Wrap = Word.WdFindWrap.wdFindStop;
    find.Text = 'Hello';
    find.Execute();

    // Finding text without changing the selection
    let find2 = app.ActiveDocument.Content.Find;
    find2.Text = 'blue';
    find2.Forward = true;
    find2.Execute();
    if (find2.Found) { find2.Parent.Bold = true; }

    // Using the Replacement object
    let find3 = app.Selection.Find;
    find3.ClearFormatting;
})();
