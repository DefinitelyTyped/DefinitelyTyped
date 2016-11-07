import * as React from 'react'

 declare namespace RedirectModule{

    interface RedirectProps extends React.Props<Redirect>{
        to:string|any,
        push?:boolean
    }

    export interface Redirect extends React.ComponentClass<RedirectProps>{}
}

declare const Redirect:RedirectModule.Redirect;
export default Redirect;

