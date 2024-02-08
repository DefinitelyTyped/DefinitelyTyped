import { Opaque } from "ember/-private/type-utils";

import { helperCapabilities, setHelperManager as glimmerSetHelperManager } from "@glimmer/manager";
import { invokeHelper as glimmerInvokeHelper } from "@glimmer/runtime";

// In normal TypeScript, these helpers are essentially opaque tokens
// that just need to be importable. Declaring them with unique interfaces
// like this, however, gives tools like Glint (that DO have a richer
// notion of what they are) a place to install more detailed type information.
export interface ArrayHelper extends Opaque<"helper:array"> {}
export interface ConcatHelper extends Opaque<"helper:concat"> {}
export interface FnHelper extends Opaque<"helper:fn"> {}
export interface GetHelper extends Opaque<"helper:get"> {}
export interface HashHelper extends Opaque<"helper:hash"> {}

/**
 * Use the `{{array}}` helper to create an array to pass as an option to your components.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.helpers/methods/array?anchor=array
 */
export const array: ArrayHelper;

/**
 * Concatenates the given arguments into a string.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.helpers/methods/concat?anchor=concat
 */
export const concat: ConcatHelper;

/**
 * The `fn` helper allows you to ensure a function that you are passing off to another component, helper, or modifier
 * has access to arguments that are available in the template.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.helpers/methods/fn?anchor=fn
 */
export const fn: FnHelper;

/**
 * Dynamically look up a property on an object.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.helpers/methods/get?anchor=get
 */
export const get: GetHelper;

/**
 * Use the `{{hash}}` helper to create a hash to pass as an option to your components.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.helpers/methods/hash?anchor=hash
 */
export const hash: HashHelper;

