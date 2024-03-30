declare namespace Cehub {

  interface LogFunctions {
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

  type Log = LogFunctions;
  const log: Log;

  const version: string;


  // namespace CrossProcessExports {

  //   type Log = LogFunctions;

  //   const log: Log;

  //   const version: string;
  // }
  export { log, version };
}



// Merge namespace with interface
export = Cehub;
