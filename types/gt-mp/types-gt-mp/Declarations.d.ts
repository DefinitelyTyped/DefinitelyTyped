/// <reference path="index.d.ts" />

declare const API: GrandTheftMultiplayer.Client.Javascript.ScriptContext;
declare const host: Microsoft.ClearScript.HostFunctions;
import Keys = System.Windows.Forms.Keys;
import Point = System.Drawing.Point;
import PointF = System.Drawing.PointF;
import Size = System.Drawing.Size;
import LocalHandle = GrandTheftMultiplayer.Client.Util.LocalHandle;
import menuControl = NativeUI.UIMenu.MenuControls;
import Vector3 = GrandTheftMultiplayer.Shared.Math.Vector3;

declare var resource: any;

declare interface IConnectedEvent {
    disconnect(): void;
}

declare interface IEvent<THandler> {
    connect(handler: THandler): IConnectedEvent;
}

declare module Enums {
    export const enum Controls { }
}

declare interface ListConstructor<T> extends System.Collections.Generic.List<T> {
    new (type: any): System.Collections.Generic.List<T>;
}

declare var List: ListConstructor<any>;

declare interface DictionaryConstructor<TKey, TValue> extends System.Collections.Generic.Dictionary<TKey, TValue> {
    new (keyType: any, valueType: any): System.Collections.Generic.Dictionary<TKey, TValue>;
}

declare var Dictionary: DictionaryConstructor<any, any>;