/**
  `capabilities` returns a capabilities configuration which can be used to modify
  the behavior of the manager. Manager capabilities _must_ be provided using the
  `capabilities` function, as the underlying implementation can change over time.

  The first argument to capabilities is a version string, which is the version of
  Ember that the capabilities were defined in. Ember can add new versions at any
  time, and these may have entirely different behaviors, but it will not remove
  old versions until the next major version.

  ```js
  capabilities('3.23');
  ```

  The second argument is an object of capabilities and boolean values indicating
  whether they are enabled or disabled.

  ```js
  capabilities('3.23', {
    hasValue: true,
    hasDestructor: true,
  });
  ```

  If no value is specified, then the default value will be used.

  ### `3.23` capabilities

  #### `hasDestroyable`

  - Default value: false

  Determines if the helper has a destroyable to include in the destructor
  hierarchy. If enabled, the `getDestroyable` hook will be called, and its result
  will be associated with the destroyable parent block.

  #### `hasValue`

  - Default value: false

  Determines if the helper has a value which can be used externally. The helper's
  `getValue` hook will be run whenever the value of the helper is accessed if this
  capability is enabled.

  @method capabilities
  @for @ember/helper
  @static
  @param {String} managerApiVersion The version of capabilities that are being used
  @param options The capabilities values
  @return {Capabilities} The capabilities object instance
*/
export const capabilities: typeof helperCapabilities;
/**
  Sets the helper manager for an object or function.

  ```js
  setHelperManager((owner) => new ClassHelperManager(owner), Helper)
  ```

  When a value is used as a helper in a template, the helper manager is looked up
  on the object by walking up its prototype chain and finding the first helper
  manager. This manager then receives the value and can create and manage an
  instance of a helper from it. This provides a layer of indirection that allows
  users to design high-level helper APIs, without Ember needing to worry about the
  details. High-level APIs can be experimented with and iterated on while the
  core of Ember helpers remains stable, and new APIs can be introduced gradually
  over time to existing code bases.

  `setHelperManager` receives two arguments:

  1. A factory function, which receives the `owner` and returns an instance of a
    helper manager.
  2. A helper definition, which is the object or function to associate the factory function with.

  The first time the object is looked up, the factory function will be called to
  create the helper manager. It will be cached, and in subsequent lookups the
  cached helper manager will be used instead.

  Only one helper manager is guaranteed to exist per `owner` and per usage of
  `setHelperManager`, so many helpers will end up using the same instance of the
  helper manager. As such, you should only store state that is related to the
  manager itself. If you want to store state specific to a particular helper
  definition, you should assign a unique helper manager to that helper. In
  general, most managers should either be stateless, or only have the `owner` they
  were created with as state.

  Helper managers must fulfill the following interface (This example uses
  [TypeScript interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
  for precision, you do not need to write helper managers using TypeScript):

  ```ts
  interface HelperManager<HelperStateBucket> {
    capabilities: HelperCapabilities;

    createHelper(definition: HelperDefinition, args: TemplateArgs): HelperStateBucket;

    getValue?(bucket: HelperStateBucket): unknown;

    runEffect?(bucket: HelperStateBucket): void;

    getDestroyable?(bucket: HelperStateBucket): object;
  }
  ```

  The capabilities property _must_ be provided using the `capabilities()` function
  imported from the same module as `setHelperManager`:

  ```js
  import { capabilities } from '@ember/helper';

  class MyHelperManager {
    capabilities = capabilities('3.21.0', { hasValue: true });

    // ...snip...
  }
  ```

  Below is a description of each of the methods on the interface and their
  functions.

  #### `createHelper`

  `createHelper` is a required hook on the HelperManager interface. The hook is
  passed the definition of the helper that is currently being created, and is
  expected to return a _state bucket_. This state bucket is what represents the
  current state of the helper, and will be passed to the other lifecycle hooks at
  appropriate times. It is not necessarily related to the definition of the
  helper itself - for instance, you could return an object _containing_ an
  instance of the helper:

  ```js
  class MyManager {
    createHelper(Definition, args) {
      return {
        instance: new Definition(args);
      };
    }
  }
  ```

  This allows the manager to store metadata that it doesn't want to expose to the
  user.

  This hook is _not_ autotracked - changes to tracked values used within this hook
  will _not_ result in a call to any of the other lifecycle hooks. This is because
  it is unclear what should happen if it invalidates, and rather than make a
  decision at this point, the initial API is aiming to allow as much expressivity
  as possible. This could change in the future with changes to capabilities and
  their behaviors.

  If users do want to autotrack some values used during construction, they can
  either create the instance of the helper in `runEffect` or `getValue`, or they
  can use the `cache` API to autotrack the `createHelper` hook themselves. This
  provides maximum flexibility and expressiveness to manager authors.

  This hook has the following timing semantics:

  **Always**
  - called as discovered during DOM construction
  - called in definition order in the template

  #### `getValue`

  `getValue` is an optional hook that should return the value of the helper. This
  is the value that is returned from the helper and passed into the template.

  This hook is called when the value is requested from the helper (e.g. when the
  template is rendering and the helper value is needed). The hook is autotracked,
  and will rerun whenever any tracked values used inside of it are updated.
  Otherwise it does not rerun.

  > Note: This means that arguments which are not _consumed_ within the hook will
  > not trigger updates.

  This hook is only called for helpers with the `hasValue` capability enabled.
  This hook has the following timing semantics:

  **Always**
  - called the first time the helper value is requested
  - called after autotracked state has changed

  **Never**
  - called if the `hasValue` capability is disabled

  #### `runEffect`

  `runEffect` is an optional hook that should run the effect that the helper is
  applying, setting it up or updating it.

  This hook is scheduled to be called some time after render and prior to paint.
  There is not a guaranteed, 1-to-1 relationship between a render pass and this
  hook firing. For instance, multiple render passes could occur, and the hook may
  only trigger once. It may also never trigger if it was dirtied in one render
  pass and then destroyed in the next.

  The hook is autotracked, and will rerun whenever any tracked values used inside
  of it are updated. Otherwise it does not rerun.

  The hook is also run during a time period where state mutations are _disabled_
  in Ember. Any tracked state mutation will throw an error during this time,
  including changes to tracked properties, changes made using `Ember.set`, updates
  to computed properties, etc. This is meant to prevent infinite rerenders and
  other antipatterns.

  This hook is only called for helpers with the `hasScheduledEffect` capability
  enabled. This hook is also not called in SSR currently, though this could be
  added as a capability in the future. It has the following timing semantics:

  **Always**
  - called after the helper was first created, if the helper has not been
    destroyed since creation
  - called after autotracked state has changed, if the helper has not been
    destroyed during render

  **Never**
  - called if the `hasScheduledEffect` capability is disabled
  - called in SSR

  #### `getDestroyable`

  `getDestroyable` is an optional hook that users can use to register a
  destroyable object for the helper. This destroyable will be registered to the
  containing block or template parent, and will be destroyed when it is destroyed.
  See the [Destroyables RFC](https://github.com/emberjs/rfcs/blob/master/text/0580-destroyables.md)
  for more details.

  `getDestroyable` is only called if the `hasDestroyable` capability is enabled.

  This hook has the following timing semantics:

  **Always**
  - called immediately after the `createHelper` hook is called

  **Never**
  - called if the `hasDestroyable` capability is disabled

  @method setHelperManager
  @for @ember/helper
  @static
  @param {Function} factory A factory function which receives an optional owner, and returns a helper manager
  @param {object} definition The definition to associate the manager factory with
  @return {object} The definition passed into setHelperManager
*/
export const setHelperManager: typeof glimmerSetHelperManager;
/**
  The `invokeHelper` function can be used to create a helper instance in
  JavaScript.

  To access a helper's value you have to use `getValue` from
  `@glimmer/tracking/primitives/cache`.

  ```js
  // app/components/data-loader.js
  import Component from '@glimmer/component';
  import { getValue } from '@glimmer/tracking/primitives/cache';
  import Helper from '@ember/component/helper';
  import { invokeHelper } from '@ember/helper';

  class PlusOne extends Helper {
    compute([number]) {
      return number + 1;
    }
  }

  export default class PlusOneComponent extends Component {
    plusOne = invokeHelper(this, PlusOne, () => {
      return {
        positional: [this.args.number],
      };
    });

    get value() {
      return getValue(this.plusOne);
    }
  }
  ```
  ```js
  {{this.value}}
  ```

  It receives three arguments:

  * `context`: The parent context of the helper. When the parent is torn down and
    removed, the helper will be as well.
  * `definition`: The definition of the helper.
  * `computeArgs`: An optional function that produces the arguments to the helper.
    The function receives the parent context as an argument, and must return an
    object with a `positional` property that is an array and/or a `named`
    property that is an object.

  And it returns a Cache instance that contains the most recent value of the
  helper. You can access the helper using `getValue()` like any other cache. The
  cache is also destroyable, and using the `destroy()` function on it will cause
  the helper to be torn down.

  Note that using `getValue()` on helpers that have scheduled effects will not
  trigger the effect early. Effects will continue to run at their scheduled time.

  @method invokeHelper
  @for @ember/helper
  @static
  @param {object} context The parent context of the helper
  @param {object} definition The helper definition
  @param {Function} computeArgs An optional function that produces args
  @returns
*/
export const invokeHelper: typeof glimmerInvokeHelper;
