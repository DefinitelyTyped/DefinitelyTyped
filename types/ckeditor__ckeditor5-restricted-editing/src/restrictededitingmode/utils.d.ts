import { Editor } from '@ckeditor/ckeditor5-core';
import { Range } from '@ckeditor/ckeditor5-engine';
import { Marker } from '@ckeditor/ckeditor5-engine/src/model/markercollection';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';

export function getMarkerAtPosition(editor: Editor, position: Position): Marker | void;

export function isPositionInRangeBoundaries(range: Range, position: Position): boolean;

export function isSelectionInMarker(selection: Selection, marker: Marker): boolean;
