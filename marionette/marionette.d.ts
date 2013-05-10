// Type definitions for Marionette
// Project: https://github.com/zhamid/marionette
// Definitions by: Zeeshan Hamid <https://github.com/zhamid>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts" />

declare module Marionette {

  export class View extends Backbone.View {
    constructor(options?: any);

    modelEvents: any;
    collectionEvents: any;
    ui: any;

    getTemplate(): any;
    mixinTemplateHelpers(target?: any): any;
    configureTriggers(): any;
    delegateEvents(events?: any): any;
    undelegateEvents();

    close();
    bindUIElements();
    unbindUIElements();
  }

  export class ItemView extends Marionette.View {
    ui: any;

    constructor(options?: any);

    serializeData(): any;
    render(): View;
    close();
  }

  export class CollectionView extends Marionette.View {
    itemView: any;

    constructor(options?: any);

    _initialEvents();
    addChildView(item: View, collection: View, options?: any);
    onShowCalled();

    triggerBeforeRender();
    triggerRendered();
    render(): View;

    getItemView(item: any): ItemView;
    addItemView(item: any, ItemView: ItemView, index: Number);
    renderItemView(view: View, index: Number);
    buildItemView(item: any, ItemViewType: any, itemViewOptions: any): any;
    removeItemView(item: any);
    removeChildView(view: View);

    checkEmpty();

    appendHtml(collectionView: View, itemView: View, index: Number);

    close();
    closeChildren();
    addChildViewEventForwarding(view: View);
  }


  export class CompositeView extends Marionette.CollectionView {
    itemView: any;
    itemViewContainer: string;

    constructor(options?: any);

    appendHtml(cv: any, iv: any);
  }

}