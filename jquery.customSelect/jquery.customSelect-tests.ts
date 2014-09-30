/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="jquery.customSelect.d.ts" />

class CustomSelectOptions implements JQueryCustomSelectOption {
    "customClass": string;
    "mapClass": boolean;
    "mapStyle": boolean;
}

var customSelectOptions = new CustomSelectOptions();

customSelectOptions.customClass = "myOwnClassName";
customSelectOptions.mapClass = true;
customSelectOptions.mapStyle = true;

$('select').customSelect(customSelectOptions);
