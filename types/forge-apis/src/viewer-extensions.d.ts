//
// Copyright (c) Autodesk, Inc. All rights reserved
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
//
/// <reference path='viewer.d.ts' />

declare module Autodesk {
    export module Viewing {
        export module Extensions {
            export module Markups {
                export module Core {
                    export class MarkupsCore extends Autodesk.Viewing.Extension {
                        duringEditMode: boolean;
                        duringViewMode: boolean;

                        enterEditMode(): boolean;
                        leaveEditMode(): boolean;
                        changeEditMode(mode: EditMode): void;
                        hide(): boolean;
                        show(): boolean;
                        toggle(): boolean;
                        clear(): void;
                        generateData(): string;
                        generatePoints3d(): any;
                        allowNavigation(allow: boolean): void;
                        disableMarkupInteractions(disable: boolean): void;
                    }

                    export class EditMode {
                        constructor(extension: Autodesk.Viewing.Extension);
                    }

                    export class EditModeArrow extends EditMode {
                    }

                    export class EditModeCircle extends EditMode {
                    }

                    export class EditModeCloud extends EditMode {
                    }

                    export class EditModeFreehand extends EditMode {
                    }

                    export class EditModeRectangle extends EditMode {
                    }

                    export class EditModeText extends EditMode {
                    }
                }
            }
        }
    }
}