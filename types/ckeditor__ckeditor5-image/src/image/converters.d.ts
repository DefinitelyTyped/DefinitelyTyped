import DowncastDispatcher from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';

export function viewFigureToModel(): (dispatcher: DowncastDispatcher) => void;
export function srcsetAttributeConverter(): (dispatcher: DowncastDispatcher) => void;
export function modelToViewAttributeConverter(attributeKey: string): (dispatcher: DowncastDispatcher) => void;
