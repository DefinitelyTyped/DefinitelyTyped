declare module 'aurelia-history' {
  export class History {
    activate(options: Object): boolean;
    deactivate(): void;
    navigate(fragment: string, options: Object): boolean;
    navigateBack(): void;
  }
}