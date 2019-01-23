// Type definitions for Forge Viewer 6.3
// Project: https://forge.autodesk.com/en/docs/viewer/v6/reference/javascript/viewer3d/
// Definitions by: Autodesk Forge Partner Development <https://github.com/Autodesk-Forge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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

declare namespace Autodesk {
    namespace Viewing {
        // events
        let ESCAPE_EVENT: string;
        let PROGRESS_UPDATE_EVENT: string;
        let FULLSCREEN_MODE_EVENT: string;
        let NAVIGATION_MODE_CHANGED_EVENT: string;
        let VIEWER_STATE_RESTORED_EVENT: string;
        let VIEWER_RESIZE_EVENT: string;
        let VIEWER_UNINITIALIZED: string;
        let MODEL_ROOT_LOADED_EVENT: string;
        let GEOMETRY_LOADED_EVENT: string;
        let TOOLBAR_CREATED_EVENT: string;
        let OBJECT_TREE_CREATED_EVENT: string;
        let OBJECT_TREE_UNAVAILABLE_EVENT: string;
        let MODEL_UNLOADED_EVENT: string;
        let SELECTION_CHANGED_EVENT: string;
        let AGGREGATE_SELECTION_CHANGED_EVENT: string;
        let ISOLATE_EVENT: string;
        let HIDE_EVENT: string;
        let SHOW_EVENT: string;
        let HIGHLIGHT_EVENT: string;
        let CAMERA_CHANGE_EVENT: string;
        let EXPLODE_CHANGE_EVENT: string;
        let CUTPLANES_CHANGE_EVENT: string;
        let TOOL_CHANGE_EVENT: string;
        let RENDER_OPTION_CHANGED_EVENT: string;
        let LAYER_VISIBILITY_CHANGED_EVENT: string;
        let RESET_EVENT: string;
        let ANIMATION_READY_EVENT: string;

        enum SelectionMode {
            LEAF_OBJECT,
            FIRST_OBJECT,
            LAST_OBJECT
        }

        let theExtensionManager: ExtensionManager;

        interface InitializerOptions {
            env?: string;
            language?: string;
            webGLHelpLink?: string;
            getAccessToken?(callback?: (accessToken: string, expires?: number) => void): void;
            refreshToken?(callback?: (accessToken: string, expires?: number) => void): void;
        }

        function Initializer(options: InitializerOptions, callback?: () => void): void;

        class Document {
            static load(documentId: string, successCallback: (doc: Document) => void,
            errorCallback: (errorCode: number, errorMsg: string, messages: any[]) => void, accessControlProperties?: any): void;
            static getSubItemsWithProperties(item: object, properties: Properties, recursive: boolean): object[];

            acmSessionId: string;

            getRootItem(): object;
            getViewablePath(item: object): string;
        }

        class Extension {
            viewer: Private.GuiViewer3D;
            options: any;
            constructor(viewer: Private.GuiViewer3D, options: any);

            load(): boolean;
            unload(): boolean;
        }

        class ExtensionManager {
            registerExtension(extensionId: string, extension: any): boolean;
            unregisterExtension(extensionId: string): boolean;

            getExtension(extensionId: string): any;
        }

        class InstanceTree {
            maxDepth: number;
            nodeAccess: InstanceTreeAccess;
            numHidden: number;
            numOff: number;
            objectCount: number;

            enumNodeChildren(node: any, callback: (dbId: number) => void, recursive?: boolean): void;
            enumNodeFragments(node: any, callback: (fragId: number) => void, recursive?: boolean): void;
            getChildCount(dbId: number): number;
            getNodeBox(dbId: number, nodeBox: Float32Array): void;
            getNodeParentId(dbId: number): number;
            getRootId(): number;
            setFlagGlobal(flag: any, value: any): void;
            setFlagNode(dbId: number, flag: any, value: any): boolean;
        }

        class InstanceTreeAccess {
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

        interface InstanceTreeNode {
            dbId: number;
            name: string;
            fragments: number[];
            children: InstanceTreeNode[];
        }

        class Model {
            getBoundingBox(): THREE.Box3;
            getBulkProperties(dbIds: number[], propFilter?: string[], successCallback?: (r: any) => void, errorCallback?: (err: any) => void): void;
            getData(): any;
            getFragmentList(): any;
            getObjectTree(successCallback?: (result: InstanceTree) => void, errorCallback?: (err: any) => void): void;
            getProperties(dbId: number, successCallback?: (r: PropertyResult) => void, errorCallback?: (err: any) => void): void;
            getUnitScale(): number;
            getUnitString(): number;
            // search(text: string, successCallback: (r: number[]) => void, errorCallback: (err: any) => void, attributeNames?: string[]): void;
            search(text: string, successCallback: (r: number[]) => void, errorCallback?: (err: any) => void, attributeNames?: string[]): void;
            clearThemingColors(): void;

            getInstanceTree(): InstanceTree;
            visibilityManager: Private.VisibilityManager;
        }

        interface PropertyResult {
            dbId: number;
            externalId?: string;
            name?: string;
            properties: Property[];
        }

        interface Property {
            displayCategory: string;
            displayName: string;
            displayValue: string;
            hidden: boolean;
            type: number;
            units: string;
        }

        class Navigation {
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

        interface Properties {
            type: string;
            role: string;
        }

        class ToolController {
            activateTool(name: string): boolean;
            deactivateTool(name: string): boolean;
            registerTool(tool: any): boolean;
            deregisterTool(tool: any): boolean;
            getToolNames(): string[];
            getActiveToolName(): string;
        }

