// Type definitions for Rappid 1.5
// Project: http://jointjs.com/about-rappid
// Definitions by: Ewout Van Gossum <https://github.com/DenEwout>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jointjs" />

import * as joint from 'jointjs';
import * as Backbone from "backbone";

export as namespace joint;

export namespace ui {
    interface Handle {
        name: string;
        position: string;
        icon: string;
    }

    class SelectionView extends Backbone.Model {
        paper: joint.dia.Paper;
        graph: joint.dia.Graph;
        model: Backbone.Collection<joint.dia.Cell>;

        constructor(opt: {
            paper: joint.dia.Paper;
            graph: joint.dia.Graph;
            model: Backbone.Collection<joint.dia.Cell>
        });

        createSelectionBox(cellView: joint.dia.CellView): void;
        destroySelectionBox(cellView: joint.dia.CellView): void;
        startSelecting(evt: any): void;
        cancelSelection(): void;

        addHandle(handle: Handle): void;
        removeHandle(name: string): void;
        changeHandle(name: string, handle: Handle): void;
    }
}
