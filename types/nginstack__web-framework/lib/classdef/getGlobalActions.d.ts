export = getGlobalActions;
declare function getGlobalActions(classKey: number, key: number): GlobalAction[];
declare namespace getGlobalActions {
    export { GlobalAction };
}
type GlobalAction = import('./GlobalAction');
