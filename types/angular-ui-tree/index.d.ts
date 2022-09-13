// Type definitions for angular-ui-tree v2.8.0
// Project: https://github.com/angular-ui-tree/angular-ui-tree
// Definitions by: Calvin Fernandez <https://github.com/CalvinFernandez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

declare namespace AngularUITree {
    interface IEventSourceInfo {
        cloneModel: any;
        index: number;
        nodeScope: ITreeNodeScope;
        nodesScope: ITreeNodeScope;
    }

    interface IPosition {
        dirAx: number;
        dirX: number;
        dirY: number;
        distAxX: number;
        distAxY: number;
        distX: number;
        distY: number;
        lastDirX: number;
        lastDirY: number;
        lastX: number;
        lastY: number;
        moving: boolean;
        nowX: number;
        nowY: number;
        offsetX: number;
        offsetY: number;
        startX: number;
        startY: number;
    }

    interface IEventInfo {
        dest: {
            index: number;
            nodesScope: IParentTreeNodeScope;
        };
        elements: any;
        pos: IPosition;
        source: IEventSourceInfo;
    }

    interface IAcceptCallback {
        (source: ITreeNodeScope, destination: ITreeNodeScope, destinationIndex: number): boolean;
    }

    interface IDroppedCallback {
        (eventInfo: IEventInfo): void;
    }

    interface ICallbacks {
        accept: IAcceptCallback;
        dragStart: IDroppedCallback;
        dropped: IDroppedCallback;
    }

    /**
     * Internal representation of node in the UI
     */
    interface ITreeNodeScope extends ng.IScope {
        node: ITreeNode;
    }

    interface IParentTreeNodeScope extends ITreeNodeScope {
        isParent(nodeScope: ITreeNodeScope): boolean;
    }

    /**
      * Node in list
      */
    interface ITreeNode {
        id: number | string;
        nodes: ITreeNode[];
        title: string;
    }
}
