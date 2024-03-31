
export as namespace Cehub;
export = Cehub;
// export default Cehub

declare class Cehub {
  log: Cehub.LogFunctions
  version: string
  createBrowserView (options?: Cehub.BrowserViewConstructorOptions): Cehub.BrowserView;
}


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

  interface BrowserView {
    log: Log;
    version: string;
  }


  interface BrowserViewConstructorOptions {
    width?: number
    height?: number
    loadFile?: string
    loadURL?: string
    preload?: string
    startType?: string | 'applet'
    webPreferences?: {
      preload?: string
    }
    webContents?: {
      ipc?: {
        handle?: any
      }
    }
  }

  type Log = LogFunctions;

  /**
   * cehub-log 
   */
  const log: Log;

  const version: string;

  function createBrowserView (options?: BrowserViewConstructorOptions): BrowserView

  // const createBrowserView: createBrowserViewOptions



  namespace CrossProcessExports {
    type Log = LogFunctions;
    const log: Log;
    const version: string;
  }

}




