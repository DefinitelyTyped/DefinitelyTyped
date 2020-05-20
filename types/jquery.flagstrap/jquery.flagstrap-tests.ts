class TestObject {

}

$(function () {
    // basic test
    // written in according to basic example from documentation
    var htmlSelect = '<form class="form-horizontal">' +
                    '   <div class="form-group">' +
                    '       <label>Select Country</label><br>' +
                    '       <div class="flagstrap" data-input-name="country"></div>' +
                    '   </div>' +
                    '</form>';
    $('body').html(htmlSelect);
    $('#flagstrap').flagStrap();

    // for this test we expect more than 30 thousands of characters
    console.log('characters count: ' + $('#flagstrap').html().length + '\n' +  $('#flagstrap').html());

    // options test
    // options -> data attributes
    // written in according to options -> data attributes example from documentation
    htmlSelect = '<form>' +
                '   <div class="form-group">' +
                '       <label>Select Country</label><br>' +
                '       <div id="flagstrap2"' +
                '           data-input-name="country2"' +
                '           data-selected-country="DE"' +
                '           data-button-size="btn-md"' +
                '           data-button-type="btn-default"' +
                '           data-scrollable-height="250px"' +
                '           data-scrollable="true">' +
                '       </div>' +
                '   </div>' +
                '</form>';
    $('body').html(htmlSelect);
    $('#flagstrap2').flagStrap();

    console.log('\n\ncharacters count: ' + $('#flagstrap2').html().length + '\n' +  $('#flagstrap2').html());

    // options test
    // options -> instance options
    // written in according to options -> instance options example from documentation
    htmlSelect = '<form>' +
                '   <div class="form-group">' +
                '       <label>Select Country</label><br>' +
                '       <div id="flagstrap3"></div>' +
                '   </div>' +
                '</form>';
    $('body').html(htmlSelect);
    $('#flagstrap3').flagStrap({
        countries: {
            "AU": "Australia",
            "GB": "United Kingdom",
            "US": "United States"
        },
        inputName: 'country',
        buttonSize: "btn-lg",
        buttonType: "btn-primary",
        labelMargin: "20px",
        scrollable: false,
        scrollableHeight: "350px",
        onSelect: function(value: any, element: any) {
            //
        },
        placeholder: {
            value: "",
            text: "Please select a country"
        }
    });

    console.log('\n\ncharacters count: ' + $('#flagstrap3').html().length + '\n' +  $('#flagstrap3').html());
})

