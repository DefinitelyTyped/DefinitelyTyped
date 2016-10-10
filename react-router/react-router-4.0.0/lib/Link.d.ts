import * as React from 'react'

 namespace LinkModule{

    interface LinkProps extends React.HTMLAttributes<Link>,React.Props<Link>{
        to:string|any,
        replace?:boolean,
        activeStyle?:any,
        activeClassName?:string,
        location?:any,
        activeOnlyWhenExact?:boolean,
        isActive?:any,
        children?:any,
        style?:any,
        className?:string,
        target?:string,
        onClick?:any
    }

    export interface Link extends React.ComponentClass<LinkProps>{}
}

declare const Link:LinkModule.Link;
export default Link;




