// Type definitions for react-google-tag-manager 2.2
// Project: https://github.com/gaearon/react-google-tag-manager
// Definitions by: Gianluca Venturini <https://github.com/gianluca-venturini>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export default function GTMParts(args: {
    id: string,
    dataLayerName?: string,
    additionalEvents?: {},
    scheme?: string,
    previewVariables?: boolean,
  }): {
    noScriptAsReact(): any,
    noScriptAsHTML(): any,
    scriptAsReact(): any,
    scriptAsHTML(): any
  };
