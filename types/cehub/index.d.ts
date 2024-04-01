
/// <reference path="store.d.ts" />
/// <reference path="electron.d.ts" />
/// <reference types="node" />

export as namespace Cehub;
export = Cehub;
// export default Cehub

declare class Cehub { }


// import 会使用这个方法
declare namespace Cehub {

  const NodeEventEmitter: typeof import('events').EventEmitter;

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

  interface ProcessEnv {
    [key: string]: string | boolean | undefined;
    /**
     * 应用的cmd目录
     */
    NODE_CWD_DIR: string

    /**
     * node运行环境，默认：production || development
     */
    NODE_ENV: string


    /**
     * 当前应用程序的名称，即为该应用程序 package.json 文件的name字段
     */
    APP_NAME: string

    /**
     * 用户的home文件夹（主目录）
     */
    APP_USER_HOME: string

    /**
     * 每个用户的应用程序数据目录
     */
    APP_DATA: string

    /**
     * 储存你应用程序配置文件的文件夹
     */
    APP_USER_DATA: string

    /**
     * 日志目录
     */
    APP_LOGINS_DIR: string

    /**
     * 软件版本
     */
    APP_VERSION: string

    /**
     * 如果应用已经打包，返回true ，否则返回false
     */
    APP_IS_PACKAGED: boolean

    /**
     * 应用未打包，返回true ，否则返回false
     */
    APP_DEV: boolean

    /**
     * 应用环境，默认: production || development
     */
    APP_ENV: string

    /**
     *  主程序目录
     */
    APP_DIR: string

    /**
     * 返回主程序的，resources 目录
     */
    APP_RESOURCES_DIR: string

    /**
     * 启动目录 resources\app
     */
    APP_HOME_DIR: string

    /**
     * 主程序.exe
     */
    APP_EXEC_DIR: string

    /**
     * 主程序依赖
     */
    APP_NODE_MODULES: string

    /**
     * 小程序公共依赖目录
     */
    CE_MODULES: string

    /**
     * 小程序公共目录
     */
    CE_APPLET: string

    /**
     * 小程序公共下载目录
     */
    CE_DOWNLOAD: string

    /**
     * 小程序公用依赖目录
     */
    CE_NODE_MODULES: string

    /**
     * 小程序安装目录，如果是asar模式下，默认结尾会自带xxx/asar/
     */
    CE_HOME_DIR: string

    /**
     * 小程序目录(不管你asar是否启动，都不会返回)
     */
    CE_APP_DIR: string

    /**
     * 小程序应用环境，默认: production || development
     */
    CE_ENV: string

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

  interface CreateBrowserView {
    log: Log
    version: string
    env: ProcessEnv
    store: Store
    webContents: Electron.WebContents
  }

  const log: Log;
  type Log = LogFunctions;
  const version: string;
  const env: ProcessEnv
  const store: Store
  type Store = StoreFunctions
  function createBrowserView (options?: BrowserViewConstructorOptions): CreateBrowserView



}




