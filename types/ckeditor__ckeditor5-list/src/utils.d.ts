import { DowncastWriter, Element, Model } from '@ckeditor/ckeditor5-engine';
import { UpcastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher';
import { Item } from '@ckeditor/ckeditor5-engine/src/model/item';
import { Item as ViewItem } from '@ckeditor/ckeditor5-engine/src/view/item';
import ContainerElement from '@ckeditor/ckeditor5-engine/src/view/containerelement';
import Position from '@ckeditor/ckeditor5-engine/src/view/position';
import ModelPosition from '@ckeditor/ckeditor5-engine/src/model/position';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';

export function createViewListItemElement(writer: DowncastWriter): ContainerElement;

export function generateLiInUl(modelItem: Item, conversionApi: UpcastConversionApi): ContainerElement;

export function injectViewList(
    modelItem: Item,
    injectedItem: ContainerElement,
    conversionApi: UpcastConversionApi,
    model: Model,
): void;

export function mergeViewLists(viewWriter: DowncastWriter, firstList: ViewItem, secondList: ViewItem): Position;

export function positionAfterUiElements(viewPosition: Position): Position;

export function getSiblingListItem(
    modelItem: Item,
    options?: {
        sameIndent?: boolean | undefined;
        smallerIndent?: boolean | undefined;
        listIndent?: number | undefined;
        direction?: 'forward' | 'backward' | undefined;
    },
): Item | null;

export function findNestedList(viewElement: ViewElement): ViewElement | null;

export function getSiblingNodes(position: ModelPosition, direction: 'forward' | 'backward'): Element[];
