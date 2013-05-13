/// <reference path="angular.d.ts" />

///////////////////////////////////////////////////////////////////////////
// Module
// see http://docs.angularjs.org/api/ng.$compileProvider#directive
// and http://docs.angularjs.org/guide/directive
///////////////////////////////////////////////////////////////////////////

interface IDirective{
    priority?:number;
    template?:string;
    templateUrl?:string;
    replace?:bool;
    transclude?:bool;
    restrict?:string;
    scope?:bool;
    link?:Function;
    compile?:Function;
}

interface IModule{
    directive(name: string, directiveFactory: (...params)=> IDirective): IModule;
}
