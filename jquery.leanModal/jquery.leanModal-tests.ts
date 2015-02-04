/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="jquery.leanModal.d.ts" />

class LeanModalOptions implements JQueryLeanModalOption {
    top : number;
    overlay : number;
    closeButton: string;
}

$.leanModal();

var leanModalOptions = new LeanModalOptions;

leanModalOptions.top = 200;
leanModalOptions.overlay = 0.5;
leanModalOptions.closeButton = ".close_button";

$.leanModal(leanModalOptions);
