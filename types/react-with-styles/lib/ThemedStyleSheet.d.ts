declare const ThemedStyleSheet: {
  registerTheme: (theme: any) => void;
  registerInterface: (registerInterface: any) => void;
  create: (makeFromTheme: any, createWithDirection: any) => any;
  createLTR: (makeFromTheme: any) => any;
  createRTL: (makeFromTheme: any) => any;
  get: () => any;
  resolve: () => any;
  resolveLTR: () => any;
  resolveRTL: () => any;
  flush: () => void;
};

export default ThemedStyleSheet;
