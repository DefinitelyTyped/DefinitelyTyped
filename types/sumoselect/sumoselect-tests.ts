// basic usage
$('.SlectBox').SumoSelect();

// with option
$('.SlectBox').SumoSelect({
    placeholder: 'Select Here',
    csvDispCount: 3,
    captionFormat: '{0} Selected',
    captionFormatAllSelected: '{0} all selected!',
    floatWidth: 500,
    forceCustomRendering: false,
    nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
    outputAsCSV: false,
    csvSepChar: ',',
    okCancelInMulti: true,
    isClickAwayOk: false,
    triggerChangeCombined: true,
    selectAll: false,
    search: false,
    searchText: 'Search...',
    searchFn: (haystack, needle) => haystack.toLowerCase().indexOf(needle.toLowerCase()) < 0,
    noMatch: 'No matches for "{0}"',
    prefix: '',
    locale: ['OK', 'Cancel', 'Select All'],
    up: false,
    showTitle: true,
    max: null,
    renderLi: (li, originalOption) => li,
});

// events
$('select.SlectBox').on('sumo:opened', (sumo) => {
    // Do stuff here
    console.log('Drop down opened', sumo);
});

// methods
$('select.SlectBox')[0].sumo.unload();
$('select.SlectBox')[0].sumo.add('india');
$('select.SlectBox')[0].sumo.add('india', 3);
$('select.SlectBox')[0].sumo.add('india', 'Indian');
$('select.SlectBox')[0].sumo.add('india', 'Indian', 0);
$('select.SlectBox')[0].sumo.remove(2);
$('select.SlectBox')[0].sumo.removeAll();
$('select.SlectBox')[0].sumo.find('india');
$('select.SlectBox')[0].sumo.selectItem(2);
$('select.SlectBox')[0].sumo.selectItem('volo');
$('select.SlectBox')[0].sumo.unSelectItem(2);
$('select.SlectBox')[0].sumo.unSelectItem('volvo');
$('select.SlectBox')[0].sumo.disableItem(2);
$('select.SlectBox')[0].sumo.enableItem(2);
$('select.SlectBox')[0].sumo.selectAll();
$('select.SlectBox')[0].sumo.unSelectAll();
$('select.SlectBox')[0].sumo.enable();
$('select.SlectBox')[0].sumo.disable();
$('select.SlectBox')[0].sumo.unSelectAll();
$('select.SlectBox')[0].sumo.reload();
