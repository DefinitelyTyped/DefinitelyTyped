import * as React from 'react'

declare namespace BrowserRouterModule{
    interface BrowserRouterProps extends React.Props<BrowserRouter>{
        basename?:string,
        forceRefresh?:boolean,
        getUserConfirmation?:any,
        keyLength?:number,
        children?:any
    }
    export interface BrowserRouter extends React.ComponentClass<BrowserRouterProps>{}
}

declare const BrowserRouter:BrowserRouterModule.BrowserRouter;

export default BrowserRouter;