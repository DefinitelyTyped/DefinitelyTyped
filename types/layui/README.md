# Project Structure

- `index.d.ts`
  - Entry point for type definitions
- `layui.d.ts`
  - Core Layui type definitions
- `modules/*.d.ts`
  - Type definitions for individual modules
- `layui-tests.ts`
  - Test suite for layui.js
- `test/*.test.ts`
  - Module-specific test files

# Writing Type Definitions for Layui Modules

Declare an interface describing plugin configuration options:

```typescript
interface MyPlugin {
    render(options: MyPluginOptions): MyPluginReturn;
    reload(options?: MyPluginOptions): void;
}

interface MyPluginOptions {
    elem: string | HTMLElement | JQuery;
}

interface MyPluginReturn {
    reload(options?: MyPluginOptions): void;
}
```

Then declare your module's type property on Layui.BuiltinModules:

```typescript
declare namespace Layui{
    interface BuiltinModules{
      MyPlugin: MyPlugin;
    }
}
```

# Contributing

PRs are welcome to improve type definitions!

This project is based on [@types/layui-src@2.6](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/layui-src)