        interface ToolInterface {
            getCursor?(): string;
            getName(): string;
            getNames(): string[];
            register(): void;
            deregister(): void;
            activate(name: string, viewerApi?: Private.GuiViewer3D): void;
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

        class UnifiedCamera {
        }

        interface ContextMenuCallbackStatus {
            hasHidden: boolean;
            hasSelected: boolean;
            hasVisible: boolean;
            numSelected: number;
        }

        interface ContextMenuItem {
            target: () => void;
            title: string;
        }

        class Viewer3D {
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
            setSelectionMode(mode: SelectionMode): void;
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

        class ViewingUtilities {
            getHitPoint(x: number, y: number): THREE.Vector3;
        }

        namespace Private {
            function getHtmlTemplate(url: string, callback: (error: string, content: string) => void): void;

            class GuiViewer3D extends Viewer3D {
                constructor(container: HTMLElement, config?: object);

                canvas: HTMLCanvasElement;
                container: Element;
                toolController: ToolController;
                impl: Viewer3DImpl;
                model: Model;
                navigation: Navigation;

                getCamera(): UnifiedCamera;
                getToolbar(create: boolean): UI.ToolBar;
                initialize(): any;
                load(urn: string, sharedPropertyDbPath?: string, onSuccesfullCallback?: () => void,
                onErrorCallback?: (errorCode: number, errorMessage: string, statusCode: number, statusText: string) => void): any;
                loadModel(urn: string, options?: any, onSuccesfullCallback?: () => void,
                onErrorCallback?: (errorCode: number, errorMessage: string, statusCode: number, statusText: string) => void): any;
                start(path?: string, options?: object): any;
                finish(): any;
                setUsePivotAlways(value: boolean): any;

                setGroundShadow(param: boolean): void ;
		            setGroundReflection(param: boolean): void ;
		            setOptimizeNavigation(param: boolean): void ;
                setQualityLevel(useSAO: boolean, useFXAA: boolean): void;

                loadExtension(extensionId: string, options?: object): boolean;
                unloadExtension(extensionId: string): boolean;
                getExtension(extensionId: string): Extension;

                addPanel(panel: UI.DockingPanel): boolean;
                removePanel(panel: UI.DockingPanel): boolean;
                resizePanels(options: any): void;

                addEventListener(event: string, callback: (event: any) => void, useCapture?: boolean): void;
                removeEventListener(event: string, callback: (event: any) => void, useCapture?: boolean): void;
            }

            interface HitTestResult {
                dbId: number;
                face: THREE.Face3;
                fragId: number;
                intersectPoint: THREE.Vector3;
                model: Model;
            }

            namespace HudMessage {
               function displayMessage(container: Element, messageSpec: {
                    msgTitleKey: string,
                    msgTitleDefault?: string,
                    messageKey: string,
                    messageDefaultValue?: string,
                    buttonText?: string,
                    checkboxChecked?: boolean
                }, closeCallback?: (event: any) => void, buttonCallback?: (event: any) => void, checkboxCallback?: (event: any) => void): void;

                function dismiss(): boolean;
            }

            class Viewer3DImpl {
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

            class VisibilityManager {
                constructor(viewerImpl: any, model: any);

                getHiddenNodes(): any;
                getInstanceTree(): InstanceTree;
                getIsolatedNodes(): any;
                hide(node: number | object): void;
                isNodeVisible(dbId: number): boolean;
                isolate(node: number | object): void;
                isolateMultiple(nodeList: any[]): void;
                isolateNone(): void;
                setAllVisibility(visible: boolean): void;
                setVisibilityOnNode(node: number | object, visible: boolean): void;
                setNodeOff(node: number | object, isOff: boolean): void;
                show(node: number | object): void;
                toggleVisibility(node: number | object): void;
                updateNodeVisibilityTracking(node: number | object, visible: boolean): void;
            }
        }

        namespace UI {
            class Control {
                container: HTMLElement;

                getId(): string;
                isCollapsed(): boolean;
                setCollapsed(collappsed: boolean): boolean;
                setToolTip(toolTipText: string): void;
                getToolTip(): string;
                isVisible(): boolean;
                setVisible(visible: boolean): boolean;
            }

            class Button extends Control {
                constructor(id: string, options?: any);

                setIcon(iconClass: string): void;
                getState(): Button.State;
                setState(state: Button.State): boolean;
                onClick(event: MouseEvent): void;
                onMouseOver(event: MouseEvent): void;
                onMouseOut(event: MouseEvent): void;
            }

            // NOTE: TypeScript doesn't support enum inside class
            namespace Button {
                enum State { ACTIVE, INACTIVE, DISABLED }
            }

            class ControlGroup extends Control {
                constructor(id: string, options?: any);

                addClass(name: string): void;
                addControl(control: Control, options?: any): any;
                removeControl(control: Control | string): any;
                getControl(controlId: string): Control;
                getNumberOfControls(): number;
            }

            class ToolBar extends ControlGroup {
                addEventListener(event: string, callback: () => void): void;
                getDimensions(): { width: number, height: number };
            }

            namespace ToolBar {
                 interface Event {
                    SIZE_CHANGED: string;
                    CONTROL_REMOVED: string;
                    CONTROL_ADDED: string;
                    COLLAPSED_CHANGED: string;
                    VISIBILITY_CHANGED: string;
                }
            }

            interface ClientRect {
                bottom: number;
                height: number;
                left: number;
                right: number;
                top: number;
                width: number;
            }

            interface ContentSize {
                height: number;
                width: number;
            }

            class DockingPanel {
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

                addEventListener(target: object, eventId: string, callback: (event: any) => void): void;
                removeEventListener(target: object, eventId: string, callback: (event: any) => void): boolean;
            }
        }
    }
}
