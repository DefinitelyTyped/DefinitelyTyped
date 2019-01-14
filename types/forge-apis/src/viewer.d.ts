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
/// <reference types="THREE" />

declare module Autodesk {
    export module Viewing {
        // events
        export var ESCAPE_EVENT: string;
        export var PROGRESS_UPDATE_EVENT: string;
        export var FULLSCREEN_MODE_EVENT: string;
        export var NAVIGATION_MODE_CHANGED_EVENT: string;
        export var VIEWER_STATE_RESTORED_EVENT: string;
        export var VIEWER_RESIZE_EVENT: string;
        export var VIEWER_UNINITIALIZED: string;
        export var MODEL_ROOT_LOADED_EVENT: string;
        export var GEOMETRY_LOADED_EVENT: string;
        export var TOOLBAR_CREATED_EVENT: string;
        export var OBJECT_TREE_CREATED_EVENT: string;
        export var OBJECT_TREE_UNAVAILABLE_EVENT: string;
        export var MODEL_UNLOADED_EVENT: string;
        export var SELECTION_CHANGED_EVENT: string;
        export var AGGREGATE_SELECTION_CHANGED_EVENT: string;
        export var ISOLATE_EVENT: string;
        export var HIDE_EVENT: string;
        export var SHOW_EVENT: string;
        export var HIGHLIGHT_EVENT: string;
        export var CAMERA_CHANGE_EVENT: string;
        export var EXPLODE_CHANGE_EVENT: string;
        export var CUTPLANES_CHANGE_EVENT: string;
        export var TOOL_CHANGE_EVENT: string;
        export var TOOLBAR_CREATED_EVENT: string;
        export var RENDER_OPTION_CHANGED_EVENT: string;
        export var LAYER_VISIBILITY_CHANGED_EVENT: string;
        export var RESET_EVENT: string;
        export var ANIMATION_READY_EVENT: string;

        export enum SelectionMode {
            LEAF_OBJECT,
            FIRST_OBJECT,
            LAST_OBJECT
        }

        export var theExtensionManager: ExtensionManager;

        export interface InitializerOptions {
            env?: string;
            language?: string;
            webGLHelpLink?: string;
            getAccessToken?(callback?: (accessToken: string, expires?: number) => void): void;
            refreshToken?(callback?: (accessToken: string, expires?: number) => void): void;
        }

        export function Initializer(options: InitializerOptions, callback?: () => void): void;

        export class Document {
            static load(documentId: string, successCallback: (doc: Document) => void, errorCallback: (errorCode: number, errorMsg: string, messages: any[]) => void, accessControlProperties?: any): void;
            static getSubItemsWithProperties(item: Object, properties: Properties, recursive: boolean): Object[];

            acmSessionId: string;

            getRootItem(): Object;
            getViewablePath(item: Object): string;
        }

        export class Extension {
            viewer: Autodesk.Viewing.Private.GuiViewer3D;
            options: any;
            constructor(viewer: Autodesk.Viewing.Private.GuiViewer3D, options: any);

            load(): boolean;
            unload(): boolean;
        }

        export class ExtensionManager {
            registerExtension(extensionId: string, extension: any): boolean;
            unregisterExtension(extensionId: string): boolean;

            getExtension(extensionId: string): any;
        }

        export class InstanceTree {
            maxDepth: number;
            nodeAccess: InstanceTreeAccess;
            numHidden: number;
            numOff: number;
            objectCount: number;

            enumNodeChildren(node: number|any, callback: (dbId: number) => void, recursive?: boolean): void;
            enumNodeFragments(node: number|any, callback: (fragId: number) => void, recursive?: boolean): void;
            getChildCount(dbId: number): number;
            getNodeBox(dbId: number, nodeBox: Float32Array): void;
            getNodeParentId(dbId: number): number;
            getRootId(): number;
            setFlagGlobal(flag: any, value: any): void;
            setFlagNode(dbId: number, flag: any, value: any): boolean;
        }

        export class InstanceTreeAccess {
            children: any;
            dbIdToIndex: any;
            nameSuffixes: any;
            names: any;
            nodeBoxes: any;
            nodes: any;
            numNodes: number;
            rootId: number;
            strings: string[];
            visibleIds: number;
        }

