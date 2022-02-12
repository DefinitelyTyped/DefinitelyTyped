declare function _exports(options: any): {
    insertBodies: (bodies: any) => void;
    /**
     * Gets root node if its present
     */
    getRoot: () => any;
    updateBodyForce: (sourceBody: any) => void;
    options: (newOptions: any) =>
        | any
        | {
              gravity: any;
              theta: any;
          };
};
export = _exports;
