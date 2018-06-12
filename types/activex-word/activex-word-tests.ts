/// <reference types="windows-script-host" />

// tslint:disable-next-line no-unnecessary-generics
const collectionToArray = <T>(col: {Item(index: any): T}): T[] => {
    const results: T[] = [];
    const enumerator = new Enumerator<T>(col);
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        results.push(enumerator.item());
    }
    return results;
};

const app = new ActiveXObject('Word.Application');

// https://msdn.microsoft.com/en-us/vba/word-vba/articles/modifying-a-portion-of-a-document
app.Selection.Words.Item(1).Copy();
app.ActiveDocument.Paragraphs.Item(1).Range.Copy();
app.ActiveDocument.Words.Item(1).Case = Word.WdCharacterCase.wdUpperCase;
app.Selection.Sections.Item(1).PageSetup.BottomMargin = app.InchesToPoints(0.5);
app.ActiveDocument.Content.ParagraphFormat.Space2();

const activeDoc = app.ActiveDocument;
(() => {
    const rngTenCharacters = activeDoc.Range(0, 10);
    const rngThreeWords = activeDoc.Range(activeDoc.Words.Item(1).Start, activeDoc.Words.Item(3).End);
    const rngParagraphs = activeDoc.Range(
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

    const rngParagraphs = activeDoc.Paragraphs.Item(1).Range;

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

    const dlgParagraph = app.Dialogs.Item(Word.WdWordDialog.wdDialogFormatParagraph);
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
    const paragraphFormat = app.Selection.ParagraphFormat;
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
    const pageSetup = activeDoc.PageSetup;
    pageSetup.LeftMargin += app.InchesToPoints(.5);
    pageSetup.RightMargin += app.InchesToPoints(.5);
})();

// Assigning ranges -- https://msdn.microsoft.com/en-us/vba/word-vba/articles/assigning-ranges
(() => {
    let rng1 = activeDoc.Words.Item(1);
    const rng2 = activeDoc.Words.Item(2);

    // unlike VBA, Javascript doesn't have the notion of default properties
    // after this line, rng1 and rng2 will refer to the same Range object
    rng1 = rng2;
    // changes to the Range will be visible via both variables
    rng1.MoveStart(Word.WdUnits.wdParagraph);

    // using the Duplicate property creates a copy of the original Range
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

    const rngWords = activeDoc.Words.Item(1);
    rngWords.Collapse(Word.WdCollapseDirection.wdCollapseEnd);
    rngWords.Text = '(This is a test.)';

    // Extending a selection or range

    app.Selection.MoveEnd(Word.WdUnits.wdWord, 3);

    const rngParagraphs = activeDoc.Paragraphs.Item(1).Range;
    rngParagraphs.MoveEnd(Word.WdUnits.wdParagraph, 2);

    // Changing text

    activeDoc.Words.Item(1).Text = 'The ';

    const rngFirstParagraph = activeDoc.Paragraphs.Item(1).Range;
    rngFirstParagraph.Delete();
    rngFirstParagraph.InsertAfter('New text');
    rngFirstParagraph.InsertParagraphAfter();
})();

// finding and replacing text or formatting -- https://msdn.microsoft.com/en-us/vba/word-vba/articles/finding-and-replacing-text-or-formatting
(() => {
    // Finding text and selecting it
    const find = app.Selection.Find;
    find.Forward = true;
    find.Wrap = Word.WdFindWrap.wdFindStop;
    find.Text = 'Hello';
    find.Execute();

    // Finding text without changing the selection
    const find2 = app.ActiveDocument.Content.Find;
    find2.Text = 'blue';
    find2.Forward = true;
    find2.Execute();
    if (find2.Found) { find2.Parent.Bold = true; }

    // Using the Replacement object

    const find3 = app.Selection.Find;
    find3.ClearFormatting;
    find3.Text = 'Hi';
    find3.Replacement.ClearFormatting();
    find3.Replacement.Text = 'Hello';
    find3.Forward = true;
    find3.Wrap = Word.WdFindWrap.wdFindContinue;
    find3.Execute(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Word.WdReplace.wdReplaceAll);

    const find4 = app.ActiveDocument.Content.Find;
    find4.ClearFormatting();
    find4.Format = true;
    find4.Font.Bold = true;
    find4.Replacement.ClearFormatting();
    find4.Replacement.Font.Bold = false;
    find4.Execute("", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Word.WdReplace.wdReplaceAll);
})();

// looping through a collection -- https://msdn.microsoft.com/en-us/vba/word-vba/articles/looping-through-a-collection
(() => {
    collectionToArray(app.Documents)
        .forEach(openDocument => WScript.Echo(openDocument.Name));

    const strMarks = collectionToArray<Word.Bookmark>(activeDoc.Bookmarks)
        .map(bookmark => bookmark.Name);

    collectionToArray<Word.Field>(activeDoc.Fields)
        .filter(dateField => dateField.Code.Text.indexOf('Date', 1) !== -1)
        .forEach(dateField => dateField.Update());

    const exists = collectionToArray<Word.AutoTextEntry>(activeDoc.AttachedTemplate.AutoTextEntries)
        .some(autotextEntry => autotextEntry.Name === 'Filename');
    if (exists) {
            WScript.Echo('The Filename AutoText entry exists.');
    }
})();

// inserting text in a document -- https://msdn.microsoft.com/en-us/vba/word-vba/articles/inserting-text-in-a-document
(() => {
    activeDoc.Content.InsertAfter(' The end.');
    app.Selection.InsertBefore('new text');
})();

// referring to the active document element -- https://msdn.microsoft.com/en-us/vba/word-vba/articles/referring-to-the-active-document-element
(() => {
    app.Selection.Paragraphs.Item(1).Borders.Enable = true;

    app.Selection.Paragraphs.Borders.Enable = true;

    if (app.Selection.Tables.Count >= 1) {
        app.Selection.Tables.Item(1).Rows.Item(1).Shading.Texture = Word.WdTextureIndex.wdTexture10Percent;
    } else {
        WScript.Echo('Selection doesn\'t include a table');
    }

    if (app.Selection.Tables.Count >= 1) {
        collectionToArray<Word.Table>(app.Selection.Tables)
            .forEach(table => table.Rows.Item(1).Shading.Texture = Word.WdTextureIndex.wdTexture30Percent);
    }
})();

// returning an object from a collection -- https://msdn.microsoft.com/en-us/vba/word-vba/articles/returning-an-object-from-a-collection-word
(() => {
    // no default properties in Javascript; we can't write app.Documents(1)
    const docFirst = app.Documents.Item(1);

    app.Documents.Item('Sales.doc').Activate();
    WScript.Echo(app.ActiveDocument.Name);

    app.ActiveDocument.Bookmarks.Item(1).Select();
    WScript.Echo(app.Selection.Text);

    // predefined index values;
    const border = app.Selection.Paragraphs.Item(1).Borders.Item(Word.WdBorderType.wdBorderBottom);
    border.LineStyle = Word.WdLineStyle.wdLineStyleSingle;
    border.LineWidth = Word.WdLineWidth.wdLineWidth300pt;
    border.Color = Word.WdColor.wdColorBlue;
})();

// returning text from a document -- https://msdn.microsoft.com/en-us/vba/word-vba/articles/returning-text-from-a-document
(() => {
    const find = app.Selection.Find;
    find.ClearFormatting();
    find.Style = Word.WdBuiltinStyle.wdStyleHeading1;
    find.Format = true;
    find.Forward = true;
    find.Wrap = Word.WdFindWrap.wdFindStop;
    find.Text = "";
    find.Execute();
    if (find.Found) {
        WScript.Echo(app.Selection.Text);
    }

    WScript.Echo(app.Selection.Text);

    WScript.Echo(activeDoc.Words.Item(1).Text);

    if (activeDoc.Bookmarks.Count > 0) {
        WScript.Echo(activeDoc.Bookmarks.Item(1).Range.Text);
    }
})();

// selecting text in a document -- https://msdn.microsoft.com/en-us/vba/word-vba/articles/selecting-text-in-a-document
(() => {
    activeDoc.Tables.Item(1).Select();

    activeDoc.Fields.Item(1).Select();

    const rngParagraphs = activeDoc.Range(
        activeDoc.Paragraphs.Item(1).Range.Start,
        activeDoc.Paragraphs.Item(4).Range.End
    );
    rngParagraphs.Select();
})();

// storing values when a macro ends -- https://msdn.microsoft.com/en-us/vba/word-vba/articles/storing-values-when-a-macro-ends
(() => {
    // document variables
    activeDoc.Variables.Add('Age', 12);
    const i = parseInt(activeDoc.Variables.Item('Age').Value, 10);

    // document properties
    activeDoc.CustomDocumentProperties.Add('YourName', false, Office.MsoDocProperties.msoPropertyTypeString);

    activeDoc.AttachedTemplate.AutoTextEntries.Add('MyText', app.Selection.Range);

    // no method assignment in Javascript
    ActiveXObject.set(app.System, 'PrivateProfileString', ['C:\\My Documents\\Macro.ini', 'DocTracker', 'DocNum'], '1');

    const docNum = parseInt(app.System.PrivateProfileString('C:\\My Documents\\Macro.ini', 'DocTracker', 'DocNum'), 10);

    const section = 'HKEY_CURRENT_USER\\Software\\Microsoft\\Office\\12.0\\Word\Options';
    const programDir = app.System.PrivateProfileString('', section, 'PROGRAMDIR');
    WScript.Echo(`The program directory for Word is ${programDir}`);

    ActiveXObject.set(app.System, 'PrivateProfileString', ['', section, 'DOC-PATH'], 'C:\\My Documents');
})();
