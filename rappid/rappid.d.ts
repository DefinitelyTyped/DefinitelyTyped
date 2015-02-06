// Type definitions for Rappid 1.5
// Project: http://jointjs.com/about-rappid
// Definitions by: Ewout Van Gossum <https://github.com/DenEwout>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jointjs/jointjs.d.ts" />
/// <reference path="../backbone/backbone.d.ts" />

declare module joint{
    module ui{
        interface Handle {
            name : string;
            position : string;
            icon: string;
        }

        class SelectionView extends Backbone.Model {
            paper:joint.dia.Paper;
            graph:joint.dia.Graph;
            model:Backbone.Collection<joint.dia.Cell>;

            constructor(opt:{
                paper : joint.dia.Paper;
                graph  : joint.dia.Graph;
                model : Backbone.Collection<joint.dia.Cell>
            });

            createSelectionBox(cellView:joint.dia.CellView);
            destroySelectionBox(cellView:joint.dia.CellView);
            startSelecting(evt:any);
            cancelSelection();

            addHandle(handle:Handle);
            removeHandle(name:string);
            changeHandle(name:string, handle:Handle);
        }
    }
}