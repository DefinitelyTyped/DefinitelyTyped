# @types/jenjs__master

TypeScript type definitions for [Jen.js](https://github.com/kessud2021/Jen.js).

Jen.js is a TypeScript-first framework for building static and server-rendered applications with Preact.

## Installation

```bash
npm install --save-dev @types/jenjs
```

## Type Definitions

This package provides comprehensive TypeScript type definitions for:

- **Core Configuration**: `FrameworkConfig`, `RenderMode`
- **Route System**: `RouteModule`, `LoaderContext`, `RouteEntry`
- **Middleware**: `Middleware`, `MiddlewareContext`, `RouteMiddleware`
- **API Routes**: `ApiRouteModule`, `ApiRouteContext`, `ApiHandler`
- **Build System**: `SSGPipeline`, `ProductionBuilder`, `PageRenderer`
- **Islands Architecture**: `Island`, `IslandRegistry`
- **Authentication**: JWT and Session types
- **Database**: Unified DB interface (JDB, SQLite, MySQL, PostgreSQL)
- **Caching**: In-memory and Redis cache store interfaces
- **GraphQL**: Schema and resolver types
- **i18n**: Internationalization configuration
- **Plugins**: Plugin system types
- **Runtime**: Client-side hydration and SSR types

## Example

```typescript
import type {
  FrameworkConfig,
  RouteModule,
  ApiRouteModule,
  LoaderContext,
} from "jenjs";

// Route module with loader
export const loader: RouteModule["loader"] = async (ctx: LoaderContext) => {
  return { message: "Hello" };
};

export default function Page({ data }: { data: any }) {
  return <div>{data.message}</div>;
}

// API route
export const GET: ApiRouteModule["GET"] = async (ctx) => {
  return { message: "API response" };
};
```

## References

- [Jen.js Documentation](https://github.com/kessud2021/Jen.js)
- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

## License

MIT
