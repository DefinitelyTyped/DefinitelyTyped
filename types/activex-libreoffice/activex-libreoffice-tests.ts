(() => {
    // https://wiki.openoffice.org/wiki/Documentation/DevGuide/ProUNO/Bridge/Automation_Bridge

    // This is a JScript example
    // The service manager is always the starting point
    // If there is no office running then an office is started up
    const serviceManager = new ActiveXObject('com.sun.star.ServiceManager');

    // Create the CoreReflection service that is later used to create structs
    const coreReflection = serviceManager.createInstance("com.sun.star.reflection.CoreReflection");

    // Create the Desktop
    const desktop = serviceManager.defaultContext.getByName('/singleton/com.sun.star.frame.theDesktop');

    // Open a new empty writer document
    const args: any[] = [];
    const document = desktop.loadComponentFromURL("private:factory/swriter", "_blank", 0, args); // as com.sun.star.text.TextDocument;

    // Create a text object
    const text = document.Text;

    // Create a cursor object
    const cursor = (text.createTextCursor() as any) as com.sun.star.text.TextCursor;

    // Inserting some Text
    text.insertString(cursor, "The first line in the newly created text document.\n", false);

    // Inserting a second line
    text.insertString(cursor, "Now we're in the second line", false);

    // Create instance of a text table with 4 columns and 4 rows
    const table = document.createInstance("com.sun.star.text.TextTable");
    table.initialize(4, 4);

    // Insert the table
    text.insertTextContent(cursor, table, false);

    // Get first row
    const rows = table.Rows;
    const row = rows.getByIndex(0) as com.sun.star.table.TableRow;

    // Set the table background color
    ((table as any) as com.sun.star.beans.XPropertySet).setPropertyValue("BackTransparent", false);
    ((table as any) as com.sun.star.beans.XPropertySet).setPropertyValue("BackColor", 13421823);

    // Set a different background color for the first row
    row.setPropertyValue("BackTransparent", false);
    row.setPropertyValue("BackColor", 6710932);

    // Fill the first table row
    insertIntoCell("A1", "FirstColumn", table); // insertIntoCell is a helper function, see below
    insertIntoCell("B1", "SecondColumn", table);
    insertIntoCell("C1", "ThirdColumn", table);
    insertIntoCell("D1", "SUM", table);

    table.getCellByName("A2").setValue(22.5);
    table.getCellByName("B2").setValue(5615.3);
    table.getCellByName("C2").setValue(-2315.7);
    table.getCellByName("D2").setFormula("sum ");

    table.getCellByName("A3").setValue(21.5);
    table.getCellByName("B3").setValue(615.3);
    table.getCellByName("C3").setValue(- 315.7);
    table.getCellByName("D3").setFormula("sum ");

    table.getCellByName("A4").setValue(121.5);
    table.getCellByName("B4").setValue(-615.3);
    table.getCellByName("C4").setValue(415.7);
    table.getCellByName("D4").setFormula("sum ");

    // Change the CharColor and add a Shadow
    cursor.setPropertyValue("CharColor", 255);
    cursor.setPropertyValue("CharShadowed", true);

    // Create a paragraph break
    // The second argument is a com::sun::star::text::ControlCharacter::PARAGRAPH_BREAK constant
    text.insertControlCharacter(cursor, 0, false);

    // Inserting colored Text.
    text.insertString(cursor, " This is a colored Text - blue with shadow\n", false);

    // Create a paragraph break ( ControlCharacter::PARAGRAPH_BREAK).
    text.insertControlCharacter(cursor, 0, false);

    // Create a TextFrame.
    const textFrame = document.createInstance("com.sun.star.text.TextFrame");

    // Create a Size struct.
    const size = createStruct("com.sun.star.awt.Size"); // helper function, see below
    size.Width = 15000;
    size.Height = 400;
    textFrame.setSize(size);

    // TextContentAnchorType.AS_CHARACTER = 1
    textFrame.setPropertyValue("AnchorType", com.sun.star.text.TextContentAnchorType.AS_CHARACTER);

    // insert the frame
    text.insertTextContent(cursor, textFrame, false);

    // Get the text object of the frame
    const objFrameText = textFrame.Text;

    // Create a cursor object
    const objFrameTextCursor = objFrameText.createTextCursor();

    // Inserting some Text
    objFrameText.insertString(objFrameTextCursor, "The first line in the newly created text frame.", false);
    objFrameText.insertString(objFrameTextCursor, "\nWith this second line the height of the frame raises.", false);

    // Create a paragraph break
    // The second argument is a com::sun::star::text::ControlCharacter::PARAGRAPH_BREAK constant
    objFrameText.insertControlCharacter(cursor, 0, false);

    // Change the CharColor and add a Shadow
    cursor.setPropertyValue("CharColor", 65536);
    cursor.setPropertyValue("CharShadowed", false);

    // Insert another string
    text.insertString(cursor, " That's all for now !!", false);

    function insertIntoCell(strCellName: string, strText: string, objTable: com.sun.star.text.TextTable) {
        const objCellText = objTable.getCellByName(strCellName) as com.sun.star.table.Cell;
        const objCellCursor = (objCellText.createTextCursor() as any) as com.sun.star.text.TextCursor;
        objCellCursor.setPropertyValue("CharColor", 16777215);
        objCellText.insertString(objCellCursor, strText, false);
    }

    function createStruct<K extends keyof LibreOffice.StructNameMap>(strTypeName: K): LibreOffice.StructNameMap[K] {
        const classSize = coreReflection.forName(strTypeName);
        const aStruct: [LibreOffice.StructNameMap[K]] = [] as any;
        classSize.createObject(aStruct);
        return aStruct[0];
    }
})();

(() => {
   // This shows some specific features of the Automation bridge

    const serviceManager = new ActiveXObject('com.sun.star.ServiceManager');

    // singleton access
    const desktop = serviceManager.defaultContext.getByName('/singleton/com.sun.star.frame.theDesktop');

    // defaultContext property implements XNameAccess
    // sequence is returned as a safearray
    const elementNames = new VBArray(serviceManager.defaultContext.getElementNames()).toArray().join('\n');
    WScript.Echo(elementNames);

    // get/set methods exposed as properties -- getText => Text, getViewData/setViewData => ViewData
    const document = desktop.loadComponentFromURL("private:factory/swriter", "_blank", 0, []);
    const viewData = document.ViewData;
    WScript.Echo(viewData.Count);
    const text = document.Text;
    WScript.Echo(text);
})();

(() => {
    // Forces use of tuple type for out parameters
    // Instantiating via reflection
    const serviceManager = new ActiveXObject('com.sun.star.ServiceManager');
    const coreReflection = serviceManager.defaultContext.getByName('/singleton/com.sun.star.reflection.theCoreReflection');
    const classInfo = coreReflection.forName('com.sun.star.accessibility.Accessible');
    const accessible: [com.sun.star.accessibility.XAccessible] = [] as any;
    classInfo.createObject(accessible);
    accessible[0].acquire();

    // Get a struct via Bridge_GetStruct
    const size = serviceManager.Bridge_GetStruct('com.sun.star.awt.Size');
    size.Height = 110;
    size.Width = 120;
})();
