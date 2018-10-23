// server post and response
$('#username').editable({
    success: function(response : any, newValue : any) {
        if(response.status == 'error') return response.msg; //msg will be shown in editable form
    }
});

// no post to the server
$('#username').editable({
    type: 'text',
    title: 'Enter username',
    success: function(response : any, newValue : any) {
        // update view model
    }
});

// text
$("#username").editable({
    url: "/post",
    title: "Enter username"
});

// text area
$('#comments').editable({
    url: '/post',
    title: 'Enter comments',
    rows: 10
});

// select
$("#status").editable({
    value: 2,
    source: [
          {value: 1, text: 'Active'},
          {value: 2, text: 'Blocked'},
          {value: 3, text: 'Deleted'}
       ]
});

// date
$('#dob').editable({
    format: 'yyyy-mm-dd',
    viewformat: 'dd/mm/yyyy',
    datepicker: {
      weekStart: 1
    }
});

// datetime
$('#last_seen').editable({
    format: 'yyyy-mm-dd hh:ii',
    viewformat: 'dd/mm/yyyy hh:ii',
    datetimepicker: {
        weekStart: 1
     }
});

// dateui
$('#dob').editable({
    format: 'yyyy-mm-dd',
    viewformat: 'dd/mm/yyyy',
    datepicker: {
        firstDay: 1
     }
});

// combodate
$('#dob').editable({
    format: 'YYYY-MM-DD',
    viewformat: 'DD.MM.YYYY',
    template: 'D / MMMM / YYYY',
    combodate: {
          minYear: 2000,
          maxYear: 2015,
          minuteStep: 1
     }
});

// checklist
$('#options').editable({
    value: [2, 3],
    source: [
          {value: 1, text: 'option1'},
          {value: 2, text: 'option2'},
          {value: 3, text: 'option3'}
       ]
});

// select2 remote source (advanced)
$('#country').editable({
    select2: {
        placeholder: 'Select Country',
        allowClear: true,
        minimumInputLength: 3,
        id: function (item : any) {
            return item.CountryId;
        },
        ajax: {
            url: '/getCountries',
            dataType: 'json',
            data: function (term : any, page : any) {
                return { query: term };
            },
            results: function (data : any, page : any) {
                return { results: data };
            }
        },
        formatResult: function (item : any) {
            return item.CountryName;
        },
        formatSelection: function (item : any) {
            return item.CountryName;
        },
        initSelection: function (element : any, callback : any) {
            return $.get('/getCountryById', { query: element.val() }, function (data : any) {
                callback(data);
            });
        }
    }
});
