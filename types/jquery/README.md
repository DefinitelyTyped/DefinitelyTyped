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
