// Type definitions for metisMenu 2.0.3// Project: http://github.com/onokumus/metisMenu/// Definitions by: Osman Nuri Okumuş <https://github.com/onokumus/>// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="../jquery/jquery.d.ts"/>
interface MetisMenuOptions {  toggle?: boolean;  doubleTapToGo?: boolean;  activeClass?: string;  collapseClass?: string;  collapseInClass?: string;  collapsingClass?: string;}
interface JQuery {  metisMenu(options?: MetisMenuOptions): JQuery;}