        export interface InstanceTreeNode {
            dbId: number;
            name: string;
            fragments: number[];
            children: InstanceTreeNode[];
        }

        export class Model {
            getBoundingBox(): THREE.Box3;
            getBulkProperties(dbIds: number[], propFilter?: string[], successCallback?: (r: any) => void, errorCallback?: (err: any) => void): void;
            getData(): any;
            getFragmentList(): any;
            getObjectTree(successCallback?: (result: InstanceTree) => void, errorCallback?: (err: any) => void): void;
            getProperties(dbId: number, successCallback?: (r: PropertyResult) => void, errorCallback?: (err: any) => void): void;
            getUnitScale(): number;
            getUnitString(): number;
            //search(text: string, successCallback: (r: number[]) => void, errorCallback: (err: any) => void, attributeNames?: string[]): void;
            search(text: string, successCallback: (r: number[]) => void, errorCallback?: (err: any) => void, attributeNames?: string[]): void;
            clearThemingColors(): void;

            getInstanceTree(): InstanceTree;
            visibilityManager: Private.VisibilityManager;
        }

        export interface PropertyResult {
            dbId: number;
            externalId?: string;
            name?: string;
            properties: Property[];
        }

        export interface Property {
            displayCategory: string;
            displayName: string;
            displayValue: string;
            hidden: boolean;
            type: number;
            units: string;
        }

        export class Navigation {
            getCamera(): any;
            getEyeVector(): THREE.Vector3;
            getFovMin(): number;
            getFovMax(): number;
            getPivotPoint(): THREE.Vector3;
            setPivotPoint(pivot: THREE.Vector3): void;
            getPosition(): THREE.Vector3;
            setPosition(pos: THREE.Vector3): void;
            getTarget(): THREE.Vector3;
            setTarget(target: THREE.Vector3): void;
            getScreenViewport(): ClientRect;
            setScreenViewport(viewport: ClientRect): void;
            setView(position: THREE.Vector3, target: THREE.Vector3): void;
            setCameraUpVector(up: THREE.Vector): void;
        }

        export interface Properties {
            type: string;
            role: string;
        }

        export class ToolController {
            activateTool(name: string): boolean;
            deactivateTool(name: string): boolean;
            registerTool(tool: any): boolean;
            deregisterTool(tool: any): boolean;
            getToolNames(): string[];
            getActiveToolName (): string;
        }

        export interface ToolInterface {
            getCursor?(): string;
            getName(): string;
            getNames(): string[];
            register(): void;
            deregister(): void;
            activate(name: string, viewerApi?: Autodesk.Viewing.Private.GuiViewer3D): void;
            deactivate(name: string): void;
            update(): boolean;
            handleSingleClick?(event: MouseEvent, button: number): boolean;
            handleDoubleClick?(event: MouseEvent, button: number): boolean;
            handleSingleTap?(event: Event): boolean;
            handleDoubleTap?(event: Event): boolean;
            handleKeyDown?(event: KeyboardEvent, keyCode: number): boolean;
            handleKeyUp?(event: KeyboardEvent, keyCode: number): boolean;
            handleWheelInput?(delta: number): boolean;
            handleButtonDown?(event: MouseEvent, button: number): boolean;
            handleButtonUp?(event: MouseEvent, button: number): boolean;
            handleMouseMove?(event: MouseEvent): boolean;
            handleGesture?(event: Event): boolean;
            handleBlur?(event: Event): boolean;
            handleResize?(): void;
        }

        export class UnifiedCamera {
        }

        export interface ContextMenuCallbackStatus {
            hasHidden: boolean,
            hasSelected: boolean,
            hasVisible: boolean,
            numSelected: number
        }

        export interface ContextMenuItem {
            target: () => void,
            title: string
        }

        export class Viewer3D {
            id: number;

