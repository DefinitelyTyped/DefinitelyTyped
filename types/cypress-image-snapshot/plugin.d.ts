/* Definitions extracted from Cypress 4.5, which is the minimum
 * version required by the cypress-image-snapshot.
 * https://github.com/cypress-io/cypress/blob/v4.5.0/cli/types/index.d.ts#L4513-L4524
 *
 * The definitions have been copied in, as DefinitelyTyped does not (yet) support
 * peerDependencies. This is causing with npms version resolution for consumers.
 * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20290#issuecomment-589738371
 * this has been addressed before on these definitions here
 * https://github.com/DefinitelyTyped/DefinitelyTyped/pull/41921
 *
 * The Cypress interfaces have been stripped down, according to consumed fields
 * in https://github.com/jaredpalmer/cypress-image-snapshot/blob/master/src/plugin.js
 */
type Task = (value: any) => any;

interface Tasks {
    [key: string]: Task;
}

interface PluginEvents {
    (action: 'after:screenshot', fn: (details: {path: string}) => void): void;
    (action: 'task', tasks: Tasks): void;
}
/* Cypress definitions - end */

declare function addMatchImageSnapshotPlugin(on: PluginEvents, config: {}): void;

export { addMatchImageSnapshotPlugin };
