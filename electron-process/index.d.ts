// Type definitions for electron-process v0.1.3
// Project: https://github.com/smith-kyle/electron-process
// Definitions by: Will Streeter <https://github.com/WillStreeter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="object-hash"/>
///<reference types="uuid"/>
///<reference types="electron"/>
///<reference types="lodash"/>


declare  namespace ElectronProcess{

              export interface foreground{
                   getModule(originalModule:any):any
               }

              export interface background{
                   registerModule(backgroundModule:any):void
               }

              export interface main{
                  createBackgroundProcess(url:string, debug:boolean):any
               }

              export interface Processor {
                 foreground?:foreground,
                 background?:background,
                 main?:main
                }
}

declare module "electron-process" {
    const electronProcess: ElectronProcess.Processor;
    export = electronProcess;
}