            clearSelection(): void;
            clearThemingColors(model: any): void;
            clientToWorld(point: THREE.Vector3): THREE.Vector3;
            createViewCube(): void;
            displayViewCube(display: boolean): void;
            fitToView(objectIds?: number[], model?: Model): boolean;
            getHiddenNodes(): number[];
            getIsolatedNodes(): number[];
            getSelection(): number[];
            getSelectionCount(): number;
            getSelectionVisibility(): { hasVisible: boolean, hasHidden: boolean };
            getState(filter?: any): any;
            hide(node: number | number[]): void;
            hideById(node: number): void;
            isolate(node: number | number[]): void;
            isolateById(dbIds: number | number[]): void;
            registerContextMenuCallback(id: string, callback: (menu: ContextMenuItem[], status: ContextMenuCallbackStatus) => void): void;
            resize(): void;
            restoreState(state: any, filter?: any, immediate?: boolean): boolean;
            search(text: string, successCallback: (r: number[]) => void, errorCallback: (err: any) => void, attributeNames?: string[]): void;
            select(dbIds: number | number[]): void;
            setCutPlanes(planes: THREE.Vector4[]): void;
            setSelectionMode(mode: Autodesk.Viewing.SelectionMode): void;
            setThemingColor(dbId: number, color: THREE.Vector4, model?: any): void;
            setUp(config?: any): void;
            setViewCube(face: string): void;
            show(node: number | number[]): void;
            showAll(): void;
            tearDown(): void;
            toggleSelect(dbid: number): void;
            unregisterContextMenuCallback(id: string): void;
            worldToClient(point: THREE.Vector3): THREE.Vector3;
        }

        export class ViewingUtilities {
            getHitPoint(x: number, y: number): THREE.Vector3;
        }

        export module Private {

            export function getHtmlTemplate(url: string, callback: (error: string, content: string) => void): void;

            export class GuiViewer3D extends Viewer3D {
                constructor(container: HTMLElement, config?: Object);

                canvas: HTMLCanvasElement;
                container: Element;
                toolController: Viewing.ToolController;
                impl: Viewer3DImpl;
                model: Model;
                navigation: Navigation;

                getCamera(): UnifiedCamera;
                getToolbar(create: boolean): UI.ToolBar;
                initialize(): any;
                load(urn: string, sharedPropertyDbPath?: string, onSuccesfullCallback?: () => void, onErrorCallback?: (errorCode: number, errorMessage: string, statusCode: number, statusText: string) => void): any;
                loadModel(urn: string, options?: any, onSuccesfullCallback?: () => void, onErrorCallback?: (errorCode: number, errorMessage: string, statusCode: number, statusText: string) => void): any;
                start(path?: string, options?: Object): any;
                finish(): any;
                setUsePivotAlways(value: boolean):any;

                setGroundShadow (param: boolean):void ;
		            setGroundReflection (param: boolean):void ;
		            setOptimizeNavigation (param: boolean):void ;
                setQualityLevel (useSAO: boolean, useFXAA: boolean):void ;

                loadExtension(extensionId: string, options?: Object): boolean;
                unloadExtension(extensionId: string): boolean;
                getExtension(extensionId: string): Extension;

                addPanel(panel: UI.DockingPanel): boolean;
                removePanel(panel: UI.DockingPanel): boolean;
                resizePanels(options: any): void;

                addEventListener(event: string, callback: (event: any) => void, useCapture?: boolean): void;
                removeEventListener(event: string, callback: (event: any) => void, useCapture?: boolean): void;

            }

            export interface HitTestResult {
                dbId: number;
                face: THREE.Face3;
                fragId: number;
                intersectPoint: THREE.Vector3;
                model: Autodesk.Viewing.Model;
            }

            export class HudMessage {
                static displayMessage(container: Element, messageSpec: {
                    msgTitleKey: string,
                    msgTitleDefault?: string,
                    messageKey: string,
                    messageDefaultValue?: string,
                    buttonText?: string,
                    checkboxChecked?: boolean
                }, closeCallback?: (event: any) => void, buttonCallback?: (event: any) => void, checkboxCallback?: (event: any) => void): void;

                static dismiss(): boolean;
            }

            export class Viewer3DImpl {
                constructor(thecanvas: any, theapi: any);

                visibilityManager: VisibilityManager;

                clientToViewport(clientX: number, clientY: number): THREE.Vector3;
                hitTest(clientX: number, clientY: number, ignoreTransparent: boolean): HitTestResult;
                hitTestViewport(vpVec: THREE.Vector3, ignoreTransparent: boolean): HitTestResult;
                initialize(): void;
                setLightPreset(index: number, force?: boolean): void;
                viewportToClient(viewportX: number, viewportY: number): THREE.Vector3;

