

///<reference path="../jquery/jquery.d.ts" />

interface JQueryLeanModalOption {
    top : number;
    overlay : number;
    closeButton : String;
}

interface JQueryLeanModalStatic {
    ():any;
    (JQueryLeanModalOption):any;
}

interface JQueryStatic {
    leanModal(): JQueryLeanModalStatic;
    leanModal(JQueryLeanModalOption): JQueryLeanModalStatic;
}

interface JQuery {
    leanModal(): JQueryLeanModalStatic;
    leanModal(JQueryLeanModalOption): JQueryLeanModalStatic;
}