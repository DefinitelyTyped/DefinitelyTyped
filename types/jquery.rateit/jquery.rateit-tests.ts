var rateit_simple = $('.rateit').rateit();

var rateit_properties_font = $('.rateit').rateit({
    backingfld: '#backingfield',
    icon: '@',
    mode: 'font',
    ispreset: false,
    max: 5,
    min: 0,
    readonly: false,
    resetable: false,
    step: 0.5,
    value: 2
});

var rateit_properties_bg = $('.rateit').rateit({
    backingfld: '#backingfield',
    mode: 'bg',
    ispreset: false,
    max: 5,
    min: 0,
    readonly: false,
    resetable: false,
    step: 0.5,
    value: 2,
    starheight: 16,
    starwidth: 16
});

//getters
var val : number = rateit_properties_bg.rateit('value');
var min : number = rateit_properties_bg.rateit('min');
var max : number = rateit_properties_bg.rateit('max');
var readonly :boolean = rateit_properties_bg.rateit('readonly');
var ispreset :boolean = rateit_properties_bg.rateit('ispreset');


//setters
rateit_properties_bg.rateit('value',4);
rateit_properties_bg.rateit('min',0);
rateit_properties_bg.rateit('max',6);
rateit_properties_bg.rateit('readonly',true);
rateit_properties_bg.rateit('ispreset',false);

//reset it
rateit_properties_bg.rateit('reset');
