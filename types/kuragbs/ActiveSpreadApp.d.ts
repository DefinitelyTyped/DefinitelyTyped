// Type definitions kuragbs 1.0
// Project: Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.
// Definitions by: Brian Phung <https://github.com/brian-phung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="google-apps-script" />
declare namespace KuraGBS {
    namespace GSheets {
        type Sheet = GoogleAppsScript.Spreadsheet.Sheet;
        type Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
        class ActiveSpreadApp {
            id: string | undefined;
            spread: Spreadsheet;
            currentSheet: Sheet|undefined;
            onGetActiveSpread(): Spreadsheet;
            onGetSheetValues(sheetName: string, sheetRange: string): any[][] | null;
            onGetSheetValuesAndFormulas(sheetName: string, sheetRange: string): any[][][] | null;
        }
    }
}
declare var ActiveSpreadApp: KuraGBS.GSheets.ActiveSpreadApp;
