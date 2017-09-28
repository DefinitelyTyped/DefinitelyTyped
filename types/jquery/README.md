### Usage

#### Global

When jQuery is globally available, you can use `jQuery` and `$` directly.

#### Importing (with a global DOM available)

When you want to import jQuery as a module and have a global DOM available (e.g. browser and browser-like environments):

```typescript
import jQuery = require('jquery');
```

#### Importing (without a global DOM available)

When you want to import jQuery as a module and do not have a global DOM available (e.g. Node.js environment):

```typescript
import jQueryFactory = require('jquery');
const jQuery = jQueryFactory(window, true);
```

Note that while the factory function ignores the second parameter, it is required to get correct type declarations.

### Project structure

- [jquery-tests.ts](jquery-tests.ts)
    - Tests that exercise TypeScript-specific usage and cases not covered by other test files.
- [test/example-tests.ts](test/example-tests.ts)
    - Tests generated from examples in jQuery documentation.
- [test/longdesc-tests.ts](test/longdesc-tests.ts)
    - Tests generated from non-example snippets in jQuery documentation.
- [test/learn-tests.ts](test/learn-tests.ts)
    - Tests imported from examples in [jQuery Learning Center](https://learn.jquery.com).
- [test/jquery-window-module-tests.ts](test/jquery-window-module-tests.ts)<br>
  [test/jquery-slim-window-module-tests.ts](test/jquery-slim-window-module-tests.ts)
    - Tests importing jQuery with a DOM available
- [test/jquery-no-window-module-tests.ts](test/jquery-no-window-module-tests.ts)<br>
  [test/jquery-slim-no-window-module-tests.ts](test/jquery-slim-no-window-module-tests.ts)
    - Tests importing jQuery without a DOM available

### Authoring type definitions for jQuery plugins

`$.fn` is represented by `JQuery`.

`$` is represented by `JQueryStatic`.

Declare an interface that has the plugin's overloads as call signatures and static members as properties.

```typescript
interface MyPlugin {
    settings: MyPluginSettings;
    
    (behavior: 'enable'): JQuery;
    (settings?: MyPluginSettings): JQuery;
}

interface MyPluginSettings {
    title?: string;
}
```

Then declare a property on `JQuery` with your plugin's type.

```typescript
interface JQuery {
    myPlugin: MyPlugin;
}
```
