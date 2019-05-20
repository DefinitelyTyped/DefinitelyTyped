// Type definitions for dwt 14.3.1
// Project: http://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx
// Definitions by: Xiao Ling <https://github.com/yushulx>
//                 Josh Hall <https://github.com/jbh>
//                 Lincoln Hu <https://github.com/lincoln2018>
//                 Tom Kent <https://github.com/Tom-Dynamsoft>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2.2

/*!
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2019, Dynamsoft Corporation
* Author: Dynamsoft Support Team
*/

interface DynamsoftStatic<TElement extends Node = HTMLElement> {
}


interface dwtEnv {
}

interface DynamsoftLib {
}

interface DynamsoftWebTwain {
    Addon: DynamsoftWebTwainAddon
}

/**
 * interface for a DWT container which basically defines a DIV on the page
 */
interface Container {
    ContainerId: string;
    Width: string | number;
    Height: string | number;
}
