/**
 * Definition from Launcher.js
 * https://github.com/GoogleChrome/puppeteer/blob/master/lib/Launcher.js
 */

import { BrowserOptions } from "./Browser";
import { Timeoutable } from "./able";

export interface LaunchOptions extends ChromeArgOptions, BrowserOptions, Timeoutable {
  /**
   * Path to a Chromium executable to run instead of bundled Chromium. If
   * executablePath is a relative path, then it is resolved relative to current
   * working directory.
   */
  executablePath?: string;
  /**
   * Do not use `puppeteer.defaultArgs()` for launching Chromium.
   * @default false
   */
  ignoreDefaultArgs?: boolean | string[];
  /**
   * Close chrome process on Ctrl-C.
   * @default true
   */
  handleSIGINT?: boolean;
  /**
   * Close chrome process on SIGTERM.
   * @default true
   */
  handleSIGTERM?: boolean;
  /**
   * Close chrome process on SIGHUP.
   * @default true
   */
  handleSIGHUP?: boolean;
  /**
   * Whether to pipe browser process stdout and stderr into process.stdout and
   * process.stderr.
   * @default false
   */
  dumpio?: boolean;
  /**
   * Specify environment variables that will be visible to Chromium.
   * @default `process.env`.
   */
  env?: {
    [key: string]: string | boolean | number;
  };
  /**
   * Connects to the browser over a pipe instead of a WebSocket.
   * @default false
   */
  pipe?: boolean;
}
/**
 * Defines `headless`, `args`, `userDataDir`, `devtools`
 */
export interface ChromeArgOptions {
  /**
   * Whether to run browser in headless mode.
   * @default true unless the devtools option is true.
   */
  headless?: boolean;
  /**
   * Additional arguments to pass to the browser instance.
   * The list of Chromium flags can be found here.
   */
  args?: string[];
  /**
   * Path to a User Data Directory.
   */
  userDataDir?: string;
  /**
   * Whether to auto-open a DevTools panel for each tab.
   * If this option is true, the headless option will be set false.
   */
  devtools?: boolean;
}
