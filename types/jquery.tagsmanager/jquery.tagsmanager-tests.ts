var options: ITagsManagerOptions = {
    prefilled: ["Pisa", "Rome"],
    CapitalizeFirstLetter: true,
    preventSubmitOnEnter: true,
    typeahead: true,
    typeaheadAjaxSource: null,
    typeaheadSource: ["Pisa", "Rome", "Milan", "Florence", "New York", "Paris", "Berlin", "London", "Madrid"],
    delimeters: [44, 188, 13],
    backspace: [8],
    blinkBGColor_1: '#FFFF9C',
    blinkBGColor_2: '#CDE69C',
    hiddenTagListName: 'hiddenTagListA'
};

jQuery(".tagManager").tagsManager(options);
jQuery(".tagManager").tagsManager('popTag');
jQuery(".tagManager").tagsManager('pushTag', 'I_am_a_new_tag');
jQuery(".tagManager").tagsManager('empty');
