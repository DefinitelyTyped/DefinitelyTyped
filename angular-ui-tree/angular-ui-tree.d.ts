// Type definitions for angular-ui-tree v2.8.0
// Project: https://github.com/angular-ui-tree/angular-ui-tree
// Definitions by: Calvin Fernandez <https://github.com/CalvinFernandez>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module AngularUITree {
    /**
      * Node in list
      */
    interface ITreeNode {
        id: number | string;
        nodes: ITreeNode[];
        title: string;
    }
}
