declare const ThemedStyleSheet: {
  registerTheme: (theme: any) => void;
  registerInterface: (registerInterface: any) => void;
  create: (makeFromTheme: any) => any;
  createLTR: (makeFromTheme: any) => any;
  createRTL: (makeFromTheme: any) => any;
  get: () => any;
  resolve: () => any;
  resolveLTR: () => any;
  resolveRTL: () => any;
  flush: () => void;
};

export type ThemedStyleSheet = typeof ThemedStyleSheet;
export default ThemedStyleSheet;
