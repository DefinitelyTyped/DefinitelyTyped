declare namespace oj {  
  class BusyContext {
    static applicationBootstrapComplete(): undefined;
    static setDefaultTimeout(timeout: number): undefined;
    addBusyState(options: {description: object|(()=> string)}): (()=> void);
    clear(): undefined;
    dump(message?: string): undefined;
    getBusyStates(): Array<{id:string, description:string}>;
    isReady(): boolean;
    toString(): string;
    whenReady(timeout?: number): Promise<(boolean|Error)>;
  }

}
declare namespace oj {  
  class Config {
    static getAutomationMode(): string;
    static getDeviceType(): 'phone'|'tablet'|'others';
    static getLocale(): string;
    static getResourceUrl(relativePath: string): string;
    static getVersionInfo(): string;
    static logVersionInfo(): undefined;
    static setAutomationMode(mode: string): undefined;
    static setLocale(locale: string, callback?: (()=> void)): undefined;
    static setResourceBaseUrl(baseUrl: string): undefined;
  }

}
declare namespace oj {  
  class Context {
    static getContext(node: Element): oj.Context;
    static getPageContext(): oj.Context;
    getBusyContext(): oj.BusyContext;
  }

}
declare namespace oj {  
  class Logger {
    static readonly LEVEL_ERROR: number;
    static readonly LEVEL_INFO: number;
    static readonly LEVEL_LOG: number;
    static readonly LEVEL_NONE: number;
    static readonly LEVEL_WARN: number;
    static error(...args: (object|string|number)[]): void;
    static info(...args: (object|string|number)[]): void;
    static log(...args: (object|string|number)[]): void;
    static option(key?: object|string, value?: any): any;
    static warn(...args: (object|string|number)[]): void;
  }

}
declare namespace oj {  
  class Object {
    constructor();
    static compareValues(obj1: any, obj2: any): boolean;
    static copyPropertiesForClass(targetClass: object, source: object): void;
    static createCallback(obj: object, func: object): ()=>any;
    static createSubclass(extendingClass: object, baseClass: object, typeName?: string): void;
    static ensureClassInitialization(clazz: object): void;
    static getTypeName(): string;
    static isEmpty(): boolean;
    clone(): object;
    equals(object: object): boolean;
    getClass(otherInstance?: object): object;
    getTypeName(clazz: object|null): string;
    Init(): void;
    toDebugString(): string;
    toString(): string;
  }

}
declare namespace oj {  
  class ResponsiveUtils {
    static compare(size1: oj.ResponsiveUtils.SCREEN_RANGE, size2: oj.ResponsiveUtils.SCREEN_RANGE): number;
    static getFrameworkQuery(frameworkQueryKey: oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY): string|null;
  }
  namespace ResponsiveUtils {
    enum FRAMEWORK_QUERY_KEY {
      SM_UP = "sm-up",
      MD_UP = "md-up",
      LG_UP = "lg-up",
      XL_UP = "xl-up",
      XXL_UP = "xxl-up",
      SM_ONLY = "sm-only",
      MD_ONLY = "md-only",
      LG_ONLY = "lg-only",
      XL_ONLY = "xl-only",
      MD_DOWN = "md-down",
      LG_DOWN = "lg-down",
      XL_DOWN = "xl-down",
      HIGH_RESOLUTION = "high-resolution",
    }
    enum SCREEN_RANGE {
      SM = "sm",
      MD = "md",
      LG = "lg",
      XL = "xl",
      XXL = "xxl",
    }
  }


}
declare namespace oj {  
  class ThemeUtils {
    constructor();
    static clearCache(): void;
    static getThemeName(): string|null;
    static getThemeTargetPlatform(): string|null;
    static parseJSONFromFontFamily(selector: string): any;
  }

}
declare namespace oj {  
  class Translations {
    static applyParameters(pattern: string, parameters: object|Array<any>): string|null;
    static getComponentTranslations(componentName: string): object;
    static getResource(key: string): object|string|null;
    static getTranslatedString(key: string, ...var_args: (string|object|Array<any>)[]): string;
    static setBundle(bundle: object): void;
  }

}