                getMaterials(): any;
                getRenderProxy(model: Model, fragId: number): any;
                sceneUpdated(param: boolean): void;
            }

            export class VisibilityManager {
                constructor(viewerImpl: any, model: any);

                getHiddenNodes(): any;
                getInstanceTree(): InstanceTree;
                getIsolatedNodes(): any;
                hide(node: number | Object): void;
                isNodeVisible(dbId: number): boolean;
                isolate(node: number | Object): void;
                isolateMultiple(nodeList: any[]): void;
                isolateNone(): void;
                setAllVisibility(visible: boolean): void;
                setVisibilityOnNode(node: number | Object, visible: boolean): void;
                setNodeOff(node: number | Object, isOff: boolean): void;
                show(node: number | Object): void;
                toggleVisibility(node: number | Object): void;
                updateNodeVisibilityTracking(node: number | Object, visible: boolean): void;
            }
        }

        export module UI {
            export class Control {
                container: HTMLElement;

                getId(): string;
                isCollapsed(): boolean;
                setCollapsed(collappsed: boolean): boolean;
                setToolTip(toolTipText: string): void;
                getToolTip(): string;
                isVisible(): boolean;
                setVisible(visible: boolean): boolean;
            }

            export class Button extends Control {
                constructor(id: string, options?: any);

                setIcon(iconClass: string): void;
                getState(): Autodesk.Viewing.UI.Button.State;
                setState(state: Autodesk.Viewing.UI.Button.State): boolean;
                onClick(event: MouseEvent): void;
                onMouseOver(event: MouseEvent): void;
                onMouseOut(event: MouseEvent): void;
            }

            // NOTE: TypeScript doesn't support enum inside class
            module Button {
                export enum State { ACTIVE, INACTIVE, DISABLED }
            }

            export class ControlGroup extends Control {
                constructor(id: string, options?: any);

                addClass(name: string): void;
                addControl(control: Control, options?: any): any;
                removeControl(control: Control | string): any;
                getControl(controlId: string): Control;
                getNumberOfControls(): number;
            }

            export class ToolBar extends ControlGroup {
                addEventListener(event: string, callback: () => void): void;
                getDimensions(): { width: number, height: number };
            }

            module ToolBar {
                export class Event {
                    static SIZE_CHANGED: string;
                    static CONTROL_REMOVED: string;
                    static CONTROL_ADDED: string;
                    static COLLAPSED_CHANGED: string;
                    static VISIBILITY_CHANGED: string;
                }
            }

            export interface ClientRect {
                bottom: number;
                height: number;
                left: number;
                right: number;
                top: number;
                width: number;
            }

            export interface ContentSize {
                height: number;
                width: number;
            }

            export class DockingPanel {
                constructor(parentContainer: any, id: string, title: string, options?: any);

                closer: HTMLElement;
                container: any;
                content: any;
                id: string;
                scrollContainer: HTMLElement;
                title: string;
                titleTable: string;

                initialize(): void;
                uninitialize(): void;
                setVisible(show: boolean): void;
                isVisible(): boolean;
                getContentSize(): ContentSize;
                resizeToContent(): void;
                getContainerBoundingRect(): ClientRect;
                setTitle(text: string, options: any): void;
                createCloseButton(): HTMLElement;
                createScrollContainer(options: {
                    heightAdjustment?: number;
                    left?: boolean;
                    marginTop?: number;
                }): void;
                initializeMoveHandlers(mover: HTMLElement): void;
                initializeCloseHandler(close: HTMLElement): void;

                visibilityChanged(): void;
                onStartMove(event: MouseEvent, startX: number, startY: number): void;
                onEndMove(event: MouseEvent, endX: number, endY: number): void;
                onMove(event: MouseEvent, currentX: number, currentY: number): void;
                onTitleClick(event: Event): void;
                onTitleDoubleClick(event: Event): void;

                addVisibilityListener(callback: (state: boolean) => void): void;

                addEventListener(target: Object, eventId: string, callback: (event: any) => void): void;
                removeEventListener(target: Object, eventId: string, callback: (event: any) => void): boolean;
            }
        }
    }
}
