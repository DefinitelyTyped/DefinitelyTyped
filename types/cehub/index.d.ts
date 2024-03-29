declare module "cehub" {
  export const version: string;

  export interface log {
    /**
  * Log an error message
  */
    error (...params: any[]): void;

    /**
     * Log a warning message
     */
    warn (...params: any[]): void;

    /**
     * Log an informational message
     */
    info (...params: any[]): void;

    /**
     * Log a verbose message
     */
    verbose (...params: any[]): void;

    /**
     * Log a debug message
     */
    debug (...params: any[]): void;

    /**
     * Log a silly message
     */
    silly (...params: any[]): void;

    /**
     * Shortcut to info
     */
    log (...params: any[]): void;
  }
}
