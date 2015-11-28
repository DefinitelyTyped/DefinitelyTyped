// Type definitions for express-react-views v0.9.0
// Project: https://www.npmjs.com/package/express-react-views
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "express-react-views" {
  interface ExpressReactViews {
    createEngine: (options? : {
      doctype?: string,
      beautify?: boolean,
      transformViews?: boolean
    }) => Function;
  }

  const expressReactViews : ExpressReactViews;
  export = expressReactViews;
}
