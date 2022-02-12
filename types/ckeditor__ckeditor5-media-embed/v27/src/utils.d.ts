import { DowncastWriter, Element, Model } from '@ckeditor/ckeditor5-engine';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import ContainerElement from '@ckeditor/ckeditor5-engine/src/view/containerelement';
import DocumentSelection from '@ckeditor/ckeditor5-engine/src/view/documentselection';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import ViewSelection from '@ckeditor/ckeditor5-engine/src/view/selection';
import MediaRegistry from './mediaregistry';

export function toMediaWidget(viewElement: ViewElement, writer: DowncastWriter, label: string): void;

export function getSelectedMediaViewWidget(selection: ViewSelection | DocumentSelection): ViewElement | null;

export function isMediaWidget(viewElement: ViewElement): boolean;

export function createMediaFigureElement(
    writer: DowncastWriter,
    registry: MediaRegistry,
    url: string,
    options?: {
        elementName?: string | undefined;
        useSemanticWrapper?: boolean | undefined;
        renderForEditingView?: boolean | undefined;
    },
): ContainerElement;

export function getSelectedMediaModelWidget(selection: Selection): Element;

export function insertMedia(model: Model, url: string, insertPosition?: Position): void;
