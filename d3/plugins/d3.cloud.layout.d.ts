// Type definitions for d3JS cloud layout plugin by Jason Davies
// Project: https://github.com/jasondavies/d3-cloud
// Definitions by: hans windhoff <https://github.com/hansrwindhoff>


/// <reference path="../d3.d.ts" />

declare module D3 {
  export module Layout {
    export interface CloudLayout {
      (layers: any[], index?: number): any[];
      values(accessor?: (d: any) => any): CloudLayout;
      offset(offset: string): CloudLayout;
      size: {
        /**
      * Gets the available layout size 
      */
        (): Array<number>;
        /**
      * Sets the available layout size 
      */
        (size: Array<number>): CloudLayout;
      };
      words: (inputArray: Array<any>) => CloudLayout;
      rotate: (number) => CloudLayout;
      padding: (number) => CloudLayout;
      font: (string) => CloudLayout;
      fontSize(fctn: (d: any) => number): CloudLayout;
      on: (eventname: string, callee: (words: string[]) => void) => CloudLayout;
      start: () => CloudLayout;
    }


    export interface Layout {
      cloud(): CloudLayout; 
    }
  }
}